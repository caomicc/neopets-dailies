export interface Activity extends Record<string, any> {
  title: string;
  description: string;
  src: string;
  href: string;
  tags?: string[];
  needsFlash?: boolean;
  frequency?: string;
  favorite?: boolean;
}
export interface Activities extends Record<string, any> {
  title: string;
  description?: string;
  items: Activity[];
}

export const activities: Activities[] =
  [
    {
      title: 'Guides',
      icon: {
        src: 'https://images.neopets.com/items/boo_xweetok_howtofly.gif',
      },
      items: [
        {
          title: 'Just Food Club Bets',
          description: 'Food Club bets aggregated from Reddit',
          src: 'https://images.neopets.com/items/foo_speckled_apple.gif',
          href: 'https://justfoodclub.xyz/',
        },
        {
          title: '[Guide] Easy Trophies',
          description: 'A guide for easier than normal trophies',
          src: 'https://images.neopets.com/items/boo_wildpetpets_guideto.gif',
          href: 'https://clraik.com/forum/showthread.php?73913-GUIDE-Easy-Trophies'
        },
        {
          title: '[Guide] Annual Avatars',
          description: 'For the full year',
          src: 'https://images.neopets.com/items/boo_wildpetpets_guideto.gif',
          href: 'https://clraik.com/forum/showthread.php?72794-GUIDE-Annual-Avatars'
        },
        {
          title: '[Guide] Speed Training',
          description: 'Optimize battledome stats',
          src: 'https://images.neopets.com/items/boo_wildpetpets_guideto.gif',
          href: 'https://clraik.com/forum/showthread.php?72815-GUIDE-Speed-Training-Your-Neopet'
        },
        {
          title: '[Guide] Plushie Tycoon',
          description: 'Monthly guide',
          src: 'https://images.neopets.com/items/boo_wildpetpets_guideto.gif',
          href: 'https://clraik.com/forum/showthread.php?72665-GUIDE-Plushie-Tycoon-Easy-Avatar-Gold-Trophy'
        },
        {
          title: '[Guide] Coltzan\'s Shrine',
          description: 'Manipulate the odds',
          src: 'https://images.neopets.com/items/boo_wildpetpets_guideto.gif',
          href: 'https://clraik.com/forum/showthread.php?85881-GUIDE-Coltzan-s-Shrine'
        },
        {
          title: '[Guide] Mysterious Symol Hole',
          description: 'Avatar guide',
          src: 'https://images.neopets.com/items/boo_wildpetpets_guideto.gif',
          href: 'https://clraik.com/forum/showthread.php?86479-GUIDE-Mysterious-Symol-Hole'
        },
        {
          title: '[Guide] Jhudora\'s and Illusen\'s Quests',
          description: 'Gold Trophy Easy!',
          src: 'https://images.neopets.com/items/boo_wildpetpets_guideto.gif',
          href: 'https://clraik.com/forum/showthread.php?69491-GUIDE-How-to-get-Jhudora-s-Illusen-s-Quest-Golden-Trophy-Easy-!'
        },
        {
          title: '[Guide] Usuki Frenzy',
          description: 'Trophy Quick Run',
          src: 'https://images.neopets.com/items/boo_wildpetpets_guideto.gif',
          href: 'https://clraik.com/forum/showthread.php?84158-Guide-Usuki-Frenzy-Trophy-Quick-Run'
        },
        {
          title: 'High Score Table Quicklinks',
          description: 'To view needed high scores to place',
          src: 'https://images.neopets.com/items/mall_fortcookie_games.gif',
          href: 'https://clraik.com/forum/showthread.php?75710-Gold-Trophy-Image-Guide'
        },
        {
          title: '[Guide] NC Retired Rerelease Capsules',
          description: 'Guaranteed two prizes',
          src: 'https://images.neopets.com/items/boo_wildpetpets_guideto.gif',
          href: 'https://clraik.com/forum/showthread.php?70488-Guide-to-NC-Retired-Rerelease-Capsules-Guaranteed-2-prizes'
        },
        {
          title: '[Guide] Advert Attack trophy',
          description: 'Semi legit guide for getting the trophy',
          src: 'https://images.neopets.com/items/boo_wildpetpets_guideto.gif',
          href: 'https://clraik.com/forum/showthread.php?68029-GUIDE-Advert-Attack-trophy-avatar-semi-legit-guide'
        },
        {
          title: '[Guide] Kad Feeding',
          description: 'Kad Feeding is easier than you think!',
          src: 'https://images.neopets.com/items/boo_wildpetpets_guideto.gif',
          href: 'https://www.reddit.com/r/neopets/comments/5uxzk9/kad_feeding_is_easier_than_you_think_your/'
        },
        {
          title: '[Guide] Kad Feeding',
          description: 'Extremely Beginner, Extremely Abridged Kadoatie Feeding',
          src: 'https://images.neopets.com/items/boo_wildpetpets_guideto.gif',
          href: 'https://www.reddit.com/r/neopets/comments/124udv0/extremely_beginner_extremely_abridged_kadoatie/'
        },
        {
          title: '[Guide] The Money Tree - Generous NC Mall Shopper',
          description: 'Bot shopper',
          src: 'https://images.neopets.com/items/boo_wildpetpets_guideto.gif',
          href: 'https://clraik.com/forum/showthread.php?67944-List-Guide-The-Money-Tree-Generous-NC-Mall-Shopper'
        },
        {
          title: '[Guide] Top Gamer Avatar',
          description: 'List of games you can use to get the avatar',
          src: 'https://images.neopets.com/items/boo_wildpetpets_guideto.gif',
          href: 'https://clraik.com/forum/showthread.php?69991-GUIDE-Top-Gamer-Avatar'
        },
        {
          title: '[Guide] Imposter Apple Avatar (Apple Bobbing)',
          description: 'Empty your inventory first!',
          src: 'https://images.neopets.com/items/boo_wildpetpets_guideto.gif',
          href: 'https://clraik.com/forum/showthread.php?73325-GUIDE-Imposter-Apple-Avatar-(Apple-Bobbing)'
        },
        {
          title: '[Guide] Contest Trophies',
          description: 'Easy contest trophies and how to place',
          src: 'https://images.neopets.com/items/boo_wildpetpets_guideto.gif',
          href: 'https://clraik.com/forum/showthread.php?75056-GUIDE-Contest-Trophies'
        },
        {
          title: '[Guide] Cheeseroller Cheese Analysis',
          description: 'Best cheese guide',
          src: 'https://images.neopets.com/items/boo_wildpetpets_guideto.gif',
          href: 'https://clraik.com/forum/showthread.php?74896-GUIDE-Cheeseroller-Cheese-Analysis'
        },
        {
          title: '[Guide] Neggsweeper Trophy',
          description: 'How to score in Neggsweeper',
          src: 'https://images.neopets.com/items/boo_wildpetpets_guideto.gif',
          href: 'https://clraik.com/forum/showthread.php?75328-Neggsweeper-Basic-Trophy-Guide'
        },
        {
          title: '[Guide] ShapeShifter Avatar and Trophy',
          description: 'Needs a computer',
          src: 'https://images.neopets.com/items/boo_wildpetpets_guideto.gif',
          href: 'https://clraik.com/forum/showthread.php?26008-Semi-Legit-Easy-ShapeShifter-Avatar-and-Trophy'
        },
        {
          title: '[Guide] Uses of Intelligence and Gaining It',
          description: 'Why to boost intelligence',
          src: 'https://images.neopets.com/items/boo_wildpetpets_guideto.gif',
          href: 'https://clraik.com/forum/showthread.php?73572-GUIDE-Uses-of-Intelligence-and-Gaining-It'
        },
        {
          title: '[Guide] Coconut Shy Avatar',
          description: 'It\'s all random and rigged',
          src: 'https://images.neopets.com/items/boo_wildpetpets_guideto.gif',
          href: 'https://clraik.com/forum/showthread.php?72694-GUIDE-Coconut-Shy-Avatar'
        },
        {
          title: '[Guide] Mystery Island Kitchen Quest',
          description: '',
          src: 'https://images.neopets.com/items/boo_wildpetpets_guideto.gif',
          href: 'https://clraik.com/forum/showthread.php?85386-GUIDE-Mystery-Island-Kitchen-Quest-Why-and-When-Should-I-Start'
        }
      ],
    },
    {
      title: 'Freebies',
      icon: {
        src: 'https://images.neopets.com/premium/portal/images/nptotal-icon.png',
      },
      items: [
        {
          title: 'Advent Calendar',
          description: 'Free food for the homeless',
          src: 'https://images.neopets.com/items/gift_pouch_red.gif',
          href: 'https://www.neopets.com/winter/adventcalendar.phtml',
          frequency: 'once a day',
          favorite: true,
        },
        {
          title: 'Anchor Management',
          description: 'Free food for the homeless',
          src: 'https://images.neopets.com/items/fur_pirate_anchor.gif',
          href: 'http://www.neopets.com/pirates/anchormanagement.phtml',
          frequency: 'once a day',
        },
        {
          title: 'Apple Bobbing',
          description: 'Free food for the homeless',
          src: 'https://images.neopets.com/items/med_applecore.gif',
          href: 'http://www.neopets.com/halloween/applebobbing.phtml?',
          frequency: 'once a day',
        },
        {
          title: 'Bank Interest',
          description: 'Free food for the homeless',
          src: 'https://images.neopets.com/items/toy_bankmanager_skeith.gif',
          href: 'http://www.neopets.com/bank.phtml',
          frequency: 'once a day',
          favorite: true,
        },
        {
          title: 'Coltzan\'s Shrine',
          description: 'Free food for the homeless',
          src: 'https://images.neopets.com/items/plu_lupe_coltzan.gif',
          href: 'http://www.neopets.com/desert/shrine.phtml',
          frequency: 'once every 13 hours; resets at midnight',
          favorite: true,
        },
        {
          title: 'Deserted Tomb',
          description: 'Free food for the homeless',
          src: 'https://images.neopets.com/items/plu_halloween_lizark.gif',
          href: 'http://www.neopets.com/worlds/geraptiku/tomb.phtml',
          frequency: 'once a day',
        },
        {
          title: 'Forgotten Shore',
          description: 'Free food for the homeless',
          src: 'https://images.neopets.com/items/plu_blumaroopirate.gif',
          href: 'http://www.neopets.com/pirates/forgottenshore.phtml',
          frequency: 'once a day',
          favorite: true,
        },
        {
          title: 'Fruit Machine',
          description: 'Free food for the homeless',
          src: 'https://images.neopets.com/items/plu_fruitmachine_kau.gif',
          href: 'http://www.neopets.com/desert/fruitmachine.phtml',
          frequency: 'once a day',
          favorite: true,
        },
        {
          title: 'Giant Jelly',
          description: 'Giant Jelly',
          src: 'https://images.neopets.com/items/gar_mini_giantjelly.gif',
          href: 'http://www.neopets.com/jelly/jelly.phtml',
          favorite: true,
          frequency: 'once a day',
        },
        {
          title: 'Giant Omelette',
          description: 'Free food for the homeless',
          src: 'https://images.neopets.com/items/stamp_tyrannia_omelette.gif',
          href: 'http://www.neopets.com/prehistoric/omelette.phtml?type=get_omelette',
          favorite: true,
          frequency: 'once a day',
        },
        {
          title: 'Grave Danger',
          description: 'Free food for the homeless',
          src: 'https://images.neopets.com/items/sta_gd_grave_danger.gif',
          href: 'http://www.neopets.com/halloween/gravedanger/index.phtml',
          frequency: 'random',
        },
        {
          title: 'Grumpy Old King',
          description: 'Free food for the homeless',
          src: 'https://images.neopets.com/items/toy_plushie_skarl.gif',
          href: 'http://www.neopets.com/medieval/grumpyking.phtml',
          frequency: 'twice a day'
        },
        {
          title: 'Healing Springs',
          description: 'Free food for the homeless',
          src: 'https://images.neopets.com/items/plu_bori_faerie.gif',
          href: 'http://www.neopets.com/faerieland/springs.phtml',
          favorite: true,
          frequency: 'once every 30 minutes'
        },
        {
          title: 'Kiko Pop',
          description: 'Free food for the homeless',
          src: 'https://images.neopets.com/items/kik_cook_treats.gif',
          href: 'http://www.neopets.com/worlds/kiko/kpop/',
          frequency: 'once a day',
        },
        {
          title: 'Lunar Temple',
          description: 'Free food for the homeless',
          src: 'https://images.neopets.com/items/toy_gnorbu_blue.gif',
          href: 'http://www.neopets.com/shenkuu/lunar/',
          frequency: 'once a day'
        },

        {
          title: 'Monthly Freebies',
          description: 'Free food for the homeless',
          src: 'https://images.neopets.com/items/boo_desk_calendar.gif',
          href: 'http://www.neopets.com/freebies/index.phtml',
          frequency: 'once a month',
        },
        {
          title: 'Movie Central',
          description: 'Free food for the homeless',
          src: 'https://images.neopets.com/items/mall_hh_candypopcorn.gif',
          href: 'http://www.neopets.com/moviecentral/index.phtml',
          frequency: 'once a day',
        },
        {
          title: 'Mysterious Negg Cave',
          description: 'Free food for the homeless',
          src: 'https://images.neopets.com/items/foo_cybunny_neggrain.gif',
          href: 'http://www.neopets.com/shenkuu/neggcave/',
          frequency: 'once a day',
        },
        {
          title: 'Obsidian Quarry',
          description: 'Free food for the homeless',
          src: 'https://items.jellyneo.net/assets/imgs/items/35706.gif',
          href: 'http://www.neopets.com/magma/quarry.phtml',
          frequency: 'once a day',
        },
        {
          title: 'Rich Slorg',
          description: 'Free food for the homeless',
          src: 'https://images.neopets.com/items/toy_slorgball.gif',
          href: 'http://www.neopets.com/shop_of_offers.phtml?slorg_payout=yes',
          frequency: 'once a day',
        },
        {
          title: 'Soup Kitchen',
          description: 'Free food for the homeless',
          src: 'https://images.neopets.com/items/foo_faerie_soupfaeriesoup.gif',
          href: 'http://www.neopets.com/soupkitchen.phtml',
          frequency: 'anytime',
        },
        {
          title: 'Mysterious Symol Hole',
          description: 'Free food for the homeless',
          src: 'https://images.neopets.com/items/plu_symol_giant_oversized.gif',
          href: 'http://www.neopets.com/medieval/symolhole.phtml',
          frequency: 'once a day'
        },
        {
          title: 'TDMBGPOP',
          description: 'Free food for the homeless',
          src: 'https://images.neopets.com/items/plu_TDMBGPOP_replica.gif',
          href: 'http://www.neopets.com/faerieland/tdmbgpop.phtml',
          favorite: true,
          frequency: 'once a day'
        },
        {
          title: 'Tombola',
          description: 'Free food for the homeless',
          src: 'https://images.neopets.com/items/tiki_keychain.gif',
          href: 'http://www.neopets.com/island/tombola.phtml',
          favorite: true,
          frequency: 'once a day'
        },
        {
          title: 'Trudy\'s Surprise',
          description: 'Free food for the homeless',
          src: 'https://images.neopets.com/items/boo_defender_mynci.gif',
          href: 'https://www.neopets.com/trudys_surprise.phtml',
          favorite: true,
          frequency: 'once a day'
        },
        {
          title: 'Wise Old King',
          description: 'Free food for the homeless',
          src: 'https://images.neopets.com/items/plu_skeith_hagan.gif',
          href: 'http://www.neopets.com/medieval/wiseking.phtml',
          frequency: 'once a day'
        },
        {
          title: 'Ye Olde Fishing Vortex',
          description: 'Free food for the homeless',
          src: 'https://images.neopets.com/items/plu_magic_lesserspottedfish.gif',
          href: 'http://www.neopets.com/water/fishing.phtml',
          favorite: true,
          frequency: 'random'
        },
      ]
    },
    {
      title: 'Lucky',
      icon: {
        src: 'https://images.neopets.com/themes/h5/basic/images/shopwizard-icon.png',
      },
      items: [
        {
          title: 'Almost Abandoned Attic',
          description: 'Free food for the homeless',
          src: 'https://images.neopets.com/items/plu_aisha_ghost.gif',
          href: 'http://www.neopets.com/halloween/garage.phtml',
          frequency: 'anytime'
        },
        {
          title: 'The Money Tree',
          description: 'Free food for the homeless',
          src: 'https://images.neopets.com/items/mini_moneytree.gif',
          href: 'http://www.neopets.com/donations.phtml',
          favorite: true,
          frequency: 'anytime'
        },
        {
          title: 'Second Hand Shoppe',
          description: 'Free food for the homeless',
          src: 'https://images.neopets.com/items/newbie_potatosack.gif',
          href: 'http://www.neopets.com/thriftshoppe/index.phtml',
          favorite: true,
          frequency: 'anytime'
        },
        {
          title: 'Rubbish Dump',
          description: 'Free food for the homeless',
          src: 'https://images.neopets.com/items/med_booby_6.gif',
          href: 'http://www.neopets.com/medieval/rubbishdump.phtml',
          favorite: true,
          frequency: 'anytime'
        },
      ]
    },
    {
      title: 'Plots',
      icon: {
        src: 'https://images.neopets.com/themes/h5/altadorcup/images/premium-icon.png',
      },
      items: [
        {
          title: 'Altador Plot Prizes',
          description: 'Only if you completed the Altador plot',
          src: 'https://images.neopets.com/altador/altador_trophy.gif',
          href: 'http://www.neopets.com/altador/council.phtml',
          frequency: 'once a day',
        },
        {
          title: 'Obelisk Plot',
          description: 'Free food for the homeless',
          src: 'https://images.neopets.com/items/sta_tyweof2013_myobalstmp.gif',
          href: 'http://www.neopets.com/prehistoric/battleground/',
          frequency: 'once a day',
        },
      ],
    },
    {
      title: 'Wheels',
      icon: {
        src: 'https://images.neopets.com/quests/categories/SpinWheel.png',
      },
      items: [
        {
          title: 'Wheel of Mediocrity',
          description: 'Free food for the homeless',
          src: 'https://images.neopets.com/wheels/new/mediocrity.jpg',
          href: 'http://www.neopets.com/prehistoric/mediocrity.phtml',
          favorite: true,
          frequency: 'once every 40 minutes',
        },
        {
          title: 'Wheel of Excitement',
          description: 'Free food for the homeless',
          src: 'https://images.neopets.com/wheels/new/excitement.jpg',
          href: 'http://www.neopets.com/faerieland/wheel.phtml',
          favorite: true,
          frequency: 'once every two hours',
        },
        {
          title: 'Wheel of Misfortune',
          description: 'Free food for the homeless',
          src: 'https://images.neopets.com/wheels/new/misfortune.jpg',
          href: 'http://www.neopets.com/halloween/wheel/index.phtml',
          frequency: 'once every two hours',
        },
        {
          title: 'Wheel of Knowledge',
          description: 'Free food for the homeless',
          src: 'https://images.neopets.com/wheels/new/knowledge.jpg',
          href: 'http://www.neopets.com/medieval/knowledge.phtml',
          favorite: true,
          frequency: 'once a day',
        },
        {
          title: 'Wheel of Monotony',
          description: 'Free food for the homeless',
          src: 'https://images.neopets.com/wheels/new/monotony.jpg',
          href: 'http://www.neopets.com/prehistoric/monotony/monotony.phtml',
          frequency: 'once a day',
        },
        {
          title: 'Wheel of Extravagance',
          description: 'Free food for the homeless',
          src: 'https://images.neopets.com/wheels/h5/extravagance/images/wheel-icon.png',
          href: 'http://www.neopets.com/desert/extravagance.phtml',
          frequency: 'once a day',
        },
        {
          title: 'NC Archives Wheel',
          description: 'Free food for the homeless',
          src: 'https://images.neopets.com/items/mall_fc_wheel.gif',
          href: 'http://www.neopets.com/mall/wheel/',
          favorite: true,
          frequency: 'once a day with fortune cookie',
        },
      ],
    },
    {
      title: 'Scratchcards',
      icon: {
        src: 'https://images.neopets.com/themes/h5/altadorcup/images/tradingcards-icon.png',
      },
      items: [
        {
          title: 'Winter Kiosk',
          description: 'Free food for the homeless',
          src: 'https://images.neopets.com/games/clicktoplay/screenshot_thumbnail_193_1_v1.png',
          href: 'http://www.neopets.com/winter/kiosk.phtml',
          frequency: 'once every six hours'

        },
        {
          title: 'Spooky Kiosk',
          description: 'Free food for the homeless',
          src: 'https://images.neopets.com/battledome/opponent_pics/85.gif',
          href: 'http://www.neopets.com/halloween/scratch.phtml',
          frequency: 'once every two hours'
        },
        {
          title: 'Desert Kiosk',
          description: 'Free food for the homeless',
          src: 'https://images.neopets.com/shopkeepers/ldsc_cybunny.gif',
          href: 'http://www.neopets.com/desert/sc/kiosk.phtml',
          needsFlash: true,
          frequency: 'once every four hours'
        },
      ],
    },
    {
      title: 'Time Based',
      icon: {
        src: 'https://images.neopets.com/quests/images/timer.png',
      },
      items: [
        {
          title: 'Snowager',
          description: 'Free food for the homeless',
          src: 'https://images.neopets.com/items/toy_snowager_plushie.gif',
          href: 'http://www.neopets.com/winter/snowager.phtml',
          favorite: true,
          frequency: 'awake at 6am, 2pm, and 10pm NST'
        },
        {
          title: 'Turmaculus',
          description: 'Free food for the homeless',
          src: 'https://images.neopets.com/items/plu_turmac_plushie.gif',
          href: 'http://www.neopets.com/medieval/turmaculus.phtml',
          frequency: 'random'
        },
        {
          title: 'Tarla\'s Treasures',
          description: 'Free food for the homeless',
          src: 'https://images.neopets.com/items/toy_tarla_squirty.gif',
          href: 'http://www.neopets.com/freebies/tarlastoolbar.phtml',
          frequency: 'random'
        },
        {
          title: 'Deadly Dice',
          description: 'Free food for the homeless',
          src: 'https://images.neopets.com/items/plu_von_roo.gif',
          href: 'http://www.neopets.com/worlds/deadlydice.phtml',
          frequency: '12am NST'
        },
        {
          title: 'Kreludor Meteor',
          description: 'Free food for the homeless',
          src: 'https://images.neopets.com/items/baby_space_fungus_plushie.gif',
          href: 'http://www.neopets.com/moon/meteor.phtml',
          frequency: 'once every hour, one prize a day'
        },
        {
          title: 'Magma Pool',
          description: 'Free food for the homeless',
          src: 'https://images.neopets.com/items/plu_poogle_magma.gif',
          href: 'http://www.neopets.com/magma/pool.phtml',
          frequency: 'one minute each day'
        },
      ]
    },
    {
      title: 'Essentials',
      icon: {
        src: 'https://images.neopets.com/themes/h5/altadorcup/images/bell-icon.png',
      },
      items: [
        {
          title: "Quest Log",
          href: "https://www.neopets.com/questlog/",
          description: "Quest Log",
          src: "https://images.neopets.com/themes/h5/hauntedwoods/images/quests-icon.svg",
          favorite: true,
          frequency: 'every day',
        },
        {
          title: 'Smuggler\s Cove',
          description: 'Free food for the homeless',
          src: 'https://images.neopets.com/items/plu_bruce_smuggler.gif',
          href: 'http://www.neopets.com/pirates/smugglerscove.phtml',
          favorite: true,
          frequency: 'random',
        },
        {
          title: 'Garage Sale',
          description: 'Free food for the homeless',
          src: 'https://images.neopets.com/items/blueigloo_chia_doll.gif',
          href: 'http://www.neopets.com/winter/igloo.phtml',
          frequency: 'random',
        },
        {
          title: 'Buried Treasure',
          description: 'Free food for the homeless',
          src: 'https://images.neopets.com/items/plu_krawk_pirate.gif',
          href: 'http://www.neopets.com/pirates/buriedtreasure/index.phtml',
          favorite: true,
          frequency: 'once every three hours',
        },
        {
          title: 'Poogle Racing',
          description: 'Free food for the homeless',
          src: 'https://images.neopets.com/items/plu_poogle_faerie.gif',
          href: 'http://www.neopets.com/faerieland/poogleracing.phtml',
          frequency: 'once every 15 minutes',
        },
        {
          title: 'Turdle Racing',
          description: 'Free food for the homeless',
          src: 'https://images.neopets.com/items/toy_turdle_plushie.gif',
          href: 'http://www.neopets.com/medieval/turdleracing.phtml',
          frequency: 'three times a day',
        },
        {
          title: 'Lever of Doom',
          description: 'Free food for the homeless',
          src: 'https://images.neopets.com/items/plu_robot_kougra.gif',
          href: 'http://www.neopets.com/space/strangelever.phtml',
          frequency: 'anytime',
        },
        {
          title: 'Food Club',
          description: 'Free food for the homeless',
          src: 'https://images.neopets.com/items/plu_kyrii_pirate.gif',
          href: 'http://www.neopets.com/pirates/foodclub.phtml?type=bet',
          favorite: true,
          frequency: 'once a day',
        },
        {
          title: 'Stock Market',
          description: 'Free food for the homeless',
          src: 'https://images.neopets.com/items/yellowchiadoll.gif',
          href: 'http://www.neopets.com/stockmarket.phtml?type=list&bargain=true',
          frequency: 'anytime',
        },
        {
          title: 'Faerie Caverns',
          description: 'Free food for the homeless',
          src: 'https://images.neopets.com/items/plu_shoyru_faerie.gif',
          href: 'http://www.neopets.com/faerieland/caverns/index.phtml',
          favorite: true,
          frequency: 'once a day',
        },
        {
          title: 'Toy Repair Shop',
          description: 'Free food for the homeless',
          src: 'https://images.neopets.com/items/toy_evilfuzzel.gif',
          href: 'http://www.neopets.com/winter/brokentoys.phtml',
        },
        {
          title: 'Laboratory Ray',
          description: 'Free food for the homeless',
          src: 'https://images.neopets.com/items/plu_madscientist_labray.gif',
          favorite: true,
          href: 'http://www.neopets.com/lab2.phtml',
          frequency: 'once a day',
        },
        {
          title: 'PetPet Lab Ray',
          description: 'Free food for the homeless',
          src: 'https://images.neopets.com/items/plu_labjelly.gif',
          favorite: true,
          href: 'http://www.neopets.com/petpetlab.phtml',
          frequency: 'once a day',
        },
        {
          title: 'Shop Till',
          description: 'Free food for the homeless',
          src: 'https://images.neopets.com/items/sch_mynci_cashregister.gif',
          href: 'http://www.neopets.com/market.phtml?type=till',
          favorite: true,
          frequency: 'anytime',
        },
        {
          title: 'Trading Post',
          description: 'Free food for the homeless',
          src: 'https://images.neopets.com/items/plu_kau_mane_flowers.gif',
          favorite: true,
          href: 'http://www.neopets.com/island/tradingpost.phtml',
          frequency: 'anytime'
        },
        {
          title: 'Auction House',
          description: 'Free food for the homeless',
          src: 'https://images.neopets.com/items/plu_wocky_auctioneer.gif',
          favorite: true,
          href: 'http://www.neopets.com/auctions.phtml',
          frequency: 'anytime'
        },
        {
          title: 'Employment Agency',
          description: 'Free food for the homeless',
          src: 'https://images.neopets.com/items/plu_y16haltot_halrffre.gif',
          href: 'http://www.neopets.com/faerieland/employ/employment.phtml',
        },
        {
          title: 'Neolodge',
          description: 'Free food for the homeless',
          src: 'https://images.neopets.com/items/plu_dd_sleeping_imiya.gif',
          href: 'http://www.neopets.com/neolodge.phtml',
          frequency: 'anytime'
        },
        {
          title: 'Featured Band',
          description: 'Free food for the homeless',
          src: 'https://images.neopets.com/items/toy_plush_jazz1.gif',
          href: 'http://www.neopets.com/prehistoric/ticketbooth.phtml',
          frequency: 'one band a day'
        },
        {
          title: 'Haiku',
          description: 'Free food for the homeless',
          src: 'https://images.neopets.com/items/toy_kougragreen.gif',
          href: 'http://www.neopets.com/island/haiku/haiku.phtml',
          frequency: 'once a day'
        },
        {
          title: 'Island Mystic',
          description: 'Free food for the homeless',
          src: 'https://images.neopets.com/items/toy_plushie_mystic.gif',
          href: 'http://www.neopets.com/island/mystichut.phtml',
          frequency: 'once a day'
        },
        {
          title: 'Golden Dubloon',
          description: 'Free food for the homeless',
          src: 'https://images.neopets.com/items/toy_lupe_plushblue.gif',
          href: 'http://www.neopets.com/pirates/restaurant.phtml',
          frequency: 'anytime'
        },
        {
          title: 'Kelp Restaurant',
          description: 'Free food for the homeless',
          src: 'https://images.neopets.com/items/plu_kelpflake.gif',
          href: 'http://www.neopets.com/water/restaurant.phtml',
          frequency: 'anytime'
        },
        {
          title: 'Merry Go Round',
          description: 'Free food for the homeless',
          src: 'https://images.neopets.com/items/toy_y17haltot_tinmrrygorndtoy.gif',
          href: 'http://www.neopets.com/worlds/roo/merrygoround.phtml',
          frequency: 'anytime'
        },
        {
          title: 'Tiki Tours',
          description: 'Free food for the homeless',
          src: 'https://images.neopets.com/items/plu_tiki_tack_man.gif',
          href: 'http://www.neopets.com/island/tikitours.phtml',
          frequency: 'anytime'
        },
        {
          title: 'Tarla\'s Shop',
          description: 'Free food for the homeless',
          src: 'https://images.neopets.com/items/plu_tarla.gif',
          favorite: true,
          href: 'http://www.neopets.com/winter/shopofmystery.phtml',
          frequency: 'random'
        },
        {
          title: 'Kadoatery',
          description: 'Free food for the homeless',
          src: 'https://images.neopets.com/items/kadoatie_faerie.gif',
          favorite: true,
          href: 'http://www.neopets.com/games/kadoatery/index.phtml',
          frequency: 'random',
        },
        {
          title: 'Neggery',
          description: 'Free food for the homeless',
          src: 'https://images.neopets.com/items/toy_plushie_negg_orange.gif',
          href: 'http://www.neopets.com/winter/neggery.phtml',
          frequency: 'anytime'
        },
        {
          title: 'Tangor\'s Workshop',
          description: 'Free food for the homeless',
          src: 'https://images.neopets.com/items/plu_mynci_tangor.gif',
          href: 'http://www.neopets.com/magma/workshop.phtml',
          frequency: 'anytime'
        },
        {
          title: 'NeoCola Machine',
          description: 'Free food for the homeless',
          src: 'https://images.neopets.com/items/plu_neocola.gif',
          href: 'http://www.neopets.com/moon/neocola.phtml',
          frequency: 'anytime'
        },
        {
          title: 'Alien Aisha Vending Machine',
          description: 'for use with nerkmids',
          src: 'https://images.neopets.com/items/toy_plushie_alien.gif',
          href: 'http://www.neopets.com/vending.phtml',
          frequency: 'anytime'
        },
      ],
    },
    {
      title: 'Games',
      icon: {
        src: 'https://images.neopets.com/quests/categories/PlayGame.png',
      },
      items: [
        {
          title: "Fashion Fever",
          href: "https://www.neopets.com/games/h5game.phtml?game_id=1391",
          description: "Easy game for quest log dailies",
          src: "https://images.neopets.com/themes/h5/winterholiday/images/customise-icon.png",
          favorite: true,
        },
        {
          title: 'Guess the Marrow',
          description: 'Free food for the homeless',
          src: 'https://images.neopets.com/items/marrow_veg.gif',
          href: 'http://www.neopets.com/medieval/guessmarrow.phtml',
          frequency: 'once a day'
        },
        {
          title: 'Potato Counter',
          description: 'Free food for the homeless',
          src: 'https://images.neopets.com/items/plu_potato.gif',
          href: 'http://www.neopets.com/medieval/potatocounter.phtml',
          frequency: 'three plays a day'
        },
        {
          title: 'Battledome Daily Prizes',
          description: 'Free food for the homeless',
          src: 'https://images.neopets.com/items/toy_battlefaerie_plushie.gif',
          href: 'http://www.neopets.com/dome/',
          frequency: 'once a day'
        },
        {
          title: 'Grarrl Keno',
          description: 'Free food for the homeless',
          src: 'https://images.neopets.com/items/toy_grarrl_red.gif',
          href: 'http://www.neopets.com/prehistoric/keno.phtml',
          frequency: 'anytime',
        },
        {
          title: 'Neopian Lottery',
          description: 'Free food for the homeless',
          src: 'https://images.neopets.com/items/plu_evil_redscorchio.gif',
          href: 'http://www.neopets.com/games/lottery.phtml',
          frequency: 'once a day',
        },
        {
          title: 'Test Your Strength',
          description: 'Free food for the homeless',
          src: 'https://images.neopets.com/items/plu_mynci_halloween.gif',
          href: 'http://www.neopets.com/halloween/strtest/index.phtml',
          needsFlash: true,
          frequency: 'once every six hours',
        },
        {
          title: 'Wishing Well',
          description: 'Free food for the homeless',
          src: 'https://images.neopets.com/items/luckycoinplushie.gif',
          href: 'http://www.neopets.com/wishing.phtml',
          frequency: 'anytime',
        },
        {
          title: 'Coconut Shy',
          description: 'Free food for the homeless',
          src: 'https://images.neopets.com/items/toy_coconutshy_quiggle.gif',
          href: 'http://www.neopets.com/halloween/coconutshy.phtml',
          needsFlash: true,
          frequency: '20 times a day',
        },
        {
          title: 'Bagatelle',
          description: 'Free food for the homeless',
          src: 'https://images.neopets.com/items/toy_bagalupe_plushie.gif',
          href: 'http://www.neopets.com/halloween/bagatelle.phtml',
          needsFlash: true,
          frequency: '20 times a day',
        },
        {
          title: 'Cork Gun Gallery',
          description: 'Free food for the homeless',
          src: 'https://images.neopets.com/items/plu_ddY21_punchbag_bob.gif',
          href: 'http://www.neopets.com/halloween/corkgun.phtml',
          needsFlash: true,
          frequency: '20 times a day',
        },
        {
          title: 'Double or Nothing',
          description: 'Free food for the homeless',
          src: 'https://images.neopets.com/items/plu_skeith_snargan.gif',
          href: 'http://www.neopets.com/medieval/doubleornothing.phtml',
          frequency: 'anytime',
        },
        {
          title: 'Kiss the Mortog',
          description: 'Free food for the homeless',
          src: 'https://images.neopets.com/items/plu_advc2013_mortogplush.gif',
          href: 'http://www.neopets.com/medieval/kissthemortog.phtml',
          frequency: 'anytime',
        },
        {
          title: 'Pick Your Own',
          description: 'Free food for the homeless',
          src: 'https://images.neopets.com/items/gelert_plush_yellow.gif',
          href: 'http://www.neopets.com/medieval/pickyourown_index.phtml',
          frequency: 'once every 24 hours',
        },
        {
          title: 'Snow Wars',
          description: 'Free food for the homeless',
          src: 'https://images.neopets.com/items/plu_abominable_snowball.gif',
          href: 'http://www.neopets.com/games/game.phtml?game_id=55',
          frequency: 'anytime',
        },
        {
          title: 'Cheat!',
          description: 'Free food for the homeless',
          src: 'https://images.neopets.com/items/toy_jetsamplush5.gif',
          href: 'http://www.neopets.com/games/game.phtml?game_id=109',
        },
        {
          title: 'Scorchy Slots',
          description: 'Free food for the homeless',
          src: 'https://images.neopets.com/items/toy_scorgreen.gif',
          href: 'http://www.neopets.com/games/slots.phtml',
        },
        {
          title: 'Gormball',
          description: 'Free food for the homeless',
          src: 'https://images.neopets.com/items/plu_gormball.gif',
          href: 'http://www.neopets.com/space/gormball.phtml',
        },
        {
          title: 'Dice-a-Roo',
          description: 'Free food for the homeless',
          src: 'https://images.neopets.com/items/fur_dice_gold.gif',
          href: 'http://www.neopets.com/games/game.phtml?game_id=10',
          frequency: 'anytime',
        },
        {
          title: 'Quasalan Expellibox',
          description: 'Free food for the homeless',
          src: 'https://images.neopets.com/items/toy_scarab_plushie.gif',
          href: 'http://www.neopets.com/games/giveaway/giveaway_game.phtml',
          needsFlash: true,
          frequency: 'once every 7 hours 7 minutes'
        },
        {
          title: 'Multiplayer Competition',
          description: 'Free food for the homeless',
          src: 'https://images.neopets.com/items/plu_ddY21_angry_meepit.gif',
          href: 'http://www.neopets.com/games/lobby/mp_comp.phtml',
        },
        {
          title: 'Plushie Tycoon',
          description: 'Free food for the homeless',
          src: 'https://images.neopets.com/items/toy_greenskeith.gif',
          href: 'http://www.neopets.com/games/tycoon/index.phtml',
        },
        {
          title: 'Cliffhanger',
          description: 'Free food for the homeless',
          src: 'https://images.neopets.com/items/toy_greentuskaninny.gif',
          href: 'http://www.neopets.com/games/cliffhanger/cliffhanger.phtml',
        },
        {
          title: 'NeoQuest',
          description: 'Free food for the homeless',
          src: 'https://images.neopets.com/items/toy_neoquest_plush7.gif',
          href: 'http://www.neopets.com/games/neoquest/neoquest.phtml',
        },
        {
          title: 'NeoQuest II',
          description: 'Free food for the homeless',
          src: 'https://images.neopets.com/items/nq2_balloon.gif',
          href: 'http://www.neopets.com/games/nq2/index.phtml',
        },
        {
          title: 'Hide n\' Seek',
          description: 'Free food for the homeless',
          src: 'https://images.neopets.com/items/toy_kacheekblue.gif',
          href: 'http://www.neopets.com/games/hidenseek.phtml',
          frequency: 'anytime'
        },
        {
          title: 'Cheeseroller',
          description: 'Free food for the homeless',
          src: 'https://images.neopets.com/items/plu_techo_cheeseroller.gif',
          href: 'http://www.neopets.com/medieval/cheeseroller.phtml',
          frequency: 'three times a day',
        },
      ],
    },
    {
      title: 'Training',
      icon: {
        src: 'https://images.neopets.com/refer/items/dubloon1_gray.gif',
      },
      items: [
        {
          title: 'Dubloon Training',
          description: 'training up to level 40',
          src: 'https://images.neopets.com/items/toy_pirate_plushie4.gif',
          href: 'http://www.neopets.com/pirates/academy.phtml',
        },
        {
          title: 'Codestone Training',
          description: 'training up to level 250',
          src: 'https://images.neopets.com/items/plu_eocodestone.gif',
          href: 'http://www.neopets.com/island/training.phtml',
        },
        {
          title: 'Ninja Training School',
          description: 'training above level 250',
          src: 'https://images.neopets.com/items/plu_sho_codestone.gif',
          href: 'http://www.neopets.com/island/fight_training.phtml',
        },
      ],
    },
    {
      title: 'Updates',
      icon: {
        src: 'https://images.neopets.com/themes/h5/altadorcup/images/news-icon.png',
      },
      items: [
        {
          title: 'Neopian News',
          description: 'Free food for the homeless',
          src: 'https://images.neopets.com/items/toy_faerielupe.gif',
          favorite: true,
          href: 'http://www.neopets.com/nf.phtml',
          frequency: 'some weekdays'
        },
        {
          title: 'Neopian Times',
          description: 'Free food for the homeless',
          src: 'https://images.neopets.com/items/tom_ntissue3.gif',
          href: 'http://www.neopets.com/ntimes/',
          frequency: 'fridays'
        },
        {
          title: 'Neomail',
          description: 'Free food for the homeless',
          src: 'https://images.neopets.com/items/toy_advc2018_manillaenvelope.gif',
          href: 'http://www.neopets.com/neomessages.phtml',
          frequency: 'anytime'
        },
      ]
    },
    {
      title: 'Quests',
      icon: {
        src: 'https://images.neopets.com/quests/images/CompletedQuest.png',
      },
      items: [
        {
          title: 'Illusen\'s Glade',
          description: 'Free food for the homeless',
          src: 'https://images.neopets.com/items/toy_illusen_plushie.gif',
          href: 'http://www.neopets.com/medieval/earthfaerie.phtml',
          frequency: 'once a day'
        },
        {
          title: 'Jhudora\'s Bluff',
          description: 'Free food for the homeless',
          src: 'https://images.neopets.com/items/toy_jhudora_plushie.gif',
          href: 'http://www.neopets.com/faerieland/darkfaerie.phtml',
          frequency: 'once a day'
        },
        {
          title: 'Snow Faerie Quests',
          description: 'Free food for the homeless',
          src: 'https://images.neopets.com/items/plu_y17haltot_snowfaerie.gif',
          href: 'http://www.neopets.com/winter/snowfaerie.phtml',
          frequency: 'once a day'
        },
        {
          title: 'Faerie Quests',
          description: 'Free food for the homeless',
          src: 'https://images.neopets.com/items/plu_faerie_ember.gif',
          href: 'http://www.neopets.com/quests.phtml',
          frequency: 'random',
        },
        {
          title: 'Brain Tree Quests',
          description: 'Free food for the homeless',
          src: 'https://images.neopets.com/items/toy_brain1.gif',
          href: 'http://www.neopets.com/halloween/braintree.phtml',
          frequency: 'once a day'
        },
        {
          title: 'Esophagor\'s Quests',
          description: 'Free food for the homeless',
          src: 'https://images.neopets.com/items/toy_esophagor_plush.gif',
          href: 'http://www.neopets.com/halloween/esophagor.phtml',
          frequency: 'once a day'
        },
        {
          title: 'Edna\'s Quests',
          description: 'Free food for the homeless',
          src: 'https://images.neopets.com/items/toy_plushie_edna.gif',
          href: 'http://www.neopets.com/halloween/witchtower.phtml',
          frequency: 'once a day'
        },
        {
          title: 'Kitchen Quests',
          description: 'Free food for the homeless',
          src: 'https://images.neopets.com/items/plu_underwater_chef.gif',
          href: 'http://www.neopets.com/island/kitchen.phtml',
          frequency: 'once a day'
        },
        {
          title: 'Coincidence',
          description: 'Free food for the homeless',
          src: 'https://images.neopets.com/items/plu_adca2014_drlandbrplu.gif',
          href: 'http://www.neopets.com/magma/portal/ship.phtml',
          frequency: 'once a day'
        },
      ],
    },
    {
      title: 'Contests',
      icon: {
        src: 'https://images.neopets.com/themes/h5/basic/images/spotlights-icon.png',
      },
      items: [
        {
          title: 'Lenny Conundrum',
          description: 'discontinued',
          src: 'https://images.neopets.com/trophies/106_1.gif',
          href: 'http://www.neopets.com/games/conundrum.phtml',
        },
        {
          title: 'Neohome',
          description: 'discontinued',
          src: 'https://images.neopets.com/games/pages/trophies/348_1.png',
          href: 'http://www.neopets.com/homespotlight.phtml',
        },
        {
          title: 'Gallery',
          description: 'Free food for the homeless',
          src: 'https://images.neopets.com/games/pages/trophies/222_1.png',
          href: 'http://www.neopets.com/gallery.phtml',
          frequency: 'once a week'
        },
        {
          title: 'Gourmet Club',
          description: 'Free food for the homeless',
          src: 'https://images.neopets.com/games/trophies/trophy_gourmet_1.gif',
          href: 'http://www.neopets.com/gourmet_club.phtml',
          frequency: 'continuous'
        },
        {
          title: 'Site Spotlight',
          description: 'discontinued',
          src: 'https://images.neopets.com/games/pages/trophies/101_1.png',
          href: 'http://www.neopets.com/sitespotlight.phtml',
        },
        {
          title: 'PetPet Spotlight',
          description: 'discontinued',
          src: 'https://images.neopets.com/games/pages/trophies/148_1.png',
          href: 'http://www.neopets.com/petpetspotlight.phtml',
        },
        {
          title: 'Pet Spotlight',
          description: 'discontinued',
          src: 'https://images.neopets.com/games/trophies/trophy_petspotlight_1.gif',
          href: 'http://www.neopets.com/spotlight.phtml',
        },
        {
          title: 'Art Gallery',
          description: 'Free food for the homeless',
          src: 'https://images.neopets.com/games/pages/trophies/102_1.png',
          href: 'http://www.neopets.com/art/gallery.phtml',
          frequency: 'once a week'
        },
        {
          title: 'Poetry',
          description: 'Free food for the homeless',
          src: 'https://images.neopets.com/games/pages/trophies/103_1.png',
          href: 'http://www.neopets.com/contributions_poems.phtml',
          frequency: 'once a week'
        },
        {
          title: 'Better Than You',
          description: 'discontinued',
          src: 'https://images.neopets.com/games/pages/trophies/112_1.png',
          href: 'http://www.neopets.com/games/betterthanyou.phtml',
        },
        {
          title: 'Neopian Times',
          description: 'Free food for the homeless',
          src: 'https://images.neopets.com/trophies/107_1.gif',
          href: 'http://www.neopets.com/ntimes/nt_submit.phtml',
          frequency: 'once a week'
        },
        {
          title: 'Beauty Contest',
          description: 'Free food for the homeless',
          src: 'https://images.neopets.com/games/trophies/trophy_beauty_1.gif',
          href: 'http://www.neopets.com/beauty/index.phtml',
          frequency: 'restarts every Friday at noon'
        },
        {
          title: 'Caption Contest',
          description: 'Free food for the homeless',
          src: 'https://images.neopets.com/games/clicktoplay/screenshot_thumbnail_100_1_v1.png',
          href: 'http://www.neopets.com/games/new_caption.phtml',
          frequency: 'once a month'
        },
        {
          title: 'Mystery Pic',
          description: 'Free food for the homeless',
          src: 'https://images.neopets.com/games/pages/trophies/105_1.png',
          href: 'http://www.neopets.com/games/mysterypic.phtml',
          frequency: 'once a week'
        },
        {
          title: 'Story Telling',
          description: 'Free food for the homeless',
          src: 'https://images.neopets.com/games/pages/trophies/104_1.png',
          href: 'http://www.neopets.com/art/storytell.phtml',
          frequency: 'once a week'
        },
        {
          title: 'Customisation',
          description: 'Free food for the homeless',
          src: 'https://images.neopets.com/games/trophies/trophy_custompet_1.gif',
          href: 'http://www.neopets.com/spotlights/custompet/index.phtml',
          frequency: 'once a week'
        },
        {
          title: 'User Lookups',
          description: 'Free food for the homeless',
          src: 'https://images.neopets.com/games/pages/trophies/467_1.png',
          href: 'http://www.neopets.com/ul_spotlight.phtml',
          frequency: 'once a week'
        },
      ]
    },
  ]
