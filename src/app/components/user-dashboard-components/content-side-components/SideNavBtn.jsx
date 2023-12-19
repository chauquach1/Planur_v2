export default function SideNavBtn({category}) {
  return (
    <button className="bg-white border-y-1 text-sm" onClick={()=> console.log('btn clicked')}>
      <p>{category}</p>
    </button>
  )
}