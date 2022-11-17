import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../core/core.module';
import { MainPageComponent } from './main-page.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [MainPageComponent],
  imports: [CommonModule, CoreModule, SharedModule, RouterModule],
  exports: [MainPageComponent],
})
export class MainPageModule {}
