const getbox = document.querySelector(".box");

window.addEventListener("mousemove", _.debounce((evt) => {
    const x = evt.clientX;
    const y = evt.clientY;


    const boxWidth = getbox.offsetWidth / 2;
    const boxHeight = getbox.offsetHeight / 2;

    getbox.style.left = (x - boxWidth) + "px";
    getbox.style.top = (y - boxHeight) + "px";
}, 100));


