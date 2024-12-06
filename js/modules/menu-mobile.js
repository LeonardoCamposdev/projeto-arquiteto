export default function initMenuMobile(){
  const buttonMenu = document.querySelector('[data-menu="button"]');
  const menuList = document.querySelector('[data-menu="list"]');
  const html = document.querySelector('body');
  
  function handleClick(){
    buttonMenu.classList.toggle('active');
    menuList.classList.toggle('active');
  }
  
  buttonMenu.addEventListener('click',handleClick);
  menuList.addEventListener('click',handleClick);
}

