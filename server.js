const express = require('express')
const cors = require('cors')
const app = express()
const bodyParser = require('body-parser')

app.use(cors());
app.use(bodyParser.json())


const imagesData = [
      { id:101, imgurl:"https://res.cloudinary.com/dhtdkkae1/image/upload/v1712565223/taj-mahal-866692_1280_z6hb3r.jpg" , description:"The Taj Mahal is an iconic white marble mausoleum located in Agra, Uttar Pradesh, India. It was built by the Mughal emperor Shah Jahan in memory of his beloved wife, Mumtaz Mahal, who died during childbirth in 1631."},
      {id :103, imgurl:"https://res.cloudinary.com/dhtdkkae1/image/upload/v1712565260/golden_temple-105206_640_lf9qfl.jpg", description:"The Golden Temple, also known as Sri Harmandir Sahib or Darbar Sahib, is a prominent Sikh gurdwara located in Amritsar, Punjab, India. It is one of the most revered spiritual sites for Sikhs and holds significant historical and cultural importance."},
      {id :104, imgurl:"https://res.cloudinary.com/dhtdkkae1/image/upload/v1712565329/Lotus_temple_xharyq.jpg", description:"The Lotus Temple, located in New Delhi, India, is a Bahá'í House of Worship and one of the most distinctive architectural landmarks in the world. It is known for its unique lotus flower-inspired design and serves as a place of worship for people of all faiths."},
      {id :105, imgurl:"https://res.cloudinary.com/dhtdkkae1/image/upload/v1712565191/Himalaya_p4ksc0.jpg", description:"The Himalayas are a vast mountain range in Asia, stretching across five countries: India, Nepal, Bhutan, China (Tibet), and Pakistan. They are home to some of the world's highest peaks, including Mount Everest, the highest point on Earth."},
      {id :106, imgurl:"https://res.cloudinary.com/dhtdkkae1/image/upload/v1712565871/rajasthanu_t0nc5t.jpg", description:"Rajasthan is a state in northwestern India known for its diverse landscapes, which include the Thar Desert, also known as the Great Indian Desert. Here are some key points about the desert region within Rajasthan"},
      {id : 107, imgurl:"https://res.cloudinary.com/dhtdkkae1/image/upload/v1712569659/redfort3_xhqvdd.jpg", description:"The Red Fort, also known as Lal Qila in Hindi, is a historic fort located in the city of Delhi, India. It is one of the most iconic landmarks in the country and holds significant historical and cultural importance. Here are some key points about the Red Fort"}
    ];
  


const port = 4000;

app.get("/images", (req,res)=>{
    res.send(imagesData)

})


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });