import React from 'react'

function CvPreview({personal,education}) {
  return (
    <div>
      <section>

        <h1>{personal.fullname}</h1>
        <p>{personal.email}</p>|
        <p>{personal.phone}</p>|
        <p>{personal.location}</p>|
        <p>{personal.linkedin}</p>|
        <p>{personal.github}</p>|
      </section>
      <section>
        <h1>{education.school}</h1>
        <p>{education.degree}</p>
        <p>{education.field}</p>
        <p>{education.from}</p>
        <p>{education.to}</p>
      </section>

    </div>
  )
}

export default CvPreview
