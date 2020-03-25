{
	"translatorID": "2edf7a1b-eded-48d7-ae11-7126fd1c1b01",
	"label": "PicaSWB_Batch",
	"creator": "Philipp Zumstein, Timotheus Kim, Mario Trojan",
	"target": "txt",
	"minVersion": "3.0",
	"maxVersion": "",
	"priority": 100,
	"inRepository": true,
	"translatorType": 2,
	"browserSupport": "gcs",
	"lastUpdated": "2018-05-30 11:35:00"
}


// Basiert auf das PicaSWB
// Zotero Export Translator für Batchupload in CBS WinIBW in Pica3 Skriptformat (ANSI)

/*
	***** BEGIN LICENSE BLOCK *****
	Copyright © 2016 Philipp Zumstein
	This file is part of Zotero.
	Zotero is free software: you can redistribute it and/or modify
	it under the terms of the GNU Affero General Public License as published by
	the Free Software Foundation, either version 3 of the License, or
	(at your option) any later version.
	Zotero is distributed in the hope that it will be useful,
	but WITHOUT ANY WARRANTY; without even the implied warranty of
	MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
	GNU Affero General Public License for more details.
	You should have received a copy of the GNU Affero General Public License
	along with Zotero. If not, see <http://www.gnu.org/licenses/>.
	***** END LICENSE BLOCK *****
*/

var journalMapping = {
//Anfang Anda
"1533-8606" : "!001400045!", // 19th Century Music:       
"0148-2076" : "!001400045!", // 19th Century Music
"0567-7874" : "!001405616!", // Acta organologica
"0001-6942" : "!001409042!", // Acta sagittariana
"0002-869X" : "!001404202!", // American harp journal
"0004-2919" : "!001405659!", // Ars organi : internationale Zeitschrift für das Orgelwesen
"0004-5438" : "!001399861!", // ARSC journal
"2151-4402" : "!001399861!", // ARSC journal
"0005-3600" : "!006569005!", // Bach : the journal of the Riemenschneider Bach institute
"0084-7682" : "!001405829!", // Bach-Jahrbuch
"1087-8262" : "!001409301!", // Beethoven journal
"0898-6185" : "!001409301!", // Beethoven journal
"0935-9044" : "!001405861!", // Beiträge zur Gregorianik
"0341-941X" : "!001405896!", // Brahms-Studien
"0007-0173" : "!001400118!", // Brio
"1013-8897" : "!001401130!", // Bruckner-Jahrbuch
"0950-429X" : "!001404075!", // Classical guitar
"2045-6247" : "!004234871!", // Classical recordings quarterly
"1472-5797" : "!004234871!", // Classical recordings quarterly
"1531-5169" : "!003557650!", // Computer music journal
"0148-9267" : "!003557650!", // Computer music journal
"0177-5944" : "!00140590X!", // Concerto
"1865-3995" : "!001409697!", // Correspondenz
"1211-0264" : "!005555094!", // Czech music quaterly
"0721-6092" : "!001408747!", // Das mechanische Musikinstrument
"2536-2615" : "!006566774!", // De musica disserenda
"1861-132X" : "!002081342!", // Die Tonkunst
"1863-3536" : "!002081342!", // Die Tonkunst
"0899-8132" : "!001404318!", // Early keyboard journal
"1619-3903" : "!001408682!", // Eisler-Mitteilungen
"0071-2086" : "!001401157!", // Etudes grégoriennes
"0023-1819" : "!001406043!", // Forum Kirchenmusik
"1660-2730" : "!001400169!", // Glareana
"2197-330X" : "!001405926!", // Göttinger Händel-Beiträge
"0177-7319" : "!001405926!", // Göttinger Händel-Beiträge
"0342-8303" : "!001405942!", // Hamburger Jahrbuch für Musikwissenschaft
"0440-0615" : "!001405934!", // Händel-Jahrbuch
"0166-0101" : "!001400053!", // Het orgel
"0172-956X" : "!001405969!", // Hindemith-Jahrbuch
"2474-7777" : "!006566790!", // Indiana theory review
"0271-8022" : "!006566790!", // Indiana theory review
"0572-6239" : "!00141240X!", // Jahrbuch des Staatlichen Instituts für Musikforschung
"0075-2681" : "!006567428!", // Jahrbuch für Liturgik und Hymnologie
"0075-3572" : "!001400770!", // Jazzforschung
"0021-9207" : "!00578056X!", // Journal of band research
"1307-0401" : "!004448731!", // Journal of interdisciplinary music studies
"1306-9055" : "!004448731!", // Journal of interdisciplinary music studies
"1745-9737" : "!002291053!", // Journal of mathematics and music
"1045-795X" : "!00141433X!", // Journal of mechanical music
"2155-109X" : "!006384706!", // Journal of Music History Pedagogy
"1549-4950" : "!006567436!", // Journal of the audio engineering society
"0004-7554" : "!006567436!", // Journal of the audio engineering society
"1649-7341" : "!002284715!", // Journal of the society for musicology in Ireland
"0607-0252" : "!006567444!", // Journal of the viola da gamba society of America
"0507-0252" : "!006567444!", // Journal of the viola da gamba society of America
"0899-6407" : "!006567452!", // Kurt Weill newsletter
"1430-9971" : "!001407759!", // La Gazzetta
"0961-1215" : "!00380206X!", // Leonardo music journal
"1619-0548" : "!001410989!", // Lied und populäre Kultur
"0340-8140" : "!001407929!", // Mendelssohn-Studien
"1431-5106" : "!00140606X!", // Mitteilungen der Arbeitsgemeinschaft für mittelrheinische Musikgeschichte
"0440-2863" : "!001406078!", // Mitteilungen der Hans Pfitzner-Gesellschaft
"0942-5217" : "!001407724!", // Mozart Studien
"2295-5925" : "!006567479!", // Music theory and analysis
"2295-5917" : "!006567479!", // Music theory and analysis
"2092-4828" : "!004372298!", // Musica humana
"2510-4217" : "!00656898X!", // Musik & Ästhetik
"1432-9425" : "!00656898X!", // Musik & Ästhetik
"0937-583X" : "!001406132!", // Musik in Bayern
"2568-3128" : "!001406167!", // Musik und Kirche
"0027-4771" : "!001406167!", // Musik und Kirche
"0935-2562" : "!001408267!", // Musikforum
"0538-8791" : "!001408267!", // Musikforum
"0931-3311" : "!001405667!", // Musik-Konzepte
"0178-8884" : "!001400509!", // MusikTexte
"0177-4182" : "!001406221!", // Musiktheorie
"0027-5336" : "!003662756!", // Muzsika
"2199-5958" : "!001406248!", // Neue Zeitschrift für Musik
"0170-8791" : "!001406248!", // Neue Zeitschrift für Musik
"0028-3509" : "!001406248!", // Neue Zeitschrift für Musik
"0945-6945" : "!001406248!", // Neue Zeitschrift für Musik
"1435-7941" : "!001408348!", // Organ
"0048-2161" : "!001405020!", // Organists' review
"1439-1163" : "!001408984!", // Parapluie
"0031-9562" : "!004992105!", // Piano technicians journal
"0961-1371" : "!001410423!", // Plainsong and medieval music
"0717-6252" : "!001410326!", // Revista musical chilena
"0716-2790" : "!001410326!", // Revista musical chilena
"0944-0291" : "!001406280!", // Rohrblatt
"1617-6340" : "!001408453!", // Schubert : Perspektiven
"1611-6291" : "!001408445!", // Schubert-Jahrbuch
"0174-2345" : "!001406299!", // Schütz-Jahrbuch
"0259-3165" : "!001400525!", // Schweizer Jahrbuch für Musikwissenschaft
"2002-021X" : "!005692245!", // Svensk tidskrift för musikforskning online
"2225-8795" : "!004541146!", // Terz Magazin
"0928-9003" : "!001400940!", // The Consort
"0268-9111" : "!001400940!", // The Consort
"0741-7659" : "!001414321!", // The double reed
"0072-0127" : "!001400150!", // The Galpin Society journal
"2397-5318" : "!006568890!", // The musical times
"0027-4666" : "!001402889!", // The musical times
"0920-3192" : "!001407791!", // The organ yearbook
"0952-6323" : "!005572231!", // The pianola journal
"1611-0242" : "!001414860!", // Toccata
"0041-0330" : "!001414879!", // Tracker
"0174-6065" : "!001407740!", // Üben & Musizieren
"8755-1233" : "!001414895!", // Update
"0506-306X" : "!004197674!", // Viola da Gamba Society of America
"1434-6206" : "!001408763!", // Weberiana
"1553-0612" : "!00422549X!", // Women and music
"1090-7505" : "!00422549X!", // Women and music
"2304-3857" : "!001410245!", // Yearbook for traditional music
"0740-1558" : "!001410245!", // Yearbook for traditional music
//Anfang Lisa
"2158-5296" : "!00493699X!", // AAWM journal[Elektronische Ressource]
"2191-253X" : "!004465490!", // Act [Elektronische Ressource] 
"0001-7965" : "!004314948!", // Ad marginem (elektr.)
"1722-3954" : "!00662054X!", // Ad parnassum (elektr.)
"00654019" : "!004496051!", // African music (elektr.)
"1945-2349" : "!001414186!", // American music (elektr.)
"0003-1313" : "!006620558!", // American string teacher (elektr.)
"1553-5630" : "!001410636!", // Asian music (elektr.)
"0044-9202" : "!001401033!", // Asian music (gedr.)
"1325-5266" : "!004233700!", // Australasian music research [Elektronische Ressource]
"0943-4224" : "!002419270!", // Berichte aus dem Nationalkomitee ... International Council for Traditional Music (gedr.)
"0265-0517" : "!001410296!", // British journal of music education (elektr.)
"0010-9894" : "!006620566!", // Bulletin of the council for research in music education (elektr.)
"0954-5867" : "!001414739!", // Cambridge opera journal (elektr.)
"0008-4549" : "!004366069!", // Canadian music educator (gedr.)
"0192-3749" : "!001404105!", // Chinese music
"0888-9015" : "!001415050!", // Cue sheet
"0027-4801" : "!001406183!", // Die Musikforschung (gedr.)
"1437-4722" : "!001408518!", // Diskussion Musikpädagogik
"1559-5749" : "!00498272X!", // Empirical musicology review [Elektronische Ressource] 
"0014-1836" : "!001414178!", // Ethnomusicology (elektr.)
"1741-1912" : "!001411233!", // Ethnomusicology forum (elektr.)
"2167-1931" : "!006555306!", // Evental Aesthetics [Elektronische Ressource]
"2056-6166" : "!004532759!", // Folk music journal (elektr.)
"0531-9684" : "!001404393!", // Folk music journal (gedr.)
"2511-3631" : "!006620582!", // Forum Musikbibliothek (elektr.)
"0173-5187" : "!001408712!", // Forum Musikbibliothek (gedr.)
"0073-1692" : "!001406809!", // Heine-Jahrbuch (gedr.)
"1045-4616" : "!00139987X!", // Historic brass society journal
"0018-7003" : "!001404458!", // Hudebni veda
"1013-056X" : "!00140119X!", // Jahrbuch des Österreichischen Volksliedwerkes
"1535-1882" : "!001410466!", // Journal of American folklore (elektr.)
"1543-0413" : "!004532600!", // Journal of folklore research (elektr.)
"1536-6006" : "!005123615!", // Journal of historical research in music education (elektr.)
"1057-0837" : "!005227291!", // Journal of music teacher education (elektr.)
"1540-5931" : "!001414275!", // Journal of popular culture (elektr.)
"0022-4294" : "!001410415!", // Journal of research in music education (elektr.)
"1086-7732" : "!006620604!", // Journal of singing (elektr.)
"0001-4966" : "!001413600!", // Journal of the acoustical society of America (elektr.)
"0251-012X" : "!001400754!", // Journal of the Indian musicological society (gedr.)
"0892-1997" : "!006620620!", // Journal of voice : official journal of the voice foundation (elektr.)
"0938-4030" : "!00401393X!", // Klassen musizieren
"0295-1371" : "!003948471!", // L' avant-scène (gedr.)
"0768-1593" : "!001916130!", // La Revue musicale
"0163-0350" : "!001410334!", // Latin American music review [Elektronische Ressource]
"0013-1415" : "!00140220X!", // L'éducation musicale
"1608-103X" : "!002390337!", // MIP-Journal
"0742-4612" : "!005107849!", // Mississippi rag [Elektronische Ressource] 
"0085-350X" : "!004011112!", // Missouri journal of research in music education
"0027-4224" : "!001410008!", // Music and letters (elektr.)
"0027-4224, 1477-4631" : "!001410008!", // Music and letters (elektr.)
"1461-3808" : "!006634966!", // Music education research (elektr.)
"0027-4321" : "!006620639!", // Music educators journal (elektr.)
"1212-1193" : "!006620647!", // Musicologica Olomucensia (elektr.)
"0027-4747" : "!001406140!", // Musik & Bildung
"1439-1384" : "!001406175!", // Musik und Unterricht
"0027-4798" : "!001400657!", // Musikerziehung
"2569-5665" : "!006620655!", // Musikpsychologie (elektr.)
"0177-350x" : "!001406213!", // Musikpsychologie (gedr.)
"1812-5980" : "!004982754!", // Muziki (elektr.)
"0090-5844" : "!005778190!", // North Carolina folklore journal (elektr.)
"2059-6707" : "!006620663!", // Opera (elektr.)
"0030-3526" : "!001921509!", // Opera (gedr.)
"0030-3577" : "!005108225!", // Opera Canada (gedr.)
"0736-0053" : "!004561945!", // Opera quarterly (elektr.)
"0862-8505" : "!003080285!", // Opus musicum
"0553-6502" : "!001404873!", // Percussive notes (gedr.)
"1038-2909" : "!005972329!", // Perfect beat [elektr.] 
"1543-3412" : "!003595544!", // Philosophy of music education review (elektr.)
"1063-5734" : "!003595528!", // Philosophy of music education review (gedr.)
"0261-1430" : "!001410083!", // Popular music (elektr.)
"0300-7766" : "!00662068X!", // Popular music and society (elektr.)
"1743-1646" : "!005972248!", // Popular music history (elektr.)
"0941-4711" : "!001406272!", // Positionen (gedr.)
"0305-7356" : "!001410091!", // Psychology of music (elektr.)
"2162-1535" : "!001410377!", // Psychomusicology (elektr.)
"0771-6788" : "!001400428!", // Revue belge de musicologie (gedr.)
"0035-1601" : "!001400436!", // Revue de musicologie (gedr.)
"0891-9372" : "!00513398X!", // Rock & rap confidential (gedr.)
"0038-2493" : "!005222028!", // South African music teacher
"2037-6413" : "!004313550!", // Studi musicali (elektr.)
"0303-4631" : "!001400452!", // Studi musicali (gedr.)
"1788-6244" : "!005350751!", // Studia musicologica (elektr.)
"0040-3253" : "!003020037!", // Tennessee folklore society bulletin
"1040-3582" : "!004944321!", // The old time herald (elektr.)
"0043-8774" : "!001400495!", // The World of music (gedr.)
"2305-9672" : "!00653189X!", // TheMA (elektr.)
"2307-440X" : "!006531903!", // TheMA (gedr.)
"1651-3770" : "!005946700!", // Tidskriften opera
"0506-306X" : "!004197674!", // VDGSA news (gedr.)
"0042-6180" : "!005946719!", // Village voice (gedr.)
"0043-373X" : "!001404008!", // Western folklore (gedr.)
"1619-8301" : "!001408828!", // Zeitschrift für kritische Musikpädagogik [Elektronische Ressource] 
"0044-3700" : "!001406337!", // Zeitschrift für Volkskunde (gedr.)
//Anfang Katherina
"1861-9959" : "!001409166!", // Acta acustica united with Acustica(elektr.)
"1610-1928" : "!001405624!", // Acta acustica united with Acustica(gedr.)
"2296-4339" : "!001409891!", // Acta musicologica (elektr.)
"0001-6241" : "!001409891!", // Acta musicologica (elektr.)
"0003-9292" : "!001409026!", // Archiv für Musikwissenschaft (elektr.)
"1460-9231" : "!001409441!", // British postgraduate musicology (gedr.)
"2192-1482" : "!004031997!", // Deutsche Zeitschrift für Philosophie
"0012-1045" : "!001698230!", // Deutsche Zeitschrift für Philosophie
"2035-6706" : "!006577806!", // Il saggiatore musicale
"1123-8615" : "!001404954!", // Il saggiatore musicale
"1073-6913" : "!001404474!", // Integral
"0941-9535" : "!001407805!", // International journal of musicology
"0351-5796" : "!001400185!", // International review of the aesthetics and sociology of music
"1861-3217" : "!002081334!", // Jahrbuch Musiktherapie
"0197-0100" : "!001404512!", // Journal of jewish music and liturgy
"0141-1896" : "!00141044X!", // Journal of musicological research
"1866-4768" : "!004214676!", // Kieler Beiträge zur Filmmusikforschung
"0075-6199" : "!001406035!", // Kirchenmusikalisches Jahrbuch
"0075-8833" : "!006350445!", // Lessing yearbook
"2190-1600" : "!00406089X!", // Liturgie und Kultur
"1938-2766" : "!005178142!", // Medical problems of performing artists
"0885-1158" : "!004578155!", // Medical problems of performing artists
"1862-2003" : "!002081326!", // Mitteilungen der Christoph-Graupner-Gesellschaft
"1468-2249" : "!001410407!", // Music analysis
"02625245" : "!001410407!", // Music analysis
"1058-8167" : "!005071461!", // Music reference services quarterly
"1067-3040" : "!001414356!", // Music theory online
"0195-6167, 1533-8339" : "!001410032!", // Music theory spectrum
"0077-2461" : "!001405411!", // Musica disciplina
"0147-7536" : "!006582397!", // Musica judaica
"0179-356X" : "!001413791!", // Musica sacra
"0179-356X" : "!001406116!", // Musica sacra
"1015-6798" : "!001400665!", // Musik und Gottesdienst
"1257-7537" : "!005177855!", // Musurgia
"2044-8414" : "!004523202!", // Nineteenth Century Music Review
"1479-4098" : "!004523202!", // Nineteenth Century Music Review
"0030-5375" : "!001403184!", // Orientalia christiana periodica
"2511-1345" : "!006582400!", // Phoibos : Zeitschrift für Zupfmusik
"1866-8291" : "!005382262!", // Phoibos : Zeitschrift für Zupfmusik
"1751-7788" : "!00444874X!", // Radical musicology
"0394-6282" : "!001404997!", // Rivista internazionale di musica sacra
"0036-2255" : "!001404962!", // Sacred music
"0037-5721" : "!002235501!", // Singende Kirche
"2235-2678" : "!004478738!", // Studi Pergolesiani
"0393-2532" : "!001404814!", // Studi verdiani
"0332-5024" : "!006585035!", // Studia musicologica Norvegica
"1504-2960" : "!006585035!", // Studia musicologica Norvegica
"0196-2337" : "!001414836!", // The stanza
"0040-5698" : "!006701795!", // Theologische Rundschau
"1554-1312" : "!001404741!", // Theoria
"0741-6156" : "!004414233!", // Theory and practice
"0176-6511" : "!001406302!", // Tibia
"0920-0649" : "!001414852!", // Tijdschrift oude muziek
"0177-6487" : "!001406310!", // Württembergische Blätter für Kirchenmusik
"1862-6742" : "!001408690!", // Zeitschrift der Gesellschaft für Musiktheorie
"1862-6750" : "!00245517X!", // Zeitschrift der Gesellschaft für Musiktheorie
"1612-8516" : "!001408690!", // Zeitschrift der Gesellschaft für Musiktheorie
"002-021X" : "!5692245!", // Svensk tidskrift för musikforskning STM–SJM
//Anfang Frau Bruchmann	
"10583572" : "!001411683!", // American music research center journal
"0276-3605" : "!001410628!", // Black music research journal
"0190-4922" : "!005188229!", // Contributions to music education
"1478-5706" : "!001411217!", // Eighteenth century music
"00215643" : "!001411586!", // Jazz hot
"1749-4060" : "!004463366!", // Jazz perspectives
"00215686" : "!001411632!", // Jazz Podium
"18128653" : "!001405306!", // Jazz Research News
"1533-1598" : "!002284758!", // Journal of popular music studies
"0269-0403" : "!001409964!", // Journal of the royal musical association
"0025-0384" : "!00140461X!", // Magyar zene
"1754-7105" : "!006422292!", // Music and arts in action
"1755-9219" : "!004448715!", // Music performance research
"0172-5505" : "!005179947!", // Musiktherapeutische Umschau
"0354-818X" : "!004546997!", // New Sound
"2194-6981" : "!005201454!", // Pop : Kultur und Kritik
"0040-2982" : "!005179955!", // Tempo
"1478-5722" : "!001412396!", // Twentieth-Century Music
//Anfang Frau Asmus
"0002-7898" : "!001409069!", // American choral review
"0003-0724" : "!004598555!", // American Recorder
"1617-8688" : "!004125142!", // Chor und Konzert
"1474-0559" : "!001410490!", // Early music history 
"0261-1279" : "!001410490!", // Early music history
"2504-1916" : "!005834716!", // European Journal of Musicology
"8756-8667" : "!004598792!", // Flutist quarterly
"1918-512X" : "!004028759!", // Intersections
"1911-0146" : "!004028759!", // Intersections
"0022-2917" : "!005553180!", // Journal of music therapy
"1089-747X" : "!001404539!", // Journal of seventeenth century music
"1558-268X" : "!00516141X!", // Journal of Schenkerian studies
"1547-3848" : "!001414070!", // Journal of the American musicological society
"0003-0139" : "!001414070!", // Journal of the American musicological society
"1752-1971" : "!002861224!", // Journal of the Society for American Music
"1752-1963" : "!002861224!", // Journal of the Society for American Music
"0148-6845" : "!006742238!", // Journal of the violin society of America
"1084-1776" : "!004598946!", // Kodaly envoy 
"1565-0618" : "!001410482!", // Min-ad Israel studies
"1940-7610" : "!005372577!", // Music and the moving image
"2167-8464" : "!005372577!", // Music and the moving image
"2053-7387" : "!006080332!", // Music therapy perspectives
"0734-6875" : "!006080332!", // Music therapy perspectives
"1753-0768" : "!006466524!", // Music, sound, and the moving image
"2045-4147" : "!004524195!", // Musicae scientiae
"1029-8649" : "!004524195!", // Musicae scientiae
"2411-6696" : "!00664354X!", // Musicologica austriaca
"1711-9235" : "!004614917!", // Musicological Explorations
"2350-4242" : "!004314204!", // Muzikološki zbornik
"1608-8956" : "!001400630!", // Nachrichten zur Mahler-Forschung
"0213-7305" : "!00140508X!", // Nassarre
"1534-150X" : "!001410202!", // Notes
"1044-1638" : "!003657310!", // Performance practice review
"0031-6016" : "!001410075!", // Perspectives of new music
"1120-5741" : "!001404857!", // Recercare
"2385-2496" : "!006742254!", // Recercare
"2036-5586" : "!003555933!", // Rivista Italiana di musicologia
"0035-6867" : "!003555933!", // Rivista Italiana di musicologia
"2191-0499" : "!004375769!", // Seiltanz
//Anfang Frau Wegner
"0211-3538" : "!001410687!", // Anuario musical (elektr.)
"1043-3848" : "!005439752!", // Ars lyrica (elektr.)
"1043-3848" : "!00140914X!", // Ars lyrica (gedr.)
"0587-5455" : "!004987659!", // Arti musices (elektr.)
"2280-918X" : "!00140265X!", // Bollettino del centro Rossiniano di studi (gedr.)
"0141-4992" : "!001409336!", // British institute of organ studies journal (gedr.)
"0395-1200" : "!001404164!", // Cahiers Debussy (gedr.)
"2245-5809" : "!000000000!", // Carl Nielsen studies (gedr.)
"2194-1890" : "!005565650!", // Cherubiniana (gedr.)
"1057-9478" : "!005841496!", // Computing in musicology (elektr.)
"1057-9478" : "!001404261!", // Computing in musicology (gedr.)
"0749-4467" : "!001414283!", // Contemporary music review (elektr.)
"0011-3735" : "!001410571!", // Current musicology (elektr.)
"1899-8089" : "!004130677!", // De musica commentarii (gedr.)
"1387-1358" : "!005173558!", // De orgelkrant (gedr.)
"0306-0373" : "!001409751!", // Delius society journal (gedr.)
"1437-3378" : "!001408526!", // Die Laute (gedr.)
"1660-7244" : "!003950425!", // Dissonance (gedr.)
"1422-7371" : "!001399950!", // Dissonanz = Dissonance (gedr.)
"0012-5768" : "!001411152!", // Down beat (elektr.)
"0012-5768" : "!001411144!", // Down beat (gedr.)
"0306-1078" : "!001409921!", // Early music (elektr.)
"1083-3633" : "!006755593!", // Early music America (elektr.)
"1083-3633" : "!001411187!", // Early music America (gedr.)
"1477-478X" : "!005426499!", // Early music performer (elektr.)
"1477-478X" : "!005426472!", // Early music performer (gedr.)
"1773-9128" : "!006585736!", // Filigrane (elektr.)
"1773-9128" : "!002052563!", // Filigrane (gedr.)
"0930-8563" : "!004967623!", // Flöte aktuell (gedr.)
"2195-7665" : "!006072917!", // Flower world (gedr.)
"2471-156X" : "!006756077!", // Fontes artis musicae (elektr.)
"0015-6191" : "!001400878!", // Fontes artis musicae (gedr.)
"0016-0717" : "!001407317!", // Freiburger Universitätsblätter (gedr.)
"1938-6990" : "!006069169!", // Gamut (elektr.)
"0017-5471" : "!001411357!", // Guitar review 
"0440-5323" : "!001405950!", // Haydn-Studien (gedr.)
"0018-1137" : "!004479823!", // Heterofonía (gedr.)
"0046-7928" : "!001411411!", // Horn call
"0098-9487" : "!006756085!", // IAJRC journal (elektr.)
"0098-9487" : "!005227356!", // IAJRC journal (gedr.)
"0020-4331" : "!005227305!", // Instrumentalist (gedr.)
"0936-014X" : "!001399977!", // Instrumentenbaureport (gedr.)
"1057-4263" : "!001411489!", // International journal of arts medicine
"0255-7614" : "!001409190!", // International journal of music education (elektr.)
"0020-8051" : "!006756107!", // International musician (elektr.)
"0020-8051" : "!001948679!", // International musician (gedr.)
"0145-3513" : "!006756123!", // International Trombone Association journal (elektr.)
"0145-3513" : "!001411527!", // International Trombone Association journal (gedr.)
"0363-2845" : "!001411543!", // International Trumpet Guild journal / Stephen L. Glover, ed. (gedr.)
"1017-7515" : "!005903807!", // ISO journal  (gedr.)
"0938-6998" : "!001410970!", // Jahrbuch für Glockenkunde (gedr.)
"1542-734X" : "!005661803!", // Journal of American culture  (elektr.)
"1542-7331" : "!001411691!", // Journal of American culture (gedr.)
"1836-8336" : "!006555217!", // Journal of music research online (elektr.)
"0022-2909" : "!001409948!", // Journal of music theory (elektr.)
"0277-9269" : "!001414062!", // Journal of musicology (elektr.)
"0929-8215" : "!001414038!", // Journal of new music research (elektr.)
"0147-4413" : "!001409050!", // Journal of the American Liszt Society (gedr.)
"0362-3300" : "!00675631X!", // Journal of the American musical instrument society (elektr.)
"0362-3300" : "!001400223!", // Journal of the American musical instrument society (gedr.)
"0076-1526" : "!001400266!", // Journal of the lute society of America (gedr.)
"1812-1004" : "!006340482!", // Journal of the musical arts in Africa (elektr.)
"1754-9892" : "!006385591!", // Journal on the art of record production (elektr.)
"1013-6835" : "!006757561!", // La tribune de l'orgue (elektr.)
"1013-6835" : "!004564944!", // La tribune de l'orgue (gedr.)
"1392-9313" : "!006757618!", // Lietuvos muzikologija (elektr.)
"1392-9313" : "!001405403!", // Lietuvos muzikologija (gedr.)
"0474-6376" : "!00140038X!", // L'organo (gedr.)
"2191-8627" : "!00140797X!", // Mitteilungen // Tschaikowsky-Gesellschaft (gedr.)
"1015-0536" : "!006757650!", // Mitteilungen der Paul Sacher Stiftung (elektr.)
"1015-0536" : "!001400002!", // Mitteilungen der Paul Sacher Stiftung (gedr.)
"0342-0256" : "!001408860!", // Mozart-Jahrbuch (gedr.)
"1938-7687" : "!004448707!", // Music & Politics (elektr.)
"2169-9488" : "!006765742!", // Music in art (elektr.)
"1522-7464" : "!001400029!", // Music in art (gedr.)
"0730-7829" : "!001410016!", // Music perception (elektr.)
"0909-0797" : "!004942272!", // Musical Denmark yearbook (gedr.)
"0814-5857" : "!006766161!", // Musicology Australia (elektr.)
"0947-8302" : "!001407872!", // Musik in Baden-Württemberg : Jahrbuch (gedr.)
"1264-7020" : "!001401211!", // Musique, images, instruments (gedr.)
"0027-5344" : "!001405101!", // Muzyka (gedr.)
"0541-4830" : "!00676620X!", // Muzyka (elektr.)
"0160-2365" : "!006765750!", // Newsletter of the American musical instrument society (elektr.)
"0160-2365" : "!001399837!", // Newsletter of the American musical instrument society (gedr.)
"0474-2443" : "!006765769!", // Opernwelt (elektr.)
"0030-3690" : "!001408550!", // Opernwelt (gedr.)
"0030-4883" : "!006765785!", // Organ (elektr.)
"0030-4883" : "!001914456!", // Organ (gedr.)
"1355-7718" : "!001414046!", // Organised sound (elektr.)
"1593-8735" : "!006765823!", // Polifonie (elektr.)
"1593-8735" : "!001405322!", // Polifonie (gedr.)
"1547-982X" : "!00140542X!", // Lute Society of America(gedr.)
"0211-6391" : "!004478320!", // Recerca musicológica (elektr.)
"0961-3544" : "!00676584X!", // Recorder magazine (elektr.)
"0306-4409" : "!005236711!", // Recorder magazine (gedr.)
"0210-1459" : "!006766218!", // Revista de musicología (elektr.)
"0035-3744" : "!002582120!", // Revue musicale de Suisse romande (gedr.)
"1615-5556" : "!001408704!", // Rosetti-Forum (gedr.)
"0035-9610" : "!001404970!", // Ruch muzyczny (gedr.)
"0036-3308" : "!00140878X!", // Saitenspiel (gedr.)
"0863-2340" : "!001407880!", // Schumann-Studien (gedr.)
"0739-229X" : "!001405012!", // Sonus (gedr.)
"1522-810X" : "!005222095!", // Sound & vision (gedr.)
"0951-6816" : "!005819040!", // Sound on Sound
"0145-6237" : "!005222044!", // Soundboard (gedr.)
"2223-635X" : "!004503627!", // South African music studies (elektr.)
"1594-0012" : "!006765866!", // Studi vivaldiani (elektr.)
"1594-0012" : "!001401181!", // Studi vivaldiani (gedr.)
"0930-9578" : "!006765890!", // Studien zur Musikwissenschaft (elektr.)
"0930-9578" : "!001400541!", // Studien zur Musikwissenschaft (gedr.)
"0012-2378" : "!006765904!", // The diapason (elektr.)
"0012-2378" : "!001404296!", // The diapason (gedr.)
"1540-6245" : "!001410474!", // The journal of aesthetics and art criticism (elektr.)
"0021-8529" : "!001400819!", // The journal of aesthetics and art criticism (gedr.)
"0027-4631" : "!001410040!", // The Musical quarterly (elektr.)
"0034-1568" : "!00577151X!", // The Record Collector (gedr.)
"1472-3808" : "!004095308!", // The royal musical association research chronicle (elektr.)
"0080-4460" : "!001400584!", // The royal musical association research chronicle (gedr.)
"0042-3874" : "!001400487!", // Tijdschrift van de koninklijke vereniging voor Nederlandse muziekgeschiedenis (gedr.)
"1383-7079" : "!001400487!", // Tijdschrift van de koninklijke vereniging voor Nederlandse muziekgeschiedenis (gedr.)
"2366-746X" : "!006147844!", // Verdiperspektiven (gedr.)
"1504-1611" : "!00584326X!", // Voices (elektr.)
"2377-231X" : "!006066291!", // Yale Journal of Music & Religion (elektr.)
"1535-3532" : "!006066283!", // Yale Journal of Music & Religion (gedr.)
//Anfang ohne Bearbeiter
"1940-1159" : "!006714862!", // Rock music studies
"0378-8903" : "!001409913!", // Mitteilungen der Internationalen Gesellschaft für Musikwissenschaft
"2059-2043" : "!00675788X!", // Music & science
"0958-8434" : "!006801331!", // Musical Times and Singing Class Circular
"1753-8637" : "!005240662!", // Jazz Research Journal
"1612-0124" : "!006790267!", // Sammelbände der Internationalen Musikgesellschaft
"2055-1940" : "!00680151X!", // Sound studies : an interdisciplinary journal
"0809-8131" : "!004575601!", //Nordic journal of music therapy (elektr.)
//Anfang Anda
"ARSC journal" : "!001399861!", // ARSC journal
"Basler Jahrbuch für historische Musikpraxis : eine Publikation der Schola Cantorum Basiliensis, Hochschule für Alte Musik an der Musik-Akademie der Stadt Basel, Fachhochschule Nordwestschweiz (FHNW)" : "!001401084!", // Basler Jahrbuch für historische Musikpraxis
"Engaging Students" : "!005778166!", // Engaging Students: Essays in Music Pedagogy
"Journal of the Arnold Schönberg Center" : "!001405314!", // Journal of the Arnold Schönberg center
"Liszt-Jahrbuch" : "!006470041!", // Liszt-Jahrbuch
"Music Theory and Analysis (MTA)" : "!006567479!", // Music Theory and Analysis
"Schumann-Journal" : "!005834732!", // Schumann-Journal
"Journal of the Audio Engineering Society" : "!006567436!", // Journal of the Audio Engineering Society
//Anfang Lisa
"Australasian Music Research" : "!004233700!", //
"Australian Journal of Music Education" : "!004942221!", // The Australian journal of music education (elektr.)
"Boccherini studies" : "!005971888!", // 
"CeReNeM Journal" : "!006555233!", // 
"European string teachers Association Nachrichten" : "!004532570!", // 
"Heidelberger Hochschulschriften zur Musikpädagogik" : "!004400054!", // Heidelberger Hochschulschriften zur Musikpädagogik
"Nota Bene: Canadian Undergraduate Journal of Musicology" : "!006555314!", // Nota bene
"Rock & rap confidential" : "!005133998!", // 
"String players library series" : "!00581832X!", // 
"The old time herald" : "!004944313!", //
"African Music: Journal of the International Library of African Music" : "!004496051!", // 
//Anfang Katherina
"Acta Acustica united with Acustica" : "!001409166!", // Acta Acustica
"British postgraduate musicology" : "!00140945X!", // British postgraduate musicology
"Integral the journal of applied musical thought" : "!006577814!", // Integral
"International journal of musicology" : "!006577822!", // International journal of musicology
"International review of the aesthetics and sociology of music" : "!001414054!", // International review of the aesthetics and sociology of music
"Journal of jewish music and liturgy" : "!006582362!", // Journal of jewish music and liturgy
"Journal of Sonic Studies" : "!006384692!", // Journal of Sonic Studies
"Mitteilungen der Christoph-Graupner-Gesellschaft" : "!006582370!", // Mitteilungen der Christoph-Graupner-Gesellschaft
"Music research forum" : "!004614941!", // Music research forum
"Musica disciplina" : "!006582389!", // Musica disciplina
"Musica judaica" : "!006582397!", // Musica judaica
"Musurgia analyse et pratique musicales" : "!005177855!", // Musurgia
"Sacred music" : "!006582419!", // Sacred music
"Ssi-ol Almanach der Internationalen Isang Yun Gesellschaft" : "!00140833X!", // Ssi-ol
"The stanza" : "!006582427!", // The stanza
"Theologische Rundschau" : "!006701795!", // Theologische Rundschau
"Theory and practice" : "!004414233!", // Theory and practice
"Tibia" : "!006582435!", // Tibia
"Acta acustica united with Acustica" : "!001409166!", // Acta acustica united with Acustica(elektr.)
"Medical Problems of Performing Artists" : "!005178142!", // Medical problems of performing artists (elektr.)
"Music Analysis" : "!001410407!", // Music analysis
"Music Theory Online" : "!001414356!", // Music theory online
"Music Theory Spectrum" : "!001410032!", // Music theory spectrum
"Nineteenth-Century Music Review" : "!004523202!", // Nineteenth Century Music Review
"Studia Musicologica Norvegica" : "!006585035!", // Studia musicologica Norvegica
//Anfang Frau Bruchmann
"American Music Research Center Journal" : "!001411683!", // American Music Research Center Journal
"Context: Journal of Music Research" : "!00228460X!", // Context
"Jazz Hot: La Revue Internationale du Jazz" : "!001411586!", // Jazz hot
"Jazz Podium" : "!001411632!", // Jazz Podium
"Jazz Research News" : "!001405306!", // Jazz Research News	
//Anfang Frau Asmus
"Anklaenge: Wiener Jahrbuch für Musikwissenschaft" : "!003032051!", //Anklänge
"«Fonti Musicali Italiane»" : "!00674222X!", // Fonti Musicali Italiane
"Journal of Schenkerian studies" : "!00516141X!", // Journal of Schenkerian studies
"Journal of seventeenth-century music" : "!001404539!", // Journal of seventeenth century music
"Violin Society of America Papers" : "!006742238!", // Journal of the violin society of America
"Performance Practice Review" : "!003657310!", // Performance practice review
"Recercare" : "!006742254!", // Recercare
// Anfang Frau Wegner
"http://revues.mshparisnord.org/filigrane" : "!006585736!", // Filigrane
"International Trumpet Guild journal" : "!001411543!", // International Trumpet Guild journal
"Lute Society of America quarterly" : "!00140542X!", // Lute Society of America (gedr.)
"Musical opinion supplement" : "!006673236!", // Musical opinion supplement (elektr.)
"Musik und Gender im Internet" : "!002440156!", // Musik und Gender im Internet (elektr.)
"Postgraduate Journal of Aesthetics" : "!005778174!", // Postgraduate Journal of Aesthetics (elektr.)
"Sonus" : "!001405012!", // Sonus (gedr.)
"Sound & vision" : "!006765858!", // Sound & vision (elektr.)
// Anfang ohne Bearbeiter
"Philosophy of music education review" : "!003595528!", //Philosophy of music education review (gedr.)
"Musik-Texte" : "!001400509!", //Musik-Texte (gedr.)
};





var nachnameMapping = {
	"Hemingway" : "!16137493X!"  // http://swb.bsz-bw.de/DB=2.1/PPNSET?PPN=16137493X&INDEXSET=1
};
var nameMapping = {
	"Berners-Lee, Tim" : "!18195804X!" // http://swb.bsz-bw.de/DB=2.1/PPNSET?PPN=18195804X&INDEXSET=1
};
//Sprachcodes nach ISO 639-2
//http://swbtools.bsz-bw.de/winibwhelp/Liste_1500.htm

var languageMapping = {
	"en" : "eng",
	"de" : "ger",
	"fr" : "fre",
	"English" : "eng",
	"pt" : "por",
	"es" : "spa",
	"it" : "ita",
	"en-US" : "eng",
	"en_US" : "eng",
	"EN" : "eng",
	"da-DK" : "dan",
	"da" : "dan",
	"Da" : "dan",
	"pt-BR" : "por",
	"es-ES" : "spa",
	"No" : "nor",
	"Sv" : "swe", 
	"no" : "nor",
	"sv" : "swe", 
	"sl" : "slv",
	"no-NO" : "nor",
	"hu" : "hun",
	"de-DE" : "ger",
};

var issnLangMapping = {
//Anfang Anda
"0148-2076" : "eng", // 19th Century Music
"1533-8606" : "eng", // 19th Century Music
"0567-7874" : "ger", // Acta organologica
"0001-6942" : "manuell", // Acta sagittariana
"0002-869X" : "eng", // American harp journal
"0004-2919" : "ger", // Ars organi : internationale Zeitschrift für das Orgelwesen
"0004-5438" : "eng", // ARSC journal
"2151-4402" : "eng", // ARSC journal
"0005-3600" : "eng", // Bach : the journal of the Riemenschneider Bach institute
"0084-7682" : "ger", // Bach-Jahrbuch
"1087-8262" : "eng", // Beethoven journal
"0898-6185" : "eng", // Beethoven journal
"0935-9044" : "ger", // Beiträge zur Gregorianik
"0341-941X" : "ger", // Brahms-Studien
"0007-0173" : "eng", // Brio
"1013-8897" : "ger", // Bruckner-Jahrbuch
"0950-429X" : "eng", // Classical guitar
"2045-6247" : "eng", // Classical recordings quarterly
"1472-5797" : "eng", // Classical recordings quarterly
"1531-5169" : "eng", // Computer music journal
"0148-9267" : "eng", // Computer music journal
"0177-5944" : "ger", // Concerto
"1865-3995" : "ger", // Correspondenz
"1211-0264" : "eng", // Czech music quaterly
"0721-6092" : "ger", // Das mechanische Musikinstrument
"2536-2615" : "manuell", // De musica disserenda
"1861-132X" : "manuell", // Die Tonkunst
"1863-3536" : "manuell", // Die Tonkunst
"0899-8132" : "eng", // Early keyboard journal
"1619-3903" : "ger", // Eisler-Mitteilungen
"0071-2086" : "fre", // Etudes grégoriennes
"0023-1819" : "ger", // Forum Kirchenmusik
"1660-2730" : "ger", // Glareana
"2197-330X" : "manuell", // Göttinger Händel-Beiträge
"0177-7319" : "manuell", // Göttinger Händel-Beiträge
"0342-8303" : "ger", // Hamburger Jahrbuch für Musikwissenschaft
"0440-0615" : "manuell", // Händel-Jahrbuch
"0166-0101" : "dut", // Het orgel
"0172-956X" : "ger", // Hindemith-Jahrbuch
"2474-7777" : "eng", // Indiana theory review
"0271-8022" : "eng", // Indiana theory review
"0572-6239" : "ger", // Jahrbuch des Staatlichen Instituts für Musikforschung
"0075-2681" : "ger", // Jahrbuch für Liturgik und Hymnologie
"0075-3572" : "ger", // Jazzforschung
"0021-9207" : "eng", // Journal of band research
"1307-0401" : "eng", // Journal of interdisciplinary music studies
"1306-9055" : "eng", // Journal of interdisciplinary music studies
"1745-9737" : "eng", // Journal of mathematics and music
"1045-795X" : "eng", // Journal of mechanical music
"2155-109X" : "eng", // Journal of Music History Pedagogy
"1549-4950" : "eng", // Journal of the audio engineering society
"0004-7554" : "eng", // Journal of the audio engineering society
"1649-7341" : "eng", // Journal of the society for musicology in Ireland
"0607-0252" : "eng", // Journal of the viola da gamba society of America
"0507-0252" : "eng", // Journal of the viola da gamba society of America
"0899-6407" : "eng", // Kurt Weill newsletter
"1430-9971" : "ger", // La Gazzetta
"0961-1215" : "eng", // Leonardo music journal
"1619-0548" : "ger", // Lied und populäre Kultur
"0340-8140" : "ger", // Mendelssohn-Studien
"1431-5106" : "ger", // Mitteilungen der Arbeitsgemeinschaft für mittelrheinische Musikgeschichte
"0440-2863" : "ger", // Mitteilungen der Hans Pfitzner-Gesellschaft
"0942-5217" : "ger", // Mozart Studien
"2295-5925" : "eng", // Music theory and analysis
"2295-5917" : "eng", // Music theory and analysis
"2092-4828" : "eng", // Musica humana
"2510-4217" : "ger", // Musik & Ästhetik
"1432-9425" : "ger", // Musik & Ästhetik
"0937-583X" : "ger", // Musik in Bayern
"2568-3128" : "ger", // Musik und Kirche
"0027-4771" : "ger", // Musik und Kirche
"0935-2562" : "ger", // Musikforum
"0538-8791" : "ger", // Musikforum
"0931-3311" : "ger", // Musik-Konzepte
"0178-8884" : "ger", // MusikTexte
"0177-4182" : "ger", // Musiktheorie
"0027-5336" : "hun", // Muzsika
"2199-5958" : "ger", // Neue Zeitschrift für Musik
"0170-8791" : "ger", // Neue Zeitschrift für Musik
"0028-3509" : "ger", // Neue Zeitschrift für Musik
"0945-6945" : "ger", // Neue Zeitschrift für Musik
"1435-7941" : "ger", // Organ
"0048-2161" : "eng", // Organists' review
"1439-1163" : "ger", // Parapluie
"0031-9562" : "eng", // Piano technicians journal
"0961-1371, 1474-0087" : "eng", // Plainsong and medieval music
"0717-6252" : "spa", // Revista musical chilena
"0716-2790" : "spa", // Revista musical chilena
"0944-0291" : "ger", // Rohrblatt
"1617-6340" : "ger", // Schubert : Perspektiven
"1611-6291" : "ger", // Schubert-Jahrbuch
"0174-2345" : "ger", // Schütz-Jahrbuch
"0259-3165" : "ger", // Schweizer Jahrbuch für Musikwissenschaft
"2002-021X" : "swe", // Svensk tidskrift för musikforskning online
"2225-8795" : "ger", // Terz Magazin
"0928-9003" : "eng", // The Consort
"0268-9111" : "eng", // The Consort
"0741-7659" : "eng", // The double reed
"0072-0127" : "eng", // The Galpin Society journal
"2397-5318" : "eng", // The musical times
"0027-4666" : "eng", // The musical times
"0920-3192" : "eng", // The organ yearbook
"0952-6323" : "eng", // The pianola journal
"1611-0242" : "ger", // Toccata
"0041-0330" : "eng", // Tracker
"0174-6065" : "ger", // Üben & Musizieren
"8755-1233" : "eng", // Update
"0506-306X" : "eng", // Viola da Gamba Society of America
"1434-6206" : "ger", // Weberiana
"1553-0612" : "eng", // Women and music
"1090-7505" : "eng", // Women and music
"2304-3857" : "eng", // Yearbook for traditional music
"0740-1558" : "eng", // Yearbook for traditional music
//Anfang Lisa
"2158-5296" : "eng", // AAWM journal [Elektronische Ressource]
"2191-253X" : "manuell", // Act [Elektronische Ressource] 
"0001-7965" : "ger", // Ad marginem (gedr.)
"1722-3954" : "manuell", // Ad parnassum (gedr.)
"0065-4019" : "eng", // African music : journal of the African Music Society (gedr.)
"0734-4392" : "eng", // American music (gedr.)
"1945-2349" : "eng", // American music (elektr.)
"0003-1313" : "eng", // American string teacher (gedr.)
"1553-5630" : "eng", // Asian music (elektr.)
"0044-9202" : "eng", // Asian music
"1325-5266" : "eng", // Australasian music research (gedr.)
"1325-5266" : "eng", // Australasian music research [Elektronische Ressource]
"0943-4224" : "ger", // Berichte aus dem Nationalkomitee … Council for Traditional Music (gedr.)
"0265-0517, 1469-2104" : "eng", // British journal of music education (BJME) (elektr.)
"0265-0517" : "eng", // British journal of music education (BJME) (gedr.)
"0010-9894" : "eng", // Bulletin of the council for research in music education (gedr.)
"0954-5867, 1474-0621" : "eng", // Cambridge opera journal (elektr.)
"0954-5867" : "eng", // Cambridge opera journal (gedr.)
"0008-4549" : "eng", // Canadian music educator (gedr.)
"0192-3749" : "eng", // Chinese music
"0888-9015" : "eng", // Cue sheet
"0027-4801" : "ger", // Die Musikforschung (gedr.)
"1437-4722" : "ger", // Diskussion Musikpädagogik
"1559-5749" : "eng", // Empirical musicology review [Elektronische Ressource] 
"0014-1836" : "eng", // Ethnomusicology (gedr.)
"1741-1912" : "eng", // Ethnomusicology forum (elektr.)
"2167-1931" : "eng", // Evental Aesthetics [Elektronische Ressource]
"2056-6166" : "eng", // Folk music journal (elektr.)
"0531-9684" : "eng", // Folk music journal (gedr.)
"2511-3631" : "ger", // Forum Musikbibliothek (elektr.)
"0173-5187" : "ger", // Forum Musikbibliothek (gedr.)
"0073-1692" : "ger", // Heine-Jahrbuch (gedr.)
"1045-4616" : "eng", // Historic brass society journal
"0018-7003" : "manuell", // Hudebni veda
"1013-056X" : "ger", // Jahrbuch des Österreichischen Volksliedwerkes
"1535-1882" : "eng", // Journal of American folklore (elektr.)
"1543-0413" : "eng", // Journal of folklore research (elektr.)
"1536-6006" : "eng", // Journal of historical research in music education (gedr.)
"1057-0837" : "eng", // Journal of music teacher education (JMTE) (elektr.)
"1540-5931" : "eng", // Journal of popular culture (elektr.)
"0022-4294" : "eng", // Journal of research in music education (elektr.)
"1086-7732" : "eng", // Journal of singing (elektr.)
"0001-4966" : "eng", // Journal of the acoustical society of America (elektr.)
"0251-012X" : "eng", // Journal of the Indian musicological society (JIMS) (gedr.)
"1873-4588" : "eng", // Journal of voice (elektr.)
"0938-4030" : "ger", // Klassen musizieren
"0764-2873" : "fre", // L' avant-scène (gedr.)
"0395-0670" : "fre", // L' avant-scène (gedr.)
"0295-1371" : "fre", // L' avant-scène (gedr.)
"0768-1593" : "fre", // La Revue musicale
"0163-0350" : "manuell", // Latin American music review [Elektronische Ressource]
"0013-1415" : "fre", // L'éducation musicale
"1608-103X" : "ger", // MIP-Journal
"0742-4612" : "eng", // Mississippi rag (gedr.)
"0742-4612" : "eng", // Mississippi rag [Elektronische Ressource] 
"0085-350X" : "eng", // Missouri journal of research in music education
"0027-4224" : "eng", // Music and letters (elektr.)
"1461-3808" : "eng", // Music education research (elektr.)
"0027-4321" : "eng", // Music educators journal (elektr.)
"1212-1193" : "manuell", // Musicologica Olomucensia (gedr.)
"0027-4747" : "ger", // Musik & Bildung
"1439-1384" : "ger", // Musik und Unterricht
"1868-0194" : "ger", // Musik und Unterricht
"0937-9568" : "ger", // Musik und Unterricht
"0027-4798" : "ger", // Musikerziehung
"0177-350x" : "ger", // Musikpsychologie (gedr.)
"1812-5980" : "eng", // Muziki (elektr.)
"0090-5844" : "eng", // North Carolina folklore journal (gedr.)
"0090-5844" : "eng", // North Carolina folklore journal (elektr.)
"2059-6707" : "eng", // Opera (elektr.)
"0030-3526" : "eng", // Opera (gedr.)
"0030-3577" : "eng", // Opera Canada (gedr.)
"0736-0053, 1476-2870" : "eng", // Opera quarterly (elektr.)
"0862-8505" : "cze", // Opus musicum
"1038-2909" : "eng", // Perfect beat (elektr.)
"1836-0343" : "eng", // Perfect beat [Elektronische Ressource] 
"1543-3412" : "eng", // Philosophy of music education review (elektr.)
"1063-5734" : "eng", // Philosophy of music education review (gedr.)
"0261-1430, 1474-0095" : "eng", // Popular music (elektr.)
"0300-7766" : "eng", // Popular music and society (elektr.)
"1743-1646" : "eng", // Popular music history (elektr.)
"0941-4711" : "ger", // Positionen (gedr.)
"0305-7356" : "eng", // Psychology of music (elektr.)
"2162-1535(Electronic),0275-3987(Print)" : "eng", // Psychomusicology (elektr.)
"0771-6788" : "fre", // Revue belge de musicologie (gedr.)
"1371-6735" : "manuell", // Revue de la société Liégeoise de musicologie (elektr.)
"0035-1601" : "fre", // Revue de musicologie (gedr.)
"0891-9372" : "eng", // Rock & rap confidential (gedr.)
"0038-2493" : "eng", // South African music teacher
"2037-6413" : "ita", // Studi musicali (elektr.)
"0303-4631" : "ita", // Studi musicali (gedr.)
"1788-6244" : "manuell", // Studia musicologica (elektr.)
"0040-3253" : "eng", // Tennessee folklore society bulletin
"1040-3582" : "eng", // The old time herald (elektr.)
"0043-8774" : "eng; ger", // The World of music (gedr.)
"2305-9672" : "manuell", // TheMA (elektr.)
"2307-440X" : "manuell", // TheMA (gedr.)
"1651-3770" : "swe", // Tidskriften opera
"0506-306X" : "eng", // VDGSA news (gedr.)
"0042-6180" : "eng", // Village voice (gedr.)
"0043-373x" : "eng", // Western folklore (gedr.)
"1619-8301" : "ger", // Zeitschrift für kritische Musikpädagogik [Elektronische Ressource] 
"0044-3700" : "ger", // Zeitschrift für Volkskunde (gedr.)
//Anfang Katherina
"1861-9959" : "eng", // Acta acustica united with Acustica (elektron.)
"1610-1928" : "eng", // Acta acustica united with Acustica (gedr.)
"2296-4339" : "manuell", // Acta musicologica (elektr.)
"0001-6241" : "manuell", // Acta musicologica (gedr.)
"0003-9292" : "ger", // Archiv für Musikwissenschaft (elektr.)
"1460-9231" : "eng", // British postgraduate musicology (gedr.)
"2192-1482" : "ger", // Deutsche Zeitschrift für Philosophie (elektr.)
"0012-1045" : "ger", // Deutsche Zeitschrift für Philosophie (gedr.)
"1123-8615" : "manuell", // Il saggiatore musicale (gedr.)
"1073-6913" : "eng", // Integral (gedr.)
"0941-9535" : "manuell", // International journal of musicology (gedr.)
"0351-5796" : "manuell", // International review of the aesthetics and sociology of music (gedr.)
"1861-3217" : "manuell", // Jahrbuch Musiktherapie
"0197-0100" : "eng", // Journal of jewish music and liturgy (gedr.)
"0141-1896" : "eng", // Journal of musicological research (elektr.)
"1866-4768" : "ger", // Kieler Beiträge zur Filmmusikforschung (elektr.)
"0075-6199" : "ger", // Kirchenmusikalisches Jahrbuch (gedr.)
"0075-8833" : "manuell", // Lessing yearbook (gedr.)
"2190-1600" : "ger", // Liturgie und Kultur (gedr.)
"1938-2766" : "eng", // Medical problems of performing artists (elektr.)
"0885-1158" : "eng", // Medical problems of performing artists (gedr.)
"1862-2003" : "ger", // Mitteilungen der Christoph-Graupner-Gesellschaft (gedr.)
"1468-2249" : "eng", // Music analysis (elektr.)
"02625245" : "eng", // Music analysis (gedr.)
"1058-8167" : "eng", // Music reference services quarterly (elektr.)
"1067-3040" : "eng", // Music theory online (elektr.)
"0195-6167, 1533-8339" : "eng", // Music theory spectrum (elektr.)
"0195-6167" : "eng", // Music theory spectrum (gedr.)
"0077-2461" : "manuell", // Musica disciplina (gedr.)
"0147-7536" : "eng", // Musica judaica (elektr.)
"0179-356X" : "ger", // Musica sacra (elektr.)
"0179-356X" : "ger", // Musica sacra (gedr.)
"1015-6798" : "ger", // Musik und Gottesdienst
"1257-7537" : "fre", // Musurgia (elektr.)
"2044-8414" : "eng", // Nineteenth Century Music Review (elektr.)
"1479-4098" : "eng", // Nineteenth Century Music Review (gedr.)
"0030-5375" : "manuell", // Orientalia christiana periodica (gedr.)
"2511-1345" : "ger", // Phoibos (elektr.)
"1866-8291" : "ger", // Phoibos (gedr.)
"1751-7788" : "eng", // Radical musicology (elektr.)
"0394-6282" : "ita", // Rivista internazionale di musica sacra (gedr.)
"0036-2255" : "eng", // Sacred music (gedr.)
"0037-5721" : "ger", // Singende Kirche (gedr.)
"1403-5715" : "manuell", // STM online (elektr.)
"2235-2678" : "manuell", // Studi Pergolesiani (gedr.)
"0393-2532" : "ita", // Studi verdiani (gedr.)
"0332-5024" : "manuell", // Studia musicologica Norvegica (elektr.)
"1504-2960" : "manuell", // Studia musicologica Norvegica (elektr.)
"0196-2337" : "eng", // The stanza (gedr.)
"0040-5698" : "ger", // Theologische Rundschau
"1554-1312" : "eng", // Theoria (gedr.)
"0741-6156" : "eng", // Theory and practice (elektr.)
"0176-6511" : "ger", // Tibia (gedr.)
"0920-0649" : "dut", // Tijdschrift oude muziek
"0177-6487" : "ger", // Württembergische Blätter für Kirchenmusik (gedr.)
"1862-6742" : "ger", // Zeitschrift der Gesellschaft für Musiktheorie (elektr.)
"1862-6750" : "ger", // Zeitschrift der Gesellschaft für Musiktheorie (gedr.)
"1612-8516" : "ger", // Zeitschrift der Gesellschaft für Musiktheorie (elektr.)
"002-021X" : "manuell", // Svensk tidskrift för musikforskning STM–SJM
//Anfang Frau Bruchmann	
"10583572" : "eng", //American music research center journal
"0276-3605" : "eng", // Black music research journal
"0190-4922" : "eng", // Contributions to music education
"1478-5706" : "eng", // Eighteenth century music
"00215643" : "manuell", // Jazz hot
"1749-4060" : "eng", // Jazz perspectives
"00215686" : "ger", // Jazz Podium
"18128653" : "manuell", // Jazz Research News
"1533-1598" : "eng", // Journal of popular music studies
"0269-0403" : "eng", // Journal of the royal musical association
"0025-0384" : "hun", // Magyar zene
"1754-7105" : "eng", // Music and arts in action
"1755-9219" : "eng", // Music performance research
"0172-5505" : "ger", // Musiktherapeutische Umschau
"0354-818X" : "eng", // New Sound
"2194-6981" : "ger", // Pop : Kultur und Kritik
"0040-2982" : "eng", // Tempo
"1478-5722" : "eng", // Twentieth-Century Music
//Anfang Frau Asmus
"0002-7898" : "eng", // American choral review
"0003-0724" : "eng", // American Recorder
"1617-8688" : "ger", // Chor und Konzert
"1474-0559" : "eng", // Early music history
"0261-1279" : "eng", // Early music history 
"2504-1916" : "manuell", // European Journal of Musicology
"8756-8667" : "eng", // Flutist quarterly
"1918-512X" : "manuell", // Intersections
"1911-0146" : "manuell", // Intersections
"0022-2917" : "eng", // Journal of music therapy
"1089-747X" : "eng", // Journal of seventeenth century music
"1558-268X" : "eng", // Journal of Schenkerian studies
"1547-3848" : "eng", // Journal of the American musicological society
"0003-0139" : "eng", // Journal of the American musicological society
"1752-1971" : "eng", // Journal of the Society for American Music
"1752-1963" : "eng", // Journal of the Society for American Music
"0148-6845" : "eng", // Journal of the violin society of America
"1084-1776" : "eng", // Kodaly envoy 
"1565-0618" : "eng", // Min-ad Israel studies
"1940-7610" : "eng", // Music and the moving image
"2167-8464" : "eng", // Music and the moving image
"2053-7387" : "eng", // Music therapy perspectives
"0734-6875" : "eng", // Music therapy perspectives
"1753-0768" : "eng", // Music, sound, and the moving image
"2045-4147" : "eng", // Musicae scientiae
"1029-8649" : "eng", // Musicae scientiae
"2411-6696" : "manuell", // Musicologica austriaca
"1711-9235" : "eng", // Musicological Explorations
"2350-4242" : "eng", // Muzikološki zbornik
"1608-8956" : "ger", // Nachrichten zur Mahler-Forschung
"0213-7305" : "spa", // Nassarre
"1534-150X" : "eng", // Notes
"1044-1638" : "eng", // Performance practice review
"0031-6016" : "eng", // Perspectives of new music
"1120-5741" : "manuell", // Recercare
"2385-2496" : "manuell", // Recercare
"2036-5586" : "ita", // Rivista Italiana di musicologia
"0035-6867" : "ita", // Rivista Italiana di musicologia
"2191-0499" : "manuell", // Seiltanz
//Anfang Frau Wegner
"0211-3538" : "manuell", // Anuario musical (elektr.)
"1043-3848" : "eng", // Ars lyrica (gedr.)
"0587-5455" : "srp", // Arti musices (elektr.)
"2280-918X" : "ita", // Bollettino del centro Rossiniano di studi (gedr.)
"0141-4992" : "eng", // British institute of organ studies journal (gedr.)
"0395-1200" : "manuell", // Cahiers Debussy (gedr.)
"2245-5809" : "eng", // Carl Nielsen studies (elektr.) 
"1603-3663" : "eng", // Carl Nielsen studies (gedr.)
"2194-1890" : "manuell", // Cherubiniana (gedr.)
"1057-9478" : "eng", // Computing in musicology (gedr.)
"0749-4467" : "eng", // Contemporary music review (elektr.)
"0011-3735" : "eng", // Current musicology (elektr.)
"0306-0373" : "eng", // Delius society journal (gedr.)
"1437-3378" : "ger", // Die Laute (gedr.)
"0306-1078" : "eng", // Early music (elektr.)
"1083-3633" : "eng", // Early music America (gedr.)
"1477-478X" : "eng", // Early music performer (gedr.)
"1773-9128" : "fre", // Filigrane (elektr.)
"0930-8563" : "ger", // Flöte aktuell (gedr.)
"2195-7665; 2196-0631 (electronic)" : "manuell", // Flower world (gedr.)
"2471-156X" : "manuell", // Fontes artis musicae (elektr.)
"0015-6191" : "manuell", // Fontes artis musicae (gedr.)
"0016-0717" : "ger", // Freiburger Universitätsblätter (gedr.)
"1938-6990" : "eng", // Gamut (elektr.)
"0017-5471" : "eng", // Guitar review
"0440-5323" : "ger", // Haydn-Studien (gedr.)
"0018-1137" : "spa", // Heterofonía (gedr.)
"0046-7928" : "eng", // Horn call
"0020-4331" : "eng", // Instrumentalist (gedr.)
"0936-014X" : "ger", // Instrumentenbaureport (gedr.)
"1057-4263" : "eng", // International journal of arts medicine
"0255-7614" : "eng", // International journal of music education (elektr.)
"0363-2845" : "eng", // International Trumpet Guild journal (gedr.)
"1017-7515" : "manuell", // ISO journal (gedr.)
"0938-6998" : "ger", // Jahrbuch für Glockenkunde (gedr.)
"1542-734X" : "eng", // Journal of American culture (elektr.)
"1836-8336" : "eng", // Journal of music research online (elektr.)
"0022-2909" : "eng", // Journal of music theory (elektr.)
"0277-9269, 1533-8347" : "eng", // Journal of musicology (elektr.)
"0929-8215" : "eng", // Journal of new music research (elektr.)
"0147-4413" : "eng", // Journal of the American Liszt Society (gedr.)
"0362-3300" : "eng", // Journal of the American musical instrument society (gedr.)
"0076-1526" : "eng", // Journal of the lute society of America (gedr.)
"1812-1004" : "eng", // Journal of the musical arts in Africa (elektr.)
"1754-9892" : "eng", // Journal on the art of record production (elektr.)
"1013-6835" : "fre", // La tribune de l'orgue (gedr.)
"1392-9313" : "eng", // Lietuvos muzikologija = Lithuanian musicology (elektr.)
"0474-6376" : "ita", // L'organo (gedr.)
"1015-0536" : "manuell", // Mitteilungen der Paul Sacher Stiftung (elektr.)
"2191-8627" : "ger", // Mitteilungen Tschaikowsky-Gesellschaft (gedr.)
"1861-9053" : "ger", // Mozart-Jahrbuch
"0342-0256" : "ger", // Mozart-Jahrbuch
"1938-7687" : "eng", // Music & Politics (elektr.)
"2169-9488" : "manuell", // Music in art (elektr.)
"1522-7464" : "manuell", // Music in art (gedr.)
"0730-7829, 1533-8312" : "eng", // Music perception (elektr.)
"0730-7829" : "eng", // Music perception (gedr.)
"0909-0797" : "eng", // Musical Denmark yearbook (gedr.)
"0814-5857" : "eng", // Musicology Australia (elektr.)
"0947-8302" : "ger", // Musik in Baden-Württemberg (gedr.)
"1264-7020" : "manuell", // Musique, images, instruments (gedr.)
"0541-4830" : "manuell", // Muzyka (elektr.)
"0160-2365" : "eng", // Newsletter of the American musical instrument society (elektr.)
"0030-4883" : "eng", // Organ
"1355-7718, 1469-8153" : "eng", // Organised sound (elektr.)
"1593-8735" : "manuell", // Polifonie (gedr.)
"0000-0000" : "eng", // Postgraduate Journal of Aesthetics (elektr.)
"1547-982X" : "eng", // Quarterly - Lute Society of America (gedr.)
"0211-6391" : "spa", // Recerca musicológica (elektr.)
"0961-3544" : "eng", // Recorder magazine (elektr.)
"0306-4409" : "eng", // Recorder magazine (gedr.)
"0210-1459" : "spa", // Revista de musicología (elektr.)
"0035-3744" : "fre", // Revue musicale de Suisse romande (gedr.)
"1615-5556" : "ger", // Rosetti-Forum (gedr.)
"0035-9610" : "pol", // Ruch muzyczny (gedr.)
"0036-3308" : "ger", // Saitenspiel (gedr.)
"0863-2340" : "ger", // Schumann-Studien (gedr.)
"0739-229X" : "eng", // Sonus (gedr.)
"0951-6816" : "eng", // Sound on Sound
"0145-6237" : "eng", // Soundboard (gedr.)
"2223-635X" : "eng", // South African music studies (elektr.)
"1594-0012" : "manuell", // Studi vivaldiani (elektr.)
"0930-9578" : "ger", // Studien zur Musikwissenschaft (elektr.)
"0012-2378" : "eng", // The diapason (gedr.)
"1540-6245" : "eng", // The journal of aesthetics and art criticism (elektr.)
"0021-8529" : "eng", // The journal of aesthetics and art criticism (gedr.)
"0027-4631" : "eng", // The Musical quarterly (elektr.)
"0030-4883" : "eng", // The Organ (elektr.)
"0034-1568" : "eng", // The Record Collector (gedr.)
"1472-3808" : "eng", // The royal musical association research chronicle (elektr.)
"0080-4460" : "eng", // The royal musical association research chronicle (gedr.)
"0042-3874" : "manuell", // Tijdschrift van de koninklijke vereniging voor Nederlandse muziekgeschiedenis (gedr.)
"1383-7079" : "manuell", // Tijdschrift van de koninklijke vereniging voor Nederlandse muziekgeschiedenis (gedr.)
"2366-746X" : "ger", // Verdiperspektiven (gedr.)
"1504-1611" : "eng", // Voices (elektr.)
"2377-231X" : "eng", // Yale Journal of Music & Religion (elektr.)
"1535-3532" : "eng", // Yale Journal of Music & Religion (gedr.)
//Anfang ohne Bearbeiter
"1940-1159" : "eng", // Rock music studies
"0378-8903" : "ger", // Mitteilungen der Internationalen Gesellschaft für Musikwissenschaft
"2059-2043" : "eng", // Music & science
"0958-8434" : "eng", // Musical Times and Singing Class Circular
"1753-8637" : "eng", // Jazz Research Journal
"1612-0124" : "ger", // Sammelbände der Internationalen Musikgesellschaft
"2055-1940" : "eng", // Sound studies : an interdisciplinary journal
"0809-8131" : "eng", //Nordic journal of music therapy (elektr.)
};

var issnVolumeMapping = {
	"2031-5929" : "N.S.",
	"2031-5922" : "A.S.",
	};

var issnPhysicalFormMapping = {
//Anfang Anda
"0148-2076, 1533-8606" : "O", // 19th Century Music
"0567-7874" : "A", // Acta organologica
"0001-6942" : "A", // Acta sagittariana
"0002-869X" : "A", // American harp journal
"0004-2919" : "A", // Ars organi : internationale Zeitschrift für das Orgelwesen
"0004-5438" : "A", // ARSC journal
"2151-4402" : "A", // ARSC journal
"0004-5438; 2151-4402 (electronic)" : "A", //ARSC journal
"0005-3600" : "O", // Bach : the journal of the Riemenschneider Bach institute
"0084-7682" : "A", // Bach-Jahrbuch
"1087-8262" : "A", // Beethoven journal
"0898-6185" : "A", // Beethoven journal
"0935-9044" : "A", // Beiträge zur Gregorianik
"0341-941X" : "A", // Brahms-Studien
"0007-0173" : "A", // Brio
"1013-8897" : "A", // Bruckner-Jahrbuch
"0950-429X" : "A", // Classical guitar
"2045-6247" : "A", // Classical recordings quarterly
"1472-5797" : "A", // Classical recordings quarterly
"1531-5169" : "O", // Computer music journal
"0148-9267" : "O", // Computer music journal
"0177-5944" : "A", // Concerto
"1865-3995" : "A", // Correspondenz
"1211-0264" : "A", // Czech music quaterly
"0721-6092" : "A", // Das mechanische Musikinstrument
"2536-2615" : "O", // De musica disserenda
"1861-132X" : "A", // Die Tonkunst
"1863-3536" : "A", // Die Tonkunst
"0899-8132" : "A", // Early keyboard journal
"1619-3903" : "A", // Eisler-Mitteilungen
"0071-2086" : "A", // Etudes grégoriennes
"0023-1819" : "A", // Forum Kirchenmusik
"1660-2730" : "A", // Glareana
"2197-330X" : "A", // Göttinger Händel-Beiträge
"0177-7319" : "A", // Göttinger Händel-Beiträge
"0342-8303" : "A", // Hamburger Jahrbuch für Musikwissenschaft
"0440-0615" : "A", // Händel-Jahrbuch
"0166-0101" : "A", // Het orgel
"0172-956X" : "A", // Hindemith-Jahrbuch
"2474-7777" : "O", // Indiana theory review
"0271-8022" : "O", // Indiana theory review
"0572-6239" : "A", // Jahrbuch des Staatlichen Instituts für Musikforschung
"0075-2681" : "O", // Jahrbuch für Liturgik und Hymnologie
"0075-3572" : "A", // Jazzforschung
"0021-9207" : "O", // Journal of band research
"1307-0401" : "O", // Journal of interdisciplinary music studies
"1306-9055" : "O", // Journal of interdisciplinary music studies
"1745-9737" : "O", // Journal of mathematics and music
"1045-795X" : "A", // Journal of mechanical music
"2155-109X" : "O", // Journal of Music History Pedagogy
"1549-4950" : "O", // Journal of the audio engineering society
"0004-7554" : "O", // Journal of the audio engineering society
"1649-7341" : "O", // Journal of the society for musicology in Ireland
"0607-0252" : "O", // Journal of the viola da gamba society of America
"0507-0252" : "O", // Journal of the viola da gamba society of America
"0899-6407" : "O", // Kurt Weill newsletter
"1430-9971" : "A", // La Gazzetta
"0961-1215" : "O", // Leonardo music journal
"1619-0548" : "A", // Lied und populäre Kultur
"0340-8140" : "A", // Mendelssohn-Studien
"1431-5106" : "A", // Mitteilungen der Arbeitsgemeinschaft für mittelrheinische Musikgeschichte
"0440-2863" : "A", // Mitteilungen der Hans Pfitzner-Gesellschaft
"0942-5217" : "A", // Mozart Studien
"2295-5917; 2295-5925 (electronic)" : "O", // Music theory and analysis
"2092-4828" : "A", // Musica humana
"2510-4217" : "O", // Musik & Ästhetik
"1432-9425" : "O", // Musik & Ästhetik
"0937-583X" : "A", // Musik in Bayern
"2568-3128" : "A", // Musik und Kirche
"0027-4771" : "A", // Musik und Kirche
"0935-2562" : "A", // Musikforum
"0538-8791" : "A", // Musikforum
"0931-3311" : "A", // Musik-Konzepte
"0178-8884" : "A", // MusikTexte
"0177-4182" : "A", // Musiktheorie
"0027-5336" : "O", // Muzsika
"2199-5958" : "A", // Neue Zeitschrift für Musik
"0170-8791" : "A", // Neue Zeitschrift für Musik
"0028-3509" : "A", // Neue Zeitschrift für Musik
"0945-6945" : "A", // Neue Zeitschrift für Musik
"1435-7941" : "A", // Organ
"0048-2161" : "A", // Organists' review
"1439-1163" : "O", // Parapluie
"0031-9562" : "A", // Piano technicians journal
"0961-1371, 1474-0087" : "O", // Plainsong and medieval music
"0717-6252" : "O", // Revista musical chilena
"0716-2790" : "O", // Revista musical chilena
"0944-0291" : "A", // Rohrblatt
"1617-6340" : "A", // Schubert : Perspektiven
"1611-6291" : "A", // Schubert-Jahrbuch
"0174-2345" : "A", // Schütz-Jahrbuch
"0259-3165" : "A", // Schweizer Jahrbuch für Musikwissenschaft
"2002-021X" : "O", // Svensk tidskrift för musikforskning online
"2225-8795" : "O", // Terz Magazin
"0928-9003" : "A", // The Consort
"0268-9111" : "A", // The Consort
"0741-7659" : "A", // The double reed
"0072-0127" : "A", // The Galpin Society journal
"2397-5318" : "O", // The musical times
"0027-4666" : "O", // The musical times
"0920-3192" : "A", // The organ yearbook
"0952-6323" : "A", // The pianola journal
"1611-0242" : "A", // Toccata
"0041-0330" : "A", // Tracker
"0174-6065" : "A", // Üben & Musizieren
"8755-1233" : "O", // Update
"0506-306X" : "A", // Viola da Gamba Society of America
"1434-6206" : "A", // Weberiana
"1553-0612" : "O", // Women and music
"1090-7505" : "O", // Women and music
"2304-3857" : "O", // Yearbook for traditional music
"0740-1558" : "O", // Yearbook for traditional music
//Anfang Lisa
"2158-5296" : "O", //AAWM journal
"2191-253X" : "O", //Act 
"0001-7965" : "O", //Ad marginem
"1722-3954" : "O", //Ad parnassum
"00654019" : "O", //African music
"1945-2349" : "O", //American music
"0003-1313" : "O", //American string teacher 
"1553-5630" : "O", //Asian music 
"0044-9202" : "A", //Asian music
"1325-5266" : "O", //Australasian music research
"0943-4224" : "A", //Berichte aus dem Nationalkomitee ... International Council for Traditional Music 
"0265-0517, 1469-2104" : "O", //British journal of music education 
"0265-0517" : "A", //British journal of music education
"0010-9894" : "O", //Bulletin of the council for research in music education
"0954-5867, 1474-0621" : "O", //Cambridge opera journal
"0954-5867" : "A", //Cambridge opera journal 
"0008-4549" : "A", //Canadian music educator 
"0192-3749" : "A", //Chinese music
"0888-9015" : "A", //Cue sheet
"0027-4801" : "A", //Die Musikforschung
"1437-4722" : "A", //Diskussion Musikpädagogik
"1559-5749" : "O", //Empirical musicology review
"0014-1836" : "O", //Ethnomusicology
"1741-1912" : "O", //Ethnomusicology forum 
"2167-1931" : "O", //Evental Aesthetics
"2056-6166" : "O", //Folk music journal 
"0531-9684" : "A", //Folk music journal
"2511-3631" : "O", //Forum Musikbibliothek
"0173-5187" : "A", //Forum Musikbibliothek 
"0073-1692" : "A", //Heine-Jahrbuch 
"1045-4616" : "A", //Historic brass society journal
"0018-7003" : "A", //Hudebni veda
"1013-056X" : "A", //Jahrbuch des Österreichischen Volksliedwerkes
"1535-1882" : "O", //Journal of American folklore
"1543-0413" : "O", //Journal of folklore research
"1536-6006" : "O", //Journal of historical research in music education
"1057-0837" : "O", //Journal of music teacher education
"1540-5931" : "O", //Journal of popular culture
"0022-4294" : "O", //Journal of research in music education
"1086-7732" : "O", //Journal of singing 
"0001-4966" : "O", //Journal of the acoustical society of America 
"0251-012X" : "A", //Journal of the Indian musicological society 
"0892-1997" : "O", //Journal of voice : official journal of the voice foundation
"0938-4030" : "A", //Klassen musizieren
"0295-1371" : "A", //L' avant-scène
"0768-1593" : "A", //La Revue musicale
"0163-0350" : "O", //Latin American music review
"0013-1415" : "A", //L'éducation musicale
"1608-103X" : "A", //MIP-Journal
"0742-4612" : "O", //Mississippi rag
"0085-350X" : "A", //Missouri journal of research in music education
"0027-4224" : "O", //Music and letters 
"0027-4224, 1477-4631" : "O", //Music and letters
"1461-3808" : "O", //Music education research
"0027-4321" : "O", //Music educators journal
"1212-1193" : "O", //Musicologica Olomucensia
"0027-4747" : "A", //Musik & Bildung
"1439-1384" : "A", //Musik und Unterricht
"0027-4798" : "A", //Musikerziehung
"2569-5665" : "O", //Musikpsychologie
"0177-350x" : "A", //Musikpsychologie 
"1812-5980" : "O", //Muziki
"0090-5844" : "O", //North Carolina folklore journal
"2059-6707" : "O", //Opera
"0030-3526" : "A", //Opera 
"0030-3577" : "A", //Opera Canada
"0736-0053, 1476-2870" : "O", //Opera quarterly
"0862-8505" : "A", //Opus musicum
"0553-6502" : "A", //Percussive notes 
"1038-2909, 1836-0343" : "O", //Perfect beat
"1543-3412" : "O", //Philosophy of music education review
"1063-5734" : "A", //Philosophy of music education review
"0261-1430, 1474-0095" : "O", //Popular music 
"0300-7766" : "O", //Popular music and society
"1743-1646" : "O", //Popular music history
"0941-4711" : "A", //Positionen
"0305-7356" : "O", //Psychology of music
"2162-1535(Electronic),0275-3987(Print)" : "O", //Psychomusicology
"0771-6788" : "A", //Revue belge de musicologie
"1371-6735, 2295-7251" : "O", //Revue de la société Liégeoise de musicologie
"0035-1601" : "A", //Revue de musicologie
"0891-9372" : "A", //Rock & rap confidential
"0038-2493" : "A", //South African music teacher
"2037-6413" : "O", //Studi musicali
"0303-4631" : "A", //Studi musicali
"1788-6244" : "O", //Studia musicologica
"0040-3253" : "A", //Tennessee folklore society bulletin
"1040-3582" : "O", //The old time herald
"0043-8774" : "A", //The World of music 
"2305-9672" : "O", //TheMA
"2307-440X" : "A", //TheMA
"1651-3770" : "A", //Tidskriften opera
"0506-306X" : "A", //VDGSA news
"0042-6180" : "A", //Village voice
"0043-373x" : "A", //Western folklore
"1619-8301" : "O", //Zeitschrift für kritische Musikpädagogik
"0044-3700" : "A", //Zeitschrift für Volkskunde
//Anfang Katherina
"1861-9959" : "O", //Acta acustica united with Acustica
"1610-1928" : "A", //Acta acustica united with Acustica
"2296-4339" : "O", //Acta musicologica (elektr.)
"0001-6241" : "O", //Acta musicologica (elektr.)
"0003-9292" : "O", //Archiv für Musikwissenschaft (elektr.)
"1460-9231" : "A", //British postgraduate musicology (gedr.)
"2192-1482" : "O", //Deutsche Zeitschrift für Philosophie (elektr.)
"0012-1045" : "O", //Deutsche Zeitschrift für Philosophie (gedr.)
"2035-6706" : "O", //Il saggiatore musicale (elektr.)
"1123-8615" : "A", //Il saggiatore musicale (gedr.)
"1073-6913" : "O", //Integral (gedr.)
"0941-9535" : "A", //International journal of musicology (gedr.)
"0351-5796" : "A", //International review of the aesthetics and sociology of music (gedr.)
"1861-3217" : "A", //Jahrbuch Musiktherapie
"0197-0100" : "A", //Journal of jewish music and liturgy (gedr.)
"0141-1896" : "O", //Journal of musicological research (elektr.)
"0141-1896, 1547-7304" : "O", // Journal of musicological research (elektr.) 
"1866-4768" : "O", //Kieler Beiträge zur Filmmusikforschung (elektr.)
"0075-6199" : "A", //Kirchenmusikalisches Jahrbuch (gedr.)
"0075-8833" : "A", //Lessing yearbook (gedr.)
"2190-1600" : "A", //Liturgie und Kultur (gedr.)
"1938-2766" : "O", //Medical problems of performing artists (elektr.)
"0885-1158" : "A", //Medical problems of performing artists (gedr.)
"1862-2003" : "A", //Mitteilungen der Christoph-Graupner-Gesellschaft (gedr.)
"1468-2249" : "O", //Music analysis (elektr.)
"02625245" : "O", //Music analysis (gedr.)
"1058-8167" : "O", //Music reference services quarterly (elektr.)
"1067-3040" : "O", //Music theory online (elektr.) 
"0195-6167, 1533-8339" : "O", //Music theory spectrum (elektr.)
"0195-6167" : "A", //Music theory spectrum (gedr.)
"0077-2461" : "A", //Musica disciplina (gedr.)
"0147-7536" : "O", //Musica judaica (elektr.)
"0179-356X" : "O", //Musica sacra (elektr.)
"0179-356X" : "A", //Musica sacra (gedr.)
"1015-6798" : "A", //Musik und Gottesdienst
"1257-7537" : "O", //Musurgia (gedr.)
"2044-8414" : "O", //Nineteenth Century Music Review (elektr.)
"1479-4098" : "O", //Nineteenth Century Music Review (elektr.)
"0030-5375" : "A", // Orientalia christiana periodica
"2511-1345" : "O", //Phoibos (elektr.)
"1866-8291" : "A", //Phoibos (gedr.)
"1751-7788" : "O", //Radical musicology (elektr.)
"0394-6282" : "A", //Rivista internazionale di musica sacra (gedr.)
"0036-2255" : "A", //Sacred music (gedr.)
"0037-5721" : "A", //Singende Kirche (gedr.)
"1403-5715" : "O", //STM online (elektr.)
"2235-2678" : "A", //Studi Pergolesiani (gedr.)
"0393-2532" : "A", //Studi verdiani (gedr.)
"0332-5024" : "O", //Studia musicologica Norvegica (elektr.)
"1504-2960" : "O", //Studia musicologica Norvegica (elektr.)
"0196-2337" : "A", //The stanza (gedr.)
"0040-5698" : "O", // Theologische Rundschau
"1554-1312" : "A", //Theoria (gedr.)
"0741-6156" : "O", //Theory and practice (elektr.)
"0176-6511" : "A", //Tibia (gedr.)
"0920-0649" : "A", //Tijdschrift oude muziek
"0177-6487" : "A", //Württembergische Blätter für Kirchenmusik (gedr.)
"1862-6742" : "O", //Zeitschrift der Gesellschaft für Musiktheorie (elektr.)
"1862-6750" : "A", //Zeitschrift der Gesellschaft für Musiktheorie (gedr.)
"1612-8516" : "O", //Zeitschrift der Gesellschaft für Musiktheorie (elektr.)
"002-021X" : "O", //Svensk tidskrift för musikforskning STM–SJM
//Anfang Frau Bruchmann	
"10583572" : "A", //American music research center journal
"0276-3605" : "O", // Black music research journal
"0190-4922" : "O", // Contributions to music education
"1478-5706, 1478-5714" : "O", // Eighteenth century music
"00215643" : "A", // Jazz hot
"1749-4060" : "O", // Jazz perspectives
"00215686" : "A", // Jazz Podium
"18128653" : "A", // Jazz Research News
"1533-1598, 1533-1598" : "O", // Journal of popular music studies
"0269-0403" : "O", // Journal of the royal musical association
"0025-0384" : "O", // Magyar zene
"1754-7105" : "O", // Music and arts in action
"1755-9219 (electronic)" : "O", // Music performance research
"0172-5505" : "O", // Musiktherapeutische Umschau
"0354-818X" : "O", // New Sound
"2194-6981" : "O", // Pop : Kultur und Kritik
"0040-2982, 1478-2286" : "O", // Tempo
"1478-5722, 1478-5730" : "O", // Twentieth-Century Music
//Anfang Frau Asmus
"0002-7898" : "A", // American choral review
"0003-0724; 1930-3831 (electronic)" : "O", // American Recorder
"1617-8688" : "O", // Chor und Konzert
"0261-1279, 1474-0559" : "O", // Early music history
"2504-1916" : "O", // European Journal of Musicology
"8756-8667" : "A", // Flutist quarterly
"1911-0146, 1918-512X" : "O", // Intersections
"0022-2917" : "O", // Journal of music therapy
"0022-2917, 2053-7395" : "O", // Journal of music therapy
"1089-747X" : "O", // Journal of seventeenth century music
"1558-268X" : "A", // Journal of Schenkerian studies
"1547-3848" : "O", // Journal of the American musicological society
"0003-0139, 1547-3848" : "O", // Journal of the American musicological society
"1752-1971" : "O", // Journal of the Society for American Music
"1752-1963, 1752-1971" : "O", // Journal of the Society for American Music
"0148-6845" : "O", // Journal of the violin society of America
"1084-1776" : "A", // Kodaly envoy 
"1565-0618" : "O", // Min-ad Israel studies
"1940-7610" : "O", // Music and the moving image
"2167-8464" : "O", // Music and the moving image
"2053-7387" : "O", // Music therapy perspectives
"0734-6875" : "O", // Music therapy perspectives
"0734-6875, 2053-7387" : "O", // Music therapy perspectives
"1753-0768" : "O", // Music, sound, and the moving image
"2045-4147" : "O", // Musicae scientiae
"1029-8649" : "O", // Musicae scientiae
"2411-6696" : "O", // Musicologica austriaca
"1711-9235" : "O", // Musicological Explorations
"2350-4242" : "O", // Muzikološki zbornik
"1608-8956" : "A", // Nachrichten zur Mahler-Forschung
"0213-7305" : "O", // Nassarre
"1534-150X" : "O", // Notes
"1044-1638" : "O", // Performance practice review
"0031-6016" : "O", // Perspectives of new music
"1120-5741" : "A", // Recercare
"2385-2496" : "O", // Recercare
"2036-5586" : "O", // Rivista Italiana di musicologia
"0035-6867" : "O", // Rivista Italiana di musicologia
"2191-0499" : "A", // Seiltanz
//Anfang Frau Wegner
"0211-3538" : "O", // Anuario musical
"1043-3848" : "A", // Ars lyrica
"0587-5455" : "O", // Arti musices
"2280-918X" : "A", // Bollettino del centro Rossiniano di studi
"0141-4992" : "A", // British institute of organ studies journal
"0395-1200" : "A", // Cahiers Debussy
"2245-5809" : "O", // Carl Nielsen studies
"1603-3663" : "A", // Carl Nielsen studies
"2194-1890" : "A", // Cherubiniana
"1057-9478" : "A", // Computing in musicology
"0749-4467" : "O", // Contemporary music review
"0011-3735" : "O", // Current musicology
"0306-0373" : "A", // Delius society journal
"1437-3378" : "A", // Die Laute
"0306-1078" : "O", // Early music
"1083-3633" : "A", // Early music America
"1477-478X" : "A", // Early music performer
"1773-9128" : "O", // Filigrane
"0930-8563" : "A", // Flöte aktuell
"2195-7665; 2196-0631 (electronic)" : "A", // Flower world
"2471-156X" : "O", // Fontes artis musicae
"0015-6191" : "A", // Fontes artis musicae
"0016-0717" : "A", // Freiburger Universitätsblätter
"1938-6990" : "O", // Gamut
"0017-5471" : "A", // Guitar review
"0440-5323" : "A", // Haydn-Studien
"0018-1137" : "A", // Heterofonía
"0046-7928" : "A", // Horn call
"0020-4331" : "A", // Instrumentalist
"0936-014X" : "A", // Instrumentenbaureport
"0255-7614" : "O", // International journal of music education
"0363-2845" : "A", // International Trumpet Guild journal
"1017-7515" : "A", // ISO journal
"0938-6998" : "A", // Jahrbuch für Glockenkunde
"1542-734X" : "O", // Journal of American culture
"1836-8336" : "O", // Journal of music research online
"0022-2909" : "O", // Journal of music theory
"0277-9269, 1533-8347" : "O", // Journal of musicology
"0929-8215" : "O", // Journal of new music research
"0147-4413; 0000-0000 (electronic)" : "A", // Journal of the American Liszt Society
"0362-3300" : "A", // Journal of the American musical instrument society
"0076-1526" : "A", // Journal of the lute society of America
"1812-1004" : "O", // Journal of the musical arts in Africa
"1754-9892" : "O", // Journal on the art of record production
"1013-6835" : "A", // La tribune de l'orgue
"1392-9313" : "O", // Lietuvos muzikologija = Lithuanian musicology
"0474-6376" : "A", // L'organo
"1015-0536" : "O", // Mitteilungen der Paul Sacher Stiftung
"2191-8627" : "A", // Mitteilungen Tschaikowsky-Gesellschaft
"1861-9053" : "A", // Mozart-Jahrbuch
"0342-0256" : "A", // Mozart-Jahrbuch
"1938-7687" : "O", // Music & Politics
"2169-9488" : "O", // Music in art
"1522-7464" : "A", // Music in art
"0730-7829, 1533-8312" : "O", // Music perception
"0730-7829" : "A", // Music perception
"0909-0797" : "A", // Musical Denmark yearbook
"0814-5857" : "O", // Musicology Australia
"0947-8302" : "A", // Musik in Baden-Württemberg
"1264-7020" : "A", // Musique, images, instruments
"0541-4830" : "O", // Muzyka
"0160-2365" : "O", // Newsletter of the American musical instrument society
"0030-4883" : "A", // Organ
"1355-7718, 1469-8153" : "O", // Organised sound
"1593-8735" : "A", // Polifonie
"0000-0000" : "O", // Postgraduate Journal of Aesthetics
"1547-982X" : "A", // Quarterly - Lute Society of America
"0211-6391" : "O", // Recerca musicológica
"0961-3544" : "O", // Recorder magazine
"0306-4409" : "A", // Recorder magazine
"0210-1459" : "O", // Revista de musicología
"0035-3744" : "A", // Revue musicale de Suisse romande
"1615-5556" : "A", // Rosetti-Forum
"0035-9610" : "A", // Ruch muzyczny
"0036-3308" : "A", // Saitenspiel
"0863-2340" : "A", // Schumann-Studien
"0739-229X" : "A", // Sonus
"0145-6237" : "A", // Soundboard
"2223-635X" : "O", // South African music studies
"1594-0012" : "O", // Studi vivaldiani
"0930-9578" : "O", // Studien zur Musikwissenschaft
"0012-2378" : "A", // The diapason
"1540-6245" : "O", // The journal of aesthetics and art criticism
"0021-8529" : "A", // The journal of aesthetics and art criticism
"0027-4631" : "O", // The Musical quarterly
"0030-4883" : "O", // The Organ
"0034-1568" : "A", // The Record Collector
"1472-3808" : "O", // The royal musical association research chronicle
"0080-4460" : "A", // The royal musical association research chronicle
"1383-7079; 1875-6409 (electronic)" : "A", // Tijdschrift van de koninklijke vereniging voor Nederlandse muziekgeschiedenis
"2366-746X" : "A", // Verdiperspektiven
"1504-1611" : "O", // Voices
"2377-231X" : "O", // Yale Journal of Music & Religion
"1535-3532" : "A", // Yale Journal of Music & Religion
//Anfang ohne Bearbeiter
"1940-1159" : "O", // Rock music studies
"0378-8903" : "O", // Mitteilungen der Internationalen Gesellschaft für Musikwissenschaft
"2059-2043" : "O", // Music & science
"0958-8434" : "O", // Musical Times and Singing Class Circular
"1753-8637" : "A", // Jazz Research Journal
"1612-0124" : "O", // Sammelbände der Internationalen Musikgesellschaft
"2055-1940" : "O", // Sound studies : an interdisciplinary journal
"0809-8131" : "O", //Nordic journal of music therapy (elektr.)
//Anfang Anda
"Basler Jahrbuch für historische Musikpraxis : eine Publikation der Schola Cantorum Basiliensis, Hochschule für Alte Musik an der Musik-Akademie der Stadt Basel, Fachhochschule Nordwestschweiz (FHNW)" : "A", // Basler Jahrbuch für historische Musikpraxis
"Engaging Students" : "O", // Engaging Students: Essays in Music Pedagogy
"Journal of the Arnold Schönberg Center" : "A", // Journal of the Arnold Schönberg Center
"Liszt-Jahrbuch" : "A", // Liszt-Jahrbuch
"Music Theory and Analysis (MTA)" : "O", // Music Theory and Analysis
"Schumann-Journal" : "O", // Schumann-Journal 
"Journal of the Audio Engineering Society" : "O", // Journal of the Audio Engineering Society
//Anfang Lisa
"ARSC journal" : "A", // ARSC journal
"Australian Journal of Music Education" : "O", // The Australian journal of music education (elektr.)
"Australasian Music Research" : "O", //
"Berichte aus dem Nationalkomitee der Bundesrepublik Deutschland im International Council for Traditional Music" : "O", // 
"Boccherini studies" : "A", // 
"CeReNeM Journal" : "O", // 
"European string teachers Association Nachrichten" : "A", //
"Heidelberger Hochschulschriften zur Musikpädagogik" : "A", // Heidelberger Hochschulschriften zur Musikpädagogik 
"Nota Bene: Canadian Undergraduate Journal of Musicology" : "O", //
"Rock & rap confidential" : "O", // 
"String players library series" : "A", // 
"The old time herald" : "A", // 
"Proceedings of the annual meeting National Association of Schools of Music" : "O", //
"African Music: Journal of the International Library of African Music" : "O", //
//Anfang Katherina	
"Acta Acustica united with Acustica" : "O", // Acta Acustica
"British postgraduate musicology" : "O", // British postgraduate musicology
"Integral the journal of applied musical thought" : "O", // Integral
"International journal of musicology" : "A", // International journal of musicology
"International review of the aesthetics and sociology of music" : "A", // International review of the aesthetics and sociology of music
"Journal of jewish music and liturgy" : "A", // Journal of jewish music and liturgy
"Journal of Sonic Studies" : "O", // Journal of Sonic Studies
"Mitteilungen der Christoph-Graupner-Gesellschaft" : "A", // Mitteilungen der Christoph-Graupner-Gesellschaft
"Music research forum" : "A", // Music research forum
"Musica disciplina" : "A", // Musica disciplina
"Musica judaica" : "O", // Musica judaica
"Musurgia analyse et pratique musicales" : "O", // Musurgia
"Sacred music" : "O", // Sacred music
"Ssi-ol Almanach der Internationalen Isang Yun Gesellschaft" : "A", // Ssi-ol
"Theologische Rundschau" : "O", // Theologische Rundschau
"Theory and practice" : "O", // Theory and practice
"Tibia" : "A", // Tibia	
"Acta acustica united with Acustica" : "O", // Acta acustica united with Acustica (elektr.)
"Medical Problems of Performing Artists" : "O", // Medical problems of performing artists (elektr.)
"Music Analysis" : "O", // Music analysis
"Music Theory Online" : "O", // Music theory online
"Music Theory Spectrum" : "O", // Music theory spectrum
"Nineteenth-Century Music Review" : "O", // Nineteenth Century Music Review
"Studia Musicologica Norvegica" : "O", // Studia musicologica Norvegica
//Anfang Frau Bruchmann
"American Music Research Center Journal" : "A", // American Music Research Center Journal
"Context: Journal of Music Research" : "O", // Context
"Jazz Hot: La Revue Internationale du Jazz" : "A", // Jazz hot
"Jazz Podium" : "A", // Jazz Podium
"Jazz Research News" : "A", // Jazz Research News	
//Anfang Frau Asmus
"The American recorder" : "A", // The American recorder
"Anklaenge: Wiener Jahrbuch für Musikwissenschaft" : "A", //Anklänge
"«Fonti Musicali Italiane»" : "O", // Fonti Musicali Italiane
"Journal of Schenkerian studies" : "A", // Journal of Schenkerian studies
"Journal of seventeenth-century music" : "O", // Journal of seventeenth century music
"Violin Society of America Papers" : "O", // Journal of the violin society of America
"Performance Practice Review" : "O", // Performance practice review
"Recercare" : "O", // Recercare
//Anfang Frau Wegner
"http://revues.mshparisnord.org/filigrane" : "O", // Filigrane
"International Trumpet Guild journal" : "A", // International Trumpet Guild journal
"Lute Society of America quarterly" : "A", // Lute Society of America (gedr.)
"Sonus" : "A", // Sonus (gedr.)
//Anfang ohne Bearbeiter
"Philosophy of music education review" : "A", //Philosophy of music education review (gedr.)
"Musik-Texte" : "A", //Musik-Texte (gedr.)
};

var issnLicenceFieldMapping = {
	"1550-0195" : "l",
	"1661-3317" : "l", // Lectio difficilior !!eppn
	"2363-6696" : "l", // Entangled Religions
	"1862-5886" : "l", // Zeitschrift für junge Religionswissenschaft
	"0118-8534" : "l", // Asian journal of pentecostal studies
	
};

var issnSsgMapping = {
	"0044-3441" : "0; 1", // Zeitschrift für Religions- und Geistesgeschichte
	"1570-0739" : "0; 1", // Zeitschrift für Religions- und Geistesgeschichte
	"1941-1022" : "0", // Psychology of Religion and Spirituality
	"1755-0483, 1755-0491" : "0", // Politics and Religion
	"1755-0483" : "0", // Politics and Religion
	"1755-0491" : "0", // Politics and Religion
	"2164-6279" : "1", // Journal of Hindu-Christian Studies 
	"ARC" : "0; 1", // ARC
	
};



// Mapping für ISSNs deren Schlagwörter statt 5520 in 680X abgelegt werden. KrimDok-Spezifikation
// inkrementell ab z.B. 680 exportiert werden sollen (6801, 6802, ...)
var issnKeywordMapping = {
	"0003-1224" : 6800, // American sociological review Online Publikation|krimdok
	"1862-2593" : 6800, // Berliner Journal für Soziologie Online Publikation|krimdok
	"0268-5809" : 6800, // International sociology Online Publikation|krimdok
	"2196-8225" : 6800, // Praxis der Kinderpsychologie und Kinderpsychiatrie Online Publikation|krimdok
	"2190-6238" : 6800, // Psychologische Rundschau Online Publikation|krimdok
	"1461-7439" : 6800, // Theoretical criminology Online Publikation|krimdok
	"1438-9460" : 6800, // Zeitschrift für Sexualforschung Online Publikation|krimdok
};

// Mapping für JournalTitle>PPN
var issnJournalTitleMapping = {
//Anfang Anda
"ARSC journal" : "!001399861!", // ARSC journal
"Basler Jahrbuch für historische Musikpraxis : eine Publikation der Schola Cantorum Basiliensis, Hochschule für Alte Musik an der Musik-Akademie der Stadt Basel, Fachhochschule Nordwestschweiz (FHNW)" : "!001401084!", // Basler Jahrbuch für historische Musikpraxis
"Engaging Students" : "!005778166!", // Engaging Students: Essays in Music Pedagogy
"Journal of the Arnold Schönberg Center" : "!001405314!", // Journal of the Arnold Schönberg center
"Liszt-Jahrbuch" : "!006470041!", // Liszt-Jahrbuch
"Music Theory and Analysis (MTA)" : "!006567479!", // Music Theory and Analysis
"Schumann-Journal" : "!005834732!", // Schumann-Journal
"Journal of the Audio Engineering Society" : "!006567436!", // Journal of the Audio Engineering Society	
//Anfang Lisa
"Australian Journal of Music Education" : "!004942221!", // The Australian journal of music education (elektr.)
"Australasian Music Research" : "!004233700!", //
"Boccherini studies" : "!005971888!", // 
"CeReNeM Journal" : "!006555233!", // 
"European string teachers Association Nachrichten" : "!004532570!", // 
"Heidelberger Hochschulschriften zur Musikpädagogik" : "!004400054!", // Heidelberger Hochschulschriften zur Musikpädagogik
"Nota Bene: Canadian Undergraduate Journal of Musicology" : "!006555314!", // Nota bene
"Rock & rap confidential" : "!005133998!", // 
"String players library series" : "!00581832X!", // 
"The old time herald" : "!004944313!", //
"African Music: Journal of the International Library of African Music" : "!004496051!", // 
//Anfang Katherina
"Acta Acustica united with Acustica" : "!001409166!", // Acta Acustica
"British postgraduate musicology" : "!00140945X!", // British postgraduate musicology
"Integral the journal of applied musical thought" : "!006577814!", // Integral
"International journal of musicology" : "!006577822!", // International journal of musicology
"International review of the aesthetics and sociology of music" : "!001414054!", // International review of the aesthetics and sociology of music
"Journal of jewish music and liturgy" : "!006582362!", // Journal of jewish music and liturgy
"Journal of Sonic Studies" : "!006384692!", // Journal of Sonic Studies
"Mitteilungen der Christoph-Graupner-Gesellschaft" : "!006582370!", // Mitteilungen der Christoph-Graupner-Gesellschaft
"Music research forum" : "!004614941!", // Music research forum
"Musica disciplina" : "!006582389!", // Musica disciplina
"Musica judaica" : "!006582397!", // Musica judaica
"Musurgia analyse et pratique musicales" : "!005177855!", // Musurgia
"Sacred music" : "!006582419!", // Sacred music
"Ssi-ol Almanach der Internationalen Isang Yun Gesellschaft" : "!00140833X!", // Ssi-ol
"The stanza" : "!006582427!", // The stanza
"Theologische Rundschau" : "!006701795!", // Theologische Rundschau
"Theory and practice" : "!004414233!", // Theory and practice
"Tibia" : "!006582435!", // Tibia
"Acta acustica united with Acustica" : "!001409166!", // Acta acustica united with Acustica(elektr.)
"Medical Problems of Performing Artists" : "!005178142!", // Medical problems of performing artists (elektr.)
"Music Analysis" : "!001410407!", // Music analysis
"Music Theory Online" : "!001414356!", // Music theory online
"Music Theory Spectrum" : "!001410032!", // Music theory spectrum
"Nineteenth-Century Music Review" : "!004523202!", // Nineteenth Century Music Review
"Studia Musicologica Norvegica" : "!006585035!", // Studia musicologica Norvegica
//Anfang Frau Bruchmann
"American Music Research Center Journal" : "!001411683!", // American Music Research Center Journal
"Context: Journal of Music Research" : "!00228460X!", // Context
"Jazz Hot: La Revue Internationale du Jazz" : "!001411586!", // Jazz hot
"Jazz Podium" : "!001411632!", // Jazz Podium
"Jazz Research News" : "!001405306!", // Jazz Research News	
//Anfang Frau Asmus
"Anklaenge: Wiener Jahrbuch für Musikwissenschaft" : "!003032051!", //Anklänge
"«Fonti Musicali Italiane»" : "!00674222X!", // Fonti Musicali Italiane
"Journal of Schenkerian studies" : "!00516141X!", // Journal of Schenkerian studies
"Journal of seventeenth-century music" : "!001404539!", // Journal of seventeenth century music
"Violin Society of America Papers" : "!006742238!", // Journal of the violin society of America
"Performance Practice Review" : "!003657310!", // Performance practice review
"Recercare" : "!006742254!", // Recercare
//Anfang Frau Wegner
"http://revues.mshparisnord.org/filigrane" : "!006585736!", // Filigrane
"International Trumpet Guild journal" : "!001411543!", // International Trumpet Guild journal
"Lute Society of America quarterly" : "!00140542X!", // Lute Society of America (gedr.)
"Sonus" : "!001405012!", // Sonus (gedr.)
//Anfang ohne Bearbeiter
"Philosophy of music education review" : "!003595528!", //Philosophy of music education review (gedr.)
"Musik-Texte" : "!001400509!", //Musik-Texte (gedr.)
};


// Mapping JournalTitle>Language
var JournalTitleLanguageMapping = {
//Anfang Anda
"ARSC journal" : "eng", // ARSC journal
"Basler Jahrbuch für historische Musikpraxis : eine Publikation der Schola Cantorum Basiliensis, Hochschule für Alte Musik an der Musik-Akademie der Stadt Basel, Fachhochschule Nordwestschweiz (FHNW)" : "manuell", // Basler Jahrbuch für historische Musikpraxis
"Engaging Students" : "eng", // Engaging Students: Essays in Music Pedagogy
"Journal of the Arnold Schönberg Center" : "manuell", // Journal of the Arnold Schönberg Center
"Liszt-Jahrbuch" : "ger", // Liszt-Jahrbuch
"Music Theory and Analysis (MTA)" : "eng", // Music Theory and Analysis
"Schumann-Journal" : "manuell", // Schumann-Journal
"Journal of the Audio Engineering Society" : "eng", // Journal of the Audio Engineering Society 
//Anfang Lisa
"Australian Journal of Music Education" : "eng", // The Australian journal of music education (elektr.)
"Australasian Music Research" : "eng", //
"Berichte aus dem Nationalkomitee der Bundesrepublik Deutschland im International Council for Traditional Music" : "ger", // 
"Boccherini studies" : "manuell", // 
"CeReNeM Journal" : "eng", // 
"European string teachers Association Nachrichten" : "ger", // 
"Heidelberger Hochschulschriften zur Musikpädagogik" : "ger", // Heidelberger Hochschulschriften zur Musikpädagogik
"Nota Bene: Canadian Undergraduate Journal of Musicology" : "eng", // Nota bene
"Rock & rap confidential" : "eng", // 
"String players library series" : "eng", // 
"The old time herald" : "eng", // 
"Proceedings of the annual meeting National Association of Schools of Music" : "eng", //
"African Music: Journal of the International Library of African Music" : "eng", //
//Anfang Katherina
"Acta Acustica united with Acustica" : "eng", // Acta Acustica
"British postgraduate musicology" : "eng", // British postgraduate musicology
"Integral the journal of applied musical thought" : "eng", // Integral
"International journal of musicology" : "eng", // International journal of musicology
"International review of the aesthetics and sociology of music" : "manuell", // International review of the aesthetics and sociology of music
"Journal of jewish music and liturgy" : "eng", // Journal of jewish music and liturgy
"Journal of Sonic Studies" : "eng", // Journal of Sonic Studies
"Mitteilungen der Christoph-Graupner-Gesellschaft" : "ger", // Mitteilungen der Christoph-Graupner-Gesellschaft
"Music research forum" : "eng", // Music research forum
"Musica disciplina" : "manuell", // Musica disciplina
"Musica judaica" : "eng", // Musica judaica
"Musurgia analyse et pratique musicales" : "fre", // Musurgia
"Sacred music" : "eng", // Sacred music
"Ssi-ol Almanach der Internationalen Isang Yun Gesellschaft" : "ger", // Ssi-ol
"The stanza" : "eng", // The stanza
"Theologische Rundschau" : "ger", // Theologische Rundschau
"Theory and practice" : "eng", // Theory and practice
"Tibia" : "ger", // Tibia
"Acta acustica united with Acustica" : "eng", // Acta acustica united with Acustica
"Medical Problems of Performing Artists" : "eng", // Medical Problems of Performing Artists
"Music Theory Online" : "eng", // Music theory online
"Music Theory Spectrum" : "eng", // Music theory spectrum
"Nineteenth-Century Music Review" : "eng", // Nineteenth Century Music Review
"Studia Musicologica Norvegica" : "manuell", // Studia musicologica Norvegica
//Anfang Frau Bruchmann
"American Music Research Center Journal" : "eng", // American Music Research Center Journal
"Context: Journal of Music Research" : "eng", // Context
"Jazz Hot: La Revue Internationale du Jazz" : "manuell", // Jazz hot
"Jazz Podium" : "ger", // Jazz Podium
"Jazz Research News" : "manuell", // Jazz Research News	
//Anfang frau Asmus
"Anklaenge: Wiener Jahrbuch für Musikwissenschaft" : "ger", //Anklänge
"«Fonti Musicali Italiane»" : "ita", // Fonti Musicali Italiane
"Journal of Schenkerian studies" : "eng", // Journal of Schenkerian studies
"Journal of seventeenth-century music" : "eng", // Journal of seventeenth century music
"Violin Society of America Papers" : "eng", // Journal of the violin society of America
"Performance Practice Review" : "eng", // Performance practice review
"Recercare" : "manuell", // Recercare
//Anfang Frau Wegner
"http://revues.mshparisnord.org/filigrane" : "fre", // Filigrane
"International Trumpet Guild journal" : "eng", // International Trumpet Guild journal
"Lute Society of America quarterly" : "eng", // Lute Society of America (gedr.)
"Sonus" : "eng", // Sonus (gedr.)
//Anfang ohne Bearbeiter
"Philosophy of music education review" : "eng", //Philosophy of music education review (gedr.)
"Musik-Texte" : "ger", //Musik-Texte
}

// ab hier Programmcode
var defaultSsgNummer = "1";
var defaultLanguage = "eng";
//lokaldatensatz z.B. \\n6700 !372049834!\\n6700 !37205241X!\\n6700 !372053025!\\n6700!37205319X!


//item.type --> 0500 Bibliographische Gattung und Status
//http://swbtools.bsz-bw.de/winibwhelp/Liste_0500.htm
var physicalForm = issnPhysicalFormMapping;//0500 Position 1
var cataloguingStatus = "u";//0500 Position 3
var cataloguingStatusO = "u";//0500 Position 3
var licenceField = issnLicenceFieldMapping; // 0500 Position 4 only for Open Access Items; http://swbtools.bsz-bw.de/cgi-bin/help.pl?cmd=kat&val=4085&regelwerk=RDA&verbund=SWB
var SsgField = issnSsgMapping;
var authorMapping = {};

/*
    WICHTIG - ERST LESEN UND !!!VERSTEHEN!!! BEVOR ÄNDERUNGEN GEMACHT WERDEN

    Hinweise zur Nebenläufigkeit
    - Dieses Skript verwendet Remote-calls zum Auflösen verschiedener Daten (z.B. PPNs für Autoren)
    - Diese Calls sind per Javascript nur asynchron aufrufbar
        - Konstrukte wie z.B. Zotero.wait() und Zotero.done() existieren in der aktuellen Zotero-Version (5) noch, haben aber keine Funktion mehr.
        - Verschiedene Workarounds wurden ausprobiert (z.B. Semaphor über globale Variable), haben aber nie funktioniert
        - Man kommt also um die asynchronen Aufrufe nicht herum

    HINWEISE ZUR IMPLEMENTATION in diesem Skript
    - Die Variable runningThreadCount enthält die Anzahl der noch laufenden Threads (Hauptskript + asynchrone abfragen)
        - Startwert 1 (für Hauptskript)
        - +1 beim Start jedes zusätzlichen asynchronen Aufrufs
        - -1 beim Ende jedes asynchronen Aufrufs (im ondone callback)
        - -1 beim Ende des Hauptskripts
    - Alle Informationen werden im itemsOutputCache nach Item gruppiert gesammelt (laufende Nummer)
    - Erst am Ende des Skripts werden die Einträge im itemsOutputCache sortiert und geschrieben
        - Sortierung ist notwendig, da Hauptskript und asynchrone Threads gemischt Codes reinschreiben => Codes sind durcheinander
        - So wird auch verhindert dass Datensätze durcheinander sind, falls mehrere gleichzeitig exportiert werden
    - Dafür ist es notwendig, dass sowohl das Ende des Skripts als auch jeder einzelne Async ondone callback auf
      runningThreadCount == 0 prüft und bei Bedarf die finale Funktion WriteItems aufruft.
 */

var runningThreadCount = 1;
var currentItemId = -1;
var itemsOutputCache = []

/**
 * Diese Funktion dient als Ersatz für Zotero.ProcessDocuments
 * Mit dieser Funktion ist es möglich, der processor-Funktion eine zusätzliche Variable weiterzugeben ("processorParams").
 * Notwendig um z.B. Kopien globaler Variablen weiterzugeben, die sonst den Wert ändern
 * bis die Processor-Funktion am Ende des callbacks aufgerufen wird.
 *
 * Original siehe: https://github.com/zotero/zotero/blob/master/chrome/content/zotero/xpcom/http.js
 */
async function processDocumentsCustom (url, processor, processorParams, onDone, onError) {
    var f = function() {
       Zotero.Utilities.loadDocument(url, function(doc) {
           processor(doc, url, processorParams);
       });

    };

    try {
        await f();
    }
    catch (e) {
        if (onError) {
            onError(e);
        }
        throw e;
    }

    if (onDone) {
        onDone();
    }
};

function addLine(itemid, code, value) {
    //Halbgeviertstrich ersetzen
    value = value.replace(/–/g, '-').replace(/’/g, '\'').replace(/‘/g, '\'').replace(/“/g, '\"').replace(/”/g, '\"').replace(/„/g, '\"').replace(/»/g, '\"').replace(/«/g, '\"').replace(/>/g, '\"').replace(/</g, '\"').replace(/œ/g, '\\u0153').replace(/ā/g, '\\u0101').replace(/â/g, '\\u00E2').replace(/Ṣ/g, '\\u1E62').replace(/ṣ/g, '\\u1E63').replace(/ū/g, '\\u016B').replace(/ḥ/g, '\\u1E25').replace(/ī/g, '\\u012B').replace(/ṭ/g, '\\u1E6D').replace(/ʾ/g, '\\u02BE').replace(/ʿ/g, '\\u02BF').replace(/–/g, '-').replace(/&#160;/g, "").replace(/"/g, '\\"').replace("http://dx.doi.org/", "").replace("#abstract", "").replace(/ņ/g, '\\u0146').replace(/Ņ/g, '\\u0145').replace(/ž/g, '\\u017E').replace(/Ž/g, '\\u017D').replace(/ė/g, '\\u0117').replace(/Ė/g, '\\u0116');
   
    //Zeile zusammensetzen
    var line = code + " " + value;
    itemsOutputCache[itemid].push(line);
}


function doExport() {
    var item;
    while ((item = Zotero.nextItem())) {
        currentItemId++;
        itemsOutputCache[currentItemId] = [];

        //enrich items based on their ISSN
        if (!item.language && item.ISSN && issnLangMapping[item.ISSN]) {
            item.language = issnLangMapping[item.ISSN];
        }
        if (SsgField && item.ISSN && issnSsgMapping[item.ISSN]) {
            SsgField = issnSsgMapping[item.ISSN];
        }
        if (item.volume && item.ISSN && issnVolumeMapping[item.ISSN]) {
            item.volume = issnVolumeMapping[item.ISSN] + item.volume;
        }
        if (physicalForm && item.ISSN && issnPhysicalFormMapping[item.ISSN]) {
            physicalForm = issnPhysicalFormMapping[item.ISSN]; // position 1 http://swbtools.bsz-bw.de/winibwhelp/Liste_0500.htm
        }
		if (physicalForm && item.publicationTitle && issnJournalTitleMapping[item.publicationTitle]) {
			physicalForm = issnPhysicalFormMapping[item.publicationTitle]; // position 1 http://swbtools.bsz-bw.de/winibwhelp/Liste_0500.htm
		}
        if (licenceField && item.ISSN && issnLicenceFieldMapping[item.ISSN]) {
            licenceField = issnLicenceFieldMapping[item.ISSN]; // position 4 http://swbtools.bsz-bw.de/winibwhelp/Liste_0500.htm
        }


        var article = false;
        switch (item.itemType) {
            case "journalArticle":
            case "bookSection":
            case "magazineArticle": // wird bei der Erfassung von Rezensionen verwendet. Eintragsart "Magazin-Artikel" wird manuell geändert.
            case "newspaperArticle":
            case "encyclopediaArticle":
                article = true;
                break;
        }

		
		//item.type --> 0500 Bibliographische Gattung und Status
		//http://swbtools.bsz-bw.de/winibwhelp/Liste_0500.htm
		switch (true) {
			case physicalForm === "A":
				addLine(currentItemId, '\\n0500', physicalForm+"s"+cataloguingStatus);
				break;
			case physicalForm === "O" && licenceField === "l":
				addLine(currentItemId, '\\n0500', physicalForm+"s"+cataloguingStatus+licenceField); 
				break;
			case physicalForm === "O" && licenceField === "kw":
				addLine(currentItemId, '\\n0500', physicalForm+"s"+cataloguingStatus); 
				break;
			default:
				addLine(currentItemId, '\\n0500', physicalForm+"s"+cataloguingStatus); // //z.B. Aou, Oou, Oox etc. 
			}
        //item.type --> 0501 Inhaltstyp
        addLine(currentItemId, "\\n0501", "Text$btxt");

        //item.type --> 0502 Medientyp
        switch (physicalForm) {
            case "A":
                addLine(currentItemId, "\\n0502", "ohne Hilfsmittel zu benutzen$bn");
                break;
            case "O":
                addLine(currentItemId, "\\n0502", "Computermedien$bc");
                break;
            default:
                addLine(currentItemId, "\\n0502", "");
        }

        //item.type --> 0503 Datenträgertyp

        switch (physicalForm) {
            case "A":
                addLine(currentItemId, "\\n0503", "Band$bnc");
                break;
            case "O":
                addLine(currentItemId, "\\n0503", "Online-Ressource$bcr");
                break;
            default:
                addLine(currentItemId, "\\n0503", "");
        }
        //item.date --> 1100
        var date = Zotero.Utilities.strToDate(item.date);
        if (date.year !== undefined) {
            addLine(currentItemId, "\\n1100", date.year.toString() /*+ "$n[" + date.year.toString() + "]"*/);
        }

        //1130 Datenträger
        //http://swbtools.bsz-bw.de/winibwhelp/Liste_1130.htm

        /*switch (physicalForm) {
            case "A":
                addLine(currentItemId, "\\n1130", "druck");
                break;
            case "O":
                addLine(currentItemId, "\\n1130", "cofz");
                break;
            default:
                addLine(currentItemId, "\\n1130", "");
        }*/

        //1131 Art des Inhalts
        if (item.itemType == "magazineArticle") {
            addLine(currentItemId, "\\n1131", "!00205888X!");
        }

        // 1140 Veröffentlichungsart und Inhalt http://swbtools.bsz-bw.de/winibwhelp/Liste_1140.htm
        /*if (item.itemType == "magazineArticle") {
            addLine(currentItemId, "\\n1140", "uwre");
        }*/


        //item.language --> 1500 Sprachcodes
        if (item.language) {
            if (languageMapping[(item.language)]) {
                    item.language = languageMapping[item.language];
            }
            addLine(currentItemId, "\\n1500", item.language);
        } else {
            addLine(currentItemId, "\\n1500", defaultLanguage);
        }

        //1505 Katalogisierungsquelle
        addLine(currentItemId, "\\n1505", "$erda");

        //item.ISBN --> 2000 ISBN
        if (item.ISBN) {
            addLine(currentItemId, "\\n2000", item.ISBN);
        }

        //item.DOI --> 2051 bei "Oou" bzw. 2053 bei "Aou"
        if (item.DOI) {
            if (physicalForm === "O") {
                addLine(currentItemId, "\\n2051", item.DOI.replace("https://doi.org/", ""));
            } else if (physicalForm === "A") {
                addLine(currentItemId, "\\n2053", item.DOI.replace("https://doi.org/", ""));
            }
        }

        //Autoren --> 3000, 3010
        //Titel, erster Autor --> 4000
        var titleStatement = "";
		if (item.shortTitle == "journalArticle") {
            titleStatement += item.shortTitle;
            if (item.title && item.title.length > item.shortTitle.length) {
                titleStatement += "$d" + item.title.substr(item.shortTitle.length);
            }
		
			
        } else {
            titleStatement += item.title.replace(/\s*:\s*/,'$d');
}        
		

        //Sortierzeichen hinzufügen, vgl. https://github.com/UB-Mannheim/zotkat/files/137992/ARTIKEL.pdf
        if (item.language == "ger" || !item.language) {
            titleStatement = titleStatement.replace(/^(Der|Die|Das|Des|Dem|Den|Ein|Eines|Einem|Eine|Einen|Einer) ([^@])/, "$1 @$2");
        }
        if (item.language == "eng" || !item.language) {
            titleStatement = titleStatement.replace(/^(The|A|An) ([^@])/, "$1 @$2");
        }
        if (item.language == "fre" || !item.language) {
            titleStatement = titleStatement.replace(/^(Le|La|Les|Des|Un|Une) ([^@])/, "$1 @$2");
            titleStatement = titleStatement.replace(/^L'([^@])/, "L' @$1");
        }
		if (item.language == "ita" || !item.language) {
			titleStatement = titleStatement.replace(/^(La|Le|Lo|Gli|I|Il|Un|Una|Uno) ([^@])/, "$1 @$2");
			titleStatement = titleStatement.replace(/^L'([^@])/, "L' @$1").replace(/^L’([^@])/, "L' @$1");
		}
		
		if (item.language == "por" || !item.language) {
			titleStatement = titleStatement.replace(/^(A|O|As|Os|Um|Uma|Umas|Uns) ([^@])/, "$1 @$2");
		}
		if (item.language == "spa" || !item.language) {
			titleStatement = titleStatement.replace(/^(El|La|Los|Las|Un|Una|Unos|Unas) ([^@])/, "$1 @$2");
		}

        var i = 0;
        var creator;
        while (item.creators.length>0) {
            creator = item.creators.shift();

            if (creator.creatorType == "author") {
                var authorName = creator.lastName + (creator.firstName ? ", " + creator.firstName : "");

                var code = 0;
                if (i === 0) {
                    code = "\\n3000";
                    titleStatement += "$h" + (creator.firstName ? creator.firstName + " " : "") + creator.lastName;
                } else {
                    code = "\\n3010";
                }

                i++;

                //Lookup für Autoren
                if (authorName[0] != "!") {
                    var lookupUrl = "http://www.musikbibliographie.de/SET=6/TTL=2/CMD?MATCFILTER=N&MATCSET=N&ACT0=&IKT0=&TRM0=&ACT3=*&IKT3=8183&ACT=SRCHA&IKT=1016&SRT=YOP&TRM=" + authorName +"&REC=2&TRM3="
					
                    /*
                    lookupUrl kann je nach Anforderung noch spezifiziert werden, im obigen Abfragebeispiel:
                    suchen [und] (Person(Phrase: Nachname, Vorname) [PER]) " authorName "
                    eingrenzen (Systematiknummer der SWD [SN]) *
                    eingrenzen (Relationiertes Schlagwort in der GND [RLS]) theolog*
                    ausgenommen (Relationierte Zeit in der GND [RLZ]) 1[1,2,3,4,5,6,7,8][0,1,2,3,4,5,6,7,8,9][0,1,2,3,4,5,6,7,8,9]

                    IKT0=1 TRM0= für Persönlicher Name in Picafeld 100
                    IKT1=2057 TRM1=3.* für GND-Systematik
                    IKT2=8963 TRM2=theolog*    für Berufsbezeichnung 550
                    IKT3=8991 TRM3=1[1,2,3,4,5,6,7,8][0,1,2,3,4,5,6,7,8,9][0,1,2,3,4,5,6,7,8,9] für Geburts- und Sterbedatum (Bereich)

                    ###OPERATOREN vor "IKT"###
                    UND-Verknüpfung "&" | ODER-Verknüpfung "%2B&" | Nicht "-&"

                    ###TYP IKT=Indikatoren|Zweite Spalte Schlüssel(IKT)###
                    Liste der Indikatoren und Routine http://swbtools.bsz-bw.de/cgi-bin/help.pl?cmd=idx_list_typ&regelwerk=RDA&verbund=SWB
                    */

                    // threadParams = globale Variablen die sich evtl ändern
                    // während die async-Funktion processDocumentsCustom ausgeführt wird
                    // und daher per Kopie übergeben werden müssen
                    var threadParams = {
                        "currentItemId" : currentItemId,
                        "code" : code,
                        "authorName" : authorName,
                    };

                    runningThreadCount++;
                    processDocumentsCustom(lookupUrl,
                        // processing callback function
                        function(doc, url, threadParams){
                            var ppn = Zotero.Utilities.xpathText(doc, '//div[@id="bibtip_id"]');
                            if (ppn) {
                                var authorValue = "!" + ppn.trim() + "!" + "$BVerfasserIn$4aut \\n4700 Autor maschinell zugeordnet";
                                addLine(threadParams["currentItemId"], threadParams["code"], authorValue);
                            } else {
                                addLine(threadParams["currentItemId"], threadParams["code"], threadParams["authorName"]  + "$BVerfasserIn$4aut");
                            }

                            // separate onDone function not needed because we only call one url
                            runningThreadCount--;
                            if (runningThreadCount === 0) {
                                for (key in authorMapping) {
                                    var value = authorMapping[key];
                                }
                                WriteItems();
                            }
                        },
                        threadParams,
                        //onDone
                        undefined,
                        //onError
                        function(e) {
                            var message = "Error in external lookup: " + e.message;
                            Zotero.debug(message);
                            Zotero.write(message);
                        }
                    );
                }
            }

            //TODO: editors, other contributors...
        }

        addLine(currentItemId, "\\n4000", titleStatement);

        //Ausgabe --> 4020
        if (item.edition) {
            addLine(currentItemId, "\\n4020", item.edition);
        }

        //Veröffentlichungsangabe --> 4030
        if (!article) {
            var publicationStatement = "";
            if (item.place) { publicationStatement += item.place; }
            if (item.publisher) { publicationStatement +=  "$n" + item.publisher; }
            addLine(currentItemId, "\\n4030", publicationStatement);
        }


        //4070 $v Bandzählung $j Jahr $a Heftnummer $p Seitenzahl
        if (item.itemType == "journalArticle" || item.itemType == "magazineArticle") {
            var volumeyearissuepage = "";
			if (item.volume) { volumeyearissuepage += "$v" + item.volume.replace("Tome ", "").replace("-", "/").replace(/\s\(Number\s\d+-?\d+\)/, ""); }
			if (date.year !== undefined) { volumeyearissuepage +=  "$j" + date.year; }
			if (item.issue) { volumeyearissuepage += "$a" + item.issue.replace("-", "/").replace(/^0/, ""); }
			if (item.pages) { volumeyearissuepage += "$p" + item.pages.replace(/EL/g, ""); }

            addLine(currentItemId, "\\n4070", volumeyearissuepage);
        }
		
		//URL --> 4950 nur bei Dokumenttyp "magazineArticle" für Rezension im Feld 0500
        if (item.url && item.itemType == "magazineArticle") {
            addLine(currentItemId, "\\n4950", "$u" + item.url);
        }
		
		//URL --> 4950 nur bei Satztyp "O.." im Feld 0500
		switch (true) {
			case item.url && physicalForm === "O" && licenceField === "l":
				addLine(currentItemId, "\\n4950", item.url + "$xH");
				break;
			case item.url && physicalForm === "O" && licenceField === "kw":
				addLine(currentItemId, "\\n4950", item.url + "$xH");
				break;
			case item.url && physicalForm === "O":
				addLine(currentItemId, "\\n4950", item.url + "$xH");
				break;
			case item.url && item.itemType == "magazineArticle":
				addLine(currentItemId, "\\n4950", item.url + "$xH");
				break;
			}
		
        //Reihe --> 4110
        if (!article) {
            var seriesStatement = "";
            if (item.series) {
                seriesStatement += item.series;
				
				
				
            }
            if (item.seriesNumber) {
                seriesStatement += " ; " + item.seriesNumber;
            }
            addLine(currentItemId, "\\n4110", seriesStatement);
        }

        //Inhaltliche Zusammenfassung --> 4207
        if (item.abstractNote) {
			item.abstractNote = ZU.unescapeHTML(item.abstractNote);
             addLine(currentItemId, "\\n4207", item.abstractNote.replace("Zusammenfassung", "").replace("Summary", "").replace("Objectives", "").replace("Introduction", "").replace("Abstract. ", "").replace("ABSTRACT: ", "").replace("ABSTRACT ", "").replace("", "").replace(/–/g, '-').replace(/&#160;/g, "").replace(/"/g, '\"').replace('No abstract available.', '').replace('not available', '').replace(/\n/g, " ").replace("<i>", "\'").replace("</i>", "\'").replace("<br/>", "").replace('»', '"').replace('«', '"') + " (Vorlage)");
          
        }

        //item.publicationTitle --> 4241 Beziehungen zur größeren Einheit
        if (item.itemType == "journalArticle" || item.itemType == "magazineArticle") {
            if (item.ISSN && journalMapping[ZU.cleanISSN(item.ISSN)]) {
                addLine(currentItemId, "\\n4241", "Enthalten in" + journalMapping[ZU.cleanISSN(item.ISSN)]);
            } else if (item.publicationTitle) {
                addLine(currentItemId, "\\n4241", "Enthalten in"  + issnJournalTitleMapping[item.publicationTitle]);
            }

            /*//4261 Themenbeziehungen (Beziehung zu der Veröffentlichung, die beschrieben wird)|case:magazineArticle
            if (item.itemType == "magazineArticle") {
                addLine(currentItemId, "\\n4261", "Rezension von"); // das rezensierte Werke manuell einfügen.
            }*/

            /*//SSG bzw. FID-Nummer --> 5056 "0" = Religionwissenschaft | "1" = Theologie | "0; 1" = RW & Theol.

            if (SsgField === "0" || SsgField === "0; 1" || SsgField === "FID-KRIM-DE-21") {
                addLine(currentItemId, "\\n5056", SsgField);
            } else {
                addLine(currentItemId, "\\n5056", defaultSsgNummer);
            }*/

            //Schlagwörter aus einem Thesaurus (Fremddaten) --> 5520 (oder alternativ siehe Mapping)
            if (item.ISSN && issnKeywordMapping[ZU.cleanISSN(item.ISSN)]) {
                var ISSNclean = ZU.cleanISSN(item.ISSN);
                var codeBase = issnKeywordMapping[ISSNclean];
                for (i=0; i<item.tags.length; i++) {
                    var code = codeBase + i;
                    addLine(currentItemId, code, "|s|" + item.tags[i].tag.replace(/\s?--\s?/g, '; '));
                }
            } else {
                for (i=0; i<item.tags.length; i++) {
                    addLine(currentItemId, "\\n6400", "|s|" + item.tags[i].tag.replace(/\s?--\s?/g, '; '));
                }
            }

            if (item.itemType == "journalArticle" || item.itemType == "magazineArticle") {

			addLine(currentItemId, '\\nE001 z\\n8007 SNOTI: rw\\n8099 IMZK");\napplication.activeWindow.pressButton("Enter");\n\n', "");
            }
        }
    }

    runningThreadCount--;
    if (runningThreadCount === 0) {
        WriteItems();
    }
}

// this should be called at end of each element,
// and also when all async calls are finished (only when runningThreadCount == 0)
function WriteItems() {
    itemsOutputCache.forEach(function(element, index) {
        // sort first, codes might be unsorted due to async stuff
        element.sort();

        // implode + write
        if(index > 0) {
            Zotero.write("\n");
        }
        Zotero.write('application.activeWindow.command("e", false);\napplication.activeWindow.title.insertText("' + element.join("") + "\n");
    });
}
