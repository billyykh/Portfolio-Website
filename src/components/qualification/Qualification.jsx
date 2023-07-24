import React from 'react'
import './qualification.css'

export default function Qualification() {

  const [Toggle,setToggle] = React.useState(1);

    const toggleTab = (index) => {
        setToggle(index);
    }

  return (
    <section className='qual section' id='qualification'>
      <h2 className='section_title'>Qualification</h2>
      <span className='section_subtitle'>My journey</span>

      <div className='qual_container container'>

        <div className='qual_tabs'>
          <div className={Toggle === 1 ? "qual_button qual_active button-flex" : "qual_button button-flex"} onClick={()=>toggleTab(1)}>
            <i class="uil uil-graduation-cap qual_icon"></i> Education
          </div>
          <div className={Toggle === 2 ? "qual_button qual_active button-flex" : "qual_button button-flex"} onClick={()=>toggleTab(2)}>
            <i class="uil uil-medal qual_icon"></i> Certification
          </div>
        </div>

        <div className='qual_sections'>

          {/* Education section */}
          <div className={Toggle === 1 ? "qual_content qual_content-active" : "qual_content"}>

            <div className='qual_data'>
              <div>
                <h3 className='qual_title'>Hong Kong Diploma of Secondary Education</h3>
                <span className='qual_subtitle'>ABLMCC, Hong Kong</span>

                <div className='qual_calender'>
                  <i class="uil uil-calendar-alt"></i> 2013-2019
                </div>
              </div>

              <div>
                <span className='qual_rounder'></span>
                <span className='qual_line'></span>
              </div>
            </div>

            <div className='qual_data'>
              <div></div>
              <div>
                <span className='qual_rounder'></span>
                
              </div>

              <div>
                <h3 className='qual_title'>Bachelor - Information Technology</h3>
                <span className='qual_subtitle'>Monash University, Australia</span>

                <div className='qual_calender'>
                  <i class="uil uil-calendar-alt qual_calender"></i> 2019-2022
                </div>
              </div>
            </div>

          </div>

          {/* Certification section */}
          <div className={Toggle === 2 ? "qual_content qual_content-active" : "qual_content"}>

            <div className='qual_data'>

              <div>
                <h3 className='qual_title'>Information Technology Degree</h3>
                <span className='qual_subtitle'>Monash University, Australia</span>
              </div>

              <div>
                <span className='qual_rounder'></span>
                <span className='qual_line'></span>
              </div>

            </div>

            <div className='qual_data'>
              <div></div>

              <div>
                <span className='qual_rounder'></span>
              </div>

              <div>
                <h3 className='qual_title'>UX Design Certificates</h3>
                <span className='qual_subtitle'>Google</span>

                
              </div>

            </div>

          </div>

        </div>
        
      </div>
    </section>
  )
}
