
import * as LucideIcons from 'lucide-react';

export type TSubNavWithChildren = {
    isCollapsible: true;
    label: string;
    icon: keyof typeof LucideIcons;
    subItems: Array<{
        title: string;
        url: string;
    }>;
};

export type TSubNavWithoutChildren = {
    isCollapsible: false;
    title: string;
    url: string;
    icon: keyof typeof LucideIcons;
};

export type TNavWithChildren = {
    hasChildren: true;
    label: string;
    items: Array<TSubNavWithChildren | TSubNavWithoutChildren>;
};

export type TNavWithoutChildren = {
    hasChildren: false;
    url: string;
    title: string;
    icon: keyof typeof LucideIcons;
};

export type TMainNav = TNavWithChildren | TNavWithoutChildren;
