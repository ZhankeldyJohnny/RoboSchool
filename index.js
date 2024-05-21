const modalTrigger = document.getElementsByClassName("trainer__link")[0];
const modalTrigger1 = document.getElementsByClassName("trainer__link")[1];
const modalTrigger2 = document.getElementsByClassName("trainer__link")[2];
const modalTrigger3 = document.getElementsByClassName("trainer__link")[3];

const trainerfoto = document.getElementsByClassName("trainers__foto")[0];
const imgCopy = trainerfoto.cloneNode(true);

const trainerfoto1 = document.getElementsByClassName("trainers__foto")[1];
const imgCopy1 = trainerfoto1.cloneNode(true);

const trainerfoto2 = document.getElementsByClassName("trainers__foto")[2];
const imgCopy2 = trainerfoto2.cloneNode(true);

const trainerfoto3 = document.getElementsByClassName("trainers__foto")[3];
const imgCopy3 = trainerfoto3.cloneNode(true);

// получаем ширину отображенного содержимого и толщину ползунка прокрутки
const windowInnerWidth = document.documentElement.clientWidth;
const scrollbarWidth = parseInt(window.innerWidth) - parseInt(document.documentElement.clientWidth);

// привязываем необходимые элементы
const bodyElementHTML = document.getElementsByTagName("body")[0];
const modalBackground = document.getElementsByClassName("modalBackground")[0];
const modalClose = document.getElementsByClassName("modalClose")[0];
const modalActive = document.getElementsByClassName("modalActive")[0];


function bodyMargin() {
    bodyElementHTML.style.marginRight = "-" + scrollbarWidth + "px";
}

// при длинной странице - корректируем сразу
bodyMargin();

modalTrigger.addEventListener("click", function () {
    // делаем модальное окно видимым
    modalBackground.style.display = "block";
    console.log("modalBackground", modalBackground);
    console.log('trainerfoto', trainerfoto);
    modalWindow.appendChild(imgCopy);

    // если размер экрана больше 1366 пикселей (т.е. на мониторе может появиться ползунок)
    if (windowInnerWidth >= 1366) {
        bodyMargin();
    }

    // позиционируем наше окно по середине, где 175 - половина ширины модального окна
    modalActive.style.left = "calc(50% - " + (470 - scrollbarWidth / 2) + "px)";
});

modalTrigger1.addEventListener("click", function () {
    // делаем модальное окно видимым
    modalBackground.style.display = "block";
    console.log("modalBackground", modalBackground);
    console.log('trainerfoto1', trainerfoto1);
    modalWindow.appendChild(imgCopy1);

    // если размер экрана больше 1366 пикселей (т.е. на мониторе может появиться ползунок)
    if (windowInnerWidth >= 1366) {
        bodyMargin();
    }

    // позиционируем наше окно по середине, где 175 - половина ширины модального окна
    modalActive.style.left = "calc(50% - " + (470 - scrollbarWidth / 2) + "px)";
});

modalTrigger2.addEventListener("click", function () {
    // делаем модальное окно видимым
    modalBackground.style.display = "block";
    console.log("modalBackground", modalBackground);
    console.log('trainerfoto', trainerfoto2);
    modalWindow.appendChild(imgCopy2);

    // если размер экрана больше 1366 пикселей (т.е. на мониторе может появиться ползунок)
    if (windowInnerWidth >= 1366) {
        bodyMargin();
    }

    // позиционируем наше окно по середине, где 175 - половина ширины модального окна
    modalActive.style.left = "calc(50% - " + (470 - scrollbarWidth / 2) + "px)";
});

modalTrigger3.addEventListener("click", function () {
    // делаем модальное окно видимым
    modalBackground.style.display = "block";
    console.log("modalBackground", modalBackground);
    console.log('trainerfoto', trainerfoto3);
    modalWindow.appendChild(imgCopy3);

    // если размер экрана больше 1366 пикселей (т.е. на мониторе может появиться ползунок)
    if (windowInnerWidth >= 1366) {
        bodyMargin();
    }

    // позиционируем наше окно по середине, где 175 - половина ширины модального окна
    modalActive.style.left = "calc(50% - " + (470 - scrollbarWidth / 2) + "px)";
});


// нажатие на крестик закрытия модального окна
modalClose.addEventListener("click", function () {
    modalBackground.style.display = "none";
    if (windowInnerWidth >= 1366) {
        bodyMargin();
    }
});

// закрытие модального окна на зону вне окна, т.е. на фон
modalBackground.addEventListener("click", function (event) {
    if (event.target === modalBackground) {
        modalBackground.style.display = "none";
        if (windowInnerWidth >= 1366) {
            bodyMargin();
        }
    }
});