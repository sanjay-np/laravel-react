import AuthLayout from "@/components/layout/auth"
import { ColumnDef } from "@tanstack/react-table"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Icon } from "@/components/ui/icon"
import AppTable from "@/components/app/table"
import EmptyHCPClient from "./_components/_empty"

export type Payment = {
    id: string
    amount: number
    status: "pending" | "processing" | "success" | "failed"
    email: string
}

const HCPClient = () => {
    const data: Payment[] = []

    const columns: ColumnDef<Payment>[] = [
        {
            accessorKey: "id",
            header: "S.N.",
            cell: ({ row }) => <div className="uppercase">{row.getValue("id")}</div>,
            size: 60
        },
        {
            accessorKey: "email",
            header: "Email",
            cell: ({ row }) => <div className="lowercase">{row.getValue("email")}</div>,
        },
        {
            accessorKey: "amount",
            header: "Amount",
            cell: ({ row }) => <div className="uppercase">{row.getValue("amount")}</div>,
            size: 140
        },
        {
            accessorKey: "status",
            header: "Status",
            cell: ({ row }) => (
                <div className="capitalize">{row.getValue("status")}</div>
            ),
            size: 140
        },
    ]

    return (
        <AuthLayout>
            <div className="w-full">
                <div className="flex gap-2 items-center p-3">
                    <Input
                        placeholder="Search by email, name, phone, ..."
                        className="max-w-full shadow-none"
                    />
                    <Button
                        variant="outline"
                        className="ml-auto shadow-none rounded-sm"
                    >
                        <Icon name="FilterIcon" />
                    </Button>
                    <Button className="ml-auto"> Add Client </Button>
                </div>
                <div className="py-2">
                    <AppTable
                        data={data}
                        columns={columns}
                        onEmpty={<EmptyHCPClient />}
                    />
                </div>
            </div>
        </AuthLayout>
    )
}

export default HCPClient
