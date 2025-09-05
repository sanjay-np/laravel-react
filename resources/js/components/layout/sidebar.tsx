import { cn } from "@/lib/utils";

export function Sidebar() {
    return (
        <aside className="w-64 bg-card border-r h-full flex flex-col p-4">
            <div className="mb-8 flex items-center gap-2">
                <span className="inline-block w-8 h-8 bg-primary rounded-full" />
                <span className="font-bold text-lg">MyApp</span>
            </div>
            <nav className="flex-1">
                <ul className="space-y-2">
                    <li><a href="#" className="block py-2 px-4 rounded hover:bg-muted font-medium">Dashboard</a></li>
                    <li><a href="#" className="block py-2 px-4 rounded hover:bg-muted font-medium">Users</a></li>
                    <li><a href="#" className="block py-2 px-4 rounded hover:bg-muted font-medium">Reports</a></li>
                    <li><a href="#" className="block py-2 px-4 rounded hover:bg-muted font-medium">Settings</a></li>
                </ul>
            </nav>
            <div className="mt-8">
                <button className="w-full py-2 px-4 bg-primary text-white rounded hover:bg-primary/90">Logout</button>
            </div>
        </aside>
    );
}
