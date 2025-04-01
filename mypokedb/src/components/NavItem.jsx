function NavItem({ text, handleRouting }) {
    return (
        <li
            onClick={() => handleRouting(text)}
            className="nav__item"
        >
            {text}
        </li>
    )
}

export default NavItem;