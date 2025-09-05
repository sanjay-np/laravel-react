import { cn } from "@/lib/utils";
import { Sidebar } from "./sidebar";
import { Header } from "./header";


interface LayoutProps {
    children: React.ReactNode;
    className?: string;
}


export function Layout({ children, className }: LayoutProps) {
    return (
        <div className={cn("flex h-screen w-screen bg-background", className)}>
            <Sidebar />
            <div className="flex flex-col flex-1">
                <Header />
                <main className="flex-1 p-6 overflow-y-auto">
                    {/* Dummy dashboard widgets */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                        <div className="bg-card rounded-lg shadow p-4">
                            <h2 className="font-semibold mb-2">Users</h2>
                            <p className="text-3xl font-bold">1,245</p>
                            <span className="text-muted-foreground">Active this month</span>
                        </div>
                        <div className="bg-card rounded-lg shadow p-4">
                            <h2 className="font-semibold mb-2">Revenue</h2>
                            <p className="text-3xl font-bold">$12,340</p>
                            <span className="text-muted-foreground">This quarter</span>
                        </div>
                        <div className="bg-card rounded-lg shadow p-4">
                            <h2 className="font-semibold mb-2">Tasks</h2>
                            <p className="text-3xl font-bold">23</p>
                            <span className="text-muted-foreground">Pending</span>
                        </div>
                    </div>
                    {/* Dummy table */}
                    <div className="bg-card rounded-lg shadow p-4">
                        <h2 className="font-semibold mb-4">Recent Activity</h2>
                        <table className="w-full text-left">
                            <thead>
                                <tr>
                                    <th className="py-2 px-4">User</th>
                                    <th className="py-2 px-4">Action</th>
                                    <th className="py-2 px-4">Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="py-2 px-4">Jane Doe</td>
                                    <td className="py-2 px-4">Logged in</td>
                                    <td className="py-2 px-4">2025-08-28</td>
                                </tr>
                                <tr>
                                    <td className="py-2 px-4">John Smith</td>
                                    <td className="py-2 px-4">Updated profile</td>
                                    <td className="py-2 px-4">2025-08-27</td>
                                </tr>
                                <tr>
                                    <td className="py-2 px-4">Alice Lee</td>
                                    <td className="py-2 px-4">Completed task</td>
                                    <td className="py-2 px-4">2025-08-26</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    {/* Render children below dummy data */}
                    <div className="mt-8">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    );
}
