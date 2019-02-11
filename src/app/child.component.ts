import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input('data') message:any;

  constructor() { 
    console.log('constructor',this.message);
  }

  ngOnChanges(){
    console.log('ngOnChanges',this.message);
  }

  ngOnInit() {
  console.log('ngOnInit',this.message);
  }

  ngDoCheck(){
    console.log('ngDoCheck',this.message);
  }

  ngAfterContentInit(){
    console.log('ngAfterContentInit',this.message);
  }

  ngAfterContentChecked(){
    console.log('ngAfterContentChecked',this.message);
  }

  ngAfterViewInit(){
    console.log('ngAfterViewInit',this.message);
  }

  ngAfterViewChecked(){
    console.log('ngAfterViewChecked',this.message);
  }

  ngDestroy(){
    console.log('ngDestroy',this.message);
  }

  
}
