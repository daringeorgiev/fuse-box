import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';

import * as FuseBoxActions from '../state/fuse-box.action';
import { FuseBoxService } from '../services/fuse-box.service';
import FuseBox from '../models/fuse-box.model';
import { catchError, map, mergeMap } from 'rxjs/operators';

@Injectable()
export class FuseBoxEffects {
  constructor(private fuseBoxService: FuseBoxService, private action$: Actions) { }

  public getFuseBoxes$: Observable<Action> = createEffect(() =>
    this.action$.pipe(
      ofType(FuseBoxActions.beginGetFuseBoxes),
      mergeMap(() =>
        this.fuseBoxService.getAllFuseBoxes().pipe(
          map((data: FuseBox[]) => {
            return FuseBoxActions.successGetFuseBoxes({ payload: data });
          }),
          catchError((error: Error) => {
            return of(FuseBoxActions.errorFuseBoxAction(error));
          })
        )
      )
    )
  );

  public createFuseBoxe$: Observable<Action> = createEffect(() =>
    this.action$.pipe(
      ofType(FuseBoxActions.beginCreateFuseBox),
      mergeMap((action) =>
        this.fuseBoxService.createFuseBox(action.payload).pipe(
          map((data: FuseBox) => {
            return FuseBoxActions.successCreateFuseBox({ payload: data });
          }),
          catchError((error: Error) => {
            return of(FuseBoxActions.errorFuseBoxAction(error));
          })
        )
      )
    )
  );
}
