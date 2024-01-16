import {Navbar} from './components/Navbar'
import {Header} from "./components/Header";
import {Card} from "./components/Card.tsx";
import {getImage} from './utils/utils.tsx';

function App() {
    return (
        <>
            <Navbar/>
            <Header/>

            <div className="flex flex-col items-center pt-5 gap-5 bg-[#2F2F2F] text-white">
                <h1 className='font-bold text-2xl'>Naše Reference</h1>
                <div className="lg:flex gap-10 justify-between">
                    <Card name='PFUK Kotelna' image={getImage('kotelna1', 'jpeg')}/>
                    <Card name='Administrativní Budova Na Pankráci 30' image={getImage('kotelna2', 'jpg')}/>
                    <Card name='Kotelna Vápenná' image={getImage('kotelna3', 'jpg')}/>
                </div>
            </div>
        </>
    )
}

export default App
