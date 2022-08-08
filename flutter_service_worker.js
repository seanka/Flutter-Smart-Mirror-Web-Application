'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
<<<<<<< HEAD
  "assets/AssetManifest.json": "e352ca545072df74c49656613bf0df75",
=======
  ".git/COMMIT_EDITMSG": "4ca3ffb00bd208fb73c68f389aba4196",
".git/config": "5181fefc51ca71c465b820e176a9b631",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
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
".git/index": "9d4e47d825ba732def0ee4306a415a9b",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "7a9385d72b4b54d6ca2a28291e71f678",
".git/logs/refs/heads/master": "7a9385d72b4b54d6ca2a28291e71f678",
".git/logs/refs/remotes/origin/master": "cdc66f51c7ccd34ffe1a16bb4243a424",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/08/ce052adee7ce03e048a7878d391c75590fdde3": "cead93a80f0bdf3b863afd0fe883f882",
".git/objects/0a/73b5fcaff0ba477ec7061267191f7cf4b82634": "332aaefd90ffcc33e3b78dabb15e05e0",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/0d/9b5ba2ea3201568ce63f25027b8e223cde7c5b": "f2b8a932ef9ede9742eb50cb91a2fc99",
".git/objects/0d/a7afb761c6764890b34b16596aab0a9cebf4ca": "c48acc0db574831233095523f7406047",
".git/objects/0d/e471cd1c65dd3ad21a18cd7d0a7bf89046752b": "b4cb435f109ed0edba3d0cfc6a56c9df",
".git/objects/10/4e37047fcff27cdc0773eb6af2b15b767619fa": "65196fa302b5a39d2c737c7d52eca571",
".git/objects/13/59626be873620eb120a78b247f3313e6c994f7": "3579420b9da9810ec3e7e7bd4cc2e4ec",
".git/objects/16/20834b1a42487c8df5ddc8d916c0526a7ab5a3": "0f21e24bc784b6ba62ee0ad06db9f48a",
".git/objects/1a/96d60e41890d8fd19e3f54b95dfb2f14867f7a": "f2c53d0bc599da7fc7c32d688da7a25b",
".git/objects/22/1d1ad7f439ada7c877eb13e386b59e622e1550": "23e7fcd139760637c6f3a0264493bd5e",
".git/objects/22/4f8998ae740c9ef3c05636a5937e1146c227c9": "a19664a802d9e8de689667b5d035aeef",
".git/objects/23/1d7cd0c1d76f76c9dc91393b9fc8b217ef93a1": "f5a3cd4369e7280e884d6862a168be6f",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/25/b53158cdfcebed164b883f3506b43ce3d38452": "73e89c7ee062cfbf51952d8bee3acab9",
".git/objects/29/577556bfb12ea453bb06dbf50d8ecc1ba517d8": "5bd881c7f773ec710a718598140ae8e7",
".git/objects/29/a118753ab981d47783cbc326647a92eb786567": "5b598e4e8092e5f59bea30d893ebe4f4",
".git/objects/2c/64afacb33b55929440ea523d5002a6215c3763": "979c45a6eb2f6efcf002a0d73665a4d7",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/31/52d961d1c2fa24737b895980763081e3ea5cc5": "b6f296a74e4009f06dc325e76f774146",
".git/objects/31/8e453483dc85dc3fa65d07339a13342ba887de": "9ec2f3d7db7eb879f1e9246224fbe994",
".git/objects/32/387c07f9742c099f09eb9ef5a2bef4be7b4828": "5b729632b344bff9fa396aa1bd9bcecf",
".git/objects/3a/3da0bb05b679f0a09dd3da375f54187191db76": "440f79087fb2f1828799d865a459dcc9",
".git/objects/3e/c3a29badccccf37ff0c03be11e5bb7e4c2e6b6": "eae3983bf38b5fe1dc47c6b9fe19e77b",
".git/objects/40/485addc748c6c9ea443d686545a8bb3afdd713": "64f11a56cdb60c085aed1146df972eb2",
".git/objects/44/32b3cc6915f5f90a2f491f1e2e8fea6e1f63ac": "3317a6452907ca41ec3503e4a4402f5b",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4b/0ec40f9c3089b95fe049b424b5b2da94d792cb": "55f99c9f1437974d03541b251bf83b0a",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4b/d1a5bc0d56c47d013cfc3a9bf3c398a23e41fc": "1a881c9e77e7f37483fc7d4286406c18",
".git/objects/4c/80766e55ea40bd875b5fed21395de24c8d6919": "bd5716ff436b37bf6e343bd4ae05313a",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/4e/ca15b557e53c40346a513163100be643eddcb9": "fa9eda1810dc3e79e435525b40ecbc94",
".git/objects/4f/4a3381e68deef49bceee0d5c6a7312f4289b2d": "b089d3ce7c7ac78855be1914e8b6aeec",
".git/objects/4f/ec2c4f7a5e217682b7d944ad7358eb674dc0ae": "832f319528a56258fbfeb42d86564c92",
".git/objects/50/7885a5c0ca0494f52e0da2824024cb47dc4479": "a30b97942ce1f12c57e19884e391c679",
".git/objects/52/480a63b1f184ea74afb06662aa98fa98864864": "6f8b2cf71be2b4830601f9db57eded45",
".git/objects/53/afdab90f42052664b25aed9e8d043389875e4d": "b135f54892420cf86f7f877572cd0c74",
".git/objects/56/f2f675ed7bc19c00f6fecef6d5853447f95765": "37f66e030c6104db7a5fd1ad1c1e3b0c",
".git/objects/58/113459cb38582251f6033be25b06aad75d5fbb": "efc470b481964fa0bea58704d1587745",
".git/objects/5c/5181ff0ee2752bae26e7f4514a926ec2f8fa48": "4836b2aa17dd749beee1bc87821fce0c",
".git/objects/61/2f84da1aedac2caf03e12a4dd99e0d1c5cb941": "4b07875d8248cadbb4dd03683e525ebb",
".git/objects/62/91671784b52b738e9d52cf336bc63a41a50ff4": "7e0865e87b8cf6046da8c91109f320cf",
".git/objects/62/cf731a624f34f16160b1f2949d048231f96bc4": "bb98261fa508cb868717f41b206f3ffa",
".git/objects/62/ffc62da440d48cf682bb6bea56e7ca48f6e84f": "01a0bff5b205d1f4b54963f7a7b3b3f5",
".git/objects/66/203ee120299eb7081e07fb16470e1c906429b0": "1f7a911a390042622440ef3edf0f796b",
".git/objects/68/3edc44f4c7c242f0bd47c1cda6bd5f9d682e06": "9549d70d8a9d3e16033093833c19ac3c",
".git/objects/70/dc6920b8509877567fdcae33679f18b2237636": "57e6f0a4b316506ef3785be745494f90",
".git/objects/72/1c2ba8a290d46a9e97e813df638da2ebfa1f64": "208b4c2e6e5c6cce9918665dd1aface1",
".git/objects/72/9439536427633b8df81fdc9df3bf7763a6c6c5": "91aa1375edf60deafc0c9f71e6c2e498",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/78/0dab2803592f382ad68360c1f83c55dde0e344": "634300ce60ffde5d904071602ce9a60f",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7b/19c4e3e753e57ad493f689b1580845c18ef413": "9a128eee3943ea1a06349949583bc22a",
".git/objects/7f/eb3e406d3c30fbaea91f3d55611367b301eb68": "a2d2f95911c1bd850055628c19808f6a",
".git/objects/83/39bbbb14b3f3abedfad4e0f8f25fe687a2dc39": "7b522fb9f17de6bfacc187c3daccd6ff",
".git/objects/84/e6d07deb967beadef495f33d5c89cb5fda55ea": "41eb6d404c6288eb846a8775ea8d36fd",
".git/objects/85/6804ab71d123211eeb6075a082a76bf19c7c7d": "e9f8d485686960ac41d23685ee30b1b5",
".git/objects/88/13316d0e1d06525ec00010efe43aba9fc1c06b": "95e924187bf80447cc2d792f5f9ec6f3",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/a8690761de9bfac1fa60a79cffe181770163f5": "f93bdf2864a87fb5b4f2fb0f6706a989",
".git/objects/92/686be729bcd7cad437c440e4be256795b5581f": "8c5e08d64af27c7c2a56e7d29b81ea3c",
".git/objects/93/c91bef6313225d0d36ba0bd2e3947939143017": "8d5ef136420dde41e549f3e4a9408b28",
".git/objects/97/4c4a23c8946ed27a804bcaf513f275d8c765fa": "fcaefdf2249a4cd3d64fbf5fa93fbb23",
".git/objects/9a/f7a2b008e4084aede1bfde197ecaa4601db5db": "d1718f11fc5a48b81f43586150b42199",
".git/objects/9f/f3ae9fa49f57c66fd846f8463b51a4840adfdf": "6bfb8d4283e2ef6b463fea3ef9338aa9",
".git/objects/a1/14fd061a177f4759b7b712eeb1e3325c07ecb6": "644e28196e6678fb50cac38d9189fb08",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a2/410613c8713639bec9eeb10664cc752175ae2d": "54760346b353b9ae38244f1ee440fe11",
".git/objects/a2/6aa6290aa0007a3c6abd8d37c227ecad4c20ff": "3d6d4abf68a58f5561c94521fc1adb00",
".git/objects/a7/37c514504e42422a02daf70da5029c5cb459c7": "d4ec8feac4b50acd60330af0f38c8668",
".git/objects/a8/7f60375e623506a6a2c0c2fbb234daa6c2926c": "3941eb10cf664e1770b261dc279396ea",
".git/objects/a8/de475ebc4477ed98b385ea82a18cc8475bc6cb": "ddba19d38579b95e94018b2eb5e50ed0",
".git/objects/a8/eb4627894b7461d006b03b8c07f693aade85df": "5ac7f1e9e444b4eb1cbc8e38023e385f",
".git/objects/a9/4e62f4d67fa37fc86ebe67809c3999ba580e85": "bf257354cc90675cdfe036d8732031ed",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ac/52dcc953fb6bce5d529500965f4149eea7a5d6": "a74c20fe33361a9d0ec6e85864d6df84",
".git/objects/b3/c43c628fe5f86672949d50b41238b2aa4c90ef": "2ee221d20a015e5f4ef9cda20c7eb3dc",
".git/objects/b4/c5e42e6961b78214617eac987fbd42335f3480": "587816d9cb463ef073aa668113f3d67a",
".git/objects/b5/27c609dd0c72804b7e08d6bd64855f6ab2b489": "f7e9982bae5f7a5574c912adc2c85ed1",
".git/objects/b5/9fd4881528c2aabbcb830d59f110539b410bf1": "0d35b14bfd4a295ee4a6eeb4625ef67c",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/7b144345fae193ce7f542abcca32ef23bfa296": "de38a84cce40a617279fc64d9ff47851",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bd/7fc0bec088ff8c6e7fb951674b78c4fbd36e90": "6d34b55bdd6eafba5e3f9c20fb08f64d",
".git/objects/c2/8d069515fdbdde61ce1cd6ae661c6ac5dfdbed": "04048494c42d5e88f7eb7ab45daa65bd",
".git/objects/c3/a3d3d3283e2313751080267db96ab2f65e7d0a": "473c5069b097732ecb8993aa4ae46815",
".git/objects/c6/183addca56eecaf1a2eb5587f391f3b9aadb0e": "efd5d80cb30d9c368e6e66decc796e3e",
".git/objects/c6/741cfe0874169bea43d1708f16c6d6a5c248c4": "73b9697e3b2f809a3de809d25389f9fc",
".git/objects/c9/fc00358e6dfbe44cc1d018c6bc387d61e0ba28": "bbf74037f4fce33cc7440c3b4402b984",
".git/objects/cc/45cc53884be3d1dec718d338bb4ae55fc91bd9": "c2d61bc3dedbb9f115066ddae9bebd30",
".git/objects/cc/8491065e9922278b0f79a9c2a493a99830a309": "abec01e3d22e5b5fc91920704a0cc8d8",
".git/objects/cd/0fd3031bf0138e204ea5c897ceb8f89287461c": "33a9a5820fb51d8903b5811a7bf75fcb",
".git/objects/ce/c64a36d89d30776ebccec12394a37624722596": "3248ef8c87fae0ba2fe7636d337ec6c8",
".git/objects/d2/6d8c37a9ba56b533f89c60578cb3ee32a47af5": "726b80f96c52845a20f84355b677c7f9",
".git/objects/d2/dc4487abc9a402a3ba651772b069d60f552bb0": "3f42c56795eab3481223b05df9b2f8df",
".git/objects/d4/6a8d573c148831c20b04499008c92b5c3da4bd": "c9cf14310aab178394e40990b7bd8866",
".git/objects/d4/da0cbffd41f29a66fcdc24a1fda5f7c8da40e6": "96690bd04f7e5fdabcd9abe47e9b9bf6",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d9/a8e8a3b650704476d879c7d5ed729eb02d9532": "6f1cea13d66bda19c2e59ca0b6eae59b",
".git/objects/db/ff276c53df6e6074445e2d2129d9a9c1ef98c5": "f0458e4766e19f05758049fa303f3799",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e7/f563bb3317d180f12ba92d1cb6a67a08410807": "4d83ea1370e145703081cdfae972ce73",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/ea/af8bf72d5ebd9351c525ef2adeeb927d3af1dc": "85a8866abe856d4337f3636f365cf893",
".git/objects/eb/05ca5b98b7c32a7fc58d9658332c2eba279aec": "fdbcb79de0ffc91d012ecb7df3e16562",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f0/b5445bedb96f3d5b9da7c87b5ced1635ab7d32": "c234f2a12a566529471d63ff0d87aa16",
".git/objects/f3/f7a62bdb924869656e7d765f6408fb7010c983": "512d778b0b1eeb3e5fed013aae0f4015",
".git/objects/f4/0407f7a4926e20cfa88c49a2f53ec44831eab8": "cbc4b64f10d27f9d43b168cccec70555",
".git/objects/f6/0985abf30efcb4cd5bb260944a329547c9548d": "4a7ef1ba31657398a76b8d9dedca26e8",
".git/objects/f8/6ebfe78f8ed3b63b8610d70b7d55d7d758d70f": "d406efb7a29ba470e33aba20625046cd",
".git/objects/fa/c05eea1497a7a58753645c8a1567f2a5b7a5ee": "8315eefb76af606f188e2adbc6041080",
".git/refs/heads/master": "cf1cf3cf5a57c568a35aa726783246e3",
".git/refs/remotes/origin/master": "cf1cf3cf5a57c568a35aa726783246e3",
"assets/AssetManifest.json": "e352ca545072df74c49656613bf0df75",
>>>>>>> 5b83840a8edb3264e07e63abe5708598eb0e71bf
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
<<<<<<< HEAD
"index.html": "8639f8f2dc7c3ad0ccdf1106a8242c91",
"/": "8639f8f2dc7c3ad0ccdf1106a8242c91",
"main.dart.js": "6770dd6a1c30401b781212bb35e34375",
=======
"index.html": "390b9bbfd3c6ccaa56831af2eca70e91",
"/": "390b9bbfd3c6ccaa56831af2eca70e91",
"main.dart.js": "c606f58236e1bc823b066a72d540a5e7",
>>>>>>> 5b83840a8edb3264e07e63abe5708598eb0e71bf
"manifest.json": "6be665e2f39fe57f7063ddede928ab22",
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
