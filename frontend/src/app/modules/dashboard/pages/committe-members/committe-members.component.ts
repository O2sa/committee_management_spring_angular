import { Component } from '@angular/core';
import { Column } from 'src/app/shared/components/table/model/column.model';
import { TableComponent } from 'src/app/shared/components/table/table.component';

@Component({
  selector: 'app-committe-members',
  standalone: true,
  imports: [TableComponent],
  templateUrl: './committe-members.component.html',
  styleUrl: './committe-members.component.scss',
})
export class CommitteMembersComponent {
  columns: Column[] = [
    {
      accessor: 'member',
      type: 'model',
      displayField: 'name',
      api: 'members',
      edit: true,
      header: 'العضو',
    },
    {
      accessor: 'committe',
      type: 'model',
      displayField: 'name',

      
      api: 'committes',
      edit: true,
      header: 'اللجنة ',
    },
  ];
}
