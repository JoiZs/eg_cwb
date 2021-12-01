import ContextDark from './contextDark'
import ExtraInfo from './extraInfo'
import Home from './home'
import NavBar from './nav'
import Services from './services'

export default function Container() {
    return (
        <ContextDark>
            <div className='bg-thewhite h-vh3 bg-polyline-bg'>
                <NavBar />
                <Home />
                <Services />
                <ExtraInfo />
            </div>
        </ContextDark>
    )
}
