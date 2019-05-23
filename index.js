const btn = document.querySelector('.button');
btn.addEventListener('mouseover', function(event){
  btn.style.backgroundColor = 'rgb(231, 34, 34)'
});
btn.addEventListener('mouseleave', function(event){
  btn.style.backgroundColor = 'rgb(255, 97, 97)'
})

const navButtons1 = document.querySelector("body > header > nav > div.nav-links > a:nth-child(1)")
navButtons1.addEventListener('mouseover', function(event){
  navButtons1.style.backgroundColor = '#60a8e5'
});
navButtons1.addEventListener('mouseleave', function(event){
  navButtons1.style.backgroundColor = '#666666'
});
const navButtons2 = document.querySelector("body > header > nav > div.nav-links > a:nth-child(2)")
navButtons2.addEventListener('mouseover', function(event){
  navButtons2.style.backgroundColor = '#60a8e5'
});
navButtons2.addEventListener('mouseleave', function(event){
  navButtons2.style.backgroundColor = '#666666'
});
const navButtons3 = document.querySelector("body > header > nav > div.nav-links > a:nth-child(3)")
navButtons3.addEventListener('mouseover', function(event){
  navButtons3.style.backgroundColor = '#60a8e5'
});
navButtons3.addEventListener('mouseleave', function(event){
  navButtons3.style.backgroundColor = '#666666'
});


