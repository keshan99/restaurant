export const API_BASE = import.meta.env.VITE_API_BASE ?? "http://localhost:4000";

export async function getMenu3Days(slug) {
  const r = await fetch(`${API_BASE}/api/${slug}/menu?days=3`);
  if (!r.ok) throw new Error("Failed to load menu");
  return r.json();
}

export async function getContact(slug) {
  const r = await fetch(`${API_BASE}/api/${slug}/contact`);
  if (!r.ok) throw new Error("Failed to load contact");
  return r.json();
}