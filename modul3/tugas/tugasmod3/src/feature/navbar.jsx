import {useNavigate} from "react-router-dom";
import Logo from "./img/logo-ilab.png"


const Navbar = () => {
const navigate = useNavigate();
return (
    <section>
    <div class="navbargue row">
        <div class="col-4 logo">
            <img class="ilab" src={Logo} alt="logo-ilab" />
          </div>
          <div class="col-4 nav-menu">
            <a onClick={()=>navigate("/")}>Home</a>
            <a onClick={()=>navigate("/Aboutus")}>About Us</a>
            <a onClick={()=>navigate("/Contact")}>Contact</a>
          </div>
          <div class="login col-4">
            <button class="btn1 btn btn-light" type="submit" onClick={()=> navigate("/Signup")}>SIGN UP</button>
            <button class="btn1 btn btn-primary" type="submit" onClick={()=> navigate("/Login")}>LOG IN</button>
          </div>
</div>
</section>
)
}

export default Navbar;