import { Component } from '@angular/core';
import { Column } from 'src/app/shared/components/table/model/column.model';
import { TableComponent } from 'src/app/shared/components/table/table.component';

@Component({
  selector: 'app-committes',
  standalone: true,
  imports: [TableComponent],
  templateUrl: './committes.component.html',
  styleUrl: './committes.component.scss',
})
export class CommittesComponent {
  initialValues: any = {
    image: '',
    name: '',
    rating: 0,
    price: '',
  };
  columns: Column[] = [
    {
      accessor: 'name',
      type: 'text',
      edit: true,
      header: 'الاسم',
    },
    {
      accessor: 'type',
      type: 'model',
      displayField: 'name',
      api: 'committes',
      edit: true,
      header: 'النوع',

    },
    // {
    //   accessor: 'parent',
    //   type: 'model',
    //   displayField: 'name',
    //   api: 'commites',
    //   edit: true,
    //   header: 'اللجنة الأب',
    // },
  ];
}
