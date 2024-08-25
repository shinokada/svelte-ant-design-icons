import type { Component } from 'svelte';
import { type ListType, sidebarList, CogOutline, ExpandOutline, GridPlusOutline } from 'runes-webkit';

const extra: ListType[] = [
  {
    name: 'Filled',
    icon: ExpandOutline as Component,
    href: '/filled-icons'
  },
  {
    name: 'Outlined',
    icon: CogOutline as Component,
    href: '/outlined-icons'
  },
  {
    name: 'Twotone',
    icon: GridPlusOutline as Component,
    href: '/twotone-icons'
  }
];
export const newSidebarList: ListType[] = [...sidebarList, ...extra];
