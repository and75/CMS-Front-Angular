import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { PaginationParams, PaginatedResponse } from '../../core/models/pagination.model';
import { TeamMember, TeamMemberCreateInput, TeamMemberUpdateInput, TeamMemberStatus } from '../../core/models/team.model';

@Injectable({
  providedIn: 'root'
})
export class AdminTeamService {
  private apiUrl = `${environment.apiUrl}/admin/team`;

  constructor(private http: HttpClient) {}

  getList(params: PaginationParams): Observable<PaginatedResponse<TeamMember>> {
    return this.http.get<PaginatedResponse<TeamMember>>(this.apiUrl, { params: { ...params } as any });
  }

  getById(id: string): Observable<TeamMember> {
    return this.http.get<TeamMember>(`${this.apiUrl}/${id}`);
  }

  create(member: TeamMemberCreateInput): Observable<TeamMember> {
    return this.http.post<TeamMember>(this.apiUrl, member);
  }

  update(id: string, member: TeamMemberUpdateInput): Observable<TeamMember> {
    return this.http.put<TeamMember>(`${this.apiUrl}/${id}`, member);
  }

  delete(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  updateStatus(id: string, status: TeamMemberStatus): Observable<TeamMember> {
    return this.http.patch<TeamMember>(`${this.apiUrl}/${id}/status`, { status });
  }
}