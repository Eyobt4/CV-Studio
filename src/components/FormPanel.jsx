import EducationForm from "./EducationForm"
import ExperianceForm from "./ExperianceForm"
import PersonalForm from "./PersonalForm"


function FormPanel({personal,onChange,onSubmit,education,onEduChange,onEduAdd,onEduDelete,experiance,onExpChange,onExpAdd,onExpDelete}) {
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
      onAdd = {onEduAdd}
      onDelete={onEduDelete}
      />
      <ExperianceForm
      experiance={experiance}
      onExpChange={onExpChange}
      onSubmit = {onSubmit}
      onExpAdd = {onExpAdd}
      onExpDelete={onExpDelete}
      />

    </div>
  )
}

export default FormPanel
