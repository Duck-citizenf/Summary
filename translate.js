let flagRU = document.getElementById("flagRU");
    let flagUK = document.getElementById("flagUK");
    flagRU.addEventListener('click', function (){change(flagRU, flagUK)});
    flagUK.addEventListener('click', function (){change(flagUK, flagRU)});
    function change(flag1, flag2){
        if (flag1.classList ==  'flags'){
            flag1.classList = 'flags border-thin';
            flag2.classList = 'flags';
        }
        if(flag1.innerText == '🇬🇧'){
            document.getElementById('position').innerText = "Frontend-Developer";
            document.getElementById('name').innerText = "Vyacheslav Bogdanov"
            document.getElementById('stack').innerText = "Stack";
            document.getElementById('Employment').innerText = "Employment";
            document.getElementById('Elmeh').innerHTML = "Frontend-Developer in <a target=\"_blank\" href=\"https://www.elmeh.ru/\">PJSC \"Electromechanics\"</a>";
            document.getElementById('date').innerText = 'July 2022 - today';
            document.getElementById('elmeh-resp').innerText = 'Support and modification of railway tracking website';
            document.getElementById('projects').innerText = 'Projects';
            document.getElementById('proj1').innerText = 'Honest&Rare ecommerce website';
            document.getElementById('proj2').innerText ='Dark Souls 2 calculator';
            document.getElementById('proj3').innerText ='Mobile interface for weather forecast';
            document.getElementById('proj4').innerText ='Shopify API implementation for Honest&Rare (Vercel hosting)';
            document.getElementById('proj5').innerText ='Mineswepper clone';
            document.getElementById('proj6').innerText ='Browser addon for Yandex Market';
            document.getElementById('feat1').innerHTML = '<li>Animated swipes on pure CSS</li>'+
                '<li>Screen support for tablets and phones</li>'+
                '<li>Pure CSS solutions (Dropdown menu and cart)</li>';
            document.getElementById('feat2').innerHTML = '<li>Sorting and printing large arrays of data</li>'+
                '<li>Paypal integration</li>';
            document.getElementById('feat3').innerHTML = '<li>Swipe left/right for mobile web</li>';
            document.getElementById('feat4').innerHTML = '<li><a target="_blank" href="https://shopify-honest-lv9t5w6q2-duck-citizenf.vercel.app/category/gin">All products page</a></li>'+
                '<li><a target="_blank" href="https://shopify-honest-lv9t5w6q2-duck-citizenf.vercel.app/products/solid-gin">Product page</a></li>'+
                '<li>Accessing content of Shopify by using GraphQL</li>'+
                '<li>Ability to add and remove products in car, monitor cart and also option to buy product on Shopify</li>'+
                '<li>Usiage of cookies to save content of cart</li>';
            document.getElementById('feat5').innerHTML = '<li>Usage of chain functions to recreate game mechanic</li>';
            document.getElementById('feat6').innerHTML = '<li>Usage of TypeScript</li>'+
                '<li>Implementation of async functions to formulate request</li>'+
                '<li>Usage of Regular Expression to access data from website</li>';
        }
        if(flag1.innerText == '🇷🇺'){
            document.getElementById('position').innerText = "Frontend-Программист";
            document.getElementById('name').innerText = "Богданов Вячеслав Владимирович";
            document.getElementById('stack').innerText = "Стек";
            document.getElementById('Employment').innerText = "Должности";
            document.getElementById('Elmeh').innerHTML = "Инженер-Программист в <a target=\"_blank\" href=\"https://www.elmeh.ru/\"> ПАО \"Электромеханика\"</a>";
            document.getElementById('date').innerText = 'Июль 2022 - сегодня';
            document.getElementById('elmeh-resp').innerText = 'Поддержка и модификация сайта отслеживания локомотивов.';
            document.getElementById('projects').innerText = 'Проекты';
            document.getElementById('proj1').innerText = 'Honest&Rare сайт для ecommerce';
            document.getElementById('proj2').innerText ='Калькулятор урона оружия для игры Dark Souls 2';
            document.getElementById('proj3').innerText ='Мобильный интерфейс сайта прогноза погоды';
            document.getElementById('proj4').innerText ='Имплементация Shopify API в Honest&Rare (Сайт хостится на Vercel)';
            document.getElementById('proj5').innerText ='Клон игры сапёр';
            document.getElementById('proj6').innerText ='Браузерное расширение для сайта Yandex Market';
            document.getElementById('feat1').innerHTML = '<li>Анимированные карусели на чистом CSS</li>'+
                '<li>Поддержка разрешения экрана смартфонов и планшетных компьютеров (Адаптивная вёрстка)</li>'+
                '<li>Решения на чистом HTML и CSS (Раскрывающиеся меню и корзина)</li>';
            document.getElementById('feat2').innerHTML = '<li>Сортировка и вывод массива данных по различным ключам</li>'+
                '<li>Интеграция Paypal</li>';
            document.getElementById('feat3').innerHTML = '<li>Сайт создан по макету, макет прилагается в <a href="https://github.com/Duck-citizenf/weather">репозитории</a>.</li><li>Свайп влево/вправо на мобильной версии</li>';
            document.getElementById('feat4').innerHTML = '<li><a target="_blank" href="https://shopify-honest-lv9t5w6q2-duck-citizenf.vercel.app/category/gin">Страница выбора товара</a></li>'+
                '<li><a target="_blank" href="https://shopify-honest-lv9t5w6q2-duck-citizenf.vercel.app/products/solid-gin">Страница товара</a></li>'+
                '<li>Получение содержимого готового магазина Shopify используя GraphQL</li>'+
                '<li>Реализована возможность добавлять и убирать товары в корзине, просматривать содержимое корзины, а так же расплачиваться за выбранные товары на сайте Shopify</li>'+
                '<li>Использование внутренней памяти браузера пользователя для сохранения содержимого корзины</li>';
            document.getElementById('feat5').innerHTML = '<li>Применение chain functions для реализации игровых механик</li>';
            document.getElementById('feat6').innerHTML = '<li>Написание кода с использованием TypeScript</li>'+
                '<li>Применение асинхронных функций для формирования запроса на сайт</li>'+
                '<li>Применение Regular Expression для получения данных с сайта</li>';
        }
    }