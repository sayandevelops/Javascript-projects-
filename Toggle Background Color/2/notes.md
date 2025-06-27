

📌 **Explanation**:

> `btn` bole ekta constant variable banachhi.
> Eta HTML page-er `id="tgl"` thaka button ke select korche.
> So, ei `btn` er upor click korle kichu action nite parbo.

---

```js
btn.addEventListener("click", () => {
```

📌 **Explanation**:

> Ei line bole: “Jokhon ei button-ta click hobe, tokhon niche je code ache seta run hobe.”
> Eta ekta **event listener** → click er upor function chalu hoy.

---

```js
document.body.style.backgroundColor =
    document.body.style.backgroundColor === "lightblue"
        ? "#f0f0f0"
        : "lightblue";
```

📌 **Explanation**:

1. `document.body.style.backgroundColor` → eta page-er body background color ke access korche.
2. Eta check korche:

```js
document.body.style.backgroundColor === "lightblue"
```

→ jodi background ekhon `lightblue` hoy,

3. Tahole change kore debe:

```js
"#f0f0f0" (light grey)
```

4. Ar jodi na hoy (mane `lightblue` na thake), tahole kore debe:

```js
"lightblue"`
```

🟡 Eta **ternary operator** diye color toggle korche.

---

### 🔁 Kolkata-Style Bengali Summary:

* Button ke select korlam by ID → `btn`
* Button-e click korle ekta function chalu hochhe
* Function ta check korche current background `lightblue` kina:

  * Jodi hoy → grey (#f0f0f0) kore dibe
  * Jodi na hoy → lightblue kore dibe
* Protibar click e alternately change hochhe background color

---

### 🧠 Tips to Remember:

* Ternary use → shortcut if-else
* background color check → string match diye hocche
* toggle logic → without variable, direct DOM check

---

Chaile ei code ta diye ekta `mini toggle theme` project baniye GitHub e push korte paro, with:

* `index.html`
* `script.js`
* `LEARNINGS.md` → explanation + what you learned

Bolo, template dorkar hole ekbar banai diye dichhi! ✅
