import { TestBed } from '@angular/core/testing';
import { CovalentFileModule } from '../file.module';
import { TdFileService } from './file.service';

import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('Service: File', () => {
  let service: TdFileService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CovalentFileModule, HttpClientTestingModule],
    });
    service = TestBed.inject(TdFileService);
    jest.spyOn(XMLHttpRequest.prototype, 'open');
    jest.spyOn(XMLHttpRequest.prototype, 'setRequestHeader');
  });

  it('should call send with no additional data and header', () => {
    const file: File = new File(['content'], 'myfile.name');

    const mySpy = jest
      .spyOn(XMLHttpRequest.prototype, 'send')
      .mockImplementation(() => {
        XMLHttpRequest.prototype.abort();
        expect(XMLHttpRequest.prototype.open).toHaveBeenCalledWith(
          'post',
          'test.url',
          true
        );
        expect(XMLHttpRequest.prototype.send).toHaveBeenCalledTimes(1);
        expect(mySpy).toHaveBeenCalledWith(file.name);
        expect(XMLHttpRequest.prototype.setRequestHeader).toHaveBeenCalledWith(
          'X-Requested-With',
          'XMLHttpRequest'
        );
        expect(XMLHttpRequest.prototype.setRequestHeader).toHaveBeenCalledTimes(
          1
        );
      });

    service.send('test.url', 'post', file).subscribe();
  });

  it('should call send with formData and header', () => {
    const file: File = new File(['content'], 'myfile.name');
    const formData: FormData = new FormData();
    formData.append('extraData', 'data');
    formData.append('myfile', file);

    jest.spyOn(XMLHttpRequest.prototype, 'send').mockImplementation(() => {
      XMLHttpRequest.prototype.abort();
      expect(XMLHttpRequest.prototype.send).toHaveBeenCalledWith(formData);
      expect(XMLHttpRequest.prototype.send).toHaveBeenCalledTimes(1);
      expect(XMLHttpRequest.prototype.setRequestHeader).toHaveBeenCalledWith(
        'X-Requested-With',
        'XMLHttpRequest'
      );
      expect(XMLHttpRequest.prototype.setRequestHeader).toHaveBeenCalledWith(
        'My-Header',
        'my-val'
      );
      expect(XMLHttpRequest.prototype.setRequestHeader).toHaveBeenCalledTimes(
        2
      );
    });

    service
      .send('test.url', 'post', formData, {
        headers: { 'My-Header': 'my-val' },
      })
      .subscribe();
  });
});
