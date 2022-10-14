const swapStyle = (name) => {

    const header = document.getElementById('header');
    header.querySelectorAll('*').forEach(button => {
        if (button.id == name){
            button.classList.add('selected');
        } else {
            button.classList.remove('selected');
        }
    })
    
}

export { swapStyle };