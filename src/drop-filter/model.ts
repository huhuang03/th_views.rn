export type Code = number | string;

export interface DropFilterModel {
  name: string;
  code: string | number;
}

// 暂时先做简单一点，因为我们还有想好怎么去规划code.

// all common means I dont give the code?
// what to pass if we choice all in level2?
// I think we should not care about the all select.
// let the caller care, we only need tell the caller, that the use selected the all?
// hot to present the item all?
export interface DropFilterItem {
  name: string;
  next: {
    name: string;
  }[]
}

export interface DropFilterItemLeaf {
  name: string;
  code: string;
}

export interface DropFilterItemWithNext {
  name: string;
  next: DropFilterItemWithNext[];
}

export interface DropFilterData {
  items: {
    name: string;
    next: {
      name: string;
      next: {
        name: string;
        next: DropFilterModel[],
      }[]
    }[]
  }[];

  others: {
    name: string;
    code: string;
    list: DropFilterModel[];
  }[]

}

/**
 * yes we present the full(full means if the user select nothing, we still need to provider a placeholder) select state
 */
export interface DropFilterSelect {
  items: {
    choice: string[];
  }[],

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
  }
}
