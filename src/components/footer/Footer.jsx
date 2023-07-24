import React from 'react'
import './footer.css'

export default function Footer() {
  return (
    <footer className='footer'>
        <div className='footer_container container'>
            <h1 className='footer_title'>Billy</h1>
            
            <div className='footer_social'>
                <a href='https://www.instagram.com/bbbilly.kh/' className='footer_social-icon' target='_blank'><i class="uil uil-instagram"></i></a>

                <a href='https://www.facebook.com/billyykh/' className='footer_social-icon' target='_blank'><i class="uil uil-facebook-f"></i></a>

                <a href='https://www.linkedin.com/in/king-hin-yau-a9595525b' className='footer_social-icon' target='_blank'><i class="uil uil-linkedin-alt"></i></a>
            </div>

            <span className='footer_copy'>&#169; King Hin Yau. All right reserved</span>
        </div>
    </footer>
  )
}
