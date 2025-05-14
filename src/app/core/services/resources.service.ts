import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ResourcesData } from '../models/resources.model';
import { MockDataResources } from '../mock/resources.mock-db';

@Injectable({
  providedIn: 'root'
})
export class ResourcesService {


  getResourcesData(): Observable<ResourcesData> {
    return of(MockDataResources);
  }
}