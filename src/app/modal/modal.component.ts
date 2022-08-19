import { Component, OnInit } from '@angular/core';
import { ApidataService} from '../apidata.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  users:any;

  constructor(private userData:ApidataService)
  {
    this.userData.users().subscribe((data)=>{

    
      console.warn("data",data);
      this.users=data;
      })
  
  }



  ngOnInit(): void {
  }

}
