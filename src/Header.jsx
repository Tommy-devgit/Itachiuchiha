import logo from "../src/images/features/mangekyo-sharingan-3840x2160-10721.png"
function Header() {
    return(
    <>
        <header>
            <div>
                <img src={logo} alt="" className="logooo"/>
                <a href="" className = "logo">ITACHI UCHIHA</a>
            </div>

            <nav>
                <a href="" className="active">Home</a>
                {/* <a href="" className="active"></a>
                <a href="" className="active">About Me</a>
                <a href="" className="active">Contact</a> */}
            </nav>
        </header>
    </>);
}

export default Header;