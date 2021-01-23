export interface IFuse {
  id?: string;
  active: boolean;
  ampere: string;
  label?: string;
  type?: string;
}

export default class Fuse implements IFuse {
  public active: boolean;
  public ampere: string;
  public id?: string;
  public label?: string;
  public type?: string;
}
