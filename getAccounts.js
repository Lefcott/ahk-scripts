(() => {
  const list = document.getElementById('cclist');
  const accounts = [
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
            break;
          }
        }
      }
      return accs;
    }
  };
  const oldXHR = window.XMLHttpRequest;

  function newXHR() {
      var realXHR = new oldXHR();
      realXHR.addEventListener("readystatechange", function() {
        if (realXHR.readyState !== realXHR.DONE) return;
        try {
          if (realXHR.status < 200 || realXHR.status > 299) throw new Error('Not 200');
          const body = JSON.parse(realXHR.response);
          console.log(body);
          const table = document.createElement('table');
          table.innerHTML = body.icerik;
          const trs = table.getElementsByTagName('tr');
          for (let i = 0; i < trs.length; i += 1) {
            const tr = trs[i];
            const [user, ]
            console.log(trs[i]);
          }

        } catch(e) {}
      }, false);
      return realXHR;
  }
  window.XMLHttpRequest = newXHR;

  // console.clear();
  try {
    let comboText = '';
    for (let i = 0; i < accounts.length; i += 1) {
      if (i !== 0) comboText += '\n';
      comboText += accounts[i].UserName + ':' + accounts[i].Password;
    }
    list.value = comboText;
  } catch(e) {
    console.log('Copiaste cualquier cosa al clipboard, copia bien!');
    console.error(e)
  }
})();
