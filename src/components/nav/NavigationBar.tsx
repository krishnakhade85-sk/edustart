"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const NAV_ITEMS = [
  { label: "Home",       href: "/",          emoji: "🏠" },
  { label: "Discover",   href: "/discover",   emoji: "🔭" },
  { label: "Think",      href: "/think",      emoji: "🧠" },
  { label: "Create",     href: "/create",     emoji: "🎨" },
  { label: "Make",       href: "/make",       emoji: "🔧" },
  { label: "My Journey", href: "/journey",    emoji: "🗺️" },
  { label: "Ask",        href: "/ask",        emoji: "💬" },
] as const;

export function NavigationBar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50"
      style={{
        backdropFilter: "blur(24px)",
        WebkitBackdropFilter: "blur(24px)",
        background: "rgba(11,12,30,0.80)",
        borderBottom: "1px solid rgba(255,255,255,0.07)",
      }}
    >
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-14"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 no-underline"
          aria-label="EduStart home"
        >
          <span
            className="text-xl"
            style={{
              filter: "drop-shadow(0 0 8px rgba(124,58,237,0.8))",
            }}
          >
            ✦
          </span>
          <span
            className="font-black text-base tracking-tight"
            style={{
              background:
                "linear-gradient(135deg, #c084fc 0%, #818cf8 50%, #38bdf8 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            EduStart
          </span>
        </Link>

        {/* Desktop nav */}
        <ul
          className="hidden md:flex items-center gap-1 list-none"
          role="list"
        >
          {NAV_ITEMS.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`nav-link ${isActive ? "active" : ""}`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Right side */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/parent"
            className="text-xs font-700 px-3 py-1.5 rounded-full transition-all"
            style={{
              color: "var(--color-text-secondary)",
              border: "1px solid var(--color-border)",
            }}
            onMouseEnter={(e) => {
              (e.target as HTMLElement).style.color =
                "var(--color-text-primary)";
              (e.target as HTMLElement).style.borderColor =
                "rgba(255,255,255,0.20)";
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLElement).style.color =
                "var(--color-text-secondary)";
              (e.target as HTMLElement).style.borderColor =
                "var(--color-border)";
            }}
          >
            Parent View
          </Link>
          <Link href="/start" className="btn-primary text-sm py-1.5 px-4">
            Start Exploring
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          id="mobile-menu-toggle"
          className="md:hidden flex flex-col gap-1 p-2 rounded-lg"
          style={{ color: "var(--color-text-primary)" }}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span
            className="block w-5 h-0.5 transition-all"
            style={{
              background: "currentColor",
              transform: menuOpen ? "rotate(45deg) translate(3px, 3px)" : "",
            }}
          />
          <span
            className="block w-5 h-0.5 transition-all"
            style={{
              background: "currentColor",
              opacity: menuOpen ? 0 : 1,
            }}
          />
          <span
            className="block w-5 h-0.5 transition-all"
            style={{
              background: "currentColor",
              transform: menuOpen ? "rotate(-45deg) translate(3px, -3px)" : "",
            }}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden px-4 pb-4 animate-fade-in"
          style={{ borderTop: "1px solid var(--color-border)" }}
        >
          <ul className="flex flex-col gap-1 pt-3 list-none" role="list">
            {NAV_ITEMS.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`nav-link flex items-center gap-2 w-full ${isActive ? "active" : ""}`}
                    aria-current={isActive ? "page" : undefined}
                    onClick={() => setMenuOpen(false)}
                  >
                    <span>{item.emoji}</span>
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="flex flex-col gap-2 pt-3 mt-3" style={{ borderTop: "1px solid var(--color-border)" }}>
            <Link href="/parent" className="btn-secondary text-sm text-center justify-center">
              Parent View
            </Link>
            <Link href="/start" className="btn-primary text-sm justify-center">
              Start Exploring
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
