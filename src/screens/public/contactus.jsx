import { Phone, Mail, MapPin, Calendar } from "lucide-react";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

const ContactUs = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-6xl bg-[#fff7f0]  mx-auto px-6 mt-20 py-12">
        {/* Title Section */}
        <h2 className="text-3xl font-bold text-center pt-10 font-bebas">Contact Us</h2>
        <p className="text-gray-600 text-center text-2xl mt-2 font-montserrat">
          Have questions? Reach out to us or book a call directly!
        </p>

        {/* Calendly Section */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold flex items-center gap-2 font-bebas">
            <Calendar className="text-orange-500" /> Book a Call
          </h3>
          <p className="text-gray-600 font-montserrat">
            Schedule a meeting at your convenience.
          </p>

          {/* Calendly Embed */}
          <div className="mt-6 w-full h-[700px]">
            <iframe
              src="https://calendly.com/dispatch-haulnova/30min"
              className="w-full h-full rounded-lg border shadow-md"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Contact Info Section */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Phone */}
          <div className="flex items-center gap-4 p-4 bg-white shadow-md rounded-lg">
            <Phone className="text-orange-500" />
            <div>
              <p className="text-gray-600 font-montserrat">Call Us</p>
              <p className="font-bold text-lg font-Montserrat">(602) 529-6927</p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-center gap-4 p-4 bg-white shadow-md rounded-lg">
            <Mail className="text-orange-500" />
            <div>
              <p className="text-gray-600 font-montserrat">Email Us</p>
              <p className="font-bold font-Montserrat">dispatch@haulnova.com</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;