import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
    selector: 'home-leftSidebar',
    templateUrl: './app/component/frame/leftSidebar.component.html'
})

export class LeftSidebarComponent implements OnInit {
    constructor() { }

    ngOnInit() { 
         $.App.init();
    }
}