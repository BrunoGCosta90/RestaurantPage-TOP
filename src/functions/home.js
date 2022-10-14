//import CardBackground from './free-cheese-seamless-vector.jpg';

const homeLoad = () => {
    const homeButton = document.getElementById('home-button');
    homeButton.classList.add('selected');

    const title = document.createElement('div');
    title.textContent = "Welcome to The Cheese Bun!";
    title.classList.add('title', 'card');
    document.getElementById('main').appendChild(title);

    const description = document.createElement('div');
    const descriptionTitle = document.createElement('p');
    const descriptionText = document.createElement('p');
    descriptionTitle.textContent = "This is the home to the best cheese buns of the whole world!"
    descriptionTitle.classList.add('title');
    description.appendChild(descriptionTitle);
    descriptionText.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vel risus commodo viverra maecenas accumsan lacus. Auctor eu augue ut lectus arcu bibendum at varius. Faucibus nisl tincidunt eget nullam non. Nunc mattis enim ut tellus elementum sagittis vitae. Dictum fusce ut placerat orci nulla pellentesque dignissim. Eu ultrices vitae auctor eu augue ut.";
    description.classList.add('card');
    description.appendChild(descriptionText);
    document.getElementById('main').appendChild(description);

}

export { homeLoad };