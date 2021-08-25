const mongoose = require("mongoose");
const db = require("../models");
mongoose.connect(process.env.MONGODB_URI ||
  "mongodb://localhost/football", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  }
);

const rbSeed = [
  {
    ranking: "1",
    name: "Christian McCaffrey",
    team: "Carolina Panthers",
    description: "McCaffrey returns to Panthers off a season slowed by injuries. Despite being injured last year he did prove why he was the first overall pick when he was on the field, netting 20 or more fantasy points in his 3 games played. This year he will return to being the majority of the Panthers offense next to new QB Sam Darnold."
  },
  {
    ranking: "2",
    name: "Dalvin Cook",
    team: "Minnesota Vikings",
    description: "In a run heavy offense in Minnesota Cook returns to his lead back role with no sign of slowing down."
  },
  {
    ranking: "3",
    name: "Derrick Henry",
    team: "Tennesee Titans",
    description: "The true work horse running back in the NFL Henry will be set up for another monster season. Rushing wise he is the best runner in football the only thing that stops him from being 1 or 2 is his lack of pass catching. However, his ability to run people over and find the endzone is unmatched."
  },
  {
    ranking: "4",
    name: "Ezekiel Elliott",
    team: "Dallas Cowboys",
    description: "Following a dissapointing year, that saw the Cowboys loose their starting QB Dak Prescot, for the season, Elliott struggled. The silver lining is the few games he did play with Prescott last year he was fantastic. Look for more opportunties for him as well to help Prescot ease back into things and all in all I think Zeke will eat this year."
  },
  {
    ranking: "5",
    name: "Alvin Kamara",
    team: "New Orleans Saints",
    description: "Kamara has the chance to finish as the top RB on the year but you cant ignore the Saints big a hole at QB. With Brees retiring I have my doubts on Kamara. Kamara was not the same RB without Brees last year when he missed due to a thumb injury. Kamara does most of his work in the passing game and without the check down king Brees Kamara might not finish in the top 10 of RBs."
  },
  {
    ranking: "6",
    name: "Saquon Barkley",
    team: "New York Giants",
    description: "Coming off of a torn ACL Barkley looks to bounce back. Prior to his injury last year Barkley sees one of the highest usages in the leage so as long as he can stay healthy look for a big bounce back season for Barkley."
  },
  {
    ranking: "7",
    name: "Aaron Jones",
    team: "Green Bay Packers",
    description: "A great running back on a great offense. Jones will be a strong option again this year the only thing that will hold him back is how many touchdowns will Aaron Rodgers throw."
  },
  {
    ranking: "8",
    name: "Nick Chubb",
    team: "Cleveland Browns",
    description: "The lead back on the best rushing team in football look to do it again. Chubb is a fantastic option behing the best offensive line in football just hope that Kareem Hunt doesnt take too many carries away from him."
  },
  {
    ranking: "9",
    name: "Jonathan Taylor",
    team: "Indianapolis Colts",
    description: "Taylor had a n up and down season last year but finished strong to finish as RB 4. This year look for more of the same but with a recent injury to Quintin Nelson and Carson Wentz plus the return of Marlon Mack we will see if Taylor can put it together again for a another top 10 season."
  },
  {
    ranking: "10",
    name: "Austin Ekeler",
    team: "Los Angeles Chargers",
    description: "Ekeler may not be the best pure runner but he makes up for that with his pass catching. With the emergence of Justin Herbert last season, Ekeler looks to have another quality season in an every down back role."
  }
]

const storiesSeed = [
  {
    headline: "Draft Tips",
    intro: "As the season quickly approaches you need to ace your draft. Were as you most likely wont win your league from your draft you can dfinitely put your self on the right path for success. Trust me you may think you know what you are doing but every year a big mistake could cost you. If you follow these tips success will surely follow.",
    points: ["1. Draft Running Backs and Wide Receivers early!", "2. Draft value and draft your guys!", "3. Be cautios when drafting Quarterbacks and Tight Ends.", "4. Dont draft a defense early!",],
    descriptions: ["Ok this one may seem obvious but the level of talent at the tope of these two postiions is so much higher than other positions you will find yourself in trouble with no top tier talent and lack of depth if you dont spend your top pick at these postions. All fantasy teams comprise of at least 4 running backs and wide receivers and possibly more depending on your leagues settings and how many flex spots you might have. You may think there is enough depth especially at wide receiver that you can wait on these players but as I mentioned talent drops off quick. If we look at the 2020 Full PPR season stats for running backs only 3 players put up over 300 fantasy points, with only 13 running backs going for over 200 and Chris Carson who finished as running back 19 on the season only put up half the amount of points as Alvin Kamara who finished as the seasons top running back. Wide receivers have a lot more depth than running backs but see a similar dip in talent. My advice 4 of your 5 first round picks should be running backs and wide recivers and at minimum 1 of your first 2 rounds should be a running back.", "When drafting im sure you have heard to draft the best available player. This does not always work and is dependent on your roster make up but when drafting you have to treat everything as a potential asset. Every asset has a draft price and in fantasy that is their ADP or Average Draft Position. Basically if your freidns or coworkers keep consistently passing on a player and you can take him 2 rounds later than he was supposed to go DO IT! Trust me the experts know more than your friends so if a guy is falling take him and then brag to your friends that you got him way cheaper than you should have. Do this with a grain of salt though. Obvioulsy if experts were always right fantasy would be no run and everyone would have a clear blueprint for who to take so have players that you like and draft them. Be careful though you don't want to take someone too early but if you have a hunch on someone take the plunge. Look for value and draft your guys.", "There are some big names at the top of QB and TE lists and those big names can be tempting but my advice would be to wait on these positions. Going back to my frist point on drafting running backs and wide receivers early. The top QBs and TEs will go off the board in the early rounds. Kelce (1st), Mahomes (2nd-3rd), Waller (2nd-3rd), Kittle (3rd-4th), and Allen and Murray (4th-5th). Almost everyone wants one of these players on their team and they are great players but the need to draft them early is not exactly there. When looking at the quarterbacks there is so much depth that spending an early pick seems like its not worth it. Looking at 2020 10 QBs averaged over 21 fantasy points a game with the highest being 25. Ok I see what you are thinking looks like you should try to grab one of the top 10 QBs and you can because in almost every format Brady, Tannehill and Stafford are going 7th round or later. These are solid options and will allow you to draft more depth in the start of the draft. When you look at the TEs is a little different if you can get Kelce, Kittle or Waller meaning they fall at the top of your draft board for your pick take them you will be happy as those 3 produce more than most top fantasy wide recievers but if you dont get one of those top 3 dont spend your draft capital on it. There are still top 12 Tight Ends on the board in the 12th round or later. Last year TE 4 only averaged slightly over 2 more fantasy points per game versus TE 17. So if you miss on the top guys dont worry about drafting a TE until late as there is almost no difference between TE 4 - 17.", "This cannot be stressed enough and I know because I was someone who used to be naive enough to do this. It can be really tempting to take the best defense on the board around round 10-12 because you are looking at your team your starters are filled and so you reach. DO NOT DO THIS. Defense is such a roll of the dice week to week and they are more dependent on matchup than anything else. The top defenses will not score much more than the ones below. When you take a defense in these rounds you wont be able to get some of the depth that you would have liked and I promise you someone will get hurt and you will then not have a viable replacement. Let your friends take defenses early and when they do stock up on backups. My advice draft a defense in one of the last few rounds and then stream the best matchup every week (whatever defense is playing Houston.)."]
  }
]

db.Stories
  .deleteMany()
  .then(() => db.Stories.collection.insertMany(storiesSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
   })

db.RBs
  .deleteMany()
  .then(() => db.RBs.collection.insertMany(rbSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
   })