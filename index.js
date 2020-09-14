window.addEventListener("hashchange", () => {
    if (location.hash === "#project-section") {
        window.scrollBy(0, -50);
    }
});

const openLink = (link) => {
    window.open(`http://${link}`, '_target');
};