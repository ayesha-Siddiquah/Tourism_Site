const essentials = [
    { title: "Wildlife", imgUrl: "./images/sj-essentials-images/wildlife.jpg" },
    { title: "Sun and Beaches", imgUrl: "./images/sj-essentials-images/beaches.jpg" },
    { title: "Adventures", imgUrl: "./images/sj-essentials-images/adventures.jpg" },
];
const balance = [
    { title: "Wellness", imgUrl: "./images/sj-essentials-images/wellness.jpg" },
    { title: "Families", imgUrl: "./images/sj-essentials-images/families.jpg" },
    { title: "Sun and Beaches", imgUrl: "./images/sj-essentials-images/beaches2.jpg"},
];
const thrill = [
    { title: "Adventures", imgUrl: "./images/sj-essentials-images/adventures.jpg" },
    { title: "Ecotourism", imgUrl: "./images/sj-essentials-images/ecotourism.jpg" },
    { title: "Wildlife", imgUrl: "./images/sj-essentials-images/wildlife2.jpg"  },
];
const recharge = [
    { title: "Cruises", imgUrl: "./images/sj-essentials-images/cruises.jpg" },
    { title: "Sun and Beaches", imgUrl: "./images/sj-essentials-images/beaches2.jpg" },
    { title: "Wellness", imgUrl: "./images/sj-essentials-images/wellness3.jpg" },
];
const alive = [
    { title: "Wildlife", imgUrl: "./images/sj-essentials-images/wildlife3.jpg" },
    { title: "Adventures", imgUrl: "./images/sj-essentials-images/adventures2.jpg" },
    { title: "Festivals", imgUrl: "./images/sj-essentials-images/festivals.jpg" },
];
const connect = [
    { title: "Food", imgUrl: "./images/sj-essentials-images/Food.jpg" },
    { title: "Culture", imgUrl: "./images/sj-essentials-images/culture.jpg" },
    { title: "Music", imgUrl: "./images/sj-essentials-images/music.jpg" },
];

const tab1Heading = document.getElementById("tab-Heading1");
const tab2Heading = document.getElementById("tab-Heading2");
const tab3Heading = document.getElementById("tab-Heading3");
const tab1Background = document.getElementById("essentials-tab1");
const tab2Background = document.getElementById("essentials-tab2");
const tab3Background = document.getElementById("essentials-tab3");

const essentialButtons = document.querySelectorAll(".tab-titles");

for (var i = 0; i < essentialButtons.length; i++) {
    essentialButtons[i].addEventListener("click", createEventListener(i));
}

function createEventListener(i) {
    return function () {
        switch (i) {
            case 0:
                tab1Heading.textContent = essentials[0].title;
                tab2Heading.textContent = essentials[1].title;
                tab3Heading.textContent = essentials[2].title;
                tab1Background.style.backgroundImage = `url(${essentials[0].imgUrl})`;
                tab2Background.style.backgroundImage = `url(${essentials[1].imgUrl})`;
                tab3Background.style.backgroundImage = `url(${essentials[2].imgUrl})`;
        break;
            case 1:
                tab1Heading.textContent = balance[0].title;
                tab2Heading.textContent = balance[1].title;
                tab3Heading.textContent = balance[2].title;
                tab1Background.style.backgroundImage = `url(${balance[0].imgUrl})`;
                tab2Background.style.backgroundImage = `url(${balance[1].imgUrl})`;
                tab3Background.style.backgroundImage = `url(${balance[2].imgUrl})`;
                break;
            case 2:
                tab1Heading.textContent = thrill[0].title;
                tab2Heading.textContent = thrill[1].title;
                tab3Heading.textContent = thrill[2].title;
                tab1Background.style.backgroundImage = `url(${thrill[0].imgUrl})`;
                tab2Background.style.backgroundImage = `url(${thrill[1].imgUrl})`;
                tab3Background.style.backgroundImage = `url(${thrill[2].imgUrl})`;
                break;
            case 3:
                tab1Heading.textContent = recharge[0].title;
                tab2Heading.textContent = recharge[1].title;
                tab3Heading.textContent = recharge[2].title;
                tab1Background.style.backgroundImage = `url(${recharge[0].imgUrl})`;
                tab2Background.style.backgroundImage = `url(${recharge[1].imgUrl})`;
                tab3Background.style.backgroundImage = `url(${recharge[2].imgUrl})`;
                break;
            case 4:
                tab1Heading.textContent = alive[0].title;
                tab2Heading.textContent = alive[1].title;
                tab3Heading.textContent = alive[2].title;
                tab1Background.style.backgroundImage = `url(${alive[0].imgUrl})`;
                tab2Background.style.backgroundImage = `url(${alive[1].imgUrl})`;
                tab3Background.style.backgroundImage = `url(${alive[2].imgUrl})`;
                break;
            case 5:
                tab1Heading.textContent = connect[0].title;
                tab2Heading.textContent = connect[1].title;
                tab3Heading.textContent = connect[2].title;
                tab1Background.style.backgroundImage = `url(${connect[0].imgUrl})`;
                tab2Background.style.backgroundImage = `url(${connect[1].imgUrl})`;
                tab3Background.style.backgroundImage = `url(${connect[2].imgUrl})`;
                break;
        }
    };
}
