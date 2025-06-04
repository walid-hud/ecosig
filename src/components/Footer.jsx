import { MdArrowOutward as Arrow } from "react-icons/md";
import { PiPhoneFill as Phone, PiMapPin as Pin } from "react-icons/pi";
import { IoMdMail as Email, IoLogoFacebook as FacebookLogo } from "react-icons/io";
import ContactForm from "./ContactForm";
import { toast } from "react-toastify";

const Footer = () => {
  // this year variable is for the footer copyright notice
  const year = new Date().getFullYear();

  return (
    <footer
      role="footer"
      id="contact"
      className="backdrop-blur-3xl relative px-4 py-4 mt-4 scroll-mt-[3.2rem] border-t-2 border-r-2 border-l-2 rounded-t-xl border-neutral-900"
    >
      <h1 className="text-3xl md:text-5xl mb-2 border-l-4 md:border-l-6 border-blue-600 rounded-sm md:rounded-md px-2">Contact</h1>
      <div className="flex flex-col py-4 gap-y-4 text-xl *:w-fit *:flex *:gap-x-1 *:items-center">
        <a href="mailto:ecole.ecosig@menara.ma">
          <Email className="text-2xl" /> ecole.ecosig@menara.ma
        </a>
        <p>
          <Phone className="text-2xl" /> 05 23 42 39 40
        </p>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://web.facebook.com/profile.php?id=100078539586250"
          className="flex text-blue-600 items-center"
        >
          <FacebookLogo className="text-3xl" />
          Suivez-nous <Arrow />
        </a>
      </div>

      <div className="md:grid md:grid-cols-2 md:grid-rows-1 md:grid-flow-col md:gap-x-4  ">
        <ContactForm />
        <div className="flex flex-col">
          <h1 className="text-3xl md:text-5xl mb-2 border-l-4 md:border-l-6 border-blue-600 md:rounded-md rounded-sm px-2">Visitez-nous</h1>
          <span className="mt-4 mb-6 text-xl">
            <Pin className="inline mb-1" /> 36, Bd IBN Khaldoun 1er & 2ème étage | Béni-Mellal - Maroc
          </span>
          <div className="md:flex  md:h-full md:gap-x-4">
            <iframe
              className="w-full aspect-video rounded-2xl mb-4 md:aspect-auto md:h-full md:w-1/2 "
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.3532579365424!2d-6.368755124934961!3d32.335424706423495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda387ab3750bd09%3A0xb74589237940fad2!2sECOSIG!5e1!3m2!1sen!2sma!4v1744517757850!5m2!1sen!2sma"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="ECOSIG Location"
            ></iframe>
            <img
              loading="lazy"
              src="/school.jpg"
              alt="ECOSIG location"
              className="aspect-video rounded-2xl object-center object-cover md:h-full md:w-1/2 "
            />
          </div>
        </div>
      </div>
      <div className="text-sm text-gray-800 w-full text-center mt-4">
        ECOSIG&reg; {year}. Tous droits réservés.
      </div>
    </footer>
  );
};

export default Footer;
