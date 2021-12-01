import React from 'react'

interface Props {
    title: string;
    photo: string;
    about: string;
}

export const EachService:React.FC<Props> = (service: Props) => {
    return (
        <div className='flex justify-center items-center flex-col p-4 h-32'>
            <h1>{service.title}</h1>
            <img className='rounded-full w-32 border-black border' src={`${service.photo}`} alt="Service" />
            <p>{service.about}</p>
        </div>
    )
}
