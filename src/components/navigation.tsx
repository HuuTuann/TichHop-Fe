"use client";

import { usePathname } from "next/navigation";
import { Origami } from "lucide-react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const pathname = usePathname();

  const getClassName = (path: string) => {
    console.log(pathname);

    return cn("hover:bg-blue-500 hover:text-white text-md min-w-28", {
      "bg-blue-500 text-white": pathname === path,
    });
  };
  return (
    <div className="flex h-10 items-center relative">
      <div className="flex items-center gap-2">
        <Origami size={28} />
        <p className="text-lg font-bold">System Integration Practices</p>
      </div>
      <ol className="flex gap-4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <li>
          <Button variant={"ghost"} className={getClassName("/")}>
            <Link href="/">Home</Link>
          </Button>
        </li>
        <li>
          <Button variant={"ghost"} className={getClassName("/personal")}>
            <Link href="/personal">Personal</Link>
          </Button>
        </li>
        <li>
          <Button variant={"ghost"} className={getClassName("/employment")}>
            <Link href="/employment">Employment</Link>
          </Button>
        </li>
      </ol>
    </div>
  );
};

export default Navigation;
