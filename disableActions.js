
document.addEventListener('contextmenu', function (event) {
    event.preventDefault();
});

document.addEventListener('keydown', function (event) {
    if (
        (event.ctrlKey && event.key.toLowerCase() === 'p') ||
        (event.ctrlKey && event.key.toLowerCase() === 'c')
    ) {
        event.preventDefault();
    }
});