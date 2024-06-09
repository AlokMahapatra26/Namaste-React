import LOGO_URL  from "../utils/constant"
export const Header = () => {
    return (
        <div className='header'>
            <div className='logo'>
               <img src={LOGO_URL} />
            </div>
            <div className='nav-items'>
                <ul>
                    <li>Search</li>
                    <li>Offers</li>
                    <li>Cart</li>
                    <li>Sign in</li>
                </ul>
            </div>
        </div>
    )
}


