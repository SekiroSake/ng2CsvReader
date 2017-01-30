import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';


  onChange(event: EventTarget) {
    let file: File = null;
    alert("starts to read");
    let text = "";


    let eventObj: MSInputMethodContext = <MSInputMethodContext>event;


    let target: HTMLInputElement = <HTMLInputElement>eventObj.target;


    let files: FileList = target.files;


    file = files[0];
    alert(file.name);




    let reader = new FileReader();

    alert("starts to read2");

    // reader.readAsArrayBuffer(this.file)

    reader.onload = file => {
      alert("starts to read5");
      let contents: any = file.target;
      alert(contents);
      text = contents.result;
      alert(text);
      console.log(text);
    }
    alert("starts to read3");
    reader.readAsText(file);
    alert("starts to read4");



  }
  onClick(event: EventTarget) {
    let eventObj: MSInputMethodContext = <MSInputMethodContext>event;


    let target: HTMLInputElement = <HTMLInputElement>eventObj.target;

    target.value = null
  }



  triggerFile(inputValue: any) {
    var file: File = inputValue.files[0];
    var myReader: FileReader = new FileReader();

    myReader.onloadend = function(e) {
      // you can perform an action with readed data here
      console.log(myReader.result);
      let text = myReader.result;
      alert(text);
    }

    myReader.readAsText(file);

  }
  // do something
  //
  // this.file =fileInput;
  //   alert(this.file.name);
  //     let reader = new FileReader();
  //     reader.onload = file => {
  //       let contents: any = file.target;
  //       text = contents.result;
  //       alert(text);
  //       console.log(text);
  //
  //     }
  //     reader.readAsText(this.file);
  // }

  doAnythingWithFile() {
  }
}

// reader = new FileReader();
// reader.onload = function(e) {
//   bfile = e.target.result
//   alert(bfile);   // this shows bfile
// }
// reader.readAsText(file);
