const btn = document.getElementById("tgl");
         btn.addEventListener("click", () => {
             document.body.style.backgroundColor =
                document.body.style.backgroundColor === "lightblue"
                     ? "#f0f0f0"
                    : "lightblue";

         });