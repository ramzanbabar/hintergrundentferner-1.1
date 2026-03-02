import Link from "next/link";
import { cn } from "@/lib/utils";
import { LucideIcon, ArrowRight } from "lucide-react";

interface UseCaseCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
  className?: string;
}

export function UseCaseCard({
  icon: Icon,
  title,
  description,
  href,
  className,
}: UseCaseCardProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group flex flex-col rounded-xl border border-gray-200 bg-white p-6 transition-all hover:border-indigo-300 hover:shadow-lg dark:border-gray-800 dark:bg-gray-900 dark:hover:border-indigo-700",
        className
      )}
    >
      <div className="mb-4 inline-flex w-fit rounded-lg bg-gray-100 p-3 dark:bg-gray-800">
        <Icon className="h-6 w-6 text-gray-700 dark:text-gray-300" />
      </div>
      <h3 className="mb-2 font-semibold text-gray-900 dark:text-gray-100">{title}</h3>
      <p className="mb-4 flex-1 text-sm text-gray-600 dark:text-gray-400">{description}</p>
      <span className="flex items-center gap-1 text-sm font-medium text-indigo-600 dark:text-indigo-400">
        Mehr erfahren
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </span>
    </Link>
  );
}
