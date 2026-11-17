import React from 'react'

function CvPreview({personal,education}) {
  return (
    <div>
      <section>
        <h1>Personal Info</h1>
        <h1>{personal.fullname}</h1>
        <p>{personal.email}</p>|
        <p>{personal.phone}</p>|
        <p>{personal.location}</p>|
        <p>{personal.linkedin}</p>|
        <p>{personal.github}</p>|
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

    </div>
  )
}

export default CvPreview
