import { MatDialogConfig } from '@angular/material/dialog';

export enum SubPageMode {
  pushed = 'pushed',
  shifted = 'shifted',
  none = 'none',
}

export class CovalentSideSheetConfig<D = any> extends MatDialogConfig<D> {
  subPageMode?: string = SubPageMode.pushed;
}
