# Webovky – Taxi Koblížek

Samostatný návrh prezentačního webu pro www.taxikoblizek.cz. Není součástí
objednávkové aplikace na app.taxikoblizek.cz; na aplikaci vedou pouze odkazy.
Současný veřejný web na Webnode se tímto projektem nemění.

## Spuštění

Vyžaduje Node.js 22.12+ nebo 24+.

```sh
npm ci
npm run dev
```

`npm run build` vytvoří produkční soubory v `dist`. `npm run preview` je zpřístupní
pro místní kontrolu. Na Windows lze při omezení PowerShell skriptů použít `npm.cmd`.
`npm test` sestaví všechny stránky a ověří jejich obsah, odkazy a výstupní soubory.
Po prvním pushi do větve `main` workflow v `.github/workflows/deploy.yml` web automaticky
sestaví a nasadí na GitHub Pages. Pro tento repozitář bude adresa
`https://ravlmen.github.io/webov-stranka---taxi-Koblizek/`.

## Stav návrhu

- Aktuální vizuální směr: taxi žlutá, černá a bílá, výrazná kondenzovaná
  typografie, šachovnicové detaily a fotografie vozidel Taxi Koblížek.
- Responzivní úvod, služby, oblasti působení, ceník a telefonické kontakty.
- Úvodní stránka uvádí platbu kartou, platební bránou a hotově.
- Rozbalovací nabídky Služby a Ceník vedou na osm samostatných podstránek.
  Vite při sestavení vytváří každou jako vlastní HTML soubor v adresáři s
  `index.html`; přímé otevření i obnovení podstránky funguje na statickém hostingu.
  Obsah stránek je v `src/pages.js`, společná hlavička a úvod v `index.html`.
  Podstránky mají vlastní titulek, popis a hlavní nadpis.
- Karty, tlačítka a nabídky mají zaoblený styl inspirovaný aplikací;
  kód ani zdroje objednávkové aplikace se nepoužívají.
- Logo Taxi Koblížek je součástí hlavičky; jeho výřez má průhledné pozadí a je uložen v `public/logo-taxi-koblizek.png`.
- V úvodní části je video `public/taxi-koblizek-video.mp4`. Fotogalerie níže na
  stránce zatím obsahuje jednu fotografii `public/taxi-koblizek-auta.webp`.
  Další fotografie se přidávají jako prvky `.gallery-slide` v `index.html`;
  při více fotografiích se zapne přepínání s možností pozastavení. Nastavení
  omezeného pohybu vypne automatické přepínání.
- Samostatný náhled vlastního videa v sekci Příběh přes místní soubor MP4, WebM nebo MOV. Soubor se nikam
  neodesílá, není trvale uložen a po obnovení stránky zmizí. Podpora kodeků závisí
  na prohlížeči; doporučený formát je MP4/H.264.
- Žádná skutečná administrace, přihlášení ani serverové nahrávání zatím neexistují.
- Texty jsou návrhové a před zveřejněním je musí provozovatel schválit.
- Telefonní čísla a oblasti vycházejí ze současného veřejného webu.
- Ceníky obsahují sazby a podmínky dodané provozovatelem. Recenze a provozní
  doba se bez potvrzení provozovatelem nedoplňují.
- Google Fonts načítá písma Barlow Condensed a DM Sans; před ostrým provozem je vhodné
  přejít na místní fonty a schválit právní a kontaktní údaje.

## Další fáze

Schválit vizuální směr a případně dodat další fotografie,
ověřit texty a ceníky a navrhnout zabezpečenou správu obsahu s trvalým
úložištěm médií. Přepnutí domény a nasazení proběhne až po schválení.
