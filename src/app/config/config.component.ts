import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']
})
export class ConfigComponent implements OnInit {

  public componentlist = [];
  public count = 1;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  addComponent() {
    let item = {
      'id': 'Component_' + this.count,
      'name': 'Component ' + this.count
    }
    this.componentlist.push(item);
    this.count++;
  }

  deleteComponent(i): void {
    const dialogRef = this.dialog.open(DialogContentComponent, {
      width: '500px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.componentlist.splice(i, 1);
      }
    });
  }

}

@Component({
  selector: 'app-dialog',
  templateUrl: 'dialog.html',
})
export class DialogContentComponent { }
