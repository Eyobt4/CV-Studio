import React from 'react'

function ExperianceForm({ experiance ,onExpChange,onExpAdd,onExpDelete }) {
  return (
    <div>
      <h2>Experiance Input</h2>

      {experiance.map((item) => (
        <div key={item.id}>
          <input
            type="text"
            name="company"
            value={item.company}
            onChange={(e) => onExpChange(item.id, e)}
            placeholder="Enter your company"
          />
          <input
            type="text"
            name="role"
            value={item.role}
            onChange={(e) => onExpChange(item.id, e)}
            placeholder="Enter your role"
          />
          <input
            type="text"
            name="description"
            value={item.description}
            onChange={(e) => onExpChange(item.id, e)}
            placeholder="Enter your study description"
          />
          <input
            type="date"
            name="from"
            value={item.from}
            onChange={(e) => onExpChange(item.id, e)}
          />
          <input
            type="date"
            name="to"
            value={item.to}
            onChange={(e) => onExpChange(item.id, e)}
          />

          {experiance.length > 1 && (
            <button type="button" onClick={() => onExpDelete(item.id)}>
              Delete
            </button>
          )}
        </div>
      ))}


      <button type="button" onClick={onExpAdd}>
        + Add Experiance
      </button>
    </div>
  );
}

export default ExperianceForm
