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
}

export interface DropFilterData {
  main: DropFilterDataItem;

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
