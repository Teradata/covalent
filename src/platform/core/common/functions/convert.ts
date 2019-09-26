/**
 * Conversion function that takes an array of objects and converts
 * them to CSV format. Custom key and line separators can be specified.
 *
 * @param objects list of strings in JSON format or actual objects
 * @param keySeparator optional parameter to specify custom value separator
 * @param lineSeparator optional parameter to specify custom end of line separator
 * @returns CSV formatted string
 */
export function convertObjectsToCSV(
  objects: any[],
  keySeparator: string = ',',
  lineSeparator: string = '\r\n',
): string {
  if (!objects) {
    return '';
  }

  let outputString: string = '';

  // Iterate through array, creating one output line per object
  objects.forEach((value: object, key: number) => {
    let line: string = '';
    for (const index in objects[key]) {
      if (line !== '') {
        line += keySeparator;
      }
      if (objects[key][index] === null || objects[key][index] === undefined) {
        objects[key][index] = '';
      }
      line += objects[key][index];
    }
    outputString += `${line}${lineSeparator}`;
  });

  // Append header row identifying keys into output
  if (objects[0]) {
    const headers: string = Object.keys(objects[0]).join(keySeparator);
    outputString = `${headers}${lineSeparator}${outputString}`;
  }

  return outputString;
}

/**
 * Conversion function that takes a CSV representation
 * of objects and converts them to JSON.
 * The first row in the input must be the object keys.
 * Custom key separator and line separator can be specified.
 *
 * @param csv list of strings in JSON format or actual objects
 * @param keySeparator optional parameter to specify custom value separator
 * @param lineSeparator optional parameter to specify custom end of line separator
 * @returns JSON formatted string
 */
export function convertCSVToJSON(csv: string, keySeparator: string = ',', lineSeparator: string = '\r\n'): string {
  if (!csv) {
    return '';
  }

  const csvArray: string[] = csv.split(lineSeparator);
  // Input CSV must have a minimum of two rows
  if (csvArray.length < 2) {
    return '';
  }

  let newObjects: any[] = [];

  // Extract object keys from header row
  const keys: string[] = csvArray[0].split(keySeparator);
  // Iterate through array, creating one output line per object
  for (let i: number = 1; i < csvArray.length; i++) {
    let newObject: any = {};

    let values: string[] = csvArray[i].split(keySeparator);
    if (values.length !== keys.length) {
      continue;
    }
    for (let j: number = 0; j < keys.length; j++) {
      newObject[keys[j]] = values[j];
    }
    newObjects.push(newObject);
  }

  return JSON.stringify(newObjects);
}
