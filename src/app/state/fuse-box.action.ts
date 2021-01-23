import { createAction, props } from '@ngrx/store';
import FuseBox from '../models/fuse-box.model';

export const GET_FUSEBOX = '[FuseBox] GET_FUSEBOX';
export const BEGIN_GET_FUSEBOX = '[FuseBox] BEGIN_GET_FUSEBOX';
export const SUCCESS_GET_FUSEBOX = '[FuseBox] SUCCESS_GET_FUSEBOX';
export const CREATE_FUSEBOX = '[FuseBox] CREATE_FUSEBOX';
export const BEGIN_CREATE_FUSEBOX = '[FuseBox] BEGIN_CREATE_FUSEBOX';
export const SUCCESS_CREATE_FUSEBOX = '[FuseBox] SUCCESS_CREATE_FUSEBOX';
export const ERROR_FUSEBOX = '[FuseBox] ERROR';

export const getFuseBoxes = createAction(GET_FUSEBOX);

export const beginGetFuseBoxes = createAction(BEGIN_GET_FUSEBOX);

export const successGetFuseBoxes = createAction(
  SUCCESS_GET_FUSEBOX,
  props<{ payload: FuseBox[] }>()
);

export const createFuseBox = createAction(
  CREATE_FUSEBOX,
  props<FuseBox>()
);


export const beginCreateFuseBox = createAction(
  BEGIN_CREATE_FUSEBOX,
  props<{ payload: FuseBox }>()
);

export const successCreateFuseBox = createAction(
  SUCCESS_CREATE_FUSEBOX,
  props<{ payload: FuseBox }>()
);

export const errorFuseBoxAction = createAction(ERROR_FUSEBOX, props<Error>());
