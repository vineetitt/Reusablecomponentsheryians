import React from "react";

function Card() {
  const data = [
    {
      image:
        "https://images.unsplash.com/photo-1719937206098-236a481a2b6d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "fruits",
    },
    {
      image:
        "https://images.unsplash.com/photo-1726199029699-e314218e852d?q=80&w=1370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Museum",
    },
    {
      image:
        "https://images.unsplash.com/photo-1615986201152-7686a4867f30?q=80&w=1450&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Books",
    },
  ];

  return (
    <div className="w-full h-screen bg-zinc-200 flex justify-center items-center">
      <div className="flex space-x-4">
        {data.map((value, index) => (
          <div key={index} className="w-52 bg-zinc-100">
            <div className="w-full h-32 bg-zinc-300">
              <img
                className="h-full w-full object-cover"
                src={value.image}
                alt={value.name}
              />
            </div>
            <div className="w-full px-3 py-4">
              <h2 className="font-bold">{value.name}</h2>
              <p className="text-sm mt-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                suscipit illum debitis? Minima quod repellendus maiores
                architecto!
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card;
