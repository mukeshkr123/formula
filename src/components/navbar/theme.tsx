"use client";

import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarTrigger,
} from "@/components/ui/menubar";
import { themes } from "@/constants";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";

const Theme = () => {
    const { setTheme, theme } = useTheme();

    console.log(theme);

    return (
        <Menubar className="relative border-none ">
            <MenubarMenu>
                <MenubarTrigger className="cursor-pointer bg-transparent border-none rounded-md">
                    {theme === "light" ? (
                        <Sun />
                    ) : (
                        <Moon />
                    )}
                </MenubarTrigger>
                <MenubarContent className="absolute right-[-3rem] mt-3 min-w-[120px] rounded border py-2 dark:border-dark-400 dark:bg-dark-300">
                    {themes.map((item) => {
                        const Icon = item.icon;
                        return (
                            <MenubarItem
                                key={item.value}
                                className="flex items-center gap-4 px-2.5 py-2 dark:focus:bg-dark-400"
                                onClick={() => setTheme(item.value)}
                            >

                                <Icon className="size-4" />
                                <p
                                    className={`text-sm text-light-400 ${theme === item.value
                                        ? "text-primary-500"
                                        : ""
                                        }`}
                                >
                                    {item.label}
                                </p>
                            </MenubarItem>
                        )
                    })}
                </MenubarContent>
            </MenubarMenu>
        </Menubar>
    );
};

export default Theme;