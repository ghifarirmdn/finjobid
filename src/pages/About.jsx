import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const About = () => {
  return (
    <>
      <Navbar />
      <main>
        <div class="relative px-6 lg:px-8">
          <div class="mx-auto max-w-3xl pt-20 pb-32 sm:pt-48 sm:pb-40">
            <div>
              <div>
                <h1 class="text-4xl font-bold tracking-tight sm:text-center sm:text-6xl">
                  Terima Kasih Telah Mengunjungi Website Kami.
                </h1>
                <p class="mt-6 text-lg leading-8 text-gray-600 sm:text-center">
                  Semoga anda mendapatkan pekerjaan yang anda inginkan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default About;
