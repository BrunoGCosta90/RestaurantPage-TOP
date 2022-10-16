const contactLoad = () => {
    const pageContent = document.getElementById('main');

    const contactPhone = document.createElement('div');
    contactPhone.classList.add('card');
    const phoneTitle = document.createElement('p');
    phoneTitle.textContent = 'Phone';
    phoneTitle.classList.add('title');
    const phoneNumber = document.createElement('p');
    phoneNumber.textContent = '555 5555 555';
    phoneNumber.classList.add('centered');
    contactPhone.appendChild(phoneTitle);
    contactPhone.appendChild(phoneNumber);

    pageContent.appendChild(contactPhone);

    const contactLocation = document.createElement('div');
    contactLocation.classList.add('card');
    const locationTitle = document.createElement('p');
    locationTitle.textContent = 'Adress';
    locationTitle.classList.add('title');
    const locationAdress = document.createElement('p');
    locationAdress.textContent = '31 Cheese Asphalt Ave\r\nCheeseland, CC 55555';
    locationAdress.style.whiteSpace = 'pre';
    locationAdress.classList.add('centered');
    contactLocation.appendChild(locationTitle);
    contactLocation.appendChild(locationAdress);

    pageContent.appendChild(contactLocation);
}

export { contactLoad };