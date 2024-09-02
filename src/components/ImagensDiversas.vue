<template>
    <div class="imagens-diversas">
      <h1>Imagens Diversas</h1>
      <div class="images-container">
        <img
          v-for="(image, index) in images"
          :key="index"
          :src="image.src"
          :alt="image.alt"
          class="diversas-imagens"
        />
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ImagensDiversas',
    data() {
      return {
        // Lista de imagens com caminho e descrição
        images: [
          { src: require('@/assets/image1.jpg'), alt: 'Imagem 1' },
          { src: require('@/assets/image2.jpeg'), alt: 'Imagem 2' },
          { src: require('@/assets/image3.webp'), alt: 'Imagem 3' },
          { src: require('@/assets/image4.webp'), alt: 'Imagem 4' },
          { src: require('@/assets/image5.jpg'), alt: 'Imagem 5' }
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  .images-container {
    text-align: center;
  }
  
  .images-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  
  .diversas-imagens {
    margin: 10px;
    width: 200px; /* Ajuste o tamanho conforme necessário */
    height: auto;
    border: 2px solid #ddd;
    border-radius: 8px;
    transition: transform 0.3s ease;
  }
  
  .diversas-imagens:hover {
    transform: scale(1.05);
  }
  </style>