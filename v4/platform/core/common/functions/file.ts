/**
 * Read file as UTF-8 text. Return string contents on read completion.
 *
 * @param file filename or File object
 * @returns promise that resolves to file content string
 */
export function readFile(file: File): Promise<string> {
  return new Promise<string>((resolve: (value: string) => void) => {
    const reader: FileReader = new FileReader();
    reader.readAsText(file, 'UTF-8');
    reader.onload = () => {
      resolve(<string>reader.result);
    };
  });
}
