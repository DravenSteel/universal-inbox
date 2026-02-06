self.addEventListener('fetch', function(event) {
  // Pass through all requests
  event.respondWith(fetch(event.request));
});
