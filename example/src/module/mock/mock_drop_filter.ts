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
      code: 'coop_way',
      name: '合作方式',
      list: [
        {
          code: 1,
          name: '来料加工',
        },
        {
          code: 2,
          name: '包工包料',
        },
        {
          code: 3,
          name: '工序外发',
        },
        {
          code: 4,
          name: '现货',
        },
        {
          code: 5,
          name: '定制',
        },
      ],
    },
    {
      code: 'total_employe_type',
      name: '员工总数',
      list: [
        {
          code: 1,
          name: '30人以下',
        },
        {
          code: 2,
          name: '31-100人',
        },
        {
          code: 3,
          name: '101-300人',
        },
        {
          code: 4,
          name: '301-500人',
        },
        {
          code: 5,
          name: '501-1000人',
        },
        {
          code: 6,
          name: '1000人以上',
        },
      ],
    },
    {
      code: 'annual_turnover_type',
      name: '年交易额',
      list: [
        {
          code: 1,
          name: '300万以下',
        },
        {
          code: 2,
          name: '301-500万',
        },
        {
          code: 3,
          name: '501-1000万',
        },
        {
          code: 4,
          name: '1001-3000万',
        },
        {
          code: 5,
          name: '3001-1亿',
        },
        {
          code: 6,
          name: '1亿以上',
        },
      ],
    },
    {
      code: 'month_production_type',
      name: '月产值',
      list: [
        {
          code: 1,
          name: '30万以下',
        },
        {
          code: 2,
          name: '31-50万',
        },
        {
          code: 3,
          name: '51-100万',
        },
        {
          code: 4,
          name: '101-300万',
        },
        {
          code: 5,
          name: '301-1000万',
        },
        {
          code: 6,
          name: '1000万以上',
        },
      ],
    },
  ],
};
