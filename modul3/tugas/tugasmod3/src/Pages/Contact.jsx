import Navbar from "../feature/navbar";
import Footer from "../feature/footer";

const Contact = () => {
return (
<>
<Navbar /> 
    <section class="main-content">
    <div class="col-6">
        <h1 style={{ color: "black", fontWeight: "bold" }}>Contact Us</h1>
        <h5 style={{ color: "black" }}>
           Address: Jl. Raya Tlogomas No.246, Jawa Timur 65144, Indonesia
            <br />Phone: (0341) 464318, ext 252 - SMS/WA/Telegram (Quick Response) +62 896-896-01317
            <br />Email 1 : lab.informatika@umm.ac.id
            <br />Email 2 : lab.informatika.umm@gmail.com
            </h5>   
    </div>
</section>
    <Footer />
</>
)
}

export default Contact;