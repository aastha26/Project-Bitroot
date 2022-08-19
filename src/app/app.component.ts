import { Component } from '@angular/core';
import { ApidataService} from './apidata.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Bitroot-project';
  users:any;
  constructor(private userData:ApidataService)
  {
    this.userData.users().subscribe((data)=>{

    
    console.warn("data",data);
    this.users=data;
    })

  }
}
