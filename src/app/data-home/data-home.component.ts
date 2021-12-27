import { PopUpComponent } from './../pop-up/pop-up.component';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-data-home',
  templateUrl: './data-home.component.html',
  styleUrls: ['./data-home.component.scss'],
})
export class DataHomeComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit() {

  }

    test(){
      const popup=this.dialog.open(PopUpComponent);

      popup.afterClosed().subscribe(data => {
        console.log('sa');
      });
    }
}
