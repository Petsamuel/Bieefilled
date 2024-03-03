import { Fragment } from "react";
import { ContactForm } from "../components/ContactForm";
import Header from "../components/Header";

function Contact() {
  return (
    <main className="bg-black lg:h-max h-screen" >
      <Header />
      <main className="py-14 ">
        <div className="max-w-screen-xl mx-auto px-4 text-white md:px-8">
          <div className="max-w-lg mx-auto space-y-3 sm:text-center text-sm">
            <h1 className="py-4 px-2 mb-3  text-semibold font-[Poppins] text-2xl text-white mt-4">
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500 border-b-2 text-3xl">
                Get in touch&nbsp;
              </span>
            </h1>
            <p>I would love to hear from you! Please fill out the form below.</p>
          </div>
          <div className="mt-12 max-w-lg mx-auto">
            <ContactForm />
          </div>
        </div>
      </main>
    </main>
  );
}

export default Contact;
