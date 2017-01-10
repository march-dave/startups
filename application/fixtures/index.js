import { flatten } from 'underscore';

export const SolidColors = [
  'red',
  'deepPurple',
  'indigo',
  'teal',
  'orange',
  'blueGrey',
  'purple',
  'green',
];

// export const BackgroundImage = 'https://s3-us-west-2.amazonaws.com/assembliesapp/welcome%402x.png';
const BackgroundImage = 'https://res.cloudinary.com/drrwovgv6/image/upload/v1483894228/BGimage_sw81qa.png';

export const Headers = {
  'Content-Type': 'application/json'
};

export const DefaultAvatar = 'https://confluence.slac.stanford.edu/s/en_GB/5996/4a6343ec7ed8542179d6c78fa7f87c01f81da016.20/_/images/icons/profilepics/default.png';
export const ReactLogo = 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/React.js_logo.svg/2000px-React.js_logo.svg.png';
export const Technologies = [
  'JavaScript',
  'Python',
  'Java',
  'Product Management',
  'Business Development',
  'Ruby',
  'Haskell',
  'Hadoop',
  'Machine Learning',
  'Natural Language Processing',
  'Elm',
  'Redux',
  'React Native'
];

export const FakeUsers = [
  { id: 0, firstName: 'Dave', lastName: 'Lee', avatar: 'https://avatars3.githubusercontent.com/u/7968378?v=3&u=3a5aa3780108d707a49b18c4d77e90b8777f4bd9&s=400' },
  { id: 1, firstName: 'Vincent', lastName: 'Occhiogrosso', avatar: 'https://avatars2.githubusercontent.com/u/16623151?v=3&s=400' },
  { id: 2, firstName: 'Echo', lastName: 'Liang', avatar: 'https://res.cloudinary.com/drrwovgv6/image/upload/v1483905399/2017-01-08_yxg6ni.jpg'},
  { id: 3, firstName: 'Jay', lastName: 'Hu', avatar: 'https://avatars3.githubusercontent.com/u/1398690?v=3&s=400'}
];

export const FakeMessages = [
  'Hello world',
  'How are you?',
  'Yo',
  "Neutra vegan everyday carry shoreditch. Man braid +1 mixtape, polaroid yr gentrify chartreuse 3 wolf moon. Photo booth crucifix shoreditch, kogi cornhole offal polaroid sustainable. Food truck sartorial selfies, blog typewriter put a bird on it taxidermy tattooed. Chillwave lumbersexual hashtag kinfolk sustainable four dollar toast. Stumptown sustainable blue bottle man bun, tofu shabby chic occupy kinfolk man braid artisan poutine. Before they sold out sustainable lumbersexual, man braid you probably haven't heard of them vice actually single-origin coffee kitsch street art biodiesel.",
  "3 wolf moon offal meditation, gluten-free neutra post-ironic literally asymmetrical thundercats put a bird on it food truck. Gastropub kinfolk synth craft beer whatever pinterest, waistcoat etsy banh mi fanny pack authentic locavore. Kombucha meggings kickstarter gentrify, narwhal hella photo booth. Wayfarers man bun offal keytar, vegan poutine mlkshk banh mi. Tattooed direct trade hella organic, affogato humblebrag yr small batch stumptown bitters flannel crucifix typewriter intelligentsia. Pork belly dreamcatcher intelligentsia, authentic venmo seitan gentrify yr vinyl scenester pour-over chambray portland selfies. Meditation church-key hashtag brooklyn, leggings keffiyeh cardigan shoreditch selfies beard.",
  "Put a bird on it four loko keffiyeh ramps meggings, bushwick sartorial kogi. Thundercats food truck kombucha, blue bottle franzen butcher organic bushwick green juice viral tilde banjo cold-pressed. Venmo umami before they sold out yr, blog tilde kogi. Master cleanse authentic sartorial cliche, knausgaard tacos selvage lo-fi 8-bit iPhone VHS YOLO. Hella hoodie venmo vice crucifix waistcoat. Food truck leggings fashion axe church-key pour-over, cliche heirloom sustainable. Truffaut four dollar toast dreamcatcher, quinoa butcher authentic stumptown.",
  "Brunch flannel four loko kombucha, skateboard blue bottle kale chips truffaut pour-over taxidermy. Four dollar toast readymade before they sold out, paleo seitan scenester gochujang kogi distillery. Salvia vice tilde craft beer, DIY selvage tofu freegan ugh franzen post-ironic. Photo booth drinking vinegar normcore cronut, yuccie cray neutra stumptown before they sold out chambray YOLO tacos. Cronut pork belly godard disrupt bespoke. Kogi deep v aesthetic slow-carb synth heirloom, pug schlitz fanny pack blue bottle marfa yr lumbersexual. Listicle retro celiac chambray street art, synth bitters shoreditch affogato tacos truffaut viral.",
  "Gochujang chartreuse four dollar toast pour-over viral, heirloom deep v chia typewriter austin kickstarter mustache. Actually trust fund cornhole, cronut narwhal cred wolf. Listicle migas next level narwhal scenester, franzen portland locavore craft beer asymmetrical. Normcore waistcoat put a bird on it helvetica, schlitz retro truffaut artisan hammock skateboard. Fap sartorial yr hashtag street art blue bottle, semiotics salvia tumblr twee shabby chic. Austin master cleanse swag, hoodie ugh taxidermy chambray shabby chic meggings. Chillwave austin irony forage godard, iPhone 8-bit.",
  "Blue bottle waistcoat irony, chambray brunch authentic lomo kale chips franzen selvage godard gluten-free schlitz sartorial green juice. Gochujang knausgaard aesthetic, yr cronut DIY sriracha you probably haven't heard of them raw denim locavore banh mi gentrify small batch craft beer schlitz. Chicharrones VHS pour-over, gluten-free hashtag 8-bit sustainable slow-carb butcher kinfolk fixie bitters meggings chillwave fanny pack. Trust fund banjo cliche marfa, leggings lo-fi shoreditch gluten-free chicharrones pop-up craft beer. Kale chips health goth photo booth, bushwick letterpress cold-pressed next level tattooed chicharrones vegan gluten-free gentrify. Health goth cardigan forage everyday carry kogi humblebrag jean shorts. Beard typewriter swag photo booth, deep v 8-bit tattooed pug selfies plaid raw denim squid.",
  "Ugh trust fund hammock, organic schlitz pitchfork flannel. Church-key stumptown kale chips readymade swag, polaroid man bun chia brooklyn aesthetic pickled. Echo park four loko pitchfork meggings semiotics lo-fi jean shorts, aesthetic swag paleo chambray intelligentsia. Wolf helvetica ethical meh small batch offal. Tofu pork belly yr marfa, swag pug kitsch chicharrones selvage sustainable. Cold-pressed bitters crucifix, pabst letterpress craft beer sriracha mlkshk selfies mumblecore. Ethical kitsch flexitarian PBR&B hashtag put a bird on it franzen.",
  "Chicharrones chia schlitz, next level farm-to-table stumptown roof party semiotics. Put a bird on it pickled tumblr, selfies beard fixie pop-up banh mi tilde biodiesel austin hammock ugh. Four loko chia pug, pabst crucifix artisan drinking vinegar umami XOXO kombucha. Small batch photo booth gastropub pour-over cold-pressed thundercats, chartreuse DIY kombucha fap actually master cleanse. Gastropub etsy hashtag everyday carry 90's, tote bag 8-bit. Pinterest PBR&B slow-carb, tumblr quinoa man bun wayfarers bitters gentrify offal meditation. Lumbersexual kombucha mlkshk bicycle rights iPhone.",
  "You probably haven't heard of them heirloom pour-over, PBR&B yr XOXO tofu fashion axe chicharrones gentrify",
  "Tofu asymmetrical etsy, pabst hoodie beard bicycle rights pug.",
  "Meggings venmo truffaut, keytar +1 kale chips skateboard selfies taxidermy sartorial cronut mustache knausgaard church-key.",
  "Stumptown actually keffiyeh, man braid aesthetic food truck pour-over four dollar toast flexitarian before they sold out ethical.",
  "Hammock disrupt pabst, brooklyn shabby chic 90's cray.",
  "Ramps ennui photo booth master cleanse, 3 wolf moon bicycle rights listicle polaroid PBR&B hoodie. Pug cray stumptown fap VHS twee.",
  "IPhone disrupt chicharrones letterpress cray helvetica.",
  "Green juice put a bird on it crucifix, kitsch waistcoat disrupt skateboard. Lo-fi fixie wayfarers, shoreditch sartorial plaid cardigan heirloom meggings.",
  "Health goth offal yuccie microdosing, vice cardigan banjo lo-fi tofu.",
  "Etsy tousled pop-up, lomo 8-bit craft beer intelligentsia sartorial bespoke hoodie kinfolk.",
];

export const currentUser = {
  firstName: 'Example',
  lastName: 'Account',
  avatar: ReactLogo,
  technologies: ['JavaScript', 'React Native'],
  username: 'example@example.com',
  id: 6,
  location : {
  	"lat": 40.7127837,
  	"lng": -74.0059413,
  	"city": {
  		"long_name": "New York",
  		"short_name": "New York",
  		"types": [
  			"locality",
  			"political"
  		]
  	},
  	"state": {
  		"long_name": "New York",
  		"short_name": "NY",
  		"types": [
  			"administrative_area_level_1",
  			"political"
  		]
  	},
  	"formattedAddress": "New York, NY, USA"
  }
};

function randomDate(){
  let d1 = new Date().valueOf();
  let d2 = new Date(d1 - Math.floor(Math.random()*30)*24*60*60*1000);
  return d2.valueOf();
};

function randomEventDate(){
  let d1 = new Date().valueOf();
  let d2 = new Date(d1 + Math.floor(Math.random()*30)*24*3600*1000);
  return d2.valueOf();
}

function randomMessage(messages){
  let idx = Math.floor(Math.random()*messages.length);
  return messages[idx];
}

export const FakeConversations = FakeUsers.map((user, idx) => ({
  lastMessageText: randomMessage(FakeMessages),
  lastMessageDate: randomDate(),
  user1Id: user.id,
  user2Id: currentUser.id,
  id: idx
}));

export const FakeNotifications = [
  {createdAt: randomDate().valueOf(), message: 'Report from Kanye', type: 'Starbucks', seen: false,},
  {createdAt: randomDate().valueOf(), message: 'information', type: 'McDonalds', seen: false,},
  {createdAt: randomDate().valueOf(), message: 'information', type: 'Wendys', seen: false,},
  {createdAt: randomDate().valueOf(), message: 'information from Nick', type: 'High Line Bathroom at Gansevoort St', seen: true,},
  {createdAt: randomDate().valueOf(), message: 'information', type: 'Home Depot', seen: false,},
]


export const upcomingEvent = {
  start: randomEventDate(),
  end: randomEventDate(),
  name: 'Public w List',
  description: 'React Native enables you to build world-class application experiences on native platforms using a consistent developer experience based on JavaScript and React. The focus of React Native is on developer efficiency across all the platforms you care about — learn once, write anywhere. Facebook uses React Native in multiple production apps and will continue investing in React Native.',
  going: [],
  location : {
    "lat": -27.4679542,
      "lng": 153.0063908,
    "city": {
      "long_name": "Milton",
      "short_name": "Milton",
      "types": [
        "locality",
        "political"
      ]
    },
    "state": {
      "long_name": "Queensland",
      "short_name": "QLD",
      "types": [
                      "administrative_area_level_1",
                      "political"
      ]
    },
    "formattedAddressess": "Black St & Paten St, Milton QLD 4064, Australia"
  },
  capacity: 100,
  groupId: 1,
};






export const ImageOptions = {
  title: 'Select Avatar',
  cancelButtonTitle: 'Cancel',
  takePhotoButtonTitle: 'Take Photo...',
  chooseFromLibraryButtonTitle: 'Choose from Library...',
  cameraType: 'back',
  mediaType: 'photo',
  videoQuality: 'high',
  maxWidth: 200,
  maxHeight: 200,
  aspectX: 1,
  aspectY: 1,
  quality: 1,
  angle: 0,
  allowsEditing: false,
  noData: false,
  storageOptions: {
    skipBackup: true,
    path: 'images'
  }
};
