import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="bg-background-light dark:bg-background-dark text-[#1b120d] dark:text-white transition-colors duration-300">
      <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
        <div className="layout-container flex h-full grow flex-col">

          {/* Top Navigation Bar */}
          <div className="px-4 lg:px-40 flex justify-center py-5 border-b border-solid border-[#f3ebe7] dark:border-[#3d2b23]">
            <div className="layout-content-container flex flex-col max-w-[1200px] flex-1">
              <header className="flex items-center justify-between whitespace-nowrap px-4 py-3">
                <div className="flex items-center gap-4 text-[#1b120d] dark:text-white">
                  <div className="size-6 text-primary">
                    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M24 4C25.7818 14.2173 33.7827 22.2182 44 24C33.7827 25.7818 25.7818 33.7827 24 44C22.2182 33.7827 14.2173 25.7818 4 24C14.2173 22.2182 22.2182 14.2173 24 4Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>

                  {/* You can rename to Terracotta Bistro if you want consistency */}
                  <h2 className="text-lg font-bold leading-tight tracking-[-0.015em]">
                    The Terracotta Bistro
                  </h2>
                </div>

                <div className="flex flex-1 justify-end gap-8 items-center">
                  <nav className="hidden md:flex items-center gap-9">
                    <Link className="text-sm font-medium leading-normal hover:text-primary transition-colors" to="/">
                      Home
                    </Link>
                    <Link className="text-sm font-medium leading-normal hover:text-primary transition-colors" to="/">
                      Menu
                    </Link>
                    <span className="text-sm font-bold leading-normal text-primary">
                      About
                    </span>
                    <a className="text-sm font-medium leading-normal hover:text-primary transition-colors" href="#contact">
                      Reservations
                    </a>
                  </nav>

                  <a
                    href="#contact"
                    className="flex min-w-[120px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-5 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:opacity-90 transition-opacity"
                  >
                    <span className="truncate">Book a Table</span>
                  </a>
                </div>
              </header>
            </div>
          </div>

          {/* Hero Image Section */}
          <div className="px-4 lg:px-40 flex justify-center py-8">
            <div className="layout-content-container flex flex-col max-w-[1200px] flex-1">
              <div className="@container">
                <div className="@[480px]:px-4 @[480px]:py-3">
                  <div
                    className="bg-cover bg-center flex flex-col justify-end overflow-hidden bg-background-light dark:bg-background-dark @[480px]:rounded-xl min-h-[450px] shadow-lg"
                    style={{
                      backgroundImage:
                        'linear-gradient(0deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0) 40%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuAjPswlttTMC8Z06Y1RfOZv5Tgouhz6GAABBsxbTjtGGuiGzo7XKIqSDuaxj44kGzKZplk9-NosL3rXTm0QbhIlpcVUyQZOyJh4vEPVBTWz3DvZ5DyNOWa8OafGFQjxL6MxIqhXlTEScdO6VERTYcshh9xbnjc2LS7De2RxxT-6JQlsl_qEYasb3wJgORPejZhzCWJcX_XVLdRBOw7GsdXudNdbVnvJIncwIoUoPLE9ChqXYR2aBOtnT3rGg2PZd7XV56PiPV2mnd6h")'
                    }}
                  >
                    <div className="flex p-8">
                      <div className="max-w-xl">
                        <p className="text-white tracking-tight text-[42px] font-bold leading-tight mb-2">
                          Crafting Moments, Daily.
                        </p>
                        <p className="text-white/90 text-lg font-light">
                          A sanctuary where the menu follows the rhythm of nature.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* About Section Header */}
          <div className="px-4 lg:px-40 flex justify-center pt-12 pb-6">
            <div className="layout-content-container flex flex-col max-w-[1200px] flex-1 text-center">
              <span className="text-primary font-bold uppercase tracking-widest text-xs mb-2">
                Our Philosophy
              </span>
              <h2 className="text-[#1b120d] dark:text-white text-3xl md:text-4xl font-bold leading-tight tracking-[-0.015em] px-4">
                The Art of Daily Change
              </h2>
              <div className="w-16 h-1 bg-primary mx-auto mt-6"></div>
            </div>
          </div>

          {/* Image Grid & Story Content */}
          <div className="px-4 lg:px-40 flex justify-center py-5">
            <div className="layout-content-container flex flex-col max-w-[1200px] flex-1">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 p-4 items-center">
                <div className="flex flex-col gap-6 order-2 md:order-1">
                  <p className="text-[#1b120d] dark:text-white text-xl font-medium leading-relaxed italic">
                    "The best ingredients are the ones that found their way to the market this morning."
                  </p>
                  <p className="text-[#9a664c] dark:text-gray-300 text-base font-normal leading-loose">
                    At The Terracotta Bistro, we don't believe in static menus. Our culinary team led by Chef Elena Rossi
                    collaborates with local permaculture farms and sustainable fishmongers every dawn. This approach
                    ensures that every plate served is a vibrant snapshot of the current season.
                  </p>
                  <p className="text-[#9a664c] dark:text-gray-300 text-base font-normal leading-loose">
                    Our interior was designed by Studio Altius to reflect this organic philosophy—utilizing reclaimed
                    oak, hand-forged iron, and ambient lighting that shifts from the brightness of a midday meadow to
                    the cozy embers of a evening hearth.
                  </p>
                </div>

                <div className="order-1 md:order-2">
                  <div
                    className="w-full bg-center bg-no-repeat aspect-[4/5] bg-cover rounded-xl shadow-xl"
                    style={{
                      backgroundImage:
                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD0QEfspEOAdn8s5LJjhRixkDylbi_42K_pVuksx_OevHnexetNB_-vNemZVZLVrkZBzKsEPGkwZGcfuFA9icZ1zhkmcXD2wZ9CZS4rji-INDTELPPQmkQZCJdn9QD9Kga8nao5G54U_X9mFYQWJZ2rgqRQg2quGWsEGPtjJL-aBOmPHE8hpJmSe0l2AFfs_sf4uX9SblskRawMq_DaJ_R673np1RdpF_iBZ2rwGqywonTKDqWn-7NdCLq6PiZw8PbJwkq9G5Xfz5HJ")'
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Details Section (Opening Hours & Location) */}
          <div className="bg-primary/5 dark:bg-white/5 py-20 px-4 lg:px-40 flex justify-center mt-12">
            <div className="layout-content-container flex flex-col max-w-[1200px] flex-1">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

                {/* Opening Hours */}
                <div className="flex flex-col gap-6">
                  <div className="flex items-center gap-3 text-primary">
                    <span className="material-symbols-outlined">schedule</span>
                    <h3 className="text-xl font-bold text-[#1b120d] dark:text-white uppercase tracking-wider">
                      Hours
                    </h3>
                  </div>

                  <ul className="space-y-4 text-[#1b120d] dark:text-gray-200">
                    <li className="flex justify-between border-b border-[#1b120d]/10 dark:border-white/10 pb-2">
                      <span className="font-medium">Mon - Thu</span>
                      <span>5:00 PM – 10:00 PM</span>
                    </li>
                    <li className="flex justify-between border-b border-[#1b120d]/10 dark:border-white/10 pb-2">
                      <span className="font-medium">Friday</span>
                      <span>5:00 PM – 11:30 PM</span>
                    </li>
                    <li className="flex justify-between border-b border-[#1b120d]/10 dark:border-white/10 pb-2">
                      <span className="font-medium">Saturday</span>
                      <span>11:00 AM – 11:30 PM</span>
                    </li>
                    <li className="flex justify-between border-b border-[#1b120d]/10 dark:border-white/10 pb-2">
                      <span className="font-medium">Sunday</span>
                      <span>11:00 AM – 9:00 PM</span>
                    </li>
                  </ul>
                </div>

                {/* Location & Map */}
                <div className="lg:col-span-2 flex flex-col gap-6">
                  <div className="flex items-center gap-3 text-primary">
                    <span className="material-symbols-outlined">location_on</span>
                    <h3 className="text-xl font-bold text-[#1b120d] dark:text-white uppercase tracking-wider">
                      Location
                    </h3>
                  </div>

                  <div className="relative w-full h-64 bg-gray-200 dark:bg-gray-800 rounded-xl overflow-hidden shadow-inner group">
                    <div
                      className="absolute inset-0 grayscale opacity-80 group-hover:grayscale-0 transition-all duration-500 bg-cover bg-center"
                      style={{
                        backgroundImage:
                          'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC1l3ZbySPeDiY4eBAyIkjVh6SZ-uk0Yzu6Zz69Q78W6VXvXC7URfV-ZKBkM-UvYsmsoTLoYsrJgQUhDDXSycKp3auqeUrZyKxhwT_pOFKacEcW8DstylyDfKcVmSFE5V_aImQDShVZCakBlXj1HrWsUnpIaSviy3wOnulJne_2_L9w61WSA_ISvIEkMG46o474sdjtZEnw7C_bZv17c4WPN8-a61jLdGOTRxsKuE9UQ2ryoYxRMF2MRbIyg5UWRUYQn5SvVzkvF2PT")'
                      }}
                    />

                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-primary text-white p-3 rounded-full shadow-lg animate-bounce">
                        <span className="material-symbols-outlined">restaurant</span>
                      </div>
                    </div>

                    <div className="absolute bottom-4 right-4">
                      <button className="bg-white dark:bg-[#1b120d] text-[#1b120d] dark:text-white px-4 py-2 rounded-lg text-sm font-bold shadow-md hover:bg-primary hover:text-white transition-all flex items-center gap-2">
                        Open in Maps <span className="material-symbols-outlined text-sm">open_in_new</span>
                      </button>
                    </div>
                  </div>

                  <p className="text-[#9a664c] dark:text-gray-300">
                    123 Artisan Way, Culinary City <br />
                    Valet parking available during dinner service.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Grid Section */}
          <div id="contact" className="px-4 lg:px-40 flex justify-center py-20">
            <div className="layout-content-container flex flex-col max-w-[1200px] flex-1">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                <div className="p-8 rounded-xl bg-white dark:bg-[#2d1e16] shadow-sm border border-[#f3ebe7] dark:border-[#3d2b23] flex flex-col items-center text-center gap-4">
                  <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined">call</span>
                  </div>
                  <h4 className="font-bold text-lg">Reservations</h4>
                  <p className="text-[#9a664c] dark:text-gray-400 text-sm">
                    For parties of 8 or more, please call us directly.
                  </p>
                  <a className="text-primary font-bold hover:underline" href="tel:+15551234567">
                    (555) 123-4567
                  </a>
                </div>

                <div className="p-8 rounded-xl bg-white dark:bg-[#2d1e16] shadow-sm border border-[#f3ebe7] dark:border-[#3d2b23] flex flex-col items-center text-center gap-4">
                  <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined">mail</span>
                  </div>
                  <h4 className="font-bold text-lg">Inquiries</h4>
                  <p className="text-[#9a664c] dark:text-gray-400 text-sm">
                    General questions, press, or private events.
                  </p>
                  <a className="text-primary font-bold hover:underline" href="mailto:hello@terracottabistro.com">
                    hello@terracottabistro.com
                  </a>
                </div>

                <div className="p-8 rounded-xl bg-white dark:bg-[#2d1e16] shadow-sm border border-[#f3ebe7] dark:border-[#3d2b23] flex flex-col items-center text-center gap-4">
                  <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined">share</span>
                  </div>
                  <h4 className="font-bold text-lg">Follow Us</h4>
                  <p className="text-[#9a664c] dark:text-gray-400 text-sm">
                    See today's menu highlights on social media.
                  </p>
                  <div className="flex gap-4">
                    <a className="text-primary hover:scale-110 transition-transform" href="#">
                      <span className="material-symbols-outlined">camera</span>
                    </a>
                    <a className="text-primary hover:scale-110 transition-transform" href="#">
                      <span className="material-symbols-outlined">social_leaderboard</span>
                    </a>
                    <a className="text-primary hover:scale-110 transition-transform" href="#">
                      <span className="material-symbols-outlined">alternate_email</span>
                    </a>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Footer Section */}
          <footer className="px-4 lg:px-40 flex justify-center py-10 border-t border-[#f3ebe7] dark:border-[#3d2b23]">
            <div className="layout-content-container flex flex-col max-w-[1200px] flex-1">
              <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex items-center gap-2 text-[#1b120d] dark:text-white/60 text-sm">
                  © 2026 The Terracotta Bistro. All rights reserved.
                </div>
                <div className="flex gap-8">
                  <a className="text-xs font-medium uppercase tracking-widest text-[#9a664c] hover:text-primary" href="#">
                    Privacy
                  </a>
                  <a className="text-xs font-medium uppercase tracking-widest text-[#9a664c] hover:text-primary" href="#">
                    Terms
                  </a>
                  <a className="text-xs font-medium uppercase tracking-widest text-[#9a664c] hover:text-primary" href="#">
                    Careers
                  </a>
                </div>
              </div>
            </div>
          </footer>

        </div>
      </div>
    </div>
  );
}