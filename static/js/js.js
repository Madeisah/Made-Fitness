const dropdownBtns = document.querySelectorAll(".dropdown-btn");

dropdownBtns.forEach(btn => {
    btn.addEventListener("click", function() {
        const dropdownContent = this.nextElementSibling;

        if (dropdownContent.style.display === "block") {
            dropdownContent.style.display = "none";
            this.querySelector('i.uil-angle-down').classList.remove('rotate');
        } else
            dropdownContent.style.display = "block";
            this.querySelector('i.uil-angle-down').classList.add('rotate');
    });
});
