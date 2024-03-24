'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "37f310597c014ec8de25b83634d3310b",
"assets/AssetManifest.bin.json": "bb47e5d699264b7a1c43438213f63be8",
"assets/AssetManifest.json": "94e57763827577881f2b98e67b1ab889",
"assets/assets/logo.png": "1c879c2e3177f5664b129fbdd85eac9a",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "042e8417ae1bd1fb05aabbcf75da6e9d",
"assets/images/ActivityDark.json": "aea52087096b05e3d76ef09962647c3e",
"assets/images/ActivityLight.json": "3e65dfac9d9610f82f8babb5823be2c7",
"assets/images/animation_llaqxoo9.json": "175125292f0929fdfa91a9c024443039",
"assets/images/animation_llaraohg.json": "851e9c7f2dbb612e9e4b44ce55b27d08",
"assets/images/animation_llarhei5.json": "ca438053354e9fc90be343f5d2a956f6",
"assets/images/ChatDark.json": "1d7f8af0e94d11396b0164a0f031d76d",
"assets/images/ChatDark0.json": "c614ef93c46eba341a02ad167f4bd0e8",
"assets/images/ChatLight.json": "7ef5073c26c32ffc1aacc82e1c57eabd",
"assets/images/ChatLight0.json": "04601f4274d275d7672cce96fbceefc0",
"assets/images/hart.json": "8fc5636766e5593bce201ce1de79b57b",
"assets/images/HomeDark.json": "76a4e9920299aed6cead0d13f306105d",
"assets/images/HomeLight.json": "3e799f73586eb9b4c54d23c98bbfbf10",
"assets/images/image%2520(1).jpg": "d3c7cf2d9dc6c944f511cc6297d25f0a",
"assets/images/image%2520(1).png": "391a5042ca3af7f05558580b8ea2e454",
"assets/images/image%2520(2).png": "9fcef8d647ef5e466f711ae75d6a7019",
"assets/images/LoginDark.json": "ee28466c556f4d21b25423f0c0836d37",
"assets/images/LoginLight.json": "e956d56ee34673edcc435891618c4b87",
"assets/images/logo.svg": "fedca68393c22444489d5adc66bf0d5c",
"assets/images/luncher.jpg": "1908b0135acdea8f6f5226f00aea8d91",
"assets/images/NotificationsDark.json": "b9b8a10564d126f47dc71f1f3284f259",
"assets/images/NotificationsLight.json": "47552b6a6938bc634eb3f1d61d85df93",
"assets/images/SearchDark.json": "0048091578d423f66fdaf1ac4289990e",
"assets/images/SearchDark1.json": "6f01cdd25c8bc4f605b5a0c728ced8dd",
"assets/images/SearchLight.json": "921d7e539b359f12a522da1a6339cdd1",
"assets/images/SearchLight1.json": "fe66302478b01b00ec1f2bd106daa984",
"assets/images/tipying.json": "1c00a69830c3b302f2a78083430d93de",
"assets/NOTICES": "8e7c6f3cf50cc3f4d2bd289c7b89c377",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/multi_image_picker_view/assets/close-48.png": "477613265893447bc3d72ec5797ed926",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "7737f5fc722b6a040ac15271ea8d92fb",
"canvaskit/canvaskit.js.symbols": "a57cb5bc2a236b3dbea95ca352ce2886",
"canvaskit/canvaskit.wasm": "c1f3621bd20ff37fadc4d567053ce31e",
"canvaskit/chromium/canvaskit.js": "2f82009588e8a72043db753d360d488f",
"canvaskit/chromium/canvaskit.js.symbols": "5f24b3432975965413b70236815b661a",
"canvaskit/chromium/canvaskit.wasm": "e7af259c2f947e9c62f8bf51746da1cb",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "da42be4d242dc55d0b9bbf131d625c20",
"canvaskit/skwasm.wasm": "412df10f3d99c622178b0b18a7649b15",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "4c0937a541a62127e2200d366330c157",
"flutter.js": "4af2b91eb221b73845365e1302528f07",
"icons/Icon-192.png": "b1a55ccdca5e02ebf4448fd20b8953b0",
"icons/Icon-512.png": "06e37e987530ae3d8c815ceb867ba2e8",
"icons/Icon-maskable-192.png": "b1a55ccdca5e02ebf4448fd20b8953b0",
"icons/Icon-maskable-512.png": "06e37e987530ae3d8c815ceb867ba2e8",
"index.html": "70259cee98c89e6f8b1ef6a010c4222c",
"/": "70259cee98c89e6f8b1ef6a010c4222c",
"main.dart.js": "406f2b954ad33f339a6f62c99761b344",
"manifest.json": "c5fa18e14f35d571afba04c638c76b4e",
"splash/img/dark-1x.png": "4f1ee0b690e3cd18f1dc359d4488b485",
"splash/img/dark-2x.png": "bb6de08370d01db50121df86cb7832ff",
"splash/img/dark-3x.png": "003fc4558a0122589c98d9f106fda730",
"splash/img/dark-4x.png": "fa8d43b8666b7824165bcf9975cc8e98",
"splash/img/light-1x.png": "4f1ee0b690e3cd18f1dc359d4488b485",
"splash/img/light-2x.png": "bb6de08370d01db50121df86cb7832ff",
"splash/img/light-3x.png": "003fc4558a0122589c98d9f106fda730",
"splash/img/light-4x.png": "fa8d43b8666b7824165bcf9975cc8e98",
"version.json": "caa48475b17455f38d817857ce9133a6"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
