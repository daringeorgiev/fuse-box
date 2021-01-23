import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { select, Store } from '@ngrx/store';

import FuseBoxState from '../../state/fuse-box.state';
import * as FuseBoxActions from '../../state/fuse-box.action';

import FuseBox from 'src/app/models/fuse-box.model';

@Component({
  selector: 'app-fuse-box-list',
  templateUrl: './fuse-box-list.component.html',
  styleUrls: ['./fuse-box-list.component.scss']
})
export class FuseBoxListComponent implements OnInit {
  public fuseBoxes: Observable<FuseBox[]>;
  private fuseBoxesState$: Observable<FuseBoxState>;

  constructor(private store: Store<{ fuseBoxes: FuseBoxState }>) {
    this.fuseBoxesState$ = store.pipe(select('fuseBoxes'));
  }

  ngOnInit(): void {
    this.fuseBoxes = this.fuseBoxesState$.pipe(map((state: FuseBoxState) => state.fuseBoxes));

    this.store.dispatch(FuseBoxActions.beginGetFuseBoxes());
  }

  public createFuseBox(): void {
    this.store.dispatch(FuseBoxActions.beginCreateFuseBox({
      payload: new FuseBox({
        name: 'da',
        fuses: []
      })
    }));
  }

}
