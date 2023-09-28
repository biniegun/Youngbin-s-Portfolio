'use strict';
// header에 페이지 아래로 스크롤 시 다크 스타일링 적용
const header = document.querySelector('.header');
const headerHeight = header.offsetHeight;
document.addEventListener('scroll', () => {
  // 스크롤되는 y 좌표가 headerHeight보다 크다면 다른 스타일링!
  // console.log(window.scrollY);

  if(window.scrollY > headerHeight) {
    header.classList.add('header--dark');
  } else {header.classList.remove('header--dark')};
});



// home 에 페이지 아래로 스크롤 시 opacity값 적용
const home = document.querySelector('.home__container');
const homeHeight = home.offsetHeight;
document.addEventListener('scroll', ()=> {
  home.style.opacity = 1 - window.scrollY / homeHeight;

});

// 페이지 아래로 스크롤 시 화살표 나타내기
const arrowUp = document.querySelector('.arrow-up');
document.addEventListener('scroll', () => {
  if(window.scrollY > homeHeight / 2 ) {
    arrowUp.style.opacity = 1;
  } else {
      arrowUp.style.opacity = 0;
    }
});


// nav바 토글 처리
const navbarMenu = document.querySelector('.header__menu');
const navbarToggle = document.querySelector('.header__toggle');
navbarToggle.addEventListener('click',() => {
  navbarMenu.classList.toggle('open');
});

// nav바 메뉴 클릭 시, 메뉴를 자동으로 닫아줌
navbarMenu.addEventListener('click',() => {
  navbarMenu.classList.remove('open');
});