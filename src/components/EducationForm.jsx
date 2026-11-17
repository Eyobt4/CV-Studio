import { useState } from 'react'


function EducationForm({education,onChange,onSubmit,onClick}) {
    
  return (
    <div>
      <h2>Education Input</h2>
      <form onSubmit={onSubmit}>
      {education.map((item)=>{
        return(
        <div key={item.id}>


            <input  name="school" value={item.school} type="text" onChange={onChange} placeholder="Enter your school"/>
            <input  name="degree" value={item.degree} type="text" onChange={onChange} placeholder="Enter your degree"/>
            <input  name="field" value={item.field} type="text" onChange={onChange} placeholder="Enter your study field"/>
            <input  name="from" value={item.from} type="date" onChange={onChange} />
            <input  name="to" value={item.to} type="date" onChange={onChange} />


        </div>
      )})}
      </form>
      <button type='button' onClick={onClick}>Add</button>
    </div>
  )
}

export default EducationForm
