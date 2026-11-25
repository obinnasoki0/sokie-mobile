'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"favicon.png": "04989856ac92a9bd4b33b0eac1465dc6",
"og-image.jpg": "09dd719784153bdea49f6fb43d5aeaef",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"services/technology-help/index.html": "60c85907378e9a478fb5e39af0207e02",
"services/personal-admin-help/index.html": "c526d2711953473ecb04aa69f91a4745",
"services/pet-care/index.html": "ed41a790a899c6de6ef7b7c5a5c9dfa3",
"services/vehicle-errands/index.html": "39c454fb6376fd279dc4d9cfe0487b6c",
"services/other-custom-request/index.html": "792a9b17ab133323ffd7fc19e3b1f208",
"services/assembly-setup/index.html": "9c983be96d44b50ef54d91a73f998e06",
"services/waiting-line-standing/index.html": "ee7205127718da424ebae5a87ffe0715",
"services/events-parties/index.html": "cd79bed140943e205fddafc7347382c6",
"services/pickup-delivery/index.html": "b94eaa5c44074620dfe8aa93ca7b3715",
"services/home-help/index.html": "23a983a0f649ded1238acc4c92149ada",
"services/index.html": "9a719352a6b904c04a08345f725a45b3",
"services/shopping-store-runs/index.html": "ce6b5608e1dd026fa10738bc0f901254",
"services/private-ride/index.html": "c33c62ce74f9242a03bc5fa2910cff32",
"services/plumbing/index.html": "cdaf26387ccedf671b95cf1a75d262b1",
"services/hvac/index.html": "0bf1c76422dcf97a6a050a285832a154",
"services/business-help/index.html": "04f41aff0c1fad4628254f65281bd3dc",
"services/local-checks-verification/index.html": "a30338395cada7581064f5cd0ab48ec2",
"services/cleaning/index.html": "6e2e62e9a84cf409aa08b158b0f9e7a0",
"services/electrical/index.html": "71633e3e7d6f1650bfba4c78a184be3a",
"services/yard-outdoor/index.html": "753fc16e3feb15f6b741d856a27605bb",
"services/wellness-personal-care/index.html": "3a838089d66c79131719fb546e8e9fb0",
"services/moving-heavy-lifting/index.html": "08f820227cbe0aa60a89a8facfd45baf",
"runner-terms.html": "2a511d12c3ab18d9915756b05ffaf0f3",
"flutter_bootstrap.js": "cf8693ad025d085f1408ad1e692af467",
"assets/NOTICES": "e52d688391c06cad1ced128e40a8264c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/AssetManifest.bin": "5fc61966a17a7d5ea4cb8ba308fa0853",
"assets/assets/help/settings.png": "84ec5f14e04ecd6d690f4c402e11ceb2",
"assets/assets/help/earn.png": "7e268903f7e36c635fc66763161126e1",
"assets/assets/help/help-center.png": "9dfd89f60bd2771c31c21d5bd1029661",
"assets/assets/help/activity.png": "70dfbc1f78c55e220824f855f813b6e2",
"assets/assets/help/checklist.png": "ea595425b7755d679be78ed03c407f1f",
"assets/assets/help/payments.png": "596d4a030adb90b228aef11f40e8af57",
"assets/assets/help/more.png": "1085864524cb176dc04fb7c9051ebc06",
"assets/assets/help/get-help.png": "98588618da56afea5739650bffaaedb7",
"assets/assets/help/runner-verification.png": "82dead0efd249c2d45afa68c372a2e1f",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.json": "5464fc8a0d829bd0f256e9311967d314",
"assets/fonts/MaterialIcons-Regular.otf": "9fc07e2ba27009415086d85e9d8c1179",
"assets/AssetManifest.bin.json": "6df591c42379195d55da320033ee6bf0",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"index.html": "bb47c694e3f484b290a04dc3f1c5ce61",
"/": "bb47c694e3f484b290a04dc3f1c5ce61",
"sitemap.xml": "507ff0da0795969ed94fb489dd282d47",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"main.dart.js": "749dabd46985fb71399a274b6859dc23",
"manifest.json": "83a6eefc5bee47e2c8464e85a6f7acf9",
"become-a-runner/index.html": "85f23a6b961da8d19b90669c9818881b",
"icons/Icon-512.png": "14d328d5cf45a6173c796d19c6076aca",
"icons/Icon-maskable-512.png": "ff15c779dfd57ee836e4cd7ef4c44079",
"icons/Icon-maskable-192.png": "5fa9c798edfbf91ca62b951bc382a17b",
"icons/Icon-192.png": "8800f49607cd939ff15f021f8734a1a5",
"icons/apple-touch-icon.png": "8ca161f3d0d38166dd9c9786a411de15",
"version.json": "1f67b011e541258a8eace6c1edb3f4b4",
"privacy.html": "dd3290a284e4b9459a98a1505526e0dd",
"push/onesignal/OneSignalSDKWorker.js": "8e3ee21f321e4291e1671535f04679c8",
"errands/store-pickup-service/index.html": "204b46f9bc98d65e4d37b4481d256d35",
"errands/help-moving-furniture/index.html": "e7bde3f7069026f0413797922cd1fff1",
"errands/line-standing-service/index.html": "61235ba468aa70fb9373e4f266281f9e",
"errands/return-packages-for-me/index.html": "59fce528b984b698a89268767272cde6",
"errands/get-paid-to-walk-dogs/index.html": "769248a3cff24df57efa13e796958820",
"errands/earn-money-running-errands/index.html": "c80f59411419c1ba9b5a2626427d6ea5",
"errands/tv-and-tech-setup/index.html": "5e1997b461615d2bf0049b5dbb7ff2ae",
"errands/index.html": "d0c6917f750bf53d4937c3ef9b10c78d",
"errands/event-setup-help/index.html": "0841c7b4bd9ad4f50519b3f69f5b85ad",
"errands/yard-work-help/index.html": "0eb164127509fc062ca02c0da7e8894b",
"errands/handyman-side-jobs/index.html": "3fec18cebfe3cbee7dc55e8462af7c0c",
"errands/house-cleaning-help/index.html": "76e590c38083f3e717b4e07af8f715a3",
"errands/personal-assistant-errands/index.html": "fdf5f1c837152a0879d5d2c66bb7ec9d",
"errands/dog-walking/index.html": "3c1369106077b3211c6cb101a1675d2c",
"errands/flexible-side-gig/index.html": "7475e5bab52571fc0368e3e7290c3624",
"errands/furniture-assembly/index.html": "e506b7ecc3487e72f73c36074f67bffc",
"errands/check-on-something-for-me/index.html": "2c3663184384544c7b51a2fa1c38713c",
"errands/grocery-delivery/index.html": "4fde7243c7ee5719fa2877d7de7c7e87",
"data-deletion.html": "b3b05c2a875746add2eb5c8f61c39234",
"terms.html": "d5c56a92f7ac75cc52016702af8d751f",
"help/track-your-errand/index.html": "6a59521d2acbe09fe9d06b6184373dd2",
"help/safety-and-trust/index.html": "f9d0a3fe9e4731d71fd41e861b07ece4",
"help/fees/index.html": "52340ef82be06dd558b9d903e4bb2523",
"help/accept-and-complete-jobs/index.html": "0883258a4ddf7defd24a983d53ea656a",
"help/package-safety-check/index.html": "4f60eca88fefc015efcab94b45c82545",
"help/privacy-and-your-data/index.html": "9ebbf577dc5bc5101b8f99951c67489c",
"help/report-a-problem/index.html": "8a8d59c8c20d33dc077872656c864645",
"help/get-verified/index.html": "55add04344170aafd554a5f7f527e755",
"help/index.html": "cbc4fc0888f26b52cfa32fd61dcb6145",
"help/post-an-errand/index.html": "ab5fae280d1b4e5729882f9b21ebb97c",
"help/set-up-payouts/index.html": "9867f74be7a00f03e4bb37b009c25ac4",
"help/how-runners-are-vetted/index.html": "37b683e9d5e4e052e8645ec071948167",
"help/community-guidelines/index.html": "c905bd69588f1fb8aa6d297802efe114",
"help/cancel-an-errand/index.html": "bcc0ca5669c7f0cfaae48c21e2650f1e",
"help/account-and-security/index.html": "35556b7544e4daeff5bf67d2a1230e73",
"help/notifications/index.html": "d3ba2773f05136dbc34d332ddc57b30c",
"help/become-a-runner/index.html": "26e61bbf7a5f94da1a4c21dae313a0be",
"help/getting-around/index.html": "e83c4d494839cc3b1bb1a2972308e928",
"help/add-a-payment-method/index.html": "7e3b5ffb66f87c06e8bd1b1287d936cb",
"help/licences-and-level/index.html": "d13ffb360af26b33d2a4df55870a7a39",
"help/crew-plans-and-to-do/index.html": "7a1b833ef6da3e65b7b3e1b2483dfa8a",
"help/how-payments-work/index.html": "aed0e994e460e009763fb7e5f7e734ab",
"help/pricing-options/index.html": "7ef491d8d7f0f063fb598380467a12b1",
"help/confirm-and-tip/index.html": "c3866c46cc6633aa7fecc33b5d0d0d13",
"help/invite-and-earn/index.html": "35c05cc3c60b673180deaddc80795e73",
"help/safety-tips/index.html": "636abcf2ec21546cffcb1d02cfa63590",
"help/runner-earnings/index.html": "e1ca3332cc1cc3e0635b88d31b5e7659",
"help/set-up-your-profile/index.html": "5f950b7511fb2ae760a1698977545972",
"robots.txt": "911590ad7bb82117dd09526c08ba8078",
"_redirects": "5f52dbefcf63c9f677ace09fcf8bc7d8",
"how-it-works/index.html": "458f8445706d304c40df7af8563cb3f1",
"about/index.html": "7689b525885791a8f8e5c5ed27a2f4d9"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
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
