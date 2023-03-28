const home = () => {
    const content = document.querySelector('#content');
    const pageContent = document.createElement('div');
    pageContent.id = 'pageContent';
    pageContent.innerHTML = 'hello'
    content.append(pageContent);
}

export default home;