'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "7541b009f5afe9ac8e8ab48149b71782",
"index.html": "addd4c92e5057aabfcba899acfa61065",
"/": "addd4c92e5057aabfcba899acfa61065",
"main.dart.js": "49b14ce72427e93f6268c5c42600ef6b",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "132ed7aa43b1b1d1df70c70f427a837c",
".git/config": "51c046e571819e2c140309cf8d91ba29",
".git/objects/59/1f53808ae213958bf20bab74f2d6a44ad04351": "87e8c8e68881241dbfe25ef5c80ac511",
".git/objects/3b/3b4d9987f49d971424c66095b4f0099a428814": "03e1edd8fa61e78352f24a2a0d823095",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/6a/c20150414998c93e4a7b0f5511b851d0f8cbfb": "24eb6d9e02eb9c3a942b46e5d8c77f5b",
".git/objects/32/c14d54032058e05632675b82f374afff634364": "98da3a9512d0a79a60ba71cf6e18040e",
".git/objects/35/b20691d8893afe61fedd3ae3a7165d8ec7d4ff": "9909f959c789f1007c307f3269530bc5",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/69/0e6fd87be69cbac0e6faceb6219b09eec5e40e": "be3541eb9255659aa4eee9fa7a576c10",
".git/objects/56/d6a3ece3f3bfd0c75aec8a97b29da4dd2d4eea": "23350b1a0eed91b470b3a7beee028867",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/34/d5b3e69714739e6b8b4f2fc0f48e0deb18211c": "4b8cd7d5eb378002237a999228f51acc",
".git/objects/34/e78fe166c56140add98de7d323dfa39a96f408": "0ca575aa92e4359442e7d1e65000fc63",
".git/objects/b5/aff6d549a7c4918b327aff9473595a9c4a42d9": "d48dd7a87de9b96458add20a0a8de405",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/d9/91740592f9722ab40f6f433595e787c63170c2": "f99f4aa24b5d8217d681093842654623",
".git/objects/ac/84302fd18fa8386e50a69bce2b9f648fa50222": "2b51ee80157fa1c40c7fee68b84bfeb3",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/d7/ab028b6224d5fce543dc492a88e33f7966e678": "a0ed4e5cd7f7edbc96f5124fdf969ccf",
".git/objects/be/53c8240767940d023c35a20c425e16cb93e2b4": "61074bbdac2572045900b96e53997339",
".git/objects/be/1afee470ff441072803681827e5335628572ae": "84c586320fb934e4ec5b53185f46bed0",
".git/objects/b3/7ec49bd33743eabd54cefe3c55c3496e415bd2": "d0e9c6c4b1e77cdb308d988746c1edd6",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/268d6b293336e5db01db18b6f30b22fea65f77": "a86f756b85388e2291857b81b4e85b6e",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/ab/e248cc45d7623ec199b4cdbdf5bb616d050cf6": "0913aeda3c1c2e09b1d3f140c4d11c15",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/e83706964b4d535b5d4fed7fc5a51f4c7b0f9f": "c705b387a578f51956e39bdd4201c790",
".git/objects/c9/6c0ad1d468566c7514d6beb77c238229961f40": "e21e4018a5e7196fab06b1b5ebffdff4",
".git/objects/ed/aa8c0675f9a9f6da49e9a31e47d74536017484": "89e0f542a86efaabfe80a2a0fb4f5ef2",
".git/objects/c1/ba22d49241e3a5abd6de610e32d8026829eef8": "e356b31eb601121d7208bc2633c336d3",
".git/objects/c1/e5d1755586d533ff2004b4f9f047b1c620f7cf": "7e2e80cde2b27d562f4620e6844b5a5d",
".git/objects/27/a8783b5b7961261759ba5a15cf990d519d3478": "4bf6f2bcfe71e986352d2394702c84d1",
".git/objects/4b/5220c3fdd92c62a58453f7eabf778a10856ca0": "62c975c3f59feafcd20fc41e16a17c55",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/7c/585eb2e15ca2dd275f7386881d15d0c21f2168": "9fa5a4aed370d25ef6a98b620fd8056e",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/10/d2ba823cc4fb45fd0d0115a285d59fc0a2d0d5": "d0f5f4b0e8b2e78e7f57d7ac4acc8393",
".git/objects/19/6817c3c68a9336564d35a440ec24e543a4fbc6": "49d4b11883f9531cb0c8253f7e4f0ba1",
".git/objects/4c/3db87b18609da09f44f73b63f772ebf39defaf": "ec48581d9ff27b3995624c7a970dfe18",
".git/objects/4c/8bfc337b7fdc3f7b9a8ead7e5a305745ea9628": "8274d42960675e7cf08fce42f586b698",
".git/objects/21/98495209e89eadbacc7a7458e4a8c493841257": "4bcd75250236b5c05eb032201384ddab",
".git/objects/72/dd29af4e2c06bef4bbc086f8209f36c979e911": "64ec2b38d77fae8b5affb9994dbdbc57",
".git/objects/44/7a9c42a01da90e7e9d83dcc73e10d8c0bd8221": "180b094b5ad6e0f8de4e6dda1cc09545",
".git/objects/2a/2334bd21106f7e3b33bc76759a115795e9e33e": "c072437a4f414e72837de22adbfcbe0e",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6e/a4f6e34acd712477c88d73ded44c50b572d049": "73b07db66a0aab85ae3ac7c0bdb21cd0",
".git/objects/9a/8ab4e635545cc3c0e6ab972a80b666acbe4038": "c06740a606726b2e89533f03dc779877",
".git/objects/91/3f5f2ebe27248c5f56f337d68a0691417b6dfd": "c7abe87a2b1460fd61e79716e5e8647c",
".git/objects/65/250282ce7d1444ebb523b1d02bc54bfaa88f8d": "e16a58c3cb62a7c86a9bfff19f8c52c3",
".git/objects/65/5e4cbcec0cd52505ca36e6bc4330409221206c": "2a650e347202452bd00b5657e8584b70",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/54/81f52818717c9a99b138c8fde32dfe1a733d59": "ce3155a2ad42dfb3360635c0642ecd5a",
".git/objects/54/467bbc27f76a1ea4adf8a113862c95514dd51b": "7427cd48101ab3ec811e3be1387f2d61",
".git/objects/98/b93a814a054c232abdcfb5c2987a66d0ac3587": "19a054e8230b50eb385b1d695d058d13",
".git/objects/53/09f72f6bed23f9acab62c09e3196da6e875236": "cd2c48ce0fe3cfdca3b0efb09a42b269",
".git/objects/3f/8e893762670ff98ec9725cc845b40492ee2e25": "a30ed68878328e312abfe8bfee1c7ceb",
".git/objects/30/01a0963d104d784fb839db65e9f9af6f58de3a": "8bbe25d9e3c25f74a7d335da9202199a",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/01/25a3c433434ea823b19bea83fbda0522b658a3": "ec92e7ce212bd569c5c77f92d19c832a",
".git/objects/06/bb6e82515d19d80674124f2d4519d9f32e3618": "51194cebb444dbf82c9d655e1257c4d6",
".git/objects/0f/31f0054b5480f1227eff8e30c195874acea09e": "9cc92b1f7225a1cd334aed812b5fd644",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/b8/bcc89068b653959b6294dee22e41e4aa6902ed": "3bbdd1f9656502a7a77748bef5cadfb1",
".git/objects/b1/3d718a0ed848dadbc363c0cda7050438959231": "f89c0423991dec4f2a6d40b106060f17",
".git/objects/b6/a53ce23b0241a00df88306f9f97e12ae6dd3ff": "fe9ac6f7d06922ef52bb4db9d84641f7",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/de/079f46f80d964cf30d4bc6be016c88e17646cb": "4b75a2754afd3ce20f00c4e17005af26",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ef/a52052a6aaad0b129bf51e691c1bff80604b77": "446727e0c6cd747ef3c6b726f6715440",
".git/objects/c3/d25f3bf9d2611d7f7edf990fd3ed514331f31b": "9373af79a2744c2d2db905876bfcba8b",
".git/objects/c4/e2bdea74ddd7e2bb10713b9c1f10e0ffe8a9de": "b1cc43f1b90812b303ab0f845e1446a2",
".git/objects/e6/15631fec28ba2baf4dd85a7b5028a6be4f1da8": "5c33cbcc571a3d686bcae2a9e24d19db",
".git/objects/e7/5e920f175da53dd6f04d858636baa25dc702f4": "0fd694d0b7477cee41611e70d0cd6732",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/79/0e5a6d6653e9e1d6ff7f8b5ab5acb2f300d9ad": "fb767d0a5aeb8fb5436aa24fbcd6f702",
".git/objects/77/4a89c1a7e813631ac6abb59ce3f121ff76c28b": "441b7d739a736c4e9f7d33342c5213ed",
".git/objects/77/994057bc051b0eec4794baffb364f7f05bf4f8": "483155db50bcd8ad2d40a4cf33721969",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/84/b88f97fc01e8c3ef3c40e75fb8e9a1818bc9bc": "f4c01f325c94d75dd95117f8d0dc8e14",
".git/objects/84/ae40891ea8de871794558a3a266e7db053343a": "d4cd7129442825c3522c78500e15fe3f",
".git/objects/4a/1a3b0154fdcb33cade31dda104d34ef808acb8": "301c8b34744bc2d9f4d1c51cb8bd7228",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/82/3813e2a25694a82b820f682c0e914445efbabe": "bf18206dc679ce5e055c8241db12748b",
".git/objects/2e/f7297e44d1144157279d4875d0982d6dc5a94e": "afaed20d6c5047e290696074ee81e547",
".git/objects/2e/ece96551559baa4954c22d1a3e3142ada3d1ca": "95dc8fa4477b9cce4e39249b79bbe4e0",
".git/objects/2b/23a5935ea6fe3a8b9715e80a78f11326720d16": "8f59b181f23274078220064241b5e251",
".git/objects/8b/53d62c1b64686c0f89d5acb38c4eb6b06ec47c": "db7461c10d65f4698d8132694ca49372",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/HEAD": "1b693dd25f3d5a7a523e79a79cc1c1b5",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "c496ec9a74a50d907790a9d9bf7d0766",
".git/logs/refs/heads/my-new-branch": "c496ec9a74a50d907790a9d9bf7d0766",
".git/logs/refs/remotes/origin/my-new-branch": "04b936ce414f505eb7451b5e05c9a89f",
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
".git/refs/heads/my-new-branch": "c3f2547222196f91e0bfa114a84527a5",
".git/refs/remotes/origin/my-new-branch": "c3f2547222196f91e0bfa114a84527a5",
".git/index": "41136161145114ab2dc37dcca4087589",
".git/COMMIT_EDITMSG": "23d3fffce5785601aafd072ca9491480",
"assets/AssetManifest.json": "83bb117b06f5f5cdaae4966177f9d9db",
"assets/NOTICES": "37d1f24d5a237979f6d17bf9d59a3d9d",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/lib/assets/ClanBattleArmor.png": "fb0181c6c183fab79b17c77908aa0458",
"assets/AssetManifest.smcbin": "170d3f227780238e310ef86bac7e6150",
"assets/fonts/MaterialIcons-Regular.otf": "3ef0fe157fb49cdb56f8f68202ab2e32",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
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
