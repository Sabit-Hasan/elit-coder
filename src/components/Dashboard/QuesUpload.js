export default function questionUpload() {
  const formSubmit = (e) => {
    e.preventDefault();
  }
  return (
    <>
      <div className="w-100 px-4 py-2">
        <h5>Fill up the form and hit enter to save into database.</h5>
        <form className="pt-2 d-flex flex-column" action={formSubmit}>
          <input type="text" placeholder="Problem title" />
          <input type="text" placeholder="Problem detail" />
          <input type="text" placeholder="Task" />
          <input type="text" placeholder="Input format" />
          <input type="text" placeholder="Constraints" />
          <input type="text" placeholder="Output format" />
          <input type="text" placeholder="Sample input" />
          <input type="text" placeholder="Sample output" />
          <input type="button" value="Save" />
        </form>
      </div>
    </>
  );
}