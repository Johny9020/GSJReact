import {Navbar} from './components/Navbar'
import {Header} from "./components/Header";
import {Card} from "./components/Card.tsx";
import {getImageHref} from "./utils/utils.tsx";

function App() {
    return (
        <>
            <Navbar/>
            <Header/>

            <div className='flex flex-col pt-5 bg-[#2F2F2F] text-white gap-10'>
                <h1 className='text-3xl font-bold text-center'>Naše práce</h1>
                <div className='flex flex-col md:flex-row md:justify-center md:gap-5'>
                    <Card name='PFUK Kotelna' image={getImageHref('kotelna1', 'jpeg')}/>
                    <Card name='PFUK Kotelna' image={getImageHref('kotelna2', 'jpg')}/>
                    <Card name='PFUK Kotelna' image={getImageHref('kotelna3', 'jpg')}/>
                </div>
            </div>
            
        </>
    );
}

export default App
