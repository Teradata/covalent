import { Component, HostBinding } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { slideInUpAnimation } from '../../../../app.animations';
import {
  copyToClipboard,
  formatJSON,
  convertObjectsToCSV,
  convertCSVToJSON,
  downloadCSV,
  downloadJSON,
  downloadObjectsToCSV,
  downloadObjectsToJSON,
  downloadFile,
  readFile,
} from '@covalent/core/common';

@Component({
  selector: 'td-functions',
  templateUrl: './functions.component.html',
  styleUrls: ['./functions.component.scss'],
  animations: [slideInUpAnimation],
})
export class FunctionsDemoComponent {
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('class.td-route-animation') classAnimation = true;
  copyText = 'Lorem Ipsum';
  objects: object[] = [
    { name: 'user1', id: 123 },
    { name: 'user2', id: 234 },
  ];
  objectsString: string;
  csvOutput = '';
  csv = 'name,id\r\nuser1,123\r\nuser2,234\r\n';
  jsonOutput = '';
  json = '[{"name":"user1","id":"123"},{"name":"user2","id":"234"}]';
  fileName = 'sample.txt';
  fileContent = 'Lorem Ipsum';
  mimeType = 'text/plain';
  readFileContent = '';
  clipboardCodeHtml = `
  <form> 
    <div layout="row">
      <mat-form-field flex> 
        <textarea matInput [(ngModel)]="copyText" placeholder="Text to be copied" rows="1" name="copyTextinput"></textarea>
      </mat-form-field>
    </div>
  </form>
  <button mat-raised-button color="none" (click)="doCopyToClipboard()" class="text-upper">
    Copy To Clipboard
  </button>
  `;
  clipboardCodeTypescript = `
  import { copyToClipboard } from '@covalent/core/common'
  
  export class FunctionsDemoComponent {
    copyText: string = 'Lorem Ipsum';
    constructor(private _snackBar: MatSnackBar) {} 
    doCopyToClipboard(): void {
      // Invoke utility function to copy input text to clipboard 
      copyToClipboard(this.copyText);
      // Show snackbar to indicate task complete
      this._snackBar.open('Text copied!', undefined, { duration: 2000, });
    }
  }
  `;
  convertCodeHtml = `
  <h4>Input CSV:</h4> 
  <td-highlight [content]="csv"></td-highlight>
  <button mat-raised-button color="none" (click)="doConvertCSVToJSON()" class="text-upper push-top-sm">
    Convert CSV
  </button>
  <h4>Output JSON:</h4>
  <td-highlight [content]="jsonOutput"></td-highlight> 
  <h4>Input Objects:</h4> 
  <td-highlight [content]="objectsString"></td-highlight>
  <button mat-raised-button color="none" (click)="doConvertObjectsToCSV()" class="text-upper push-top-sm">
    Convert Objects
  </button>
  <h4>Output CSV:</h4>
  <td-highlight[content]="csvOutput"></td-highlight>
  `;
  convertCodeTypescript = `
  import { convertCSVToJSON, convertObjectsToCSV } from '@covalent/core/common'
  export class FunctionsDemoComponent {
    csv: string = 'name,id\r\nuser1,123\r\nuser2,234\r\n'; 
    jsonOutput: string = '';
    objects: object[] = [
      { 'name': 'user1', 'id': 123 }, 
      { 'name': 'user2', 'id': 234 }
    ]; 
    objectsString: string;
    csvOutput: string = ''; 
    constructor(private _snackBar: MatSnackBar) {
      this.objectsString = JSON.stringify(this.objects, undefined, 2); 
    }

    doConvertCSVToJSON(): void { 
      // Invoke utility function to CSV value using 
      // comma as the key separator and carriage return line feed 
      // as the line separator into JSON format. Use two space
      // indent to prettify output JSON. 
      this.jsonOutput = convertCSVToJSON(this.csv,',','\r\n',2); 
      // Show snackbar to indicate task complete 
      this._snackBar.open('Objects converted!', undefined, { duration: 2000, }); 
    }

    doConvertObjectsToCSV(): void { 
      // Invoke utility function to convert objects array using 
      // comma as the key separator and carriage return line feed 
      // as the line separator. 
      this.csvOutput = convertObjectsToCSV(this.objects,',','\r\n'); 
      // Show snackbar to indicate task complete
      this._snackBar.open('Objects converted!', undefined, { duration: 2000, });
    }

  }
  `;
  downloadCodeHtml = `
  <h4>CSV:</h4> 
  <td-highlight [content]="csv"></td-highlight> 
  <button mat-raised-button color="none" (click)="doDownloadCSV()" class="text-upper push-top-sm">
    Download CSV
  </button> 
  <h4>JSON:</h4>
  <td-highlight [content]="json"></td-highlight> 
  <button mat-raised-button color="none" (click)="doDownloadJSON()" class="text-upper push-top-sm">
    Download JSON
  </button> 
  <h4>Objects:</h4> 
  <td-highlight [content]="objectsString"></td-highlight> 
  <button mat-raied-button color="none" (click)="doDownloadObjectsToCSV()" class="text-upper push-top-sm">
    Download To CSV
  </button> 
  <h4>Objects:</h4>
  <td-highlight [content]="objectsString"></td-highlight> 
  <button mat-raised-button color="none" (click)="doDownloadObjectsToJSON()" class="text-upper push-top-sm"> 
    Download To JSON
  </button> 
  <form> 
    <div layout="column"> 
      <mat-form-field flex> 
        <input matInput [(ngModel)]="fileName" placeholder="File name" rows="1" name="fileNameInput">
      </mat-form-field>
      <mat-form-field flex> 
        <textarea matInput [(ngModel)]="fileContent" placeholder="File content" rows="1" name="fileContentInput"></textarea>
      </mat-form-field>
      <mat-form-field flex> 
        <input matInput [(ngModel)]="mimeType" placeholder="Mime type" rows="1" name="mimeTypeInput">
      </mat-form-field>
    </div> 
  </form>
  <button mat-raised-button color="none" (click)="doDownloadFile()" class="text-upper"> 
    Download
  </button>
  `;
  downloadCodeTypescript = `
  import { downloadCSV, downloadJSON, downloadObjectsToCSV, downloadObjectsToJSON, downloadFile } from '@covalent/core/common';
  export class FunctionsDemoComponent { 
    csv: string = 'name,id\r\nuser1,123\r\nuser2,234\r\n';
    json: string = '[
      {"name":"user1","id":"123"},
      {"name":"user2","id":"234"},
    ]'; 
    objects: object[] = [ 
      { 'name': 'user1', 'id': 123 },
      { 'name': 'user2', 'id': 234 } 
    ];
    objectsString: string; fileName: string = 'sample.txt'; 
    fileContent: string = 'Lorem Ipsum'; 
    mimeType: string = 'text/plain'; 
    constructor(private _snackBar: MatSnackBar) { 
      this.objectsString = JSON.stringify(this.objects, undefined, 2); 
    }

    doDownloadCSV(): void { 
      // Invoke utility function to download CSV value into file 
      // with 'text/csv' mime type and '.csv' extension.
      downloadCSV('csvsampledata', this.csv); 
      // Show snackbar to indicate task complete
      this._snackBar.open('CSV downloaded!', undefined, { duration: 2000, });
    }

    doDownloadJSON(): void {
      // Invoke utility function to download JSON into file
      // with 'application/json' mime type and '.json' extension.
      // Request JSON to be prettied. downloadJSON('jsonsampledata', this.json, true, 2); 
      // Show snackbar to indicate task complete 
      this._snackBar.open('JSON downloaded!', undefined, { duration: 2000, });
    }

    doDownloadObjectsToCSV(): void {
      // Invoke utility function to convert objects to CSV value 
      // and download into file with 'text/csv' mime type and 
      // '.csv' extension.   
      downloadObjectsToCSV('objtocsvsampledata', this.objects); 
      // Show snackbar to indicate task complete 
      this._snackBar.open('JSON converted to CSV and downloaded!', undefined, { duration: 2000, });
    } 
    doDownloadObjectsToJSON(): void { 
      // Invoke utility function to convert objects to JSON 
      // and download into file with 'application/json' mime type and 
      // '.json' extension. 
      downloadObjectsToJSON('objtojsonsampledata', this.objects); 
      // Show snackbar to indicate task complete 
      this._snackBar.open('Objects converted to JSON and downloaded!', undefined, { duration: 2000, });
    }
    doDownloadFile(): void { 
      // Invoke utility function to write contents to specified 
      // file with desired mime type. downloadFile(this.fileName, this.fileContent, this.mimeType); 
      // Show snackbar to indicate task complete
      this._snackBar.open('Content downloaded!', undefined, { duration: 2000, }); 
    } 
  }
  `;
  fileCodeHtml = `
  <button mat-raised-button class="text-upper" color="primary" (click)="fileInput.click()">
    Choose File 
    <input #fileInput type="file" (change)="doReadFile($event)" style="display:none"/> 
  </button> 
  <h4>File Content:</h4> 
  <td-highlight [content]="readFileContent"></td-highlight>
  `;
  fileCodeTypescript = `
  import { readFile } from '@covalent/core/common'
  export class FunctionsDemoComponent { 
    readFileContent: string = ''; 
    async doReadFile(event: any): Promise<void> { 
      let file: File = event.srcElement.files[0];
      this.readFileContent = await readFile(file); 
    } 
  }
  `;
  constructor(private _snackBar: MatSnackBar) {
    this.objectsString = formatJSON(this.objects, 2);
  }

  doCopyToClipboard(): void {
    // Invoke utility function to copy input text to clipboard
    copyToClipboard(this.copyText);

    // Show snackbar to indicate task complete
    this._snackBar.open('Text copied!', undefined, {
      duration: 2000,
    });
  }

  doConvertObjectsToCSV(): void {
    // Invoke utility function to convert objects array using
    // comma as the key separator and carriage return line feed
    // as the line separator.
    this.csvOutput = convertObjectsToCSV(this.objects, ',', '\r\n');

    // Show snackbar to indicate task complete
    this._snackBar.open('Objects converted!', undefined, {
      duration: 2000,
    });
  }

  doConvertCSVToJSON(): void {
    // Invoke utility function to convert CSV value using
    // comma as the key separator and carriage return line feed
    // as the line separator into JSON format. Use two space
    // indent to pretty output JSON.
    this.jsonOutput = convertCSVToJSON(this.csv, ',', '\r\n', 2);

    // Show snackbar to indicate task complete
    this._snackBar.open('CSV converted!', undefined, {
      duration: 2000,
    });
  }

  doDownloadCSV(): void {
    // Invoke utility function to download CSV value into file
    // with 'text/csv' mime type and '.csv' extension.
    downloadCSV('csvsampledata', this.csv);

    // Show snackbar to indicate task complete
    this._snackBar.open('CSV downloaded!', undefined, {
      duration: 2000,
    });
  }

  doDownloadJSON(): void {
    // Invoke utility function to download JSON into file
    // with 'application/json' mime type and '.json' extension.
    // Request JSON to be prettied.
    downloadJSON('jsonsampledata', this.json, true, 2);

    // Show snackbar to indicate task complete
    this._snackBar.open('JSON downloaded!', undefined, {
      duration: 2000,
    });
  }

  doDownloadObjectsToCSV(): void {
    // Invoke utility function to convert objects to CSV value
    // and download into file with 'text/csv' mime type and
    // '.csv' extension.
    downloadObjectsToCSV('objtocsvsampledata', this.objects);

    // Show snackbar to indicate task complete
    this._snackBar.open('Objects converted to CSV and downloaded!', undefined, {
      duration: 2000,
    });
  }

  doDownloadObjectsToJSON(): void {
    // Invoke utility function to convert objects to JSON
    // and download into file with 'application/json' mime type and
    // '.json' extension.
    downloadObjectsToJSON('objtojsonsampledata', this.objects);

    // Show snackbar to indicate task complete
    this._snackBar.open(
      'Objects converted to JSON and downloaded!',
      undefined,
      {
        duration: 2000,
      }
    );
  }

  doDownloadFile(): void {
    // Invoke utility function to write contents to specified
    // file with desired mime type.
    downloadFile(this.fileName, this.fileContent, this.mimeType);

    // Show snackbar to indicate task complete
    this._snackBar.open('Content downloaded!', undefined, {
      duration: 2000,
    });
  }

  async doReadFile(event: any): Promise<void> {
    const file: File = event.srcElement.files[0];
    this.readFileContent = await readFile(file);
  }
}
