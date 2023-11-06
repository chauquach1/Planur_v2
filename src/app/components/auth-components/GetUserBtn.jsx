export default async function GetUserBtn({data, error}) {


  function handleClick() {
    if (data) {
      console.log(`getUser() butn data: ${data}`);
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
        Get User
      </button>
    </>
  )
}