const homeLoad = () => {
    const description = document.createElement('div');

    description.textContent = "Welcome to The Cheese Bread!";
    description.id = "card";
    document.getElementById('main').appendChild(description);
}

export { homeLoad };