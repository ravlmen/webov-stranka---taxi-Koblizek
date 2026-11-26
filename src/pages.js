const appUrl = 'https://app.taxikoblizek.cz'
const contactAction = '<a class="button button-dark" href="/kontakt/">Domluvit jízdu ↗</a>'

export const pages = {
  '/sluzby/jizdy/': {
    title: 'Jízdy po městě a okolí',
    category: 'Služby',
    intro: 'Do práce, na nákup i za rodinou. Vaše každodenní cesty s místním Taxi Koblížek.',
    cards: [
      ['Po městě', 'Potřebujete se přesunout v rámci města? Zavolejte a domluvte si místo vyzvednutí i cíl.'],
      ['Po našem regionu', 'Jezdíme v okolí Třebechovic pod Orebem, Týniště nad Orlicí, Pohoří, Opočna a Dobrušky.'],
      ['Někam dál?', 'Pro delší trasu nás kontaktujte. Možnosti přepravy a cenu s vámi probereme předem.'],
    ],
    action: contactAction,
  },
  '/sluzby/odvoz-z-akci/': {
    title: 'Večer si užijte. Odvoz domluvte.',
    category: 'Služby',
    intro: 'Večeře, oslava nebo setkání s přáteli. Na cestu zpátky myslete včas a domluvte si s námi možnosti odvozu.',
    cards: [
      ['Ozvěte se předem', 'Sdělte nám místo, předpokládaný čas a počet cestujících. Ověříme dostupnost.'],
      ['Domluvte podrobnosti', 'Společně upřesníme místo vyzvednutí, cílovou adresu a cenu jízdy.'],
      ['S potvrzenou domluvou', 'Samotná návštěva webu není rezervací. Odvoz platí až po potvrzení domluvy s námi.'],
    ],
    action: contactAction,
  },
  '/sluzby/objednavka-online/': {
    title: 'Vaše taxi. Na pár kliknutí.',
    category: 'Služby',
    intro: 'Objednávkovou aplikaci otevřete přímo v prohlížeči svého telefonu. Prezentační web a aplikace jsou oddělené.',
    cards: [
      ['Otevřete aplikaci', 'Přejděte do aplikace Taxi Koblížek a přihlaste se nebo si vytvořte zákaznický účet.'],
      ['Vyberte trasu', 'Zadejte místo vyzvednutí a cíl. Cenu a dostupné možnosti zkontrolujte přímo v aplikaci.'],
      ['Sledujte potvrzení', 'Postupujte podle pokynů aplikace. Stav své objednávky uvidíte tamtéž.'],
    ],
    action: `<a class="button button-dark" href="${appUrl}">Otevřít objednávkovou aplikaci ↗</a>`,
  },
  '/cenik/napoje-a-cigarety/': {
    title: 'Ceník nápojů a cigaret',
    category: 'Dovoz',
    intro: 'Ceník platný od 1. 4. 2025. K ceně nápojů nebo cigaret se připočítává cena za dopravu dle aktuálního ceníku taxi služby. Alkohol a tabákové výrobky jsou určeny pouze osobám starším 18 let.',
    priceList: true,
    cards: [
      ['0,5 l Pivo 10 plech dle nabídky', '24 Kč'],
      ['0,5 l Pivo 12 plech dle nabídky', '29 Kč'],
      ['0,33 l Frisko dle nabídky', '28 Kč'],
      ['1 l Sklepmistr dle nabídky', '83 Kč'],
      ['0,75 l Rulandské modré Rosé Habánské sklepy', '129 Kč'],
      ['0,75 l Zweireltrebe rosé Habánské sklepy', '129 Kč'],
      ['0,75 l Veltlínské zelené Habánské sklepy', '129 Kč'],
      ['0,5 l Rum Božkov', '188 Kč'],
      ['0,5 l Vodka Božkov', '188 Kč'],
      ['1,5 l Coca cola', '42 Kč'],
      ['150 g Brambůrky dle nabídky', '28 Kč'],
    ],
    action: '<a class="button button-dark" href="/kontakt/">Kontaktovat nás ↗</a>',
  },
  '/o-nas/': {
    title: 'Místní taxi. Osobní přístup.',
    category: 'O nás',
    intro: 'Taxi Koblížek má k našemu kraji i lidem v něm blízko. Chceme, aby vaše cesta začala i skončila s úsměvem.',
    cards: [
      ['Doma v regionu', 'Třebechovice, Týniště, Pohoří, Opočno a Dobruška. Tady jsou naše domovské cesty.'],
      ['Jednoduchá domluva', 'Zavolejte nám, nebo využijte naši objednávkovou aplikaci. Zvolte si, co vám vyhovuje.'],
      ['Náš příběh doplníme', 'Na této stránce připravujeme osobní představení a skutečné fotografie. Video si zatím můžete vyzkoušet na úvodní stránce.'],
    ],
    action: '<a class="button button-dark" href="/#pribeh">Přejít k náhledu videa ↗</a>',
  },
  '/kontakt/': {
    title: 'Tak kam to bude?',
    category: 'Kontakt',
    intro: 'Vyberte si telefon podle své oblasti. Nebo přejděte do aplikace a objednejte jízdu online.',
    cards: [
      ['Třebechovice pod Orebem', '<a class="detail-phone" href="tel:+420777182346">777 182 346 ↗</a>'],
      ['Týniště nad Orlicí', '<a class="detail-phone" href="tel:+420777182346">777 182 346 ↗</a>'],
      ['Pohoří · Opočno · Dobruška', '<a class="detail-phone" href="tel:+420601182346">601 182 346 ↗</a>'],
    ],
    action: `<a class="button button-dark" href="${appUrl}">Objednat online ↗</a>`,
  },
}

const pricingCards = [
  ['Jízdné', '32 Kč za 1 km jízdy.'],
  ['Nástup', '80 Kč.'],
  ['Čekání', '480 Kč za hodinu.'],
  ['Půjčení podsedáku', 'Zdarma.'],
  ['Přistavení vozidla', 'V Třebechovicích pod Orebem a Pohoří zdarma. V Týništi nad Orlicí 150 Kč. Mimo tyto obce dle dohody.'],
  ['Delší cesty', 'Cesty k lékaři, na letiště a další delší trasy dle dohody.'],
]

for (const [slug, area, phone] of [
  ['trebechovice', 'Třebechovice pod Orebem', '777182346'],
  ['tyniste', 'Týniště nad Orlicí', '777182346'],
  ['opocno-dobruska', 'Pohoří · Opočno · Dobruška', '601182346'],
]) {
  pages[`/cenik/${slug}/`] = {
    title: area,
    category: 'Ceník',
    intro: `Ceník pro oblast ${area}. Konkrétní jízdu s námi můžete domluvit telefonicky.`,
    cards: pricingCards,
    action: `<a class="button button-dark" href="tel:+420${phone}">Zavolat ${phone.match(/.{3}/g).join(' ')} ↗</a>`,
  }
}

export function renderPage(html, pathname, base = '/') {
  const path = pathname.endsWith('/') ? pathname : `${pathname}/`
  const prefix = base === '/' ? '' : (base.endsWith('/') ? base.slice(0, -1) : base)
  const page = pages[path]
  let result = html.replaceAll(' aria-current="page"', '')
  if (page) {
    const content = `<main id="main-content"><section class="page-hero"><div class="section-shell"><div class="breadcrumbs"><a href="/">Úvod</a><span>/</span><span>${page.category}</span></div><p class="eyebrow">${page.category}</p><h1>${page.title}</h1><p class="page-intro">${page.intro}</p></div></section><section class="section-shell page-body"><div class="service-grid${page.priceList ? ' product-grid' : ''}">${page.cards.map(([title, text], index) => `<article class="service-card"><span class="service-number">${String(index + 1).padStart(2, '0')} / TAXI KOBLÍŽEK</span><h2>${title}</h2><p>${text}</p></article>`).join('')}</div><div class="page-actions">${page.action}<a class="text-link" href="/">Zpět na úvod ↗</a></div></section></main>`
    result = result.replace(/<main>[\s\S]*?<\/main>/, content)
      .replace(/<title>.*?<\/title>/, `<title>${page.title} — Taxi Koblížek</title>`)
      .replace(/(<meta name="description" content=")[^"]*"/, `$1${page.intro}"`)
  }
  result = result.replaceAll('href="#"', 'href="/"')
    .replaceAll('href="#kontakt"', 'href="/kontakt/"')
    .replaceAll('href="#region"', 'href="/sluzby/jizdy/"')
  result = result
    .replace('href="/kontakt/">Domluvit odvoz', 'href="/sluzby/odvoz-z-akci/">Domluvit odvoz')
    .replace(`href="${appUrl}">Otevřít aplikaci`, 'href="/sluzby/objednavka-online/">Jak objednat online')
  result = result.replace(/(<a href="([^"]+)")/g, (match, opening, href) => {
    return href === path || href === `${prefix}${path}` ? `${opening} aria-current="page"` : match
  })
  if (prefix) {
    result = result.replace(/(<a\b[^>]*\bhref=")(\/[^"]*)"/g, (match, opening, href) => {
      return href === prefix || href.startsWith(`${prefix}/`) ? match : `${opening}${prefix}${href}"`
    })
  }
  return result
}
