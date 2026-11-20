function CvPreview({personal,education,experiance,skills}) {

  const hasPersonal = personal.fullname.trim() || personal.email.trim() || personal.email.trim() || 
  personal.phone.trim() || personal.location.trim() || personal.linkedin.trim() || personal.github.trim()

  const hasEducation = education.some((item)=>(item.school.trim() ||
            item.degree.trim() ||
            item.field.trim() ||
            item.from.trim() ||
            item.to.trim()
  ))

  const hasExperiance = experiance.some((item)=>(
          item.company.trim() ||        
          item.role.trim() ||
          item.description.trim() ||
          item.from.trim() ||
          item.to.trim() 
  ))
  
  const hasSkills = skills.some((item)=>(
    item.skills.trim()
  ))
  
  return (
    <div className="preview">
      {
      hasPersonal && <section>
        <h2 className="cv-header">Personal Info</h2>
        <h1>{personal.fullname}</h1>
        <p className="cv-contact">{personal.email}</p>
        <p className="cv-contact">{personal.phone}</p>
        <p className="cv-contact">{personal.location}</p>
        <p>{personal.linkedin}</p>
        <p>{personal.github}</p>
      </section>
      }
      {hasEducation && 
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
      }
      {
        hasExperiance && <section>
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
      }
      {
        hasSkills && <section>
        <h2 className="cv-header">Skills Info</h2>
        {skills.map((item)=>{
          return(
          <div key={item.id}>

            <p>{item.skills}</p>
          </div>
        )})}
      </section>
      }

    </div>
  )
}

export default CvPreview
