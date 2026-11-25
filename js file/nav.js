document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector("header");
    const menu = header && header.querySelector(".header-right");
    if (!header || !menu) return;

    if (!menu.id) menu.id = "site-nav";

    let btn = header.querySelector(".menu-toggle");
    if (!btn) {
        btn = document.createElement("button");
        btn.type = "button";
        btn.className = "menu-toggle";
        btn.setAttribute("aria-label", "Toggle menu");
        btn.setAttribute("aria-expanded", "false");
        btn.setAttribute("aria-controls", menu.id);
        btn.innerHTML = "<span></span><span></span><span></span>";
        header.insertBefore(btn, menu);
    }

    function setOpen(open) {
        menu.classList.toggle("open", open);
        btn.classList.toggle("open", open);
        btn.setAttribute("aria-expanded", String(open));
    }

    btn.addEventListener("click", function () {
        setOpen(!menu.classList.contains("open"));
    });

    // click sa labas = isara
    document.addEventListener("click", function (e) {
        if (!header.contains(e.target)) setOpen(false);
    });

    document.addEventListener("keydown", function (e) {
        if (e.key === "Escape") setOpen(false);
    });

    window.addEventListener("resize", function () {
        if (window.innerWidth > 1100) setOpen(false);
    });
});