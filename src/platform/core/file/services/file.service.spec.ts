import { TestBed, inject } from '@angular/core/testing';
import {  TdFileService, IUploadOptions } from '../file.module';

describe('FileService', () => {
    let service: TdFileService;

    beforeEach(() => {
        service = new TdFileService();
        spyOn(XMLHttpRequest.prototype, 'open').and.callThrough();
        spyOn(XMLHttpRequest.prototype, 'setRequestHeader').and.callThrough();
    });

    it('should call send with no additional data and header', () => {
        let file: File = new File(['content'], 'myfile.name'); 
        let options: IUploadOptions = {
            url: 'test.url',
            file: file,
            method: 'post',
        };

        let formData: FormData = new FormData();
        formData.append('file', file);
        
        spyOn(XMLHttpRequest.prototype, 'send').and.callFake(() => {
            XMLHttpRequest.prototype.abort();
            expect(XMLHttpRequest.prototype.send).toHaveBeenCalledWith(formData);
            expect(XMLHttpRequest.prototype.open).toHaveBeenCalledWith('post', 'test.url', true);
            expect(XMLHttpRequest.prototype.setRequestHeader).toHaveBeenCalledWith('X-Requested-With', 'XMLHttpRequest');
            expect(XMLHttpRequest.prototype.setRequestHeader).toHaveBeenCalledTimes(1);
        });

        service.upload(options).subscribe();
    });

    it("should call send with additional data and header, should not add additional data with name 'form'", () => {
        let file: File = new File(['content'], 'myfile.name'); 
        let options: IUploadOptions = {
            url: 'test.url',
            file: file,
            method: 'post',
            headers: {'My-Header': 'my-val'},
            additionalFormData: { 'extraData' : 'data', 'file' : 'should remove' },
        };

        let formData: FormData = new FormData();
        formData.append('file', file);
        formData.append('extraData', 'data');

        spyOn(XMLHttpRequest.prototype, 'send').and.callFake(() => {
            XMLHttpRequest.prototype.abort();           
            expect(XMLHttpRequest.prototype.send).toHaveBeenCalledWith(formData);
            expect(XMLHttpRequest.prototype.open).toHaveBeenCalledWith('post', 'test.url', true);
            expect(XMLHttpRequest.prototype.setRequestHeader).toHaveBeenCalledWith('X-Requested-With', 'XMLHttpRequest');
            expect(XMLHttpRequest.prototype.setRequestHeader).toHaveBeenCalledWith('My-Header', 'my-val');
            expect(XMLHttpRequest.prototype.setRequestHeader).toHaveBeenCalledTimes(2);
        });

        service.upload(options).subscribe();
    });

});
