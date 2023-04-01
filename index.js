const express = require('express');
const data = require('./templateData');
const createPDF = require('./pdfGenerator');

const PORT = 3000;
const app = express();

app.get('/ping', (req, res) => {
  res.send('pong');
});

app.get('/', async (req, res) => {
  const pdf = await createPDF(data);
  res.set({ 'Content-Type': 'application/pdf', 'Content-Length': pdf.length });
  res.send(pdf);
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
