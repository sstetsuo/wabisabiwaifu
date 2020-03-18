const generateRandomNum = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
const generateRandomFrom = (arr) => {
  const val = arr[generateRandomNum(0, arr.length - 1)];
  return val;
};

// Hair: Green, Twin Drills w/ Long Sidelocks
// Eyes: Green
// Body Type: Tall
// Bust Size: F
// Personality: Childish
// Clothes: Hoodie/Jacket w/ Connected Gloves
// Extras: Choker
// Name: Ayane

const names = [
  'Lisette',
  'Cecelia',
  'Samantha',
  'Helen',
  'Nicole',
  'Colette',
  'Cindy',
  'Mary',
  'Remi',
  'Alix',
  'Ana',
  'Daphne',
  'Parker',
  'Betty',
  'Maia',
  'Eve',
  'Genevieve',
  'Ada',
  'Hunter',
  'Stella',
  'Harlow',
  'Brynn',
  'Quinn',
  'Violet',
  'Yvette',
  'Yvonne',
  'Rachel',
  'Maddie',
  'Sarah',
  'Min',
  'Bella',
  'Rei',
  'Joi',
  'Jen',
  'January',
  'Summer',
  'Winter',
  'Nix',
  'Tilly',
  'Adrienne',
  'Aimee',
  'Amelie',
  'Desiree',
  'Demi',
  'Delphine',
  'Eliane',
  'Elise',
  'Esme',
  'Florence',
  'Gigi',
  'Fio',
  'Giselle',
  'Ines',
  'Jolie',
  'Lauren',
  'Laurette',
  'Holly',
  'Lorraine',
  'Lucille',
  'Marcy',
  'Marceline',
  'Marie',
  'Michelle',
  'Odette',
  'Olivia',
  'Paulina',
  'Penelope',
  'Rhodes',
  'Rochelle',
  'Aubrey',
  'Avery',
  'Blair',
  'Bailey',
  'Bryce',
  'Cody',
  'Cameron',
  'Taylor',
  'Toni',
  'Shelby',
  'Skye',
  'Sydney',
  'Riley',
  'Ridley',
  'Samus',
  'Robin',
  'Jill',
  'Paris',
  'Morgan',
  'Julian',
  'Jordan',
];

const hairColor = [
  'white',
  'platinum',
  'warm gray',
  'cool gray',
  'ash gray',
  'blonde',
  'strawberry blonde',
  'dirty blonde',
  'auburn',
  'red',
  'light brown',
  'brunette',
  'dark brown',
  'pink',
  'lime green',
  'dark green',
  'pale blue',
  'baby blue',
  'purple',
  'violet',
  'bright yellow',
  'black',
  'warm black',
  'jet black',
];

const hairstyleFront = [
  'side swept bangs',
  'face framing bangs',
  'baby bangs',
  'choppy, tousled bangs',
  'lash skimming bangs',
  'curtain bangs',
  'long, piecy bangs',
  'curly bangs',
  'faux bangs',
  'thick mid-length bangs',
  'long airy bangs',
  'short bangs',
  'asymmetrical bangs',
];

const hairstyleBack = [
  'tight bun',
  'loose bun',
  'deux mandu',
  'a french braid',
  'a long bob',
  'a short bob',
  'shoulder length hair',
  'waist length hair',
  'a short ponytail',
  'a long ponytail',
  'long twin ponytails',
  'a single long braid',
  'fun curls',
  'a princess braid',
];

const skintone = [
  'Porcelain',
  'Pale',
  'Olive',
  'Rosy',
  'Sunkissed',
  'Fair',
  'Golden',
  'Bronzed',
  'Cocoa',
];

const cupsize = [
  'AA', 'AA', 'AA', 'AA',
  'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A',
  'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B',
  'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C',
  'D', 'D', 'D',
  'E', 'E',
  'F',
  'G',
];

const attribute = [
  'nun',
  'virgin',
  'office lady',
  'researcher',
  'succubus',
  'angel',
  'gamer',
  'cosplayer',
  'pilot',
  'sailor',
  'replicant',
  'showgirl',
  'camgirl',
  'youtuber',
  'streamer',
  'programmer',
  'hacker',
  'assassin',
  'soldier',
  'fortune teller',
  'witch',
  'escort',
  'pharmacist',
  'model',
  'supermodel',
  'fashion designer',
  'entrepreneur',
  'police officer',
  'barista',
  'bartender',
  'hostess',
  'waitress',
  'actress',
  'singer',
  'astronaut',
  'racer',
  'mechanic',
  'painter',
  'sculptor',
  'working girl',
  'voice actress',
  'nurse',
  'doctor',
  'captain',
  'hologram',
  'AI',
  'dominatrix',
  'sugar baby',
  'gold digger',
  'perpetual catfish',
  'perpetual adulterer',
  'single mom',
  'widow',
  'schoolgirl',
  'step-mom',
  'step-sister',
  'cook',
  'baker',
  'teacher',
  'lingerie model',
  'pornstar',
  'neko',
  'furry',
  'catgirl',
  'vampire',
  'figment of your imagination',
  'idol',
  'miss universe',
  'trap',
  'fishy trap',
  'alien babe',
  'ghost',
  'murderer',
  'sex doll',
  'rich girl',
  'desperate housewife',
  'magical girl',
];

const disposition = [
  'an adorable',
  'a freaky',
  'a strict',
  'a teasing',
  'a tsundere',
  'a fraile',
  'a vicious',
  'a domineering',
  'a manipulative',
  'a naturally cute',
  'an irresistibly cute',
  'a drop dead gorgeous',
  'a needy',
  'a clingy',
  'an optimistic',
  'a manic pixie dreamy',
  'a creative',
  'a kinky',
  'a sleazy',
  'an easy',
  'a food-driven',
  'an ambitious',
  'a prodigy',
  'a genius',
  'a proud',
  'a submissive',
  'a serious',
  'a gothic',
  'a ditsy',
  'a fit',
  'a curvy',
  'a psychotic',
  'a controlling',
  'a cheating',
  'a smothering',
  'a wifey',
  'a laid back',
  'a constantly high',
  'a constantly drunk',
  'a horny',
  'an asexual',
  'a bisexual',
  'a polyamorous',
  'a super religious',
  'a dicc succing',
  'a textbook',
  'an inexperienced',
  'a flirty',
];

const vice = [
  'who also smokes cigarettes',
  'who also drinks heavily',
  'who also smokes recreationaly',
  'who also loves cigars',
  'who\'s also masochistic',
  'who\'s also manic depressive',
  'who\'s also bipolar',
  'who consumes a lot of porn',
  'who\'s also disloyal',
  'who\'s also murderous',
  'who tends to resort to blackmailing',
  'who\'s also short tempered',
  'who can\'t cook',
  'who\'s also anorexic',
  'who\'s also blind',
  'who\'s also deaf',
  'who\'s very expensive',
  'who\'s very cheap',
  'who\'s quite hopeless',
  'who sweats a lot',
  'who\'s also a perfectionist',
  'who has an OCD',
  'who\'s also a sex maniac',
  'who\'s very blood thirsty',
  'who\'s very slow',
  'who\'s also a prude',
  'who\'s quite a screamer',
  'who\'s quite a squirter',
  'who\'s very easily jealous',
  'who\'s very untrustworthy',
  'who\'s got a lot of trust issues',
  'who\'s got a lot of daddy issues',
  'who\'s got a lot of mommy issues',
  'who\'s also a nazi',
  'who tends to resort to self-harming',
  'who\'s very bulemic',
  'who tends to resort to drug abuse',
  'who\'s often hospital bound',
  'who\'s also a hypochondriac',
  'who\'s quite xenophobic',
  'who\'s quite soul sucking',
  'who\'s quite flatulent',
  'who\'s often distracted',
  'who\'s very weak',
  'who\'s often angry',
  'who\'s often resentful',
  'who\'s often shameful',
  'who\'s also narcoleptic',
  'who\'s also an insomniac',
  'who\'s quite obscene',
  'who\'s often gambling',
  'who\'s also a speed demon',
  'who\'s also suicidal',
  'who\'s also pierced',
  'who\'s also super tattooed',
  'who\'s also a racist',
  'who\'s also a SJW',
  'who\'s also loud',
  'who hates videos games',
  'who hates anime',
  'who doesn\'t want children',
  'who\'s terminally ill',
  'who\'s also a gun nut',
];

const kink = [
  'a cock-hungry',
  'a cum-hungry',
  'a bondage-loving',
];

module.exports = {
  names,
  hairColor,
  hairstyleFront,
  hairstyleBack,
  skintone,
  cupsize,
  attribute,
  disposition,
  vice,
  generateRandomNum,
  generateRandomFrom,
};
