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