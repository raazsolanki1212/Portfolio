import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-4 w-20" src="src/images/tk.png" alt="Logo" />
      </div>
      <div className="m-8 flex items-center gap-4 justify-center text-2xl">
        <a href="https://www.linkedin.com/in/tarun-kumar-6973b0289" aria-label="LinkedIn" className="hover:text-blue-500">
          <FaLinkedin />
        </a>
        <a href="https://github.com/raazsolanki1212" aria-label="GitHub" className="hover:text-gray-500">
          <FaGithub />
        </a>
        <a href="https://www.instagram.com/me.raazzz" aria-label="Instagram" className="hover:text-pink-500">
          <FaInstagram />
        </a>
        <a href="https://twitter.com/raazsolanki15" aria-label="Twitter" className="hover:text-blue-400">
          <FaTwitter />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
