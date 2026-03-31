
export default function About() {
  return (
    <section className="bg-slate-50 pt-30 pb-20 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        <div className="flex justify-start items-center h-96">
          <div className="relative w-80 h-80">
            <div className="absolute inset-0 bg-blue-100 rounded-2xl rotate-6"></div>
            <img
              src="/images/michel.jpg"
              alt="about"
              className="absolute inset-0 w-full h-full object-cover rounded-2xl shadow-lg"
            />
          </div>
        </div>

        <div className="text-xl">
          <h2 className="text-4xl font-bold text-gray-800">About Me</h2>
          <p className="mt-6 text-gray-600 leading-relaxed">
          I'm a growing fullstack developer, passionate about building clean,
           user-friendly interfaces and efficient backend solutions.
           I focus on writing maintainable code and creating seamless
            user experiences using modern technologies.
          </p>
          <p className="mt-4 text-gray-600 leading-relaxed">
            I enjoy turning ideas into real-world applications and constantly
            improving my skills to stay up to date with the latest trends in
            web development.
          </p>
          <div className="grid grid-cols-3 gap-6 mt-8">
            <div>
              <h3 className="text-2xl font-bold text-blue-600">3+</h3>
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
          <button className="mt-8 bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition">
            Download CV
          </button>
        </div>

      </div>
    </section>
  );
}