
export default function Medicines() {
  return (
   <>
    <div>
       <div className="flex flex-row">
         <select name="" id=""></select>
        <input type="text" />
        <button>Filter</button>
       </div>
       <div>
        <ul className="grid grid-cols-4 gap-x-2 gap-y-2">
            <li>
                <img src="" alt="" />
                <div>
                    <p className="font-semibold">name</p>   
                    <p className="font-semibold">fiyat</p>
                    <button>Add to car</button>
                    <button>Details</button>
                </div>
            </li>
        </ul>
       </div>
    </div>
    <div className="flex flex-row gap-5">
        <div></div>
        <div></div>
        {[1,2,3].map((page)=>(<div>
            {page}
        </div>))}
        <div>...</div>
        <div></div>
        <div></div>
    </div>
   </>
  )
}
