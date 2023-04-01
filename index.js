const express = require('express');
const data = require('./templateData');
const createPDF = require('./pdfGenerator');
const app = express();

const PORT = 3000;

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
