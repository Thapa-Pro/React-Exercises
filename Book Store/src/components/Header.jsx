import logo from '../assets/look.png'; // Your logo image

// Header receives the current total cart count as a prop
const Header = ({ cartCount }) => {
    return (
        <header>
            <img src={logo} alt="Look Logo" className="logo" />
            <div className="cart">
                Cart <span className="cart-count">{cartCount}</span>
            </div>
        </header>
    );
};

export default Header;
