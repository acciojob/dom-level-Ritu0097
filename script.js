function findDOMLevel(elementId) {
    var element = document.getElementById('level');
    var level = 0;
    while (element !== null && element.tagName.toLowerCase() !== 'level') {
        level++; 
        element = element.parentElement; 
    }
    alert("The level of the element is: " + level);
}
findDOMLevel('level');
