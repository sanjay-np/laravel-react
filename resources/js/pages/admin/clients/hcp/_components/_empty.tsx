import { Button } from "@/components/ui/button"
import {
    Empty,
    EmptyContent,
    EmptyDescription,
    EmptyHeader,
    EmptyMedia,
    EmptyTitle,
} from "@/components/ui/empty"
import { Icon } from "@/components/ui/icon"

const EmptyHCPClient = () => {
    return (
        <Empty>
            <EmptyHeader>
                <EmptyMedia variant="icon">
                    <Icon name="UsersRoundIcon" />
                </EmptyMedia>
                <EmptyTitle>No Clients Yet</EmptyTitle>
                <EmptyDescription>
                    You haven&apos;t added any clients yet. Get started by creating
                    your first client.
                </EmptyDescription>
            </EmptyHeader>
            <EmptyContent>
                <div className="flex gap-2">
                    <Button>Create Client</Button>
                    <Button variant="outline">Import Clients</Button>
                </div>
            </EmptyContent>
        </Empty>
    )
}
export default EmptyHCPClient
