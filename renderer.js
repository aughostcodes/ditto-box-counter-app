// Function to update the first counter and handle the green-text functionality
function updateFirstCounter() {
    const firstNumberInput = document.getElementById('firstNumber');
    const firstNumber = parseInt(firstNumberInput.value);
    if (firstNumber === 60) {
        firstNumberInput.classList.add('green-text');
    } else {
        firstNumberInput.classList.remove('green-text');
    }
}

// First counter functionality (Total Box Count)
const firstNumberInput = document.getElementById('firstNumber');
const increaseFirst = document.getElementById('increaseFirst');
const decreaseFirst = document.getElementById('decreaseFirst');

increaseFirst.addEventListener('click', () => {
    let firstNumber = parseInt(firstNumberInput.value);
    firstNumber++;
    firstNumberInput.value = firstNumber;
    console.log(`[${new Date().toLocaleTimeString()}] Total Box Count increased (click)`);
});

decreaseFirst.addEventListener('click', () => {
    let firstNumber = parseInt(firstNumberInput.value);
    if (firstNumber > 0) {
        firstNumber--;
    }
    firstNumberInput.value = firstNumber;
    console.log(`[${new Date().toLocaleTimeString()}] Total Box Count decreased (click)`);
});

// Second counter functionality (31s)
const secondNumberInput = document.getElementById('secondNumber');
const increaseSecond = document.getElementById('increaseSecond');
const decreaseSecond = document.getElementById('decreaseSecond');

increaseSecond.addEventListener('click', () => {
    let secondNumber = parseInt(secondNumberInput.value);
    secondNumber++;
    secondNumberInput.value = secondNumber;
    console.log(`[${new Date().toLocaleTimeString()}] 31s increased (click)`);
});

decreaseSecond.addEventListener('click', () => {
    let secondNumber = parseInt(secondNumberInput.value);
    if (secondNumber > 0) {
        secondNumber--;
    }
    secondNumberInput.value = secondNumber;
    console.log(`[${new Date().toLocaleTimeString()}] 31s decreased (click)`);
});

// Reset button functionality
const resetButton = document.getElementById('resetButton');
resetButton.addEventListener('click', () => {
    firstNumberInput.value = 0;
    secondNumberInput.value = 0;
    firstNumberInput.classList.remove('green-text');
    document.getElementById('resultBox').style.display = 'none'; // Hide the result box
});

// Allow typing and use the typed number for the + and - buttons
firstNumberInput.addEventListener('change', updateFirstCounter);

// Mouse hover detection flag
let mouseHovering = false;

// Track when mouse enters or leaves the window
document.addEventListener('mouseenter', () => {
    mouseHovering = true;
});

document.addEventListener('mouseleave', () => {
    mouseHovering = false;
});

// Handle the keypress event globally only when the mouse is hovering over the window
window.addEventListener('keydown', (e) => {
    if (mouseHovering) {
        if (e.key === 'ArrowRight') {
            // Increase the first number
            let firstNumber = parseInt(firstNumberInput.value);
            firstNumber++;
            firstNumberInput.value = firstNumber;
            updateFirstCounter();
            console.log(`[${new Date().toLocaleTimeString()}] Total Box Count increased (arrow)`);
        }
        if (e.key === 'ArrowLeft') {
            // Decrease the first number
            let firstNumber = parseInt(firstNumberInput.value);
            if (firstNumber > 0) {
                firstNumber--;
            }
            firstNumberInput.value = firstNumber;
            updateFirstCounter();
            console.log(`[${new Date().toLocaleTimeString()}] Total Box Count decreased (arrow)`);
        }

        if (e.key === 'ArrowUp') {
            // Increase the second number (31s) with the up arrow
            let secondNumber = parseInt(secondNumberInput.value);
            secondNumber++;
            secondNumberInput.value = secondNumber;
            console.log(`[${new Date().toLocaleTimeString()}] 31s increased (arrow)`);
        }
        if (e.key === 'ArrowDown') {
            // Decrease the second number (31s) with the down arrow, but not below 0
            let secondNumber = parseInt(secondNumberInput.value);
            if (secondNumber > 0) {
                secondNumber--;
            }
            secondNumberInput.value = secondNumber;
            console.log(`[${new Date().toLocaleTimeString()}] 31s decreased (arrow)`);
        }
    }
});