/**
 * Utility function to facilitate assigning a text value
 * to the system clipboard.
 * Note: The copy will succeed only if this method is performed
 * as a result of a user action (eg. user clicks a button in
 * the UI). Due to browser security restrictions, this method
 * will not succeed if executed strictly programmatically.
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
