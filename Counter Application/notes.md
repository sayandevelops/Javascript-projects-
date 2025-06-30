1.  
let count = 0;    /// i craeted a variable and set the value default 0
2. increase.addEventListener('click', () => 
    count++, 
// when we click the button everyclick return a = value count 

count ++  thats mean = count = count + 1

if the count value is  0 then after click the button the count value will be 1
then 2 , 3 ,4 ....


next 

3.  ****Difference between innerHTML vs innerText:**

You are updating a number (count), so both work — but **innerText** is better and safer here.

innerHTML can interpret and render HTML tags.
If you accidentally or unknowingly insert user-generated input, it can run scripts → security risk.
✅ 3. Avoids bugs from HTML tags
If someone accidentally puts something like:


count = "<b>100</b>";
display.innerHTML = count; // will show bold text
But with:

display.innerText = count; // shows: <b>100</b> (as plain text)
No rendering confusion — safe and predictable.

🔚 Conclusion:
Use **innerText** when:

You are displaying only text (like numbers, names, etc.)

You want it to be safe, fast, and clean.

Use **innerHTML** only when you need to insert or manipulate HTML elements/tags.


 4. if (count > 0) {
        count--,

            display.innerText = count
    } else {
        count = 0,

           display.innerText = count
    }



    count er value jodi 0 thake besi thake tahole if run korbe nahole 
    else return korbe 
    