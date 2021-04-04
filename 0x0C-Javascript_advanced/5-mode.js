const changeMode = (size, weight, transform, background, color) => {
    document.body.style.fontSize = `${size}px`;
    document.body.style.weight = weight;
    document.body.style.transform = transform;
    document.body.style.background = background;
    document.body.style.color = color;
}

const main = () => {
    let spooky = (9, 'blod', 'uppercase', 'pink', 'green')
    let darkMode = changeMode(12, 'bold', 'capitalize', 'black', 'white');
    let screamMode = changeMode(12, 'normal', 'lowercase', 'white', 'black');

    let paragraph = document.createElement(p, [id='paragraph'])
    paragraph.innerHTML = 'Welcome Holberton';

    let btnSpooky = document.createElement(button, [id="btn-spooky"])
    btnSpooky.innerHTML = 'Spooky';

    let btnDark = document.createElement(button, [id="btn-dark"])
    btnDark.innerHTML = 'Dark mode';

    let btnScream = document.createElement(button, [id="btn-scream"])
    btnScream.innerHTML = 'Scream mode';
}

document.addEventListener("DOMContentLoaded", function(event) {
    main();
  })