const tables = [
  {
    key: "robinAndBarney",
    row: 1,
    imgPath: "/tableau-de-tv-series/img/robinAndBarney.jpg",
    name: "Barney Stinson e Robin Scherbatsky",
    from: "How I met your mother",
    story:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    peopleInTheTable: ["Person 1", "Person 2", "Person 3", "Person 4", "Person 5", "Person 6"],
  },
  {
    key: "amyAndSheldon",
    row: 1,
    imgPath: "/tableau-de-tv-series/img/amyAndSheldon.jpg",
    name: "Amy Farrah Fowler e Sheldon Cooper",
    from: "The Big Bang Theory",
    story:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    peopleInTheTable: ["Person 7", "Person 8", "Person 9", "Person 10", "Person 11", "Person 12"],
  },
  {
    key: "lilyAndMarshall",
    row: 1,
    imgPath: "/tableau-de-tv-series/img/lilyAndMarshall.webp",
    name: "Lily Aldrin e Marshall Eriksen",
    from: "How I met your mother",
    story:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    peopleInTheTable: ["Person 13", "Person 14", "Person 15", "Person 16", "Person 17", "Person 18"],
  },
  {
    key: "pamAndJim",
    row: 2,
    imgPath: "/tableau-de-tv-series/img/pamAndJim.png",
    name: "Jim Halpert e Pam Beesly",
    from: "The Office",
    story:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    peopleInTheTable: ["Person 19", "Person 20", "Person 21", "Person 22", "Person 23", "Person 24"],
  },
  {
    key: "bernadetteAndHoward",
    row: 2,
    imgPath: "/tableau-de-tv-series/img/bernadetteAndHoward.jpeg",
    name: "Howard Wolowitz e Bernadette Rostenkowski",
    from: "The Big Bang Theory",
    story:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
      peopleInTheTable: ["Person 25", "Person 26", "Person 27", "Person 28", "Person 29", "Person 30"],
  },
  {
    key: "lisbonAndJane",
    row: 2,
    imgPath: "/tableau-de-tv-series/img/lisbonAndJane.jpeg",
    name: "Teresa Lisbon e Patrick Jane",
    from: "The Mentalist",
    story:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    peopleInTheTable: ["Person 31", "Person 32", "Person 33", "Person 34", "Person 35", "Person 36"],
  },
  {
    key: "pennyAndLeonard",
    row: 2,
    imgPath: "/tableau-de-tv-series/img/pennyAndLeonard.jpg",
    name: "Penny e Leonard Hofstadter",
    from: "The Big Bang Theory",
    story:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    peopleInTheTable: ["Person 37", "Person 38", "Person 39", "Person 40", "Person 41", "Person 42"],
  },
  {
    key: "meredithAndDerek",
    row: 2,
    imgPath: "/tableau-de-tv-series/img/meredithAndDerek.jpeg",
    name: "Meredith Grey e Derek Shepherd",
    from: "Grey's Anatomy",
    story:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    peopleInTheTable: ["Person 43", "Person 44", "Person 45", "Person 46", "Person 47", "Person 48"],
  },
];

const tablesMap = new Map();
tables.map((couple) => {
  return tablesMap.set(couple.key, couple);
});

export { tables, tablesMap };
