import { Component,OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public msg:string = 'Parent-Family';
  public msg1:string = 'Parent-Family to another child component';


 
}
