import { Card, CardContent } from "@/components/ui/card";
import { Music, User, Star } from "lucide-react";

export default function Artists() {
    return (
        <div className="p-4 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Placeholder for Featured Artists */}
                <Card className="h-40 flex items-center justify-center text-gray-400">
                    <CardContent className="flex flex-col items-center justify-center h-full">
                        <User className="w-10 h-10" />
                        <p className="mt-2 text-sm">Featured Artists (Coming Soon)</p>
                    </CardContent>
                </Card>

                {/* Placeholder for Top Tracks */}
                <Card className="h-40 flex items-center justify-center text-gray-400">
                    <CardContent className="flex flex-col items-center justify-center h-full">
                        <Music className="w-10 h-10" />
                        <p className="mt-2 text-sm">Top Tracks (Coming Soon)</p>
                    </CardContent>
                </Card>

                {/* Placeholder for Artist Rankings */}
                <Card className="h-40 flex items-center justify-center text-gray-400">
                    <CardContent className="flex flex-col items-center justify-center h-full">
                        <Star className="w-10 h-10" />
                        <p className="mt-2 text-sm">Artist Rankings (Coming Soon)</p>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
