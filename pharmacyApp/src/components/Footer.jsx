import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa6";
import { NavLink } from "react-router-dom";


export default function Footer() {
  return (
    <div className="bg-green-700 p-7 flex flex-col ">
        <div className="grid grid-cols-3 justify-between items-start border-b border-slate-200 pb-18">
           
        <p className="text-white text-justify">Get the medicine to help you feel better, get back to your active life, and enjoy every moment</p>
        <nav className="flex flex-row gap-1 text-white justify-center">
{/**            <NavLink to="/">Home</NavLink>
            <NavLink to="/">Medicine Store</NavLink>
            <NavLink to="/">Medicine</NavLink> */}
        <p>Home</p>
        <p>Medicine Store</p>
        <p>Medicine</p>
        </nav>
        <div className="text-white flex flex-row gap-3 justify-center">
            <FaFacebookF/>
            <FaInstagram/>
            <FaYoutube/>
        </div>
        </div>
    <div className="flex flex-row text-slate-200 justify-center gap-2 mt-5">
        <p>© E-Pharmacy 2023. All Rights Reserved</p>

<p>Privacy Policy</p>".
<p>Terms & Conditions</p>
    </div>
    </div>
  )
}
