// Typewriter Text
const text = "From the day we met, my life changed in the most beautiful way. You became my happiness, my comfort, and my forever person. These three years with you have been my greatest blessing. Every smile of yours makes my world brighter. I don't just love you today, I will love you every tomorrow and every forever.";

let index = 0;
let musicPlayed = false;

function goToPage(pageNumber) {
    document.querySelectorAll(".page").forEach(page => {
        page.classList.remove("active");
    });

    document.getElementById("page" + pageNumber).classList.add("active");

    // Start music only when entering page 2
    if (pageNumber === 2 && !musicPlayed) {
        document.getElementById("bgMusic").play();
        typeWriter();
        musicPlayed = true;
    }
}

function typeWriter() {
    if (index < text.length) {
        document.getElementById("loveText").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, 40);
    }
}

// Love Counter (2022-09-13)
const startDate = new Date("2022-09-13");

function updateCounter() {
    const now = new Date();
    const diff = now - startDate;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);

    document.getElementById("loveCounter").innerText =
        days + " Days " + hours + " Hours " + minutes + " Minutes ❤️";
}

setInterval(updateCounter, 1000);
