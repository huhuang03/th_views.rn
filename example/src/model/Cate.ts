import {DFDataItem} from 'th_views.rn';

export interface Cate {
  cateName: string;
  id: number;
  cateLists?: Cate[];
}

export const CateMethod = {
  toDropList(thiz: Cate[], level: number): DFDataItem[] {
    const rst: DFDataItem[] = [];
    for (const cate of thiz) {
      rst.push({
        level,
        name: cate.cateName,
        code: cate.id,
        list: cate.cateLists && this.toDropList(cate.cateLists, level + 1),
      });
    }
    return rst;
  },
};
