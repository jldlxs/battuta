/**
 * Interface para os itens do menu
 * @interface MenuItem
 * @property {string} icon - Caminho para o ícone do item do menu
 * @property {string} title - Título do item do menu
 * @property {string} description - Descrição do item do menu
 * @property {string} url - URL para onde o item do menu deve redirecionar, opcional
 * @property {MenuItem[]} [children] - Lista de subitens do menu, opcional
 * @property {boolean} open - Mostra se o submenu do item está aberto ou não
 */
export interface MenuItem {
  icon: string;
  title: string;
  description: string;
  url?: string;
  children?: MenuItem[];
  open?: boolean;
}

/** Ítems do menu lateral do manager */
export const MENU_ITEM: MenuItem[] = [
  {
    icon: '#book-open',
    title: 'Orçamentos',
    description: 'Orçamentos e precificação',
    children: [
      {
        icon: '',
        title: 'Submenu 1',
        description: 'Descrição do submenu 1',
        url: '#',
      },
      {
        icon: '',
        title: 'Submenu 2',
        description: 'Descrição do submenu 2',
        url: '#',
      },
      {
        icon: '',
        title: 'Submenu 3',
        description: 'Descrição do submenu 3',
        url: '#',
      },
      {
        icon: '',
        title: 'Submenu 4',
        description: 'Descrição do submenu 4',
        url: '#',
      },
    ],
  },
  {
    icon: '#cube-transparent',
    title: 'Produção',
    description: 'Gerenciar preparo, produção e montagem',
    url: '/manager?production',
  },
  {
    icon: '#arrows-right-left',
    title: 'Logística',
    description: 'Estoque e disponibilidade de material',
    children: [
      {
        icon: '',
        title: 'Submenu 2',
        description: 'Descrição do submenu 1',
        url: '#',
      },
    ],
  },
  {
    icon: '#rectangle-stack',
    title: 'Estoque',
    description: 'Estoque e disponibilidade de material',
    url: '/manager?stock'
  },
];
