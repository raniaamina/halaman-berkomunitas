# Berkomunitas

Halaman ini dibuat untuk membantu rekan-rekan yang berkomunitas (terutama yang berkaitan dengan Free Open Source Software) secara daring.

## Ikut Menulis Topik

Punya topik menarik untuk ditambahkan? Silakan turut berkontribusi dengan menulis topik terkait best practice dalam berkomunitas secara daring.

Pertama, silakan buat berkas markdown (*.md) pada direktori contents dengan struktur konten seperti ini;

```
---
title: "<Judul Topik>"
author: "<Nama Anda>"
link: "<url profile>"
---

Tulisan Anda di sini
```

Sangat disarankan untuk menghindari penggunaan spasi pada nama berkas markdown.
Selanjutnya, agar tulisan masuk dalam list halaman depan, silakan tambahkan data terkait postingan tersebut pada berkas `contents/topics.json` dengan format sebagai berikut;

Untuk mengecek apakah tulisan sudah termuat dengan baik, kamu dapat menggunakan http.server ringkas misalnya dari paket python;

```bash
python -m http.server 3000 --bind 127.0.0.1
```

``` json
{
  "...": "topik sebelumnya"
},
{
    "title": "<Judul Topik>",
    "author": "<Nama Anda>",
    "mdFile": "<nama-file-md>"
  }
```

## Stack
Halaman ini sengaja dibuat dengan tech-stack seminimal mungkin (html, css, dan js). Pun demikian, sebisa mungkin tetep didesain agar tetap mudah digunakan terutama bagi rekan-rekan yang ingin turut menyumbang topik. 

## Sangkalan
Setiap topik yang diterbitkan tentu saja merupakan tanggung jawab dari penulis. 
