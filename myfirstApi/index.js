const express = require("express");
const app = express();
require("dotenv").config();
const dbConnect = require("./config/dataBase");
const PORT = process.env.PORT || 2089;
<<<<<<< HEAD
const cors=require("cors");
app.use(express.json());
app.use(cors());
=======
app.listen(PORT, () => {
    console.log("We are running on " + PORT);
})
app.get("/", (req, res) => {
    res.send("Hello world");
})
dbConnect();
>>>>>>> 75171ea5ce0093fb8d4185572f675e726c2fdd96

console.log("fhdffddhdljhgkdfhgjfdkjghfdhghggdfghfghhghfghghfdhg")

app.listen(PORT, () => {
  console.log("We are running on " + PORT);
});
app.get("/", (req, res) => {
  const aiData = [
    {
      id: 1,
      name: "bikash",
      text: "Bikash is a KanaBaya",
      image:
        "https://res.cloudinary.com/dd8zpyf5j/image/upload/v1700921587/samples/man-portrait.jpg",
    },
    {
      id: 2,
      name: "bikash",
      text: "Bikash is a KanaBaya",
      image:
        "https://res.cloudinary.com/dd8zpyf5j/image/upload/v1700921587/samples/man-portrait.jpg",
    },
    {
      id: 3,
      name: "bikash",
      text: "Bikash is a KanaBaya",
      image:
        "https://res.cloudinary.com/dd8zpyf5j/image/upload/v1700921587/samples/man-portrait.jpg",
    },
    {
      id: 4,
      name: "bikash",
      text: "Bikash is a KanaBaya",
      image:
        "https://res.cloudinary.com/dd8zpyf5j/image/upload/v1700921587/samples/man-portrait.jpg",
    },
    {
      id: 5,
      name: "bikash",
      text: "Bikash is a KanaBaya",
      image:
        "https://res.cloudinary.com/dd8zpyf5j/image/upload/v1700921587/samples/man-portrait.jpg",
    },
    {
      id: 6,
      name: "bikash",
      text: "Bikash is a KanaBaya",
      image:
        "https://res.cloudinary.com/dd8zpyf5j/image/upload/v1700921587/samples/man-portrait.jpg",
    },
    {
      id: 7,
      name: "bikash",
      text: "Bikash is a KanaBaya",
      image:
        "https://res.cloudinary.com/dd8zpyf5j/image/upload/v1700921587/samples/man-portrait.jpg",
    },
    {
      id: 8,
      name: "bikash",
      text: "Bikash is a KanaBaya",
      image:
        "https://res.cloudinary.com/dd8zpyf5j/image/upload/v1700921587/samples/man-portrait.jpg",
    },
    {
      id: 9,
      name: "bikash",
      text: "Bikash is a KanaBaya",
      image:
        "https://res.cloudinary.com/dd8zpyf5j/image/upload/v1700921587/samples/man-portrait.jpg",
    },
    {
      id: 10,
      name: "bikash",
      text: "Bikash is a KanaBaya",
      image:
        "https://res.cloudinary.com/dd8zpyf5j/image/upload/v1700921587/samples/man-portrait.jpg",
    },
    {
      id: 11,
      name: "bikash",
      text: "Bikash is a KanaBaya",
      image:
        "https://res.cloudinary.com/dd8zpyf5j/image/upload/v1700921587/samples/man-portrait.jpg",
    },
    {
      id: 12,
      name: "bikash",
      text: "Bikash is a KanaBaya",
      image:
        "https://res.cloudinary.com/dd8zpyf5j/image/upload/v1700921587/samples/man-portrait.jpg",
    },
    {
      id: 13,
      name: "bikash",
      text: "Bikash is a KanaBaya",
      image:
        "https://res.cloudinary.com/dd8zpyf5j/image/upload/v1700921587/samples/man-portrait.jpg",
    },
    {
      id: 14,
      name: "bikash",
      text: "Bikash is a KanaBaya",
      image:
        "https://res.cloudinary.com/dd8zpyf5j/image/upload/v1700921587/samples/man-portrait.jpg",
    },
    {
      id: 15,
      name: "bikash",
      text: "Bikash is a KanaBaya",
      image:
        "https://res.cloudinary.com/dd8zpyf5j/image/upload/v1700921587/samples/man-portrait.jpg",
    },
  ];
  res.json(aiData);
});
dbConnect();
