import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { PopUpComponent } from './pop-up.component';
import { PopUpRoutingModule } from './pop-up-routing.module';



@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    PopUpRoutingModule
  ],
  declarations: [PopUpComponent]
})
export class PopUpModules { }
