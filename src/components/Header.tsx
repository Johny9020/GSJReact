export function Header() {
    return (
        <div
            className={`flex flex-col w-full h-[600px] justify-center items-center bg-cover bg-center bg-[url('./assets/autogen.jpg')] bg-black bg-blend-color bg-opacity-60 text-white`}>
            <div className="flex flex-col text-center m-8 gap-3">
                <h1 className="md:text-4xl text-3xl font-bold">Profesionální společnost, která se specializuje v oboru
                    Instalatérství,
                    Topenářství, Sváření a
                    Plynu</h1>

                <h2 className="md:text-3xl text-xlfont-bold">Naší další specializací jsou stavební práce, výkopové
                    práce
                    a
                    bourací
                    práce.</h2>

                <p>
                    Naší specializací jsou svářečské práce a kompletní realizace vodovodního řádu, kanalizace,
                    topení a
                    plynu. Rozsah prací realizujeme v Ústeckém kraji, Středočeském kraji a v Praze, zejména však
                    Most,
                    Chomutov, Jirkov, Kadaň, Louny, Žatec a okolí.
                </p>
            </div>
        </div>
    )
}