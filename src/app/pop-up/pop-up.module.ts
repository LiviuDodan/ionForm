import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { PopUpComponent } from './pop-up.component';
import { PopUpRoutingModule } from './pop-up-routing.module';
import {MatDialogModule} from '@angular/material/dialog';



@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    MatDialogModule,
    PopUpRoutingModule
  ],
  declarations: [PopUpComponent]
})
export class PopUpModules { }
