

export default function Login() {
  return (
    <div className="w-full flex flex-row justify-around">
        <div className="w-[50%]">
            <p className="text-black text-start font-semibold text-5xl">Your medication, delivered Say goodbye to all <span className="text-green-500">your healthcare</span> worries with us</p>
        </div>
        <div className="w-[30%] flex flex-col items-start">
<div className=" grid grid-cols-1 gap-x-1 gap-y-1">
              <input type="text" placeholder="Email" className="inputUser w-full" /><input type="text" placeholder="Password" className="inputUser w-full"/>

  </div> 
  <button className="authButtons mt-5">Login</button>    
  <button className="text-slate-600 bg-white mt-2">Don't have an account</button>       
        </div>
    </div>
  )
}
