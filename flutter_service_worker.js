'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "74b65abe6cd3af4c22adfd3fe940641c",
".git/config": "5181fefc51ca71c465b820e176a9b631",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "0ef26fe57bdd38d0b120f61733675298",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "0398ac274378155d3df4274a612d14f2",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "4eb1db8ff3e424075bb0e8b83d8a7f38",
".git/logs/refs/heads/master": "14540691f145284e6850195335c7faed",
".git/logs/refs/remotes/origin/master": "ddc05f28e4e710f8e0967275a59c619d",
".git/objects/0e/86c09cfd8ba80b5a431025db57092dcc94ba07": "5c468b7c4b93cc2854972ab5ee166f06",
".git/objects/39/17c28480ae42b2930ec24b35852c899458fc67": "f474d7d8b53d2ea70e05aff6c2dada0a",
".git/objects/42/94f625f22c64f35ef422abe3ee7f6ed71fdbf5": "a97b9b2f3137df48d0196802cf9baa0e",
".git/objects/48/017d6805460aa8b12bc9524b26969c01fe8692": "7da8e0bdf689d5e72df6536589bcb1d9",
".git/objects/4c/a57b22ef56758a611be7684bf24e4cb4de8e39": "768473f5a0d91d183c5e67b0ad100644",
".git/objects/6c/254663e0a4c8fa7f00ff5008b20b4a4df4aaa2": "1813e72e016e9242b7ea122b2c3769a4",
".git/objects/71/22e11e8762568daec2949406a56a7447e25325": "e883b6d39759cad1d31af423d3e18b10",
".git/objects/86/2db2d1662a8cb4d4fabb7ae06f1c84c15df697": "3e28546e6b6426e49109443b53283534",
".git/objects/a9/e060481effbe68fec923ae13c25928af0ba794": "bbb8be6e34d039b333e8b08732ca8bdd",
".git/objects/ae/198d474a45fdec79896ecea82115efa3daee04": "7bb055242da4924e37a5f363e2bb6f12",
".git/objects/db/9c521d0bc484af0e850c2705166390fb0335fb": "1fc3ef3a7b93b512fb943049f1aa1733",
".git/objects/dd/bb9cbf7af1797d9cbf4df34cc5a7e2c44f7f8c": "b4c1ee8a13ec39ed6c5b4cd5f06f3a04",
".git/objects/pack/pack-13a4b39a0234503f7b94237f6c3ca45b807faf58.idx": "67c8cf3380d45f9998b34735d9a4953c",
".git/objects/pack/pack-13a4b39a0234503f7b94237f6c3ca45b807faf58.pack": "a665bdea7cdd52e294673b025098e874",
".git/ORIG_HEAD": "2377f6fe33a07597a0ad1df3ea47b346",
".git/refs/heads/master": "1f109f460c24124a5c7df40c34aba831",
".git/refs/remotes/origin/master": "1f109f460c24124a5c7df40c34aba831",
"assets/AssetManifest.json": "e352ca545072df74c49656613bf0df75",
"assets/assets/fonts/Fredoka/Fredoka-Bold.ttf": "bd3841435b54caa47c83a755c25e0af3",
"assets/assets/fonts/Fredoka/Fredoka-Light.ttf": "2209472423dc97dcc3f82b2a3d6b409d",
"assets/assets/fonts/Fredoka/Fredoka-Medium.ttf": "e240f155ad03f2e4281539d4e258e15e",
"assets/assets/fonts/Fredoka/Fredoka-Regular.ttf": "27cfe680d2ef2ac2fd068b519cbe96fe",
"assets/assets/fonts/Fredoka/Fredoka-SemiBold.ttf": "4e1126227b7e14d307259d716abb2d68",
"assets/FontManifest.json": "392515d39b91f120b4df5ff297bdd2ff",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/NOTICES": "82db5f127e96e0553911c7b29f06590f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "417d465cb78f93ef10c5189889f4e73e",
"/": "390b9bbfd3c6ccaa56831af2eca70e91",
"main.dart.js": "6770dd6a1c30401b781212bb35e34375",
"manifest.json": "6be665e2f39fe57f7063ddede928ab22",
"SmartMirrorWebApplication/.git/config": "d215ba8d34d1bee6eae67c0e9d64837f",
"SmartMirrorWebApplication/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"SmartMirrorWebApplication/.git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
"SmartMirrorWebApplication/.git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"SmartMirrorWebApplication/.git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"SmartMirrorWebApplication/.git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
"SmartMirrorWebApplication/.git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"SmartMirrorWebApplication/.git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"SmartMirrorWebApplication/.git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
"SmartMirrorWebApplication/.git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
"SmartMirrorWebApplication/.git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
"SmartMirrorWebApplication/.git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
"SmartMirrorWebApplication/.git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
"SmartMirrorWebApplication/.git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
"SmartMirrorWebApplication/.git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
"SmartMirrorWebApplication/.git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
"SmartMirrorWebApplication/.git/index": "c2ebb9549c20431611fcacac208560f1",
"SmartMirrorWebApplication/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"SmartMirrorWebApplication/.git/logs/HEAD": "f56015793c9f3addbb37a3d5ecf10b10",
"SmartMirrorWebApplication/.git/logs/refs/heads/master": "f56015793c9f3addbb37a3d5ecf10b10",
"SmartMirrorWebApplication/.git/logs/refs/remotes/origin/HEAD": "f56015793c9f3addbb37a3d5ecf10b10",
"SmartMirrorWebApplication/.git/objects/pack/pack-13a4b39a0234503f7b94237f6c3ca45b807faf58.idx": "67c8cf3380d45f9998b34735d9a4953c",
"SmartMirrorWebApplication/.git/objects/pack/pack-13a4b39a0234503f7b94237f6c3ca45b807faf58.pack": "a665bdea7cdd52e294673b025098e874",
"SmartMirrorWebApplication/.git/packed-refs": "1b4b34aa15d0df3497e746ba9d345752",
"SmartMirrorWebApplication/.git/refs/heads/master": "aa6057371dce7135b957361fe79a1d4e",
"SmartMirrorWebApplication/.git/refs/remotes/origin/HEAD": "73a00957034783b7b5c8294c54cd3e12",
"SmartMirrorWebApplication/assets/AssetManifest.json": "e352ca545072df74c49656613bf0df75",
"SmartMirrorWebApplication/assets/assets/fonts/Fredoka/Fredoka-Bold.ttf": "bd3841435b54caa47c83a755c25e0af3",
"SmartMirrorWebApplication/assets/assets/fonts/Fredoka/Fredoka-Light.ttf": "2209472423dc97dcc3f82b2a3d6b409d",
"SmartMirrorWebApplication/assets/assets/fonts/Fredoka/Fredoka-Medium.ttf": "e240f155ad03f2e4281539d4e258e15e",
"SmartMirrorWebApplication/assets/assets/fonts/Fredoka/Fredoka-Regular.ttf": "27cfe680d2ef2ac2fd068b519cbe96fe",
"SmartMirrorWebApplication/assets/assets/fonts/Fredoka/Fredoka-SemiBold.ttf": "4e1126227b7e14d307259d716abb2d68",
"SmartMirrorWebApplication/assets/FontManifest.json": "392515d39b91f120b4df5ff297bdd2ff",
"SmartMirrorWebApplication/assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"SmartMirrorWebApplication/assets/NOTICES": "957c15cb9b1f3f3d42cee187996c024b",
"SmartMirrorWebApplication/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"SmartMirrorWebApplication/canvaskit/canvaskit.js": "3725a0811e16affbef87d783520e61d4",
"SmartMirrorWebApplication/canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"SmartMirrorWebApplication/canvaskit/profiling/canvaskit.js": "491df729e7b715d86fc167feabea031a",
"SmartMirrorWebApplication/canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"SmartMirrorWebApplication/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"SmartMirrorWebApplication/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"SmartMirrorWebApplication/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"SmartMirrorWebApplication/icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"SmartMirrorWebApplication/icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"SmartMirrorWebApplication/index.html": "390b9bbfd3c6ccaa56831af2eca70e91",
"SmartMirrorWebApplication/main.dart.js": "37ecd327a25c0de8fe5aae87e26e0b07",
"SmartMirrorWebApplication/manifest.json": "6be665e2f39fe57f7063ddede928ab22",
"SmartMirrorWebApplication/version.json": "2af18a8928c430b44281b53434072339",
"version.json": "2af18a8928c430b44281b53434072339"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
