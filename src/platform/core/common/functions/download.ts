import { convertObjToCSV } from './convert';

/**
 * Convenience function to handle downloading CSV content to the specified file.
 * The .csv extension is append to the provided base file name.
 * 
 * @param fileBaseName base name of destination file
 * @param contents CSV formatted string contents to be written to download destination
 * @param keySeparator optional parameter to specify custom value separator
 * @param lineSeparator optional parameter to specify custom end of line separator
 */
export function downloadCSV(fileBaseName: string, contents: string, keySeparator: string = ',', lineSeparator: string = '\r\n'): void {
  downloadFile(`${fileBaseName}.csv`, contents, 'text/csv')
}

/**
 * Convenience function to handle downloading JSON content to the specified file.
 * The .json extension is append to the provided base file name.
 * 
 * @param fileBaseName base name of destination file
 * @param contents JSON formatted string contents to be written to download destination
 */
export function downloadJSON(fileBaseName: string, contents: string): void {
  downloadFile(`${fileBaseName}.json`, contents, 'application/json')
}

/**
 * Convenience function to handle downloading objects to a file in CSV format.
 * The .csv extension is append to the provided base file name.
 * 
 * @param fileBaseName base name of destination file
 * @param inputObjects object array to be converted to CSV format
 *   prior to writing to download destination
 * @param keySeparator optional parameter to specify custom value separator
 * @param lineSeparator optional parameter to specify custom end of line separator
 */
export function downloadObjToCSV(fileBaseName: string, inputObjects: any[], keySeparator: string = ',', lineSeparator: string = '\r\n'): void {
  downloadFile(`${fileBaseName}.csv`, convertObjToCSV(inputObjects, keySeparator, lineSeparator), 'text/csv')
}

/**
 * Convenience function to handle downloading objects to a file in JSON string format.
 * The .json extension is append to the provided base file name.
 * 
 * @param fileBaseName base name of destination file
 * @param inputObjects object array to be converted to JSON string format
 *   prior to writing to download destination
 */
export function downloadObjToJSON(fileBaseName: string, inputObjects: any[]): void {
  downloadFile(`${fileBaseName}.json`, JSON.stringify(inputObjects), 'application/json')
}

/**
 * Function to download specified string content into the named file with desired mime type.
 * 
 * @param fileName full filename (including appropriate extension) of destination file
 * @param contents string contents to be written to download destination
 * @param mimeType mime type appropriate to file content to support consumption of destination file
 */
export function downloadFile(fileName: string, contents: string, mimeType: string = 'text/plain'): void {
  if (!fileName || !contents) {
    return;
  }

  // Create blob object and assign URL
  const parsedResponse: string = contents;
  const blob: Blob = new Blob([parsedResponse], { type: mimeType });
  const url: string = window.URL.createObjectURL(blob);

  // Construct anchor for URL, append to DOM, click and cleanup.
  const a: HTMLAnchorElement = document.createElement('a');
  a.setAttribute('style', 'display: none');
  a.setAttribute('download', fileName);
  a.href = url;
  document.body.appendChild(a);
  a.click();
  window.URL.revokeObjectURL(url);
  document.body.removeChild(a);
  window.URL.revokeObjectURL(url);
};