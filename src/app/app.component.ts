import { style } from '@angular/animations';
import { AfterViewInit, Component, DoCheck, ElementRef, HostListener, OnChanges, OnInit, ViewChild } from '@angular/core';
declare var $: any;
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  sai: any
  arr: any = [];
  contentDiv: any
  currentQuery: any = '';
  @HostListener('window:keyup', ['$event'])
  KeyUp(event: KeyboardEvent) {
    if (event.keyCode == 13) {
      this.sendValues();
    }
  };
  ngAfterViewInit() {

  }

  sendValues() {
    var contentDiv = document.getElementById("contentWriter");
    if (contentDiv) {
      this.arr.push(contentDiv.innerText);
      contentDiv.innerHTML = " ";
      this.callFunc();
    }
  }
  callFunc() {
    var showDiv = document.getElementById("showDiv");
    if (showDiv) {
      for (var i = 0; i < this.arr.length; i++) {
        const closeBtn = document.createElement('button');
        closeBtn.type = "button";
        closeBtn.innerHTML = "&times;" //String.fromCharCode("&times;");
        closeBtn.setAttribute('style', 'padding: 0px;width: 13px;height: 10px;border: 0px;border-radius: 10px;cursor: pointer;background-color: white;color: red;')
        closeBtn.onclick = function () {
          node.setAttribute('style', 'display:none;');   
        };
        var node = document.createElement("div");
        var textnode = document.createTextNode(this.arr);
        node.appendChild(textnode);
        node.append(closeBtn);
        node.setAttribute('style', 'display:inline; border:2px solid #63666b; border-radius:10px;position: relative;top: 5px;margin: 2px;padding-left: 4px;');
        showDiv.appendChild(node);
      }
      this.arr = [];
    }
  }
}

