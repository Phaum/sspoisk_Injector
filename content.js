function insertButton() {
    const container = document.querySelector('.styles_buttonsContainer__HREZO');
    if (!container || document.querySelector('#my-custom-button')) return;
    const wrapper = document.createElement('div');
    wrapper.className = 'styles_button__tQYKG';
    const button = document.createElement('button');
    button.textContent = 'Посмотреть кино';
    button.id = 'my-custom-button';
    button.className = 'style_button__PNtXT style_buttonSize52__b5OBe style_buttonPrimary__ndPAb';
    button.addEventListener('click', () => {
        const currentUrl = window.location.href;
        const targetUrl = currentUrl.replace('kinopoisk.ru', 'sspoisk.ru');
        window.open(targetUrl, '_blank');
    });
    wrapper.appendChild(button);
    container.appendChild(wrapper);
}

const observer = new MutationObserver(() => {
    const container = document.querySelector('.styles_buttonsContainer__HREZO');
    if (container) {
        insertButton();
        observer.disconnect();
    }
});

observer.observe(document.body, { childList: true, subtree: true });
