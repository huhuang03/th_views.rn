import {DropFilterData} from 'th_views.rn';

export const mockDropFilterData: DropFilterData = {
  items: [
    {
      name: '分类',
      next: [
        {
          name: '成衣工厂',
          next: [
            {
              name: '针织服饰',
              next: [
                {
                  name: '针织服饰1',
                  code: '0',
                },
                {
                  name: '针织服饰2',
                  code: '0',
                },
              ],
            },
            {
              name: '童装',
              next: [
                {
                  name: '童装1',
                  code: '0',
                },
                {
                  name: '童装2',
                  code: '0',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: '地区',
      next: [
        {
          name: '浙江',
          next: [
            {
              name: '杭州',
              next: [
                {
                  name: '临平区',
                  code: '0',
                },
              ],
            },
          ],
        },
      ],
    },
  ],
  others: [
    {
      name: '合作方式',
      values: [
        {
          name: '来料加工',
          code: '0',
        },
        {
          name: '包工包料',
          code: '1',
        },
        {
          name: '工序外发',
          code: '2',
        },
      ],
    },

    {
      name: '企业规模',
      values: [
        {
          name: '10人以下',
          code: '0',
        },
        {
          name: '10-20人',
          code: '1',
        },
        {
          name: '20-50人',
          code: '2',
        },
      ],
    },

    {
      name: '年交易额',
      values: [
        {
          name: '100万以下',
          code: '0',
        },
        {
          name: '100-200万',
          code: '1',
        },
        {
          name: '200-500万',
          code: '2',
        },
      ],
    },
  ],
};
