const slider = new Siema({
    selector: '.portfolio__slider',
    duration: 500,
    perPage: 1,
    startIndex: 0,
    draggable: true,
    loop: true,
});
const leftBtn = document.querySelector('.arrow__btn-left').addEventListener('click', function () {
    return slider.prev();
});
const rightBtn = document.querySelector('.arrow__btn-right').addEventListener('click', function () {
    return slider.next();
});