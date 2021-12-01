import { EachService } from './oneService'
import logo from '../assets/cwbLogo.png'

export default function Services() {
    return (
        <section id='secServ' className='h-screen pt-16 flex justify-start flex-col text-thedarkblue dark:text-white items-center dark:bg-thedarkblue backdrop-filter backdrop-blur-sm'>
            <div className='uppercase text-4xl tablet:text-4xl h-1/3 flex justify-center items-center'>
                <h1>Services</h1>
            </div>
            <div className='flex justify-around flex-col tablet:flex-row w-full '>
                <EachService title='One' photo={logo} about='Molestias commodi ' />
                <EachService title='Two' photo={logo} about='Molestias commodi ' />
                <EachService title='Three' photo={logo} about='Molestias commodi ' />
                <EachService title='Four' photo={logo} about='Molestias commodi ' />
            </div>
        </section>
    )
}
