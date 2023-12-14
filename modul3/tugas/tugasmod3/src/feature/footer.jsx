import Logo from "./img/logo-ilab.png"
import Facebook from "./img/logo-facebook.png"
import Instagram from "./img/logo-instagram.png"
import Twitter from "./img/logo-twitter.png"



const Footer = () => {
return (
    <section class="footergue">
        <div class="row">
            <div class="col-3 logo-footer">
                <img src={Logo} alt="logo-ilab" />
                <p>Copyright © 2023. Infinte Learning</p>
            </div>

            <div class="col-3">
                <p class="title-footer">Services</p>
                <div class="footer-content">
                    <p>Email Marketing</p>
                    <p>Campaigns</p>
                    <p>Branding</p>
                    <p>Offline</p>

                </div>
            </div>

            <div class="col-3">
                <p class="title-footer">About</p>
                <div class="footer-content">
                    <p>Our Story</p>
                    <p>Benefits</p>
                    <p>Team</p>
                    <p>Careers</p>
                </div>
            </div>

            <div class="col-3">
                <p class="title-footer">Follow Us</p>
                    <p ><img class="icon1" src={Facebook} alt="Facebook" /><span class="txt1">Facebook</span></p>
                    <p ><img class="icon2" src={Twitter} alt="Twitter" /><span class="txt2">Twitter</span></p>
                    <p ><img class="icon3" src={Instagram} alt="Instagram" /><span class="txt3">Instagram</span></p>
            </div>
        </div>
    </section>

)
}

export default Footer;