import { motion } from 'framer-motion';


function App() {
  return (
          <div className="font-sans text-gray-900">
      <header className="bg-white text-gray-800 py-4 shadow">
        <nav className="container mx-auto flex justify-between items-center">
         
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <img
            src=""
            alt="puyela-logo"
          />
        </motion.div>

          <ul className="flex space-x-4">
            <li><a href="#about" className="hover:text-blue-500">About Me</a></li>
            <li><a href="#skills" className="hover:text-blue-500">Skills</a></li>
            <li><a href="#projects" className="hover:text-blue-500">Projects</a></li>
            <li><a href="#contact" className="hover:text-blue-500">Contact Me</a></li>
          </ul>
          <a href="#" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Resume</a>
        </nav>
      </header>

      <div className="container mx-auto py-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <motion.section
          className="text-left py-12 capitalize"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl mt-24 font-bold">Hey there! I'm <span className="text-blue-500">Isaac Cletus.</span></h1>
          <h2 className="text-2xl text-blue-500 mt-2">Passionate Frontend Developer</h2>
          <p className="mt-4 text-gray-500">
            I specialize in building and designing responsive, high-quality web applications.<br />
            Crafting seamless user experiences through innovative web solutions.<br />
          </p>
          <div className="mt-3 flex space-x-4">
            <a href="#" className="text-blue-500 hover:underline">GitHub</a>
            <a href="#" className="text-blue-500 hover:underline">Twitter</a>
            <a href="#" className="text-blue-500 hover:underline">LinkedIn</a>
          </div>
        </motion.section>

        <motion.div
          className="flex justify-center"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <img
            src=""
            alt="Isaac Cletus"
            className="w-full max-w-md rounded shadow"
          />
        </motion.div>
        </div>
      </div>
  );
}

export default App;
