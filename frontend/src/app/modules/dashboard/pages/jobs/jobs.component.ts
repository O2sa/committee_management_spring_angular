import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ApiService } from 'src/app/core/services/api.service';
import { Column } from 'src/app/shared/components/table/model/column.model';
import { TableComponent } from 'src/app/shared/components/table/table.component';

@Component({
  selector: 'app-jobs',
  standalone: true,
  imports: [TableComponent],
  templateUrl: './jobs.component.html',
  styleUrl: './jobs.component.scss',
  providers: [HttpClient, ApiService],
})
export class JobsComponent {
  columns: Column[] = [
    {
      accessor: 'title',
      type: 'text',
      edit: true,
      header: 'العنوان',
    },
  ];
}
