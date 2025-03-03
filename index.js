const prev =  document.getElementById("previous");
const ne = document.getElementById("next");
const img = document.getElementById("img");

const [first, second, third] = ["./assets/img/MMA.png", "./assets/img/goa.jpeg", "./assets/img/goa2.jpeg"];

const previous = () => {
    img.src = first;
}

prev.onclick = previous;

const next = () => {
    img.src = second;
}

ne.onclick = next;

setTimeout(() => {
    img.src = second
}, 5000)

setTimeout(() => {
    img.src = third;
}, 1000)

setTimeout(() => {
    img.src = first;
}, 15000)