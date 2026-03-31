export default function About() {
  return (
    <section className="bg-white  py-10 px-6 md:px-16">
      <div className="max-w-5xl min-h-screen  mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* LEFT - IMAGE / DESIGN */}
        <div className="relative flex justify-center">
          
          {/* Background shape */}
          <div className="absolute w-72 h-72 bg-blue-100 rounded-2xl rotate-6"></div>

          {/* Main image */}
          <img
            src="/images/michel.jpg" // replace with your image
            alt="about"
            className="w-80 h-80 object-cover rounded-2xl shadow-lg relative"
          />

          {/* Small floating card */}
          <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-md">
            <p className="text-sm text-gray-600">
              2+ Years Experience
            </p>
          </div>
        </div>

        {/* RIGHT - TEXT */}
        <div>
          <h2 className="text-4xl font-bold text-gray-800">
            About Me
          </h2>

          <p className="mt-6 text-gray-600 leading-relaxed">
            I’m a passionate frontend developer who loves building clean,
            user-friendly interfaces. I focus on writing efficient code and
            creating smooth user experiences using modern technologies.
          </p>

          <p className="mt-4 text-gray-600 leading-relaxed">
            I enjoy turning ideas into real-world applications and constantly
            improving my skills to stay up to date with the latest trends in
            web development.
          </p>

          {/* STATS */}
          <div className="grid grid-cols-3 gap-6 mt-8">
            <div>
              <h3 className="text-2xl font-bold text-blue-600">10+</h3>
              <p className="text-gray-500 text-sm">Projects</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-blue-600">2+</h3>
              <p className="text-gray-500 text-sm">Years</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-blue-600">5+</h3>
              <p className="text-gray-500 text-sm">Technologies</p>
            </div>
          </div>

          {/* BUTTON */}
          <button className="mt-8 bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition">
            Download CV
          </button>
        </div>

      </div>
    </section>
  );
}