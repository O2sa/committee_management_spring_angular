import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ApiService } from 'src/app/core/services/api.service';
import { Column } from 'src/app/shared/components/table/model/column.model';
import { TableComponent } from 'src/app/shared/components/table/table.component';

@Component({
  selector: 'app-members',
  standalone: true,
  imports: [TableComponent],
  templateUrl: './members.component.html',
  styleUrl: './members.component.scss',
  providers: [HttpClient, ApiService],
})




export class MembersComponent {

  columns: Column[] = [
    {
      accessor: 'name',
      type: 'text',
      edit: true,
      header: 'name',
    },
    {
      accessor: 'gender',
      type: 'model',
      api: 'constants',
      displayField: 'name',
      edit: true,
      header: 'الجنس',
    }, 
 

      {
      accessor: 'sociality',
      type: 'model',
      api: 'constants',
      displayField: 'name',
      edit: true,
      header: 'الحالة الإجتماعية',
    },    
      {
      accessor: 'idType',
      type: 'model',
      api: 'constants',
      displayField: 'name',
      edit: true,
      header: 'نوع الهوية',
    },    
      {
      accessor: 'accommodationType',
      type: 'model',
      api: 'constants',
      displayField: 'name',
      edit: true,
      header: 'نوع الإيجار',
    },    
      {
      accessor: 'qualification',
      type: 'model',
      api: 'constants',
      displayField: 'name',
      edit: true,
      header: 'المؤهل',
    },    
      {
      accessor: 'contactPersonRelation',
      type: 'model',
      api: 'constants',
      displayField: 'name',
      edit: true,
      header: 'أحد الأقارب',
    },   
    
    {
      accessor: 'workType',
      type: 'model',
      api: 'constants',
      displayField: 'name',
      edit: true,
      header: 'نوع العمل',
    },  
    
    {
      accessor: 'idDate',
      type: 'date',
      edit: true,
      header: 'إصدار الهوية',
    }, 
    
    {
      accessor: 'birthDate',
      type: 'date',
      edit: true,
      header: 'تأريخ الميلاد',
    }, 
    
    
    {
      accessor: 'idLocation',
      type: 'text',
      edit: true,
      header: 'جهة إصدار الهوية',
    },      
    {
      accessor: 'birthPlace',
      type: 'text',
      edit: true,
      header: 'مكان الميلاد',
    },      
    {
      accessor: 'workplace',
      type: 'text',
      edit: true,
      header: 'مكان العمل',
    },      
    {
      accessor: 'experience',
      type: 'text',
      edit: true,
      header: 'الخبرة',
    },   
    
    
    {
      accessor: 'contactPerson',
      type: 'text',
      edit: true,
      header: 'القريب',
    },    
    

    {
      accessor: 'phone',
      type: 'number',
      edit: true,
      header: 'رقم الهاتف الثابت',
    },      
    
    {
      accessor: 'mobile',
      type: 'number',
      edit: true,
      header: 'الهاتف المحمول',
    },      
    
    {
      accessor: 'contactPersonMobile',
      type: 'number',
      edit: true,
      header: 'جهة إتصال القريب',
    },      
    
    {
      accessor: 'idNumber',
      type: 'number',
      edit: true,
      header: 'رقم الهوية',
    },  
  ];
}
