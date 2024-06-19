export default function Services() {
  return (
    <>
      <section className="py-12 bg-gray-300">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold text-gray-800">Our Services</h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Explore the range of services we offer to our clients. We are
              committed to providing exceptional quality and service.
            </p>
          </div>

          <div className="flex justify-start mb-12">
            <div className="bg-white shadow-lg rounded-lg flex w-3/5">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTze8oe4U6Mw4Om9K5ZOVYalrekI-tDXpnkp4cANSdAwthj4aLNIH4jLJ09DqheU02ciXc&usqp=CAU"
                alt="Service 1"
                className="w-48 h-48 object-cover rounded-l-lg"
              />
              <div className="p-6 flex flex-col justify-center">
                <h3 className="text-2xl font-semibold mb-2">Service One</h3>
                <p className="text-gray-600 mb-4">
                  Description for service one. Providing top-notch solutions to
                  meet your needs. Our dedicated team of professionals ensures
                  that every project is handled with the utmost care and
                  precision, guaranteeing the highest level of satisfaction for
                  our clients.
                </p>
                <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300">
                  Learn More
                </button>
              </div>
            </div>
          </div>

          <div className="flex justify-end mb-12">
            <div className="bg-white shadow-lg rounded-lg flex w-3/5">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGdKmGvUtfLdUY2RICmFFdnWatpxL67kRuuw&s"
                alt="Service 2"
                className="w-48 h-48 object-cover rounded-l-lg"
              />
              <div className="p-6 flex flex-col justify-center">
                <h3 className="text-2xl font-semibold mb-2">Service Two</h3>
                <p className="text-gray-600 mb-4">
                  Description for service two. Ensuring excellence in every step
                  we take. Our expertise in various domains allows us to deliver
                  customized solutions that align with the specific goals and
                  requirements of our clients, fostering long-term partnerships
                  built on trust and success.
                </p>
                <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300">
                  Learn More
                </button>
              </div>
            </div>
          </div>

          <div className="flex justify-start">
            <div className="bg-white shadow-lg rounded-lg flex w-3/5">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2ZpnnoEoZ_mB2oL7IYEmYMf_4WtxvhpXEu6HSCX7MJfSmR8-XT3rj3X8S5ALxUb4pAm8&usqp=CAU"
                alt="Service 3"
                className="w-48 h-48 object-cover rounded-l-lg"
              />
              <div className="p-6 flex flex-col justify-center">
                <h3 className="text-2xl font-semibold mb-2">Service Three</h3>
                <p className="text-gray-600 mb-4">
                  Description for service three. Delivering high-quality
                  solutions tailored to your needs. We leverage cutting-edge
                  technology and innovative strategies to provide our clients
                  with competitive advantages in their respective industries,
                  ensuring sustainable growth and success.
                </p>
                <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
