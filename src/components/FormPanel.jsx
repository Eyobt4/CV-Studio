import EducationForm from "./EducationForm"
import ExperianceForm from "./ExperianceForm"
import PersonalForm from "./PersonalForm"
import SkillsForm from "./SkillsForm"


function FormPanel({personal,onChange,onSubmit,
  education,onEduChange,onEduAdd,onEduDelete,
  experiance,onExpChange,onExpAdd,onExpDelete,
  skills,onSkillsAdd,onSkillsChange,onSkillsDelete}) {
  return (
    <div>
      <PersonalForm
      personal={personal}
      onChange={onChange}
      onSubmit = {onSubmit}
      />
      <EducationForm
      education={education}
      onEduChange={onEduChange}
      onSubmit = {onSubmit}
      onEduAdd = {onEduAdd}
      onEduDelete={onEduDelete}
      />
      <ExperianceForm
      experiance={experiance}
      onExpChange={onExpChange}
      onSubmit = {onSubmit}
      onExpAdd = {onExpAdd}
      onExpDelete={onExpDelete}
      />
      <SkillsForm
      skills={skills}
      onSkillsChange={onSkillsChange}
      onSubmit = {onSubmit}
      onSkillsAdd = {onSkillsAdd}
      onSkillsDelete={onSkillsDelete}
      />

    </div>
  )
}

export default FormPanel
