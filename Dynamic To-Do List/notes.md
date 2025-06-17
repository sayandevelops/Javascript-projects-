# ✅ To-Do App JavaScript Notes

---
1️⃣ HTML Element Selection
JavaScript diye amra HTML theke elements select kori getElementById diye:

Input field: todoInput

Add button: addTodo

Task list (ul): todoList

Clear All button: clearAll

2️⃣ Add Task Button Click
Jokhon user Add button e click kore:

Input theke task er text ney .value.trim() kore (extra space remove kore)

Jodi task empty na hoy (mane kichu lekha thake):

LocalStorage theke ager task gula niye ashi (getTasks() function diye)

Notun task ke { text: taskText, completed: false } object hisebe oi list e add kori

Updated list ta abar localStorage e save kori (saveTasks() diye)

Task list abar UI te show kori renderTasks() diye

Input field ta clear kori (todoInput.value = '')

3️⃣ renderTasks() Function — UI te Task Gulo Show Kora
Ei function ta localStorage theke sob task niye UI te <li> hishebe show kore

Proti task er sathe:

Checkbox thake: jeta task complete hole checked thakbe

Task er text span e thakbe

Delete button thakbe, jeta click korle oi task delete hoye jabe

Jodi task completed hoy, tahole oi <li> er text line-through (underline na, strike-through) hoy

4️⃣ Checkbox Click Behavior
Checkbox jokhon click hoy:

Jodi checked hoy, task er text er upor line-through hoy

Checkbox unchecked hole line-through remove hoy (normal text hoy)

Tar sathe oi task er completed status update hoy localStorage e

5️⃣ Delete Button Functionality
Delete button click korle oi task array theke remove hoy (tasks.splice())

LocalStorage update hoy and abar list UI te render hoy renderTasks() diye

6️⃣ Clear All Button
Clear All button click korle:

LocalStorage theke todoTasks remove kore dei (localStorage.removeItem())

UI theke sob task remove kore dei (todoList.innerHTML = '')

7️⃣ Page Reload er Poro Task Thakbe
Browser reload korleo localStorage thakbe

Page reload hole renderTasks() call kore localStorage theke task gula read kore abar show kore


📌 Summary:
LocalStorage diye app ta persistent hoy

User je task add, complete, delete kore — sob localStorage e save hoy

Page reload korleo task gula thake

Checkbox diye task complete mark kora jai, jeta UI te strike-through diye dekhay

Clear All diye sob task ek sathe remove kora jai