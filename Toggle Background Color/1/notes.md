✅ Code:
js
Copy
Edit
let tgl = document.getElementById('tgl');
📌 Explanation (Kolkata-style Bengali):

tgl bole ekta variable banachhi.
document.getElementById('tgl') diye HTML page theke id="tgl" thaka button ta ke select korchhi.
Ei button-er upor click korle kichu action hobe.

js
Copy
Edit
let isBlue = true;
📌 Explanation:

isBlue bole ekta boolean variable nilam — value holo true.
Eta diye bujhte parbo je background colour ekhon blue ache kina.

js
Copy
Edit
tgl.addEventListener('click', () => {
📌 Explanation:

Button-er click-er jonno ekta listener add korchhi.
Mane, ei line bolchhe: “Jokhon button-ta click hobe, tokhon niche je function ta ache seta run hobe.”

js
Copy
Edit
    document.body.style.backgroundColor = isBlue ? "blue" : "yellow";
📌 Explanation:

Ekhane ternary operator use kora hoyeche.
isBlue jodi true hoy, tahole background hobe "blue",
na hole hobe "yellow".

document.body.style.backgroundColor diye page-er background-er colour change kora hocche.

js
Copy
Edit
    isBlue = !isBlue;
📌 Explanation:

Ei line isBlue er value-ta ulte diche:

Jodi true thake → false hoye jacche

Jodi false thake → true hoye jacche

Eitar jonnoi toggle system ta kaj korche — bar bar click korle blue theke yellow, abar yellow theke blue.

