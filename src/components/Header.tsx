export function Header() {
    return (
        <div
            className={`flex flex-col w-full h-[600px] items-center justify-center p-7 gap-2.5 
            text-center bg-cover bg-center bg-[url('./assets/autogen.jpg')] 
            bg-black bg-blend-color bg-opacity-40 text-white`}>

            <div>
                <h1 className='text-2xl font-bold lg:text-3xl'>
                    Profesionální společnost, která se specializuje v oboru Instalatérství, Topenářství, Sváření a Plynu
                </h1>
            </div>

            <div>
                <h2 className='text-xl font-bold lg-text-2xl'>
                    Naší další specializací jsou stavební práce, výkopové práce a bourací práce.
                </h2>
            </div>

            <div>
                <p className='text-sm'>
                    Naší specializací jsou svářečské práce a kompletní realizace vodovodního řádu, kanalizace, topení a
                    plynu. Rozsah prací realizujeme v Ústeckém kraji, Středočeském kraji a v Praze, zejména však Most,
                    Chomutov, Jirkov, Kadaň, Louny, Žatec a okolí.
                </p>
            </div>
        </div>
    )
}