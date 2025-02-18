import * as React from "react"
import {Music, Settings2, Grid, Users, Brush, DollarSign,} from "lucide-react"

import {NavMain} from "@/components/nav-main"
import {TeamSwitcher} from "@/components/team-switcher"
import {
    Sidebar,
    SidebarContent, SidebarFooter,
    SidebarHeader,
    SidebarRail,
} from "@/components/ui/sidebar"

const data = {
    teams: [
        {
            name: "Streamify",
            logo: Music,
        },
    ],
    navMain: [
        {
            title: "Dashboard",
            url: "/",
            icon: Grid,
        },
        {
            title: "Users",
            url: "/user",
            icon: Users,
        },
        {
            title: "Artists",
            url: "/artists",
            icon: Brush,
        },
        {
            title: "Revenue",
            url: "/revenue",
            icon: DollarSign,
        },
        {
            title: "Settings",
            url: "/settings",
            icon: Settings2,
        },
    ],
}

export function AppSidebar({...props}: React.ComponentProps<typeof Sidebar>) {
    return (
        <Sidebar collapsible="icon" {...props}>
            <SidebarHeader>
                <TeamSwitcher teams={data.teams}/>
            </SidebarHeader>
            <SidebarContent>
                <NavMain items={data.navMain}/>
            </SidebarContent>
            <SidebarFooter>
            </SidebarFooter>
            <SidebarRail/>
        </Sidebar>
    )
}
