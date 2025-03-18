
import { Phone, Mail, MapPin, Calendar } from "lucide-react";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

const ContactUs = () => {
  return (
    <>
    <Navbar/>
    
    <div className="max-w-6xl mx-auto px-6 mt-20 py-12">
      {/* Title Section */}
      <h2 className="text-3xl font-bold text-center">Contact Us</h2>
      <p className="text-gray-600 text-center mt-2">
        Have questions? Reach out to us or book a call directly!
      </p>

      {/* Contact Info Section */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Phone */}
        <div className="flex items-center gap-4 p-4 bg-white shadow-md rounded-lg">
          <Phone className="text-orange-500" />
          <div>
            <p className="text-gray-600">Call Us</p>
            <p className="font-bold text-lg">(224) 407-2559</p>
          </div>
        </div>

        {/* Email */}
        <div className="flex items-center gap-4 p-4  bg-white shadow-md rounded-lg">
          <Mail className="text-orange-500" />
          <div>
            <p className="text-gray-600">Email Us</p>
            <p className="font-bold">contact@yourcompany.com</p>
          </div>
        </div>

        {/* Location */}
        <div className="flex items-center gap-4 p-4 bg-white shadow-md rounded-lg">
          <MapPin className="text-orange-500" />
          <div>
            <p className="text-gray-600">Visit Us</p>
            <p className="font-bold text-lg">123 Main St, Chicago, IL</p>
          </div>
        </div>
      </div>

      {/* Calendly Section */}
      <div className="mt-12">
        <h3 className="text-2xl font-semibold flex items-center gap-2">
          <Calendar className="text-orange-500" /> Book a Call
        </h3>
        <p className="text-gray-600">Schedule a meeting at your convenience.</p>

        {/* Calendly Embed */}
        <div className="mt-6 w-full h-[600px]">
          <iframe
            src="https://calendly.com/dispatch-haulnova/30min"
            className="w-full h-full rounded-lg border shadow-md"
            frameBorder="0"
            allowFullScreen
          ></iframe>

        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default ContactUs;
