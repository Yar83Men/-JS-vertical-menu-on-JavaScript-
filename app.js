function openNav() {
    document.getElementById("mySidenav").style.width = "200px";
    document.getElementById("main").style.marginLeft = "200px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
  }
  
  let a = document.querySelectorAll(".content");
 
  for (let i = 0; i < a.length; i++) {
    a[i].addEventListener('click', function (event) {
      event.preventDefault()
      let blockID = a[i].getAttribute('href');
      document.querySelector(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  }