type CardInformation = {
    name: string
    image: string
}

export function Card({name, image}: CardInformation) {
    return (
        <div className="flex flex-col items-center">
            <div className="flex flex-col w-[400px] h-[500px] gap-5 md:w-[230px] lg:w-[320px] xl:w-[400px]">
                <img src={image} alt="Nothing to show here"
                     className="transition-all rounded-lg w-full h-[300px] bg-contain bg-center grayscale hover:grayscale-0 hover:-translate-y-2"/>
                <h1 className="text-xl font-bold text-center">{name}</h1>
            </div>
        </div>
    )
}