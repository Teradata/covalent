import { convertObjectsToCSV, convertCSVToJSON } from './convert';

describe('Convert', () => {
  describe('Object to CSV conversion', () => {
    it('conversion with various parameter options', () => {
      const objects: object[] = [
        { name: 'user1', id: 123 },
        { name: 'user2', id: 234 },
      ];
      const expectedStr = 'name,id\r\nuser1,123\r\nuser2,234\r\n';
      const expectedStrCustomKeySeparator =
        'name|id\r\nuser1|123\r\nuser2|234\r\n';
      const expectedStrCustomLineSeparator = 'name,id|user1,123|user2,234|';
      const expectedStrCustomKeyLineSeparator = 'name|id&user1|123&user2|234&';

      expect(convertObjectsToCSV(undefined as any)).toEqual('');
      expect(convertObjectsToCSV([])).toEqual('');
      expect(convertObjectsToCSV(objects)).toEqual(expectedStr);
      expect(convertObjectsToCSV(objects, '|')).toEqual(
        expectedStrCustomKeySeparator
      );
      expect(convertObjectsToCSV(objects, undefined, '|')).toEqual(
        expectedStrCustomLineSeparator
      );
      expect(convertObjectsToCSV(objects)).toEqual(expectedStr);
      expect(convertObjectsToCSV(objects, '|')).toEqual(
        expectedStrCustomKeySeparator
      );
      expect(convertObjectsToCSV(objects, ',', '|')).toEqual(
        expectedStrCustomLineSeparator
      );
      expect(convertObjectsToCSV(objects, '|', '&')).toEqual(
        expectedStrCustomKeyLineSeparator
      );
    });
  });

  describe('CSV to JSON conversion', () => {
    it('conversion with various parameter options', () => {
      const csv = 'name,id\r\nuser1,123\r\nuser2,234\r\n';
      const csvCustomKeySeparator = 'name|id\r\nuser1|123\r\nuser2|234\r\n';
      const csvCustomLineSeparator = 'name,id|user1,123|user2,234|';
      const csvCustomKeyLineSeparator = 'name|id&user1|123&user2|234&';
      const expectedJSON =
        '[\n  {\n    "name": "user1",\n    "id": "123"\n  },\n  {\n    "name": "user2",\n    "id": "234"\n  }\n]';

      expect(convertCSVToJSON(undefined as any)).toEqual('');
      expect(convertCSVToJSON('')).toEqual('');
      expect(convertCSVToJSON(csv)).toEqual(expectedJSON);
      expect(convertCSVToJSON(csvCustomKeySeparator, '|')).toEqual(
        expectedJSON
      );
      expect(convertCSVToJSON(csvCustomLineSeparator, undefined, '|')).toEqual(
        expectedJSON
      );
      expect(convertCSVToJSON(csv)).toEqual(expectedJSON);
      expect(convertCSVToJSON(csvCustomKeySeparator, '|')).toEqual(
        expectedJSON
      );
      expect(convertCSVToJSON(csvCustomLineSeparator, ',', '|')).toEqual(
        expectedJSON
      );
      expect(convertCSVToJSON(csvCustomKeyLineSeparator, '|', '&')).toEqual(
        expectedJSON
      );
    });
  });
});
