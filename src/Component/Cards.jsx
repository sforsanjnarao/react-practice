import React from "react";

function Cards() {
  let data = [
    {
      image:
        "https://i.pinimg.com/736x/b7/2e/21/b72e216f037d1ef9143f1b5dc555da30.jpg",
      name: "Cartoon",
      discription:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime quae enim officia eveniet unde omnis labore inventore.",
        stock:true,
    },
    {
      image:
        "https://i.pinimg.com/474x/9b/9a/7e/9b9a7ee777d11263d9e767a909e82038.jpg",
      name: "favCart",
      discription:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime quae enim officia eveniet unde omnis labore inventore.",
        stock:true,
    },
    {
      image:
        "https://i.pinimg.com/474x/08/30/b2/0830b2a711fc53167562d967ad53dc83.jpg",
      name: "Nature",
      discription:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime quae enim ",
        stock:false,
    },
  ];
  return (
    <>
      <div className="w-full h-[100vh] bg-zinc-200 flex justify-center items-center gap-10">
        {data.map((e, index) => (
          <div className="w-[17%] h-80 bg-slate-50 rounded overflow-auto" key={index}>
            <div className="h-1/2 w-full bg-white rounded">
              <img
                src={e.image}
                alt=""
                className="object-cover w-full h-full rounded-t"
              />
            </div>
            <div className="p-2 w-full">
              <h2>{e.name}</h2>
              <p className="text-sm">{e.discription}</p>
              <button className={`px-3 py-1 text-sm mt-1 text-white rounded ${e.stock ? 'bg-sky-500' : 'bg-red-500'} m-auto`}>{e.stock ? 'InStock': 'outStock'}</button>

            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Cards;
