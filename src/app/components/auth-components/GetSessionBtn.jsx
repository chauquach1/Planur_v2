export default async function GetSessionBtn({data, error}) {


  function handleClick() {
    if (data) {
      console.log(`getSession() data: ${data}`);
    }
    else {
      console.log(`error: ${error}`)
    }
  }

  return (
    <>
      <button
        className="py-2 px-4 rounded-md no-underline bg-btn-background hover:bg-btn-background-hover"
        onClick={handleClick()}
      >
        Get Session
      </button>
    </>
  );
}