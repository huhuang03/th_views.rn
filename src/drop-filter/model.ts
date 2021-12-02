export type Code = number | string;
export const CODE_ALL = -1;

export interface DFModel {
  name: string;
  code: Code;
}

// how to remember the item?
export interface DFDataItem extends DFModel {
  level: number;
  select?: DFDataItem;
  list?: DFDataItem[];

  // 懒加载，通过上一个选择去获取
  listLoader?: (_s: DFSelectItem) => Promise<DFDataItem>;
}

export const DFDataItemMethod = {
  isSelect(thiz: DFDataItem, select?: DFSelectItem): boolean {
    return thiz.code == select?.code;
  }
  // td
  // hasNext(thiz?: DFDataItem): boolean {
  //   return !!thiz && (thiz.list && thiz.list.length > 0) || !!thiz?.listLoader;
  // }
}

export interface DropFilterData {
  // this is not good?
  main?: DFDataItem[];

  others?: {
    name: string;
    code: string;
    list: DFModel[];
  }[]
}

export const DropFilterDataMethod = {
  getItemByCode: (code?: Code, thiz?: DFDataItem): DFDataItem | undefined => {
    return thiz?.list?.filter(item => item.code === code)[0] || undefined;
  }
}


// how to present all?
export interface DFSelectItem {
  select?: DFSelectItem;
  isAll?: boolean;
  code?: Code;
  level: number;
  child?: DFSelectItem;
}

/**
 * yes we present the full(full means if the user select nothing, we still need to provider a placeholder) select state
 */
export interface DropFilterSelect {
  main: {
    // key is index.
    [key: number]: DFSelectItem
  },

  others: {
    [key: string]: Code[],
    [key: number]: Code[],
  }
}

export const DropFilterSelectMethod = {
  other: {
    getSelected(code: Code, others: DropFilterSelect['others']): Code[] {
      if (others[code] === undefined) {
        others[code] = [];
      }
      return others[code];
    }
  },

  main: {
    getSelect(level: number, rootSelect: DFSelectItem): DFSelectItem | undefined {
      let select: DFSelectItem | undefined = rootSelect;
      while (select) {
        if (select.level === level) {
          return select;
        }
        select = select.child;
      }
      return undefined;
    },

    getL0Select(index: number, thiz: DropFilterSelect['main']): DropFilterSelect['main'][0] {
      if (!thiz[index]) {
        thiz[index] = {
          level: 0,
        };
      }
      return thiz[index];
    },
  }
}
