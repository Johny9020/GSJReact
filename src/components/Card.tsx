type CardInformation = {
    name: string
    image: string
}

export function Card({name, image}: CardInformation) {
    return (
        <div className="flex gap-10 pb-10">
            <div
                className="flex flex-col justify-center items-center xl:w-[400px] h-[400px] gap-5">
                <img src={image} alt="Nothing to show here"
                     className="transition-all rounded-lg w-full h-[300px] grayscale hover:grayscale-0 hover:-translate-y-2"/>
                <h1 className="text-xl font-bold text-center">{name}</h1>
            </div>
        </div>
    )
}