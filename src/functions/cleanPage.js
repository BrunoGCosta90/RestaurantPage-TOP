const cleanPage = () => {
    const pageContent = document.getElementById('main');

    pageContent.querySelectorAll('*').forEach(item => item.remove());
}

export { cleanPage };