(function(){
  var img,i,j,figs,caps,out
      figs = document.getElementsByTagName('figure'),
      heads = document.getElementsByTagName('h2'),
      intro = document.getElementById('intro'),
      n = document.createElement('nav');
      n.setAttribute('id','sectionnav');

  /* Add ARIA extensions to the Figures*/
  for(i=0,j=figs.length;i<j;i++){
    caps = figs[i].getElementsByTagName('figcaption');
    if(caps.length === 1){
      img = figs[i].getElementsByTagName('img')[0];
      img.setAttribute('aria-describedby','figurecap'+i);
      caps[0].setAttribute('id','figurecap'+i);
    }
  }
  /* Create <nav> from headings */
  intro.appendChild(n);
  out = '<ul>';
  for(i=0,j=heads.length;i<j;i++){
    heads[i].setAttribute('id','header'+i)
    out += '<li><a href="#header'+i+'">'+heads[i].innerHTML+'</a></li>';
  }
  out += '</ul>';
  n.innerHTML = out;
})();