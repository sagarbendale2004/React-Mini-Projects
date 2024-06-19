export default function About() {
  return (
    <>
      <section className="py-12 bg-gray-300 h-[85.3vh]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold text-gray-800">About Us</h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Discover the team behind our success. We are committed to
              delivering the best services to our clients.
            </p>
          </div>

          <div className="flex flex-wrap justify-center items-center mb-12">
            <div className="w-full md:w-1/2 lg:w-1/3 p-4">
              <div className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img
                  src="https://t3.ftcdn.net/jpg/02/99/04/20/360_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg"
                  alt="Team Member 1"
                  className="w-32 h-32 mx-auto rounded-full mb-4 border-4 border-blue-500 object-cover"
                />
                <h3 className="text-xl font-semibold mb-2 text-blue-600">
                  John Doe
                </h3>
                <p className="text-gray-600 mb-4">CEO</p>
                <p className="text-gray-700">
                  John is the visionary behind our company. He ensures that we
                  always move forward with innovative ideas.
                </p>
              </div>
            </div>

            <div className="w-full md:w-1/2 lg:w-1/3 p-4">
              <div className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ65hhBQax6uB24Yco2EKOn386OrWtDNZX0-7OWNS0rpH8fzdHHhOpPdpgrUyUF0QjqyJs&usqp=CAU"
                  alt="Team Member 2"
                  className="w-32 h-32 mx-auto rounded-full mb-4 border-4 border-blue-500 object-cover"
                />
                <h3 className="text-xl font-semibold mb-2 text-blue-600">
                  Rohit Sharma
                </h3>
                <p className="text-gray-600 mb-4">CTO</p>
                <p className="text-gray-700">
                  Jane is the tech genius. She leads our development team and
                  oversees all technical aspects of our projects.
                </p>
              </div>
            </div>

            <div className="w-full md:w-1/2 lg:w-1/3 p-4">
              <div className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDr1i25jqVHRFv8eBDwljZqXTSBVO60GRsiQ&s"
                  alt="Team Member 3"
                  className="w-32 h-32 mx-auto rounded-full mb-4 border-4 border-blue-500 object-cover"
                />
                <h3 className="text-xl font-semibold mb-2 text-blue-600">
                  Mike Johnson
                </h3>
                <p className="text-gray-600 mb-4">Lead Developer</p>
                <p className="text-gray-700">
                  Mike is our lead developer. He is passionate about coding and
                  always seeks to improve our tech stack.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
