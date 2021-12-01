import React, { useContext } from 'react'
import { DarkCont } from './contextDark';

interface Props {
    
}

const Home: React.FC<Props> = (props: Props)=> {
    const [darkModeSelect, setDarkModeSelect] = useContext(DarkCont)
    return (
        <div className='pt-14 backdrop-filter backdrop-blur-sm dark:bg-thedarkblue h-screen flex flex-col-reverse tablet:flex-row'>
            <div className='tablet:w-2/3 desktop:w-1/3 text-thedarkblue h-full flex justify-start tablet:justify-center items-center flex-col dark:text-thewhite tablet:p-20 p-10'>
                <h1 className='uppercase text-7xl'>cyber security</h1>
                <p className='text-center tablet:text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore necessitatibus ad recusandae asperiores veritatis ducimus magnam libero facere, tempora eius cum nihil enim reprehenderit debitis vero maxime illum! Iusto, recusandae?</p>
            </div>
            <div className={`bg-home-bg${darkModeSelect} bg-contain bg-center bg-no-repeat h-1/2  tablet:h-full tablet:w-1/3 desktop:w-2/3`}></div>
        </div>
    )
}

export default Home;