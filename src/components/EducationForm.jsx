import { useState } from 'react'


function EducationForm({education,onChange,onSubmit,onClick}) {
    
  return (
    <div>
      <h2>Education Info</h2>
      <form onSubmit={onSubmit}>

        <input  name="school" value={education.school} type="text" onChange={onChange} placeholder="Enter your school"/>
        <input  name="degree" value={education.degree} type="text" onChange={onChange} placeholder="Enter your degree"/>
        <input  name="field" value={education.field} type="text" onChange={onChange} placeholder="Enter your study field"/>
        <input  name="From" value={education.From} type="date" onChange={onChange} />
        <input  name="to" value={education.to} type="date" onChange={onChange} />
        <button type='button' onClick={onClick} >Add</button>

      </form>
    </div>
  )
}

export default EducationForm
