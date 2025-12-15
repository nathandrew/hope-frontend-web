import Navigation from './components/Navigation';
import Link from 'next/link';

export default function Home() {
  const recentPosts = [
    {
      id: 1,
      title: "Getting Started with Next.js 15",
      excerpt: "Learn the fundamentals of Next.js and how to build modern web applications with the latest features.",
      date: "December 10, 2025",
      readTime: "5 min read",
      category: "Web Development"
    },
    {
      id: 2,
      title: "Mastering Tailwind CSS",
      excerpt: "Discover best practices and advanced techniques for using Tailwind CSS in your projects.",
      date: "December 8, 2025",
      readTime: "7 min read",
      category: "CSS"
    },
    {
      id: 3,
      title: "React Server Components Explained",
      excerpt: "A deep dive into React Server Components and how they can improve your application's performance.",
      date: "December 5, 2025",
      readTime: "10 min read",
      category: "React"
    }
  ];

  return (
    <>
      <Navigation />
      <main>
        {/* Hero Section */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center lg:pt-32">
          <h1 className="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-slate-900 dark:text-white sm:text-7xl">
            Web development{' '}
            <span className="relative whitespace-nowrap text-blue-600 dark:text-blue-500">
              <svg
                aria-hidden="true"
                viewBox="0 0 418 42"
                className="absolute top-2/3 left-0 h-[0.58em] w-full fill-blue-300/70 dark:fill-blue-700/70"
                preserveAspectRatio="none"
              >
                <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z" />
              </svg>
              <span className="relative">insights</span>
            </span>{' '}
            for everyone.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-slate-700 dark:text-slate-400">
            Sharing helpful tutorials, best practices, and experiences in modern web development. Learn Next.js, React, and more.
          </p>
          <div className="mt-10 flex justify-center gap-x-6">
            <Link
              href="/blog"
              className="group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 bg-slate-900 text-white hover:bg-slate-700 hover:text-slate-100 active:bg-slate-800 active:text-slate-300 focus-visible:outline-slate-900 dark:bg-white dark:text-slate-900 dark:hover:bg-blue-50 dark:active:bg-blue-200"
            >
              Browse Articles
            </Link>
            <Link
              href="/about"
              className="group inline-flex ring-1 items-center justify-center rounded-full py-2 px-4 text-sm ring-slate-200 text-slate-700 hover:text-slate-900 hover:ring-slate-300 active:bg-slate-100 active:text-slate-600 focus-visible:outline-blue-600 focus-visible:ring-slate-300 dark:ring-slate-700 dark:text-slate-400 dark:hover:text-slate-300 dark:hover:ring-slate-600 dark:active:bg-slate-800"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Recent Posts Section */}
        <div className="bg-white dark:bg-slate-950 py-20 sm:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:max-w-none">
              <div className="text-center">
                <h2 className="font-display text-3xl tracking-tight text-slate-900 dark:text-white sm:text-4xl">
                  Recent Posts
                </h2>
                <p className="mt-4 text-lg tracking-tight text-slate-600 dark:text-slate-400">
                  The latest articles and tutorials from the Hope Blog
                </p>
              </div>
              <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
                {recentPosts.map((post) => (
                  <article key={post.id} className="group relative flex flex-col">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="inline-flex items-center rounded-full bg-blue-50 dark:bg-blue-950/50 px-3 py-1 text-xs font-medium text-blue-700 dark:text-blue-400">
                        {post.category}
                      </span>
                      <span className="text-xs text-slate-500 dark:text-slate-500">
                        {post.readTime}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold leading-7 text-slate-900 dark:text-white">
                      <Link href={`/blog/${post.id}`}>
                        <span className="absolute inset-0" />
                        {post.title}
                      </Link>
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
                      {post.excerpt}
                    </p>
                    <div className="mt-6 flex items-center gap-x-4">
                      <time dateTime={post.date} className="text-sm text-slate-500 dark:text-slate-500">
                        {post.date}
                      </time>
                      <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 group-hover:text-blue-500 dark:group-hover:text-blue-300">
                        Read article →
                      </span>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="relative isolate overflow-hidden bg-slate-900 py-16 sm:py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
              <div className="max-w-xl lg:max-w-lg">
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Subscribe to our newsletter</h2>
                <p className="mt-4 text-lg leading-8 text-slate-300">
                  Get notified when new helpful content is published. No spam, unsubscribe at any time.
                </p>
                <div className="mt-6 flex max-w-md gap-x-4">
                  <label htmlFor="email-address" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="email-address"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
                    placeholder="Enter your email"
                  />
                  <button
                    type="submit"
                    className="flex-none rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-slate-900 shadow-sm hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    Subscribe
                  </button>
                </div>
              </div>
              <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
                <div className="flex flex-col items-start">
                  <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                    </svg>
                  </div>
                  <dt className="mt-4 font-semibold text-white">Weekly articles</dt>
                  <dd className="mt-2 leading-7 text-slate-400">New tutorials and insights every week.</dd>
                </div>
                <div className="flex flex-col items-start">
                  <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10.05 4.575a1.575 1.575 0 1 0-3.15 0v3m3.15-3v-1.5a1.575 1.575 0 0 1 3.15 0v1.5m-3.15 0 .075 5.925m3.075.75V4.575m0 0a1.575 1.575 0 0 1 3.15 0V15M6.9 7.575a1.575 1.575 0 1 0-3.15 0v8.175a6.75 6.75 0 0 0 6.75 6.75h2.018a5.25 5.25 0 0 0 3.712-1.538l1.732-1.732a5.25 5.25 0 0 0 1.538-3.712l.003-2.024a.668.668 0 0 1 .198-.471 1.575 1.575 0 1 0-2.228-2.228 3.818 3.818 0 0 0-1.12 2.687M6.9 7.575V12m6.27 4.318A4.49 4.49 0 0 1 16.35 15m.002 0h-.002" />
                    </svg>
                  </div>
                  <dt className="mt-4 font-semibold text-white">No spam</dt>
                  <dd className="mt-2 leading-7 text-slate-400">Only quality content, no promotional emails.</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-white dark:bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="py-16">
            <div className="text-center">
              <p className="text-2xl font-bold text-slate-900 dark:text-white">Hope Blog</p>
            </div>
            <nav className="mt-10 text-sm" aria-label="quick links">
              <div className="-my-1 flex justify-center gap-x-6">
                <Link href="/" className="inline-block rounded-lg px-2 py-1 text-sm text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300">
                  Home
                </Link>
                <Link href="/about" className="inline-block rounded-lg px-2 py-1 text-sm text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300">
                  About
                </Link>
                <Link href="/blog" className="inline-block rounded-lg px-2 py-1 text-sm text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300">
                  Blog
                </Link>
                <Link href="/contact" className="inline-block rounded-lg px-2 py-1 text-sm text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300">
                  Contact
                </Link>
              </div>
            </nav>
          </div>
          <div className="flex flex-col items-center border-t border-slate-900/10 dark:border-slate-800 py-10 sm:flex-row-reverse sm:justify-between">
            <div className="flex gap-x-6">
              <Link href="#" className="group" aria-label="Hope Blog on X">
                <svg className="h-6 w-6 fill-slate-500 group-hover:fill-slate-600 dark:fill-slate-400 dark:group-hover:fill-slate-300" aria-hidden="true" viewBox="0 0 24 24">
                  <path d="M13.3174 10.7749L19.1457 4H17.7646L12.7039 9.88256L8.66193 4H4L10.1122 12.8955L4 20H5.38119L10.7254 13.7878L14.994 20H19.656L13.3171 10.7749H13.3174ZM11.4257 12.9738L10.8064 12.0881L5.87886 5.03974H8.00029L11.9769 10.728L12.5962 11.6137L17.7652 19.0075H15.6438L11.4257 12.9742V12.9738Z" />
                </svg>
              </Link>
              <Link href="#" className="group" aria-label="Hope Blog on GitHub">
                <svg className="h-6 w-6 fill-slate-500 group-hover:fill-slate-600 dark:fill-slate-400 dark:group-hover:fill-slate-300" aria-hidden="true" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" />
                </svg>
              </Link>
            </div>
            <p className="mt-6 text-sm text-slate-500 dark:text-slate-400 sm:mt-0">
              Copyright &copy; {new Date().getFullYear()} Hope Blog. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
