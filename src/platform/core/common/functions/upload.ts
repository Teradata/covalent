/**
 * Append blob with string content and specified mime type at tag name in request form data.
 *
 * @param formData request form data
 * @param name tag in form data where content is to be placed.
 * @param contents string contents to be uploaded
 * @param mimeType mime type appropriate to content
 */
export function uploadFile(
  formData: FormData,
  name: string,
  contents: string,
  mimeType: string = 'application/json',
): void {
  if (!formData || !contents) {
    return;
  }

  // Create blob object with specified mime type and append to form data
  formData.append(name, new Blob([contents], { type: mimeType }));
}
