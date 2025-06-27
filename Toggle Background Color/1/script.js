




let tgl = document.getElementById('tgl');
let isBlue = true;


tgl.addEventListener('click', () => {
    document.body.style.backgroundColor = isBlue ? "blue" : "yellow";

    isBlue = !isBlue;
    

})
