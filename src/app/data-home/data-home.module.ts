import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { DataHomeComponent } from './data-home.component';
import { DataHomeRoutingModule } from './data-home-routing.module';



@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    DataHomeRoutingModule
  ],
  declarations: [DataHomeComponent]
})
export class DataHomeModules { }
