

export default function Register() {
  return (
    <div className="w-full flex flex-row justify-around gap-20">
        <div className="w-[50%]">
            <p className="text-black text-start font-semibold text-5xl">Your medication, delivered Say goodbye to all <span className="text-green-500">your healthcare</span> worries with us</p>
        </div>
        <div className="w-[30%] flex flex-col items-start">
<div className="grid grid-cols-2 gap-x-1 gap-y-1">
              <input type="text" placeholder="Username" className="inputUser w-full" /><input type="text" placeholder="Email" className="inputUser w-full" /><input type="text" placeholder="Phone" className="inputUser w-full" /><input type="text" placeholder="Password" className="inputUser w-full"/>

</div>
<button className="authButtons mt-5">Register</button>
        </div>
    </div>
  )
}
