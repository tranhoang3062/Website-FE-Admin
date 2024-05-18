import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
    {
        name: 'Dashboard',
        url: '/dashboard',
        iconComponent: { name: 'cil-speedometer' },
        // badge: {
        //     color: 'info',
        //     text: 'NEW'
        // }
    },
    {
        name: 'Categories',
        url: '/dashboard',
        iconComponent: { name: 'cil-list-numbered' },
        // badge: {
        //     color: 'info',
        //     text: 'NEW'
        // }
    },
    {
        name: 'Products',
        url: '/dashboard',
        iconComponent: { name: 'cil-basket' },
        // badge: {
        //     color: 'info',
        //     text: 'NEW'
        // }
    },
    {
        name: 'Users',
        url: '/dashboard',
        iconComponent: { name: 'cil-user' },
        // badge: {
        //     color: 'info',
        //     text: 'NEW'
        // }
    },
    {
        title: true,
        name: 'Theme'
    },
    {
        name: 'Colors',
        url: '/theme/colors',
        iconComponent: { name: 'cil-drop' }
    },
    {
        name: 'Components',
        title: true
    },
    {
        name: 'Charts',
        iconComponent: { name: 'cil-chart-pie' },
        url: '/charts'
    },
    {
        name: 'Icons',
        iconComponent: { name: 'cil-star' },
        url: '/icons',
        children: [
            {
                name: 'CoreUI Free',
                url: '/icons/coreui-icons',
                icon: 'nav-icon-bullet',
                badge: {
                    color: 'success',
                    text: 'FREE'
                }
            },
            {
                name: 'CoreUI Flags',
                url: '/icons/flags',
                icon: 'nav-icon-bullet'
            },
            {
                name: 'CoreUI Brands',
                url: '/icons/brands',
                icon: 'nav-icon-bullet'
            }
        ]
    },
    {
        name: 'Widgets',
        url: '/widgets',
        iconComponent: { name: 'cil-calculator' },
        badge: {
            color: 'info',
            text: 'NEW'
        }
    },
    {
        title: true,
        name: 'Extras'
    },
    {
        name: 'Pages',
        url: '/login',
        iconComponent: { name: 'cil-star' },
        children: [
            {
                name: 'Login',
                url: '/login',
                icon: 'nav-icon-bullet'
            },
            {
                name: 'Register',
                url: '/register',
                icon: 'nav-icon-bullet'
            },
            {
                name: 'Error 404',
                url: '/404',
                icon: 'nav-icon-bullet'
            },
            {
                name: 'Error 500',
                url: '/500',
                icon: 'nav-icon-bullet'
            }
        ]
    },
];
