export interface MenuItem {
  title: string;
  icon: string;
  route?: string;
  children?: MenuItem[];
}

export const MENU_CONFIG: MenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'dashboard',
    children: [
      { title: 'Default', route: '/', icon: 'chevron_right' },
      { title: 'Ecommerce', route: '/ecommerce', icon: 'chevron_right' },
      { title: 'Project', route: '/project', icon: 'chevron_right' },
    ],
  },
  {
    title: 'Widgets',
    icon: 'widgets',
    children: [
      { title: 'Default', route: '/widgets', icon: 'chevron_right' },
    ],
  },
  {
    title: 'Reports',
    icon: 'assessment',
    children: [
      { title: 'Reports', route: '/reports', icon: 'chevron_right' },
    ],
  },
];
