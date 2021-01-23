import { Action, createReducer, on, State } from '@ngrx/store';

import FuseBox from '../models/fuse-box.model';
import * as FuseBoxActions from './fuse-box.action';
import FuseBoxState, { initializeState } from './fuse-box.state';

export const intialState = initializeState();

const reducer = createReducer(
  intialState,
  on(FuseBoxActions.getFuseBoxes, state => state),
  on(FuseBoxActions.beginGetFuseBoxes, state => ({ ...state, loading: true, loaded: false })),
  on(FuseBoxActions.successGetFuseBoxes, (state: FuseBoxState, data: { payload: FuseBox[] }) => {
    return { ...state, fuseBoxes: data.payload, loading: false, loaded: true };
  }),

  // ToDo
  // state should be of type FuseBoxState
  on(FuseBoxActions.createFuseBox, (state: any, fuseBox: FuseBox) => {
    return { ...state, fuseBoxes: [...state.fuseBoxes, fuseBox], loading: false, loaded: false, error: null };
  }),

  on(FuseBoxActions.beginCreateFuseBox, (state: FuseBoxState, data: { payload: FuseBox }) => {
    return { ...state, loading: true, loaded: false, error: null };
  }),

  on(FuseBoxActions.successCreateFuseBox, (state: FuseBoxState, data: { payload: FuseBox }) => {
    // return { ...state, fuseBoxes: [...state.fuseBoxes, data.payload], loading: false, loaded: true, error: null };
    return { ...state, loading: false, loaded: true, error: null };
  }),

  on(FuseBoxActions.errorFuseBoxAction, (state: FuseBoxState, error: Error) => {
    console.log('FuseBox error:', error);
    return { ...state, error: Error };
  }),
);

// ToDo
// state should be of type State | undefined
// tslint:disable-next-line:typedef
export function fuseBoxReducer(state: any, action: Action) {
  return reducer(state, action);
}
