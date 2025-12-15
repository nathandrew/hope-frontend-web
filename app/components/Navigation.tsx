'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useTheme } from './ThemeProvider';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav className="relative z-50 flex justify-between">
          <div className="flex items-center md:gap-x-12">
            <Link href="/" className="text-2xl font-bold text-slate-900 dark:text-white" aria-label="Home">
              Hope Blog
            </Link>
            <div className="hidden md:flex md:gap-x-6">
              <Link
                href="/"
                className="inline-block rounded-lg px-2 py-1 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-300"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="inline-block rounded-lg px-2 py-1 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-300"
              >
                About
              </Link>
              <Link
                href="/blog"
                className="inline-block rounded-lg px-2 py-1 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-300"
              >
                Blog
              </Link>
              <Link
                href="/contact"
                className="inline-block rounded-lg px-2 py-1 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-300"
              >
                Contact
              </Link>
            </div>
          </div>
          <div className="flex items-center gap-x-5 md:gap-x-8">
            <button
              onClick={toggleTheme}
              className="hidden md:inline-flex items-center justify-center p-2 rounded-lg text-slate-700 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-300"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              ) : (
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              )}
            </button>
            <div className="-mr-1 md:hidden flex items-center gap-2">
              <button
                onClick={toggleTheme}
                className="inline-flex items-center justify-center p-2"
                aria-label="Toggle theme"
              >
                {theme === 'light' ? (
                  <svg className="h-5 w-5 stroke-slate-700" fill="none" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                ) : (
                  <svg className="h-5 w-5 stroke-slate-400" fill="none" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                )}
              </button>
              <button
                onClick={toggleMenu}
                className="relative z-10 flex h-8 w-8 items-center justify-center"
                aria-label="Toggle Navigation"
              >
                <svg
                  aria-hidden="true"
                  className="h-3.5 w-3.5 overflow-visible stroke-slate-700 dark:stroke-slate-400"
                  fill="none"
                  strokeWidth={2}
                  strokeLinecap="round"
                >
                  <path
                    d="M0 1H14M0 7H14M0 13H14"
                    className={`origin-center transition ${isMenuOpen ? 'scale-90 opacity-0' : ''}`}
                  />
                  <path
                    d="M2 2L12 12M12 2L2 12"
                    className={`origin-center transition ${!isMenuOpen ? 'scale-90 opacity-0' : ''}`}
                  />
                </svg>
              </button>
            </div>
          </div>
        </nav>

        {isMenuOpen && (
          <div className="mt-4 rounded-2xl bg-white dark:bg-slate-800 p-4 text-lg tracking-tight text-slate-900 dark:text-slate-100 shadow-xl ring-1 ring-slate-900/5 dark:ring-slate-700/50">
            <Link
              href="/"
              className="block w-full p-2 hover:text-blue-600 dark:hover:text-blue-400"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block w-full p-2 hover:text-blue-600 dark:hover:text-blue-400"
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link
              href="/blog"
              className="block w-full p-2 hover:text-blue-600 dark:hover:text-blue-400"
              onClick={toggleMenu}
            >
              Blog
            </Link>
            <hr className="m-2 border-slate-300/40 dark:border-slate-700" />
            <Link
              href="/contact"
              className="block w-full p-2 hover:text-blue-600 dark:hover:text-blue-400"
              onClick={toggleMenu}
            >
              Contact
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
