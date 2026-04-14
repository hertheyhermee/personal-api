import express from 'express';

const app = express();

// Root endpoint
app.get('/', (req, res) => {
  res.status(200).json({
    message: "API is running"
  });
});

// Health endpoint
app.get('/health', (req, res) => {
  res.status(200).json({
    message: "healthy"
  });
});

// Me endpoint
app.get('/me', (req, res) => {
  res.status(200).json({
    name: "Azeez Tiamiyu",
    email: "tiamiyuhayzed@gmail.com",
    github: "https://github.com/hertheyhermee",
  });
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});