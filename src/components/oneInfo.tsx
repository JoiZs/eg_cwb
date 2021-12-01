import React from 'react'

interface Props {
    title:string,
    about:string,
    photo:string
}

const EachInfo: React.FC<Props> = (info:Props)=> {
    return (
        <section className='flex justify-center flex-row'>
            <div className='flex justify-center flex-col w-2/3 px-7 tablet:w-1/2'>
                <h1 className='text-5xl  text-right'>{info.title}</h1>
                <p className=' text-right'>{info.about}</p>
            </div>
            <div className='w-1/3 flex justify-center tablet:w-1/2 items-center'><img className='h-1/4 tablet:h-1/2' src={info.photo} alt="Info" /></div>
        </section>
    )
}

export default EachInfo;