import {
    SidebarInset,
    SidebarProvider,
    SidebarTrigger
} from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"

import { AppSidebar } from "./app-sidebar"
import { TBreadcrumbItem } from "@/data/types"
import { AppBreadcrumb } from "./app-breadcrumb"
import { Icon } from "@/components/ui/icon"

type Props = {
    children: React.ReactNode,
    breadCrumbItems?: TBreadcrumbItem[]
}

const AuthLayout = ({ children }: Props) => {
    return (
        <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
                <header className="flex h-16 shrink-0 items-center justify-between gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
                    <div className="flex items-center gap-2 px-4">
                        <SidebarTrigger className="-ml-1" />
                        <Separator
                            orientation="vertical"
                            className="mr-2 data-[orientation=vertical]:h-4"
                        />
                        <AppBreadcrumb />
                    </div>
                    <div>
                        <Icon name="User2Icon" />
                    </div>
                </header>
                <div className="flex flex-1 flex-col gap-4 py-2">
                    {children}
                </div>
            </SidebarInset>

        </SidebarProvider>
    )
}

export default AuthLayout

