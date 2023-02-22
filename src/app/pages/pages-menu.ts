import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  /*{
    title: 'Dashboard',
    icon: 'shopping-cart-outline',
    link: '/pages/dashboard',
    home: true,
  },*/
  // {
  //   title: 'IoT Dashboard',
  //   icon: 'home-outline',
  //   link: '/pages/iot-dashboard',
  // },
  {
    title: 'FEATURES',
    group: true,
  },
  {
    title: 'Template',
    icon: 'layout-outline',
    children: [
      {
        title: 'Categoria',
        link: '/pages/categoria/list',
      },
      {
        title: 'Documento',
        link: '/pages/documento/list',
      },
      // {
      //   title: 'Infinite List',
      //   link: '/pages/layout/infinite-list',
      // },
      // {
      //   title: 'Accordion',
      //   link: '/pages/layout/accordion',
      // },
      // {
      //   title: 'Tabs',
      //   pathMatch: 'prefix',
      //   link: '/pages/layout/tabs',
      // },
    ],
  },
  {
    title: 'Equipe',
    icon: 'people-outline',
    children: [
      {
        title: 'Equipes de Utilizadores',
        link: '/pages/equipe/list',
      },
      // {
      //   title: 'Form Layouts',
      //   link: '/pages/forms/layouts',
      // },
      // {
      //   title: 'Buttons',
      //   link: '/pages/forms/buttons',
      // },
      // {
      //   title: 'Datepicker',
      //   link: '/pages/forms/datepicker',
      // },
    ],
  },
  {
    title: 'Usuário',
    icon: 'person-outline',
    link: '/pages/usuario',
    children: [
      {
        title: 'Detlhe de Usuário',
        link: '/pages/usuario/list',
      },
      // {
      //   title: 'Icons',
      //   link: '/pages/ui-features/icons',
      // },
      // {
      //   title: 'Typography',
      //   link: '/pages/ui-features/typography',
      // },
      // {
      //   title: 'Animated Searches',
      //   link: '/pages/ui-features/search-fields',
      // },
    ],
  },
  /*{
    title: 'Central de notificação',
    icon: 'bell-outline',
    children: [
      {
        title: 'Notificar',
        link: '/pages/modal-overlays/dialog',
      },
      // {
      //   title: 'Window',
      //   link: '/pages/modal-overlays/window',
      // },
      // {
      //   title: 'Popover',
      //   link: '/pages/modal-overlays/popover',
      // },
      // {
      //   title: 'Toastr',
      //   link: '/pages/modal-overlays/toastr',
      // },
      // {
      //   title: 'Tooltip',
      //   link: '/pages/modal-overlays/tooltip',
      // },
    ],
  },*/
  // {
  //   title: 'Extra Components',
  //   icon: 'message-circle-outline',
  //   children: [
  //     {
  //       title: 'Calendar',
  //       link: '/pages/extra-components/calendar',
  //     },
  //     {
  //       title: 'Progress Bar',
  //       link: '/pages/extra-components/progress-bar',
  //     },
  //     {
  //       title: 'Spinner',
  //       link: '/pages/extra-components/spinner',
  //     },
  //     {
  //       title: 'Alert',
  //       link: '/pages/extra-components/alert',
  //     },
  //     {
  //       title: 'Calendar Kit',
  //       link: '/pages/extra-components/calendar-kit',
  //     },
  //     {
  //       title: 'Chat',
  //       link: '/pages/extra-components/chat',
  //     },
  //   ],
  // },
  // {
  //   title: 'Maps',
  //   icon: 'map-outline',
  //   children: [
  //     {
  //       title: 'Google Maps',
  //       link: '/pages/maps/gmaps',
  //     },
  //     {
  //       title: 'Leaflet Maps',
  //       link: '/pages/maps/leaflet',
  //     },
  //     {
  //       title: 'Bubble Maps',
  //       link: '/pages/maps/bubble',
  //     },
  //     {
  //       title: 'Search Maps',
  //       link: '/pages/maps/searchmap',
  //     },
  //   ],
  // },
  // {
  //   title: 'Charts',
  //   icon: 'pie-chart-outline',
  //   children: [
  //     {
  //       title: 'Echarts',
  //       link: '/pages/charts/echarts',
  //     },
  //     {
  //       title: 'Charts.js',
  //       link: '/pages/charts/chartjs',
  //     },
  //     {
  //       title: 'D3',
  //       link: '/pages/charts/d3',
  //     },
  //   ],
  // },
  // {
  //   title: 'Editors',
  //   icon: 'text-outline',
  //   children: [
  //     {
  //       title: 'TinyMCE',
  //       link: '/pages/editors/tinymce',
  //     },
  //     {
  //       title: 'CKEditor',
  //       link: '/pages/editors/ckeditor',
  //     },
  //   ],
  // },
  // {
  //   title: 'Tables & Data',
  //   icon: 'grid-outline',
  //   children: [
  //     {
  //       title: 'Smart Table',
  //       link: '/pages/tables/smart-table',
  //     },
  //     {
  //       title: 'Tree Grid',
  //       link: '/pages/tables/tree-grid',
  //     },
  //   ],
  // },
  // {
  //   title: 'Miscellaneous',
  //   icon: 'shuffle-2-outline',
  //   children: [
  //     {
  //       title: '404',
  //       link: '/pages/miscellaneous/404',
  //     },
  //   ],
  // },
  {
    title: 'Definição',
    icon: 'settings-2-outline',
    children: [
      {
        title: 'Segurança',
        link: '/auth/login',
      },
      // {
      //   title: 'Register',
      //   link: '/auth/register',
      // },
      // {
      //   title: 'Request Password',
      //   link: '/auth/request-password',
      // },
      // {
      //   title: 'Reset Password',
      //   link: '/auth/reset-password',
      // },
    ],
  },
];
