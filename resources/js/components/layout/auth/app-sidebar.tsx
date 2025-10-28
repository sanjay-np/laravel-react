
import {
    Sidebar,
    SidebarContent,
    SidebarHeader,
    SidebarRail,
} from "@/components/ui/sidebar"
import { SidebarHeaderContent } from "@/components/layout/auth/sidebar-header-content"
import { mainNavItems } from "@/data/navigation"
import { NavMain } from "@/components/layout/auth/nav-main"

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    return (
        <Sidebar collapsible="icon" {...props}>
            <SidebarHeader>
                <SidebarHeaderContent
                    header={{
                        name: "Imploy HC",
                        logo: "/images/logo.png",
                        subTitle: "lorem Ipsum"
                    }}
                />
            </SidebarHeader>
            <SidebarContent>
                <NavMain items={mainNavItems} />
            </SidebarContent>
            <SidebarRail />
        </Sidebar>
    )
}
