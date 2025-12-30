const submit = document.getElementById('submit');

const countElement = document.getElementById('count');
const idElement = document.getElementById('id');

let currentId = 100000;
let currentCount = 0;
let running = false;

submit.addEventListener('click', async () => {
    if (running) return;
    console.log("submitted");
    running = true;

    const id = parseFloat(idElement.value);
    const count = parseFloat(countElement.value);
    // Check if user has left any inputs blank, if so return and alert user to fill the inputs
    if (count === '' || id === '') {
        alert('Please fill in the necessary information!');
        return;
    };

    currentId += id;
    currentCount += count;

    // do stuff
    await operate();
})

async function operate() {
    console.log(running);
    console.log(currentId);
    
    for (let index = 0; index < currentCount; index++) {
        const currentcurrentId = currentId + index;
        polishedId = currentcurrentId.toString().slice(1, currentcurrentId.length);

        window.open(`https://cdn.xn--l3cjg1aa9gm3hwc.com/034/segment_${polishedId}.ts`);
        
        await delay(500);
        console.log(`${polishedId}, delayed ${index}`);
    }

    console.log(running);
    console.log(currentId);
}

const delay = ms => new Promise(res => setTimeout(res, ms));