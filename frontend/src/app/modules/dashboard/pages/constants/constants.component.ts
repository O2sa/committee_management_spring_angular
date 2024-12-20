import { Component } from '@angular/core';
import { Column } from 'src/app/shared/components/table/model/column.model';
import { TableComponent } from 'src/app/shared/components/table/table.component';

@Component({
  selector: 'app-constants',
  standalone: true,
  imports: [TableComponent],
  templateUrl: './constants.component.html',
  styleUrl: './constants.component.scss'
})
export class ConstantsComponent {

  columns: Column[] = [
    {
      accessor: 'name',
      type: 'text',
      edit: true,
      header: 'الاسم',
    },

    {
      accessor: 'code',
      type: 'text',
      edit: true,
      header: 'الكود',
    },

  ];
}
