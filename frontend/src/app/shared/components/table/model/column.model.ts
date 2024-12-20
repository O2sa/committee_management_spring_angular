export interface Column {
  accessor: string;
  header: string;
  edit: boolean;
  type: string;
  api?: string ;
  displayField?: string;
  model?: Object;
}
