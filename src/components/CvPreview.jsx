function CvPreview({personal,education,experiance,skills}) {
  return (
    <div className="preview">
      <section className="">
        <h2 className="cv-header">Personal Info</h2>
        <h1>{personal.fullname}</h1>
        <p className="cv-contact">{personal.email}</p>
        <p className="cv-contact">{personal.phone}</p>
        <p className="cv-contact">{personal.location}</p>
        <p>{personal.linkedin}</p>
        <p>{personal.github}</p>
      </section>
      <section>
        
        <h2 className="cv-header">Education Info</h2>
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
        
        <h2 className="cv-header">Experiance Info</h2>
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
        
        <h2 className="cv-header">Skills Info</h2>
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
