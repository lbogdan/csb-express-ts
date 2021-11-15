import express from 'express';

const app = express();
const port = process.env.PORT ? parseInt(process.env.PORT) : 3000;

app.get('/', (req, res) => {
  res.json({
    userAgent: req.headers['user-agent'],
    nodeVersion: process.version,
  });
});

app.listen(port, () => {
  console.log(`api listening on http://localhost:${port}/ ...`);
});
