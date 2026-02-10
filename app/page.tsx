"use client";

import { useState } from "react";

export default function Home() {
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <div className="min-h-screen bg-[#f7f1ea] text-zinc-900">
      {/* Top navigation */}
      <header className="sticky top-0 z-30 border-b border-neutral-200/70 bg-[#f7f1ea]/80 backdrop-blur">
        <div className="container mx-auto flex items-center justify-between px-4 py-4 md:px-8">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-amber-700/40 bg-amber-50 shadow-sm">
              <img
                src="https://thetaverncoffee.com/wp-content/uploads/2025/05/brownlogo.png"
                alt="The Tavern Coffee House logo"
                className="h-full w-full object-contain"
              />
            </div>
            <div className="leading-tight">
              <p className="text-xs uppercase tracking-[0.25em] text-amber-700">
                The Tavern
              </p>
              <p className="text-sm font-semibold tracking-wide text-neutral-900">
                Coffee House
              </p>
            </div>
          </div>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-8 text-xs font-medium uppercase tracking-[0.18em] text-neutral-700 md:flex">
            <a href="#" className="hover:text-amber-800">
              Home
            </a>
            <a href="#" className="hover:text-amber-800">
              Full Menu
            </a>
            <a href="#" className="hover:text-amber-800">
              Tavern Merch
            </a>
            <a href="#" className="hover:text-amber-800">
              Our Story
            </a>
            <a href="#" className="hover:text-amber-800">
              The Drip
            </a>
            <a href="#" className="hover:text-amber-800">
              Host an Event
            </a>
            <a href="#" className="hover:text-amber-800">
              Donate
            </a>
          </nav>

          {/* CTA + cart + mobile menu */}
          <div className="flex items-center gap-3">
            <a
              href="#"
              className="hidden rounded-full border border-neutral-900/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-900 shadow-sm transition hover:-translate-y-0.5 hover:bg-neutral-900 hover:text-amber-50 md:inline-flex"
            >
              Order Online
            </a>
            {/* Mobile menu toggle */}
            <button
              type="button"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-neutral-900/70 bg-white text-neutral-900 shadow-sm transition hover:-translate-y-0.5 hover:bg-neutral-900 hover:text-amber-50 md:hidden"
              aria-label="Open menu"
              onClick={() => setMobileOpen(true)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
              >
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            </button>
            <button
              aria-label="View cart"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-900/70 bg-white text-neutral-900 shadow-sm transition hover:-translate-y-0.5 hover:bg-neutral-900 hover:text-amber-50"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
              >
                <path d="M5 5h2l1 11h9l1.2-8H8" />
                <circle cx="10" cy="19" r="1" />
                <circle cx="17" cy="19" r="1" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile slide-out menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <button
            type="button"
            className="absolute inset-0 h-full w-full bg-black/40"
            aria-label="Close menu"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute inset-y-0 right-0 flex w-64 max-w-[80%] flex-col gap-6 bg-[#f7f1ea] px-6 py-6 shadow-[0_0_40px_rgba(0,0,0,0.45)]">
            <div className="flex items-center justify-between">
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-amber-700">
                Menu
              </p>
              <button
                type="button"
                aria-label="Close menu"
                className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-neutral-900/60 bg-white text-neutral-900 hover:bg-neutral-900 hover:text-amber-50"
                onClick={() => setMobileOpen(false)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                >
                  <path d="M6 6l12 12M18 6L6 18" />
                </svg>
              </button>
            </div>
            <nav className="flex flex-col gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-neutral-900">
              <a href="#" className="py-1 hover:text-amber-800">
                Home
              </a>
              <a href="#" className="py-1 hover:text-amber-800">
                Full Menu
              </a>
              <a href="#" className="py-1 hover:text-amber-800">
                Tavern Merch
              </a>
              <a href="#" className="py-1 hover:text-amber-800">
                Our Story
              </a>
              <a href="#" className="py-1 hover:text-amber-800">
                The Drip
              </a>
              <a href="#" className="py-1 hover:text-amber-800">
                Host an Event
              </a>
              <a href="#" className="py-1 hover:text-amber-800">
                Donate
              </a>
            </nav>
          </div>
        </div>
      )}

      {/* Hero */}
      <main className="container mx-auto px-4 pb-20 pt-10 md:px-8 md:pt-14 lg:pt-20">
        <section className="grid gap-10 md:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)] md:items-center">
          {/* Hero copy */}
          <div className="space-y-8">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-700">
              Once a bar. Now a nonprofit coffeehouse.
            </p>
            <h1 className="text-balance font-serif text-4xl font-semibold leading-tight tracking-tight text-neutral-950 sm:text-5xl lg:text-[3.3rem]">
              Strong coffee. Stronger careers. The strongest community.
            </h1>
            <p className="max-w-xl text-base leading-relaxed text-neutral-700 sm:text-lg">
              Order ahead, skip the line, and know every cup fuels job training
              and second chances in the Buckeye neighborhood.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-full bg-neutral-950 px-6 py-3 text-xs font-semibold uppercase tracking-[0.25em] text-amber-50 shadow-md shadow-neutral-900/20 transition hover:-translate-y-0.5 hover:bg-neutral-800"
              >
                Order Ahead
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-full border border-neutral-900/60 bg-transparent px-6 py-3 text-xs font-semibold uppercase tracking-[0.25em] text-neutral-900 transition hover:-translate-y-0.5 hover:bg-neutral-900 hover:text-amber-50"
              >
                View Full Menu
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-6 text-xs text-neutral-700">
              <div>
                <p className="font-semibold uppercase tracking-[0.2em] text-neutral-900">
                  Open Mon–Fri
                </p>
                <p>8am – 2pm · 12302 Buckeye Rd, Cleveland</p>
              </div>
              <div className="h-10 w-px bg-neutral-300/80" />
              <div>
                <p className="font-semibold uppercase tracking-[0.2em] text-neutral-900">
                  Every cup gives back
                </p>
                <p>Nonprofit 501(c)(3) · Career-building for neighbors</p>
              </div>
            </div>
          </div>

          <div className="relative flex items-center justify-center">
            <div className="h-64 w-64 rounded-full border border-amber-200/60 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.9),rgba(250,224,180,0.7),rgba(135,76,40,0.1))] shadow-[0_25px_50px_rgba(0,0,0,0.35)] sm:h-72 sm:w-72" />
            <img
              src="https://thetaverncoffee.com/wp-content/uploads/2025/05/coffeecup-1.png"
              alt="Hero cup"
              className="absolute h-[260px] w-auto drop-shadow-[0_18px_35px_rgba(0,0,0,0.45)] sm:h-[300px]"
            />
          </div>
        </section>

        {/* Featured special / latte card */}
        <section className="mt-20 rounded-3xl bg-[#3b2a27] px-6 py-10 text-amber-50 shadow-xl sm:px-8 md:mt-24">
          <div className="grid gap-10 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] md:items-center">
            <div className="space-y-6">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-300">
                Featured Special
              </p>
              <h2 className="text-balance font-serif text-3xl font-semibold leading-tight sm:text-4xl">
                Serving up something for everyone.
              </h2>
              <p className="max-w-xl text-sm text-amber-100/90 sm:text-[0.95rem]">
                From bold brews to sweet sips, every drink at The Tavern is
                crafted with care and community in mind. Whether you&apos;re
                grabbing your go-to latte or trying something new, there&apos;s
                always a reason to stay a while.
              </p>
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-full border border-amber-100 px-6 py-3 text-xs font-semibold uppercase tracking-[0.25em] text-amber-50 transition hover:-translate-y-0.5 hover:bg-amber-50 hover:text-[#3b2a27]"
              >
                Start a Pickup Order →
              </a>
            </div>

            <article className="rounded-3xl bg-[#fdf8f3] p-6 text-[#3b2a27] shadow-lg">
              <div className="mb-5 flex items-center justify-between gap-3">
                <div className="space-y-1">
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-700">
                    The Tavern&apos;s Favorite
                  </p>
                  <h3 className="font-serif text-2xl font-semibold leading-snug">
                    Signature Latte
                  </h3>
                </div>
                <div className="h-14 w-14 rounded-full bg-linear-to-br from-amber-100 via-white to-amber-200 shadow-md" />
              </div>
              <p className="text-sm font-medium">$5.00</p>
              <p className="mt-2 flex items-center gap-2 text-xs text-[#6b4a3c]">
                <span>☕</span>
                <span>Caffeine level ~100 mg</span>
              </p>
              <p className="mt-3 text-sm text-[#4b3226]">
                Our strong latte with any available syrup. Comfort in a cup,
                crafted just for you.
              </p>
              <a
                href="#"
                className="mt-5 text-xs font-semibold uppercase tracking-[0.25em] text-[#3b2a27] underline-offset-4 hover:underline"
              >
                Order Ahead →
              </a>
            </article>
          </div>
        </section>

        {/* Bag feature */}
        <section className="mt-20 rounded-3xl bg-[#6a474f] px-6 py-10 text-amber-50 shadow-xl sm:px-8 md:mt-24">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div className="relative rounded-3xl bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_55%),repeating-linear-gradient(135deg,rgba(0,0,0,0.14)_0,rgba(0,0,0,0.14)_1px,transparent_1px,transparent_16px)]">
              <div className="rounded-3xl bg-linear-to-br from-[#f4b468] via-[#d3944e] to-[#b46a2e] shadow-[0_30px_80px_rgba(0,0,0,0.45)]" />
              <img
                src="https://thetaverncoffee.com/wp-content/uploads/2025/05/bagandbean.png"
                alt="Hero cup"
                className="max-w-full h-[500px] block mx-auto"
              />
            </div>

            <div className="space-y-6">
              <h2 className="text-balance font-serif text-3xl font-semibold leading-tight sm:text-4xl">
                Grab a bag of our best brew.
              </h2>
              <p className="text-sm text-amber-100/90 sm:text-[0.95rem]">
                Take a piece of The Tavern home with you. Every 12oz bag of our
                signature roast fuels more than your morning—it powers job
                training, mentorship, and hope right here in Buckeye.
              </p>
              <p className="text-sm font-semibold text-amber-50">
                Brew boldly. Give generously.
              </p>
              <p className="mt-2 text-xs text-amber-200">
                ☕ 12 oz bag · 17–21 servings
              </p>
              <div className="mt-4 h-px w-full bg-amber-200/40" />
              <a
                href="#"
                className="mt-4 inline-flex items-center justify-center rounded-full bg-amber-300 px-6 py-3 text-xs font-semibold uppercase tracking-[0.25em] text-[#4b2b25] shadow-md shadow-amber-900/40 transition hover:-translate-y-0.5 hover:bg-amber-200"
              >
                $14 · Order Today →
              </a>
            </div>
          </div>
        </section>

        {/* Bakery partnership */}
        <section className="mt-20 rounded-3xl bg-white px-6 py-10 text-[#3b2a27] shadow-sm sm:px-8 md:mt-24">
          <div className="grid gap-10 md:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)] md:items-center">
            <div className="space-y-6">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-700">
                Baked goods, pastries, &amp; sandwiches
              </p>
              <h2 className="text-balance font-serif text-3xl font-semibold leading-tight sm:text-4xl">
                Better together: The Tavern × Hunny Bunny&apos;s Bakery.
              </h2>
              <p className="max-w-xl text-sm text-[#4b3226] sm:text-[0.95rem]">
                Every pastry we serve is handcrafted by Hunny Bunny&apos;s
                Bakery, a local gem we&apos;re proud to support. It&apos;s a
                sweet partnership that builds up Buckeye—one bite at a time.
              </p>
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-full bg-[#3b2a27] px-6 py-3 text-xs font-semibold uppercase tracking-[0.25em] text-amber-50 shadow-md shadow-neutral-900/30 transition hover:-translate-y-0.5 hover:bg-[#241715]"
              >
                Order Now →
              </a>
            </div>

            <div className="relative flex items-center justify-center">
              <div className="relative  rounded-4xl bg-linear-to-br from-[#fff7f1] via-white to-[#ffe3c2] ">
                <div className="absolute inset-x-6 bottom-4 h-36 rounded-4xl bg-linear-to-b from-[#f5c27a]/3 via-[#e79d57]/0 to-[#d27b37]/7" />
                <img src="https://thetaverncoffee.com/wp-content/uploads/2025/05/muffinandcoffee.png" alt="Donut and Coffee" className="max-w-full h-[500px] rounded-3xl block mx-auto" />
              </div>
            </div>
          </div>
        </section>

        {/* Jobs / impact */}
        <section className="mt-20 rounded-3xl bg-[#5a3840] px-6 py-10 text-amber-50 shadow-xl sm:px-8 md:mt-24">
          <div className="grid gap-10 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1.1fr)] md:items-center">
            <div className="relative py-8 rounded-4xl bg-[#2b181d] shadow-[0_30px_80px_rgba(0,0,0,0.4)]">
              <img src="/ph.png" alt="Woman with Coffee" className="max-w-full h-[500px] rounded-3xl block mx-auto" />

            </div>

            <div className="space-y-6">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-300">
                Committed to reinvesting in community
              </p>
              <h2 className="text-balance font-serif text-3xl font-semibold leading-tight sm:text-4xl">
                Stronger jobs start here.
              </h2>
              <p className="text-sm text-amber-100/90 sm:text-[0.95rem]">
                Behind the counter, there&apos;s more than just coffee brewing.
                Our one-year youth job training program equips young adults with
                the tools to thrive—on the job and in life. Every shift is a
                step toward something bigger.
              </p>
              <p className="text-sm font-semibold text-amber-50">
                We&apos;re brewing more than coffee—we&apos;re brewing
                confidence, purpose, and life skills.
              </p>
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-full bg-amber-300 px-6 py-3 text-xs font-semibold uppercase tracking-[0.25em] text-[#4b2b25] shadow-md shadow-amber-900/40 transition hover:-translate-y-0.5 hover:bg-amber-200"
              >
                Learn About Our Jobs Program →
              </a>
            </div>
          </div>
        </section>

        {/* Story teaser */}
        <section className="mt-20 rounded-3xl bg-white px-6 py-10 text-[#3b2a27] shadow-sm sm:px-8 md:mt-24">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div className="space-y-6">
              <h2 className="text-balance font-serif text-3xl font-semibold leading-tight sm:text-4xl">
                Repurposed. Reimagined. Reigniting Buckeye—one cup at a time.
              </h2>
              <p className="max-w-xl text-sm text-[#4b3226] sm:text-[0.95rem]">
                The Tavern Coffee House is a nonprofit café where strong coffee
                fuels second chances. We&apos;re creating jobs, building
                community, and serving hope daily in the heart of Buckeye.
              </p>
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-full bg-[#3b2a27] px-6 py-3 text-xs font-semibold uppercase tracking-[0.25em] text-amber-50 shadow-md shadow-neutral-900/30 transition hover:-translate-y-0.5 hover:bg-[#241715]"
              >
                Read Our Story →
              </a>
            </div>

            <div className="relative flex items-center justify-center">
              <div className="relative w-full overflow-hidden rounded-[2.25rem] bg-linear-to-br from-[#fff7f1] via-white to-[#ffe3c2] px-4 pb-8 pt-9">
                <div className="relative">
                  <img
                    src="/ph2.png"
                    alt="Woman with Coffee"
                    className="relative z-10 mx-auto block h-[460px] max-w-full rounded-3xl object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Drip / blog preview */}
        <section className="mt-20 rounded-3xl bg-[#6f4a52] px-6 py-10 text-amber-50 shadow-xl sm:px-8 md:mt-24">
          <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-200">
                The Drip · From our blog
              </p>
              <h2 className="mt-2 font-serif text-3xl font-semibold leading-tight">
                Fresh pours, stories, and coffee thoughts.
              </h2>
            </div>
            <a
              href="#"
              className="mt-3 inline-flex items-center justify-center self-start rounded-full border border-amber-100/80 px-5 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.25em] text-amber-50 transition hover:-translate-y-0.5 hover:bg-amber-50 hover:text-[#5b3941]"
            >
              View All Posts →
            </a>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                title: "The Simple Joy of Coffee: More Than Just a Drink",
                category: "The Drip",
                body: "For many of us, coffee is more than a beverage—it’s a ritual, a comfort, and sometimes the spark that gets our day moving.",
                readTime: "3 min read",
              },
              {
                title: "Why Morning People Have It Made (and How to Fake It…)",
                category: "The Drip",
                body: "Ever wonder what your coffee choice says about your vibe? From bold cold brew to cozy cappuccino, your order might be spilling your secrets.",
                readTime: "4 min read",
              },
            ].map((post) => (
              <article
                key={post.title}
                className="group flex flex-col justify-between rounded-2xl border border-amber-200/15 bg-gradient-to-br from-[#5b3941] via-[#5b3941] to-[#7a525a] p-6 shadow-lg shadow-black/40 transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="space-y-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-300">
                    {post.category}
                  </p>
                  <h3 className="font-serif text-xl font-semibold leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-sm text-amber-100/90">
                    {post.body}
                  </p>
                  <p className="text-[0.7rem] font-medium uppercase tracking-[0.25em] text-amber-200/80">
                    {post.readTime}
                  </p>
                </div>
                <a
                  href="#"
                  className="mt-5 inline-flex items-center justify-center rounded-full border border-amber-100 px-5 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.25em] text-amber-50 transition group-hover:-translate-y-0.5 group-hover:bg-amber-50 group-hover:text-[#5b3941]"
                >
                  Read More →
                </a>
              </article>
            ))}
        </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-neutral-800 bg-[#221715] py-10 text-amber-100">
        <div className="container mx-auto px-4 text-xs md:px-8">
          <div className="grid gap-10 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)_minmax(0,1fr)] md:items-start">
            {/* Logo + address + hours + socials */}
            <div className="flex items-start gap-5">
              <div className="flex h-24 w-24 items-center justify-center overflow-hidden rounded-full border border-amber-300/40 bg-amber-50/5">
                <img
                  src="https://thetaverncoffee.com/wp-content/uploads/2025/05/whitelogo.png"
                  alt="The Tavern Coffee House logo"
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="space-y-2 text-[0.75rem]">
                <p className="text-[0.6rem] uppercase tracking-[0.3em] text-amber-300">
                  The Tavern Coffee House
                </p>
                <p>
                  <a
                    href="https://maps.app.goo.gl/4wWkY7H8bq3tJjzW7"
                    target="_blank"
                    rel="noreferrer"
                    className="underline underline-offset-2 hover:text-white"
                  >
                    12302 Buckeye Rd
                  </a>
                </p>
                <p>Cleveland, OH 44120</p>
                <p>
                  <a href="tel:+12162917620" className="hover:text-white">
                    (216) 291-7620
                  </a>
                </p>
                <div className="mt-2 space-y-1">
                  <p className="text-[0.6rem] font-semibold uppercase tracking-[0.25em] text-amber-200">
                    Open Monday–Friday
                  </p>
                  <p>8am–2pm</p>
                </div>
                <div className="mt-3 flex items-center gap-3 text-[0.75rem]">
                  <a href="https://www.facebook.com" className="hover:text-white">
                    Facebook
                  </a>
                  <a href="https://www.tiktok.com" className="hover:text-white">
                    TikTok
                  </a>
                  <a href="https://www.instagram.com" className="hover:text-white">
                    Instagram
                  </a>
                </div>
              </div>
            </div>

            {/* Navigation columns */}
            <div className="grid grid-cols-2 gap-6 text-[0.75rem]">
              <div className="space-y-1">
                <p className="mb-1 text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-amber-300">
                  Visit
                </p>
                <a href="#" className="block text-left text-amber-100/90 hover:text-white">
                  Home
                </a>
                <a href="#" className="block text-left text-amber-100/90 hover:text-white">
                  Our Story
                </a>
                <a href="#" className="block text-left text-amber-100/90 hover:text-white">
                  Mission
                </a>
                <a href="#" className="block text-left text-amber-100/90 hover:text-white">
                  Vision
                </a>
                <a href="#" className="block text-left text-amber-100/90 hover:text-white">
                  Values
                </a>
                <a href="#" className="block text-left text-amber-100/90 hover:text-white">
                  Pay It Forward
                </a>
              </div>
              <div className="space-y-1">
                <p className="mb-1 text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-amber-300">
                  Order
                </p>
                <a href="#" className="block text-left text-amber-100/90 hover:text-white">
                  Order Online
                </a>
                <a href="#" className="block text-left text-amber-100/90 hover:text-white">
                  Full Menu
                </a>
                <a href="#" className="block text-left text-amber-100/90 hover:text-white">
                  Tavern Merch
                </a>
                <a href="#" className="block text-left text-amber-100/90 hover:text-white">
                  Host an Event
                </a>
                <a href="#" className="block text-left text-amber-100/90 hover:text-white">
                  The Drip
                </a>
                <a href="#" className="block text-left text-amber-100/90 hover:text-white">
                  Donate
                </a>
              </div>
            </div>

            {/* Right column description */}
            <div className="space-y-3 text-[0.75rem] text-amber-100/90">
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-amber-300">
                Once a neighborhood bar, now a nonprofit coffeehouse.
              </p>
              <p>
                The Tavern is where strong coffee fuels stronger careers and the strongest
                community. Join us in transforming Buckeye—one cup, one connection at a time.
              </p>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-8 border-t border-amber-200/20 pt-4 text-[0.6rem] text-amber-200/80">
            <p>
              ©2026 The Tavern Coffee House. All rights reserved. The Tavern Coffee House is a
              501(c)(3) public charity. All donations are tax-deductible.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
