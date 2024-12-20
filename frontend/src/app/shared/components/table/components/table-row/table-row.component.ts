import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { Column } from '../../model/column.model';

@Component({
  selector: '[app-table-row]',
  standalone: true,
  imports: [FormsModule, AngularSvgIconModule],
  templateUrl: './table-row.component.html',
  styleUrl: './table-row.component.scss',
})
export class TableRowComponent {
  @Input() item: any = <any>{};
  @Input() columns: Column[] = [];
  @Output() edit: EventEmitter<any> = new EventEmitter<any>();
  @Output() delete: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}

  editItem() {
    this.edit.emit(this.item);
  }

  deleteItem() {
    this.delete.emit(this.item);
  }
  getCellValue(col: Column) {
    let value = '';
    switch (col.type) {
      case 'model':
        const field = col.displayField && this.item[col.accessor] ? this.item[col.accessor][col.displayField] : '';
        return field;

      default:
        return this.item[col.accessor] ?? '';
    }
  }

  ngOnInit() {}
}
