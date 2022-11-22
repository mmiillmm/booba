function korszam(){
    let korsug = korsugar.value;

    let korter = Math.round(Math.pow(korsug, 2) * Math.PI)

    let korker = Math.round(2 * korsug * Math.PI)

    document.getElementById("korterulet").value = korter;

    document.getElementById("korkerulet").value = korker;
}

function teglaszam() {
    let teglahossz = teglahosszu.value;

    let teglamag = teglamagass.value;

    let teglater = teglamag * teglahossz

    let teglaker = 2 * (teglahossz + teglamag)

    document.getElementById("teglaterulet").value = teglater;

    document.getElementById("teglakerulet").value = teglaker;

    console.log(teglaker);
}