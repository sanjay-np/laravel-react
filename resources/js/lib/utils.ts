import { TMainNav } from '@/data/types';
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const findBreadcrumbTrail = (items: TMainNav[], path: string): Array<{ title: string; url?: string; icon?: string }> | null => {
    for (const item of items) {
        // ---- CASE 1: Leaf item (no children)
        if (!item.hasChildren && item.url === path) {
            return [{ title: item.title, url: item.url, icon: item.icon }];
        }

        // ---- CASE 2: Parent with children
        if (item.hasChildren) {
            for (const sub of item.items) {
                if (!sub.isCollapsible && sub.url === path) {
                    return [
                        {
                            title: sub.title,
                            url: sub.url,
                            icon: sub.icon,
                        },
                    ];
                }

                if (sub.isCollapsible) {
                    for (const subItem of sub.subItems) {
                        if (subItem.url === path) {
                            return [
                                {
                                    title: sub.label,
                                    icon: sub.icon,
                                },
                                {
                                    title: subItem.title,
                                    url: subItem.url,
                                },
                            ];
                        }
                    }
                }
            }
        }
    }
    return null;
};
