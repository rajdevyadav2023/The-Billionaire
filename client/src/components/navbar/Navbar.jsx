import { NavLink } from 'react-router-dom'
import './navbar.css'
import { useState } from 'react'
const Navbar = () => {
    const [clicked, setClicked] = useState(false);

    const handleClick = ()=>{
        setClicked(!clicked)
    }
    return (
        <>
            <nav>
                <h1 className="logo"><NavLink to={'/'}><span className="fc">B</span>illionaire</NavLink></h1>


                <div>
                    <ul id='navbar' className={clicked?"active-navbar":""}>
                        <li><NavLink to={'/education'}>Education</NavLink></li>
                        <li><NavLink to={'/mindset'}>Mindset</NavLink></li>
                        <li><NavLink to={'/career'}>Career</NavLink></li>
                        <li><NavLink to={'/business'}>Business</NavLink></li>
                        <li><NavLink to={'/habits'}>Habits</NavLink></li>
                        <li><NavLink to={'/lifestyle'}>Lifestyle</NavLink></li>
                        <li><NavLink to={'/join'}>Join Us</NavLink></li>
                    </ul>
                </div>

                <div id="mobile" onClick={handleClick}>
                    <i className={`fa-solid ${clicked?"fa-times":"fa-bars"}`}></i>
                </div>
            </nav>
        </>
    )
}

export default Navbar