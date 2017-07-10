(function(){
  function fz(){
    var width = window.screen.width;
    var html = document.getElementsByTagName('html')[0];
    html.setAttribute('style','font-size:'+(width/10)+'px');
    console.log('123')
  }

  fz();

  window.addEventListener('resize',fz);
  window.addEventListener('orientation',fz);
})()
