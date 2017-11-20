(function(){
  function rand(max) {
    return Math.round(Math.random() * max);
  }

  var header_ccc = browser.extension.getURL("assets/header-clc.png");
  var header_netzpolitik = browser.extension.getURL("assets/nerdpolitik.org.svg");
  var header_jugendhackt = browser.extension.getURL("assets/jugendhaekelt.svg");

  if (location.hostname == 'ccc.de' || location.hostname == 'www.ccc.de') {
    document.querySelector('#header > a > img').src = header_ccc;
  }

  if (location.hostname == 'netzpolitik.org') {
    document.querySelector('.netzpolitik__logo').src = header_netzpolitik;
  }

  if (location.hostname == 'jugendhackt.org') {
    document.querySelector('#logo > a > img').src = header_jugendhackt;
  }

  function updateNode(el){
    text = el.nodeValue;

    var clubcloud = ['Club', 'Cloud'];

    // Erfas
    text = text.replace('CCC Aachen', 'Aachener Laptop ' + clubcloud[rand(1)]);
    text = text.replace('CCC Bamberg', 'Bamberger Laptop ' + clubcloud[rand(1)]);
    text = text.replace('CCC Berlin', 'Berliner Laptop ' + clubcloud[rand(1)]);
    text = text.replace('CCC Bremen', 'Bremer Laptop ' + clubcloud[rand(1)]);
    text = text.replace('CCC Darmstadt', 'Darmstädter Laptop ' + clubcloud[rand(1)]);
    text = text.replace('CCC Dresden', 'Dresdner Laptop ' + clubcloud[rand(1)]);
    text = text.replace('CCC Dortmund', 'Dortmunder Laptop ' + clubcloud[rand(1)]);
    text = text.replace('CCC Düsseldorf', 'Düsseldorfer Laptop ' + clubcloud[rand(1)]);
    text = text.replace('CCC Erlangen', 'Erlangener Laptop ' + clubcloud[rand(1)]);
    text = text.replace('CCC Essen', 'Essener Laptop ' + clubcloud[rand(1)]);
    text = text.replace('CCC Frankfurt', 'Frankfurter Laptop ' + clubcloud[rand(1)]);
    text = text.replace('CCC Freiburg', 'Freiburger Laptop ' + clubcloud[rand(1)]);
    text = text.replace('CCC Göttingen', 'Göttinger Laptop ' + clubcloud[rand(1)]);
    text = text.replace('CCC Hamburg', 'Hamburger Laptop ' + clubcloud[rand(1)]);
    text = text.replace('CCC Hannover', 'Hannover Laptop ' + clubcloud[rand(1)]);
    text = text.replace('CCC Kaiserslautern', 'Kaiserslauterner Laptop ' + clubcloud[rand(1)]);
    text = text.replace('CCC Karlsruhe', 'Karlsruher Laptop ' + clubcloud[rand(1)]);
    text = text.replace('CCC Kassel', 'Kasseler Laptop ' + clubcloud[rand(1)]);
    text = text.replace('CCC Köln', 'Kölner Laptop ' + clubcloud[rand(1)]);
    text = text.replace('CCC Mainz/Wiesbaden', 'Mainzer/Wiesbadener Laptop ' + clubcloud[rand(1)]);
    text = text.replace('CCC Mainz', 'Mainzer Laptop ' + clubcloud[rand(1)]);
    text = text.replace('CCC Wiesbaden', 'Wiesbadener Laptop ' + clubcloud[rand(1)]);
    text = text.replace('CCC Mannheim', 'Mannheimer Laptop ' + clubcloud[rand(1)]);
    text = text.replace('CCC München', 'Münchner Laptop ' + clubcloud[rand(1)]);
    text = text.replace('CCC Paderborn', 'Paderborner Laptop ' + clubcloud[rand(1)]);
    text = text.replace('CCC Salzburg', 'Salzburger Laptop ' + clubcloud[rand(1)]);
    text = text.replace('CCC Stuttgart', 'Stuttgarter Laptop ' + clubcloud[rand(1)]);
    text = text.replace('CCC Ulm', 'Ulmer Laptop ' + clubcloud[rand(1)]);
    text = text.replace('CCC Wien', 'Wiener Laptop ' + clubcloud[rand(1)]);
    text = text.replace('CCC Würzburg', 'Würzburger Laptop ' + clubcloud[rand(1)]);
    text = text.replace('CCC Zürich', 'Züricher Laptop ' + clubcloud[rand(1)]);

    // CCC
    text = text.replace('Chaos Computer Club', 'Chaos Laptop ' + clubcloud[rand(1)]);
    text = text.replace('CCC', 'CLC');

    // netzpolitik
    text = text.replace(/netzpolitik.org/gi, 'nerdpolitik.org');
    text = text.replace('netzpolitisch', 'nerdpolitisch');
    text = text.replace('Netzpolitisch', 'Nerdpolitisch');

    // Jugend hackt
    text = text.replace(/Jugend hackt/gi, 'Jugend häkelt');
    text = text.replace('hacken', 'häkeln');
    text = text.replace('gehackt', 'gehäkelt');
    text = text.replace('Hacker', 'Bäcker');

    el.nodeValue = text;
  }

  var n, walk=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT,null,false);
  while(n=walk.nextNode()) updateNode(n);
})();
