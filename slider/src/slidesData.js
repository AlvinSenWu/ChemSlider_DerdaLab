

export const getSlides = () => {
  // The smileCIDs object data
  var path = '/images';
  var slides = []

  var smileCIDs = {
    "C1=CC(=C(C=C1S[C@@H]2[C@@H]([C@H]([C@H]([C@H](O2)CO)O)N3C=C(N=N3)C4=CC(=C(C(=C4)F)F)F)O)Cl)Cl": 122443390,
    "C1[C@H]([C@@H]([C@H](O[C@@H]1OCCCCCCCCCCCCS)CO)O[C@H]2[C@@H]([C@H]([C@H]([C@H](O2)CO)O)O)O)O": 53316935,
    "CC(=O)N[C@@H]1[C@H]([C@@H]([C@H](O[C@H]1OC)CO)O[C@H]2[C@@H]([C@H]([C@H]([C@H](O2)CO)O)O)O)O": 10992961,
    "CS[C@H]1[C@@H]([C@H]([C@H]([C@H](O1)CO)O)N2C=C(N=N2)C3=CC4=CC=CC=C4C=C3)O": 11574591,
    "CC1=C(C=C(C=C1)N[C@@H]2[C@H]([C@H](O[C@H]([C@@H]2O)OC)CO)O)C": 155512458,
    "CO[C@H]1[C@@H]([C@@H]([C@H]([C@H](O1)CO)O)NC2=CC(=CC=C2)Cl)O": 155542403,
    "CC1=CC=C(C=C1)S(=O)(=O)/N=C\\2/C(=CC3=CC=CC=C3O2)CO[C@H]4[C@H]([C@H](O[C@@H]([C@@H]4O)OC)CO)O": 118707319,
    "C1=CC=C(C=C1)C(=O)O[C@H]2[C@H]([C@H](O[C@H]([C@@H]2O)S[C@H]3[C@@H]([C@H]([C@H]([C@H](O3)CO)O)OC(=O)C4=CC=CC=C4)O)CO)O": 25179521,
    "C1=CC=C(C=C1)C(=O)N[C@@H]2[C@H]([C@@H]([C@H](O[C@H]2OCCCN=[N+]=[N-])CO)O[C@H]3[C@@H]([C@H]([C@H]([C@H](O3)CO)O)N4C=C(N=N4)C5=CC=C(C=C5)OC6=CC=CC=C6)O)O": 71562355,
    "C1=CC=C2C=C(C=CC2=C1)C(=O)O[C@H]3[C@H]([C@H](O[C@H]([C@@H]3O)S[C@H]4[C@@H]([C@H]([C@H]([C@H](O4)CO)O)OC(=O)C5=CC6=CC=CC=C6C=C5)O)CO)O": 25179518,
    "CNC(=O)C1=C(N(N=N1)[C@H]2[C@H]([C@H](O[C@H]([C@@H]2O)SC)CO)O)C(=O)NC": 52947047,
    "CS[C@H]1[C@@H]([C@H]([C@H]([C@H](O1)CO)O)N2C=C(N=N2)C3(CCCCC3)O)O": 11588522,
    "CO[C@@H]1[C@@H]([C@H]([C@H]([C@H](O1)CO)O)OCC\\2=CC3=CC=CC=C3O/C2=N\\S(=O)(=O)C4=CC=CC=C4)O": 118707321,
    "CO[C@@H]1[C@@H]([C@H]([C@H]([C@H](O1)CO)O)O)O": 76935,
    "CC1=CC=C(C=C1)S(=O)(=O)/N=C\\2/C(=CC3=CC=CC=C3O2)CO[C@H]4[C@H]([C@H](O[C@@H]([C@@H]4OC(=O)C)OC)CO)O": 118707320,
    "CO[C@H]1[C@@H]([C@@H]([C@H]([C@H](O1)CO)O)O)O": 7568545,
    "C1=CC=C(C=C1)CNC(=O)C2=CN(N=N2)[C@H]3[C@H]([C@H](O[C@H]([C@@H]3O)S[C@H]4[C@@H]([C@H]([C@H]([C@H](O4)CO)O)N5C=C(N=N5)C(=O)NCC6=CC=CC=C6)O)CO)O": 52941210,
    "CC(C)(C)C1=CC=C(C=C1)C2=NC(=NC(=C2)CO[C@H]3[C@H]([C@H](O[C@H]([C@@H]3O)OC)CO)O)N": 155560737,
    "C1=CC(=C(C=C1C2=CN(N=N2)[C@H]3[C@H]([C@H](O[C@H]([C@@H]3O)SS[C@H]4[C@@H]([C@H]([C@H]([C@H](O4)CO)O)N5C=C(N=N5)C6=CC(=C(C=C6)F)F)O)CO)O)F)F": 137657709,
    "CC(=O)N[C@@H]1[C@H]([C@@H]([C@H](OC1O)CO)O[C@H]2[C@@H]([C@H]([C@H]([C@H](O2)CO)O)NC(=O)C3=CC=CC=C3)O)O": 118714730,
    "CCN(CC)CC.CC1=CC=C(C=C1)COP(=O)(O)O[C@H]2[C@H]([C@H]([C@H](O[C@H]2OC)CO)O)OC(=O)C3=CC=C(C=C3)C": 49797475,
    "CC(=O)N[C@@H]1[C@H]([C@@H]([C@H](O[C@@H]1OCCCCCCCCCCCCS)CO)O[C@H]2[C@@H]([C@H]([C@H]([C@H](O2)CO)O)O)O)O": 52918117,
    "C1=C(C=C(C(=C1F)F)F)C2=CN(N=N2)[C@H]3[C@H]([C@H](O[C@H]([C@@H]3O)SS[C@H]4[C@@H]([C@H]([C@H]([C@H](O4)CO)O)N5C=C(N=N5)C6=CC(=C(C(=C6)F)F)F)O)CO)O": 137656955,
    "CC1=CC=C(C=C1)C(=O)O[C@H]2[C@H]([C@H](O[C@H]([C@H]2OC(=O)C3=CC=C(C=C3)C)OC)CO)O": 44561586,
    "CC1=CC(=CC=C1)N[C@H]2[C@H]([C@H](O[C@H]([C@@H]2O)OC)CO)O": 155538998,
    "CC(=O)N[C@@H]1[C@H]([C@@H]([C@H](O[C@H]1OC)CO)O[C@H]2[C@@H]([C@H]([C@H]([C@H](O2)CO)O)NC(=O)C3=CC4=CC=CC=C4C=C3)O)O": 52941275,
    "CCN(CC)CC.CC1=CC=C(C=C1)C(=O)O[C@H]2[C@H]([C@H](O[C@H]([C@H]2OS(=O)(=O)O)OC)CO)O": 49797472,
    "CO[C@H]1[C@@H]([C@H]([C@H]([C@H](O1)CO)O)OCC2=CC(=NC(=N2)N)C3=CC(=CC=C3)Cl)O": 155565083,
    "CC1=CC=C(C=C1)S[C@H]2[C@@H]([C@H]([C@H]([C@H](O2)CO)O)N3C=C(N=N3)C4=CC=C(C=C4)Cl)O": 137634398,
    "CCN(CC)CC.CC1=CC=C(C=C1)C(=O)O[C@H]2[C@H]([C@H](O[C@H]([C@H]2O[P+](=O)O)OC)CO)O": 49797473,
    "CC1=C(C=C(C=C1)N[C@H]2[C@H]([C@H](O[C@@H]([C@@H]2O)SC3=CC(=C(C=C3)Cl)Cl)CO)O)C": 155518666,
    "CC1=CC=C(C=C1)S[C@H]2[C@@H]([C@H]([C@H]([C@H](O2)CO)O)N3C=C(N=N3)C4=CC(=C(C(=C4)F)F)F)O": 137655036,
    "CNC(=O)C1=CN(N=N1)[C@H]2[C@H]([C@H](O[C@H]([C@@H]2O)S[C@H]3[C@@H]([C@H]([C@H]([C@H](O3)CO)O)N4C=C(N=N4)C(=O)NC)O)CO)O": 11541495,
    "C1=CC(=CC(=C1)F)C2=CN(N=N2)[C@H]3[C@H]([C@H](O[C@H]([C@@H]3O)SS[C@H]4[C@@H]([C@H]([C@H]([C@H](O4)CO)O)OCC5=CC6=C(C=CC(=C6F)F)OC5=O)O)CO)O": 137645903,
    "C1=CC=C(C=C1)S[C@@H]2[C@@H]([C@H]([C@H]([C@H](O2)CO)O)N3C=C(N=N3)C4=CC(=C(C(=C4)F)F)F)O": 122443516,
    "CS[C@H]1[C@@H]([C@H]([C@H]([C@H](O1)CO)O)N2C=C(N=N2)C(=O)NCC3=CC=CC=C3)O": 11675582,
    "CC1=CC=C(C=C1)S[C@H]2[C@@H]([C@H]([C@H]([C@H](O2)CO)O)N3C=C(N=N3)C4=CC(=CC=C4)Cl)O": 137636008,
    "CC1=CC=C(C=C1)S(=O)(=O)C2=CN=NN2[C@H]3[C@H]([C@H](O[C@H]([C@@H]3O)SC)CO)O": 52944575,
    "CO[C@@H]1[C@@H]([C@H]([C@H]([C@H](O1)CO)O)OCC2=CN(N=N2)[C@@H](CC3=CC=C(C=C3)O)C(=O)O)O": 122181352,
    "CO[C@H]1[C@@H]([C@H]([C@H]([C@H](O1)CO)O)OCC2=CC(=NC(=N2)N)C3=CC=C(C=C3)Cl)O": 155551949,
    "C1=CC(=CC(=C1)Cl)S[C@H]2[C@@H]([C@H]([C@H]([C@H](O2)CO)O)N3C=C(N=N3)C4=CC(=C(C(=C4)F)F)F)O": 134812702,
    "CC1=CC=C(C=C1)S[C@H]2[C@@H]([C@H]([C@H]([C@H](O2)CO)O)N3C=C(N=N3)C4=CC=CC=C4F)O": 137636032,
    "CO[C@@H]1[C@@H]([C@H]([C@H]([C@H](O1)CO)O)OCC2=CN(N=N2)[C@@H](CC3=CC=CC=C3)C(=O)O)O": 122181348,
    "CC(=O)N[C@@H]1[C@H]([C@@H]([C@H](O[C@H]1O)CO)O[C@H]2[C@@H]([C@H]([C@H]([C@H](O2)CO)O)O)O)O": 439271,
    "C1=CC=C2C=C(C=CC2=C1)S(=O)(=O)[C@H]3[C@@H]([C@H]([C@@H]([C@H](O3)CO)O[C@H]4[C@@H]([C@H]([C@H]([C@H](O4)CO)O)O)O)O)O": 44409180,
    "CO[C@H]1C([C@H]([C@H](C(O1)CO)O)O)O": 58805972,
    "CC1=CC=C(C=C1)N[C@@H]2[C@H]([C@H](O[C@H]([C@@H]2O)OC)CO)O": 155518448,
    "C1=CC(=C(C=C1S[C@@H]2[C@@H]([C@H]([C@H]([C@H](O2)CO)O)N3C=C(N=N3)C4=CC(=C(C(=C4)F)F)F)O)Cl)C#N": 122443352,
    "CC1=CC=C(C=C1)C2=NC(=NC(=C2)CO[C@H]3[C@H]([C@H](O[C@H]([C@@H]3O)OC)CO)O)N": 155523170,
    "C1=CC=C(C=C1)OC2=CC=C(C=C2)CO[C@H]3[C@H]([C@H](O[C@H]([C@@H]3O)O[C@@H]4[C@H](O[C@H]([C@@H]([C@H]4O)N5C(=O)C6=CC=CC=C6C5=O)OCCCN=[N+]=[N-])CO)CO)O": 71562245,
    "C(CO[C@H]1C([C@H]([C@@H](C(O1)CO)O[C@H]2C([C@H](C(C(O2)CO)O)O)O)O)O)N=[N+]=[N-]": 124203882,
    "C1C[C@H](C(C(C1)N2C=C(N=N2)C3=CC=CC=C3F)O)S[C@H]4C([C@H]([C@H](C(O4)CO)O)N5C=C(N=N5)C6=CC=CC=C6F)O": 44473170,
    "CCCCNC(=O)C1=CN(N=N1)[C@H]2[C@H]([C@H](O[C@H]([C@@H]2O)SS[C@H]3[C@@H]([C@H]([C@H]([C@H](O3)CO)O)OCC4=CC5=C(C=CC(=C5F)F)OC4=O)O)CO)O": 137655629,
    "CS[C@H]1[C@@H]([C@H]([C@H]([C@H](O1)CO)O)N2C=C(N=N2)CO)O": 52948508,
    "C1=CC2=C(C=C1C(=O)NCC3=CN(N=N3)[C@H]4[C@H]([C@H](O[C@H]([C@@H]4O)SS[C@H]5[C@@H]([C@H]([C@H]([C@H](O5)CO)O)N6C=C(N=N6)C7=CC(=C(C(=C7)F)F)F)O)CO)O)C(=O)OC28C9=C(C=C(C=C9)O)OC1=C8C=CC(=C1)O": 137639120,
    "CS[C@H]1[C@@H]([C@H]([C@H]([C@H](O1)CO)O)N2C=C(N=N2)C3=CC=CC=C3)O": 11493782,
    "C1=CC=C2C(=C1)C=C(C(=O)O2)CO[C@H]3[C@H]([C@H](O[C@H]([C@@H]3O)S[C@H]4[C@@H]([C@H]([C@H]([C@H](O4)CO)O)OCC5=CC6=CC=CC=C6OC5=O)O)CO)O": 71666730,
    "C1=CC=C(C=C1)OC2=CC=C(C=C2)C3=CN(N=N3)[C@H]4[C@H]([C@H](O[C@H]([C@@H]4O)O[C@@H]5[C@H](O[C@H]([C@@H]([C@H]5O)N6C(=O)C7=CC=CC=C7C6=O)OCCCN=[N+]=[N-])CO)CO)O": 71562354,
    "C1=CC=C2C(=C1)C=CC=C2C(=O)O[C@H]3[C@H]([C@H](O[C@H]([C@@H]3O)S[C@H]4[C@@H]([C@H]([C@H]([C@H](O4)CO)O)OC(=O)C5=CC=CC6=CC=CC=C65)O)CO)O": 25147708,
    "C1=CC(=CC(=C1)F)C2=CN(N=N2)[C@H]3[C@H]([C@H](OC([C@@H]3O)SC4[C@@H]([C@H]([C@H]([C@H](O4)CO)O)N5C=C(N=N5)C6=CC(=CC=C6)F)O)CO)O": 118436792,
    "C1=CC(=CC=C1C2=NC(=NC(=C2)CO[C@H]3[C@H]([C@H](O[C@@H]([C@@H]3O)SC4=CC(=C(C=C4)Cl)Cl)CO)O)N)Cl": 155527079,
    "C1=CC=C(C=C1)C(=O)N[C@@H]2[C@H]([C@@H]([C@H](O[C@H]2OCCCN=[N+]=[N-])CO)O[C@H]3[C@@H]([C@H]([C@H]([C@H](O3)CO)O)OCC4=CC=C(C=C4)OC5=CC=CC=C5)O)O": 71562246,
    "CO[C@H]1[C@@H]([C@H]([C@H]([C@H](O1)CO)O)OCC2=CC(=NC(=N2)N)C3=CC=C(C=C3)Br)O": 155538005,
    "C1=CC(=CC=C1S[C@@H]2[C@@H]([C@H]([C@H]([C@H](O2)CO)O)N3C=C(N=N3)C4=CC(=C(C(=C4)F)F)F)O)Cl": 122443407,
    "CC1=CC=C(C=C1)C(=O)O[C@H]2[C@H]([C@H](O[C@H]([C@@H]2O)S[C@H]3[C@@H]([C@H]([C@H]([C@H](O3)CO)O)OC(=O)C4=CC=C(C=C4)C)O)CO)O": 25179327,
    "CC1=CC=C(C=C1)C(=O)N[C@H]2[C@H]([C@H](O[C@H]([C@@H]2OP(=O)(O)OCC3=CC=CC=C3)SC)CO)O": 24776273,
    "COC1=CC=C(C=C1)C2=CN(N=N2)[C@H]3[C@H]([C@H](O[C@H]([C@@H]3O)SC)CO)O": 11675040,
    "C1=CC2=C(C=C1Cl)C=C(C(=O)O2)CO[C@H]3[C@H]([C@H](O[C@H]([C@@H]3O)S[C@H]4[C@@H]([C@H]([C@H]([C@H](O4)CO)O)OCC5=CC6=C(C=CC(=C6)Cl)OC5=O)O)CO)O": 117690143,
    "CC1=CC=C(C=C1)C(=O)O[C@H]2[C@H]([C@H](O[C@H]([C@H]2O)OC)CO)O": 44561585,
    "CC1=CC=C(C=C1)C(=O)N[C@H]2[C@H]([C@H](O[C@H]([C@@H]2OC(=O)C3=CC=CC=C3)SC)CO)O": 24827330,
    "C1=CC=C(C=C1)C(=O)N[C@H]2[C@H]([C@H](O[C@H]([C@@H]2O)S[C@H]3[C@@H]([C@H]([C@H]([C@H](O3)CO)O)NC(=O)C4=CC=CC=C4)O)CO)O": 11592187,
    "CO[C@H]1[C@@H]([C@H]([C@H]([C@H](O1)CO)O)OCC2=CC(=NC(=N2)N)C3=CC(=CC=C3)F)O": 155510726,
    "CO[C@@H]1[C@@H]([C@H]([C@H]([C@H](O1)CO)O)OCC2=CN(N=N2)[C@@H](CCCCN)C(=O)O)O": 122181350,
    "C1=CC(=CC(=C1)F)C2=CN(N=N2)[C@H]3[C@H]([C@H](O[C@H]([C@@H]3O)SS[C@H]4[C@@H]([C@H]([C@H]([C@H](O4)CO)O)N5C=C(N=N5)C6=CC(=CC=C6)F)O)CO)O": 137644984,
    "CC1=CC=C(C=C1)C(=O)N[C@H]2[C@H]([C@H](O[C@H]([C@@H]2O[P+](=O)O)SC)CO)O": 46905593,
    "CO[C@H]1[C@@H]([C@H]([C@H]([C@H](O1)CO)O)NC2=CC=C(C=C2)OC)O": 155537069,
    "CO[C@@H]1[C@@H]([C@H]([C@H]([C@H](O1)CO)O)OCC2=CN(N=N2)[C@@H](CC3=CC4=CC=CC=C4N3)C(=O)O)O": 122181349,
    "CO[C@H]1[C@@H]([C@H]([C@@H]([C@H](O1)CO)O[C@H]2[C@@H]([C@H]([C@H]([C@H](O2)CO)O)O)O)O)O": 121942,
    "CCCNC(=O)C1=CN(N=N1)[C@H]2[C@H](C(O[C@H](C2O)O[C@@H]3CCCC(C3O)N4C=C(N=N4)C(=O)NCCC)CO)O": 84973163,
    "C1=CC(=CC(=C1)Br)S[C@@H]2[C@@H]([C@H]([C@H]([C@H](O2)CO)O)N3C=C(N=N3)C4=CC(=C(C(=C4)F)F)F)O": 132188488,
    "COCCNC(=O)C1=CN(N=N1)[C@H]2[C@H]([C@H](O[C@H]([C@@H]2O)S[C@H]3[C@@H]([C@H]([C@H]([C@H](O3)CO)O)N4C=C(N=N4)C(=O)NCCOC)O)CO)O": 52941211,
    "C1=CC=C(C=C1)C2=CN(N=N2)[C@H]3[C@H]([C@H](O[C@H]([C@@H]3O)S[C@H]4[C@@H]([C@H]([C@H]([C@H](O4)CO)O)N5C=C(N=N5)C6=CC=CC=C6)O)CO)O": 71562004,
    "C1=CC(=CC=C1C2=CN(N=N2)[C@H]3[C@H]([C@H](O[C@H]([C@@H]3O)SS[C@H]4[C@@H]([C@H]([C@H]([C@H](O4)CO)O)N5C=C(N=N5)C6=CC=C(C=C6)F)O)CO)O)F": 137632583,
    "CO[C@H]1[C@@H]([C@H]([C@H]([C@H](O1)CO)O)OCC2=CC(=NC(=N2)N)C3=CC=CC=C3F)O": 155515859,
    "CC(=O)O[C@@H]1[C@H]([C@H]([C@H](O[C@@H]1OC)CO)O)OCC\\2=CC3=CC=CC=C3O/C2=N\\S(=O)(=O)C4=CC=CC=C4": 118707322,
    "CO[C@@H]1[C@@H]([C@H]([C@H]([C@H](O1)CO)O)OCC2=CN(N=N2)[C@@H](CC(=O)O)C(=O)O)O": 122181351,
    "COC1=CC=C(C=C1)N[C@@H]2[C@H]([C@H](O[C@@H]([C@@H]2O)SC3=CC(=C(C=C3)Cl)Cl)CO)O": 155538499,
    "C1=CSC=C1C2=CN(N=N2)[C@H]3[C@H]([C@H](O[C@H]([C@@H]3O)S[C@H]4[C@@H]([C@H]([C@H]([C@H](O4)CO)O)N5C=C(N=N5)C6=CSC=C6)O)CO)O": 121493958,
    "CS[C@H]1[C@@H]([C@H]([C@H]([C@H](O1)CO)O)N2C=CN=N2)O": 11608610,
    "C1=CC(=CC(=C1)I)S[C@@H]2[C@@H]([C@H]([C@H]([C@H](O2)CO)O)N3C=C(N=N3)C4=CC(=C(C(=C4)F)F)F)O": 122443434,
    "CCS[C@@H]1[C@@H]([C@H]([C@H]([C@H](O1)CO)O)N2C=C(N=N2)C3=CC(=C(C(=C3)F)F)F)O": 122443514,
    "C1=CC=C(C=C1)CCNC(=O)C2=CN(N=N2)[C@H]3[C@H]([C@H](O[C@H]([C@@H]3O)S[C@H]4[C@@H]([C@H]([C@H]([C@H](O4)CO)O)N5C=C(N=N5)C(=O)NCCC6=CC=CC=C6)O)CO)O": 52948506,
    "C1C[C@H](C(C(C1)NC(=O)C2=CC=C(C=C2)Cl)O)S[C@H]3C([C@H]([C@H](C(O3)CO)O)NC(=O)C4=CC=C(C=C4)Cl)O": 84973165,
    "CS[C@H]1[C@@H]([C@H]([C@H]([C@H](O1)CO)O)N2C=C(N=N2)C3=CN=CC=C3)O": 11631444,
    "CC(=O)N[C@@H]1[C@H]([C@@H]([C@H](O[C@H]1OC)CO)O[C@H]2[C@@H]([C@H]([C@H]([C@H](O2)CO)O)N3C=C(N=N3)C(=O)NC4=CC=CC5=CC=CC=C54)O)O": 52947288,
    "C1=CC(=CC(=C1)Cl)S[C@@H]2[C@@H]([C@H]([C@H]([C@H](O2)CO)O)N3C=C(N=N3)C4=CC(=C(C(=C4)F)F)F)O": 122443461,
    "CO[C@H]1[C@@H]([C@@H]([C@H]([C@H](O1)CO)O)NC2=CC(=C(C=C2)F)F)O": 155549274,
    "CCCCNC(=O)C1=CN(N=N1)[C@H]2[C@H]([C@H](O[C@H]([C@@H]2O)S[C@H]3[C@@H]([C@H]([C@H]([C@H](O3)CO)O)N4C=C(N=N4)C(=O)NCCCC)O)CO)O": 52943610,
    "C1=CC(=CC=C1C(=O)N[C@@H]2[C@@H]([C@@H](O[C@@H]([C@H]2O)S[C@H]3[C@@H]([C@H]([C@H]([C@H](O3)CO)O)NC(=O)C4=CC=C(C=C4)[N+](=O)[O-])O)CO)O)[N+](=O)[O-]": 44586822,
    "C[C@H]([C@@H](C(=O)O)N1C=C(N=N1)CO[C@H]2[C@H]([C@H](O[C@@H]([C@@H]2O)OC)CO)O)O": 122181347,
    "CO[C@H]1[C@@H]([C@H]([C@H]([C@H](O1)CO)O)OCC2=CC(=NC(=N2)N)C3=CC=C(C=C3)C4=CC=CC=C4)O": 155538081,
    "CC1=CC=C(C=C1)S(=O)(=O)/N=C\\2/C(=CC3=CC=CC=C3O2)CO[C@H]4[C@@H]([C@H]([C@@H]([C@H](O4)CO)O[C@H]5[C@@H]([C@H]([C@H]([C@H](O5)CO)O)O)O)O)O": 118707318,
    "CO[C@H]1[C@@H]([C@H]([C@H]([C@H](O1)CO)O)OCC2=CC(=NC(=N2)N)C3=CC=C(C=C3)F)O": 155523559,
    "CCCC1=CN(N=N1)[C@H]2[C@H]([C@H](O[C@H]([C@@H]2O)SC)CO)O": 11522330,
    "C1=CC(=C(C(=C1)Cl)Cl)S[C@@H]2[C@@H]([C@H]([C@H]([C@H](O2)CO)O)N3C=C(N=N3)C4=CC(=C(C(=C4)F)F)F)O": 122443411,
    "CCCCNC(=O)C1=CN(N=N1)[C@H]2[C@H]([C@H](O[C@H]([C@@H]2O)SS[C@H]3[C@@H]([C@H]([C@H]([C@H](O3)CO)O)N4C=C(N=N4)C5=CC(=C(C(=C5)F)F)F)O)CO)O": 137650490,
    "CC1=CC=C(C=C1)S[C@H]2[C@@H]([C@H]([C@H]([C@H](O2)CO)O)N3C=C(N=N3)C4=CC(=CC(=C4)F)F)O": 137633300,
    "CO[C@H]1[C@@H]([C@H]([C@H]([C@H](O1)CO)O)OCC2=CC(=NC(=N2)N)C3=CC=CC=C3)O": 155566207,
    "CO[C@H]1[C@@H]([C@H]([C@H]([C@H](O1)CO)O)OCC2=CC(=NC(=N2)N)C3=CC=CC4=CC=CC=C43)O": 155557796,
    "C1=CC(=C(C2=C1OC(=O)C(=C2)CO[C@H]3[C@H]([C@H](O[C@H]([C@@H]3O)SS[C@H]4[C@@H]([C@H]([C@H]([C@H](O4)CO)O)N5C=C(N=N5)C6=CC(=C(C(=C6)F)F)F)O)CO)O)F)F": 137636038,
    "CO[C@H]1[C@@H]([C@H]([C@H]([C@H](O1)CO)O)OCC2=CC(=NC(=N2)N)C3=CC4=CC=CC=C4C=C3)O": 155539183,
    "C1=CC(=CC=C1C2=CN(N=N2)[C@H]3[C@H]([C@H](OC([C@@H]3O)SC4[C@@H]([C@H]([C@H]([C@H](O4)CO)O)N5C=C(N=N5)C6=CC=C(C=C6)F)O)CO)O)F": 126508433,
    "CS[C@H]1[C@@H]([C@H]([C@H]([C@H](O1)CO)O)O)O": 10036019,
    "C([C@@H]1[C@@H]([C@@H]([C@H]([13C@@H](O1)O)O)O)O)O": 9794056,
    "CS[C@H]1[C@@H]([C@H]([C@H]([C@H](O1)CO)O)N2C=C(N=N2)C(=O)NCCCO)O": 11588587,
    "CNC(=O)C1=CN(N=N1)[C@H]2[C@H]([C@H](O[C@H]([C@@H]2O)SC)CO)O": 11716704,
    "CC1=C(C=C(C=C1)N[C@H]2[C@H]([C@H](O[C@H]([C@@H]2O)OC)CO)O)C": 155519777,
    "CO[C@H]1[C@H]([C@H]([C@H]([C@H](O1)CO)O)O)O": 7568471,
    "CC1=CC=C(C=C1)C(=O)N[C@H]2[C@H]([C@H](O[C@H]([C@@H]2O)SC)CO)O": 24776276,
    "COC1=CC=C(C=C1)N[C@H]2[C@H]([C@H](O[C@@H]([C@@H]2O)SC3=CC(=C(C=C3)Cl)Cl)CO)O": 155513255,
    "CCN(CC)CC.CC1=CC=C(C=C1)C(=O)O[C@H]2[C@H]([C@H](O[C@H]([C@H]2OP(=O)(O)OC)OC)CO)O": 49797477,
    "C1=CC=C2C=C(C=CC2=C1)C(=O)N[C@H]3[C@H]([C@H](O[C@H]([C@@H]3O)S[C@H]4[C@@H]([C@H]([C@H]([C@H](O4)CO)O)NC(=O)C5=CC6=CC=CC=C6C=C5)O)CO)O": 44588155,
    "CC1=CC(=CC=C1)C2=NC(=NC(=C2)CO[C@H]3[C@H]([C@H](O[C@H]([C@@H]3O)OC)CO)O)N": 155520645,
    "CC1=CC=C(C=C1)S[C@H]2[C@@H]([C@H]([C@H]([C@H](O2)CO)O)N3C=C(N=N3)C4=CC(=C(C=C4)F)F)O": 137645144,
    "CC1=CC=C(C=C1)S[C@@H]2[C@@H]([C@H]([C@H]([C@H](O2)CO)O)N3C=C(N=N3)C4=CC(=C(C(=C4)F)F)F)O": 122443477,
    "COC1=CC2=C(C=C1)C=C(C(=O)O2)CO[C@H]3[C@H]([C@H](O[C@H]([C@@H]3O)S[C@H]4[C@@H]([C@H]([C@H]([C@H](O4)CO)O)OCC5=CC6=C(C=C(C=C6)OC)OC5=O)O)CO)O": 71666586,
    "C1=C(N=NN1CCOCCOCCO[C@H]2[C@@H]([C@H]([C@@H]([C@H](O2)CO)O[C@H]3[C@@H]([C@H]([C@H]([C@H](O3)CO)O)O)O)O)O)CO[C@H]4[C@@H]([C@H]([C@@H]([C@H](O4)CO)O[C@H]5[C@@H]([C@H]([C@H]([C@H](O5)CO)O)O)O)O)O": 122181353,
    "C([C@@H]1[C@@H]([C@@H]([C@H]([C@@H](O1)S[C@H]2[C@@H]([C@H]([C@H]([C@H](O2)CO)O)O)O)O)O)O)O": 119138,
    "C=CCNC(=O)C1=CN(N=N1)[C@H]2[C@H]([C@H](O[C@H]([C@@H]2O)S[C@H]3[C@@H]([C@H]([C@H]([C@H](O3)CO)O)N4C=C(N=N4)C(=O)NCC=C)O)CO)O": 52943977,
    "CN(C)CCNC(=O)COC1=C2CC3=C(C(=CC=C3)CC4=C(C(=CC=C4)CC5=CC=CC(=C5OCC(=O)NCCN(C)C)CC1=CC=C2)OCC(=O)NCCN(C)C)OCC(=O)NCCN(C)C": 11953346,
    "C1=CC(=C(C2=C1OC(=O)C(=C2)CO[C@H]3[C@H]([C@H](O[C@H]([C@@H]3O)SS[C@H]4[C@@H]([C@H]([C@H]([C@H](O4)CO)O)OCC5=CC6=C(C=CC(=C6F)F)OC5=O)O)CO)O)F)F": 137648893,
    "C1=CC=C(C(=C1)C2=CN(N=N2)[C@H]3[C@H]([C@H](O[C@H]([C@@H]3O)SS[C@H]4[C@@H]([C@H]([C@H]([C@H](O4)CO)O)O)O)CO)O)F": 137651606,
    "CS[C@H]1[C@@H]([C@H]([C@H]([C@H](O1)CO)O)N2C=C(N=N2)C3=CC=CC4=CC=CC=C43)O": 11617978,
    "C1=CC=C(C(=C1)C2=CN(N=N2)[C@H]3[C@H]([C@H](O[C@@H]([C@@H]3O)S[C@@H]4[C@@H]([C@H]([C@H]([C@H](O4)CO)O)N5C=C(N=N5)C6=CC=CC=C6C(F)(F)F)O)CO)O)C(F)(F)F": 153864294,
    "CC(=O)N[C@@H]1[C@H]([C@@H]([C@H](O[C@H]1OC)CO)O[C@H]2[C@@H]([C@H]([C@H]([C@H](O2)CO)O)NC(=O)C3=CC=CC4=CC=CC=C43)O)O": 44588156,
    "C1C[C@H](C(C(C1)N2C=C(N=N2)C3=CC=C(C=C3)F)O)S[C@H]4C([C@H]([C@H](C(O4)CO)O)N5C=C(N=N5)C6=CC=C(C=C6)F)O": 68014112,
    "C([C@@H]1[C@@H]([C@@H]([C@H]([C@@H](O1)O[C@@H]2[C@H](O[C@H]([C@@H]([C@H]2O)O)O)CO)O)O)O)O": 6134,
    "CCCCNC(=O)C1=CN(N=N1)[C@H]2[C@H]([C@H](O[C@H]([C@@H]2O)SS[C@H]3[C@@H]([C@H]([C@H]([C@H](O3)CO)O)N4C=C(N=N4)C(=O)NCCCC)O)CO)O": 137662171,
    "CS[C@H]1[C@@H]([C@H]([C@H]([C@H](O1)CO)O)N2C(=C(N=N2)C(=O)N)N)O": 52942790,
    "C1=CC(=CC(=C1)O)C2=CN(N=N2)[C@H]3[C@H]([C@H](O[C@H]([C@@H]3O)S[C@H]4[C@@H]([C@H]([C@H]([C@H](O4)CO)O)N5C=C(N=N5)C6=CC(=CC=C6)O)O)CO)O": 71562125,
    "C(CCCCCCS)CCCCCO[C@H]1[C@@H]([C@H]([C@@H]([C@H](O1)CO)OC2[C@@H]([C@H]([C@H]([C@H](O2)CO)O)O)O)O)O": 53324865,
    "CO[C@H]1[C@@H]([C@@H]([C@H]([C@H](O1)CO)O)NC2=CC(=CC=C2)OC)O": 155546825,
    "CO[C@H]1[C@@H]([C@H]([C@H]([C@H](O1)CO)O)NC2=CC=CC=C2)O": 155554894,
    "CS[C@H]1[C@@H]([C@H]([C@H]([C@H](O1)CO)O)N2C=C(N=N2)C3=CC=CC=C3F)O": 11544911,
    "CC1=CC=C(C=C1)C(=O)N[C@H]2[C@H]([C@H](O[C@H]([C@@H]2OP(=O)(O)O)SC)CO)O": 24776272,
    "C1=CC(=CC(=C1)Cl)N[C@H]2[C@H]([C@H](O[C@@H]([C@@H]2O)SC3=CC(=C(C=C3)Cl)Cl)CO)O": 155530852,
    "COC1=CC=CC(=C1)C(=O)O[C@H]2[C@H]([C@H](O[C@H]([C@@H]2O)S[C@H]3[C@@H]([C@H]([C@H]([C@H](O3)CO)O)OC(=O)C4=CC(=CC=C4)OC)O)CO)O": 25147695,
    "CC1=CC=C(C=C1)S(=O)(=O)C2=CN(N=N2)[C@H]3[C@H]([C@H](O[C@H]([C@@H]3O)SC)CO)O": 11502545,
    "CC1=CC=C(C=C1)C(=O)N[C@H]2[C@H]([C@H](O[C@H]([C@@H]2OC(=O)C)SC)CO)O": 24776274,
    "CC1=CC(=CC=C1)N[C@@H]2[C@H]([C@H](O[C@H]([C@@H]2O)OC)CO)O": 155510720,
    "CO[C@H]1[C@@H]([C@H]([C@H]([C@H](O1)CO)O)NC2=CC(=C(C=C2)F)F)O": 155518319,
    "CO[C@H]1[C@@H]([C@H]([C@H]([C@H](O1)CO)O)O)O": 94214,
    "C1=CC=C(C=C1)OC2=CC=C(C=C2)C3=CN(N=N3)[C@H]4[C@H]([C@H](O[C@H]([C@@H]4O)S[C@H]5[C@@H]([C@H]([C@H]([C@H](O5)CO)O)N6C=C(N=N6)C7=CC=C(C=C7)OC8=CC=CC=C8)O)CO)O": 71562126,
    "CO[C@H]1[C@@H]([C@H]([C@H]([C@H](O1)CO)O)OCC2=CC(=NC(=N2)N)C3=CC=CC(=C3)C4=CC=CC=C4)O": 155512351,
    "C([C@@H]1[C@@H]([C@@H]([C@H]([C@@H](O1)SS[C@H]2[C@@H]([C@H]([C@H]([C@H](O2)CO)O)O)O)O)O)O)O": 54768329,
    "COC1=CC=CC(=C1)N[C@@H]2[C@H]([C@H](O[C@@H]([C@@H]2O)SC3=CC(=C(C=C3)Cl)Cl)CO)O": 155565429,
    "C1=CC(=CC(=C1)F)C2=CN(N=N2)[C@H]3[C@H]([C@H](O[C@H]([C@@H]3O)SS[C@H]4[C@@H]([C@H]([C@H]([C@H](O4)CO)O)N5C=C(N=N5)CNC(=O)C6=CC7=C(C=C6)C8(C9=C(C=C(C=C9)O)OC1=C8C=CC(=C1)O)OC7=O)O)CO)O": 137642445,
    "CO[C@H]1[C@@H]([C@@H]([C@H]([C@H](O1)CO)O)NC2=CC=C(C=C2)OC)O": 155520592,
    "CS[C@H]1[C@@H]([C@H]([C@H]([C@H](O1)CO)O)O)OS(=O)(=O)O": 24776277,
    "CC1=CC=C(C=C1)S[C@H]2[C@@H]([C@H]([C@H]([C@H](O2)CO)O)O)O": 7315241,
    "CC(=O)N[C@@H]1[C@H]([C@@H]([C@H](O[C@H]1OC)CO)O[C@H]2[C@@H]([C@H]([C@H]([C@H](O2)CO)O)N3C=C(N=N3)C(=O)NC)O)O": 11584252,
    "CC1=CC=C(C=C1)S[C@H]2[C@@H]([C@H]([C@H]([C@H](O2)CO)O)N3C=C(N=N3)C4=CC(=C(C=C4)F)C)O": 137639900,
    "COC1=CC=CC(=C1)N[C@H]2[C@H]([C@H](O[C@@H]([C@@H]2O)SC3=CC(=C(C=C3)Cl)Cl)CO)O": 155554696,
    "CS[C@H]1[C@@H]([C@H]([C@H]([C@H](O1)CO)O)N2C=C(N=N2)C(=O)NCCN3CCOCC3)O": 11517290,
    "CC1=CC=C(C=C1)S[C@H]2[C@@H]([C@H]([C@H]([C@H](O2)CO)O)N3C=C(N=N3)C4=CC=C(C=C4)Br)O": 137651168,
    "COC(=O)CN1C=C(N=N1)C[C@H]2[C@@H]([C@H]([C@H]([C@H](O2)CO)O)O)O": 11631088,
    "CCCNC(=O)C1=CN(N=N1)[C@H]2[C@H](C(O[C@H](C2O)S[C@@H]3CCCC(C3O)N4C=C(N=N4)C(=O)NCCC)CO)O": 84973164,
    "CC(=O)N[C@@H]1[C@H]([C@@H]([C@H](O[C@H]1OC)CO)O[C@H]2[C@@H]([C@H]([C@H]([C@H](O2)CO)O)NC(=O)C3=CC4=CC=CC=C4C=C3C(=O)O)O)O": 11261867,
    "COC(=O)C1=CN(N=N1)[C@H]2[C@H]([C@H](O[C@H]([C@@H]2O)SC)CO)O": 11652651,
    "CO[C@H]1[C@@H]([C@H]([C@H]([C@H](O1)CO)O)NC2=CC(=CC=C2)OC)O": 155510379,
    "COC1=CC=CC(=C1)C2=CN(N=N2)[C@H]3[C@H]([C@H](O[C@H]([C@@H]3O)SC)CO)O": 11696321,
    "C1C[C@H](C(C(C1)N2C=C(N=N2)C3=CSC=C3)O)S[C@H]4C([C@H]([C@H](C(O4)CO)O)N5C=C(N=N5)C6=CSC=C6)O": 68014109,
    "C1C[C@H](C(C(C1)N2C=C(N=N2)C3=CC(=CC=C3)F)O)S[C@H]4C([C@H]([C@H](C(O4)CO)O)N5C=C(N=N5)C6=CC(=CC=C6)F)O": 68014107,
    "CC1=CC=C(C=C1)S[C@H]2[C@@H]([C@H]([C@H]([C@H](O2)CO)O)N3C=C(N=N3)C4=CC(=C(C=C4)Cl)Cl)O": 137636485,
    "CC1=CC=C(C=C1)S[C@H]2[C@@H]([C@H]([C@H]([C@H](O2)CO)O)N3C=C(N=N3)C4=CC=CC=C4)O": 137661174,
    "CC1=CC=C(C=C1)S[C@H]2[C@@H]([C@H]([C@H]([C@H](O2)CO)O)N3C=C(N=N3)C4=CC(=CC=C4)F)O": 137654864,
    "CC(CNC(=O)C1=CN(N=N1)[C@H]2[C@H]([C@H](O[C@H]([C@@H]2O)S[C@H]3[C@@H]([C@H]([C@H]([C@H](O3)CO)O)N4C=C(N=N4)C(=O)NCC(C)O)O)CO)O)O": 52946042,
    "COC1=CC(=CC(=C1)C(=O)N[C@H]2[C@H]([C@H](O[C@@H]([C@@H]2O)S[C@H]3[C@@H]([C@H]([C@H]([C@H](O3)CO)O)NC(=O)C4=CC(=CC(=C4)OC)OC)O)CO)O)OC": 52942811,
    "CC1=CC=C(C=C1)C(=O)O[C@H]2[C@H]([C@H](O[C@H]([C@H]2OC(=O)C)OC)CO)O": 44561021,
    "CCCCNC(=O)C1=CN(N=N1)[C@H]2[C@H]([C@H](O[C@H]([C@@H]2O)SC)CO)O": 11581280,
    "CC1=CC=C(C=C1)N[C@H]2[C@H]([C@H](O[C@H]([C@@H]2O)OC)CO)O": 155554378,
    "CO[C@H]1[C@@H]([C@H]([C@H]([C@H](O1)CO)O)NC2=CC(=CC=C2)Cl)O": 155563008,
    "CC1=CC=C(C=C1)S[C@H]2[C@@H]([C@H]([C@H]([C@H](O2)CO)O)N3C=C(N=N3)C4=CC=C(C=C4)F)O": 137661718,
    "C1=C(C=C(C=C1F)F)C2=CN(N=N2)[C@H]3[C@H]([C@H](O[C@H]([C@@H]3O)SS[C@H]4[C@@H]([C@H]([C@H]([C@H](O4)CO)O)N5C=C(N=N5)C6=CC(=CC(=C6)F)F)O)CO)O": 137631879,
    "CO[C@H]1[C@@H]([C@H]([C@@H]([C@H](O1)CO)O[C@H]2[C@@H]([C@H]([C@H]([C@H](O2)CO)O)O)O)O)OC(=O)C3=CC=CC4=CC=CC=C43": 44588157,
    "CO[C@H]1[C@@H]([C@@H]([C@H]([C@H](O1)CO)O)NC2=CC=CC=C2)O": 155537041,
    "C1=CC(=C(C=C1O[C@@H]2[C@@H]([C@H]([C@H]([C@H](O2)CO)O)N3C=C(N=N3)C4=CC(=C(C(=C4)F)F)F)O)Cl)Cl": 122443490,
    "COC1=CC=CC(=C1)C(=O)N[C@H]2[C@H]([C@H](O[C@H]([C@@H]2O)S[C@H]3[C@@H]([C@H]([C@H]([C@H](O3)CO)O)NC(=O)C4=CC(=CC=C4)OC)O)CO)O": 11534637,
    "CC(=O)N[C@@H]1[C@H]([C@@H]([C@H](O[C@H]1OC)CO)O[C@H]2[C@@H]([C@H]([C@H]([C@H](O2)CO)O)N3C=C(N=N3)C(=O)NCC4=CC=CC=C4)O)O": 52944831,
    "CC(=O)NC1[C@H]([C@@H](C(O[C@H]1OC)CO)O[C@H]2C([C@H]([C@H](C(O2)CO)O)O)O)O": 84973162,
    "CC1=CC=C(C=C1)S(=O)(=O)/N=C\\2/C(=CC3=CC=CC=C3O2)CO[C@H]4[C@@H]([C@H]([C@H]([C@H](O4)CO)O)O)O": 118707317,
    "CC(=O)N[C@@H]1[C@H]([C@@H]([C@H](OC1O)CO)O[C@H]2[C@@H]([C@H]([C@H]([C@H](O2)CO)O)NC(=O)C3=C(C(=C(C(=C3F)F)OC)F)F)O)O": 118714731,
    "CO[C@@H]1[C@@H]([C@H]([C@H]([C@H](O1)CO)O)OCC2=CC3=CC=CC=C3OC2=O)O": 118707323,
    "CC1=CC=C(C=C1)C(=O)N[C@H]2[C@H]([C@H](O[C@H]([C@@H]2OS(=O)(=O)O)SC)CO)O": 24776270
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







