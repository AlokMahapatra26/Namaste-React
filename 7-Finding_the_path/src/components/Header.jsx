import LOGO_URL  from "../utils/constant"
import {useNavigate} from "react-router-dom"

export const Header = () => {


    const navigate = useNavigate();

    return (
        <div className='header'>
            <div className='logo' onClick={()=>{navigate("/")}}>
               <img src={LOGO_URL} />
            </div>
            <div className='nav-items'>
                <ul>
                    <li onClick={()=>{navigate("/search")}}>Search</li>
                    <li>Offers</li>
                    <li>Cart</li>
                    <li onClick={()=>{navigate("/about")}}>About</li>
                    <li>Sign in</li>
                </ul>
            </div>
        </div>
    )
}


