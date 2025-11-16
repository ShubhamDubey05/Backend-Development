const express  = require("express");
const main = express();
const port = process.env.PORT || 3000;

const cors = require("cors");
main.use(cors());

main.get('/', (req, res)=>{
  res.send("This is home page")
})
main.get('/about', (req, res)=>{
  res.send("This is about page");
})

main.get('/api/jokes', (req, res)=>{
  const jokes = [
  {
    id: 1,
    category: "student",
    joke: "Teacher: Tum exam me late kyu aaye? Student: Sir, aapne hi kaha tha 'Follow your dreams'... to mai so raha tha."
  },
  {
    id: 2,
    category: "coding",
    joke: "Programmer ki shaadi kyun nahi hoti? Kyunki wo 'commit' se darta hai!"
  },
  {
    id: 3,
    category: "relationship",
    joke: "Girl: Tum mujhe kitna pyaar karte ho? Boy: 0 se infinity tak! Girl: Matlab? Boy: Matlab fix nahi, error aa raha hai."
  },
  {
    id: 4,
    category: "office",
    joke: "Boss: Tum late kyun aaye? Employee: Sir traffic! Boss: Par Sunday hai! Employee: Sir, respect ke chakkar me jhooth bol diya."
  },
  {
    id: 5,
    category: "simple",
    joke: "Doctor: Aapko kis cheez se allergy hai? Patient: Paise se! Doctor: Kaise pata? Patient: Jab bhi milte hain… kuch hi din me khatam ho jaate hain."
  },
  {
    id: 6,
    category: "coding",
    joke: "Debugging: Jab crime bhi tum hi karo aur detective bhi tum hi ho."
  },
  {
    id: 7,
    category: "student",
    joke: "Student: Sir, kya aap mujhe saza denge? Teacher: Bilkul! Student: Thank you sir, mujhe ghar nahi jana tha."
  },
  {
    id: 8,
    category: "adult-funny",
    joke: "Biwi: Tum mujhe kahan le jaa rahe ho? Pati: Surprise! Biwi: Batao na! Pati: Bijli ka bill bharne."
  }
];
res.send(jokes);
})



main.listen(port,()=>{
  console.log(`server is running at ${port}`);
})