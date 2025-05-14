import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ApiService } from '../services/api.service';
import { PaginationParams, PaginatedResponse } from '../../core/models/pagination.model';
import { environment } from '../../../environments/environment';
import { TeamMember } from '../models/team.model';
import { mockTeamMembers } from '../mock/team.mock-db';

@Injectable({
  providedIn: 'root'
})
export class TeamService {


  constructor(private apiService: ApiService) {}


  getList(params: PaginationParams): Observable<PaginatedResponse<TeamMember>> {
    if (!environment.production) {
      return this.getMockTeamMembers(params);
    }
    return this.apiService.getList<TeamMember>('team', params);
  }

  getDetail(slug: string): Observable<TeamMember> {
    if (!environment.production) {
      const member = mockTeamMembers.find(member => member.slug === slug);
      if (!member) {
        throw new Error(`Team member with id ${slug} not found`);
      }
      return of(member);
    }
    return this.apiService.getDetail<TeamMember>('team', slug);
  }

  
  private getMockTeamMembers(params: PaginationParams): Observable<PaginatedResponse<TeamMember>> {
    let filteredMembers = [...mockTeamMembers];

    if (params.search) {
      const searchLower = params.search.toLowerCase();
      filteredMembers = filteredMembers.filter(member => 
        member.name.toLowerCase().includes(searchLower) ||
        member.role.toLowerCase().includes(searchLower) ||
        member.bio.toLowerCase().includes(searchLower)
      );
    }

    if (params.sort) {
      filteredMembers.sort((a, b) => {
        let aValue = a[params.sort as keyof TeamMember];
        let bValue = b[params.sort as keyof TeamMember];
        
        const comparison = String(aValue).localeCompare(String(bValue));
        return params.order === 'desc' ? -comparison : comparison;
      });
    }

    const total = filteredMembers.length;
    const start = (params.page - 1) * params.limit;
    const items = filteredMembers.slice(start, start + params.limit);
    const totalPages = Math.ceil(total / params.limit);

    return of({
      items,
      total,
      page: params.page,
      limit: params.limit,
      totalPages
    });
  }
}