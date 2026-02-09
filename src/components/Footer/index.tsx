import { motion } from "framer-motion"
import { Mail } from "lucide-react"
import { FiLinkedin } from "react-icons/fi"
import { FaGithub } from "react-icons/fa"


export function Footer() {
  return (
    <footer className="border-t border-slate-800 mt-10 max-lg:mt-4">
      <div className="text-center">
        <div className="flex justify-center gap-6">
          {[
            {
              icon: FiLinkedin,
              href: "https://www.linkedin.com/in/thaisdss",
            },
            {
              icon: FaGithub,
              href: "https://github.com/thaisdss",
            },
            {
              icon: Mail,
              href: "mailto:thaisdss.silva@gmail.com",
            },
          ].map(({ icon: Icon, href }, index) => (
            <motion.a
              key={index}
              href={href}
              target="_blank"
              whileHover={{ scale: 1.2, y: -3 }}
              className="text-slate-400 hover:text-emerald-500 transition"
            >
              <Icon size={22} />
            </motion.a>
          ))}
        </div>

        <p className="mt-6 text-xs text-slate-500">
          © {new Date().getFullYear()} Thaís Silva
        </p>
      </div>
    </footer>
  )
}
