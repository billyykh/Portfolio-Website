import React from 'react'

export default function Info() {
  return (
    <div className='about_info grid'>
        <div className='about_box'>
            <i class='bx bx-book-bookmark about_icon'></i>
            <h3 className='about_title'>Education</h3>
            <span className='about_subtitle'>Graduated from Australia's Top University</span>
        </div>

        <div className='about_box'>
            <i class='bx bx-award about_icon'></i>
            <h3 className='about_title'>Experience</h3>
            <span className='about_subtitle'>2 Semesters of Website Development</span>
        </div>

        <div className='about_box'>
            <i class='bx bx-user-circle about_icon'></i>
            <h3 className='about_title '>Characteristic</h3>
            <span className='about_subtitle'>Adaptable<br/>Careful<br/>Team player</span>
        </div>
    </div>
  )
}
