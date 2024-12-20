import { Component } from '@angular/core';
import { Column } from 'src/app/shared/components/table/model/column.model';
import { TableComponent } from 'src/app/shared/components/table/table.component';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [TableComponent],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export class UsersComponent {
  columns: Column[] = [
    {
      accessor: 'fullName',
      type: 'text',
      edit: true,
      header: 'الاسم',
    },
    {
      accessor: 'username',
      type: 'text',
      edit: true,
      header: 'اسم المستخدم',
    },

  ];
}
