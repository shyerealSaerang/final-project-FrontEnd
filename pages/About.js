import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
const About = () => {
    return(
        <>
        <Navigation />
        <div className="container">
        <h1>About Page</h1>
        <p>Aplikasi ini adalah aplikasi yang bisa memperlihatkan berita kepada user 
            sehingga user bisa membaca dan melihat berita terbaru
        </p>
        <h2>Data Diri</h2>
        <p>Nama : Shyereal Imanuelita Saerang
           Nim  :105022010032
           Program Studi : Teknik Informatika
        </p>
        </div>
        <Footer />
        </>
    );
}

export default About;