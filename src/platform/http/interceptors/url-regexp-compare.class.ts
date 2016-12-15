import { IURLCompare } from './url-compare.interface';

export class URLRegExCompare implements IURLCompare {

  compare(url: string, paths: string[]): boolean {
    return paths.filter((path: string) => {
      path = path.replace(/\*\*/gi, '<>')
                .replace(/\*/gi, '[a-zA-Z0-9\\-_]+')
                .replace(/<>/gi, '[a-zA-Z0-9\\-_\/]*');
      return new RegExp(path + '(\\?{1}.*)?$').test(url);
    }).length > 0;
  }

}
