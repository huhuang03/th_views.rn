import {DFDataItem} from 'th_views.rn';

export interface Cate {
  cateName: string;
  id: number;
  cateList?: Cate[];
}

export const CateMethod = {
  toDropList(thiz: Cate[], level: number): DFDataItem[] {
    const rst: DFDataItem[] = [];
    for (const cate of thiz) {
      rst.push({
        level,
        name: cate.cateName,
        code: cate.id,
        list: cate.cateList && this.toDropList(cate.cateList, level + 1),
      });
    }
    return rst;
  },
};
