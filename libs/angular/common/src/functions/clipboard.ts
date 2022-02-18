/**
 * Assign a text value to the system clipboard. Note: Due to browser
 * security restrictions, the copy will only succeed if this method
 * is invoked as a result of a user action (eg. user button click).
 *
 * @param value text value to be assigned to clipboard.
 * @returns boolean indicating success/failure of copy operation.
 */
export function copyToClipboard(value: string): boolean {
  // Create a temporary textarea element and append to DOM
  const fakeTextArea: HTMLTextAreaElement = document.createElement('textarea');
  document.body.appendChild(fakeTextArea);

  // Assign value to be copied to clipboard
  fakeTextArea.value = value;
  fakeTextArea.select();

  // Copy to clipboard
  const success: boolean = document.execCommand('copy');

  // Remove temporary textarea
  document.body.removeChild(fakeTextArea);

  // Return boolean indicating if exec command succeeded
  return success;
}
