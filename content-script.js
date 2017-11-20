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
    text = text.replace(/(CCC|Chaos Computer Club) Aachen/g, 'Aachener Laptop ' + clubcloud[rand(1)]);
    text = text.replace(/(CCC|Chaos Computer Club) Bamberg/g, 'Bamberger Laptop ' + clubcloud[rand(1)]);
    text = text.replace(/(CCC|Chaos Computer Club) Berlin/g, 'Berliner Laptop ' + clubcloud[rand(1)]);
    text = text.replace(/(CCC|Chaos Computer Club) Bremen/g, 'Bremer Laptop ' + clubcloud[rand(1)]);
    text = text.replace(/(CCC|Chaos Computer Club) Darmstadt/g, 'Darmstädter Laptop ' + clubcloud[rand(1)]);
    text = text.replace(/(CCC|Chaos Computer Club) Dresden/g, 'Dresdner Laptop ' + clubcloud[rand(1)]);
    text = text.replace(/(CCC|Chaos Computer Club) Dortmund/g, 'Dortmunder Laptop ' + clubcloud[rand(1)]);
    text = text.replace(/(CCC|Chaos Computer Club) Düsseldorf/g, 'Düsseldorfer Laptop ' + clubcloud[rand(1)]);
    text = text.replace(/(CCC|Chaos Computer Club) Erlangen/g, 'Erlangener Laptop ' + clubcloud[rand(1)]);
    text = text.replace(/(CCC|Chaos Computer Club) Essen/g, 'Essener Laptop ' + clubcloud[rand(1)]);
    text = text.replace(/(CCC|Chaos Computer Club) Frankfurt/g, 'Frankfurter Laptop ' + clubcloud[rand(1)]);
    text = text.replace(/(CCC|Chaos Computer Club) Freiburg/g, 'Freiburger Laptop ' + clubcloud[rand(1)]);
    text = text.replace(/(CCC|Chaos Computer Club) Göttingen/g, 'Göttinger Laptop ' + clubcloud[rand(1)]);
    text = text.replace(/(CCC|Chaos Computer Club) Hamburg/g, 'Hamburger Laptop ' + clubcloud[rand(1)]);
    text = text.replace(/(CCC|Chaos Computer Club) Hannover/g, 'Hannover Laptop ' + clubcloud[rand(1)]);
    text = text.replace(/(CCC|Chaos Computer Club) Kaiserslautern/g, 'Kaiserslauterner Laptop ' + clubcloud[rand(1)]);
    text = text.replace(/(CCC|Chaos Computer Club) Karlsruhe/g, 'Karlsruher Laptop ' + clubcloud[rand(1)]);
    text = text.replace(/(CCC|Chaos Computer Club) Kassel/g, 'Kasseler Laptop ' + clubcloud[rand(1)]);
    text = text.replace(/(CCC|Chaos Computer Club) Köln/g, 'Kölner Laptop ' + clubcloud[rand(1)]);
    text = text.replace(/(CCC|Chaos Computer Club) Mainz\/Wiesbaden/g, 'Mainzer/Wiesbadener Laptop ' + clubcloud[rand(1)]);
    text = text.replace(/(CCC|Chaos Computer Club) Mainz/g, 'Mainzer Laptop ' + clubcloud[rand(1)]);
    text = text.replace(/(CCC|Chaos Computer Club) Wiesbaden/g, 'Wiesbadener Laptop ' + clubcloud[rand(1)]);
    text = text.replace(/(CCC|Chaos Computer Club) Mannheim/g, 'Mannheimer Laptop ' + clubcloud[rand(1)]);
    text = text.replace(/(CCC|Chaos Computer Club) München/g, 'Münchner Laptop ' + clubcloud[rand(1)]);
    text = text.replace(/(CCC|Chaos Computer Club) Paderborn/g, 'Paderborner Laptop ' + clubcloud[rand(1)]);
    text = text.replace(/(CCC|Chaos Computer Club) Salzburg/g, 'Salzburger Laptop ' + clubcloud[rand(1)]);
    text = text.replace(/(CCC|Chaos Computer Club) Stuttgart/g, 'Stuttgarter Laptop ' + clubcloud[rand(1)]);
    text = text.replace(/(CCC|Chaos Computer Club) Ulm/g, 'Ulmer Laptop ' + clubcloud[rand(1)]);
    text = text.replace(/(CCC|Chaos Computer Club) Wien/g, 'Wiener Laptop ' + clubcloud[rand(1)]);
    text = text.replace(/(CCC|Chaos Computer Club) Würzburg/g, 'Würzburger Laptop ' + clubcloud[rand(1)]);
    text = text.replace(/(CCC|Chaos Computer Club) Zürich/g, 'Züricher Laptop ' + clubcloud[rand(1)]);

    // CCC
    text = text.replace('Chaos Computer Club', 'Chaos Laptop ' + clubcloud[rand(1)]);
    text = text.replace('CCC', 'CLC');

    // fix case
    text = text.replace(/der (\S{1,20}) Laptop Cloud/gi, 'der $1 Laptop Club');
    text = text.replace(/des (\S{1,20}) Laptop Cloud/gi, 'des $1 Laptop Club');
    text = text.replace(/dem (\S{1,20}) Laptop Cloud/gi, 'dem $1 Laptop Club');
    text = text.replace(/den (\S{1,20}) Laptop Cloud/gi, 'den $1 Laptop Club');

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
