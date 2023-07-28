// import fetch from "node-fetch"

// export const getSlides = () => {
//     var path = '/images';

//     const slides = [
//       {url: `${path}/119138.png`, title: "Mol1"},
//       {url: `${path}/7568545.png`, title: "Mol2"},
//       {url: `${path}/9794056.png`, title: "Mol3"},

//     ];
    
//     return slides;
//   }






function ReadData() {  
  const fs = require('fs');

  data = fs.readFile('SmileCID_dict.json', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  const jsonData = JSON.parse(data);
  
  Object.entries(jsonData).forEach(([key, value]) => {
    console.log(`${key}: ${value}`);
  });

});

}

ReadData();





  