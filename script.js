document.addEventListener('DOMContentLoaded', () => {
  const artistsData = [
    { name: 'Henrique & Juliano', image: './img/artista-henrique-juliano.jpg' },
    { name: 'Racionais', image: './img/album-racionais.jpg' },
    { name: 'Jorge & Mateus', image: './img/artista-jorge-mateus.jpg' },
    { name: 'Zé Neto & Cristiano', image: './img/artista-ze-neto.jpg' },
    { name: 'Gusttavo Lima', image: './img/artista-gustavo-limma.jpg' },
    { name: 'Luan Santana', image: './img/artista-luan-santana.jpg' },
    { name: 'Matheus & Kauan', image: './img/artista-mateus-kauan.jpg' }
  ];

  const albumsData = [
    { name: 'White Noise (Sleep & Relaxation Sounds)', artist: 'Sleepy John', image: './img/album-white-noise.jpg' },
    { name: 'O Céu Explica Tudo (Ao Vivo)', artist: 'Henrique & Juliano', image: './img/album-ceu-explica.jpg' },
    { name: 'Nada como um dia após o outro', artist: 'Racionais', image: './img/album-vida-loka.jpg' },
    { name: 'CAJU', artist: 'Linker', image: './img/album-caju.jpg' },
    { name: 'Escândalo Íntimo', artist: 'Luísa Sonza', image: './img/album-escandalo.jpg' }
  ];

  const artistGrid = document.getElementById('artist-grid');
  const albumGrid = document.querySelector('.album-grid');

  artistsData.forEach(artist => {
    const artistCard = document.createElement('article');
    artistCard.classList.add('artist-card');
    artistCard.innerHTML = `
      <img src="${artist.image}" alt="Foto de ${artist.name}" onerror="this.src='./img/default-artist.jpg';">
      <h3>${artist.name}</h3>
      <p>Artista</p>
    `;
    artistGrid.appendChild(artistCard);
  });

  albumsData.forEach(album => {
    const albumCard = document.createElement('article');
    albumCard.classList.add('album-card');
    albumCard.innerHTML = `
      <img src="${album.image}" alt="Capa do álbum ${album.name}" onerror="this.src='./img/default-album.jpg';">
      <h3>${album.name}</h3>
      <p>Álbum</p>
      <p>Artista: ${album.artist}</p>
    `;
    albumGrid.appendChild(albumCard);
  });
});
