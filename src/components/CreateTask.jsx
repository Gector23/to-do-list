import React from 'react';

const CreateTask = ({ projectId, onAddTask }) => {
  const handleFormSubmit = event => {
    event.preventDefault();

    const { name, date } = event.target.elements;

    const id = `${projectId}-${new Date().getTime()}`;

    onAddTask({
      id,
      name: name.value,
      date: Number(date.value),
      complete: false
    });

    event.target.reset();
  };

  let options = [];

  for (let i = 0; i < 7; i++) {
    const currentDate = new Date();
    const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() + i);

    options.push(<option key={date.getTime()} value={date.getTime()}>{date.toLocaleDateString()}</option>);
  }

  return (
    <>
      <form className="mb-3" onSubmit={handleFormSubmit}>
        <div className="row mb-2">
          <div className="col">
            <div className="input-group input-group-sm">
              <input className="form-control" type="text" name="name" placeholder="Task name" required />
              <div className="input-group-append">
                <button className="btn btn-primary" type="submit">Add</button>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-auto">
            <select className="custom-select custom-select-sm" name="date">
              {options}
            </select>
          </div>
        </div>
      </form>
    </>
  );
};

export default CreateTask;