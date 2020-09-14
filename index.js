window.addEventListener("hashchange", () => {
    if (location.hash === "#project-section") {
        window.scrollBy(0, -50);
    }
})