import {
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"

export type SidebarHeaderProps = {
    header: {
        name: string
        logo: string
        subTitle: string
    }
}

export function SidebarHeaderContent({ header }: SidebarHeaderProps) {

    return (
        <SidebarMenu>
            <SidebarMenuItem>
                <SidebarMenuButton
                    size="lg"
                    className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                >
                    <div className="">
                        <img src={header.logo} className="size-8" />
                    </div>
                    <div className="grid flex-1 text-left text-lg leading-tight">
                        <span className="truncate font-bold">{header.name}</span>
                        <span className="truncate text-xs">{header.subTitle}</span>
                    </div>
                </SidebarMenuButton>
            </SidebarMenuItem>
        </SidebarMenu>
    )
}
