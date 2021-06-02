
function audioPlay(audio, path){
    audio.src = path;
    audio.play();
}
document.addEventListener('keydown', function (event){
    if (event.code === "KeyA") {
        let audio = document.createElement("AUDIO");
        audioPlay(audio,"white_keys/A.mp3");
    } else if (event.code === "KeyS") {
        let audio = document.createElement("AUDIO");
        audioPlay(audio, "white_keys/S.mp3");
    } else if (event.code === "KeyD") {
        let audio = document.createElement("AUDIO");
        audioPlay(audio,"white_keys/D.mp3");
    } else if (event.code === "KeyF") {
        let audio = document.createElement("AUDIO");
        audioPlay(audio,"white_keys/F.mp3");
    } else if (event.code === "KeyG") {
        let audio = document.createElement("AUDIO");
        audioPlay(audio,"white_keys/G.mp3");
    } else if (event.code === "KeyH") {
        let audio = document.createElement("AUDIO");
        audioPlay(audio,"white_keys/H.mp3");
    } else if (event.code === "KeyJ") {
        let audio = document.createElement("AUDIO");
        audioPlay(audio,"white_keys/J.mp3");
    } else if (event.code === "KeyW") {
        let audio = document.createElement("AUDIO");
        audioPlay(audio, "black_keys/W.mp3");
    } else if (event.code === "KeyE") {
        let audio = document.createElement("AUDIO");
        audioPlay(audio, "black_keys/E.mp3");
    } else if (event.code === "KeyT") {
        let audio = document.createElement("AUDIO");
        audioPlay(audio, "black_keys/T.mp3");
    } else if (event.code === "KeyY") {
        let audio = document.createElement("AUDIO");
        audioPlay(audio, "black_keys/Y.mp3");
    } else if (event.code === "KeyU") {
        let audio = document.createElement("AUDIO");
        audioPlay(audio, "black_keys/U.mp3");
    } else console.log("Wrong key was pressed. Try again!");
})