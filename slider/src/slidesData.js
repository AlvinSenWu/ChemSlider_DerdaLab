

export const getSlides = () => {
  // The smileCIDs object data
  var path = '/images';
  var slides = []

  var smileCIDs = {
    "CC1=CC=C(C=C1)S[C@H]2[C@@H]([C@H]([C@H]([C@H](O2)CO)O)N3C=C(N=N3)C4=CC=C(C=C4)Br)O": 137651168,
    "CC1=CC=C(C=C1)S[C@H]2[C@@H]([C@H]([C@H]([C@H](O2)CO)O)N3C=C(N=N3)C4=CC=C(C=C4)F)O": 137661718,
    "CC1=CC=C(C=C1)S[C@@H]2[C@@H]([C@H]([C@H]([C@H](O2)CO)O)N3C=C(N=N3)C4=CC(=C(C(=C4)F)F)F)O": 122443477,
    "C1=CC(=CC(=C1)Cl)S[C@H]2[C@@H]([C@H]([C@H]([C@H](O2)CO)O)N3C=C(N=N3)C4=CC(=C(C(=C4)F)F)F)O": 134812702,
    "CCS[C@@H]1[C@@H]([C@H]([C@H]([C@H](O1)CO)O)N2C=C(N=N2)C3=CC(=C(C(=C3)F)F)F)O": 122443514,
    "C1=C(C=C(C(=C1F)F)F)C2=CN(N=N2)[C@H]3[C@H]([C@H](O[C@H]([C@@H]3O)SS[C@H]4[C@@H]([C@H]([C@H]([C@H](O4)CO)O)N5C=C(N=N5)C6=CC(=C(C(=C6)F)F)F)O)CO)O": 137656955,
    "C1=CC(=C(C2=C1OC(=O)C(=C2)CO[C@H]3[C@H]([C@H](O[C@H]([C@@H]3O)SS[C@H]4[C@@H]([C@H]([C@H]([C@H](O4)CO)O)N5C=C(N=N5)C6=CC(=C(C(=C6)F)F)F)O)CO)O)F)F": 137636038,
    "CCCCNC(=O)C1=CN(N=N1)[C@H]2[C@H]([C@H](O[C@H]([C@@H]2O)SS[C@H]3[C@@H]([C@H]([C@H]([C@H](O3)CO)O)OCC4=CC5=C(C=CC(=C5F)F)OC4=O)O)CO)O": 137655629,
    "CC(CNC(=O)C1=CN(N=N1)[C@H]2[C@H]([C@H](O[C@H]([C@@H]2O)S[C@H]3[C@@H]([C@H]([C@H]([C@H](O3)CO)O)N4C=C(N=N4)C(=O)NCC(C)O)O)CO)O)O": 52946042,
    "COCCNC(=O)C1=CN(N=N1)[C@H]2[C@H]([C@H](O[C@H]([C@@H]2O)S[C@H]3[C@@H]([C@H]([C@H]([C@H](O3)CO)O)N4C=C(N=N4)C(=O)NCCOC)O)CO)O": 52941211,
    "C1=CC(=CC(=C1)F)C2=CN(N=N2)[C@H]3[C@H]([C@H](OC([C@@H]3O)SC4[C@@H]([C@H]([C@H]([C@H](O4)CO)O)N5C=C(N=N5)C6=CC(=CC=C6)F)O)CO)O": 118436792,
    "C1=CSC=C1C2=CN(N=N2)[C@H]3[C@H]([C@H](O[C@H]([C@@H]3O)S[C@H]4[C@@H]([C@H]([C@H]([C@H](O4)CO)O)N5C=C(N=N5)C6=CSC=C6)O)CO)O": 121493958,
    "C1C[C@H](C(C(C1)N2C=C(N=N2)C3=CSC=C3)O)S[C@H]4C([C@H]([C@H](C(O4)CO)O)N5C=C(N=N5)C6=CSC=C6)O": 68014109,
    "C1C[C@H](C(C(C1)N2C=C(N=N2)C3=CC=C(C=C3)F)O)S[C@H]4C([C@H]([C@H](C(O4)CO)O)N5C=C(N=N5)C6=CC=C(C=C6)F)O": 68014112,
    "C1=CC(=CC=C1C2=CN(N=N2)[C@H]3[C@H]([C@H](O[C@H]([C@@H]3O)SS[C@H]4[C@@H]([C@H]([C@H]([C@H](O4)CO)O)N5C=C(N=N5)C6=CC=C(C=C6)F)O)CO)O)F": 137632583,
    "CS[C@H]1[C@@H]([C@H]([C@H]([C@H](O1)CO)O)N2C=C(N=N2)C3=CC=CC=C3F)O": 11544911,
    "CS[C@H]1[C@@H]([C@H]([C@H]([C@H](O1)CO)O)N2C=C(N=N2)C3=CC=CC4=CC=CC=C43)O": 11617978,
    "CC1=CC=C(C=C1)S[C@H]2[C@@H]([C@H]([C@H]([C@H](O2)CO)O)N3C=C(N=N3)C4=CC(=CC=C4)Cl)O": 137636008,
    "CC1=CC=C(C=C1)S[C@H]2[C@@H]([C@H]([C@H]([C@H](O2)CO)O)O)O": 7315241,
    "CS[C@H]1[C@@H]([C@H]([C@H]([C@H](O1)CO)O)O)O": 10036019,
    "C([C@@H]1[C@@H]([C@@H]([C@H]([C@@H](O1)SS[C@H]2[C@@H]([C@H]([C@H]([C@H](O2)CO)O)O)O)O)O)O)O": 54768329,
    "CO[C@H]1[C@H]([C@H]([C@H]([C@H](O1)CO)O)O)O": 7568471,
    "CO[C@H]1[C@@H]([C@H]([C@@H]([C@H](O1)CO)O[C@H]2[C@@H]([C@H]([C@H]([C@H](O2)CO)O)O)O)O)O": 121942,
    "C(CO[C@H]1C([C@H]([C@@H](C(O1)CO)O[C@H]2C([C@H](C(C(O2)CO)O)O)O)O)O)N=[N+]=[N-]": 124203882,
    "CC1=CC=C(C=C1)N[C@H]2[C@H]([C@H](O[C@H]([C@@H]2O)OC)CO)O": 155554378,
    "CO[C@H]1[C@@H]([C@@H]([C@H]([C@H](O1)CO)O)NC2=CC=CC=C2)O": 155537041,
    "CC1=CC(=CC=C1)N[C@H]2[C@H]([C@H](O[C@H]([C@@H]2O)OC)CO)O": 155538998,
    "CC1=C(C=C(C=C1)N[C@@H]2[C@H]([C@H](O[C@H]([C@@H]2O)OC)CO)O)C": 155512458,
    "C1=CC(=CC(=C1)Cl)N[C@H]2[C@H]([C@H](O[C@@H]([C@@H]2O)SC3=CC(=C(C=C3)Cl)Cl)CO)O": 155530852,
    "CO[C@@H]1[C@@H]([C@H]([C@H]([C@H](O1)CO)O)OCC2=CC3=CC=CC=C3OC2=O)O": 118707323,
    "C1=CC=C2C(=C1)C=C(C(=O)O2)CO[C@H]3[C@H]([C@H](O[C@H]([C@@H]3O)S[C@H]4[C@@H]([C@H]([C@H]([C@H](O4)CO)O)OCC5=CC6=CC=CC=C6OC5=O)O)CO)O": 71666730,
    "CO[C@@H]1[C@@H]([C@H]([C@H]([C@H](O1)CO)O)OCC\\2=CC3=CC=CC=C3O/C2=N\\S(=O)(=O)C4=CC=CC=C4)O": 118707321,
    "CC1=CC=C(C=C1)S(=O)(=O)/N=C\\2/C(=CC3=CC=CC=C3O2)CO[C@H]4[C@H]([C@H](O[C@@H]([C@@H]4OC(=O)C)OC)CO)O": 118707320,
    "CO[C@H]1[C@@H]([C@H]([C@H]([C@H](O1)CO)O)OCC2=CC(=NC(=N2)N)C3=CC=CC=C3F)O": 155515859,
    "CO[C@H]1[C@@H]([C@H]([C@H]([C@H](O1)CO)O)OCC2=CC(=NC(=N2)N)C3=CC(=CC=C3)F)O": 155510726,
    "C[C@H]([C@@H](C(=O)O)N1C=C(N=N1)CO[C@H]2[C@H]([C@H](O[C@@H]([C@@H]2O)OC)CO)O)O": 122181347,
    "CO[C@@H]1[C@@H]([C@H]([C@H]([C@H](O1)CO)O)OCC2=CN(N=N2)[C@@H](CCCCN)C(=O)O)O": 122181350,
    "CO[C@@H]1[C@@H]([C@H]([C@H]([C@H](O1)CO)O)OCC2=CN(N=N2)[C@@H](CC3=CC=CC=C3)C(=O)O)O": 122181348,
    "CC(=O)N[C@@H]1[C@H]([C@@H]([C@H](O[C@H]1OC)CO)O[C@H]2[C@@H]([C@H]([C@H]([C@H](O2)CO)O)N3C=C(N=N3)C(=O)NCC4=CC=CC=C4)O)O": 52944831,
    "CC(=O)N[C@@H]1[C@H]([C@@H]([C@H](O[C@H]1OC)CO)O[C@H]2[C@@H]([C@H]([C@H]([C@H](O2)CO)O)N3C=C(N=N3)C(=O)NC4=CC=CC5=CC=CC=C54)O)O": 52947288,
    "C1=CC=C(C=C1)OC2=CC=C(C=C2)C3=CN(N=N3)[C@H]4[C@H]([C@H](O[C@H]([C@@H]4O)O[C@@H]5[C@H](O[C@H]([C@@H]([C@H]5O)N6C(=O)C7=CC=CC=C7C6=O)OCCCN=[N+]=[N-])CO)CO)O": 71562354,
    "C1=CC=C(C=C1)C(=O)N[C@@H]2[C@H]([C@@H]([C@H](O[C@H]2OCCCN=[N+]=[N-])CO)O[C@H]3[C@@H]([C@H]([C@H]([C@H](O3)CO)O)OCC4=CC=C(C=C4)OC5=CC=CC=C5)O)O": 71562246,
    "C1=CC(=CC=C1C(=O)N[C@@H]2[C@@H]([C@@H](O[C@@H]([C@H]2O)S[C@H]3[C@@H]([C@H]([C@H]([C@H](O3)CO)O)NC(=O)C4=CC=C(C=C4)[N+](=O)[O-])O)CO)O)[N+](=O)[O-]": 44586822,
    "C1=CC=C2C=C(C=CC2=C1)C(=O)O[C@H]3[C@H]([C@H](O[C@H]([C@@H]3O)S[C@H]4[C@@H]([C@H]([C@H]([C@H](O4)CO)O)OC(=O)C5=CC6=CC=CC=C6C=C5)O)CO)O": 25179518,
    "COC1=CC=CC(=C1)C(=O)O[C@H]2[C@H]([C@H](O[C@H]([C@@H]2O)S[C@H]3[C@@H]([C@H]([C@H]([C@H](O3)CO)O)OC(=O)C4=CC(=CC=C4)OC)O)CO)O": 25147695,
    "CC1=CC=C(C=C1)C(=O)O[C@H]2[C@H]([C@H](O[C@H]([C@@H]2O)S[C@H]3[C@@H]([C@H]([C@H]([C@H](O3)CO)O)OC(=O)C4=CC=C(C=C4)C)O)CO)O": 25179327,
    "CCN(CC)CC.CC1=CC=C(C=C1)C(=O)O[C@H]2[C@H]([C@H](O[C@H]([C@H]2OS(=O)(=O)O)OC)CO)O": 49797472,
    "COC(=O)CN1C=C(N=N1)C[C@H]2[C@@H]([C@H]([C@H]([C@H](O2)CO)O)O)O": 11631088,
    "CNC(=O)C1=C(N(N=N1)[C@H]2[C@H]([C@H](O[C@H]([C@@H]2O)SC)CO)O)C(=O)NC": 52947047,
    "C1=CC(=CC(=C1)F)C2=CN(N=N2)[C@H]3[C@H]([C@H](O[C@H]([C@@H]3O)SS[C@H]4[C@@H]([C@H]([C@H]([C@H](O4)CO)O)N5C=C(N=N5)CNC(=O)C6=CC7=C(C=C6)C8(C9=C(C=C(C=C9)O)OC1=C8C=CC(=C1)O)OC7=O)O)CO)O": 137642445
}
  // console.log("smileCIDS read")

    Object.entries(smileCIDs).forEach(([smile, cid]) => {
      const url = `${path}/${cid}.png`;
      // console.log(url)
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







