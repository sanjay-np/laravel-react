import { Fragment } from "react"
import * as LucideIcons from "lucide-react"
import { ChevronRight } from "lucide-react"
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
    SidebarGroup,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSub,
    SidebarMenuSubButton,
    SidebarMenuSubItem,
} from "@/components/ui/sidebar"
import { TMainNav } from "@/data/types"
import { Icon } from "@/components/ui/icon"
import Link from "@/components/link"

export function NavMain({ items }: { items: TMainNav[] }) {

    const NonCollapsibleMenu = ({ title, icon, url }: {
        title: string;
        icon: keyof typeof LucideIcons;
        url: string
    }) => {
        return (
            <SidebarMenu>
                <SidebarMenuItem>
                    <SidebarMenuButton asChild tooltip={title} className="hover:bg-gray-200">
                        <Link to={url}>
                            <Icon name={icon} strokeWidth={1.5} />
                            <span>{title}</span>
                        </Link>
                    </SidebarMenuButton>
                </SidebarMenuItem>
            </SidebarMenu>
        )
    }

    const CollapsibleMenu = ({ label, icon, subItems, }: {
        label: string
        icon?: keyof typeof LucideIcons
        subItems?: { title: string; url: string }[]
    }) => (
        <SidebarMenu>
            <Collapsible asChild className="group/collapsible">
                <SidebarMenuItem>
                    <CollapsibleTrigger asChild>
                        <SidebarMenuButton tooltip={label} className="hover:bg-gray-200 cursor-pointer">
                            {icon && <Icon name={icon} strokeWidth={1.5} />}
                            <span>{label}</span>
                            <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                        </SidebarMenuButton>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                        <SidebarMenuSub>
                            {subItems?.map((subItem) => (
                                <SidebarMenuSubItem key={subItem.url}>
                                    <SidebarMenuSubButton asChild className="hover:bg-gray-200">
                                        <Link to={subItem.url}>
                                            <span>{subItem.title}</span>
                                        </Link>
                                    </SidebarMenuSubButton>
                                </SidebarMenuSubItem>
                            ))}
                        </SidebarMenuSub>
                    </CollapsibleContent>
                </SidebarMenuItem>
            </Collapsible>
        </SidebarMenu>
    )

    return (
        <SidebarGroup>
            {items.map((menu, index) => (
                <Fragment key={index}>
                    {menu.hasChildren ? (
                        <div className="py-1.5">
                            <SidebarGroupLabel>{menu.label}</SidebarGroupLabel>
                            {menu.items.map((menuItem) =>
                                menuItem.isCollapsible ? (
                                    <CollapsibleMenu
                                        key={menuItem.label}
                                        label={menuItem.label}
                                        icon={menuItem.icon}
                                        subItems={menuItem.subItems}
                                    />
                                ) : (
                                    <NonCollapsibleMenu
                                        url={menuItem.url}
                                        title={menuItem.title}
                                        icon={menuItem.icon}
                                    />
                                )
                            )}
                        </div>
                    ) : (
                        <NonCollapsibleMenu
                            url={menu.url}
                            title={menu.title}
                            icon={menu.icon}
                        />
                    )}
                </Fragment>
            ))}
        </SidebarGroup>
    )
}
