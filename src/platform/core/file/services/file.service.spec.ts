import { TestBed, inject } from '@angular/core/testing';
import { TdFileService, IUploadOptions, CovalentFileModule } from '../public-api';

describe('Service: File', () => {
  let service: TdFileService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CovalentFileModule],
    });
    service = TestBed.get(TdFileService);
    spyOn(XMLHttpRequest.prototype, 'open').and.callThrough();
    spyOn(XMLHttpRequest.prototype, 'setRequestHeader').and.callThrough();
  });

  it('should throw error for missing file and formData', () => {
    const options: IUploadOptions = {
      url: 'test.url',
      method: 'post',
    };

    spyOn(XMLHttpRequest.prototype, 'send');

    service.upload(options).subscribe(
      () => {
        fail('Should throw error');
      },
      (error: any) => {
        expect(error).toEqual('For [IUploadOptions] you have to set either the [file] or the [formData] property.');
      },
    );

    expect(XMLHttpRequest.prototype.open).not.toHaveBeenCalled();
    expect(XMLHttpRequest.prototype.setRequestHeader).not.toHaveBeenCalled();
    expect(XMLHttpRequest.prototype.send).not.toHaveBeenCalled();
  });

  it('should call send with no additional data and header', () => {
    const file: File = new File(['content'], 'myfile.name');

    const formData: FormData = new FormData();
    formData.append('extraData', 'data');
    const file2: File = new File(['content'], 'myotherfile.name');
    formData.append('myfile', file2);

    const options: IUploadOptions = {
      url: 'test.url',
      file,
      method: 'post',
      formData,
    };

    const mySpy: jasmine.Spy = spyOn(XMLHttpRequest.prototype, 'send').and.callFake(() => {
      XMLHttpRequest.prototype.abort();
      expect(XMLHttpRequest.prototype.open).toHaveBeenCalledWith('post', 'test.url', true);
      expect(XMLHttpRequest.prototype.send).toHaveBeenCalledTimes(1);
      expect(mySpy.calls.first().args[0].get('file').name).toEqual(file.name);
      expect(XMLHttpRequest.prototype.setRequestHeader).toHaveBeenCalledWith('X-Requested-With', 'XMLHttpRequest');
      expect(XMLHttpRequest.prototype.setRequestHeader).toHaveBeenCalledTimes(1);
    });

    service.upload(options).subscribe();
  });

  it('should call send with formData and header', () => {
    const file: File = new File(['content'], 'myfile.name');
    const formData: FormData = new FormData();
    formData.append('extraData', 'data');
    formData.append('myfile', file);
    const options: IUploadOptions = {
      url: 'test.url',
      method: 'post',
      headers: { 'My-Header': 'my-val' },
      formData,
    };

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

    service.upload(options).subscribe();
  });
});
