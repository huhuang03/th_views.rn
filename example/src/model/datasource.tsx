import {DFDataItem} from 'th_views.rn';
import {url} from '../module/url';
import {CateMethod} from './Cate';

export function getCates(): Promise<DFDataItem[]> {
  return fetch(url.CATES)
    .then(res => res.json())
    .then(data => {
      return CateMethod.toDropList(data.data.list, 0);
    });
}
