import { Card, CardContent } from "@/components/ui/card";
import { Bell, Palette, UserCog } from "lucide-react";

export default function Settings() {
    return (
        <div className="p-4 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Placeholder for Account Settings */}
                <Card className="h-40 flex items-center justify-center text-gray-400">
                    <CardContent className="flex flex-col items-center justify-center h-full">
                        <UserCog className="w-10 h-10" />
                        <p className="mt-2 text-sm">Account Settings (Coming Soon)</p>
                    </CardContent>
                </Card>

                {/* Placeholder for Notification Preferences */}
                <Card className="h-40 flex items-center justify-center text-gray-400">
                    <CardContent className="flex flex-col items-center justify-center h-full">
                        <Bell className="w-10 h-10" />
                        <p className="mt-2 text-sm">Notification Preferences (Coming Soon)</p>
                    </CardContent>
                </Card>

                {/* Placeholder for Theme Customization */}
                <Card className="h-40 flex items-center justify-center text-gray-400">
                    <CardContent className="flex flex-col items-center justify-center h-full">
                        <Palette className="w-10 h-10" />
                        <p className="mt-2 text-sm">Theme Customization (Coming Soon)</p>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
