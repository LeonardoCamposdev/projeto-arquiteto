import outsideClick from "./outsideClick.js";
export default function initMenuMobile() {
  const buttonMenu = document.querySelector('[data-menu="button"]');
  const menuList = document.querySelector('[data-menu="list"]');
  const events = ["click"];

  function handleClick() {
    buttonMenu.classList.add("active");
    menuList.classList.add("active");

    outsideClick(this, events, () => {
      buttonMenu.classList.remove("active");
      menuList.classList.remove("active");
    });
  }

  buttonMenu.addEventListener("click", handleClick);
  menuList.addEventListener("click", handleClick);
}
