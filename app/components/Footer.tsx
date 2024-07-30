import {  Twitter } from "lucide-react";
import { cn } from "./utils";
import Image from "next/image";
import Discord from "public/icons/Discord";
import X from "public/icons/X";
import Twitch from "public/icons/Twitch";
import Instagram from "public/icons/Instagram";
import Github from "public/icons/Github";

interface SocialIcon {
  icon: JSX.Element;
  url: string;
}

const socialIcons: SocialIcon[] = [
  {
    icon: <Discord className="hover:text-[#5864F2] transition-colors" />,
    url: "https://discord.com/invite/comuafor",
  },
  {
    icon: <Twitch className="hover:text-[#A96FFF] transition-colors" />,
    url: "https://www.twitch.tv/afor_digital",
  },
  {
    icon: <Instagram className="hover:text-pink-500 transition-colors" />,
    url: "https://www.instagram.com/afor_digital",
  },
  {
    icon: <Github className="hover:text-gray-700 transition-colors" />,
    url: "https://github.com/Afordin",
  },
  {
    icon: <X className="hover:text-neutral-400 transition-colors" />,
    url: "https://twitter.com/afor_digital",
  },
];

export const Footer = () => {
  const classes = {
    container: cn(
      "text-cWhite bg-gradient-to-r from-[#19101D] to-[#0D0D0E] py-5 w-full font-dmsans"
    ),
    innerContainer: cn(
      "max-w-7xl w-full mx-auto text-center mb-10 flex flex-col justify-between items-center"
    ),
    socialIcon: cn("inline-flex"),
    copyRight: cn("text-sm mt-5 inset-x-0 bottom-2"),
  };

  const renderSocialIcons = () =>
    socialIcons.map((socialIcon, index) => (
      <a
        key={index}
        href={socialIcon.url}
        className={classes.socialIcon}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Link to ${socialIcon.url}`}
      >
        {socialIcon.icon}
      </a>
    ));

  return (
    <footer className={classes.container}>
      <div className={classes.innerContainer}>
        {/* Social Sections */}
        <section
          aria-labelledby="event-info-heading"
          className="flex items-center"
        >
          <a
            href="#"
            className="cursor-pointer hover:opacity-85"
            aria-label="Volver al inicio"
          >
            <Image
              src="/imgs/logo.png"
              width={30}
              height={30}
              alt="Event Logo"
              aria-label="Event Logo Aforshow 2024"
            />
          </a>

          <div className="ml-3 flex flex-col gap-y-3">
            <h4 id="event-info-heading" className="text-sm">
              Más información del evento
            </h4>
            <nav
              aria-label="Social media links"
              className="flex gap-x-5 text-2xl"
            >
              {renderSocialIcons()}
            </nav>
          </div>
        </section>

        {/* Copyrights */}
        <div className={classes.copyRight}>
          © 2024 Inspirado en&nbsp;
          <a
            href="https://www.twitch.tv/uxanarangel"
            className="underline underline-offset-4"
          >
            Ana Rangel.
          </a>
          &nbsp;Desarrollado por&nbsp;
          <a
            href="https://discord.com/invite/comuafor"
            className="underline underline-offset-4"
          >
            Comuafor
          </a>
        </div>
      </div>
    </footer>
  );
};
