function gallery(selector, options) {

    const getElement = (tagName, classNames, attributes) => {
        const element = document.createElement(tagName);
        if (classNames){
            element.classList.add(...classNames);
        }
        if (attributes) {
            for (const attribute in attributes) {
                element[attribute] = attributes[attribute];
            }
        }
        return element;
    }

    const createCard = (param) => {
        const container = getElement('div',['container']);
        if (param.slides) {
            const allCards = param.slides.map(item => {
                const card = getElement('div',['slide']);
                const title = getElement('h3');
                title.textContent = item.title;
                card.style.backgroundImage = `url('${item.link}')`;
                card.append(title);
                return card;
            })
            container.append(...allCards);
        }
        return container
    }

    function slidesPlugin(activeSlide = 0) {
        const slides = document.querySelectorAll('.slide');
        slides[activeSlide].classList.add('active');
        for (const slide of slides){
            slide.addEventListener('click', () =>{
                clearClasses();
                slide.classList.add('active')
            })
        }

        function clearClasses() {
            slides.forEach((slide) =>{
                slide.classList.remove('active')
            })
        }
    }


    const app = document.querySelector(selector);
    app.append(createCard(options));
    slidesPlugin();
    return gallery;
}










