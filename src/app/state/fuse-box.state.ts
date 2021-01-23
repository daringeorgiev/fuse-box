import FuseBox from '../models/fuse-box.model';

export default class FuseBoxState {
  loading: boolean;
  loaded: boolean;
  fuseBoxes: FuseBox[];
  error: any;
}

export const initializeState = (): FuseBoxState => {
  return ({
    loading: false,
    loaded: false,
    fuseBoxes: [],
    error: null
  });
};
