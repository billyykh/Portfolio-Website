import React from 'react'
import './skills.css'
import LeftSkill from './LeftSkill.jsx'
import RightSkill from './RightSkill.jsx'

export default function Skills() {
    return (
        <section className='skills section hide'>
            <h2 className='section_title'>Skills</h2>
            <span className='section_subtitle'>My technical level</span>
            <div className='skills_container contatiner grid'>
                <LeftSkill />
                <RightSkill />
            </div>
        </section>
        
    )
}
