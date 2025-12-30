const submit = document.getElementById('submit');

const novelIdElement = document.getElementById('novel_id');
const audioIdElement = document.getElementById('audio_id');

const countElement = document.getElementById('count');

const logElement = document.getElementById('log');

let currentAudioId = 100000;
let currentNovelId = 1000;

let currentCount = 0;

let running = false;

submit.addEventListener('click', async () => {
    if (running) return;
    console.log("submitted");
    running = true;

    const novelId = parseFloat(novelIdElement.value);
    const audioId = parseFloat(audioIdElement.value);
    const count = parseFloat(countElement.value);
    // Check if user has left any inputs blank, if so return and alert user to fill the inputs
    if (novelId === '' || audioId === '' || count === '') {
        alert('Please fill in the necessary information!');
        return;
    };

    currentNovelId += novelId
    currentAudioId += audioId;
    currentCount += count;

    // do stuff
    await operate();
})

async function operate() {
    
    for (let index = 0; index < currentCount; index++) {
        const currentcurrentAudioId = currentAudioId + index;
        polishedNovelId = trim(currentNovelId.toString());
        polishedAudioId = trim(currentcurrentAudioId.toString());
        const url = `https://cdn.xn--l3cjg1aa9gm3hwc.com/${polishedNovelId}/segment_${polishedAudioId}.ts`;

        window.open(url);
        logElement.innerHTML += `<p>${url}</p>`;
        
        await delay(500);
        console.log(`${currentNovelId}, ${polishedAudioId}, delayed ${index}`);
    }

}

const delay = ms => new Promise(res => setTimeout(res, ms));

const trim = (str) => str.slice(1, str.length);