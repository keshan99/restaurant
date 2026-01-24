import React, { useEffect } from "react";

export default function ReservationModal({ open, onClose, contact }) {
  useEffect(() => {
    function onEsc(e) {
      if (e.key === "Escape") onClose?.();
    }
    if (open) window.addEventListener("keydown", onEsc);
    return () => window.removeEventListener("keydown", onEsc);
  }, [open, onClose]);

  if (!open) return null;

  const phoneDisplay = contact?.phoneDisplay ?? "(555) 123-4567";
  const phoneTel = contact?.phoneTel ?? "+15551234567";

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center px-4">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div className="relative w-full max-w-md rounded-xl bg-white dark:bg-[#2d1e16] p-6 shadow-2xl border border-primary/20">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-xl font-black">Reservations</h3>
            <p className="text-sm text-muted-brown dark:text-white/60 mt-1">
              Call to book your table.
            </p>
          </div>
          <button
            className="rounded-lg px-2 py-1 hover:bg-black/5 dark:hover:bg-white/10"
            onClick={onClose}
            aria-label="Close"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        <div className="mt-6 rounded-lg bg-background-light dark:bg-white/5 p-4">
          <p className="text-sm font-bold mb-2">Phone</p>
          <a
            className="text-primary font-black text-lg hover:underline"
            href={`tel:${phoneTel}`}
          >
            {phoneDisplay}
          </a>
        </div>

        <div className="mt-6 flex gap-3 justify-end">
          <button
            onClick={onClose}
            className="rounded-lg px-4 py-2 font-bold border border-[#e7d7cf] dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/10"
          >
            Close
          </button>
          <a
            href={`tel:${phoneTel}`}
            className="rounded-lg px-4 py-2 font-bold bg-primary text-white hover:opacity-90"
          >
            Call Now
          </a>
        </div>
      </div>
    </div>
  );
}