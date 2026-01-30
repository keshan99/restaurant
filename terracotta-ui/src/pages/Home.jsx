import React, { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getContact, getMenu3Days } from "../lib/api.js";
import ReservationModal from "../ui/ReservationModal.jsx";
import MenuSection from "../ui/MenuSection.jsx";

function formatTabLabel(dateKey, index) {
  // dateKey = "YYYY-MM-DD"
  const d = new Date(`${dateKey}T00:00:00`);
  const weekday = d.toLocaleDateString("en-US", { weekday: "long" });
  const monthDay = d.toLocaleDateString("en-US", { month: "short", day: "numeric" });

  if (index === 0) return `Today, ${monthDay}`;
  if (index === 1) return `Tomorrow, ${monthDay}`;
  return `${weekday}, ${monthDay}`;
}

export default function Home() {
  const { slug } = useParams();
  const [data, setData] = useState(null);
  const [contact, setContact] = useState(null);
  const [activeDateKey, setActiveDateKey] = useState(null);
  const [reserveOpen, setReserveOpen] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!slug) return;
    
    (async () => {
      // Load menu
      try {
        const menuPayload = await getMenu3Days(slug);
        setData(menuPayload);
        setActiveDateKey(menuPayload?.menus?.[0]?.date ?? null);
      } catch (e) {
        setError(e?.message ?? "Something went wrong loading the menu");
      }

      // Load contact info independently (non-critical)
      try {
        const contactPayload = await getContact(slug);
        setContact(contactPayload);
      } catch (e) {
        console.warn("Failed to load contact info", e);
      }
    })();
  }, [slug]);

  const menusByDate = useMemo(() => {
    const m = new Map();
    (data?.menus ?? []).forEach(dayMenu => m.set(dayMenu.date, dayMenu));
    return m;
  }, [data]);

  const activeMenu = activeDateKey ? menusByDate.get(activeDateKey) : null;

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark text-charcoal dark:text-white">
      {/* Top Nav */}
      <header className="border-b border-solid border-[#f3ebe7] dark:border-[#3d2b21] bg-background-light dark:bg-background-dark">
        <div className="max-w-[1200px] mx-auto px-6 py-4 flex items-center justify-between whitespace-nowrap">
          <div className="flex items-center gap-3">
            <div className="size-8 text-primary">
              <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M42.4379 44C42.4379 44 36.0744 33.9038 41.1692 24C46.8624 12.9336 42.2078 4 42.2078 4L7.01134 4C7.01134 4 11.6577 12.932 5.96912 23.9969C0.876273 33.9029 7.27094 44 7.27094 44L42.4379 44Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <h2 className="text-xl font-black tracking-tight">{contact?.restaurantName ?? "Loading..."}</h2>
          </div>

          <nav className="hidden md:flex flex-1 justify-center gap-10">
            <a className="text-sm font-semibold hover:text-primary transition-colors" href="#menu">
              Menu
            </a>
            <Link className="text-sm font-semibold hover:text-primary transition-colors" to="/about">
              Our Story
            </Link>
            <a className="text-sm font-semibold hover:text-primary transition-colors" href="#footer">
              Location
            </a>
          </nav>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setReserveOpen(true)}
              className="flex min-w-[100px] items-center justify-center rounded-lg h-10 px-5 bg-primary text-white text-sm font-bold tracking-wide hover:opacity-90 transition-opacity"
            >
              Contact
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-[1200px] mx-auto px-6 py-8">
        {error ? (
          <div className="p-4 rounded-lg bg-white dark:bg-white/5 border border-primary/20">
            <p className="font-bold">Couldn’t load menu</p>
            <p className="text-sm text-muted-brown dark:text-white/60">{error}</p>
          </div>
        ) : null}

        {/* Hero */}
        <section className="mb-12">
          <div className="@container">
            <div
              className="relative min-h-[520px] flex flex-col justify-end p-8 md:p-16 rounded-xl overflow-hidden shadow-2xl"
              style={{
                backgroundImage:
                  'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.2) 60%, rgba(0,0,0,0) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuAlBbwpaWgWF3fOhSySbLUAxRkpwl3ICVg6KAdXxeJh2O3j40Mc6-KvV6LDtbxperitJCPbA8w1ypRATpxW105onTS8wvFRrzsYnTVHHGTV7fFciJQ534PG8wK0WM_eUmXAdmhd83-D2RzoC_NCVxIkdFYmlhj30n7EjNBFZD6BKXRlCkCyqvM6IMzk-AwYgnrzS3XbnhW-KXugnK2GZD__D4ID2D7dPNmvpg0bJa95gqE6r8LT4xeDkXjL6OKzwSwdT6yR33qTBu2g")',
                backgroundSize: "cover",
                backgroundPosition: "center"
              }}
            >
              <div className="max-w-2xl">
                <span className="inline-block px-3 py-1 bg-primary text-white text-[10px] font-bold uppercase tracking-widest rounded mb-4">
                  {activeMenu?.highlight?.badge ?? "Chef's Selection"}
                </span>
                <h1 className="text-white text-4xl md:text-6xl font-black leading-tight tracking-tighter mb-4">
                  {activeMenu?.highlight?.title ?? "Today's Highlight"}
                </h1>
                <p className="text-white/90 text-lg md:text-xl font-light leading-relaxed mb-8">
                  {activeMenu?.highlight?.description ??
                    "Daily-changing menu featuring seasonal ingredients."}
                </p>

                <div className="flex flex-wrap gap-4">
                  <button
                    onClick={() => setReserveOpen(true)}
                    className="bg-primary text-white px-8 py-4 rounded-lg font-bold text-base hover:bg-opacity-90 transition-all flex items-center gap-2"
                  >
                    Reserve a Table <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </button>
                  <a
                    href="#menu"
                    className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-lg font-bold text-base hover:bg-white/20 transition-all"
                  >
                    View Full Menu
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sticky Tabs */}
        <div className="sticky-tabs mb-8 border-b border-[#e7d7cf] dark:border-[#3d2b21] bg-background-light/90 dark:bg-background-dark/90">
          <div className="flex justify-center gap-4 md:gap-12">
            {(data?.menus ?? []).map((m, idx) => {
              const active = m.date === activeDateKey;
              return (
                <button
                  key={m.date}
                  onClick={() => setActiveDateKey(m.date)}
                  className={[
                    "flex flex-col items-center justify-center pb-4 pt-4 px-2 border-b-[3px] transition-colors",
                    active
                      ? "border-primary text-charcoal dark:text-white"
                      : "border-transparent text-muted-brown dark:text-white/50 hover:text-primary"
                  ].join(" ")}
                >
                  <p className="text-sm font-bold tracking-wide">{formatTabLabel(m.date, idx)}</p>
                </button>
              );
            })}
          </div>
        </div>

        {/* Menu */}
        <section id="menu">
          {(activeMenu?.sections ?? []).map(section => (
            <MenuSection key={section.id} section={section} />
          ))}
        </section>

        {/* Updated footer note */}
        <div className="mt-16 mb-8 text-center">
          <p className="text-muted-brown dark:text-white/30 text-xs font-medium uppercase tracking-[0.2em]">
            Updated {activeMenu ? `on ${activeMenu.date} at ${activeMenu.updatedAt}` : "today"}
          </p>
        </div>
      </main>

      {/* Sticky Reserve Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <button
          onClick={() => setReserveOpen(true)}
          className="flex items-center gap-3 bg-primary text-white px-6 py-4 rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-all group"
        >
          <span className="material-symbols-outlined font-bold">calendar_month</span>
          <span className="font-bold tracking-wide">Reserve Now</span>
        </button>
      </div>

      {/* Footer */}
      <footer id="footer" className="bg-white dark:bg-black/20 py-12 px-6 border-t border-[#f3ebe7] dark:border-[#3d2b21]">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="size-6 text-primary">
                <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M42.4379 44C42.4379 44 36.0744 33.9038 41.1692 24C46.8624 12.9336 42.2078 4 42.2078 4L7.01134 4C7.01134 4 11.6577 12.932 5.96912 23.9969C0.876273 33.9029 7.27094 44 7.27094 44L42.4379 44Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <h3 className="font-black text-lg">{contact?.restaurantName ?? "Restaurant"}</h3>
            </div>
            <p className="text-muted-brown dark:text-white/50 text-sm max-w-sm">
              Exquisite dining meets everyday comfort. Our menu changes with the seasons and the local harvest.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-sm mb-4 uppercase tracking-widest text-primary">Explore</h4>
            <ul className="space-y-2 text-sm text-muted-brown dark:text-white/60">
              <li><a className="hover:text-primary transition-colors" href="#menu">Daily Specials</a></li>
              <li><Link className="hover:text-primary transition-colors" to="/about">Our Story</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm mb-4 uppercase tracking-widest text-primary">Contact</h4>
            <ul className="space-y-2 text-sm text-muted-brown dark:text-white/60">
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-base">location_on</span>
                123 Artisan Way, Culinary City
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-base">phone</span>
                {contact?.phoneDisplay ?? "(555) 123-4567"}
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-base">mail</span>
                hello@terracottabistro.com
              </li>
            </ul>
          </div>
        </div>
      </footer>

      <ReservationModal
        open={reserveOpen}
        onClose={() => setReserveOpen(false)}
        contact={contact}
      />
    </div>
  );
}