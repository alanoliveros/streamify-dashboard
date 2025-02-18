import { SidebarTrigger } from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbPage } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button.tsx";
import { Moon, Sun } from "lucide-react";

interface AppHeaderProps {
    theme: string;
    toggleTheme: () => void;
    mounted: boolean;
    currentPage?: string; // Add currentPage as a prop
}

export const AppHeader: React.FC<AppHeaderProps> = ({ theme, toggleTheme, mounted, currentPage = "Dashboard" }) => {
    return (
        <header className="flex sticky top-0 bg-background h-16 shrink-0 justify-between items-center gap-2 border-b px-4">
            <div className="flex items-center gap-2">
                <SidebarTrigger className="-ml-1" />
                <Separator orientation="vertical" className="mr-2 h-4 hidden md:block" />
                <Breadcrumb className="hidden md:block">
                    <BreadcrumbList>
                        <BreadcrumbItem className="hidden md:block">
                            <BreadcrumbPage>
                                {currentPage} {/* Dynamically display the current page */}
                            </BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
            </div>

            <Button variant="ghost" size="icon" onClick={toggleTheme} aria-label="Toggle theme">
                {mounted ? (
                    theme === "dark" ? (
                        <Sun className="h-[1.2rem] w-[1.2rem]" />
                    ) : (
                        <Moon className="h-[1.2rem] w-[1.2rem]" />
                    )
                ) : (
                    <div className="h-[1.2rem] w-[1.2rem] animate-spin">
                        <Sun className="h-[1.2rem] w-[1.2rem]" />
                    </div>
                )}
            </Button>
        </header>
    );
};