
import Logo from "./Logo";
import NavBar from "./NavBar";

function Header({ handleRouting }) {
    return (
        <header className="header">
            <Logo />
            <NavBar handleRouting={handleRouting} />
        </header>
    )
}
export default Header;
