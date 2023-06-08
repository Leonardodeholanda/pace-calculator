const calcButton = document.querySelector(".calc-button");
const minutesInput = document.querySelector(".minutes");
const secondsInput = document.querySelector(".seconds");
const raceOptions = document.querySelector(".race-options");
const newRp = document.querySelector(".new-rp");
const distanceSelected = document.querySelector(".distance-selected");
const paceTime = document.querySelector(".pace-time");
const firstP = document.querySelector(".first-paragraph");
const alertMessage = document.querySelector(".alert-message");
const resetButton = document.querySelector(".reset-button");

calcButton.addEventListener("click", function (event) {
    event.preventDefault();

    if (minutesInput.value === "" || secondsInput.value === "" || raceOptions.value === "") {
        alert("Por favor, preencha todos os campos antes de calcular.");
        return;
    }

    const totalSeconds = parseInt(minutesInput.value, 10) * 60 + parseInt(secondsInput.value, 10);
    const raceTimeInSeconds = totalSeconds * raceOptions.value;
    const formattedTime = formatTime(raceTimeInSeconds);

    newRp.innerHTML = formattedTime;
    distanceSelected.innerHTML = `${raceOptions.value}km`;
    paceTime.innerHTML = `${minutesInput.value.padStart(2, "0")}:${secondsInput.value.padStart(2, "0")}`;
    firstP.style.display = "block";
    alertMessage.style.display = "block";
    resetButton.style.display = "block";
});

resetButton.addEventListener("click", function () {
    minutesInput.value = "";
    secondsInput.value = "";
    raceOptions.selectedIndex = 0;
    firstP.style.display = "none";
    alertMessage.style.display = "none";
    newRp.innerHTML = "00:00:00";
    resetButton.style.display = "none"
});

function formatTime(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds - hours * 3600) / 60);
    const remainingSeconds = seconds - hours * 3600 - minutes * 60;

    const formattedHour = String(hours).padStart(2, "0");
    const formattedMinutes = String(minutes).padStart(2, "0");
    const formattedSeconds = String(remainingSeconds).padStart(2, "0");

    return `${formattedHour}:${formattedMinutes}:${formattedSeconds}`;
}
