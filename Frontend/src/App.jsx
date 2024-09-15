import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [jokes, SetJokes] = useState([]);

  useEffect(() => {
    axios
      .get("/api/jokes")
      .then((res) => {
        SetJokes(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, []); // Empty dependency array means the effect runs only once after the initial render

  return (
    <>
      <div className="bg-cyan-900 flex flex-col justify-center min-h-screen items-center p-5">
        <div className="text-center m-10 p-10 bg-gray-800 rounded-lg shadow-lg">
          <h1 className="font-bold text-[40px] text-white mb-5">
            Jokes App with Backend and Frontend
          </h1>
          <p className="font-sans font-bold text-[30px] text-yellow-500 mb-8">
            Total Jokes: {jokes.length}
          </p>
        </div>

        <div className="w-full max-w-lg">
          {jokes.map((jokeItem) => (
            <div
              className="bg-gray-700 p-5 mb-5 rounded-lg shadow-md"
              key={jokeItem.id}
            >
              <span className="block text-black text-[20px] text-center bg-orange-200 rounded-lg p-2 font-bold mb-2">
                No.{jokeItem.id}
              </span>
              <h3 className="text-center font-bold text-[22px] text-amber-300 mb-3">
                {jokeItem.title}
              </h3>
              <p className="text-center text-white text-lg">{jokeItem.joke}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
