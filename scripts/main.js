// scripts for all pages //


// burger animation //
var menuBtn = document.querySelector('.hamburger_button_class'); 
var popUpMenu = document.querySelector('.pop_up_menu');
var popUpContent = document.querySelector('.pop_up_menu_content');
var header = document.querySelector('.header');
var menuOpen = false;

var overlayButton = document.querySelector('#overlay_button');
var overlayMenu = document.querySelector('.pop_up_overlay');
var overlayContent = document.querySelector('.pop_up_overlay_content');
var overlayLink = document.querySelectorAll('.pop_up_overlay_link');

menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    popUpMenu.style.opacity = '1';
    popUpMenu.style.width = '100%';
    popUpMenu.style.zIndex = '2';
    header.style.backgroundColor = '#F3F1F2';
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    popUpMenu.style.opacity = '0';
    popUpMenu.style.width = '0%';
    popUpMenu.style.zIndex = '-2';
    overlayMenu.style.opacity = '0';
    overlayMenu.style.boxShadow = '0px 0px 21px 6px rgba(0,0,0,0.36)';
    overlayMenu.style.width = '0%';
    overlayMenu.style.zIndex = '-3';
    header.style.backgroundColor = 'white';
    menuOpen = false;
  }
});

overlayButton.addEventListener('click', function() {
    overlayContent.style.opacity = '1';
    overlayMenu.style.opacity = '1';
    overlayMenu.style.width = '35%';
    overlayMenu.style.zIndex = '3';
    popUpMenu.style.filter = 'blur(3px)';

    window.addEventListener('mouseup', function(event) {
      overlayMenu;
      if (event.target != overlayContent && event.target != overlayMenu) {
        overlayContent.style.opacity = '0';
        overlayMenu.style.opacity = '0';
        overlayMenu.style.width = '0%';
        overlayMenu.style.zIndex = '-3';
        popUpMenu.style.filter = 'blur(0px)';
        overlayMenu.style.transitionDuration = '0.8s';
      }
    })
})

// scripts for all pages END //

// scripts for home page //


var threeOptions1 = document.querySelector('.three_options_one');
var threeOptions2 = document.querySelector('.three_options_two');
var threeOptions3 = document.querySelector('.three_options_three');

threeOptions1.addEventListener('mouseover', function(){
  threeOptions1.style.backgroundColor = '#BD3738';
  threeOptions1.style.color = 'white';
  threeOptions1.style.cursor = 'pointer';
  threeOptions1.style.zIndex = '2';
  threeOptions1.style.transitionDuration = '0.7s';
});

threeOptions1.addEventListener('mouseleave', function() {
  threeOptions1.style.backgroundColor = 'white';
  threeOptions1.style.color = 'black';
  threeOptions1.style.zIndex = '0';
  threeOptions1.style.boxShadow = 'none';
  threeOptions1.style.transitionDuration = '0.7s';
});


threeOptions2.addEventListener('mouseover', function(){
  threeOptions2.style.backgroundColor = '#BD3738';
  threeOptions2.style.color = 'white';
  threeOptions2.style.cursor = 'pointer';
  threeOptions2.style.zIndex = '2';
  threeOptions2.style.transitionDuration = '0.7s';
});

threeOptions2.addEventListener('mouseleave', function() {
  threeOptions2.style.backgroundColor = 'white';
  threeOptions2.style.color = 'black';
  threeOptions2.style.zIndex = '0';
  threeOptions2.style.boxShadow = 'none';
  threeOptions2.style.transitionDuration = '0.7s';
});


threeOptions3.addEventListener('mouseover', function(){
  threeOptions3.style.backgroundColor = '#BD3738';
  threeOptions3.style.color = 'white';
  threeOptions3.style.cursor = 'pointer';
  threeOptions3.style.zIndex = '2';
  threeOptions3.style.transitionDuration = '0.7s';
});

threeOptions3.addEventListener('mouseleave', function() {
  threeOptions3.style.backgroundColor = 'white';
  threeOptions3.style.color = 'black';
  threeOptions3.style.zIndex = '0';
  threeOptions3.style.boxShadow = 'none';
  threeOptions3.style.transitionDuration = '0.7s';
});

var link1 = document.querySelector("#helpful_link1");
var link2 = document.querySelector("#helpful_link2");
var link3 = document.querySelector("#helpful_link3");
var link4 = document.querySelector("#helpful_link4");
var link5 = document.querySelector("#helpful_link5");
var link6 = document.querySelector("#helpful_link6");
var link7 = document.querySelector("#helpful_link7");

link1.addEventListener('mouseover', function() {
  this.style.backgroundColor = '#C8EAFD';
});

link1.addEventListener('mouseleave', function() {
  this.style.transitionDuration = '0.5s';
  this.style.backgroundColor = 'white';
})

link2.addEventListener('mouseover', function() {
  this.style.backgroundColor = '#C8EAFD';
});

link2.addEventListener('mouseleave', function() {
  this.style.transitionDuration = '0.5s';
  this.style.backgroundColor = 'white';
})

link3.addEventListener('mouseover', function() {
  this.style.backgroundColor = '#C8EAFD';
});

link3.addEventListener('mouseleave', function() {
  this.style.transitionDuration = '0.5s';
  this.style.backgroundColor = 'white';
})

link4.addEventListener('mouseover', function() {
  this.style.backgroundColor = '#C8EAFD';
});

link4.addEventListener('mouseleave', function() {
  this.style.transitionDuration = '0.5s';
  this.style.backgroundColor = 'white';
})

link5.addEventListener('mouseover', function() {
  this.style.backgroundColor = '#C8EAFD';
});

link5.addEventListener('mouseleave', function() {
  this.style.transitionDuration = '0.5s';
  this.style.backgroundColor = 'white';
})

link6.addEventListener('mouseover', function() {
  this.style.backgroundColor = '#C8EAFD';
});

link6.addEventListener('mouseleave', function() {
  this.style.transitionDuration = '0.5s';
  this.style.backgroundColor = 'white';
})

link7.addEventListener('mouseover', function() {
  this.style.backgroundColor = '#C8EAFD';
});

link7.addEventListener('mouseleave', function() {
  this.style.transitionDuration = '0.5s';
  this.style.backgroundColor = 'white';
})
// scripts for home page end //


/* home box cards */ 

var home_box1 = document.querySelector('.home_box1')
var home_box2 = document.querySelector('.home_box2')
var home_box3 = document.querySelector('.home_box3')
var home_open_hover = document.querySelector('.home_open_hover')
var home_box_additional_info1 = document.querySelector('.home_box_additional_info1')
var home_box_additional_info = document.querySelector('.home_box_additional_info')
var home_box_additional_info3 = document.querySelector('.home_box_additional_info3')
var home_box_additional_info4 = document.querySelector('.home_box_additional_info4')

home_box1.addEventListener('click',function(){
  home_box_additional_info1.style.display = 'block';
  home_box_additional_info1.style.position = 'fixed';
  home_box_additional_info1.style.width = '80%';
  home_box_additional_info1.style.height = '60%';
  home_box_additional_info1.style.top = '0';
  home_box_additional_info1.style.left = '0';
  home_box_additional_info1.style.right = '0';
  home_box_additional_info1.style.bottom = '0';
  home_box_additional_info1.style.margin = 'auto';
  home_box_additional_info1.style.zIndex = '3';
})


home_box1.addEventListener('mouseleave',function(){
  home_box_additional_info1.style.display = 'none';
})

home_box2.addEventListener('click', function(){
  home_box_additional_info.style.display = 'block';
  home_box_additional_info.style.position = 'fixed';
  home_box_additional_info.style.width = '80%';
  home_box_additional_info.style.maxHeight = '80%';
  home_box_additional_info.style.overflow = 'scroll';
  home_box_additional_info.style.top = '0';
  home_box_additional_info.style.left = '0';
  home_box_additional_info.style.right = '0';
  home_box_additional_info.style.bottom = '0';
  home_box_additional_info.style.margin = 'auto';
  home_box_additional_info.style.zIndex = '3';
  home_box_additional_info.style.border = '1px solid black';
  home_box_additional_info.style.backgroundColor = 'white';
  home_box_additional_info.style.transition = 'all 2s'
})

home_box2.addEventListener('mouseleave',function(){
  home_box_additional_info.style.display = 'none';
  home_box_additional_info.style.transition = 'all 2s'
})

home_box3.addEventListener('click', function(){
  home_box_additional_info3.style.display = 'block';
  home_box_additional_info3.style.position = 'fixed';
  home_box_additional_info3.style.width = '80%';
  home_box_additional_info3.style.height = '70%';
  home_box_additional_info3.style.top = '0';
  home_box_additional_info3.style.left = '0';
  home_box_additional_info3.style.right = '0';
  home_box_additional_info3.style.margin = 'auto';
  home_box_additional_info3.style.zIndex = '3';
})

home_box3.addEventListener('mouseleave',function(){
  home_box_additional_info3.style.display = 'none';
})

home_box4.addEventListener('click', function(){
  home_box_additional_info4.style.display = 'block';
  home_box_additional_info4.style.position = 'fixed';
  home_box_additional_info4.style.width = '80%';
  home_box_additional_info4.style.maxHeight = '80%';
  home_box_additional_info4.style.overflow = 'scroll';
  home_box_additional_info4.style.top = '0';
  home_box_additional_info4.style.left = '0';
  home_box_additional_info4.style.right = '0';
  home_box_additional_info4.style.bottom = '0';
  home_box_additional_info4.style.margin = 'auto';
  home_box_additional_info4.style.zIndex = '3';
  home_box_additional_info4.style.border = '1px solid black';
  home_box_additional_info4.style.backgroundColor = 'white';
  home_box_additional_info4.style.transition = 'all 2s'

})

home_box4.addEventListener('mouseleave',function(){
  home_box_additional_info4.style.display = 'none';
  home_box_additional_info4.style.transition = 'all 2s'
})

