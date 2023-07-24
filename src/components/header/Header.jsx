import React from 'react'
import "./header.css"

export default function Header() {

   const[Toggle, setToggle] = React.useState(false);

  return (
    <header className='header'>
        <nav className='nav container'>
            <a href='#home' className='nav_logo'><i class='bx bx-home-alt' ></i> Billy</a>

            <div className={Toggle ? "nav_menu show-menu" : "nav_menu"}>

                <ul className='nav_list grid'>

                    <li className='nav_item'>
                        <a href='#about' className='nav_link'>
                            <i class="uil uil-user nav_icon"></i> About
                        </a>
                    </li>

                    <li className='nav_item'>
                        <a href='#skills' className='nav_link'>
                            <i class="uil uil-file-alt nav_icon"></i> Skills
                        </a>
                    </li>

                    <li className='nav_item'>
                        <a href='#qualification' className='nav_link'>
                            <i class="uil uil-briefcase-alt nav_icon"></i> Qualification
                        </a>
                    </li>

                    <li className='nav_item'>
                        <a href='#contact' className='nav_link'>
                            <i class="uil uil-message nav_icon"></i> Contact
                        </a>
                    </li>

                </ul>

                <i class="uil uil-times nav_close" onClick={() => setToggle(!Toggle)}></i>
            </div>

            <div className='nav_toggle' onClick={() => setToggle(!Toggle)}>
                <i class="uil uil-apps"></i>
            </div>

        </nav>
    </header> 
  )
}
