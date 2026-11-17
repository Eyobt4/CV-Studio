import { useState } from "react"
import NavBar from "./components/NavBar"
import FormPanel from "./components/FormPanel"
import CvPreview from "./components/CvPreview"
import PersonalForm from "./components/PersonalForm"


function App() {

  const [cvData, setCvData] = useState({
    personal:{
      fullname:"",
      email:"",
      phone:"",
      location:"",
      linkedin:"",
      github:"",

    },
    education:[{
      id:1,school:"",degree:"",field:"",from:"",to:"",
    }],
    experiance:[{
      id:1, company:"", role:"",from:"",to:"",description:"",

    }],
    skills:[]
  });

  const handlePersonalChange = (e)=>{
    const {name,value}= e.target;
    setCvData((prevData)=>({
      ...prevData,
      personal:{

        ...prevData.personal,[name]:value  
      }}))}
  
  const handleAdd = ()=>{
    const newEducation = {
      id:Date.now(),school:"",degree:"",field:"",from:"",to:"",
    }
    setCvData((prevData)=>({
      ...prevData,
      education:[{
        ...prevData.education,
        newEducation
    }]  
    }))
  }

  const handleEducationChange = (e)=>{
    const {name,value}= e.target;
    setCvData((prevData)=>({
      ...prevData,
      education:[{

        ...prevData.education,[name]:value  
      }]}))}

  const handleSubmit = (e)=>{
    e.preventDefault()

  }

  // console.log(cvData)
  return (
    <div>
      <NavBar/>
      <FormPanel
      personal={cvData.personal}
      onChange={handlePersonalChange}
      onSubmit = {handleSubmit}
      education={cvData.education}
      onEduChange={handleEducationChange}
      onAddChange = {handleAdd}
      />
      <CvPreview 
      personal={cvData.personal}
      education={cvData.education}
      />

    </div>
  )
}

export default App
