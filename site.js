const toggle = document.getElementById('screenlineModeToggle');
console.log(toggle);
function toggleLines(event) {
    const body = document.getElementById('body');
    body.className = this.checked ? 'lines': '';
}
toggle.addEventListener('change',toggleLines);