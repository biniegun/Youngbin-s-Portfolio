'use strict';

//프로젝트 필터링 관련 로직 처리
const categories = document.querySelector('.categories')
const projects = document.querySelectorAll('.project');
categories.addEventListener('click', (event)=>{
const projectsContainer = document.querySelector('.projects');
const filter = event.target.dataset.category;
if(filter == null){
  return;
}
// active 메뉴를 재설정
const active = document.querySelector('.category--selected');
active.classList.remove('category--selected');
event.target.classList.add('category--selected');



//project 필터링
projectsContainer.classList.add('anim-out');
projects.forEach((project)=>{
console.log(project.dataset.type);
if(filter === 'all' || filter === project.dataset.type ){
  project.style.display ='block';

} else { project.style.display = 'none';

}

});

  setTimeout(()=>{
    projectsContainer.classList.remove('anim-out');
  }, 250);
});