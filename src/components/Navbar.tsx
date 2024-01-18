import {Button} from "./Button.tsx"
import logo from '../assets/GSJ-Logo.png'
import {Menu} from "lucide-react";
import {useState} from "react";

export function Navbar() {
    const [showingMenu, setShowMenu] = useState(false)

    return (
        <div className='flex flex-col'>
            <div className='flex justify-between items-center p-2.5 mb-5 mt-5 lg:mb-2 lg:mt-2'>
                <div className='flex-shrink-0 h-auto w-[200px] md:w-[250px] lg:w-[300px]'>
                    <img src={logo} alt='Testing'/>
                </div>

                <Button onClick={() => {
                    setShowMenu(!showingMenu)
                }} variant='ghost' size='icon' className='sm:hidden'>
                    <Menu/>
                </Button>

                <div className='hidden sm:flex'>
                    <Button variant='link'>Home</Button>
                    <Button variant='link'>Kontakt</Button>
                    <Button variant='link'>Fotogalerie</Button>
                </div>
            </div>

            {showingMenu && (
                <div
                    className='sm:hidden flex flex-col items-center gap-1.5 bg-gray-400 text-white p-2.5'>
                    <Button variant='link_bg' size='link' className='w-full'>Home</Button>
                    <Button variant='link_bg' size='link' className='w-full'>Kontakt</Button>
                    <Button variant='link_bg' size='link' className='w-full'>Fotogalerie</Button>
                </div>
            )}
        </div>
    )
}