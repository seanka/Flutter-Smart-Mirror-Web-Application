'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "e1ee6d14939a73e38ed715168c284d71",
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
".git/index": "704b061e7c51aebebe739167213656d5",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "820ed577d5b2b516d229bb484f87385d",
".git/logs/refs/heads/master": "952e203fd761120e065032e48205a442",
".git/logs/refs/remotes/origin/master": "3fcf4aa8af2d4eca47359570d4da7248",
".git/objects/02/930fd9bad2c6486168c81aaf386fa370a6910a": "78b5d1a1c6dbafd65a3af67dd269f3ac",
".git/objects/06/e5cc67ec996c7cc684188ae092a541909afad3": "ec6623ab0833b8b29ca92ff2e92c5133",
".git/objects/0e/86c09cfd8ba80b5a431025db57092dcc94ba07": "5c468b7c4b93cc2854972ab5ee166f06",
".git/objects/11/345ac7ae8845af916f5f76f6f568c89eee3041": "231de189fd3979ea8bca910b6d8a3112",
".git/objects/11/e5d611fc9ab3650bb4845010844734ae6e6955": "f75e759fc535ef95ad519fb6f025a06c",
".git/objects/1b/1d8802aa018d104dd3e4b287b373607d776cbb": "c493dbb395ecb7bfccf682427932d929",
".git/objects/1f/56a743465ae4b8321fda726521dd86c79f69e2": "25900a6d8a8e68e927c906c78af6ae12",
".git/objects/29/2214367c0af9a2eee8f873b2944224e2fe3f0c": "902d6cf3d5ea70392a74bfc9ded583bb",
".git/objects/29/6bcca59afc369852e424f8bfdf86d16edc2f65": "1e87acf109341e13da0fcff0434c94a0",
".git/objects/29/a49e99f30d8d8b2e0a275b6cecb347117230dd": "5cf224f3789fa037c525d3e4d64fde64",
".git/objects/2a/471ef1349fb052a2559101141df0405faa28f5": "003d8967d3f0ca0774338db59e915d14",
".git/objects/2b/6b6e0d1a03d5627b99e7dfe0fb01bf86fe68ff": "a31f2855e2daf1e9023755f68c5f850a",
".git/objects/39/17c28480ae42b2930ec24b35852c899458fc67": "f474d7d8b53d2ea70e05aff6c2dada0a",
".git/objects/3a/e7aa8d8869305410bce2ba286d870e910f98ce": "6a8fc7e4db1edf2fb7086824d569a6d5",
".git/objects/3c/01cb712268ced48b96f8fb7f7b7da721d3965e": "790c7eca8d68f53f03c3b436266d53d4",
".git/objects/3f/0e880c1f29b98810b70fbbab8faebd6d2628b4": "4e7297ef3822c3a7f23369ba6b222523",
".git/objects/3f/b3d377d578c56673d985eba3c5cf0c69e099f9": "b93e282506302719918851644dda8d0f",
".git/objects/41/1f9464e2c446f8ca5589a27872d1b781b49a56": "5ef2a5c168482ebf53c2a4e5d24e317a",
".git/objects/42/94f625f22c64f35ef422abe3ee7f6ed71fdbf5": "a97b9b2f3137df48d0196802cf9baa0e",
".git/objects/47/c4d036f5476adea5c4dda71302e6bc9dfacbb7": "bed9fce09cbf110699d1ae17051b61d7",
".git/objects/48/017d6805460aa8b12bc9524b26969c01fe8692": "7da8e0bdf689d5e72df6536589bcb1d9",
".git/objects/4c/a57b22ef56758a611be7684bf24e4cb4de8e39": "768473f5a0d91d183c5e67b0ad100644",
".git/objects/4f/1e1fe67757378b2f3968e6c7ddb368389c5c2c": "ae7614693ae5d7b8095c2c2437991f8e",
".git/objects/55/58db003b338994e18c6e786eb19cbefe3826c8": "858ead73f970914f2aa3cab1ddc75b37",
".git/objects/56/50e2871e81d05246a58be93dfb3027739cdc14": "10a248dca29b0bacd6a066775b516ad5",
".git/objects/57/0c163a0879ad9fd474fe5858a4496f5a5bc54b": "940ffd867614f764ae0e868d33ea36b0",
".git/objects/5a/cba121ffa9fa8dbaa32a400acea86354881b0d": "0a66b6267256d21d09dde4238087f08e",
".git/objects/5d/4cc12815efb4d4829618dca405627608ac5416": "de82e613fde610089f3fca6b4172715f",
".git/objects/61/e6e952aa58890a1d45bad7fdba60d6f10ca88f": "4c42a3618055283ca6af8e607b8e68f9",
".git/objects/66/ee9455ec0e58046c6478dc0fe226378712ea6e": "e041ed34c6a3dc75d196a680c1791da8",
".git/objects/6c/254663e0a4c8fa7f00ff5008b20b4a4df4aaa2": "1813e72e016e9242b7ea122b2c3769a4",
".git/objects/6e/72decd0030608dac197fefcc12b427faa13ed5": "904e0c4f064199247afc9d0bc4053e81",
".git/objects/71/22e11e8762568daec2949406a56a7447e25325": "e883b6d39759cad1d31af423d3e18b10",
".git/objects/71/a594a36445b8ef803374e6fb238a36e9a65f55": "224eb49ca80f49320a3f72bca0c1a918",
".git/objects/72/6d549fe43e284a7e268a6213958c8083a2aa74": "dbe321224ac89e4764a2cfaa25776915",
".git/objects/72/c2251700d7e38bc628dfeed368a01e0b2c3111": "2c4e79a695ddc29047c79efe95ce7345",
".git/objects/74/997da9eafcf5780a499285b0af54310ba6cdee": "a7cd85e7a1b22087ffa53b763f3a39b4",
".git/objects/74/d7aedc0c30b18af363791b3e1e1c153a31b30e": "edec199ddad88625b0e358852e58a2ed",
".git/objects/7f/4706c536e434e570ffe78bed38e1ad72f8bd47": "738f555b095a5e9bdc7f6d81ce039c14",
".git/objects/81/a64782081c360ff3f2b85ecb2dd0e8f758ce3f": "31a292114646edfd97cad01a7f51c43b",
".git/objects/83/3c2339ca53a2ee7060daa7c3c2ce9072d5902b": "936b3881c207fd29f43599ffcc4ace67",
".git/objects/83/da2c5679481803f44a70df8d55790bbfb46033": "dde08737048d17a2a54b16ea5cd2ac7e",
".git/objects/86/2db2d1662a8cb4d4fabb7ae06f1c84c15df697": "3e28546e6b6426e49109443b53283534",
".git/objects/8a/aedb269fabab4b6534f7b8b28bf32b0f2bf9cb": "0e5c94f1c3d90ce29b2a41373e0032f6",
".git/objects/90/2794e2616ea1bc5d60a4680f6ce12c1d7648df": "41067944a1a7e184b205a21ac96a0c7d",
".git/objects/90/ed8df9b04a13bfcf079e391fed4a4f021691ba": "0e8f78c49ae1aa0d248567f52e4e82bd",
".git/objects/94/ac760372b99b04eaa637839dc19e08c6086376": "95ecd1d70afad506073bf11dac30eaa9",
".git/objects/96/38c8a0cb852191560edf641fb60e4c0458b027": "f87ba53fceac998d685fa0bf5dc36356",
".git/objects/97/a35a889ad99324ef2b631d3d774805365c9571": "482d862495b111dea6b6114c343f4fb0",
".git/objects/9b/70c3fdddff85557177f3fa7dfb1d7a8e18a4d1": "1c439935e342a0236f250ef9f23d1c52",
".git/objects/9e/e4dfac10d5be934619bdb40dba81c79bd60738": "1e198c13fe6e3d84be8f9f2b83902fe7",
".git/objects/9f/c77bc65cd28693d3f97337cc17fe637ee421fb": "71a456db2b1540b25fcae283d95a65a3",
".git/objects/a3/1aeff8a82c1373a52834adf5d5d611641cdeb8": "ee29a8b36ac8660bef7a382fcaea7827",
".git/objects/a8/dc941c5b998662efde9803f3e38a446cb7a31a": "f07f8db824d6d30283af7ab04f5fd665",
".git/objects/a9/b83fff2b42a6bdf9c44f8312a785e484f0bc1e": "1c48f793895731b6eec3ee1a768cd04b",
".git/objects/a9/e060481effbe68fec923ae13c25928af0ba794": "bbb8be6e34d039b333e8b08732ca8bdd",
".git/objects/aa/0915684b6a1348a698c882c35b715d93167ff5": "8087335a8942d076afb74abe70075a89",
".git/objects/ad/7c605f34ae702e744536d5919c21dad9bd36c4": "fc15b4c953402e8cd7399cc9815952a5",
".git/objects/ae/198d474a45fdec79896ecea82115efa3daee04": "7bb055242da4924e37a5f363e2bb6f12",
".git/objects/ae/487bfc113054e77840929ab95f818329b40794": "df996948433949d75d778852c26bbaf5",
".git/objects/ae/ac82b2505709faf75c764fe914cdded8317c0e": "6eeebe5c7e116a3724eacf949a2dc3e8",
".git/objects/b1/9992930c73d63784389d6f5df168cdc0a7181c": "a910dc8fdf4899c3bce1d6830369bb97",
".git/objects/b2/1b9bd55e51e794c101c5058c98f09946c7bdd7": "545c7bf979040c9504fe413951ad3e7b",
".git/objects/c4/ac5fa48b28cba518835dccafb24bf9bd050718": "4fc9601ae9c6133323f13f3b628aa62c",
".git/objects/cb/84a0a026932a1ff5d87474c653059771eadef0": "451cc0a449225d16bb54efdf4b64b0ff",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/d2/773e50ffd03fc8230f16aa031430c34a963d90": "8b4933f04bb4ea77febbeddb2b92e3d6",
".git/objects/d8/1eefe45ffd7ae7122fb99bb034e88242df2c29": "3e89bbdcbf2f6c39b5bba15914877173",
".git/objects/db/9c521d0bc484af0e850c2705166390fb0335fb": "1fc3ef3a7b93b512fb943049f1aa1733",
".git/objects/dd/bb9cbf7af1797d9cbf4df34cc5a7e2c44f7f8c": "b4c1ee8a13ec39ed6c5b4cd5f06f3a04",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/ea/226932b721635f08411a133812073d844f9631": "5c7738a7d0a51e0339d26b2985c5ae9e",
".git/objects/eb/718173f72b2763eee0ee4b9d5dd60fc5cbd5ec": "276147c2a4766e743cd91c5949c4cf2e",
".git/objects/ec/3913199242d02d448b3f6854f9c9776eb71ef9": "0a37e4d82cb5f11e7165820e9dfcfed8",
".git/objects/ed/50cb5723ab1046752fc1823dd78109a4bf77d0": "e3743e6dd83e40eb1e88d6c26e1f9b7e",
".git/objects/f4/4fe870dec26d9938ca2c701d67a87c043dc7a2": "ccc7cb389ef59d1f336fe83b26f46ee2",
".git/objects/f7/966e518e0cf3cfc60089452cead4c46fd94307": "dbedc5c4256fd7604bfd12562708bbbe",
".git/objects/fc/d1235a3764b9615fc63161195ec6776257ce15": "01260b97ac4b3d3f50abe3af41586724",
".git/objects/fe/67beda76d5fd559fb2c3dac7e0d4c1834c1094": "855805b0f5ebeaddee927e219fe75f3b",
".git/objects/pack/pack-13a4b39a0234503f7b94237f6c3ca45b807faf58.idx": "67c8cf3380d45f9998b34735d9a4953c",
".git/objects/pack/pack-13a4b39a0234503f7b94237f6c3ca45b807faf58.pack": "a665bdea7cdd52e294673b025098e874",
".git/ORIG_HEAD": "2377f6fe33a07597a0ad1df3ea47b346",
".git/refs/heads/master": "da24041990ecff1aa93ac5ac8a8b8618",
".git/refs/remotes/origin/master": "da24041990ecff1aa93ac5ac8a8b8618",
"assets/AssetManifest.json": "e352ca545072df74c49656613bf0df75",
"assets/assets/fonts/Fredoka/Fredoka-Bold.ttf": "bd3841435b54caa47c83a755c25e0af3",
"assets/assets/fonts/Fredoka/Fredoka-Light.ttf": "2209472423dc97dcc3f82b2a3d6b409d",
"assets/assets/fonts/Fredoka/Fredoka-Medium.ttf": "e240f155ad03f2e4281539d4e258e15e",
"assets/assets/fonts/Fredoka/Fredoka-Regular.ttf": "27cfe680d2ef2ac2fd068b519cbe96fe",
"assets/assets/fonts/Fredoka/Fredoka-SemiBold.ttf": "4e1126227b7e14d307259d716abb2d68",
"assets/FontManifest.json": "392515d39b91f120b4df5ff297bdd2ff",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "e3acb47ea77294e0a386110d73be6b97",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "6333b551ea27fd9d8e1271e92def26a9",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "e786632d581c49e30c1c173d8d4b9f4a",
"/": "e786632d581c49e30c1c173d8d4b9f4a",
"main.dart.js": "bb00f79e3686ffab4980316d3e51a508",
"manifest.json": "6be665e2f39fe57f7063ddede928ab22",
"version.json": "2af18a8928c430b44281b53434072339"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
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
