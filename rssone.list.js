// [][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][]
rssy=[];
sekcje=[];
kolory=[];
var x=-1; 
// Szczecin
x++; rssy[x]=[];  sekcje[x]='Szczecin';	kolory[x]='#369';
rssy[x].push({title:'Szczecin Gazeta',url:'http://rss.feedsportal.com/c/32739/f/530434/index.rss',limit:10,color:'#FDFDF2'});	
//rssy[x].push({title:'Szczecin2 Gazeta',url:'http://rss.gazeta.pl/pub/rss/szczecin.xml',limit:10,color:'#FDFDF2'});	
rssy[x].push({title:'Szczecin Radio',url:'http://www.radioszczecin.pl/rss.php?idp=1',limit:10,color:'#eee'});	
rssy[x].push({title:'mmSzczecin',url:'http://www.mmszczecin.pl/rss/news.xml',limit:10,color:'#eee'});	
rssy[x].push({title:'wSzczecinie',url:'http://www.wszczecinie.pl/rss/news.xml',limit:10,color:'#eee'});	



// Wiadomości
x++; rssy[x]=[];	sekcje[x]='Wiadomości';	kolory[x]='#8a8';
rssy[x].push({title:'Gazeta',url:'http://gazeta.pl.feedsportal.com/c/32739/f/592282/index.rss',limit:10,color:'#FDFDF2'});
rssy[x].push({title:'Wiadomości',url:'http://rss.feedsportal.com/c/32739/f/530355/index.rss',limit:10,color:'#FDFDF2'});
rssy[x].push({title:'NaTemat',url:'http://natemat.pl/rss/wszystkie',limit:10,color:'#eee'});	
rssy[x].push({title:'Facebook',url:'http://www.facebook.com/feeds/notifications.php?id=1817860960&viewer=1817860960&key=AWifprYHa4usn0Lf&format=rss20',limit:5});	


// infoTech 
x++; rssy[x]=[];	sekcje[x]='infoTech';	kolory[x]='#fa4';
rssy[x].push({title:'AntyWeb',url:'http://feeds2.feedburner.com/Antyweb',limit:6,color:'#eee'});	
rssy[x].push({title:'Technologie',url:'http://rss.feedsportal.com/c/32739/f/516905/index.rss',limit:6,color:'#eee'});
rssy[x].push({title:'SpiderWeb',url:'http://www.spidersweb.pl/feed',limit:6,color:'#eee'});
rssy[x].push({title:'Chip',url:'http://www.chip.pl/RSS',limit:10});
rssy[x].push({title:'Interia-tech' ,url:'http://nt.interia.pl/feed',limit:6,color:'#fff'});	
rssy[x].push({title:'Nauka' ,url:'http://rss.feedsportal.com/c/32739/f/530269/index.rss',limit:6,color:'#fff'});	
rssy[x].push({title:'Android',url:'http://android.com.pl/component/bca-rss-syndicator/?feed_id=3',limit:6,color:'#eee'});


// Dzone
x++; rssy[x]=[];	sekcje[x]='Dzone';	kolory[x]='#26f';
//rssy[x].push({title:'Top',url:'http://www.dzone.com/links/feed/frontpage/rss.xml'});	
rssy[x].push({title:'JavaSript',url:'http://www.dzone.com/links/feed/frontpage/javascript/rss.xml',limit:6,color:'#eee'});	
rssy[x].push({title:'Frontpage',url:'http://feeds.dzone.com/dzone/frontpage',limit:6,color:'#eee'});	
rssy[x].push({title:'Html5',url:'http://dzone.com/mz/html5/rss',limit:6,color:'#eee'});	
rssy[x].push({title:'Queue',url:'http://www.dzone.com/links/feed/queue/rss.xml',limit:6,color:'#eee'});	




// WebDev
x++; rssy[x]=[];		sekcje[x]='WebDev';	kolory[x]='#88f';
rssy[x].push({title:'Jqueryrain',url:'http://feeds.feedburner.com/Jqueryrain',limit:6,color:'#eee'});	
rssy[x].push({title:'html5rocks',url:'http://feeds.feedburner.com/html5rocks',limit:6,color:'#eee'});
rssy[x].push({title:'Codrops',url:'http://feeds2.feedburner.com/tympanus',limit:6,color:'#eee'});
rssy[x].push({title:'WDWall',url:'http://feeds2.feedburner.com/WebDesignerWall',limit:6,color:'#eee'});
rssy[x].push({title:'Smashing',url:'http://rss1.smashingmagazine.com/feed/',limit:6,color:'#eee'});	




// Code
x++; rssy[x]=[];		sekcje[x]='Code';	kolory[x]='#aaf';
rssy[x].push({title:'PHPclass'  ,url:'http://feeds.feedburner.com/phpclasses-xml',limit:6,color:'#eef'});	
rssy[x].push({title:'JSclass'   ,url:'http://feeds.feedburner.com/jsclasses-xml',limit:6,color:'#eef'});	
rssy[x].push({title:'Mootools'  ,url:'http://mootools.net/forge/feed/recent',limit:6,color:'#eef'});	
rssy[x].push({title:'CSStricks',url:'http://feeds.feedburner.com/CssTricks',limit:6,color:'#eee'});	
rssy[x].push({title:'dailyjs',url:'http://feeds.feedburner.com/dailyjs',limit:6,color:'#eee'});	



// WIZUT
x++; rssy[x]=[];		sekcje[x]='WIZUT';	kolory[x]='#69b';
rssy[x].push({title:'Aktualności' ,url:'http://www.wi.zut.edu.pl/aktualnosci?format=feed&type=atom',limit:4,color:'#f8f8fa'});	
rssy[x].push({title:'Ogłoszenia'  ,url:'http://www.wi.zut.edu.pl/ogloszenia?format=feed&type=atom',limit:4,color:'#f8f8fa'});	
rssy[x].push({title:'Plan'        ,url:'http://www.wi.zut.edu.pl/plan-zajec/zmiany-w-planie?format=feed&type=atom',limit:4,color:'#f8f8fa'});	
rssy[x].push({title:'Doktoranci'  ,url:'http://www.wi.zut.edu.pl/doktoranci?format=feed&type=atom',limit:4,color:'#f8f8fa'});	
rssy[x].push({title:'Pracownicy'  ,url:'http://www.wi.zut.edu.pl/pracownicy?format=feed&type=atom',limit:4,color:'#f8f8fa'});	
rssy[x].push({title:'Kandydaci'   ,url:'http://www.wi.zut.edu.pl/kandydaci?format=feed&type=atom',limit:4,color:'#f8f8fa'});	
rssy[x].push({title:'ZUT aktualności' ,url:'http://www.zut.edu.pl/rssfeed/',limit:5,color:'#f8f8da'});	
rssy[x].push({title:'ZUT studenci' ,url:'http://www.zut.edu.pl/rssfeed-studenci',limit:5,color:'#f8f8da'});	
rssy[x].push({title:'ZUT pracownicy' ,url:'http://www.zut.edu.pl/rssfeed-pracownicy',limit:5,color:'#f8f8da'});	



// Portale
x++; rssy[x]=[];		sekcje[x]='Portale';	kolory[x]='#fff';
rssy[x].push({title:'Interia' ,url:'http://kanaly.rss.interia.pl/fakty.xml',limit:9,color:'#fff'});	
rssy[x].push({title:'WP' ,url:'http://wiadomosci.wp.pl/kat,1329,ver,rss,rss.xml',limit:9,color:'#fff'});	
rssy[x].push({title:'TVN24' ,url:'http://www.tvn24.pl/najnowsze.xml',limit:9,color:'#fff'});	
rssy[x].push({title:'TOK-FM' ,url:'http://www.tokfm.pl/pub/rss/tokfmpl_glowne.xml',limit:9});	
rssy[x].push({title:'ŚwiatCzytników' ,url:'http://rss.swiatczytnikow.pl/SwiatCzytnikow',limit:9});	
rssy[x].push({title:'RadioM' ,url:'http://www.radiomaryja.pl/feed/',limit:9});	
//rssy[x].push({title:'' ,url:'',limit:9});	
rssy[x].push({title:'Signs' ,url:'http://www.signs.pl/backend.php?cat=Warsztat',limit:4,color:'#fff'});	
// onet- starocie


// Allegro
x++; rssy[x]=[];		sekcje[x]='Allegro';	kolory[x]='#dddd22';
rssy[x].push({title:'Kamadu' ,url:'http://allegro.pl/rss.php/user?uid=3561416',limit:20});	
rssy[x].push({title:'Nex-3' ,url:'http://allegro.pl/rss.php?feed=search&category=0&change_view=1&distance=1&listing_interval=7&listing_sel=2&location_radio=1&offer_type=0&order=t&pay=0&selected_country=1&shippingTime=0&state=0&string=sony+nex-3+body+-deki%2A&view=gtext',limit:10});	
rssy[x].push({title:'NEX3-16mm' ,url:'http://allegro.pl/rss.php?feed=search&category=89958&string=16mm',limit:20});	
rssy[x].push({title:'Led Power' ,url:'http://allegro.pl/rss.php?feed=search&category=67252&string=led+power',limit:10});	
rssy[x].push({title:'FotoAlbum' ,url:'http://allegro.pl/rss.php?feed=search&category=0&change_view=Poka%C5%BC%C2%A0%3E&distance=1&listing_interval=7&listing_sel=2&offer_type=0&order=t&postcode_enabled=0&price_from=30&price_to=70&state=0&string=%28fotoalbum+fotoksi%C4%85%C5%BCka%29&view=gtext',limit:10});	



//rssy[x].push({title:'' ,url:'',limit:9});	
//rssy[x].push({title:'' ,url:'',limit:9});	
//rssy[x].push({title:'' ,url:'',limit:9});	

// TEST
//x++; rssy[x]=[];		sekcje[x]='Test';	kolory[x]='#ff0';
//rssy[x].push({title:'Aktualności' ,url:'http://www.wi.zut.edu.pl/aktualnosci?format=feed&type=atom',limit:4,color:'#f8f8fa'});	


// [][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][]
