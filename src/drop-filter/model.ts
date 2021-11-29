export type Code = number | string;
export const CODE_ALL = -1;

export interface DropFilterModel {
  name: string;
  code: Code;
}

// 暂时先做简单一点，因为我们还有想好怎么去规划code.
export interface DropFilterDataItem {
  level: number;
  name: string;
  code: Code;
  list?: DropFilterDataItem[];
  // 懒加载，通过上一个选择去获取
  listLoader?: (_s: DropFilterSelectItem) => Promise<DropFilterDataItem>;
}

export interface DropFilterData {
  // this is not good?
  main: DropFilterDataItem[];

  others: {
    name: string;
    code: string;
    list: DropFilterModel[];
  }[]
}

export const DropFilterDataMethod = {
  getItemByCode: (code?: Code, thiz?: DropFilterDataItem): DropFilterDataItem | undefined => {
    return thiz?.list?.filter(item => item.code === code)[0] || undefined;
  }
}


// how to present all?
export interface DropFilterSelectItem {
  isAll?: boolean;
  code?: Code;
  level: number;
  child?: DropFilterSelectItem;
}

/**
 * yes we present the full(full means if the user select nothing, we still need to provider a placeholder) select state
 */
export interface DropFilterSelect {
  main: {
    // key is index.
    [key: number]: DropFilterSelectItem
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
    getSelect(level: number, rootSelect: DropFilterSelectItem): DropFilterSelectItem | undefined {
      let select: DropFilterSelectItem | undefined = rootSelect;
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
