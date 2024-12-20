import { HttpClient, HttpClientModule, provideHttpClient } from '@angular/common/http';
import { Component, computed, Input, OnInit, signal } from '@angular/core';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { FormsModule } from '@angular/forms';
import { TableHeaderComponent } from './components/table-header/table-header.component';
import { TableFooterComponent } from './components/table-footer/table-footer.component';
import { TableRowComponent } from './components/table-row/table-row.component';
import { TableActionComponent } from './components/table-action/table-action.component';
import { toast } from 'ngx-sonner';
import { Column } from './model/column.model';
import { ApiService } from 'src/app/core/services/api.service';
import { CommonModule } from '@angular/common';
import { EditPopupComponent } from '../edit-popup/edit-popup.component';
import { Product } from 'src/types';
import { apiRoutes } from 'src/app/core/constants/api';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [
    AngularSvgIconModule,
    FormsModule,
    TableHeaderComponent,
    TableFooterComponent,
    TableRowComponent,
    HttpClientModule,
    TableActionComponent,
    CommonModule,
    EditPopupComponent,
  ],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
  providers: [HttpClient, ApiService],
})
export class TableComponent {
  constructor(private apiService: ApiService, private http: HttpClient) {}

  @Input() columns: Column[] = [];
  @Input() header: string = '';

  @Input() apiEndpoint: string = '';

  // @ViewChild('paginator') paginator: Paginator | undefined;

  items: any[] = [];

  // totalRecords: number = 0;
  // rows: number = 12;

  displayEditPopup: boolean = false;
  displayAddPopup: boolean = false;

  toggleEditPopup(item: any) {
    console.log;
    this.selectedItem = item;
    this.displayEditPopup = true;
  }

  toggleDeletePopup(product: any) {
    if (!product.id) {
      return;
    }
    this.deleteProduct(product.id);
  }

  toggleAddPopup() {
    this.displayAddPopup = true;
  }

  selectedItem: any = {};

  onConfirmEdit(product: any) {
    this.editProduct(product, this.selectedItem?.id);
    this.displayEditPopup = false;
  }

  onConfirmAdd(product: any) {
    this.addProduct(product);
    this.displayAddPopup = false;
  }

  // onProductOutput(product: Product) {
  //   console.log(product, 'Output');
  // }

  // onPageChange(event: any) {
  //   this.fetchProducts(event.page, event.rows);
  // }

  // resetPaginator() {
  //   this.paginator?.changePage(0);
  // }

  fetchItems(page: number, perPage: number) {
    this.apiService
      .get(apiRoutes[this.apiEndpoint], {
        params: { page, perPage },
        responseType: 'json',

        headers: {
          Authorization: `Bearer ${'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJvc2FtYSIsImlhdCI6MTczNDY0ODc1OCwiZXhwIjoxNzM0Njg0NzU4fQ.bpBsCkxdcDL5PQjp65RzT7CprRsfNnMROGcFZkdWdtY'}`,
        },
      })
      .subscribe({
        next: (data: any) => {
          console.log(data);
          // this.totalRecords = products.total;
          this.items = data;
        },
        error: (error) => {
          // this.handleRequestError(error);
          console.log('Error caught by the method');
          console.log('Error status:', error.status);
          console.log('Error response:', error);
        },
      });
  }

  editProduct(product: any, id: number) {
    this.apiService.put(`${apiRoutes[this.apiEndpoint]}/${id}`, product, {}).subscribe({
      next: (data) => {
        console.log(data);
        this.fetchItems(0, 10);
        // this.resetPaginator();
      },
      error: (error) => {
        // this.handleRequestError(error);
        console.log('Error caught by the method');
        console.log('Error status:', error.status);
        console.log('Error response:', error);
      },
    });
  }

  deleteProduct(id: number) {
    this.apiService.delete(`${apiRoutes[this.apiEndpoint]}/${id}`, {}).subscribe({
      next: (data) => {
        console.log(data);
        this.fetchItems(0, 10);
        // this.resetPaginator();
      },
      error: (error) => {
        this.handleRequestError(error);
      },
    });
  }

  addProduct(product: any) {
    this.apiService
      .post(`${apiRoutes[this.apiEndpoint]}`, product, {
        headers: {
          Authorization: `Bearer ${'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJvc2FtYSIsImlhdCI6MTczNDY0ODc1OCwiZXhwIjoxNzM0Njg0NzU4fQ.bpBsCkxdcDL5PQjp65RzT7CprRsfNnMROGcFZkdWdtY'}`,
        },
      })
      .subscribe({
        next: (data) => {
          console.log(data);
          this.fetchItems(0, 10);
          // this.resetPaginator();
        },
        error: (error) => {
          this.handleRequestError(error);
        },
      });
  }

  ngOnInit() {
    this.fetchItems(0, 10);
  }

  private handleRequestError(error: any) {
    const msg = 'An error occurred while fetching users. Loading dummy data as fallback.';
    toast.error(msg, {
      position: 'bottom-right',
      description: error.message,
      action: {
        label: 'Undo',
        onClick: () => console.log('Action!'),
      },
      actionButtonStyle: 'background-color:#DC2626; color:white;',
    });
  }
}
