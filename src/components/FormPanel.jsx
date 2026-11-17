import EducationForm from "./EducationForm"
import PersonalForm from "./PersonalForm"


function FormPanel({personal,onChange,onSubmit,education,onEduChange,onAddChange}) {
  return (
    <div>
      <PersonalForm
      personal={personal}
      onChange={onChange}
      onSubmit = {onSubmit}
      />
      <EducationForm
      education={education}
      onChange={onEduChange}
      onSubmit = {onSubmit}
      onClick = {onAddChange}
      />
      {/* <button>Add</button> */}
    </div>
  )
}

export default FormPanel
