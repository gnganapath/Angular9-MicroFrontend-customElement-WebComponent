import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit{
  title = 'parentApp';

  
  childAppPath = 'http://localhost:4200/assets/childApp/main.js';
  constructor(){


  }

  ngOnInit() {
    this.loadScript(this.childAppPath);
   
  }

  loadScript(scriptPath): void {

    var alreadyLoaded = false;

    for (var scriptIndex in document.scripts) {
     // console.log(scriptPath, scriptIndex, document.scripts[scriptIndex].src)
      if (!alreadyLoaded && scriptPath === document.scripts[scriptIndex].src) {
        alreadyLoaded = true;
        break;
      }
    }
    if (!alreadyLoaded) {
      const content = document.getElementById('content');
      const script = document.createElement('script');
      script.src = scriptPath;
      content.appendChild(script);
    }

  }
}
