var toggleButton = document.getElementById('toggle-Skills');
var Skills = document.getElementById('Skills');
toggleButton.addEventListener('click', function () {
    if (Skills.style.display === 'none') {
        Skills.style.display = 'block';
    }
    else {
        Skills.style.display = 'none';
    }
});
