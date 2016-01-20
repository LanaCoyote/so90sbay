/*

This seed file is only a placeholder. It should be expanded and altered
to fit the development of your application.

It uses the same file the server uses to establish
the database connection:
--- server/db/index.js

The name of the database used is set in your environment files:
--- server/env/*

This seed file has a safety check to see if you already have users
in the database. If you are developing multiple applications with the
fsg scaffolding, keep in mind that fsg always uses the same database
name in the environment files.

*/

var mongoose = require('mongoose');
var Promise = require('bluebird');
var chalk = require('chalk');
var connectToDb = require('./server/db');
var User = Promise.promisifyAll(mongoose.model('User'));
var Product = Promise.promisifyAll(mongoose.model('Product'));

var seedProducts = function () {
    var products = [
        {
            title: 'Tamagotchi',
            description: 'The best pet you\'ll ever have',
            price: 99.99,
            quantity: 10,
            category: ['toys'],
            photo: ['http://media3.popsugar-assets.com/files/2013/03/13/4/192/1922507/03bceceac28b09b1_tamagotchi-ios-app.xxxlarge/i/Tamagotchi-iPhone-App.jpg']
        },
         {
            title: 'Pogs',
            description: 'Don\'t touch my slammer',
            price: 1.99,
            quantity: 100,
            category: ['toys'],
            photo: ['http://toysfromthe90s.com/wp-content/uploads/2015/03/pogs.jpg']
        },
        {
            title: 'Britney and Justin Poster',
            description: 'Britney and Justin forever',
            price: 229.99,
            quantity: 5,
            category: ['posters'],
            photo: ['http://cdn.buzznet.com/assets/users16/pattygopez/default/justin-timberlake-britney-spears--large-msg-131118867529.jpg']
        },
        {
            title: 'Sega Genesis',
            description: 'The last system you\'ll ever need',
            price: 200.00,
            quantity: 33,
            category: ['video games','toys'],
            photo: ['https://upload.wikimedia.org/wikipedia/commons/6/6a/Sega-Genesis-Mk2-6button.jpg']
        },
         {
            title: 'Peanut (Royal Blue) Beanie Baby',
            description: 'The rarest beanie baby around',
            price: 10000.00,
            quantity: 2,
            category: ['toys', 'beanie babies'],
            photo: ['http://i.ebayimg.com/00/s/NDE3WDMyMA==/z/82UAAOSw34FVBq1m/$_32.JPG']
        },
        {
            title: 'Plaid Shirt',
            description: 'Don\'t leave home without one',
            price: 10.00,
            quantity: 1000,
            category: ['clothing'],
            photo: ['https://i.s-jcrew.com/is/image/jcrew/22024_WD7145?$pdp_fs418$', 'http://www.plaidshirts.xyz/wp-content/uploads/2015/05/Plaid-Shirt-for-Men-in-Green-Long-Sleeve.jpg']
        },
         {
            title: 'Spice Girls - Spice CD',
            description: 'Spice up your life',
            price: 18.99,
            quantity: 1000,
            category: ['music'],
            photo: ['http://365thingsaustin.com/wp-content/uploads/2015/04/wallpaper_spice_girls.jpg']
        },
         {
            title: 'Backstreet Boys - Backstreet\s Back CD',
            description: 'Backstreet\s back',
            price: 18.99,
            quantity: 1000,
            category: ['music'],
            photo: ['http://groundctrl.s3.amazonaws.com/clients/groundctrl/media/03/01/large.2st3t71n944c.jpg']
        },
          {
            title: 'Legend of Zelda: Ocarina of Time',
            description: 'The legend begins (on N64)',
            price: 59.99,
            quantity: 222,
            category: ['video games','toys'],
            photo: ['https://upload.wikimedia.org/wikipedia/en/8/8e/The_Legend_of_Zelda_Ocarina_of_Time_box_art.png']
        },
         {
            title: 'Nintendo 64',
            description: 'The craziest graphics ever you\'ve ever seen',
            price: 260.99,
            quantity: 300,
            category: ['video games','toys'],
            photo: ['https://upload.wikimedia.org/wikipedia/commons/8/82/Nintendo_64.jpg']
        },
        {
            title: 'Black Lotus Magic the Gathering Card (Beta Edition)',
            description: 'One card to rule them all',
            price: 30000.00,
            quantity: 1,
            category: ['toys'],
            photo: ['http://img4.wikia.nocookie.net/__cb20150201165002/bindingofisaac/images/a/a0/Black_lotus_from_Magic_The_Gathering.jpg']
        },
        {
            title: 'Windbreaker',
            description: 'Wear it in all conditions',
            price: 50.00,
            quantity: 300,
            category: ['clothing'],
            photo: ['http://picture-cdn.wheretoget.it/yu7qzh-l.jpg', 'https://s-media-cache-ak0.pinimg.com/236x/67/9c/25/679c2555a7a2de397cc7227e9e5163a5.jpg']
        },
         {
            title: 'Snow Beach Ski Jacket',
            description: 'Raekwon says what up',
            price: 3000.00,
            quantity: 5,
            category: ['clothing'],
            photo: ['https://s-media-cache-ak0.pinimg.com/564x/3d/b1/a7/3db1a7d9f9a2072aa4c8cdc0dacb5296.jpg']
        },
        {
            title: 'Power Rangers Megazord',
            description: 'Mighty morphin',
            price: 101.00,
            quantity: 250,
            category: ['toys', 'action figures'],
            photo: ['http://ecx.images-amazon.com/images/I/71qpJeAuVHL._SL1436_.jpg']
        },
        {
            title: 'Super Soaker 50',
            description: 'Wetter is better',
            price: 55.00,
            quantity: 450,
            category: ['toys'],
            photo: ['http://uncrate.com/assets_c/2009/04/super-soaker-50-cropped-thumb-960x640-5191.jpg']
        },
        {
            title: 'Furby',
            description: 'Feed me',
            price: 99.99,
            quantity: 222,
            category: ['toys'],
            photo: ['https://upload.wikimedia.org/wikipedia/en/7/70/Furby_picture.jpg']
        },
        {
            title: 'Playdate with Mike Tyson',
            description: "When I was in prison, I was wrapped up in all those deep books. That Tolstoy crap - people shouldn't read that stuff",
            price: 449.99,
            quantity: 1,
            category: ['celebrity playdate'],
            photo: ['https://ombyum.files.wordpress.com/2014/03/revisiting-young-mike-tyson1537105053-jul-19-2012-600x400.jpg']
        },
        {
            title: 'Playdate with Britney Spears',
            description: "I don't like defining myself. I just am.",
            price: 9.99,
            quantity: 567,
            category: ['celebrity playdate'],
            photo: ['http://www.latimes.com/includes/projects/hollywood/portraits/britney_spears.jpg']
        },
        {
            title: 'Playdate with Brett Favre',
            description: "Live deals you a lot of lessons, some people learn from it, some people don't",
            price: 500.00,
            quantity: 3,
            category: ['celebrity playdate'],
            photo: ['http://allgbp.com/wp-content/uploads/2014/06/19-brett-favre-super-bowl-winning-quarterbacks.jpg']
        },
        {
            title: 'Playdate with Tupac',
            description: "All I'm trying to do is survive and make good out of the dirty, nast, unbelievable lifestyle that they gave me.",
            price: 1000000000,
            quantity: 0,
            category: ['celebrity playdate'],
            photo: ['http://cbsnews1.cbsistatic.com/hub/i/2011/06/15/3eb74f30-a643-11e2-a3f0-029118418759/tupac_shakur.jpg']
        },
        {
            title: 'Playdate with Bill Clinton',
            description: 'When I took office, only high energy physicists had ever heard of what is called the Worldwide Web... now even my cat has its own page\nDisclaimer: Bill Clinton is currently suspended from playdates...',
            price: 600.00,
            quantity: 0,
            category: ['celebrity playdate'],
            photo: ['https://transition2008.files.wordpress.com/2008/03/bill-clinton.jpg']
       },
       {
            title: 'Princess Beanie Baby',
            description: 'In memory of Princess Diana',
            price: 20000.00,
            quantity: 1,
            category: ['toys', 'beanie babies'],
            photo: ['http://www.tycollector.com/the-scoop/scoop-images/princess-history.jpg']
        },
         {
            title: 'Patti Beanie Baby',
            description: 'The cuddliest egg-laying beanie baby around',
            price: 100.00,
            quantity: 10,
            category: ['toys', 'beanie babies'],
            photo: ['https://clevecavs6.files.wordpress.com/2013/04/playtpus_bb.gif']
        },
        {
            title: 'Peace Beanie Baby',
            description: 'Peace man!',
            price: 100.00,
            quantity: 50,
            category: ['toys', 'beanie babies'],
            photo: ['http://ecx.images-amazon.com/images/I/51TJ4ugjSKL._SY355_.jpg']
        },
        {
            title: 'Nana the Monkey Beanie Baby',
            description: 'Have a banana?',
            price: 20.00,
            quantity: 100,
            category: ['toys', 'beanie babies'],
            photo: ['http://ecx.images-amazon.com/images/I/71R0G2VEMGL._SY300_.gif']
        },
         {
            title: 'Spirit of The Night',
            description: 'Summon Legend',
            price: 40.00,
            quantity: 10,
            category: ['toys', 'games', 'magic the gathering cards'],
            photo: ['http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=3315&type=card']
        },
         {
            title: 'Polar Kraken',
            description: 'Summon Legend',
            price: 30.00,
            quantity: 10,
            category: ['toys', 'games', 'magic the gathering cards'],
            photo: ['http://www.mtgotraders.com/store/media/products/med/Polar_Kraken.jpg']
        },
        {
            title: 'Serra Angel',
            description: 'Born with wings of light and a sword of faith',
            price: 100.00,
            quantity: 10,
            category: ['toys', 'games', 'magic the gathering cards'],
            photo: ['http://www.abugames.com/images/guidetoeditions/Beta_Serra_Angel.jpg']
        },
        {
            title: 'Sonic the Hedgehog 2 (Sega Genesis)',
            description: 'Sonic is back',
            price: 40.00,
            quantity: 100,
            category: ['toys', 'video games', 'sega'],
            photo: ['http://info.sonicretro.org/images/4/49/S2b4_titlescreen.png']
        },
        {
            title: 'Streets of Rage (Sega Genesis)',
            description: 'The streets are on fire',
            price: 40.00,
            quantity: 200,
            category: ['toys', 'video games', 'sega'],
            photo: ['http://static.giantbomb.com/uploads/original/13/139866/2695021-7689084008-mzl.y.jpg']
        },
        {
            title: 'Sonic and Knuckles (Sega Genesis)',
            description: 'Make your choice',
            price: 40.00,
            quantity: 150,
            category: ['toys', 'video games', 'sega'],
            photo: ['http://ecx.images-amazon.com/images/I/51JV6YK81FL.jpg']
        },
        {
            title: 'Mortal Kombat (Sega Genesis)',
            description: 'FINISH HIM',
            price: 40.00,
            quantity: 300,
            category: ['toys', 'video games', 'sega'],
            photo: ['http://gamesdbase.com/Media/SYSTEM/Sega_Genesis/Snap/big/Ultimate_Mortal_Kombat_3_-_1996_-_Williams,_Inc..jpg']
        },
        {
            title: 'Sega Game Gear',
            description: 'Top of the line handheld video game system',
            price: 200.00,
            quantity: 300,
            category: ['toys', 'video games', 'sega'],
            photo: ['http://199.101.98.242/media/images/88444-[BIOS]_Sega_Game_Gear_(USA)_(Majesco)-2.jpg']
        },
        {
            title: 'Creepy Crawlers Oven',
            description: 'They\'re creepy and crawly',
            price: 100.00,
            quantity: 300,
            category: ['toys'],
            photo: ['https://upload.wikimedia.org/wikipedia/commons/e/ea/Toymax_Creepy_Crawlers.jpg']
        },
        {
            title: 'Teenage Mutant Ninja Turtles Action Figures',
            description: 'Cowabunga!',
            price: 20.00,
            quantity: 500,
            category: ['toys', 'action figures'],
            photo: ['http://www.entertainmentearth.com/images/AUTOIMAGES/PL910801Alg.jpg']
        },
        {
            title: 'Weezer CD',
            description: 'What\'s with these homies dissing my girl',
            price: 18.99,
            quantity: 500,
            category: ['music'],
            photo: ['https://upload.wikimedia.org/wikipedia/en/7/70/Weezer_-_Blue_Album.png']
        },
        {
            title: 'Radiohead - OK Computer CD',
            description: 'Please could you stop the noise, I\'m trying to get some rest',
            price: 18.99,
            quantity: 500,
            category: ['music'],
            photo: ['https://upload.wikimedia.org/wikipedia/en/a/a1/Radiohead.okcomputer.albumart.jpg']
        },
        {
            title: 'Radiohead - The Bends CD',
            description: 'Baby\'s got the bends',
            price: 18.99,
            quantity: 500,
            category: ['music'],
            photo: ['https://upload.wikimedia.org/wikipedia/en/8/8b/Radiohead.bends.albumart.jpg']
        },
         {
            title: 'Radiohead - Pablo Honey CD',
            description: 'I\'m a creep',
            price: 18.99,
            quantity: 500,
            category: ['music'],
            photo: ['http://www.clashmusic.com/sites/default/files/field/image/radiohead-pablo-honey.jpg']
        },
        {
            title: 'Dr. Dre - The Chronic CD',
            description: 'The chronic',
            price: 18.99,
            quantity: 500,
            category: ['music'],
            photo: ['https://upload.wikimedia.org/wikipedia/en/1/19/Dr.DreTheChronic.jpg']
        },
        {
            title: 'Wu Tang - Enter the 36 Chambers CD',
            description: 'Enter the 36 chambers',
            price: 18.99,
            quantity: 500,
            category: ['music'],
            photo: ['https://upload.wikimedia.org/wikipedia/en/5/53/Wu-TangClanEntertheWu-Tangalbumcover.jpg']
        },
        {
            title: 'Backstreet Boys - Millenium CD',
            description: 'Backstree\'s back one more time',
            price: 18.99,
            quantity: 500,
            category: ['music'],
            photo: ['http://groundctrl.s3.amazonaws.com/clients/groundctrl/media/11/12/release_images/assets/original.sFYfyoKxj07KHvFJHQXUUyQwa7fAvSVsWw61k6QuIVA.jpg']
        },
        {
            title: 'Jock Jams CD',
            description: 'Are you ready to rumble',
            price: 18.99,
            quantity: 500,
            category: ['music'],
            photo: ['http://ecx.images-amazon.com/images/I/41EXNZW9AFL.jpg']
        },
        {
            title: 'Notorious B.I.G. - Ready to Die CD',
            description: 'Ready to die',
            price: 18.99,
            quantity: 500,
            category: ['music'],
            photo: ['https://upload.wikimedia.org/wikipedia/en/9/97/Ready_To_Die.jpg']
        },
        {
            title: 'Daft Punk - Homework CD',
            description: 'Robot rock',
            price: 18.99,
            quantity: 500,
            category: ['music'],
            photo: ['https://upload.wikimedia.org/wikipedia/en/9/9c/Daftpunk-homework.jpg']
        },
        {
            title: 'Nirvana - Nevermind CD',
            description: 'Who cares?',
            price: 18.99,
            quantity: 500,
            category: ['music'],
            photo: ['http://ecx.images-amazon.com/images/I/71ScD5gRleL._SL1200_.jpg']
        },
        {
            title: 'Britney Spears - ...Baby One More Time CD',
            description: 'Hit me baby one more time',
            price: 18.99,
            quantity: 500,
            category: ['music'],
            photo: ['https://upload.wikimedia.org/wikipedia/en/9/9a/..._Baby_One_More_Time_(album).png']
        },
           {
            title: 'Spice Girls - Spiceworld CD',
            description: 'Spice up your life',
            price: 18.99,
            quantity: 1000,
            category: ['music'],
            photo: ['https://upload.wikimedia.org/wikipedia/en/thumb/1/16/Spice_Girls_-_Spiceworld.png/220px-Spice_Girls_-_Spiceworld.png']
        },
          {
            title: 'Boyz II Men - II CD',
            description: 'They used to be boys...now they\'re men',
            price: 18.99,
            quantity: 1000,
            category: ['music'],
            photo: ['https://upload.wikimedia.org/wikipedia/en/b/b9/BoyzIIMen-II-Cover.jpg']
        },
          {
            title: 'Coolio - Gangsta\'s Paradise CD',
            description: 'Livin in a gangsta\'s paradise',
            price: 18.99,
            quantity: 1000,
            category: ['music'],
            photo: ["https://upload.wikimedia.org/wikipedia/en/e/e9/Coolio_-_Gangsta's_Paradise.jpg"]
        },
        {
            title: 'Rage Against the Machine - The Battle of Los Angeles CD',
            description: 'Rage',
            price: 18.99,
            quantity: 1000,
            category: ['music'],
            photo: ["https://upload.wikimedia.org/wikipedia/en/5/51/RAtM-BattleofLosAngeles.jpeg"]
        },
        {
            title: 'Red Hot Chili Peppers - Californication CD',
            description: 'Rage',
            price: 18.99,
            quantity: 1000,
            category: ['music'],
            photo: ["https://upload.wikimedia.org/wikipedia/en/d/df/RedHotChiliPeppersCalifornication.jpg"]
        },
        {
            title: 'Sublime - 40 oz to Freedom CD',
            description: '40 oz to Freedom',
            price: 18.99,
            quantity: 1000,
            category: ['music'],
            photo: ["https://upload.wikimedia.org/wikipedia/en/5/57/Sublime40OztoFreedomalbumcover.jpg"]
        },
        {
            title: 'MC Hammer - Too Legit to Quit CD',
            description: '40 oz to Freedom',
            price: 18.99,
            quantity: 1000,
            category: ['music'],
            photo: ["https://upload.wikimedia.org/wikipedia/en/a/a0/Too_Legit_to_Quit_cover.jpg"]
        },
        {
            title: 'Hanson - MMMBop CD',
            description: 'MMMbop dop dop do op',
            price: 18.99,
            quantity: 1000,
            category: ['music'],
            photo: ["https://upload.wikimedia.org/wikipedia/en/f/f4/Hanson-mmmbop.jpg"]
        },
        {
            title: 'Pinchers Beanie Baby',
            description: 'Pinch pinch',
            price: 20.00,
            quantity: 200,
            category: ['toys', 'beanie babies'],
            photo: ['http://lovemybeanies.com/wp-content/uploads/2012/10/pinchers.jpg']
        },
        {
            title: 'Nas - Illmatic CD',
            description: 'It\'s illmatic',
            price: 18.99,
            quantity: 1000,
            category: ['music'],
            photo: ["https://images.rapgenius.com/aa578a39d04099b869825ad2f31ba1f0.994x1000x1.jpg"]
        },
        {
            title: 'Wolverine Action Figure',
            description: 'Lean and mean',
            price: 20.00,
            quantity: 500,
            category: ['toys', 'action figures'],
            photo: ['http://www.entertainmentearth.com/images/AUTOIMAGES/DC10846lg.jpg']
        },
         {
            title: 'Legos Planetary Decoder Set',
            description: 'To space and back',
            price: 20.00,
            quantity: 500,
            category: ['toys'],
            photo: ['http://images.brickset.com/sets/images/1737-1.jpg']
        },
         {
           title: 'Etch a Sketch',
           description: "If you can't sketch it, etch it!",
           price: 19.99,
           quantity: 34,
           category: ['toys'],
           photo: ['https://upload.wikimedia.org/wikipedia/commons/e/e5/Taj_Mahal_drawing_on_an_Etch-A-Sketch.jpg']
       },
        {
           title: 'Mr. Potato Head',
           description: "You're not turning me into mashed potatoes!",
           price: 24.99,
           quantity: 100,
           category: ['toys'],
           photo: ['http://vignette2.wikia.nocookie.net/disney/images/9/9e/Thinkway_PotatoHead.jpg/revision/latest?cb=20131214201315']
       },
       {
           title: 'Mrs. Potato Head',
           description: "This is one sassy potato!",
           price: 49.99,
           quantity: 5,
           category: ['toys'],
           photo: ['http://dailyphotogame.com/wp-content/uploads/2015/03/Mrs.Potato-Head_8571.jpg']
       },
       {
           title: 'Slinky',
           description: "The most classic of toys",
           price: 5.99,
           quantity: 87,
           category: ['toys'],
           photo: ['http://www.alexbrands.com/wp-content/uploads/2015/10/100-Slinky-Image.jpg']
       },
       {
           title: 'Air Hogs',
           description: "Fantastic flying fun!",
           price: 75.00,
           quantity: 23,
           category: ['toys'],
           photo: ['http://ecx.images-amazon.com/images/I/41CDZ8X3K8L._SY300_.jpg']
       },
       {
           title: 'Death Star Lego',
           description: "May the force be with you",
           price: 45.00,
           quantity: 13,
           category: ['toys'],
           photo: ['http://images.brickset.com/sets/images/10188-1.jpg?200807260532']
       },
       {
           title: 'Police Boat Lego',
           description: "High noon on the high seas!",
           price: 20.00,
           quantity: 7,
           category: ['toys'],
           photo: ['http://images.brickset.com/sets/images/4010-1.jpg']
       },
       {
           title: 'Mario Party 3',
           description: "Letsa go!",
           price: 35.00,
           quantity: 3,
           category: ['toys', 'video games'],
           photo: ['http://static.giantbomb.com/uploads/original/0/2338/183539-mario_party_3__u_.jpg']
       },
       {
           title: 'Golden Eye',
           description: "The name's Bond, James Bond",
           price: 35.00,
           quantity: 82,
           category: ['toys', 'video games'],
           photo: ['https://upload.wikimedia.org/wikipedia/en/3/36/GoldenEye007box.jpg']
       },
        {
           title: 'BattleShip',
           description: "You have sunk my BattleShip",
           price: 49.99,
           quantity: 18,
           category: ['toys', 'board games'],
           photo: ['http://johnlewis.scene7.com/is/image/JohnLewis/233862525?$prod_main$']
       },
        {
           title: 'Connect Four',
           description: "The Vertical Checkers Game",
           price: 19.99,
           quantity: 11,
           category: ['toys', 'board games'],
           photo: ['http://www.mindpollution.org/wp-content/uploads/2012/05/connect-four.jpg']
       },
       {
           title: 'Tippman 98 Paintball Gun',
           description: "It's splatter time!",
           price: 149.99,
           quantity: 4,
           category: ['toys'],
           photo: ['http://www.paintballborjmilad.com/wp-content/uploads/2015/03/GNT98PWR_big.jpg']
       },
       {
           title: 'Bop-it Extreme',
           description: "Twist it",
           price: 14.99,
           quantity: 49,
           category: ['toys'],
           photo: ['https://gottabeot.files.wordpress.com/2014/06/9977d-bopitextreme.jpg']
       },
       {
           title: 'Nickeloden Gak',
           description: "SPLAT",
           price: 12.99,
           quantity: 109,
           category: ['toys'],
           photo: ['http://ecx.images-amazon.com/images/I/51pCCZ0a-GL._SY355_.jpg']
       },
       {
           title: 'Sky Dancer',
           description: "Dancing in the sky",
           price: 12.99,
           quantity: 109,
           category: ['toys'],
           photo: ['https://ak-hdl.buzzfed.com/static/2013-12/enhanced/webdr05/18/16/enhanced-buzz-4016-1387402830-27.jpg']
       },
       {
           title: 'Crossfire',
           description: "The rapid fire shootout game",
           price: 30.99,
           quantity: 200,
           category: ['toys'],
           photo: ['https://ak-hdl.buzzfed.com/static/2013-12/enhanced/webdr05/18/16/enhanced-buzz-3929-1387402772-0.jpg']
       },
       {
           title: 'Moon shoes',
           description: "Get ready to go to the moon",
           price: 60.99,
           quantity: 200,
           category: ['toys', 'clothing'],
           photo: ['https://ak-hdl.buzzfed.com/static/2013-12/enhanced/webdr06/18/16/enhanced-buzz-31398-1387402882-12.jpg']
       },
       {
           title: 'Treasure Trolls',
           description: "Trolled",
           price: 5.99,
           quantity: 200,
           category: ['toys'],
           photo: ['https://ak-hdl.buzzfed.com/static/2013-12/enhanced/webdr02/18/18/enhanced-buzz-24664-1387409408-0.jpg']
       },
       {
           title: 'Tickle Me Elmo',
           description: "Tickle me",
           price: 6.99,
           quantity: 500,
           category: ['toys'],
           photo: ['http://images.usatoday.com/money/_photos/2006/11/17/inside-toys-elmo.jpg']
       },
       {
           title: 'Street Sharks',
           description: "Tickle me",
           price: 24.99,
           quantity: 200,
           category: ['toys', 'action figures'],
           photo: ['https://ak-hdl.buzzfed.com/static/2013-12/enhanced/webdr02/18/17/enhanced-buzz-13848-1387404752-0.jpg']
       },
        {
           title: 'Power Rangers Action Figures',
           description: "Mighty morphin power rangers",
           price: 24.99,
           quantity: 200,
           category: ['toys', 'action figures'],
           photo: ['https://ak-hdl.buzzfed.com/static/2013-12/enhanced/webdr05/18/18/enhanced-buzz-18010-1387409751-2.jpg']
       },
       {
            title: '1st Edition Shadowless Charizard',
            description: 'FIRE SPIN!!!',
            price: 5000.00,
            quantity: 0,
            category: ['cards', 'pokemon', 'toys'],
            photo: ['http://www.fromjapan.co.jp/blog/en/wp-content/uploads/2014/05/Charizard-First-Edition-683x1024.jpg']
        },
        {
            title: 'Pokémon Starter Deck',
            description: 'For collecting purposes only. No one battles with pokémon cards anyways..',
            price: 75.00,
            quantity: 50,
            category: ['cards', 'pokemon', 'toys'],
            photo: ['http://ecx.images-amazon.com/images/I/51PHBTX31FL.jpg']
        },
        {
            title: 'Special Edition Pokémon: The Movie 2000 Mew Card',
            description: "From 'Pokémon: The Movie 2000'",
            price: 9.99,
            quantity: 1000,
            category: ['cards', 'pokemon', 'toys'],
            photo: ['http://www.ctraderonline.com/wp-content/uploads/2015/02/Ancient-Mew.jpg']
        },
        {
            title: '1st Edition Blastoise',
            description: 'HYDRO PUMP!!!',
            price: 150.00,
            quantity: 10,
            category: ['cards', 'pokemon', 'toys'],
            photo: ['http://static.api6.studiobebop.net/pokemon_data/card_images/Blastoise__2_102__Base_Set.jpg']
        },
        {
            title: '1st Edition Venusaur',
            description: 'SOLARBEAM!!!',
            price: 150.00,
            quantity: 10,
            category: ['cards', 'pokemon', 'toys'],
            photo: ['http://940ee6dce6677fa01d25-0f55c9129972ac85d6b1f4e703468e6b.r99.cf2.rackcdn.com/products/pictures/149513.jpg']
        },
        {
            title: '1st Edition Articuno',
            description: 'BLIZZARD!!!',
            price: 25.00,
            quantity: 7,
            category: ['cards', 'pokemon', 'toys'],
            photo: ['http://940ee6dce6677fa01d25-0f55c9129972ac85d6b1f4e703468e6b.r99.cf2.rackcdn.com/products/pictures/1068036.jpg']
        },
        {
            title: '1st Edition Zapdos',
            description: 'THUNDERBOLT!!!',
            price: 75.00,
            quantity: 10,
            category: ['cards', 'pokemon', 'toys'],
            photo: ['http://940ee6dce6677fa01d25-0f55c9129972ac85d6b1f4e703468e6b.r99.cf2.rackcdn.com/products/pictures/149539.jpg']
        },
        {
            title: '1st Edition Moltres',
            description: 'DIVE BOMB!!!',
            price: 40.00,
            quantity: 13,
            category: ['cards', 'pokemon', 'toys'],
            photo: ['http://940ee6dce6677fa01d25-0f55c9129972ac85d6b1f4e703468e6b.r99.cf2.rackcdn.com/products/pictures/149294.jpg']
        },
         {
            title: 'Space Jam VHS',
            description: 'For those who believe they can fly.',
            price: 5.00,
            quantity: 20,
            category: ['movies', 'vhs'],
            photo: ['http://ecx.images-amazon.com/images/I/51WWA6FJ70L.jpg']
        },
        {
            title: 'The Land Before Time',
            description: 'Your favorite dinosaur movie.',
            price: 5.00,
            quantity: 50,
            category: ['movies', 'vhs'],
            photo: ['http://ecx.images-amazon.com/images/I/51WMY2JY7QL.jpg']
        },
        {
            title: 'Forrest Gump',
            description: "Run Forrest, RUN!!",
            price: 5.00,
            quantity: 32,
            category: ['movies', 'vhs'],
            photo: ['http://ecx.images-amazon.com/images/I/71QT0YBK9ZL.gif']
        },
        {
            title: 'Titanic',
            description: 'Relive the greatest romance from the 90s',
            price: 7.00,
            quantity: 15,
            category: ['movies', 'vhs'],
            photo: ['http://ecx.images-amazon.com/images/I/71ZTV6TTC6L.gif']
        },
        {
            title: 'Jurassic Park',
            description: 'Dinosaurs!!',
            price: 5.00,
            quantity: 10,
            category: ['movies', 'vhs'],
            photo: ['http://ecx.images-amazon.com/images/I/71GXNSNZHCL.gif']
        },
        {
            title: 'Fight Club',
            description: 'The first rule of Fight Club.',
            price: 5.00,
            quantity: 7,
            category: ['movies', 'vhs'],
            photo: ['http://ecx.images-amazon.com/images/I/51RZTSSFMGL.jpg']
        },
        {
            title: 'Home Alone',
            description: 'Necessary non-fiction',
            price: 5.00,
            quantity: 30,
            category: ['movies', 'vhs'],
            photo: ['http://ecx.images-amazon.com/images/I/51GTF7T3ZPL.jpg']
        },
        {
            title: 'Braveheart',
            description: 'Kilts.',
            price: 5.00,
            quantity: 40,
            category: ['movies', 'vhs'],
            photo: ['http://ecx.images-amazon.com/images/I/7169ZjzyfuL._SY550_.jpg']
        }
    ];


    return Product.createAsync(products);

};

var seedUsers = function () {
    var users = [ 
        {
            email: 'coolio@aol.com',
            password: 'coolio',
            isAdmin: true
        },
        {
            email: 'tupac@aol.com',
            password: 'tupac',
            isAdmin: true
        }
    ];
    return User.createAsync(users);

};
connectToDb.then(function () {
    User.findAsync({}).then(function (users) {
        if (users.length === 0) {
            return seedUsers();
        } else {
            console.log(chalk.magenta('Seems to already be user data, exiting!'));
            process.kill(0);
        }
    }).then(function () {
        console.log(chalk.green('Seed successful!'));
        process.kill(0);
    }).catch(function (err) {
        console.error(err);
        process.kill(1);
    });
    Product.findAsync({}).then(function (products) {
        if (products.length === 0) {
            return seedProducts();
        } else {
            console.log(chalk.magenta('Seems to already be prodcut data, exiting!'));
            process.kill(0);
        }
    }).then(function () {
        console.log(chalk.green('Seed successful!'));
        process.kill(0);
    }).catch(function (err) {
        console.error(err);
        process.kill(1);
    });
});
