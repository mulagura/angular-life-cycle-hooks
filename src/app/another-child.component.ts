import { Component, OnInit,OnChanges,SimpleChanges, Input } from '@angular/core';

@Component({
  selector: 'app-another-child',
  templateUrl: './another-child.component.html',
  styleUrls: ['./another-child.component.css']
})
export class AnotherChildComponent implements OnInit {

  @Input('data1') message1:any;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(val:SimpleChanges){
    console.log('--ngOnChanges implementation--',val); 
    console.log(val.message1.currentValue,val.message1.previousValue,val.message1.firstChange);
  }

}
