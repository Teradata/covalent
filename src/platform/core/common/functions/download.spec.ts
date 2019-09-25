import { downloadCSV, downloadJSON, downloadObjToCSV, downloadObjToJSON, downloadFile } from './download';

fdescribe('Download', () => {

  fdescribe('Download CSV', () => {

    fit('download CSV with variety of separators', () => {
      const inputCSV: string = 'name,id\r\nuser1,123\r\nuser2,234\r\n'
      const inputCSVCustomKeySeparator: string = 'name|id\r\nuser1|123\r\nuser2|234\r\n'
      const inputCSVCustomLineSeparator: string = 'name,id|user1,123|user2,234|'
      const inputCSVCustomKeyLineSeparator: string = 'name|id&user1|123&user2|234&'
      const expectedJSON: string = '[{"name":"user1","id":"123"},{"name":"user2","id":"234"}]';

      downloadCSV('inputCSV', inputCSV);
      downloadCSV('inputCSVCustomKeySeparator', inputCSVCustomKeySeparator, '|');
      downloadCSV('inputCSVCustomLineSeparator', inputCSVCustomLineSeparator, ',', '|');
      downloadCSV('inputCSVCustomKeyLineSeparator', inputCSVCustomKeyLineSeparator, '|', '&');
    });
  });

  fdescribe('Download JSON', () => {

    fit('download JSON with various separators', () => {
      const inputJSON: string = '[{"name":"user1","id":"123"},{"name":"user2","id":"234"}]';

      downloadJSON('inputJSON', inputJSON);
    });
  });

  fdescribe('Download Obj to CSV', () => {

    fit('download JSON with various separators', () => {
      const inputJSON: string = '[{"name":"user1","id":"123"},{"name":"user2","id":"234"}]';

      downloadJSON('inputJSON', inputJSON);
    });
  });
});
