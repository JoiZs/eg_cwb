import React, { useContext, useState } from 'react'
import NightlightIcon from '@mui/icons-material/Nightlight';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import {gsap} from 'gsap'
import logo from '../assets/cwbLogo.png'
import logo2 from '../assets/cwbLogo2.png'
import { DarkCont } from './contextDark';
import MenuIcon from '@mui/icons-material/Menu';
import ClearIcon from '@mui/icons-material/Clear';


export default function NavBar() {
    
    const [darkMode, setDarkMode] = useState(true)
    const [darkIcon, setDarkIcon] = useState([<WbSunnyIcon />, <NightlightIcon />]) // eslint-disable-line @typescript-eslint/no-unused-vars
    const [dropMenuIcon, setDropMenuIcon] = useState([<MenuIcon />, <ClearIcon />]) // eslint-disable-line @typescript-eslint/no-unused-vars
    const [darkModeSelect, setDarkModeSelect] = useContext(DarkCont)
    const [toggleMenu, setToggleMenu] = useState(0)
    var [rotateDark , setRotateDark] = useState([360,0]) // eslint-disable-line @typescript-eslint/no-unused-vars
    var [logoCWB , setlogoCWB] = useState([logo,logo2]) // eslint-disable-line @typescript-eslint/no-unused-vars

   
    const toggleDark = ()=>{
        if(darkMode === true){
            document.querySelector('html')!.className  = 'dark'
            setDarkMode(!darkMode)
            setDarkModeSelect(1)
            gsap.fromTo('#darkMode', { opacity:0},{ opacity:1,rotation: rotateDark[darkModeSelect] })
        }
        else{
            document.querySelector('html')!.className = ''
            setDarkMode(!darkMode)
            setDarkModeSelect(0)
            gsap.fromTo('#darkMode',{ opacity:0},{ opacity:1,rotation: rotateDark[darkModeSelect] })
        }
    }
    const toggleMenuBtn = ()=>{
        if(toggleMenu === 0){
            gsap.fromTo('#menuList',{display:'none', position:"absolute",width:'33%', top:'0px', right:'10px' },{display:'flex', flexDirection:'column', position:'absolute', right:'10px', width:'33%', top:'64px', justifyContent:'flex-end', textAlign:'right'})

            setToggleMenu(1)

        }else{
            gsap.fromTo('#menuList',{display:'flex', position:"absolute", right:'10px', width:'33%', top:'64px' },{display:'none', right:'10px', width:'0%', top:'64px'})

            setToggleMenu(0)

        }
    }
    
    return (
        <div className='fixed z-10 flex justify-between items-center list-none uppercase bg-thewhite h-16 w-full dark:bg-thedarkblue dark:text-thewhite'>
            <div className='w-2/3 font-normal'>
                <div className='flex justify-start pl-10 items-center'>
                    <div>
                            <li className='cursor-pointer visible '><img className='w-20' src={logoCWB[darkModeSelect]} alt="CyberWithoutBorder" /></li>
                    </div>
                    <div id='menuList' className='tablet:flex tablet:justify-around p-1 tablet:p-0 hidden rounded-md backdrop-filter backdrop-blur-sm  w-full'>
                            <li className='cursor-pointer opacity-70  tablet:flex'><a href='# '>Home</a></li>
                            <li className='cursor-pointer opacity-70  tablet:flex'><a href='#secServ'>Services</a></li>
                            <li className='cursor-pointer opacity-70  tablet:flex'>learn</li>
                            <li className='cursor-pointer opacity-70  tablet:flex'>community</li>
                            <li className='cursor-pointer opacity-70  tablet:flex'>about</li>
                    </div>
                </div>
            
            </div>
            <div className='pr-4 flex justify-center items-center'>
                <div>
                    <li id='darkMode' className='cursor-pointer w-8' onClick={toggleDark}>{darkIcon[darkModeSelect]}</li>
                </div>
                <div>
                    <li id='dropMenuMode' className='cursor-pointer p-1 tablet:hidden bg-thedarkblue rounded dark:bg-white dark:text-thedarkblue text-white' onClick={toggleMenuBtn}>{dropMenuIcon[toggleMenu]}</li>
                </div>
            </div>
        </div>
    )
}
