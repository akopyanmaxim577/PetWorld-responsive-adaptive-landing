document.querySelector('.click-for-video').onclick = function() {
    this.style.display = 'none';
    document.querySelector('div.youtube').style.display = 'block';
    document.querySelector('iframe.youtube2')
    .src="https://www.youtube.com/embed/BdIiS3vURWA";
  };