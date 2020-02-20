import React from "react";

const Tasks = () => (
  <main className="mx-grid__main">
    <h1>Tasks</h1>
    <h2>Check and complete group tasks</h2>
    <div className="mx-grid-block">
      <div className="mx-grid-block__container">
        <form className="mx-grid-block__tasks">
          <div className="mx-grid-block__tasks--add">
            <a href="/tasks">Add task</a>
          </div>
          <label>
            <input type="checkbox" /> Task item description
            <pre>Item-label</pre>
          </label>
          <hr />
          <label>
            <input type="checkbox" /> Task item description
            <pre>Item-label</pre>
          </label>
          <hr />
          <label>
            <input type="checkbox" /> Task item description
            <pre>Item-label</pre>
          </label>
          <hr />
          <label>
            <input type="checkbox" /> Task item description
            <pre>Item-label</pre>
          </label>
        </form>
      </div>
    </div>
  </main>
);

export default Tasks;
