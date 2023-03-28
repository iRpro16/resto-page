const render = function() {
    const content = document.querySelector('#content');
    content.innerHTML = " ";
    while(content.children.length > 1) {
        content.children[1].remove();
    }
}

export default render;