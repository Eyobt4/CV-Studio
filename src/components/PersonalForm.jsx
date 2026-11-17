

function PersonalForm({personal,onChange,onSubmit}) {

   
  return (
    <div>
      <h2>Personal Input</h2>
      <form onSubmit={onSubmit}>

        <input type="text" name="fullname" value={personal.fullname} onChange={onChange} placeholder="Enter your Full name"/>
        <input  name="email" value={personal.email} type="text" onChange={onChange} placeholder="Enter your Email"/>
        <input  name="phone" value={personal.phone} type="text" onChange={onChange} placeholder="Enter your Phone"/>
        <input  name="location" value={personal.location} type="text" onChange={onChange} placeholder="Enter your Location"/>
        <input  name="linkedin" value={personal.linkedin} type="text" onChange={onChange} placeholder="Enter your Linkedin"/>
        <input  name="github" value={personal.github} type="text" onChange={onChange} placeholder="Enter your Github"/>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default PersonalForm
