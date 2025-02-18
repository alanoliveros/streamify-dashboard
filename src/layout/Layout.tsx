import { AppSidebar } from "@/components/app-sidebar";
import { AppHeader } from "@/components/custom";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { useTheme } from "@/components/theme-provider.tsx";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export function Layout({ children }: { children: React.ReactNode }) {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const location = useLocation(); // Get the current location

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setMounted(true);
        }
    }, []);

    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    // Map the current path to a page name
    const getCurrentPage = (path: string) => {
        switch (path) {
            case "/":
                return "Dashboard";
            case "/user":
                return "Users";
            case "/artists":
                return "Artists";
            case "/revenue":
                return "Revenue";
            case "/settings":
                return "Settings";
            default:
                return "Dashboard";
        }
    };

    return (
        <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
                <AppHeader
                    theme={theme}
                    toggleTheme={toggleTheme}
                    mounted={mounted}
                    currentPage={getCurrentPage(location.pathname)} // Pass the current page
                />
                {children}
            </SidebarInset>
        </SidebarProvider>
    );
}