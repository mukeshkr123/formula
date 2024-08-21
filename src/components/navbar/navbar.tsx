import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu"
import { Search } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Input } from '../ui/input'
import Theme from './theme'


function Navbar() {
    return (
        <nav className='w-full h-[65px] border-b-[#EAEAEA] border-[1.8px] flex items-center'>
            <div className='flex items-center h-full px-4 w-full'>
                <Image src="/logo.svg" height={20} width={180} alt='Logo' />
                <div className='ml-6'>
                    <NavigationMenu>
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <Link href="/docs" legacyBehavior passHref>
                                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                        Formulas
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <Link href="/docs" legacyBehavior passHref>
                                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                        Inventor Profiles
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <Link href="/docs" legacyBehavior passHref>
                                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                        Code Snippets
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <Link href="/docs" legacyBehavior passHref>
                                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                        Code Editor
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>
                <div className='ml-auto flex items-center gap-x-2'>
                    <div className='relative w-[250px]'>
                        <Search className='absolute left-2 top-[10px] size-4 text-muted-foreground' />
                        <Input className='h-9 py-2 focus-visible:ring-offset-0 focus-visible:ring-0 pl-8 bg-[#F9F9FA] text-[#1A1A1C]' placeholder='Search' />
                    </div>
                    <Theme />
                </div>
            </div>
        </nav >
    )
}

export default Navbar