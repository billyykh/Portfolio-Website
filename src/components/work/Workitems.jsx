import React from 'react'

export default function Workitems({item}) {
  return (
    <div className="work_card" key={item.id}>
        <img src={item.image} className='work_img'/>
        <h3 className="work_title">{item.title}</h3>
        <p></p>
    </div>
  )
}
