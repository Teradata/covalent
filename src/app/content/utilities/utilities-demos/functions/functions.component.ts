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
} from '../../../../../platform/core/common';

@Component({
  selector: 'td-functions',
  templateUrl: './functions.component.html',
  styleUrls: ['./functions.component.scss'],
  preserveWhitespaces: true,
  animations: [slideInUpAnimation],
})
export class FunctionsDemoComponent {
  @HostBinding('@routeAnimation') routeAnimation: boolean = true;
  @HostBinding('class.td-route-animation') classAnimation: boolean = true;
  copyText: string = 'Lorem Ipsum';
  objects: object[] = [
    { name: 'user1', id: 123 },
    { name: 'user2', id: 234 },
  ];
  objectsString: string;
  csvOutput: string = '';
  csv: string = 'name,id\r\nuser1,123\r\nuser2,234\r\n';
  jsonOutput: string = '';
  json: string = '[{"name":"user1","id":"123"},{"name":"user2","id":"234"}]';
  fileName: string = 'sample.txt';
  fileContent: string = 'Lorem Ipsum';
  mimeType: string = 'text/plain';
  readFileContent: string = '';

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
    this._snackBar.open('Objects converted to JSON and downloaded!', undefined, {
      duration: 2000,
    });
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
