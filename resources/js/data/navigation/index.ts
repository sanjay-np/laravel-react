import { TMainNav } from '../types';

export const mainNavItems: TMainNav[] = [
    {
        hasChildren: false,
        title: 'Dashboard',
        url: '/admin/dashboard',
        icon: 'HouseWifiIcon',
    },
    {
        hasChildren: false,
        title: 'Invoice',
        url: '/#',
        icon: 'InboxIcon',
    },
    {
        hasChildren: true,
        label: 'Client Management',
        items: [
            {
                isCollapsible: true,
                label: 'Clients',
                icon: 'UsersRoundIcon',
                subItems: [
                    {
                        title: 'HCP Clients',
                        url: '/admin/clients/hcp',
                    },
                    {
                        title: 'NDIS Clients',
                        url: '/admin/clients/ndis',
                    },
                    {
                        title: 'Private Clients',
                        url: '/admin/clients/private',
                    },
                ],
            },
            {
                isCollapsible: true,
                label: 'Scheduler',
                icon: 'CopyIcon',
                subItems: [
                    {
                        title: 'Rostering',
                        url: '/#',
                    },
                    {
                        title: 'TimeSheets',
                        url: '/#',
                    },
                    {
                        title: 'Vaccant Shifts',
                        url: '/#',
                    },
                ],
            },
        ],
    },
    {
        hasChildren: true,
        label: 'Human Resources',
        items: [
            {
                isCollapsible: false,
                title: 'Manage Users',
                url: '/#',
                icon: 'UsersIcon',
            },
            {
                isCollapsible: false,
                title: 'Staff Availability',
                url: '/#',
                icon: 'ArrowLeftRightIcon',
            },
            {
                isCollapsible: false,
                title: 'Payroll',
                url: '/#',
                icon: 'WalletMinimalIcon',
            },

            {
                isCollapsible: false,
                title: 'Documents',
                url: '/#',
                icon: 'FileTextIcon',
            },
            {
                isCollapsible: false,
                title: 'Contacts',
                url: '/#',
                icon: 'MessagesSquareIcon',
            },
        ],
    },
    {
        hasChildren: true,
        label: 'Operations',
        items: [
            {
                isCollapsible: true,
                label: 'Finances',
                icon: 'WalletIcon',
                subItems: [
                    {
                        title: 'Finances',
                        url: '/#',
                    },
                    {
                        title: 'Staff Claims',
                        url: '/#',
                    },
                    {
                        title: 'HCP Claims',
                        url: '/#',
                    },
                    {
                        title: 'NDIS Claims',
                        url: '/#',
                    },
                    {
                        title: 'Travel Claims with Client',
                        url: '/#',
                    },
                    {
                        title: 'Travel Claims in Between',
                        url: '/#',
                    },
                ],
            },
            {
                isCollapsible: false,
                title: 'Suppliers',
                url: '/#',
                icon: 'PackageIcon',
            },
            {
                isCollapsible: false,
                title: 'Prospects',
                url: '/#',
                icon: 'MegaphoneIcon',
            },

            {
                isCollapsible: false,
                title: 'Reports',
                url: '/#',
                icon: 'ChartLineIcon',
            },
        ],
    },
];
