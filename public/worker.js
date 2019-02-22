console.log('Loaded service worker!');

self.addEventListener('push', ev => {
  const data = ev.data.json();
  console.log('Got push', data);
  self.registration.showNotification(data.title, {
    body: 'Hello, World!',
    icon: 'https://cdn.glitch.com/aedd9ff5-c375-41c7-9af0-c62ca2f8fd7c%2Feddies_192.png?1550842715863'
  });
});
