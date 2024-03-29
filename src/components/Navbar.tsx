import logo from '../assets/GSJ-Logo-White.png'
import {Menu} from "lucide-react";
import {Button} from "./Button.tsx";
import {useState} from "react";

export function Navbar() {

    const [showMenu, setShowMenu] = useState(false);

    return (
        <div className={`flex flex-col header`}>
            {/* Navbar */}
            <div className='flex justify-between p-2.5'>
                <div className='flex flex-shrink-0 w-[200px] h-auto'>
                    <img src={logo} alt='loading'/>
                </div>

                <div className='hidden md:flex gap-2.5 flex-shrink-0 items-center'>
                    <Button variant='link'>
                        Home
                    </Button>

                    <Button variant='link'>
                        Kontakt
                    </Button>

                    <Button variant='link'>
                        Fotogalerie
                    </Button>
                </div>

                <div className='hidden md:flex flex-shrink-0 items-center'>
                    <Button>
                        Get started
                    </Button>
                </div>

                <div className='md:hidden'>
                    <Button onClick={() => setShowMenu(!showMenu)} variant='ghost' size='icon'>
                        <Menu/>
                    </Button>
                </div>
            </div>

            <div
                className={`${showMenu ? 'h-32' : 'h-0'} transition-all delay-150 duration-300 overflow-hidden flex w-full justify-center bg-gray-500 p-2.5 rounded`}>
                Test
            </div>

            <div
                className='flex flex-col justify-center items-center p-[100px] gap-5 lg:gap-3 text-center mt-auto mb-auto'>
                <h1 className='font-bold text-2xl lg:text-3xl'>
                    Profesionální společnost, která se specializuje v oboru Instalatérství, Topenářství, Sváření a
                    Plynu
                </h1>

                <h2 className='font-bold text-xl lg:text-2xl'>
                    Naší další specializací jsou stavební práce, výkopové práce a bourací
                    práce.
                </h2>

                <p className='text-balance text-sm'>Naší specializací jsou svářečské práce a kompletní realizace
                    vodovodního
                    řádu, kanalizace, topení a
                    plynu. Rozsah prací realizujeme v Ústeckém kraji, Středočeském kraji a v Praze, zejména však Most,
                    Chomutov, Jirkov, Kadaň, Louny, Žatec a okolí.
                </p>
            </div>
        </div>
    )
}