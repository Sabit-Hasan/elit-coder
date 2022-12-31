import { useRef } from "react";
import { ref, set } from "firebase/database";
import { database } from "../../firebase.config";
import uuid from 'react-uuid';

export default function QuesUpload() {

  const formSubmit = (e) => {
    e.preventDefault();

    set(ref(database, 'questions/' + uuid()), {
      title: titleRef.current.value,
      detail: detailRef.current.value,
      task: taskRef.current.value,
      inputFormat: inputFormatRef.current.value,
      constraint: constraintRef.current.value,
      outputFormat: outputFormatRef.current.value,
      sampleInput: sampleInputRef.current.value,
      sampleOutput: sampleInputRef.current.value
    });
    alert("Data set successfully!");
  }

  const titleRef = useRef(null);
  const detailRef = useRef(null);
  const taskRef = useRef(null);
  const inputFormatRef = useRef(null);
  const constraintRef = useRef(null);
  const outputFormatRef = useRef(null);
  const sampleInputRef = useRef(null);
  const sampleOutputRef = useRef(null);

  return (
    <>
      <div className="w-100 px-4 py-2">
        <h5>Fill up the form and hit enter to save into database.</h5>
        <form onSubmit={formSubmit} className="pt-2 d-flex flex-column">
          <input type="text" placeholder="Problem title" ref={titleRef} required />
          <input type="text" placeholder="Problem detail" ref={detailRef} required />
          <input type="text" placeholder="Task" ref={taskRef} required />
          <input type="text" placeholder="Input format" ref={inputFormatRef} required />
          <input type="text" placeholder="Constraints" ref={constraintRef} required />
          <input type="text" placeholder="Output format" ref={outputFormatRef} required />
          <input type="text" placeholder="Sample input" ref={sampleInputRef} required />
          <input type="text" placeholder="Sample output" ref={sampleOutputRef} required />
          <input type="submit" value="Save" required />
        </form>
      </div>
    </>
  );
}