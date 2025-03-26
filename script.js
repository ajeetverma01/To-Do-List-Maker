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
        span.innerHTML = "\u00d7"; // Unicode for × (close)
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

listCont.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        Swal.fire({
            title: "Are you sure?",
            text: "This task will be deleted!",
            icon: "warning",
            showCancelButton: true,
            background: "#1e1e1e",
            color: "#fff",
            confirmButtonColor: "#ff477e",
            cancelButtonColor: "#555",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                e.target.parentElement.style.opacity = "0";
                setTimeout(() => {
                    e.target.parentElement.remove();
                    saveData();
                }, 300);
            }
        });
    }
}, false);

function saveData() {
    localStorage.setItem("data", listCont.innerHTML);
}

function showList() {
    listCont.innerHTML = localStorage.getItem("data");
}
showList();
