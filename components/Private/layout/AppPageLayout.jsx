import { Shell } from "@/components/ui/shell";
import { cn } from "@/lib/utils";


export default function AppPageLayout({
  children,
  className,
}) {
  return (
    <Shell className="relative flex flex-1 flex-col overflow-x-hidden">
      <div
        className={cn("flex h-full flex-1 flex-col gap-6 md:gap-8", className)}
      >
        {children}
      </div>
    </Shell>
  );
}
