import { convertObjectsToCSV, formatJSON } from './convert';

/**
 * Download CSV content to the specified file with .csv extension
 * appended to the provided base file name.
 *
 * @param fileBaseName base name of destination file
 * @param csv CSV contents
 */
export function downloadCSV(fileBaseName: string, csv: string): void {
  downloadFile(`${fileBaseName}.csv`, csv, 'text/csv');
}

/**
 * Download JSON content to the specified file with .json extension
 * appended to the provided base file name.
 *
 * @param fileBaseName base name of destination file
 * @param json JSON contents
 * @param format indicates if JSON should be prettied
 * @param indent optional parameter indicating space indentation for pretty output. Default is 2
 */
export function downloadJSON(fileBaseName: string, json: string, format: boolean = false, indent: number = 2): void {
  downloadFile(`${fileBaseName}.json`, format ? formatJSON(JSON.parse(json), indent) : json, 'application/json');
}

/**
 * Convert objects to CSV format and download to file with .csv
 * extension appended to the provided base file name. Custom key
 * separator and line separator can be specified.
 *
 * @param fileBaseName base name of destination file
 * @param objects object array to be converted to CSV format
 *   prior to writing to download destination
 * @param keySeparator optional parameter to specify custom value separator
 * @param lineSeparator optional parameter to specify custom end of line separator
 */
export function downloadObjectsToCSV(
  fileBaseName: string,
  objects: any[],
  keySeparator: string = ',',
  lineSeparator: string = '\r\n',
): void {
  downloadFile(`${fileBaseName}.csv`, convertObjectsToCSV(objects, keySeparator, lineSeparator), 'text/csv');
}

/**
 * Convert objects to JSON format and download to file with .json
 * extension appended to the provided base file name.
 *
 * @param fileBaseName base name of destination file
 * @param objects object array to be converted to JSON format
 *   prior to writing to download destination
 * @param indent optional parameter indicating space indentation for pretty output. Default is 2
 */
export function downloadObjectsToJSON(fileBaseName: string, objects: any[], indent: number = 2): void {
  downloadFile(`${fileBaseName}.json`, formatJSON(objects, indent), 'application/json');
}

/**
 * Download string content to the specified file with desired mime type.
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
  const blob: Blob = new Blob([contents], { type: mimeType });
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
}
