import { Injectable } from '@angular/core';
import { BehaviorSubject,  Observable } from 'rxjs';

interface Processing {
  level: string;
  id: string | number;
}

@Injectable()
export class ProcessingService {

  private _processingList: BehaviorSubject<Processing[]> = new BehaviorSubject([]);
  public processingList: Observable<Processing[]> = this._processingList.asObservable();

  constructor() { }

  get value() {
    return this._processingList.getValue();
  }

  add({ id= 0, level }= { id, level }) {
    if ( level === undefined) { return; }
    this._processingList.next(this.value.concat([
      { level, id }
    ]));
  }

  del({ id, level }= { id, level }) {
    if (id === undefined || level === undefined) { return; }
    const next = this.value.filter(item => {
      if (item.id !== id || item.level !== level) { return true; }
      return false;
    });
    this._processingList.next(next);
  }

  clearAll() {
    this._processingList.next([]);
  }

}


