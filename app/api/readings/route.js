import * as cheerio from 'cheerio';

export async function POST(req, res) {

  const { dateToFind } = await req.json();
  const url = `https://niezbednik.niedziela.pl/liturgia/${dateToFind}`;

  try {
    const response = await fetch(url);
    const html = await response.text();

    const $ = cheerio.load(html);

    const result = [];

    $('#elementyTabContent0 > .tab-pane:nth-child(1) > h2').each((i, h2Elem) => {
      const title = $(h2Elem).text();
    
      const h4Elem = $(h2Elem).next('h4');
      if (!h4Elem.length) return;
    
      const subtitle = h4Elem.text();
      const content = [];
    
      let nextElem = h4Elem.next();
      while (nextElem.length && nextElem[0].tagName !== 'h2') {
        if (nextElem[0].tagName === 'p') {
          content.push(nextElem.text());
        }
        nextElem = nextElem.next();
      }
    
      if (title && subtitle && content.length) {
        result.push({
          title,
          subtitle,
          content,
        });
      }
    });

    const year = $('#theme-main > .px-3 > article > h1')
    .text()
    .replace(/\s+/g, ' ')
    .trim()
    .split(';')
    .find(part => part.includes("Rok"))
    .trim();

    const day = $('#theme-main > .px-3 > article > .font-serif').text().replace(/\s+/g, ' ').trim();
    const color = $('#theme-main > .px-3 > article > .font-sans > span').text().replace(/\s+/g, ' ').trim();
    const date = $('#dzien h2').text().replace(/\s+/g, ' ').trim();
    const time = $('#dzien > div > div > div.col-md-9 > div > div.col-12.col-lg-5 > p.lh-sm.background-zwykly.px-2.py-1.mb-0.text-center.badge.fw-normal.fs-6').text().replace(/\s+/g, ' ').trim();

    return new Response(JSON.stringify({data: {readings: result, color: color, day: day, year: year, date: date, time: time}}), { status: 200 });

  } catch (error) {
    console.error('Błąd podczas pobierania danych:', error);
    return new Response(JSON.stringify({message: "Błąd podczas pobierania danych"}), { status: 500 });
  }
}
