export interface DropFilterModel {
  name: string;
  code: string;
}

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


export interface DropFilterData {
  items: {
    name: string;
  }[];

  other: {
    title: string;
    values: DropFilterData[];
  }[]

}

/**
 * yes we present the full(full means if the user select nothing, we still need to provider a placeholder) select state
 */
export interface DropFilterSelectState {
  items: {
    choice: string[];
  }[],

  others: {
    choice: string[];
  }[]
}
