'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "7541b009f5afe9ac8e8ab48149b71782",
"index.html": "e6020249c6b84de5ff04274c5d1f3536",
"/": "e6020249c6b84de5ff04274c5d1f3536",
"main.dart.js": "f3d996cab98a853334663c2a7afe66a6",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "132ed7aa43b1b1d1df70c70f427a837c",
".git/ORIG_HEAD": "2bf39eaf46d1ed2cef6bd569ba861e93",
".git/config": "e94c8ef1ca69756ea43e6bc444450fcc",
".git/objects/59/37a99e7db966165355ebe3365d28114791b768": "698ebdd5a65183b7a7ca3fa5fce624ca",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/6a/0f810f984832bfdbdd2aac27feab909f1cec1f": "b9116340b16409bb56a21eba31ab64bb",
".git/objects/32/c14d54032058e05632675b82f374afff634364": "98da3a9512d0a79a60ba71cf6e18040e",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/3c/25ad0b238a0a49378d8abf348359eb694fcb8c": "a44925929f79b80bcbeb53984fcf6568",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/51/36a656081c0964c38fdd728934ee3548c1bb26": "e55ab782d7f350278cc1bc0f46e727e4",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/60/c3597451041267525b7b2c98a6b3ea3d29c482": "ddd955da9c8eb9b9b2cfe530c5c0e0dc",
".git/objects/33/1cb414c9952fe631793fa6840400eb0222ba70": "e170da1f7e44533f41874ae891d87c2f",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/ac/516727916fd2d1ab85cd5f8671d0f0b6ddc7e4": "73f449be18d61e3bb3e7faffb30e7c9f",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/b4/5ca1685f8d53457a1e3b46742a1906613537e7": "1432444a8b2973f7025708fa0f04fd8f",
".git/objects/a2/ee0494b632f505fd8628e58e61cd7ebd63e224": "5ce3c8f5ff50ee0b9c2cda7fb0ceb666",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ae/3a13bcf4e248ad3831ae88abe266ced3445ccd": "e1f78a231d42bcd4b5e3ad2832b50f76",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/d8/790623696e487ac5d0113202d4dd6ff0cebba2": "e94c05567fe562996b095f7717571c51",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c7/52c405705d5ad5de9b849f1959388cca5090f0": "f9aa68d5902f4fe495b15e061df0b80e",
".git/objects/ee/e83706964b4d535b5d4fed7fc5a51f4c7b0f9f": "c705b387a578f51956e39bdd4201c790",
".git/objects/f2/fbc69469a5e0e5120908d6274d47934efac42b": "92ad6f608f173a85fc6f587039dc835e",
".git/objects/ca/970f37aebc113e915dfe99b794f2642ee7cffa": "d72a0072b00c8dc8013fbedd4a4fc553",
".git/objects/e4/dddcf1d0b90b210f1b64bd843b3c8f2f0cea02": "e35ac3290892d60cd69f5986e4513b4e",
".git/objects/27/2c613fe737bdbd6b82cc7caac67ccbd7775a67": "290c714de6eeae3ac9989bed548bcaf9",
".git/objects/27/cf8030dfb428ad33687fb5a2d07d3d27cb9d17": "c85b47437f587c4a4b3a3dcf00fc70e3",
".git/objects/pack/pack-15f932f7146f83c727604ba684bfeaf7fcdc823b.idx": "6b6c90a6b1a6e72b292cc12f05ed3cb5",
".git/objects/pack/pack-15f932f7146f83c727604ba684bfeaf7fcdc823b.pack": "65ec1240e87c226c47994363de5ebc92",
".git/objects/7c/585eb2e15ca2dd275f7386881d15d0c21f2168": "9fa5a4aed370d25ef6a98b620fd8056e",
".git/objects/8f/df352d10ee9a0f456b629d3268a17ad5878efb": "b77248d922021d749486f27e85d0ce10",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/3441c108b0011587a88e95f131625a1fbbf5ef": "6546b30f48d8ac7b2ac5a6564711f227",
".git/objects/7e/a8f181f37ef029431c64e826feacc6e08a6ba3": "63f4ec8adc0834ba6226b8a3c59ca74d",
".git/objects/19/6817c3c68a9336564d35a440ec24e543a4fbc6": "49d4b11883f9531cb0c8253f7e4f0ba1",
".git/objects/72/8af77a16fdb6d0ffb965e9ea01a94de600d5aa": "795c00f4bcaf535fd36e34192da17f8c",
".git/objects/44/7a9c42a01da90e7e9d83dcc73e10d8c0bd8221": "180b094b5ad6e0f8de4e6dda1cc09545",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9f/e6caa662835fc8c5b18249b410b830f5306eae": "05bcf940ec8fd108290bef638b70b8bb",
".git/objects/36/bb44ec43e430feaee9f00e45f23a95f0323e4f": "751feb2d1e7acec8fa524f4d02ee5d11",
".git/objects/65/5e4cbcec0cd52505ca36e6bc4330409221206c": "2a650e347202452bd00b5657e8584b70",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/39/7cd63449c7a4a54f3f4a4209807bb263fa1d5a": "4a80e9e4e037821104ca38c362c5a7c2",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/dc/00be26f80c098e38f8dad0d0a1d9d2207c1102": "68089b27973463aaf303bb647a16ecae",
".git/objects/b6/a53ce23b0241a00df88306f9f97e12ae6dd3ff": "fe9ac6f7d06922ef52bb4db9d84641f7",
".git/objects/af/d88e96e0c851ba178d896974394814ea8f368c": "4445e0290045bf28fbc035ea1b46a4a1",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c3/4a447a303dae166d0a636d75cf60284c79184a": "af2d1e5f2dd871ed561203d73d87699b",
".git/objects/ea/a9e518bdc1c4937106b7155a2c4aad2e2d5a36": "f6fe3fb8b8a24abe0e0da2f16790e6b9",
".git/objects/cd/bf40ba937655a51743954ed61bbd071a76f266": "3f747d9dd76c053f2c1a012c4d90bf5e",
".git/objects/cc/b7b896d7bc117d4f8f078c0862f6b5c17fb4f8": "2ea6f8d6d33e0f1f71bf85f6f05373ea",
".git/objects/f7/b3b6bbc1888fb945d65e6075f28dfbf8229fbc": "e18d40e0d9b7e6cb6cf539c830cb09be",
".git/objects/c5/8e0ad3ce230a867bd162c419d02d018ee09066": "63212e3a6d6e48c7e89bc4a6573df847",
".git/objects/e7/5e920f175da53dd6f04d858636baa25dc702f4": "0fd694d0b7477cee41611e70d0cd6732",
".git/objects/ce/0fd199900051fdaf754bd6b0b95a9f5eec5ecb": "7441606cfd567f9f441ab409768a0b8d",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/77/d1045bf6a9907a20e5654f8442db8a32251317": "83628667a33f25fee42d618ab899b2be",
".git/objects/77/994057bc051b0eec4794baffb364f7f05bf4f8": "483155db50bcd8ad2d40a4cf33721969",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/12/c19344a1f2f7d41593f8d0a0fcc2fdc899262d": "0c33fa70449477392ae5573d59f36f20",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/82/3813e2a25694a82b820f682c0e914445efbabe": "bf18206dc679ce5e055c8241db12748b",
".git/objects/2e/f7297e44d1144157279d4875d0982d6dc5a94e": "afaed20d6c5047e290696074ee81e547",
".git/objects/7a/a04b0fdb616cd4d6f5fc59d7c68f1dd3d2e148": "3b53f1fddf990eec96fa8aa34bffd674",
".git/objects/14/a1cc1869f8b6a8b3d0a287c8f15449f9e9bcf3": "f2bbe0459e0000a2ff4339010fa1cb00",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/objects/8e/a7d2a63890d74122b11d19bcc8d8ec959c63e9": "fd9c4e80f95e3c2913a3d1629136e2e6",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "7037244ed0553894749e02fa986badc7",
".git/logs/refs/heads/master": "2cd79fed4d717529dd581eaeea44e540",
".git/logs/refs/heads/main": "87790894b048751f881fd44c5396f71b",
".git/logs/refs/remotes/origin/master": "977f56448d11d41161be9ed07d3bee2f",
".git/logs/refs/remotes/origin/main": "64cc7815e85c3e976fd3e43f09b1cf70",
".git/logs/refs/stash": "03c529d522fe43484e00b2d023a15a79",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/master": "04b6e9b5b85d1eb289d68e47c7744db3",
".git/refs/heads/main": "74485707393c0c8af59bc132e002b50f",
".git/refs/remotes/origin/master": "04b6e9b5b85d1eb289d68e47c7744db3",
".git/refs/remotes/origin/main": "005ce4021fe0889a10101cba8a48ef09",
".git/refs/stash": "0f219f3566736353ec845db025c9e2e6",
".git/index": "baa65f11ae3351b6efd893a6559516a4",
".git/COMMIT_EDITMSG": "352fbf84578e8589e10a2e5e795f30fa",
".git/FETCH_HEAD": "c89eb94d2ab180530cad4c719b7cce3e",
"assets/AssetManifest.json": "83bb117b06f5f5cdaae4966177f9d9db",
"assets/NOTICES": "9046043605c1f8048dfb286c95e0b0bc",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/lib/assets/ClanBattleArmor.png": "fb0181c6c183fab79b17c77908aa0458",
"assets/AssetManifest.smcbin": "170d3f227780238e310ef86bac7e6150",
"assets/fonts/MaterialIcons-Regular.otf": "c58d1c569f711e3d84427ae74f4971e4",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
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
