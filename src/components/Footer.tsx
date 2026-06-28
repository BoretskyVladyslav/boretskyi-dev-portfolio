import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

const socialLinks = [
  {
    href: "mailto:boretskyvladyslav@gmail.com",
    label: "Email",
    icon: Mail,
    external: false,
  },
  {
    href: "https://linkedin.com/in/vladyslav-boretsky",
    label: "LinkedIn",
    icon: LinkedinIcon,
    external: true,
  },
  {
    href: "https://github.com/BoretskyVladyslav",
    label: "GitHub",
    icon: GithubIcon,
    external: true,
  },
] as const;

export function Footer() {
  return (
    <footer className="mt-12 flex flex-col gap-8 border-t border-white/10 pb-8 pt-12">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-lg font-medium text-foreground">
          Let&apos;s build something fast and scalable together.
        </p>

        <nav aria-label="Social links" className="flex items-center gap-4">
          {socialLinks.map(({ href, label, icon: Icon, external }) => (
            <a
              key={label}
              href={href}
              {...(external && {
                target: "_blank",
                rel: "noopener noreferrer",
              })}
              className="flex h-10 w-10 items-center justify-center rounded-md border border-white/10 bg-white/5 text-muted-foreground transition-all duration-300 hover:border-white/20 hover:bg-white/10 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border"
              aria-label={label}
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </nav>
      </div>

      <p className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} Vladyslav Boretskyi. Crafted with Next.js
        & Tailwind v4.
      </p>
    </footer>
  );
}
