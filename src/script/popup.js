// проверяем размер экрана, чтобы не закрывать бургер на экранах > 1366px
const screenWidth = window.screen.width
// селекторы бургер меню
const burger = document.querySelector('.burger');
const openBurgerBtn = document.getElementById('open-burger')
const closeBurgerBtn = document.getElementById('close-burger')
// селекторы меню для заказа звонка
const phone = document.getElementById('phone')
const openPhoneBurgerBtn = document.getElementById('open-phone-burger')
const closePhoneBtn = document.getElementById('close-phone')
const openPhone = document.getElementById('open-phone')
// селекторы меню обратной связи
const chat = document.getElementById('chat')
const openChatBurgerBtn = document.getElementById('open-chat-burger')
const closeChatBtn = document.getElementById('close-chat')
const openChat = document.getElementById('open-chat')

// функции закрытия и открытия 
const openMenu = (menu) => {
  menu.style = "display: flex";
}
const closeMenu = (menu) => {
  menu.style = "display: none";
}

// слушатели бургера
burger.addEventListener('click', (e) => {
  if (e.target === burger)
    closeMenu(burger)
});
openBurgerBtn.addEventListener('click', () => openMenu(burger));
closeBurgerBtn.addEventListener('click', () => closeMenu(burger));

// слушатели обратной связи
chat.addEventListener('click', (e) => {
  if (e.target === chat)
    closeMenu(chat)
});
openChatBurgerBtn.addEventListener('click', () => {
  openMenu(chat)
  if (screenWidth < 1366) {
    closeMenu(burger)
  }
});
openChat.addEventListener('click', () => openMenu(chat));
closeChatBtn.addEventListener('click', () => closeMenu(chat));

// слушатели для заказа звонка
phone.addEventListener('click', (e) => {
  if (e.target === phone)
    closeMenu(phone)
});
openPhoneBurgerBtn.addEventListener('click', () => {
  openMenu(phone)
  if (screenWidth < 1366) {
    closeMenu(burger)
  }
});
openPhone.addEventListener('click', () => openMenu(phone));
closePhoneBtn.addEventListener('click', () => closeMenu(phone));