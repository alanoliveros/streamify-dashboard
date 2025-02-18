import * as React from "react"
import {
    AudioWaveform,
    Command,
    GalleryVerticalEnd,
    Settings2,
    Grid, Users, Brush, DollarSign,
    Moon, Sun,
} from "lucide-react"

import {NavMain} from "@/components/nav-main"
import {TeamSwitcher} from "@/components/team-switcher"
import {
    Sidebar,
    SidebarContent, SidebarFooter,
    SidebarHeader,
    SidebarRail,
} from "@/components/ui/sidebar"
import { useTheme } from "./theme-provider"
import {useEffect, useState} from "react";
import { Button } from "./ui/button"

// This is sample data.
const data = {
    teams: [
        {
            name: "Acme Inc",
            logo: GalleryVerticalEnd,
            plan: "Enterprise",
        },
        {
            name: "Acme Corp.",
            logo: AudioWaveform,
            plan: "Startup",
        },
        {
            name: "Evil Corp.",
            logo: Command,
            plan: "Free",
        },
    ],
    navMain: [
        {
            title: "Dashboard",
            url: "#",
            icon: Grid,
        },
        {
            title: "Users",
            url: "#",
            icon: Users,
        },
        {
            title: "Artists",
            url: "#",
            icon: Brush,
        },
        {
            title: "Revenue",
            url: "#",
            icon: DollarSign,
        },
        {
            title: "Settings",
            url: "#",
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
