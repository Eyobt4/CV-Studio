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
      id:1, company:"", role:"",description:"",from:"",to:"",

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
  
  const handleEduAdd = () => {
    const newEducation = {
      id: Date.now(),
      school: "",
      degree: "",
      field: "",
      from: "",
      to: "",
    };

    setCvData((prevData) => ({
      ...prevData,
      education: [...prevData.education, newEducation],
    }));
  };

  const handleEduChange = (id, e) => {
    const { name, value } = e.target;

    setCvData((prevData) => ({
      ...prevData,
      education: prevData.education.map((item) =>
        item.id === id ? { ...item, [name]: value } : item
      ),
    }));
  };

  const handleEduDelete = (idToRemove) => {
    setCvData((prevData) => ({
      ...prevData,
      education: prevData.education.filter((item) => item.id !== idToRemove),
    }));
  };

  const handleSubmit = (e)=>{
    e.preventDefault()

  }

  const handleExpAdd = () => {
    const newExperiance = {
      id: Date.now(),
      company: "",
      role: "",
      description: "",
      from: "",
      to: "",
    };

    setCvData((prevData) => ({
      ...prevData,
      experiance: [...prevData.experiance, newExperiance],
    }));
  };

  const handleExpChange = (id, e) => {
    const { name, value } = e.target;

    setCvData((prevData) => ({
      ...prevData,
      experiance: prevData.experiance.map((item) =>
        item.id === id ? { ...item, [name]: value } : item
      ),
    }));
  };

  const handleExpDelete = (idToRemove) => {
    setCvData((prevData) => ({
      ...prevData,
      experiance: prevData.experiance.filter((item) => item.id !== idToRemove),
    }));
  };








  // console.log(cvData)
  return (
    <div>
      <NavBar/>
      <FormPanel
      personal={cvData.personal}
      onChange={handlePersonalChange}
      onSubmit = {handleSubmit}
      education={cvData.education}
      onEduChange={handleEduChange}
      onEduAdd = {handleEduAdd}
      onEduDelete = {handleEduDelete}
      experiance={cvData.experiance}
      onExpChange={handleExpChange}
      onExpAdd = {handleExpAdd}
      onExpDelete = {handleExpDelete}
      />
      <CvPreview 
      personal={cvData.personal}
      education={cvData.education}
      experiance={cvData.experiance}
      />

    </div>
  )
}

export default App
