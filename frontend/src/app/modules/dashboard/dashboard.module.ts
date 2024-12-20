import { NgModule } from '@angular/core';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { TableComponent } from 'src/app/shared/components/table/table.component';

@NgModule({
  imports: [DashboardRoutingModule, TableComponent, HttpClientModule],
  providers: [provideHttpClient()],
})
export class DashboardModule {}
