import { AppSidebar } from "@/components/app-sidebar";
import { AppHeader } from "@/components/custom";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { useTheme } from "@/components/theme-provider.tsx";
import { useEffect, useState } from "react";

export function Layout({ children }: { children: React.ReactNode }) {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setMounted(true);
        }
    }, []);

    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    return (
        <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
                <AppHeader theme={theme} toggleTheme={toggleTheme} mounted={mounted} />
                {children}
            </SidebarInset>
        </SidebarProvider>
    );
}