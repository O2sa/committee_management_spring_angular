import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { Product } from '../../../../types';
import { FormBuilder, FormsModule, ReactiveFormsModule, ValidatorFn, Validators } from '@angular/forms';
import { RatingModule } from 'primeng/rating';
import { ButtonModule } from 'primeng/button';
import { ButtonComponent } from '../button/button.component';
import { Column } from '../table/model/column.model';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabel } from 'primeng/floatlabel';
import { DatePicker } from 'primeng/datepicker';
import { Checkbox } from 'primeng/checkbox';
import { Select } from 'primeng/select';
import { InputNumber } from 'primeng/inputnumber';
import { ApiService } from 'src/app/core/services/api.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-edit-popup',
  standalone: true,
  imports: [
    DialogModule,
    CommonModule,
    FormsModule,
    RatingModule,
    InputTextModule,
    ButtonModule,
    ReactiveFormsModule,
    ButtonComponent,
    FloatLabel,
    Select,
    Checkbox,
    DatePicker,
    InputNumber,
  ],
  templateUrl: './edit-popup.component.html',
  styleUrl: './edit-popup.component.scss',
})
export class EditPopupComponent {
  constructor(private formBuilder: FormBuilder, private apiService: ApiService, private http: HttpClient) {}

  @Input() columns: Column[] = [];

  @Input() display: boolean = false;
  @Output() displayChange = new EventEmitter<boolean>();

  @Input() header!: string;

  @Input() item: any = {};

  @Output() confirm = new EventEmitter<any>();

  modelsData: any = {};
  specialCharacterValidator(): ValidatorFn {
    return (control) => {
      const hasSpecialCharacter = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(control.value);

      return hasSpecialCharacter ? { hasSpecialCharacter: true } : null;
    };
  }

  itemForm = this.formBuilder.group({});

  private initializeForm(): void {
    this.columns.forEach((col) => {
      if (col.edit) {
        const validators = [Validators.required];
        this.itemForm.addControl(
          `${col.accessor}${col.type == 'model' ? 'Id' : ''}`,
          this.formBuilder.control('', validators),
        );
        // this.itemForm.controls.
      }
    });
  }

  fetchItems(col: Column) {
    this.apiService
      .get(`http://localhost:8080/api/${col.api}` ?? '', {
        // params: {},
        // responseType: 'json',
      })
      .subscribe({
        next: (data: any) => {
          console.log(data);
          // this.totalRecords = products.total;
          this.modelsData[col.api ? col.api : 'items'] = data;
        },
        error: (error) => {
          console.error(error);
        },
      });
  }
  ngOnInit(): void {
    this.initializeForm();
    this.columns.forEach((val) => {
      const key = val.api;
      if (val.type == 'model' && key && !(key in this.modelsData)) this.fetchItems(val);
    });
  }
  ngOnChanges() {
    const values: any = {};
    this.columns.forEach((col) => {
      if (col.edit) {
        if (col.type == 'model') {
          values[`${col.accessor}Id`] = this.item[col?.accessor]?.id;
        } else values[`${col.accessor}`] = this.item[col.accessor] ? this.item[col?.accessor] : '';
      }
    });

    this.itemForm.patchValue(values);
    console.log('form value', this.itemForm.value);
    console.log('item', this.item);
  }

  onConfirm() {
    // const { name, image, price, rating } = this.productForm.value;

    if (this.itemForm.valid) {
      this.confirm.emit(this.itemForm.value);
      this.display = false;
      this.displayChange.emit(this.display);
    }
  }

  onCancel() {
    this.display = false;
    this.displayChange.emit(this.display);
  }
}
