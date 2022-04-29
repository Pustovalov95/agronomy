"Use strict";

const     menu = document.querySelector('.main-page__menu'),
          menuArr = document.querySelectorAll('.main-page__menu-item'),
          homePage = document.querySelector('.main-page__content'),
          eventPage = document.querySelector('.main-page__events'),
          dbPage = document.querySelector('.main-page__db'),
          errorPage = document.querySelector('.main-page__error'),
          svg = document.querySelectorAll('.fill'),
          humb = document.querySelector('.humburger');

function changeContent() {
  for (let i = 0; i < menuArr.length; i++) {
    menuArr[i].addEventListener('click', () => {
      if (i === 0) {
        if(menuArr[i].classList.contains("active-top") && homePage.classList.contains("active")) {
          eventPage.classList.remove("active");
          dbPage.classList.remove("active");
          errorPage.classList.remove("active");
          
        } else {
          menuArr[i].classList.add("active-top");
          homePage.classList.add("active");
          eventPage.classList.remove("active");
          dbPage.classList.remove("active");
          errorPage.classList.remove("active");
          menuArr[1].classList.remove("active-top");
          for (let k = 2; k < menuArr.length; k++) {
            menuArr[k].classList.remove("active");
          }
        }
      } else if (i == 1) {
        if(menuArr[i].classList.contains("active-top") && errorPage.classList.contains("active")) {
          homePage.classList.remove("active");
          eventPage.classList.remove("active");
          dbPage.classList.remove("active");
          errorPage.classList.add("active");
        } else {
          menuArr[i].classList.add("active-top");
          menuArr[0].classList.remove("active-top");
          errorPage.classList.add("active");
          homePage.classList.remove("active");
          eventPage.classList.remove("active");
          dbPage.classList.remove("active");
          for (let k = 2; k < menuArr.length; k++) {
            menuArr[k].classList.remove("active");
          }

        }
      }
        else if (i == 2) {
          if(menuArr[i].classList.contains("active") && eventPage.classList.contains("active")) {
            homePage.classList.remove("active");
            eventPage.classList.add("active");
            dbPage.classList.remove("active");
            errorPage.classList.remove("active");
          } else {
            menuArr[i].classList.add("active");
            menuArr[0].classList.remove("active-top");
            menuArr[1].classList.remove("active-top");
            errorPage.classList.remove("active");
            homePage.classList.remove("active");
            eventPage.classList.add("active");
            dbPage.classList.remove("active");
            for (let k = 2; k < menuArr.length; k++) {
              if (k != i) {
                menuArr[k].classList.remove("active");
              }
            }
          }
      } else if (i == 8) {
        if(menuArr[i].classList.contains("active") && dbPage.classList.contains("active")) {
          homePage.classList.remove("active");
          eventPage.classList.remove("active");
          dbPage.classList.add("active");
          errorPage.classList.remove("active");
        } else {
          menuArr[i].classList.add("active");
          menuArr[0].classList.remove("active-top");
          errorPage.classList.remove("active");
          homePage.classList.remove("active");
          eventPage.classList.remove("active");
          dbPage.classList.add("active");
          for (let k = 2; k < menuArr.length; k++) {
            if (k != i) {
              menuArr[k].classList.remove("active");
            }
          }

        }
      } else {
        menuArr[i].classList.add("active");
        homePage.classList.remove("active");
        eventPage.classList.remove("active");
        errorPage.classList.add("active");
        dbPage.classList.remove("active");
        for (let k = 2; k < menuArr.length; k++) {
          if (k != i) {
            menuArr[k].classList.remove("active");
          }
        }
      }
    });
  }  
  
}
changeContent();
humb.addEventListener('click', () => {
  humb.classList.toggle('humburger__active');
  if(humb.classList.contains("humburger__active")) {
    menu.style.width = '250px';
    menu.style.overflow = 'scroll';
    homePage.style.overflow = 'hidden';
    eventPage.style.overflow = 'hidden';
    dbPage.style.overflow = 'hidden';
    errorPage.style.overflow = 'hidden';
    for (let i = 0; i < menuArr.length; i++) {
      menuArr[i].style.display = 'block';
    }
    
  } else {
    menu.style.width = '50px';
    menu.style.overflow = 'hidden';
    homePage.style.overflow = 'scroll';
    eventPage.style.overflow = 'scroll';
    dbPage.style.overflow = 'scroll';
    errorPage.style.overflow = 'scroll';
    for (let i = 0; i < menuArr.length; i++) {
      menuArr[i].style.display = 'none';
    }
  }
});
