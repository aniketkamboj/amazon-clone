import React from 'react';
import {Link} from "react-router-dom"
import "./Header.css";
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import {useStateValue} from './StateProvider'
import {auth} from './firebase'

function Header() {

    const [{basket,user},dispatch] = useStateValue();
    const handleAuthentication = () =>{
        if(user)
        auth.signOut();

    }
    return (
        <nav className = "header">
            <Link to="/">
            <img 
                className = "header__logo"
                src="http://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG"
                alt="">   
            </img>
            </Link>

            <div className="header__search">
            <input type="text" className="header__searchInput" />
            <SearchIcon className="header__searchIcon"/>
            </div>

            <div className="header__nav">
                <Link to={!user && "/login"} className="header__link" >
                    <div className="header__option" onClick={handleAuthentication}>
                        <span className="header__optionLineOne">Hello</span>
    <span className="header__optionLineTwo">{user ? 'Sign Out':'Sign In'}</span>
                    </div>
                </Link>

                <Link to="/" className="header__link" >
                    <div className="header__option">
                        <span className="header__optionLineOne">Returns</span>
                        <span className="header__optionLineTwo">Orders</span>
                    </div>
                </Link>

                <Link to="" className="header__link" >
                    <div className="header__option">
                        <span className="header__optionLineOne">Your</span>
                        <span className="header__optionLineTwo">Prime</span>
                    </div>
                </Link>

                <Link to="/checkout" className="header__link" >
                    <div className="header__optionBasket">
                        <ShoppingBasketIcon/>
    <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
                    </div>
                </Link>
            </div>


        </nav>
    )
}

export default Header
