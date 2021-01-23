import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { take } from 'rxjs/operators';

import FuseBox from '../models/fuse-box.model';

// ToDo
// Use a real API
@Injectable()
export class FuseBoxService {
  private mockedData: BehaviorSubject<FuseBox[]> = new BehaviorSubject([] as FuseBox[]);

  constructor() {
    this.mockedData.next([
      new FuseBox({ id: 'id-0', name: 'da1', fuses: [] }),
      new FuseBox({ id: 'id-1', name: 'da2', fuses: [] }),
      new FuseBox({ id: 'id-2', name: 'da3', fuses: [] })
    ]);
  }

  /**
   * getAllFuseBoces
   */
  public getAllFuseBoxes(): Observable<FuseBox[]> {
    return this.mockedData.asObservable();
  }

  /**
   * createFuseBox
   */
  public createFuseBox(fuseBox: FuseBox): Observable<FuseBox> {
    this.mockedData.pipe(take(1))
      .subscribe((data) => {
        const fb = Object.assign({}, fuseBox, {id: 'id-' + data.length});
        const newData = [...data];
        newData.push(new FuseBox(fb));

        this.mockedData.next(newData);
      });

    return of(fuseBox);
  }
}
