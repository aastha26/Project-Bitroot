import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';
import { ApidataService} from '../apidata.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  users:any;
  constructor(public dialog: MatDialog, private userData:ApidataService) { 
    this.userData.users().subscribe((data)=>{

    
      console.warn("data",data);
      this.users=data;
      })
  
  }

  open() {
    this.dialog.open(ModalComponent);
  }

  ngOnInit(): void {
  }

}
