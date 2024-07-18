import { motion } from 'framer-motion';
import { FiDownload,FiGithub,FiFacebook,FiLinkedin,} from 'react-icons/fi';
import { useScroll } from "framer-motion"

function Component() {
  const { scrollYProgress } = useScroll();
  
  return (
    <motion.div style={{ scaleX: scrollYProgress }} />  
  )
}



function App() {
  return (
          <div className="font-sans text-gray-900 scroll-smooth ">
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

        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
           <ul className="flex space-x-4">
            <li><a href="#about" className="hover:text-blue-500 hover:font-bold hover:border-b-2 hover:border-blue-400 duration-150 ease-in-out">About Me</a></li>
            <li><a href="#skills" className="hover:text-blue-500 hover:font-bold hover:border-b-2 hover:border-blue-400 duration-150 ease-in-out">Skills</a></li>
            <li><a href="#projects" className="hover:text-blue-500 hover:font-bold hover:border-b-2 hover:border-blue-400 duration-150 ease-in-out">Projects</a></li>
            <li><a href="#experience" className="hover:text-blue-500 hover:font-bold hover:border-b-2 hover:border-blue-400 duration-150 ease-in-out">Experience</a></li>
             <li><a href="#testimonials" className="hover:text-blue-500 hover:font-bold hover:border-b-2 hover:border-blue-400 duration-150 ease-in-out">Testimonials</a></li>
              <li><a href="#contact" className="hover:text-blue-500 hover:font-bold hover:border-b-2 hover:border-blue-400 duration-150 ease-in-out">Contact Me</a></li>
          </ul>
          
        </motion.div>

        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <a href="#" className="bg-blue-400 text-white flex px-4 py-2 rounded hover:bg-blue-600">Resume  <FiDownload className="ml-2 mt-1 size-5" /></a>
        </motion.div>       
        </nav>
      </header>

      <div className="container mx-auto py-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <motion.section
          className="text-left py-12 capitalize"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl mt-24 font-bold">Hey there! I'm <span className="text-blue-400">Isaac Cletus.</span></h1>
          <h2 className="text-2xl text-blue-400 mt-2">Passionate Frontend Developer</h2>
          <p className="mt-4 text-gray-500">
            I specialize in building and designing responsive, high-quality web applications.<br />
            Crafting seamless user experiences through innovative web solutions.<br />
          </p>
          <div className="mt-3 flex space-x-4">
            <a href="#" className="text-white bg-black flex  rounded-lg m-2 duration-150 border-2 border-black hover:bg-blue-400 hover:border-blue-400 hover:text-white p-1"><FiGithub className="size-5"/></a>
            <a href="#" className="text-white bg-black flex  rounded-lg m-2 duration-150 border-2 border-black hover:bg-blue-400 hover:border-blue-400 hover:text-white p-1"><FiFacebook className="size-5"/></a>
            <a href="#" className="text-white bg-black flex  rounded-lg m-2 duration-150 border-2 border-black hover:bg-blue-400 hover:border-blue-400 hover:text-white p-1"><FiLinkedin className="size-5"/></a>
          </div>
        </motion.section>

        <motion.div
          className="flex justify-center"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <img
            src="/assets/isaac blue.png"
            alt="Isaac Cletus"
            className="w-full max-w-md rounded-full mt-8 border-white border-2 shadow"
          />
        </motion.div>
        </div>

        <section id="skills" className="bg-white py-12">
           <div className="container mx-auto text-center">
           <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
            <h2 className="text-3xl font-bold">Skills</h2>
          
        </motion.div>
        <div className="flex justify-center">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-8">
            {[
              { src: "/assets/git.png", alt: "Git" },
              { src: "/assets/javascript.png", alt: "JavaScript" },
              { src: "/assets/Canva.png", alt: "Canva" },
              { src: "/assets/React.png", alt: "React" },
              { src: "/assets/Framer.png", alt: "Framer" },
              { src: "/assets/Vue.png", alt: "Vue" },
            ].map((image, index) => (
              <motion.div
                key={index}
                className="flex justify-center items-center"
                whileHover={{
                  scale: 1.1,
                  rotateY: 15,
                  transition: { type: "spring", stiffness: 300 },
                }}
                whileTap={{ scale: 0.95 }}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-1/2 transition-transform duration-500 ease-in-out transform hover:rotate-6 hover:scale-105"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>

       <section id="projects" className="bg-white py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gray-100 p-4 rounded shadow"
            >
              <h3 className="text-xl font-bold">Crypto Screener Application</h3>
              <p className="mt-2">Lorem ipsum dolor sit amet...</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gray-100 p-4 rounded shadow"
            >
              <h3 className="text-xl font-bold">Euphoria – Ecommerce (Apparels) Website Template</h3>
              <p className="mt-2">Lorem ipsum dolor sit amet...</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gray-100 p-4 rounded shadow"
            >
              <h3 className="text-xl font-bold">Blog Website Template</h3>
              <p className="mt-2">Lorem ipsum dolor sit amet...</p>
            </motion.div>
          </div>
        </div>
      </section>
       <section id="experience" className="py-12 bg-gray-50">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold">Experience</h2>
          <div className="mt-8">
            <div className="bg-white p-4 rounded shadow mb-4">
              <h3 className="text-xl font-bold">Lead Software Engineer at Google</h3>
              <p>Nov 2019 - Present</p>
            </div>
            <div className="bg-white p-4 rounded shadow mb-4">
              <h3 className="text-xl font-bold">Software Engineer at Youtube</h3>
              <p>Jan 2017 - Dec 2019</p>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <h3 className="text-xl font-bold">Junior Software Engineer at Apple</h3>
              <p>Jan 2016 - Dec 2017</p>
            </div>
          </div>
        </div>
      </section>

     <section id="testimonials" className="bg-white py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold">Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            <div className="bg-gray-100 p-4 rounded shadow">
              <p>I recently had to summon up...</p>
              <p className="font-bold mt-2">Evren Shah</p>
            </div>
            <div className="bg-gray-100 p-4 rounded shadow">
              <p>I recently had to summon up...</p>
              <p className="font-bold mt-2">Flora Behan</p>
            </div>
            <div className="bg-gray-100 p-4 rounded shadow">
              <p>I recently had to summon up...</p>
              <p className="font-bold mt-2">Evren Shah</p>
            </div>
          </div>
        </div>
      </section>

       <section id="contact" className="py-12 bg-gray-50">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold">Let's Talk for Something Special</h2>
          <form className="mt-8 space-y-4">
            <input type="text" placeholder="Your Name" className="w-full p-2 border border-gray-300 rounded" required />
            <input type="email" placeholder="Email" className="w-full p-2 border border-gray-300 rounded" required />
            <input type="text" placeholder="Your Website (if exists)" className="w-full p-2 border border-gray-300 rounded" required />
            <textarea placeholder="Your Message" className="w-full p-2 border border-gray-300 rounded" required></textarea>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Send Message</button>
          </form>
        </div>
      </section>

      </div>
  );
}

export default App;
