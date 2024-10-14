let counter = 0;
document.getElementById('counter').innerText = counter;

const incrementFunction = () => {
    counter++;
    document.getElementById('counter').innerText = counter;
};

const decrementFunction = () => {
    counter--;
    document.getElementById('counter').innerText = counter;
};


