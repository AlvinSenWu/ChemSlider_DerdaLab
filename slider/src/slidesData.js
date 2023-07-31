

export const getSlides = () => {
  // The smileCIDs object data
  var path = '/images';
  var slides = []

  var smileCIDs = {
    "C1=CC(=CC=C1C(=O)N[C@@H]2[C@@H]([C@@H](O[C@@H]([C@H]2O)S[C@H]3[C@@H]([C@H]([C@H]([C@H](O3)CO)O)NC(=O)C4=CC=C(C=C4)[N+](=O)[O-])O)CO)O)[N+](=O)[O-]": 44586822,
    "CNC(=O)C1=CN(N=N1)[C@H]2[C@H]([C@H](O[C@H]([C@@H]2O)S[C@H]3[C@@H]([C@H]([C@H]([C@H](O3)CO)O)N4C=C(N=N4)C(=O)NC)O)CO)O": 11541495,
    "CCCCNC(=O)C1=CN(N=N1)[C@H]2[C@H]([C@H](O[C@H]([C@@H]2O)SC)CO)O": 11581280,
    "CCCCNC(=O)C1=CN(N=N1)[C@H]2[C@H]([C@H](O[C@H]([C@@H]2O)SS[C@H]3[C@@H]([C@H]([C@H]([C@H](O3)CO)O)OCC4=CC5=C(C=CC(=C5F)F)OC4=O)O)CO)O": 137655629,
    "C1=CC(=CC(=C1)F)C2=CN(N=N2)[C@H]3[C@H]([C@H](O[C@H]([C@@H]3O)SS[C@H]4[C@@H]([C@H]([C@H]([C@H](O4)CO)O)N5C=C(N=N5)CNC(=O)C6=CC7=C(C=C6)C8(C9=C(C=C(C=C9)O)OC1=C8C=CC(=C1)O)OC7=O)O)CO)O": 137642445,
    "C1=CC=C(C=C1)S[C@@H]2[C@@H]([C@H]([C@H]([C@H](O2)CO)O)N3C=C(N=N3)C4=CC(=C(C(=C4)F)F)F)O": 122443516,
    "C1=CC(=C(C=C1S[C@@H]2[C@@H]([C@H]([C@H]([C@H](O2)CO)O)N3C=C(N=N3)C4=CC(=C(C(=C4)F)F)F)O)Cl)C#N": 122443352,
    "CC1=CC=C(C=C1)S[C@H]2[C@@H]([C@H]([C@H]([C@H](O2)CO)O)N3C=C(N=N3)C4=CC=C(C=C4)F)O": 137661718,
    "CC(=O)N[C@@H]1[C@H]([C@@H]([C@H](O[C@@H]1OCCCCCCCCCCCCS)CO)O[C@H]2[C@@H]([C@H]([C@H]([C@H](O2)CO)O)O)O)O": 52918117,
    "CO[C@H]1[C@@H]([C@H]([C@H]([C@H](O1)CO)O)NC2=CC(=CC=C2)Cl)O": 155563008
  }
  // console.log("smileCIDS read")

    Object.entries(smileCIDs).forEach(([smile, cid]) => {
      const url = `${path}/${cid}.png`;
      console.log(url)
      slides.push({ url, title: smile });
    });
    return slides
  };






// this is causing issues -> maybe write a backend later on using nodejs since fs cant be used in browser
// async function ReadDataFromFile() {  
//   const fs = require('fs');

//   data = fs.readFile('SmileCID_dict.json', 'utf8', (err, data) => {
//   if (err) {
//     console.error(err);
//     return;
//   }

//   const jsonData = JSON.parse(data);

//   Object.entries(jsonData).forEach(([key, value]) => {
//     // console.log(`${key}: ${value}`);
//     console.log(value)
//   });

// });

// }

// ReadDataFromFile();







