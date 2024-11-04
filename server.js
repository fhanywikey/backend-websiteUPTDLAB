const express = require('express');
const mysql = require('mysql');
const cors = require('cors'); // menambahkan CORS agar bisa akses dari frontend
const app = express();
const port = 3002;

// Aktifkan CORS untuk mengizinkan permintaan dari browser
app.use(cors());

// Koneksi ke database MySQL
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'db_uptd'
}); 

connection.connect(err => {
  if (err) throw err;
  console.log('Terhubung ke database MySQL!');
});

// Route untuk mengambil data struktur berdasarkan ID
app.get('/struktur/:id', (req, res) => {
  const id = req.params.id;
  const query = 'SELECT * FROM table_struktur WHERE id = ?';
  
  connection.query(query, [id], (err, result) => {
    if (err) throw err;
    res.json(result[0]); // Mengirim data struktur dari hasil sebagai JSON
  });
});

// Route untuk mengambil data alat alat berdasarkan ID
app.get('/alatalat/:id', (req, res) => {
  const id = req.params.id;
  const query = 'SELECT * FROM alat_laboratorium WHERE id = ?';
  
  connection.query(query, [id], (err, result) => {
    if (err) throw err;
    res.json(result[0]); // Mengirim data alat alat dari hasil sebagai JSON
  });
});


app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
