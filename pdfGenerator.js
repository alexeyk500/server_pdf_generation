const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer');
const handlebars = require('handlebars');

const createPDF = async (data) => {
  try {
    const htmlFile = fs.readFileSync(path.join(__dirname, 'template.html'), { encoding: 'utf8' });
    const template = handlebars.compile(htmlFile);
    const html = template(data);

    const browser = await puppeteer.launch({headless: true,});
    const page = await browser.newPage();
    await page.setContent(html, { waitUntil: 'domcontentloaded' });

    const pdfBuffer = await page.pdf({ format: 'A4', printBackground: true });
    await browser.close();
    return pdfBuffer;
  } catch (e) {
    console.log(e);
  }
};

module.exports = createPDF;
