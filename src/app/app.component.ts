import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  text:any;

  file: File;
  onChange(event: EventTarget) {

    let eventObj: MSInputMethodContext = <MSInputMethodContext>event;
    let target: HTMLInputElement = <HTMLInputElement>eventObj.target;
    let files: FileList = target.files;
    this.file = files[0];
    alert(this.file.name);

    let reader = new FileReader();
    reader.onload = file => {
      let contents: any = file.target;
      this.text = contents.result;
      alert(this.text);
    }
    reader.readAsText(this.file);


  }

  doAnythingWithFile() {
  }
}

// reader = new FileReader();
// reader.onload = function(e) {
//   bfile = e.target.result
//   alert(bfile);   // this shows bfile
// }
// reader.readAsText(file);
