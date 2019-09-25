import { convertObjToCSV, convertCSVToJSON } from './convert';

fdescribe('Convert', () => {

  fdescribe('Object to CSV conversion', () => {

    fit('conversion with various parameter options', () => {
      const inputObjs: any[] = [ { 'name': 'user1', 'id': 123 }, { 'name': 'user2', 'id': 234 } ];
      const expectedStr: string = 'name,id\r\nuser1,123\r\nuser2,234\r\n'
      const expectedStrCustomKeySeparator: string = 'name|id\r\nuser1|123\r\nuser2|234\r\n'
      const expectedStrCustomLineSeparator: string = 'name,id|user1,123|user2,234|'
      const expectedStrCustomKeyLineSeparator: string = 'name|id&user1|123&user2|234&'

      expect(convertObjToCSV(undefined)).toEqual('');
      expect(convertObjToCSV([])).toEqual('');
      expect(convertObjToCSV(inputObjs, undefined)).toEqual(expectedStr);
      expect(convertObjToCSV(inputObjs, '|', undefined)).toEqual(expectedStrCustomKeySeparator);
      expect(convertObjToCSV(inputObjs, undefined, '|')).toEqual(expectedStrCustomLineSeparator);
      expect(convertObjToCSV(inputObjs)).toEqual(expectedStr)
      expect(convertObjToCSV(inputObjs, '|')).toEqual(expectedStrCustomKeySeparator)
      expect(convertObjToCSV(inputObjs, ',', '|')).toEqual(expectedStrCustomLineSeparator)
      expect(convertObjToCSV(inputObjs, '|', '&')).toEqual(expectedStrCustomKeyLineSeparator)
    });
  });

  fdescribe('CSV to JSON conversion', () => {

    fit('conversion with various parameter options', () => {
      const inputCSV: string = 'name,id\r\nuser1,123\r\nuser2,234\r\n'
      const inputCSVCustomKeySeparator: string = 'name|id\r\nuser1|123\r\nuser2|234\r\n'
      const inputCSVCustomLineSeparator: string = 'name,id|user1,123|user2,234|'
      const inputCSVCustomKeyLineSeparator: string = 'name|id&user1|123&user2|234&'
      const expectedJSON: string = '[{"name":"user1","id":"123"},{"name":"user2","id":"234"}]';

      expect(convertCSVToJSON(undefined)).toEqual('');
      expect(convertCSVToJSON('')).toEqual('');
      expect(convertCSVToJSON(inputCSV, undefined)).toEqual(expectedJSON);
      expect(convertCSVToJSON(inputCSVCustomKeySeparator, '|', undefined)).toEqual(expectedJSON);
      expect(convertCSVToJSON(inputCSVCustomLineSeparator, undefined, '|')).toEqual(expectedJSON);
      expect(convertCSVToJSON(inputCSV)).toEqual(expectedJSON)
      expect(convertCSVToJSON(inputCSVCustomKeySeparator, '|')).toEqual(expectedJSON)
      expect(convertCSVToJSON(inputCSVCustomLineSeparator, ',', '|')).toEqual(expectedJSON)
      expect(convertCSVToJSON(inputCSVCustomKeyLineSeparator, '|', '&')).toEqual(expectedJSON)
    });
  });
});
