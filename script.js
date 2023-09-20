document.addEventListener('DOMContentLoaded', function () {
    const screen = document.getElementById('screen');
    const buttons = document.querySelectorAll('.btn');
    const clearButton = document.querySelector('.btn-clear');
    const equalButton = document.querySelector('.btn-equal');

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const value = button.getAttribute('data-num');
            screen.value += value;
        });
    });

    clearButton.addEventListener('click', function () {
        screen.value = '';
    });

    equalButton.addEventListener('click', function () {
    try {
        const result = eval(screen.value);
        console.log("Result:", result); // Add this line for debugging
        screen.value = result;
    } catch (error) {
        console.error("Error:", error); // Add this line for debugging
        screen.value = 'Error';
    }
});

});
