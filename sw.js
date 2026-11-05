// Service worker: działanie offline po pierwszym wczytaniu aplikacji.
// Strategia: sieć najpierw, a w razie braku sieci — kopia z pamięci podręcznej. Nic nie wychodzi poza własny origin.
const CACHE = "reup-v0.4.0";

// Brak skipWaiting: nowa wersja czeka, aż użytkownik kliknie „Odśwież” (wiadomość skip-waiting z aplikacji).
self.addEventListener("install", (event) => { event.waitUntil(caches.open(CACHE)); });

self.addEventListener("activate", (event) => {
  event.waitUntil((async () => {
    for (const key of await caches.keys()) if ((key.startsWith("czytnik-epub-") || key.startsWith("reup-")) && key !== CACHE) await caches.delete(key);
    await self.clients.claim();
  })());
});

async function cacheUrls(urls) {
  const cache = await caches.open(CACHE);
  await Promise.all((urls || []).map(async (u) => {
    try {
      if (new URL(u).origin !== self.location.origin) return;
      const r = await fetch(u, { cache: "reload" });
      if (r.ok) await cache.put(u, r);
    } catch { /* brak sieci — pominięto */ }
  }));
}
self.addEventListener("message", (event) => {
  if (event.data?.type === "skip-waiting") self.skipWaiting();
  if (event.data?.type === "cache-urls") event.waitUntil(cacheUrls(event.data.urls)); });

self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.method !== "GET" || new URL(req.url).origin !== self.location.origin) return;
  event.respondWith((async () => {
    const cache = await caches.open(CACHE);
    try {
      const fresh = await fetch(req);
      if (fresh.ok && fresh.type === "basic") cache.put(req, fresh.clone());
      return fresh;
    } catch (err) {
      const hit = await cache.match(req, { ignoreSearch: req.mode === "navigate" });
      if (hit) return hit;
      if (req.mode === "navigate") { const shell = await cache.match(new URL("./", self.registration.scope).href) || await cache.match(new URL("./index.html", self.registration.scope).href); if (shell) return shell; }
      throw err;
    }
  })());
});
