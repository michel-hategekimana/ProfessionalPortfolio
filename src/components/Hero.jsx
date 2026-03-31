import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="min-h-screen  flex items-center bg-gray-50 px-6 md:px-16">
      <div className=" grid md:grid-cols-2 gap-10 items-center w-full max-w-6xl mx-auto">
        
        {/* LEFT SIDE */}
        <div>
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-gray-800">
            Frontend
          </h1>
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-blue-600 mt-2">
            Developer
          </h1>

          <p className="mt-6 text-gray-600 text-lg leading-relaxed max-w-md">
            I design and develop experiences that make people's lives simpler
            through intuitive web and mobile applications.
          </p>

          {/* SKILLS */}
          <div className="flex flex-wrap gap-3 mt-6">
            {["Figma", "HTML5", "CSS3", "JavaScript", "React"].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-white border rounded-full text-sm text-gray-700 shadow-sm"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* BUTTONS */}
          <div className="flex gap-4 mt-8">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition">
              See My Projects
            </button>

            <button className="border px-6 py-3 rounded-lg text-gray-700 hover:bg-gray-100 transition">
              Get In Touch
            </button>
          </div>

          {/* SOCIAL ICONS */}
          <div className="flex gap-6 mt-8 text-gray-600 text-xl">
            <FaGithub className="cursor-pointer hover:text-black" />
            <FaLinkedin className="cursor-pointer hover:text-blue-600" />
            <FaEnvelope className="cursor-pointer hover:text-red-500" />
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex justify-center relative">
          
          {/* Background circle */}
          <div className="absolute w-72 h-72 bg-gray-200 rounded-full -z-10"></div>

          {/* Image */}
          <img
            src="/images/michel.jpg" // replace with your image
            alt="profile"
            className="w-72 h-72 object-cover rounded-full shadow-lg"
          />

          {/* Small floating circle */}
          <div className="absolute top-0 right-34 w-16 h-16 bg-blue-400 rounded-full flex items-center justify-center text-center "></div>
        </div>

      </div>
    </section>
  );
}