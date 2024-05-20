import { SideNavItems, SideNavSection } from '@modules/navigation/models';

export const sideNavSections: SideNavSection[] = [
    {
        items: ['dashboard', 'category', 'product', 'user', 'slide', 'article'],
    },
    {
        text: 'INTERFACE',
        items: ['pages'],
    },
];

export const sideNavItems: SideNavItems = {
    dashboard: {
        icon: 'tachometer-alt',
        text: 'Dashboard',
        link: '/dashboard',
    },
    category: {
        icon: 'list',
        text: 'Category',
        link: '/categories',
    },
    product: {
        icon: 'box',
        text: 'Product',
        link: '/products',
    },
    user: {
        icon: 'user',
        text: 'User',
        link: '/users',
    },
    slide: {
        icon: 'film',
        text: 'Slide',
        link: '/slides',
    },
    article: {
        icon: 'file-contract',
        text: 'Article',
        link: '/articles',
    },
    // layouts: {
    //     icon: 'columns',
    //     text: 'Layouts',
    //     submenu: [
    //         {
    //             text: 'Static Navigation',
    //             link: '/dashboard/static',
    //         },
    //         {
    //             text: 'Light Sidenav',
    //             link: '/dashboard/light',
    //         },
    //     ],
    // },
    pages: {
        icon: 'book-open',
        text: 'Pages',
        submenu: [
            {
                text: 'Authentication',
                submenu: [
                    {
                        text: 'Login',
                        link: '/auth/login',
                    },
                    {
                        text: 'Register',
                        link: '/auth/register',
                    },
                    {
                        text: 'Forgot Password',
                        link: '/auth/forgot-password',
                    },
                ],
            },
            {
                text: 'Error',
                submenu: [
                    {
                        text: '401 Page',
                        link: '/error/401',
                    },
                    {
                        text: '404 Page',
                        link: '/error/404',
                    },
                    {
                        text: '500 Page',
                        link: '/error/500',
                    },
                ],
            },
        ],
    },
};
