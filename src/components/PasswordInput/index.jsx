import { useState } from "react";
import { BsEye, BsEyeSlash } from 'react-icons/bs';

export function Passwordinput(props) {
    const [showPassword, setShowPassword] = useState(false);
    const passwordIcon = showPassword ? 
    (<BsEye tabIndex={0} className="eye-icon" onClick={()=> {setShowPassword(!showPassword)}}/>) : 
    (<BsEyeSlash tabIndex={0} className="eye-icon" onClick={()=> {setShowPassword(!showPassword)}}/>);
    return(
        <>
        <p className="label">Password:</p>
        <div className="text-input">
            {passwordIcon}
            <input placeholder="Password" type={showPassword ? "text" : "password"} />
        </div>
        
        </>
    )
}