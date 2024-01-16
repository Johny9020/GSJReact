import {useState} from "react";
import logo from '../assets/GSJ-Logo.png'
import {Button} from "./Button.tsx";
import {Menu} from "lucide-react";

export function Navbar() {

    const [darkMode] = useState(false)

    return (
        <div className={`flex justify-between ${darkMode ? 'text-white bg-primary-dark' : ''} p-5`}>
            <div className="flex flex-shrink-0">
                <Button variant='image'>
                    <img src={logo} className={`h-auto w-[250px] ${darkMode ? '' : ''}`}/>
                </Button>
            </div>

            <div className="sm:flex gap-5 hidden">
                <Button variant="link">Home</Button>
                <Button variant="link">Kontakt</Button>
                <Button variant="link">Fotogalerie</Button>
            </div>

            <div className="flex items-center gap-5 pr-5 sm:hidden">
                <Button variant='ghost' size='icon'>
                    <Menu/>
                </Button>
            </div>
        </div>
    )
}