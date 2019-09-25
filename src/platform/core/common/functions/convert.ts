/**
 * Conversion function that takes an array of objects and converts
 * them to a contiguous string in CSV format. Custom key and line
 * separators can be provided.
 * 
 * @param inputObjects list of strings in JSON format or actual objects
 * @param keySeparator optional parameter to specify custom value separator
 * @param lineSeparator optional parameter to specify custom end of line separator
 * @returns CSV formatted string
 */
export function convertObjToCSV(inputObjects: any[], keySeparator: string = ',', lineSeparator: string = '\r\n'): string {
  if (!inputObjects) {
    return '';
  }

  let outputString: string = '';

  // Iterate through array, creating one output line per object
  inputObjects.forEach((value: object, key: number) => {
    let line: string = '';
    for (const index in inputObjects[key]) {
      if (line !== '') {
        line += keySeparator;
      }
      if (inputObjects[key][index] === null || inputObjects[key][index] === undefined) {
        inputObjects[key][index] = '';
      }
      line += inputObjects[key][index];
    }
    outputString += `${line}${lineSeparator}`;
  });

  // Append header row identifying keys into output
  if (inputObjects[0]) {
    const headers: string = Object.keys(inputObjects[0]).join(keySeparator);
    outputString = `${headers}${lineSeparator}${outputString}`;
  }

  return outputString;
};

/**
 * Conversion function that takes a CSV formatted string representation
 * of objects and converts them to a corresponding JSON string representation.
 * Assumption is that the first row in the input is the list of object keys.
 * Custom key and line separators can be provided.
 * 
 * @param inputCSV list of strings in JSON format or actual objects
 * @param keySeparator optional parameter to specify custom value separator
 * @param lineSeparator optional parameter to specify custom end of line separator
 * @returns JSON formatted string
 */
export function convertCSVToJSON(inputCSV: string, keySeparator: string = ',', lineSeparator: string = '\r\n'): string {
  if (!inputCSV) {
    return '';
  }

  const csvArray: string[] = inputCSV.split(lineSeparator);
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
