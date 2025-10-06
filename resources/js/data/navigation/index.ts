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
        url: '/dashboard',
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
                        url: '/scheduler',
                    },
                    {
                        title: 'TimeSheets',
                        url: '/scheduler',
                    },
                    {
                        title: 'Vaccant Shifts',
                        url: '/scheduler',
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
                url: '/hr',
                icon: 'UsersIcon',
            },
            {
                isCollapsible: false,
                title: 'Staff Availability',
                url: '/hr',
                icon: 'ArrowLeftRightIcon',
            },
            {
                isCollapsible: false,
                title: 'Payroll',
                url: '/hr',
                icon: 'WalletMinimalIcon',
            },

            {
                isCollapsible: false,
                title: 'Documents',
                url: '/hr',
                icon: 'FileTextIcon',
            },
            {
                isCollapsible: false,
                title: 'Contacts',
                url: '/hr',
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
                        url: '/scheduler',
                    },
                    {
                        title: 'Staff Claims',
                        url: '/scheduler',
                    },
                    {
                        title: 'HCP Claims',
                        url: '/scheduler',
                    },
                    {
                        title: 'NDIS Claims',
                        url: '/scheduler',
                    },
                    {
                        title: 'Travel Claims with Client',
                        url: '/scheduler',
                    },
                    {
                        title: 'Travel Claims in Between',
                        url: '/scheduler',
                    },
                ],
            },
            {
                isCollapsible: false,
                title: 'Suppliers',
                url: '/hr',
                icon: 'PackageIcon',
            },
            {
                isCollapsible: false,
                title: 'Prospects',
                url: '/hr',
                icon: 'MegaphoneIcon',
            },

            {
                isCollapsible: false,
                title: 'Reports',
                url: '/hr',
                icon: 'ChartLineIcon',
            },
        ],
    },
];
