/* =========================================================
   BIRTHDAY WEBSITE JAVASCRIPT
   ========================================================= */


/* ================= SLIDES ================= */

let currentSlide = 1;

const totalSlides = 18;


function showSlide(number) {

    document.querySelectorAll(".slide").forEach(slide => {

        slide.classList.remove("active");

    });


    const target =
        document.getElementById("slide" + number);


    if (target) {

        target.classList.add("active");

    }


    currentSlide = number;


    if (number === 16) {

        createBalloons();

    }

}


function nextSlide() {

    if (currentSlide < totalSlides) {

        showSlide(currentSlide + 1);

    }

}


/* ================= FLOATING HEARTS ================= */

const heartsContainer =
    document.getElementById("hearts-container");


function createHeart() {

    if (!heartsContainer) return;


    const heart =
        document.createElement("div");


    heart.className =
        "floating-heart";


    const hearts = [
        "🤍",
        "♡",
        "💗",
        "🌸",
        "🌹"
    ];


    heart.innerHTML =
        hearts[
            Math.floor(
                Math.random() * hearts.length
            )
        ];


    heart.style.left =
        Math.random() * 100 + "%";


    heart.style.fontSize =
        (14 + Math.random() * 22) + "px";


    heart.style.animationDuration =
        (5 + Math.random() * 5) + "s";


    heartsContainer.appendChild(heart);


    setTimeout(() => {

        heart.remove();

    }, 11000);

}


setInterval(createHeart, 450);


/* ================= PIN ================= */

const SECRET = "0222";

let enteredPin = "";


function pressKey(number) {

    if (enteredPin.length >= 4) {

        return;

    }


    enteredPin += number;

    updatePinDisplay();

}


function clearPin() {

    enteredPin =
        enteredPin.slice(0, -1);

    updatePinDisplay();

}


function updatePinDisplay() {

    const display =
        document.getElementById("pinDisplay");


    let text = "";


    for (let i = 0; i < 4; i++) {

        text +=
            i < enteredPin.length
                ? "●"
                : "•";

    }


    display.textContent = text;

}


function checkPin() {

    const message =
        document.getElementById("pinMessage");


    if (enteredPin === SECRET) {

        message.textContent =
            "Correct code! Welcome Loosey 🤍";


        blast();


        setTimeout(() => {

            showSlide(2);

        }, 800);


    } else {

        message.textContent =
            "Wrong code 😭 Try again!";


        enteredPin = "";

        updatePinDisplay();

    }

}


/* ================= COUNTDOWN ================= */

const birthdayDate =
    new Date(
        "2026-10-02T00:00:00"
    ).getTime();


function updateCountdown() {

    const now =
        new Date().getTime();


    const distance =
        birthdayDate - now;


    if (distance <= 0) {

        document.getElementById("days")
            .textContent = "00";

        document.getElementById("hours")
            .textContent = "00";

        document.getElementById("minutes")
            .textContent = "00";

        document.getElementById("seconds")
            .textContent = "00";


        document.getElementById(
            "countdownText"
        ).textContent =
            "HAPPY BIRTHDAY LOOSEY!!! 🎉🎂🤍";


        return;

    }


    const days =
        Math.floor(
            distance /
            (1000 * 60 * 60 * 24)
        );


    const hours =
        Math.floor(
            (distance %
                (1000 * 60 * 60 * 24))
            /
            (1000 * 60 * 60)
        );


    const minutes =
        Math.floor(
            (distance %
                (1000 * 60 * 60))
            /
            (1000 * 60)
        );


    const seconds =
        Math.floor(
            (distance %
                (1000 * 60))
            /
            1000
        );


    document.getElementById("days")
        .textContent =
        String(days).padStart(2, "0");


    document.getElementById("hours")
        .textContent =
        String(hours).padStart(2, "0");


    document.getElementById("minutes")
        .textContent =
        String(minutes).padStart(2, "0");


    document.getElementById("seconds")
        .textContent =
        String(seconds).padStart(2, "0");

}


updateCountdown();

setInterval(
    updateCountdown,
    1000
);


/* ================= CAKE ================= */

let cakeCut = false;


function cutCake() {

    if (cakeCut) return;


    cakeCut = true;


    const flame =
        document.getElementById("flame");


    const text =
        document.getElementById("cakeText");


    flame.classList.add("off");


    text.textContent =
        "YAYYYY Cake cut pannitom! 🎂🎉🤍";


    blast();

}


/* ================= BLAST ================= */

function blast() {

    const symbols = [
        "🤍",
        "💗",
        "🎉",
        "✨",
        "🌸",
        "🎊"
    ];


    for (let i = 0; i < 45; i++) {

        const particle =
            document.createElement("div");


        particle.className =
            "blast-particle";


        particle.textContent =
            symbols[
                Math.floor(
                    Math.random() *
                    symbols.length
                )
            ];


        const x =
            (Math.random() - .5) * 900;


        const y =
            (Math.random() - .5) * 700;


        particle.style.setProperty(
            "--x",
            x + "px"
        );


        particle.style.setProperty(
            "--y",
            y + "px"
        );


        document.body.appendChild(
            particle
        );


        setTimeout(() => {

            particle.remove();

        }, 1600);

    }

}


/* ================= LETTER ================= */

function openLetter() {

    document.getElementById(
        "letterQuestion"
    ).classList.add("hidden");


    document.getElementById(
        "letterContent"
    ).classList.remove("hidden");


    blast();

}


function moveNoButton(button) {

    const x =
        (Math.random() - .5) * 200;


    const y =
        (Math.random() - .5) * 100;


    button.style.transform =
        `translate(${x}px, ${y}px)`;

}


/* ================= PHOTOS ================= */

/*
   YOUR PHOTOS ARE INSIDE:
   images/photo1.jpg
   images/photo2.jpg
   images/photo3.jpg
   images/photo4.jpg
   images/photo5.jpg
   images/photo6.jpg
*/

const photos = [

    "images/photo1.jpg",

    "images/photo2.jpg",

    "images/photo3.jpg",

    "images/photo4.jpg",

    "images/photo5.jpg",

    "images/photo6.jpg"

];


let currentPhoto = 0;


function showPhoto(index) {

    currentPhoto =
        (index + photos.length)
        % photos.length;


    const image =
        document.getElementById(
            "mainPhoto"
        );


    image.src =
        photos[currentPhoto];


    document.getElementById(
        "photoNumber"
    ).textContent =
        `${currentPhoto + 1} / ${photos.length}`;

}


function nextPhoto() {

    showPhoto(
        currentPhoto + 1
    );

}


function previousPhoto() {

    showPhoto(
        currentPhoto - 1
    );

}


/* ================= PHOTO MODAL ================= */

function openPhotoModal() {

    const modal =
        document.getElementById(
            "photoModal"
        );


    const image =
        document.getElementById(
            "modalPhoto"
        );


    image.src =
        photos[currentPhoto];


    modal.classList.add("show");

}


function closePhotoModal() {

    document.getElementById(
        "photoModal"
    ).classList.remove("show");

}


/* ================= PHOTO SWIPE ================= */

let touchStartX = 0;


const mainPhoto =
    document.getElementById(
        "mainPhoto"
    );


if (mainPhoto) {

    mainPhoto.addEventListener(
        "touchstart",
        function(event) {

            touchStartX =
                event.touches[0].clientX;

        }
    );


    mainPhoto.addEventListener(
        "touchend",
        function(event) {

            const touchEndX =
                event.changedTouches[0].clientX;


            const difference =
                touchEndX - touchStartX;


            if (
                Math.abs(difference) < 50
            ) {

                return;

            }


            if (difference < 0) {

                nextPhoto();

            } else {

                previousPhoto();

            }

        }
    );

}


/* ================= SONGS ================= */

const song1 =
    document.getElementById("song1");


const song2 =
    document.getElementById("song2");


let currentPlaying = null;


/*
   SONG FILES:

   audio/audio.mp3
   audio/audio2.mp3

   They are already connected
   in index.html.
*/


function toggleSong(number) {

    const audio =
        number === 1
            ? song1
            : song2;


    const otherAudio =
        number === 1
            ? song2
            : song1;


    const icon =
        document.getElementById(
            "playIcon" + number
        );


    const text =
        document.getElementById(
            "playText" + number
        );


    const otherNumber =
        number === 1 ? 2 : 1;


    const otherIcon =
        document.getElementById(
            "playIcon" + otherNumber
        );


    const otherText =
        document.getElementById(
            "playText" + otherNumber
        );


    if (!audio) {

        showSongError();

        return;

    }


    /* PAUSE CURRENT SONG */

    if (!audio.paused) {

        audio.pause();


        icon.textContent =
            "▶";


        text.textContent =
            "Play Song";


        currentPlaying = null;


        return;

    }


    /*
       Stop the other song FIRST.
       This prevents play/pause AbortError.
    */

    if (
        otherAudio &&
        !otherAudio.paused
    ) {

        otherAudio.pause();

        otherAudio.currentTime = 0;


        otherIcon.textContent =
            "▶";


        otherText.textContent =
            "Play Song";

    }


    document.getElementById(
        "songMessage"
    ).textContent = "";


    /*
       play() happens directly
       after button click.
    */

    const playPromise =
        audio.play();


    if (
        playPromise !== undefined
    ) {

        playPromise
            .then(() => {

                currentPlaying =
                    audio;


                icon.textContent =
                    "⏸";


                text.textContent =
                    "Pause Song";

            })


            .catch(error => {

                console.error(
                    "Song play failed:",
                    error
                );


                icon.textContent =
                    "▶";


                text.textContent =
                    "Play Song";


                showSongError();

            });

    }

}


/* ================= SONG ERROR ================= */

function showSongError() {

    const message =
        document.getElementById(
            "songMessage"
        );


    message.innerHTML =
        "Song file found illa 😭<br>" +
        "Check audio folder-la " +
        "<b>audio.mp3</b> and " +
        "<b>audio2.mp3</b> irukka nu.";

}


/* ================= SONG PROGRESS ================= */

function updateSongProgress(
    audio,
    progressId
) {

    const progress =
        document.getElementById(
            progressId
        );


    if (!progress) return;


    if (
        audio.duration &&
        !isNaN(audio.duration)
    ) {

        const percentage =
            (
                audio.currentTime /
                audio.duration
            ) * 100;


        progress.style.width =
            percentage + "%";

    }

}


song1.addEventListener(
    "timeupdate",
    function() {

        updateSongProgress(
            song1,
            "progress1"
        );

    }
);


song2.addEventListener(
    "timeupdate",
    function() {

        updateSongProgress(
            song2,
            "progress2"
        );

    }
);


/* ================= SONG END ================= */

song1.addEventListener(
    "ended",
    function() {

        document.getElementById(
            "playIcon1"
        ).textContent = "▶";


        document.getElementById(
            "playText1"
        ).textContent =
            "Play Song";


        document.getElementById(
            "progress1"
        ).style.width = "0%";


        currentPlaying = null;

    }
);


song2.addEventListener(
    "ended",
    function() {

        document.getElementById(
            "playIcon2"
        ).textContent = "▶";


        document.getElementById(
            "playText2"
        ).textContent =
            "Play Song";


        document.getElementById(
            "progress2"
        ).style.width = "0%";


        currentPlaying = null;

    }
);


/* ================= AUDIO ERROR ================= */

song1.addEventListener(
    "error",
    function() {

        console.error(
            "Could not load audio/audio.mp3"
        );

    }
);


song2.addEventListener(
    "error",
    function() {

        console.error(
            "Could not load audio/audio2.mp3"
        );

    }
);


/* ================= BALLOON GAME ================= */

let poppedBalloons = 0;


const balloonMessages = [

    "Our first conversation 🤍",

    "Tea shop memories ☕",

    "Our random fights 😂",

    "Late night talks 🌙",

    "College memories 🥹",

    "Cake cutting 🎂",

    "Bike ride memories 🏍️",

    "One more memory for you 🤍",

    "Loosey paithiyoo 😂",

    "Bestest friend 🤍"

];


function createBalloons() {

    const area =
        document.getElementById(
            "balloonArea"
        );


    if (!area) return;


    if (
        area.dataset.created === "true"
    ) {

        return;

    }


    area.dataset.created =
        "true";


    for (
        let i = 0;
        i < 10;
        i++
    ) {

        const balloon =
            document.createElement(
                "div"
            );


        balloon.className =
            "balloon";


        balloon.style.left =
            (5 + Math.random() * 85)
            + "%";


        balloon.style.top =
            (10 + Math.random() * 75)
            + "%";


        balloon.style.background =
            randomBalloonColor();


        balloon.addEventListener(
            "click",
            function() {

                if (
                    balloon.dataset.popped
                ) {

                    return;

                }


                balloon.dataset.popped =
                    "true";


                const message =
                    balloonMessages[
                        i %
                        balloonMessages.length
                    ];


                document.getElementById(
                    "gameMessage"
                ).textContent =
                    message;


                poppedBalloons++;


                balloon.style.transform =
                    "scale(1.5)";


                balloon.style.opacity =
                    "0";


                setTimeout(() => {

                    balloon.remove();

                }, 200);


                if (
                    poppedBalloons >= 5
                ) {

                    document.getElementById(
                        "gameMessage"
                    ).textContent =
                        "YAYYYY! You found enough memories 😂🤍";


                    blast();

                }

            }
        );


        area.appendChild(
            balloon
        );

    }

}


function randomBalloonColor() {

    const colors = [

        "#ff9fba",

        "#ffb6c9",

        "#ffc4d6",

        "#ff91b1",

        "#f7b4ca"

    ];


    return colors[
        Math.floor(
            Math.random() *
            colors.length
        )
    ];

}


/* ================= KEYBOARD ================= */

document.addEventListener(
    "keydown",
    function(event) {

        if (
            currentSlide === 1 &&
            event.key >= "0" &&
            event.key <= "9"
        ) {

            pressKey(event.key);

        }


        if (
            currentSlide === 1 &&
            event.key === "Enter"
        ) {

            checkPin();

        }


        if (
            currentSlide === 1 &&
            event.key === "Backspace"
        ) {

            clearPin();

        }

    }
);


/* ================= INITIALIZE ================= */

showSlide(1);

updatePinDisplay();

console.log(
    "Birthday website loaded successfully 🤍"
);