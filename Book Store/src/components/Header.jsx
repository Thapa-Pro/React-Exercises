import logo from '../assets/look.png'; // Uppgifts  image 

const Header = () => {
    return (
        <header>
            <img src={logo} alt="Look Logo" className="logo" />
            <div className="cart">
                Cart <span className="cart-count">0</span>
            </div>
        </header>
    );
};

export default Header;
