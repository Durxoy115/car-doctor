import React from "react";

export default function ContactPage() {
  return (
    <div className="bg-white text-gray-800">
      {/* Top Section */}
      <section className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
        {/* Left Text Block */}
        <div>
          <h2 className="text-3xl font-bold mb-4">
            Get in touch with us. <br /> We are here to assist you.
          </h2>
          <p className="text-gray-600 mb-6">
            We are dedicated to providing comprehensive educational resources
            and answering frequently asked questions to help our clients.
          </p>
          <div className="flex items-center gap-4">
            <button className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700">
              More Questions
            </button>
            <a href="#" className="text-blue-600 underline hover:text-blue-800">
              Contact us ↗
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <form className="bg-blue-900 text-white p-6 md:p-8 rounded-xl space-y-4 shadow-lg">
          <input
            type="text"
            placeholder="Your name"
            className="w-full px-4 py-2 rounded-md bg-white/10 placeholder-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-white"
          />
          <input
            type="email"
            placeholder="Your email"
            className="w-full px-4 py-2 rounded-md bg-white/10 placeholder-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-white"
          />
          <textarea
            placeholder="Your message"
            className="w-full px-4 py-2 h-28 rounded-md bg-white/10 placeholder-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-white"
          ></textarea>

          <div>
            <label className="block mb-2 text-sm">I'm interested in:</label>
            <div className="flex flex-wrap gap-2">
              {[
                "UI/UX Design",
                "Web Design",
                "Branding",
                "Web Development",
              ].map((item) => (
                <button
                  key={item}
                  type="button"
                  className="px-3 py-1 bg-white/20 rounded-full text-sm hover:bg-white/30"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-white text-blue-900 font-semibold py-2 rounded-md hover:bg-gray-100"
          >
            Send message
          </button>
        </form>
      </section>

      {/* Bottom Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between md:items-center mb-4">
            <div className="max-w-sm mb-4 md:mb-0">
              <h2 className="text-2xl font-semibold mb-2">
                Got a project in mind?
              </h2>
              <p className="text-gray-700 text-lg">Let’s talk.</p>
            </div>

            <div>
              <button className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700">
                Book A Call ↗
              </button>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start gap-10">
            {/* Left heading */}

            {/* Country contacts */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap:8 md:gap-48 lg:gap-48  w-full">
              {/* Country Block */}
              {[
                {
                  title: "Bangladesh",
                  email: "contact@zayns.agency",
                  phone: "+8801517450690",
                  altPhone: "+8801517450699",
                  fb: "facebook.com/zayntbd",
                  address:
                    "Shahzadpur | Dhaka, BMA, Mohammadpur, Dhaka, Bangladesh.",
                },
                {
                  title: "Singapore",
                  email: "contact@zayns.agency",
                  phone: "+8801517450690",
                  altPhone: "+8801517450699",
                  fb: "facebook.com/zayntgd",
                  address:
                    "Redbronze Park, Padangnusa 9516 Bandung, Singapore.",
                },
                {
                  title: "Cambodia",
                  email: "contact@zayns.agency",
                  phone: "+8801517450690",
                  altPhone: "+8801517450699",
                  fb: "facebook.com/zayntgd",
                  address: "75 E 2nd St Sheridan, WY 82801, Cambodia.",
                },
              ].map((loc) => (
                <div key={loc.title}>
                  <h3 className="font-semibold mb-2">{loc.title}</h3>
                  <ul className="text-sm space-y-1 text-gray-700">
                    <li>{loc.email}</li>
                    <li>{loc.phone}</li>
                    <li>{loc.altPhone}</li>
                    <li>{loc.fb}</li>
                    <li>{loc.address}</li>
                  </ul>
                </div>
              ))}
            </div>

            {/* CTA Button */}
          </div>
        </div>
      </section>
    </div>
  );
}
