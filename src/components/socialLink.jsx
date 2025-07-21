// components/SocialLinks.jsx

import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const Email = "harismuhyidinshofar45@gmail.com";

// Anda bisa ubah subjek dan isi email default di sini
const emailSubject = encodeURIComponent("Inquiry from Portfolio");
const emailBody = encodeURIComponent(
  "Hello Haris,\n\nI saw your portfolio and would like to talk about..."
);

const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${Email}&su=${emailSubject}&body=${emailBody}`;

const socials = [
  { href: gmailComposeUrl, label: "Email", icon: FaEnvelope },
  { href: "https://github.com/NvZ4", label: "GitHub", icon: FaGithub },
  {
    href: "https://linkedin.com/in/haris-muhyidin-shofar-53105728b",
    label: "LinkedIn",
    icon: FaLinkedin,
  },
];

const SocialLinks = () => {
  return (
    <div className="flex items-center gap-6">
      {" "}
      {/* Sedikit menambah jarak antar ikon */}
      {socials.map((social) => (
        <a
          key={social.label}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.label}
          // Kontainer utama untuk setiap ikon, dibuat RELATIVE
          className="relative p-3 text-white hover:bg-white/10 rounded-lg transition-colors duration-300"
        >
          {/* --- Mulai Animasi Border --- */}
          <div className="absolute inset-0 z-10 rounded-lg">
            {/* Garis Atas */}
            <div
              className="absolute top-0 left-0 h-px bg-white origin-left animate-[draw-x_4s_linear_infinite]"
              style={{ animationDelay: "0s" }}
            ></div>
            {/* Garis Kanan */}
            <div
              className="absolute top-0 right-0 w-px bg-white origin-top animate-[draw-y_4s_linear_infinite]"
              style={{ animationDelay: "1s" }}
            ></div>
            {/* Garis Bawah */}
            <div
              className="absolute bottom-0 right-0 h-px bg-white origin-right animate-[draw-x_4s_linear_infinite]"
              style={{ animationDelay: "2s" }}
            ></div>
            {/* Garis Kiri */}
            <div
              className="absolute bottom-0 left-0 w-px bg-white origin-bottom animate-[draw-y_4s_linear_infinite]"
              style={{ animationDelay: "3s" }}
            ></div>
          </div>
          {/* --- Selesai Animasi Border --- */}

          {/* Ikon itu sendiri */}
          <social.icon size={24} />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
