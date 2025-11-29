import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"

export function ProjectCardSkeleton() {
    return (
        <div className="h-full flex flex-col rounded-xl border border-white/10 bg-neutral-900/50 backdrop-blur-md overflow-hidden">
            <div className="h-48 w-full bg-neutral-800 animate-pulse" />
            <CardHeader className="space-y-2">
                <Skeleton className="h-6 w-3/4 bg-neutral-800" />
                <Skeleton className="h-4 w-full bg-neutral-800" />
                <Skeleton className="h-4 w-5/6 bg-neutral-800" />
            </CardHeader>
            <CardContent className="flex-grow">
                <div className="flex gap-2">
                    <Skeleton className="h-6 w-16 rounded-full bg-neutral-800" />
                    <Skeleton className="h-6 w-16 rounded-full bg-neutral-800" />
                    <Skeleton className="h-6 w-16 rounded-full bg-neutral-800" />
                </div>
            </CardContent>
            <CardFooter className="pt-6 border-t border-white/5 bg-white/5 gap-4">
                <Skeleton className="h-9 w-full bg-neutral-800" />
                <Skeleton className="h-9 w-full bg-neutral-800" />
            </CardFooter>
        </div>
    )
}
