import express from 'express'

const app = express();

// app.get('/', (req, res) => {
//     res.send('Hello DHirajjjj!')
// })


app.get('/api/jokes', (req, res) =>{
  const jokes = [
    {
      id: 1,
      title: "Skeleton Fight",
      joke: "Why don’t skeletons fight each other? They don’t have the guts.",
    },
    {
      id: 2,
      title: "Fake Spaghetti",
      joke: "What do you call fake spaghetti? An impasta!",
    },
    {
      id: 3,
      title: "Scarecrow Award",
      joke: "Why did the scarecrow win an award? He was outstanding in his field.",
    },
    {
      id: 4,
      title: "Space Party",
      joke: "How do you organize a space party? You planet.",
    },
    {
      id: 5,
      title: "Orange Parrot",
      joke: "What’s orange and sounds like a parrot? A carrot.",
    },
  ];
      res.send(jokes);
})

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})