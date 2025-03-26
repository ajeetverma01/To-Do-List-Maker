const inputBox = document.getElementById("input-box");
const listCont = document.getElementById("list-cont");

function AddTask() {
    if (inputBox.value.trim() === '') {
        Swal.fire({
            title: "Oops!",
            text: "Enter a task before adding!",
            icon: "warning",
            background: "#1e1e1e",
            color: "#fff",
            confirmButtonColor: "#ff477e"
        });
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;

        li.style.opacity = "0";
        listCont.appendChild(li);
        setTimeout(() => li.style.opacity = "1", 100);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}
