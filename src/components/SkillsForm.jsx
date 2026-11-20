import React from 'react'

function SkillsForm({ skills,onSkillsAdd,onSkillsDelete,onSkillsChange }) {
  return (
    <div>
      <h2>Skills Input</h2>

      {skills.map((item) => (
        <div key={item.id} className='input-form'>
          <input
            type="text"
            name="skills"
            value={item.skills}
            onChange={(e) => onSkillsChange(item.id, e)}
            placeholder="Enter your school"
          />

          {skills.length > 1 && (
            <button type="button" onClick={() => onSkillsDelete(item.id)}>
              Delete
            </button>
          )}
        </div>
      ))}


      <button type="button" onClick={onSkillsAdd}>
        + Add Skill
      </button>
    </div>
  );
}

export default SkillsForm
