// shared-data.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  private sharedObjectSource = new BehaviorSubject<any>(null);
  sharedObject$ = this.sharedObjectSource.asObservable();

  updateSharedObject(data: any) {
    this.sharedObjectSource.next(data);
  }
}
