import Navbar from "../feature/navbar";
import Footer from "../feature/footer";

const About = () => {
    return (
        <>
            <Navbar />
            <section class="main-content">
                <div class="col-6">
                    <h1 style={{ color: "black", fontWeight: "bold" }}>Laboratorium Informatika UMM</h1>
                    <h5 style={{ color: "black" }}>i-Lab is an integrated system that can support practicum activities in the Department of Informatics at the University of Muhammadiyah Malang, both for practitioners, lecturers and assistants.
                        <br /><br />i-Lab is the work of students of the University of Muhammadiyah Malang and has been around since 2012 and has gone through many changes since then</h5>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default About;