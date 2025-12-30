const submit = document.getElementById('submit');

const urlElement = document.getElementById('url');
const idElement = document.getElementById('id');

let currentId = 100000;
let running = false;

submit.addEventListener('click', async () => {
    if (running) return;
    console.log("submitted");
    running = true;

    const id = parseFloat(idElement.value);
    // Check if user has left any inputs blank, if so return and alert user to fill the inputs
    if (id === '') {
        alert('Please fill in the necessary information!');
        return;
    };

    currentId += id;

    // do stuff
    await operate();
})

async function operate() {
    console.log(running);
    console.log(currentId);
    
    for (let index = 0; index < 5; index++) {
        const currentcurrentId = currentId + index;
        polishedId = currentcurrentId.toString().slice(1, currentcurrentId.length);

        window.open(`https://www.w3schools.com/tags/${polishedId}`);
        
        await delay(500);
        console.log(`${polishedId}, delayed ${index}`);
    }

    console.log(running);
    console.log(currentId);
}

const delay = ms => new Promise(res => setTimeout(res, ms));