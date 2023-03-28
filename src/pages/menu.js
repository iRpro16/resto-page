const menu = () => {
    const content = document.querySelector('#content');
    const menuContent = document.createElement('div');
    menuContent.id = 'menuContent';
    menuContent.innerHTML = 'Andrew';
    content.appendChild(menuContent);
}

export default menu;