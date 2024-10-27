export default function initMenuMobile(){

}

const buttonMenu = document.querySelector('[data-menu="button"]');
const menuList = document.querySelector('[data-menu="list"]');

function handleClick(){
  menuList.classList.add('active');
}

buttonMenu.addEventListener('click',handleClick);