window.addEventListener('load', function () {
  setTimeout(function () {
    document.querySelector('.wrapper-loader').style.display = 'none';

    document.querySelector('.content').style.display = 'block';
    document.body.style.backgroundColor = 'white';
  }, 4000);
});
