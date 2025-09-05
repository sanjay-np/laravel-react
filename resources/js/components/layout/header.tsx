import { cn } from "@/lib/utils";

export function Header() {
    return (
        <header className="h-16 bg-gradient-to-r from-card/80 to-card flex items-center justify-between px-6 border-b border-border shadow-sm">
            <h1 className="text-lg font-semibold text-primary">Dashboard</h1>
            <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 bg-muted/60 px-2 py-1 rounded border border-border">
                    <span className="inline-block w-8 h-8 bg-primary/80 rounded-full border border-primary" />
                    <span className="font-medium text-primary">Jane Doe</span>
                </div>
                <button className="px-3 py-1 rounded bg-primary text-white hover:bg-primary/90 shadow">New</button>
            </div>
        </header>
    );
}
