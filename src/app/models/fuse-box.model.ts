import Fuse from './fuse.model';

export interface IFuseBox {
  name: string;
  fuses: Fuse[];
  id?: string;
  description?: string;
  ownerId?: string;
  rows?: number;
}

export default class FuseBox implements IFuseBox {
  public name: string;
  public fuses: Fuse[];
  public id?: string | undefined;
  public description?: string;
  public ownerId?: string;
  public rows?: number;

  constructor(data: IFuseBox) {
    this.id = data.id;
    this.name = data.name;
    this.fuses = this.getFuses(data);
    this.description = data.description;
    this.ownerId = data.ownerId;
    this.rows = data.rows;
  }

  private getFuses(data: IFuseBox): Fuse[] {
    // ToDo
    return [];
  }
}
