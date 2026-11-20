function EducationForm({ education, onEduChange, onEduAdd,onEduDelete }) {
  return (
    <div>
      <h2>Education Input</h2>

      {education.map((item) => (
        <div key={item.id} className="input-form">
          <input
            type="text"
            name="school"
            value={item.school}
            onChange={(e) => onEduChange(item.id, e)}
            placeholder="Enter your school"
          />
          <input
            type="text"
            name="degree"
            value={item.degree}
            onChange={(e) => onEduChange(item.id, e)}
            placeholder="Enter your degree"
          />
          <input
            type="text"
            name="field"
            value={item.field}
            onChange={(e) => onEduChange(item.id, e)}
            placeholder="Enter your study field"
          />
          <input
            type="date"
            name="from"
            value={item.from}
            onChange={(e) => onEduChange(item.id, e)}
          />
          <input
            type="date"
            name="to"
            value={item.to}
            onChange={(e) => onEduChange(item.id, e)}
          />

          {education.length > 1 && (
            <button type="button" onClick={() => onEduDelete(item.id)}>
              Delete
            </button>
          )}
        </div>
      ))}


      <button type="button" onClick={onEduAdd}>
        + Add Education
      </button>
    </div>
  );
}

export default EducationForm;