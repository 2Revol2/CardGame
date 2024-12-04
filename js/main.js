const game = document.querySelector('#game');

function startGame(game, cardsCount){
    const cardNumberArray = [];
    let firstCard = null;
    let secondCard = null;
    // Создаем массив чисел
    for (let i = 1; i <= cardsCount; i++) {
        cardNumberArray.push(i, i);
    }
    // Мешаем числа
    for (let i = 0; i < cardNumberArray.length; i++) {
        let randomIndex = Math.floor(Math.random()*cardNumberArray.length)
    
        let temp = cardNumberArray[i];
        cardNumberArray[i] = cardNumberArray[randomIndex];
        cardNumberArray[randomIndex] = temp;
    }
    // Настройка сетки
    let columns = 4;
    switch (cardsCount) {
        case 2: columns = 2;
        break;
        case 3: columns = 3;
        break;
        case 4: columns = 4;
        break;
        case 5: columns = 5;
        break;
        case 6: columns = 4;
        break;
        case 7: columns = 7;
        break;
        case 8: columns = 8;
        break;
        case 9: columns = 6;
        break;
        case 10: columns = 5;
        break;
        case 11: columns = 5;
        break;
        case 12: columns = 6;
        break;
        case 13: columns = 6;
        break;
        case 14: columns = 6;
        break;
        case 15: columns = 6;
        break;
        case 16: columns = 8;
        break;
        case 17: columns = 8;
        break;
        case 18: columns = 8;
        break;
        case 19: columns = 8;
        break;
        case 20: columns = 10;
        break;
    }

    game.style = ` grid-template-columns: repeat(${columns}, 1fr);`;

    // Создаем карточки
    for (let cardNumber of cardNumberArray) {
        const card = document.createElement('div');
        card.classList.add("card");
       
        card.addEventListener ('click', () => {   
            card.textContent = cardNumber; 
            if (card.classList.contains("open") || card.classList.contains("success")) {
                return
            }
            
            if (firstCard !== null && secondCard !== null) {
                firstCard.classList.remove('open')
                secondCard.classList.remove('open')
                firstCard = null;
                secondCard = null;
            }
            card.classList.add("open");
    
            if (firstCard === null) {
                firstCard = card;
            }
            else {
                secondCard = card;
            }
           
            if (firstCard !== null && secondCard !== null) {
               const firstCardNumber = firstCard.textContent;
               const secondCardNumber = secondCard.textContent;
    
               if (firstCardNumber === secondCardNumber) {
                firstCard.classList.add('success')
                secondCard.classList.add('success')
               }
            }
    
            if (cardNumberArray.length === document.querySelectorAll(".success").length) {
              setTimeout (() => {
                game.innerHTML = "";
                alert("Победа!");
                let cardsCount = Number(prompt("Введите количество пар", 4));
                startGame(game, cardsCount);
              }, 400)
            }
        })
        game.append(card);
    }
}
let cardsCount = Number(prompt("Введите количество пар", 4));
startGame(game, cardsCount);