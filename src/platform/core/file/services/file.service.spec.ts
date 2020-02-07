import { TestBed } from '@angular/core/testing';
import { TdFileService, CovalentFileModule } from '../';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('Service: File', () => {
  let service: TdFileService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CovalentFileModule, HttpClientTestingModule],
    });
    service = TestBed.inject(TdFileService);
    spyOn(XMLHttpRequest.prototype, 'open').and.callThrough();
    spyOn(XMLHttpRequest.prototype, 'setRequestHeader').and.callThrough();
  });

  it('should call send with no additional data and header', () => {
    const file: File = new File(['content'], 'myfile.name');

    const mySpy: jasmine.Spy = spyOn(XMLHttpRequest.prototype, 'send').and.callFake(() => {
      XMLHttpRequest.prototype.abort();
      expect(XMLHttpRequest.prototype.open).toHaveBeenCalledWith('post', 'test.url', true);
      expect(XMLHttpRequest.prototype.send).toHaveBeenCalledTimes(1);
      expect(mySpy.calls.first().args[0].get('file').name).toEqual(file.name);
      expect(XMLHttpRequest.prototype.setRequestHeader).toHaveBeenCalledWith('X-Requested-With', 'XMLHttpRequest');
      expect(XMLHttpRequest.prototype.setRequestHeader).toHaveBeenCalledTimes(1);
    });

    service.send('test.url', 'post', file).subscribe();
  });

  it('should call send with formData and header', () => {
    const file: File = new File(['content'], 'myfile.name');
    const formData: FormData = new FormData();
    formData.append('extraData', 'data');
    formData.append('myfile', file);

    const mySpy: jasmine.Spy = spyOn(XMLHttpRequest.prototype, 'send').and.callFake(() => {
      XMLHttpRequest.prototype.abort();
      expect(XMLHttpRequest.prototype.send).toHaveBeenCalledWith(formData);
      expect(XMLHttpRequest.prototype.send).toHaveBeenCalledTimes(1);
      const sentData: FormData = mySpy.calls.first().args[0];
      expect(sentData.get('file')).toBeNull();
      expect((sentData.get('myfile') as File).name).toEqual(file.name);
      expect(sentData.get('extraData')).toEqual('data');
      expect(XMLHttpRequest.prototype.setRequestHeader).toHaveBeenCalledWith('X-Requested-With', 'XMLHttpRequest');
      expect(XMLHttpRequest.prototype.setRequestHeader).toHaveBeenCalledWith('My-Header', 'my-val');
      expect(XMLHttpRequest.prototype.setRequestHeader).toHaveBeenCalledTimes(2);
    });

    service.send('test.url', 'post', formData, { headers: { 'My-Header': 'my-val' } }).subscribe();
  });
});
