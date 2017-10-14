import { Component, AfterViewInit } from '@angular/core';
import * as $ from 'jquery';
import Popper from 'popper.js';
window['jQuery'] = $;
window['Popper'] = Popper;
import 'bootstrap';
import '../assets/css/styles.css';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

    ngAfterViewInit() {
      console.log($.fn);
      $(function () {
        $('[data-toggle="popover"]').popover()
      })
    }
}