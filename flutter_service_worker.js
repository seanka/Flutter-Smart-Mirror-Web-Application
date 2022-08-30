'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "395e59a43c880e132aa30daa3a20fc41",
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
".git/index": "94480b91d1822792aa3c69c5904d51d5",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "e8387f889e6de02c788117cae6219724",
".git/logs/refs/heads/master": "b6416c80ad5ca72c2199aa5c0a349cc7",
".git/logs/refs/remotes/origin/master": "749f05be4c3720635cc323e227ce05e6",
".git/objects/0e/86c09cfd8ba80b5a431025db57092dcc94ba07": "5c468b7c4b93cc2854972ab5ee166f06",
".git/objects/11/345ac7ae8845af916f5f76f6f568c89eee3041": "231de189fd3979ea8bca910b6d8a3112",
".git/objects/1f/56a743465ae4b8321fda726521dd86c79f69e2": "25900a6d8a8e68e927c906c78af6ae12",
".git/objects/29/2214367c0af9a2eee8f873b2944224e2fe3f0c": "902d6cf3d5ea70392a74bfc9ded583bb",
".git/objects/29/a49e99f30d8d8b2e0a275b6cecb347117230dd": "5cf224f3789fa037c525d3e4d64fde64",
".git/objects/39/17c28480ae42b2930ec24b35852c899458fc67": "f474d7d8b53d2ea70e05aff6c2dada0a",
".git/objects/3c/01cb712268ced48b96f8fb7f7b7da721d3965e": "790c7eca8d68f53f03c3b436266d53d4",
".git/objects/3f/0e880c1f29b98810b70fbbab8faebd6d2628b4": "4e7297ef3822c3a7f23369ba6b222523",
".git/objects/41/1f9464e2c446f8ca5589a27872d1b781b49a56": "5ef2a5c168482ebf53c2a4e5d24e317a",
".git/objects/42/94f625f22c64f35ef422abe3ee7f6ed71fdbf5": "a97b9b2f3137df48d0196802cf9baa0e",
".git/objects/48/017d6805460aa8b12bc9524b26969c01fe8692": "7da8e0bdf689d5e72df6536589bcb1d9",
".git/objects/4c/a57b22ef56758a611be7684bf24e4cb4de8e39": "768473f5a0d91d183c5e67b0ad100644",
".git/objects/4f/1e1fe67757378b2f3968e6c7ddb368389c5c2c": "ae7614693ae5d7b8095c2c2437991f8e",
".git/objects/55/58db003b338994e18c6e786eb19cbefe3826c8": "858ead73f970914f2aa3cab1ddc75b37",
".git/objects/56/50e2871e81d05246a58be93dfb3027739cdc14": "10a248dca29b0bacd6a066775b516ad5",
".git/objects/57/0c163a0879ad9fd474fe5858a4496f5a5bc54b": "940ffd867614f764ae0e868d33ea36b0",
".git/objects/5a/cba121ffa9fa8dbaa32a400acea86354881b0d": "0a66b6267256d21d09dde4238087f08e",
".git/objects/5d/4cc12815efb4d4829618dca405627608ac5416": "de82e613fde610089f3fca6b4172715f",
".git/objects/61/e6e952aa58890a1d45bad7fdba60d6f10ca88f": "4c42a3618055283ca6af8e607b8e68f9",
".git/objects/6c/254663e0a4c8fa7f00ff5008b20b4a4df4aaa2": "1813e72e016e9242b7ea122b2c3769a4",
".git/objects/71/22e11e8762568daec2949406a56a7447e25325": "e883b6d39759cad1d31af423d3e18b10",
".git/objects/72/6d549fe43e284a7e268a6213958c8083a2aa74": "dbe321224ac89e4764a2cfaa25776915",
".git/objects/74/997da9eafcf5780a499285b0af54310ba6cdee": "a7cd85e7a1b22087ffa53b763f3a39b4",
".git/objects/74/d7aedc0c30b18af363791b3e1e1c153a31b30e": "edec199ddad88625b0e358852e58a2ed",
".git/objects/81/a64782081c360ff3f2b85ecb2dd0e8f758ce3f": "31a292114646edfd97cad01a7f51c43b",
".git/objects/83/3c2339ca53a2ee7060daa7c3c2ce9072d5902b": "936b3881c207fd29f43599ffcc4ace67",
".git/objects/86/2db2d1662a8cb4d4fabb7ae06f1c84c15df697": "3e28546e6b6426e49109443b53283534",
".git/objects/90/2794e2616ea1bc5d60a4680f6ce12c1d7648df": "41067944a1a7e184b205a21ac96a0c7d",
".git/objects/90/ed8df9b04a13bfcf079e391fed4a4f021691ba": "0e8f78c49ae1aa0d248567f52e4e82bd",
".git/objects/94/ac760372b99b04eaa637839dc19e08c6086376": "95ecd1d70afad506073bf11dac30eaa9",
".git/objects/96/38c8a0cb852191560edf641fb60e4c0458b027": "f87ba53fceac998d685fa0bf5dc36356",
".git/objects/97/a35a889ad99324ef2b631d3d774805365c9571": "482d862495b111dea6b6114c343f4fb0",
".git/objects/9f/c77bc65cd28693d3f97337cc17fe637ee421fb": "71a456db2b1540b25fcae283d95a65a3",
".git/objects/a3/1aeff8a82c1373a52834adf5d5d611641cdeb8": "ee29a8b36ac8660bef7a382fcaea7827",
".git/objects/a9/e060481effbe68fec923ae13c25928af0ba794": "bbb8be6e34d039b333e8b08732ca8bdd",
".git/objects/aa/0915684b6a1348a698c882c35b715d93167ff5": "8087335a8942d076afb74abe70075a89",
".git/objects/ae/198d474a45fdec79896ecea82115efa3daee04": "7bb055242da4924e37a5f363e2bb6f12",
".git/objects/ae/487bfc113054e77840929ab95f818329b40794": "df996948433949d75d778852c26bbaf5",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/d8/1eefe45ffd7ae7122fb99bb034e88242df2c29": "3e89bbdcbf2f6c39b5bba15914877173",
".git/objects/db/9c521d0bc484af0e850c2705166390fb0335fb": "1fc3ef3a7b93b512fb943049f1aa1733",
".git/objects/dd/bb9cbf7af1797d9cbf4df34cc5a7e2c44f7f8c": "b4c1ee8a13ec39ed6c5b4cd5f06f3a04",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/ea/226932b721635f08411a133812073d844f9631": "5c7738a7d0a51e0339d26b2985c5ae9e",
".git/objects/ed/50cb5723ab1046752fc1823dd78109a4bf77d0": "e3743e6dd83e40eb1e88d6c26e1f9b7e",
".git/objects/f4/4fe870dec26d9938ca2c701d67a87c043dc7a2": "ccc7cb389ef59d1f336fe83b26f46ee2",
".git/objects/fc/d1235a3764b9615fc63161195ec6776257ce15": "01260b97ac4b3d3f50abe3af41586724",
".git/objects/pack/pack-13a4b39a0234503f7b94237f6c3ca45b807faf58.idx": "67c8cf3380d45f9998b34735d9a4953c",
".git/objects/pack/pack-13a4b39a0234503f7b94237f6c3ca45b807faf58.pack": "a665bdea7cdd52e294673b025098e874",
".git/ORIG_HEAD": "2377f6fe33a07597a0ad1df3ea47b346",
".git/refs/heads/master": "c39fa9988296ded4777a3ff189a7f512",
".git/refs/remotes/origin/master": "c39fa9988296ded4777a3ff189a7f512",
"assets/AssetManifest.json": "e352ca545072df74c49656613bf0df75",
"assets/assets/fonts/Fredoka/Fredoka-Bold.ttf": "bd3841435b54caa47c83a755c25e0af3",
"assets/assets/fonts/Fredoka/Fredoka-Light.ttf": "2209472423dc97dcc3f82b2a3d6b409d",
"assets/assets/fonts/Fredoka/Fredoka-Medium.ttf": "e240f155ad03f2e4281539d4e258e15e",
"assets/assets/fonts/Fredoka/Fredoka-Regular.ttf": "27cfe680d2ef2ac2fd068b519cbe96fe",
"assets/assets/fonts/Fredoka/Fredoka-SemiBold.ttf": "4e1126227b7e14d307259d716abb2d68",
"assets/FontManifest.json": "392515d39b91f120b4df5ff297bdd2ff",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "519d1d909fddc6ab63f1303c30ccc94c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "46c8cb883485e81b4ab3b1daba7a9e40",
"/": "46c8cb883485e81b4ab3b1daba7a9e40",
"main.dart.js": "366d740bcb200815256c3982efd08ee1",
"manifest.json": "6be665e2f39fe57f7063ddede928ab22",
"version.json": "2af18a8928c430b44281b53434072339"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
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
