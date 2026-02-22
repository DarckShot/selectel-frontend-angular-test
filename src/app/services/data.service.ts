import { Injectable, signal } from '@angular/core';
import data from '../data/data.json';
import { DataType } from '../data/data.types';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private dataSignal = signal<DataType>(data);

  readonly data = this.dataSignal.asReadonly();
}
