import Navbar from "../feature/navbar";
import Footer from "../feature/footer";

const Hero = () => {
return (
<>
<Navbar /> 
    <section class="main-content">
    <div class="col-6">
        <h1>Selamat Datang</h1>
        <h5>di website Praktikum Pemrograman Website</h5>   
    </div>
</section>
    <Footer />
</>
)
}

export default Hero;