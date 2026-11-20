import { useState } from "react"
import NavBar from "./components/NavBar"
import FormPanel from "./components/FormPanel"
import CvPreview from "./components/CvPreview"


function App() {
  const [preview,setPreview] = useState(false)
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
    skills:[{
      id:1,skills:""}]
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

  const handleSkillsAdd = () => {
    const newSkill = {
      id: Date.now(),
      skills:""
    };

    setCvData((prevData) => ({
      ...prevData,
      skills: [...prevData.skills, newSkill],
    }));
  };

  const handleSkillsChange = (id, e) => {
    const { name, value } = e.target;

    setCvData((prevData) => ({
      ...prevData,
      skills: prevData.skills.map((item) =>
        item.id === id ? { ...item, [name]: value } : item
      ),
    }));
  };

  const handleSkillsDelete = (idToRemove) => {
    setCvData((prevData) => ({
      ...prevData,
      skills: prevData.skills.filter((item) => item.id !== idToRemove),
    }));
  };

  const handleClearAll = ()=>{
    setCvData({
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
    skills:[{
      id:1,skills:""}]
    });
  }


  const loadExample= ()=>{
    setCvData({
      personal:{
      fullname:"Eyob Tesfaye",
      email:"eyobtesfaye838@gmail.com",
      phone:"0924321402",
      location:"Addis Ababa, Ethiopia",
      linkedin:"https://www.linkedin.com/",
      github:"https://github.com/Eyobt4",

    },
    education:[{
      id:1,school:"AASTU",degree:"BSc",field:"ElectroMechanical Engineering",from:"2022-01-01",to:"2025-01-01",
    }],
    experiance:[{
      id:1, company:"Safaricom", role:"Frontend Developer",description:"Build responsive product showcase single page web applications",from:"2025-01-01",to:"2025-03-01",

    }],
    skills:[
      {id:1,skills:"HTML",},
      {id:2,skills:"CSS",},
      {id:3,skills:"JavaScript",},
    
    ]
    })
  }

  const handleDownload= ()=>{
    setPreview(false);
    window.print();
  }
  
  const handlePreview= ()=>{
    setPreview(true);
  }
  const handleEdit= ()=>{
    setPreview(false);
  }

  const handlePreviewToggle = ()=>(
    setPreview((prev)=>!prev)
  )



  return (
    <div>
      <NavBar />

      <div className="no-print" style={{ display: "flex", gap: "10px", justifyContent: "center", padding: "16px" }}>
        <button type="button" onClick={handleClearAll}>Clear All</button>
        <button type="button" onClick={loadExample}>Load Example</button>
        <button type="button"  onClick={handlePreviewToggle}>{preview ? "Edit" : "Preview"}</button>
        <button type="button" onClick={handleDownload}>Download</button>
      </div>

      <section className="body">
        <div className="no-print" style={{ flex: 1 }}>
          {!preview && <FormPanel
            isPreview={preview}
            personal={cvData.personal}
            onChange={handlePersonalChange}
            onSubmit={handleSubmit}
            education={cvData.education}
            onEduChange={handleEduChange}
            onEduAdd={handleEduAdd}
            onEduDelete={handleEduDelete}
            experiance={cvData.experiance}
            onExpChange={handleExpChange}
            onExpAdd={handleExpAdd}
            onExpDelete={handleExpDelete}
            skills={cvData.skills}
            onSkillsChange={handleSkillsChange}
            onSkillsAdd={handleSkillsAdd}
            onSkillsDelete={handleSkillsDelete}
            preview={preview}
          />}
        </div>

        <div style={{ flex: 10.15, position: "sticky", top: "84px" }}>
          <CvPreview
            personal={cvData.personal}
            education={cvData.education}
            experiance={cvData.experiance}
            skills={cvData.skills}
          />
        </div>
      </section>
    </div>
  );
}

export default App
