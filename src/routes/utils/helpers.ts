import type { Component } from 'svelte';
import {
  type ListType,
  sidebarList,
  CogOutline,
  ExpandOutline,
  GridPlusOutline
} from 'runes-webkit';

const extra: ListType[] = [
  {
    name: 'Filled',
    Icon: ExpandOutline as Component,
    href: '/filled-icons'
  },
  {
    name: 'Outlined',
    Icon: CogOutline as Component,
    href: '/outlined-icons'
  },
  {
    name: 'Twotone',
    Icon: GridPlusOutline as Component,
    href: '/twotone-icons'
  }
];

export const newSidebarList: ListType[] = [
  ...(Array.isArray(sidebarList) ? sidebarList : []),
  ...extra
];
