import React from 'react'

function CvPreview({personal,education,experiance,skills}) {
  return (
    <div>
      <section>
        <h1>Personal Info</h1>
        <h1>{personal.fullname}</h1>
        <p>{personal.email}</p>
        <p>{personal.phone}</p>
        <p>{personal.location}</p>
        <p>{personal.linkedin}</p>
        <p>{personal.github}</p>
      </section>
      <section>
        
        <h1>Education Info</h1>
        {education.map((item)=>{
          return(
          <div key={item.id}>

            <h1>{item.school}</h1>
            <p>{item.degree}</p>
            <p>{item.field}</p>
            <p>{item.from}</p>
            <p>{item.to}</p>
          </div>
        )})}
      </section>
      <section>
        
        <h1>Experiance Info</h1>
        {experiance.map((item)=>{
          return(
          <div key={item.id}>

            <h1>{item.company}</h1>
            <p>{item.role}</p>
            <p>{item.description}</p>
            <p>{item.from}</p>
            <p>{item.to}</p>
          </div>
        )})}
      </section>
      <section>
        
        <h1>Skills Info</h1>
        {skills.map((item)=>{
          return(
          <div key={item.id}>

            <p>{item.skills}</p>
          </div>
        )})}
      </section>

    </div>
  )
}

export default CvPreview
