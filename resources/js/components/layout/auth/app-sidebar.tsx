
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarRail,
} from "@/components/ui/sidebar"
import { NavUser } from "./nav-user"
import { SidebarHeaderContent } from "@/components/layout/auth/sidebar-header-content"
import { mainNavItems } from "@/data/navigation"
import { NavMain } from "@/components/layout/auth/nav-main"

const data = {
    user: {
        name: "shadcn",
        email: "m@example.com",
        avatar: "/avatars/shadcn.jpg",
    },
}

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
            <SidebarFooter>
                <NavUser user={data.user} />
            </SidebarFooter>
            <SidebarRail />
        </Sidebar>
    )
}
