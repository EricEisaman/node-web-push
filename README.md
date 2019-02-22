# web-push-demo
"Hello, World" with web push in Node.js

## Remix then:

Generate VAPID keys in **Console**
```
./node_modules/.bin/web-push generate-vapid-keys
```
Edit **.env**
```
PUBLIC_VAPID_KEY=YourPublicVAPIDKey
PRIVATE_VAPID_KEY=YourPrivateVAPIDKey
```

Edit **public/client.js
```
const publicVapidKey = YOUR PUBLIC VAPID KEY
```

<a href="https://thecodebarbarian.com/sending-web-push-notifications-from-node-js.html" target="_blank" rel="noreferrer">Article</a>
