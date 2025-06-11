import React from 'react'
import Title from './Title'

import {services} from '../data.js'

const services_map = services.map((service, index)=>{
  const {id,icon,title,text} = service
  return(
    <article key={id} className="service">
      <span className="service-icon"><i className={icon}></i></span>
      <div className="service-info">
        <h4 className="service-title">{title}</h4>
        <p className="service-text">
          {text}
        </p>
      </div>
    </article>
  )
})



const Services = () => {
  return (
    <section className="section services" id="services">
      <Title title = "our" subTitle = "services" />
      <div className="section-center services-center">
        {services_map}
      </div>
    </section>
  )
}

export default Services