document.addEventListener("DOMContentLoaded", function() {
    var menuItems = document.querySelectorAll(".menu a");

    menuItems.forEach(function(item) {
        item.addEventListener("mouseover", function() {
            this.style.transform = "scale(1.2)";
            this.style.color = "rgb(85, 104, 212)" ;
           
        });

        item.addEventListener("mouseout", function() {
            this.style.transform = "scale(1)";
            this.style.color = "";        
        });
    });
});

const image = document.querySelector(".my-photo img");

image.addEventListener('mouseover', function () {
  this.style.opacity = '0.77';
  this.style.color = "rgb(85, 104, 212)" ;
});

image.addEventListener('mouseout', function () {
  this.style.opacity = '0.9';
});



function detailedInformation() {
    document.getElementById("demo").innerHTML = `
      <p>- Performed manual UI and Backend tests</p>
      <p>- Made API manual tests with Postman and automation with Rest-Assured Library</p>
      <p>- Used GitHub as the version-control system for tracking changes and collaboration with teammates</p>
    `;
  }

  function detailedInformationTrans() {
    document.getElementById("demoTrans").innerHTML = `
      <p>- Accompanying people for translation and ensuring clear understanding of complex terminology</p>
      
    `;
  }







