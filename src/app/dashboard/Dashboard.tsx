import { AppSidebar } from "@/components/app-sidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import {Button} from "@/components/ui/button.tsx";
import {Moon, Sun} from "lucide-react";
import {useTheme} from "@/components/theme-provider.tsx";
import {useEffect, useState} from "react";

export default function Dashboard() {

  const {theme, setTheme} = useTheme();
  const [mounted, setMounted] = useState(false);

  // Ensure this component is mounted before using theme
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
        <header className="flex sticky top-0 bg-background h-16 shrink-0 justify-between items-center gap-2 border-b px-4">
          <div className="flex items-center gap-2">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbPage>
                    Dashboard
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

        <div className="flex flex-1 flex-col gap-4 p-4">

          {/* Grid of 4 items, displayed as 2 columns on small screens and 4 columns on large screens */}
          <div className="grid auto-rows-min gap-4 grid-cols-2 lg:grid-cols-4">
            <div className="aspect-video rounded-xl bg-muted/50" />
            <div className="aspect-video rounded-xl bg-muted/50" />
            <div className="aspect-video rounded-xl bg-muted/50" />
            <div className="aspect-video rounded-xl bg-muted/50" />
          </div>

          {/* Container for the second part of the layout with dynamic height and column arrangement */}
          <div className="min-h-[100vh] flex-1 rounded-xl md:min-h-[calc(100vh-6rem)]">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-4 h-full">

              {/* First column with one item: spans all 4 columns on small screens (col-span-4),
          and spans 3 columns on extra-large screens (xl:col-span-3) */}
              <div className="rounded-xl bg-primary/50 col-span-4 xl:col-span-3" />

              {/* Second column with two items: spans all 4 columns on small screens (col-span-4),
          and spans 1 column on extra-large screens (xl:col-span-1) */}
              <div className="grid md:grid-cols-2 xl:grid-cols-1 gap-4 col-span-4 xl:col-span-1">

                {/* Two items inside the second column, each item takes up half the width on medium screens and above */}
                <div className="rounded-xl bg-primary/50" />
                <div className="rounded-xl bg-primary/50" />
              </div>
            </div>
          </div>

        </div>


      </SidebarInset>
    </SidebarProvider>
  )
}
