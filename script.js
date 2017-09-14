var barStock = {
  vodka: "750ml",
  gin: "1.5L",
  tequila: "750ml",
  whiskey: "750ml",
  sweet_vermouth: "750ml",
  dry_vermouth: "750ml",
  bloody_mary_mix: "2L",
  agave_nectar: "24oz",
  orange_juice: "48oz",
  limes: 36,
  cherries: 9,
  celery_sticks: 16,
  olives: 24,
  getVodka() {
    return this.vodka;
  },
  setVodka(v) {
    this.vodka = v;
  },
  getGin() {
    return this.gin;
  },
  setGin(g) {
    this.gin = g;
  },
  getTequila() {
    return this.tequila;
  },
  setTequila(t) {
    this.tequila = t;
  },
  getWhiskey() {
    return this.whiskey;
  },
  setWhiskey(w) {
    this.whiskey = w;
  },
  getSweetVermouth() {
    return this.sweet_vermouth;
  },
  setSweetVermouth(sv) {
    this.sweet_vermouth = sv;
  },
  getDryVermouth() {
    return this.dry_vermouth;
  },
  setDryVermouth(dv) {
    this.dry_vermouth = dv;
  },
  getBloodyMaryMix() {
    return this.bloody_mary_mix;
  },
  setBloodyMaryMix(bmm) {
    this.bloody_mary_mix = bmm;
  },
  getAgaveNectar() {
    return this.agave_nectar;
  },
  setAgaveNectar(an) {
    this.agave_nectar = an;
  },
  getOrangeJuice() {
    return this.orange_juice;
  },
  setOrangeJuice(oj) {
    this.orange_juice = oj;
  },
  getLimes() {
    return this.limes;
  },
  setLimes(l) {
    this.limes = l;
  },
  getCherries() {
    return this.cherries;
  },
  setCherries(c) {
    this.cherries = c;
  },
  getCelerySticks() {
    return this.celery_sticks;
  },
  setCelerySticks(cs) {
    this.celery_sticks = cs;
  },
  getOlives() {
    return this.olives;
  },
  setOlives(o) {
    this.olives = o;
  },
  mlToOunce(ml) {
    return (0.033814 * ml);
  },
  litreToOunce(lt) {
    return (33.814 * lt);
  },
  stripUnits(su) {
    a = su.toString().replace(" ", "").toLowerCase();
    return su.toString().slice(0, -2);
  },
  stripUnit(stu) {
    b = stu.toString().replace(" ", "").toLowerCase();
    return stu.toString().slice(0, -1);
  },
  ounceToMl(ml) {
    return (ml / 0.033814);
  },
  ounceToLitre(lt) {
    return (lt / 33.814);
  },
  concatUnitsMl(num) {
    return num.toString().concat("ml");

  },
  concatUnitsLt(num) {
    return num.toString().concat("L");
  },
  concatUnitsOz(oz) {
    return oz.toString().concat("oz");
  }
};

function addBloodyMary() {

  if (barStock.mlToOunce(barStock.stripUnits(barStock.getVodka())) >= 2 && barStock.litreToOunce(barStock.stripUnit(barStock.getBloodyMaryMix())) >= 4 && barStock.getCelerySticks() >= 1) {
    var remainingVodka = barStock.mlToOunce(barStock.stripUnits(barStock.getVodka())) - 2;
    var remainingBloodyMaryMix = barStock.litreToOunce(barStock.stripUnit(barStock.getBloodyMaryMix())) - 4;
    var remainingCelerySticks = barStock.getCelerySticks() - 1;

    var bloodyMaryCount = document.getElementsByClassName("bloodyMaryClass")[0].value;
    bloodyMaryCount++;
    document.getElementsByClassName("bloodyMaryClass")[0].value = bloodyMaryCount;

    barStock.setVodka(barStock.concatUnitsMl(barStock.ounceToMl(remainingVodka)));
    barStock.setBloodyMaryMix(barStock.concatUnitsLt(barStock.ounceToLitre(remainingBloodyMaryMix)));
    barStock.setCelerySticks(remainingCelerySticks);


  } else {
    alert("Insufficient Ingredients");
  }
}

function subBloodyMary() {


  var bloodyMaryCount = document.getElementsByClassName("bloodyMaryClass")[0].value;

  if (bloodyMaryCount > 0) {
    var remainingVodka = barStock.mlToOunce(barStock.stripUnits(barStock.getVodka())) + 2;
    var remainingBloodyMaryMix = barStock.litreToOunce(barStock.stripUnit(barStock.getBloodyMaryMix())) + 4;
    var remainingCelerySticks = barStock.getCelerySticks() + 1;
    bloodyMaryCount--;
    document.getElementsByClassName("bloodyMaryClass")[0].value = bloodyMaryCount;
    barStock.setVodka(barStock.concatUnitsMl(barStock.ounceToMl(remainingVodka)));
    barStock.setBloodyMaryMix(barStock.concatUnitsLt(barStock.ounceToLitre(remainingBloodyMaryMix)));
    barStock.setCelerySticks(remainingCelerySticks);
  }
}

function addManhattan() {
  if (barStock.mlToOunce(barStock.stripUnits(barStock.getWhiskey())) >= 2 && barStock.mlToOunce(barStock.stripUnits(barStock.getSweetVermouth())) >= 1 && barStock.getCherries() >= 1) {
    var remainingWhiskey = barStock.mlToOunce(barStock.stripUnits(barStock.getWhiskey())) - 2;
    var remainingSweetVermouth = barStock.mlToOunce(barStock.stripUnits(barStock.getSweetVermouth())) - 1;
    var remainingCherries = barStock.getCherries() - 1;

    var manhattanCount = document.getElementsByClassName("manhattanClass")[0].value;
    manhattanCount++;
    document.getElementsByClassName("manhattanClass")[0].value = manhattanCount;

    barStock.setWhiskey(barStock.concatUnitsMl(barStock.ounceToMl(remainingWhiskey)));
    barStock.setSweetVermouth(barStock.concatUnitsMl(barStock.ounceToMl(remainingSweetVermouth)));
    barStock.setCherries(remainingCherries);
  } else {
    alert("Insufficient Ingredients");
  }

}

function subManhattan() {
  var manhattanCount = document.getElementsByClassName("manhattanClass")[0].value;
  if (manhattanCount > 0) {
    var remainingWhiskey = barStock.mlToOunce(barStock.stripUnits(barStock.getWhiskey())) + 2;
    var remainingSweetVermouth = barStock.mlToOunce(barStock.stripUnits(barStock.getSweetVermouth())) + 1;
    var remainingCherries = barStock.getCherries() + 1;

    manhattanCount--;
    document.getElementsByClassName("manhattanClass")[0].value = manhattanCount;

    barStock.setWhiskey(barStock.concatUnitsMl(barStock.ounceToMl(remainingWhiskey)));
    barStock.setSweetVermouth(barStock.concatUnitsMl(barStock.ounceToMl(remainingSweetVermouth)));
    barStock.setCherries(remainingCherries);
  }
}

function addMartini() {
  if (barStock.litreToOunce(barStock.stripUnit(barStock.getGin())) >= 2 && barStock.mlToOunce(barStock.stripUnits(barStock.getDryVermouth())) >= 1 && barStock.getOlives() >= 1) {
    var remainingGin = barStock.litreToOunce(barStock.stripUnit(barStock.getGin())) - 2;
    var remainingDryVermouth = barStock.mlToOunce(barStock.stripUnits(barStock.getDryVermouth())) - 1;
    var remainingOlives = barStock.getOlives() - 1;

    var martiniCount = document.getElementsByClassName("martiniClass")[0].value;
    martiniCount++;
    document.getElementsByClassName("martiniClass")[0].value = martiniCount;

    barStock.setGin(barStock.concatUnitsLt(barStock.ounceToLitre(remainingGin)));
    barStock.setDryVermouth(barStock.concatUnitsMl(barStock.ounceToMl(remainingDryVermouth)));
    barStock.setOlives(remainingOlives);
  } else {
    alert("Insufficient Ingredients");
  }



}

function subMartini() {
  var martiniCount = document.getElementsByClassName("martiniClass")[0].value;

  if (martiniCount > 0) {
    var remainingGin = barStock.litreToOunce(barStock.stripUnit(barStock.getGin())) + 2;
    var remainingDryVermouth = barStock.mlToOunce(barStock.stripUnits(barStock.getDryVermouth())) + 1;
    var remainingOlives = barStock.getOlives() + 1;

    martiniCount--;
    document.getElementsByClassName("martiniClass")[0].value = martiniCount;

    barStock.setGin(barStock.concatUnitsLt(barStock.ounceToLitre(remainingGin)));
    barStock.setDryVermouth(barStock.concatUnitsMl(barStock.ounceToMl(remainingDryVermouth)));
    barStock.setOlives(remainingOlives);
  }
}

function addMargarita() {

  if (barStock.mlToOunce(barStock.stripUnits(barStock.getTequila())) >= 2 && barStock.stripUnits(barStock.getOrangeJuice()) >= 1 && barStock.getOlives() >= 1 && barStock.stripUnits(barStock.getAgaveNectar()) >= 1) {
    var remainingTequila = barStock.mlToOunce(barStock.stripUnits(barStock.getTequila())) - 2;
    var remainingOrangeJuice = barStock.stripUnits(barStock.getOrangeJuice()) - 1;
    var remainingAgaveNectar = barStock.stripUnits(barStock.getAgaveNectar()) - 1;
    var remainingLimes = barStock.getLimes() - 1;

    var margaritaCount = document.getElementsByClassName("margaritaClass")[0].value;
    margaritaCount++;
    document.getElementsByClassName("margaritaClass")[0].value = margaritaCount;

    barStock.setTequila(barStock.concatUnitsMl(barStock.ounceToMl(remainingTequila)));
    barStock.setOrangeJuice(barStock.concatUnitsOz(remainingOrangeJuice));
    barStock.setAgaveNectar(barStock.concatUnitsOz(remainingAgaveNectar));

    barStock.setLimes(remainingLimes);
  } else {
    alert("Insufficient Ingredients");
  }

}

function subMargarita() {
  var margaritaCount = document.getElementsByClassName("margaritaClass")[0].value;

  if (margaritaCount > 0) {
    var remainingTequila = barStock.mlToOunce(barStock.stripUnits(barStock.getTequila())) + 2;
    var remainingOrangeJuice = barStock.stripUnits(barStock.getOrangeJuice()) + 1;
    var remainingAgaveNectar = barStock.stripUnits(barStock.getAgaveNectar()) + 1;
    var remainingLimes = barStock.getLimes() + 1;

    margaritaCount--;
    document.getElementsByClassName("margaritaClass")[0].value = margaritaCount;

    barStock.setTequila(barStock.concatUnitsMl(barStock.ounceToMl(remainingTequila)));
    barStock.setOrangeJuice(barStock.concatUnitsOz(remainingOrangeJuice));
    barStock.setAgaveNectar(barStock.concatUnitsOz(remainingAgaveNectar));
    barStock.setLimes(remainingLimes);
  }
}

function addScrewDriver() {

  if (barStock.mlToOunce(barStock.stripUnits(barStock.getVodka())) >= 2 && barStock.stripUnits(barStock.getOrangeJuice()) >= 4) {
    var remainingVodka = barStock.mlToOunce(barStock.stripUnits(barStock.getVodka())) - 2;
    var remainingOrangeJuice = barStock.stripUnits(barStock.getOrangeJuice()) - 4;

    var screwDriverCount = document.getElementsByClassName("screwDriverClass")[0].value;
    screwDriverCount++;
    document.getElementsByClassName("screwDriverClass")[0].value = screwDriverCount;

    barStock.setVodka(barStock.concatUnitsMl(barStock.ounceToMl(remainingVodka)));
    barStock.setOrangeJuice(barStock.concatUnitsOz(remainingOrangeJuice));
  } else {
    alert("Insufficient Ingredients");
  }
}

function subScrewDriver() {
  var screwDriverCount = document.getElementsByClassName("screwDriverClass")[0].value;

  if (screwDriverCount > 0) {
    var remainingVodka = barStock.mlToOunce(barStock.stripUnits(barStock.getVodka())) + 2;
    var remainingOrangeJuice = barStock.stripUnits(barStock.getOrangeJuice()) + 4;

    screwDriverCount--;
    document.getElementsByClassName("screwDriverClass")[0].value = screwDriverCount;

    barStock.setVodka(barStock.concatUnitsMl(barStock.ounceToMl(remainingVodka)));
    barStock.setOrangeJuice(barStock.concatUnitsOz(remainingOrangeJuice));
  }

}

function summaryFunction() {
  var totalBloodyMaryCount = document.getElementsByClassName("bloodyMaryClass")[0].value;
  document.getElementById('bloodyMaryCount').innerHTML = totalBloodyMaryCount;
  var totalMargaritaCount = document.getElementsByClassName("margaritaClass")[0].value;
  document.getElementById('margaritaCount').innerHTML = totalMargaritaCount;
  var totalMartiniCount = document.getElementsByClassName("martiniClass")[0].value;
  document.getElementById('martiniCount').innerHTML = totalMartiniCount;
  var totalManhattanCount = document.getElementsByClassName("manhattanClass")[0].value;
  document.getElementById('manhattanCount').innerHTML = totalManhattanCount;
  var totalScrewDriverCount = document.getElementsByClassName("screwDriverClass")[0].value;
  document.getElementById('screwDriverCount').innerHTML = totalScrewDriverCount;
  document.getElementById("totalNumberOfDrinks").innerHTML = +totalBloodyMaryCount + +totalMargaritaCount + +totalMartiniCount + +totalManhattanCount + +totalScrewDriverCount;
  if (document.getElementById("totalNumberOfDrinks").innerHTML > 0) {
    document.getElementById("mainPage").style.display = "none";
    document.getElementById("summaryPage").style.display = "block";
  }else{
    alert("Please select atleast one drink!")
  }
}

function goBack() {
  document.getElementById("summaryPage").style.display = "none";
  document.getElementById("mainPage").style.display = "block";

}
