function insertButton() {
    const filmContainer = document.querySelector('.styles_buttonsContainer__HREZO');
    const seriesContainer = document.querySelector('.styles_buttonsContainer__i6y3F');

  if (filmContainer && !document.getElementById('my-custom-button')) {
    const button = document.createElement('button');
    button.id = 'my-custom-button';
    button.textContent = 'Смотреть кино';
    // button.className = 'style_button__PNtXT style_buttonSize52__b5OBe style_buttonPrimary__ndPAb';
    button.className = 'style_button__PNtXT styles_watchOnlineButton__ruFtI style_buttonSize52__b5OBe style_buttonPlus__TjQez style_buttonLight____6ma style_withIconLeft___Myt9';
    button.style.marginLeft = '8px';

    button.onclick = () => {
      const url = location.href.replace('kinopoisk.ru', 'sspoisk.ru');
      window.open(url, '_blank');
    };

    filmContainer.appendChild(button);
    clearInterval(interval);
  }

  if (seriesContainer && !document.getElementById('my-custom-button')) {
    const button = document.createElement('button');
    button.id = 'my-custom-button';
    button.textContent = 'Смотреть сериал';
    // button.className = 'style_button__PNtXT style_buttonSize52__b5OBe style_buttonPrimary__ndPAb';
    button.className = 'style_button__PNtXT styles_watchOnlineButton__ruFtI style_buttonSize52__b5OBe style_buttonPlus__TjQez style_buttonLight____6ma style_withIconLeft___Myt9';
    button.style.marginLeft = '8px';

    button.onclick = () => {
      const url = location.href.replace('kinopoisk.ru', 'sspoisk.ru');
      window.open(url, '_blank');
    };

    seriesContainer.appendChild(button);
    clearInterval(interval);
  }
}

const interval = setInterval(insertButton, 500);


// style_button__PNtXT kinopoisk-watch-online-button styles_watchOnlineButton__ruFtI style_buttonSize52__b5OBe style_buttonPlus__TjQez style_buttonLight____6ma style_withIconLeft___Myt9