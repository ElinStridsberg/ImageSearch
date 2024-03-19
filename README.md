# ImageSearch
Jag har skapat ett projekt med hjälp av Auth0 och Google Custom Search. I detta projekt kan du söka fram bilder med hjälp av och lägga till dessa som favorit. Dessa bilder kan de sedan hitta som en lista. 

## Installation
För att installera och köra projektet lokalt, följ dessa steg:
1. Klona detta repository.
2. Öppna upp terminalen och skriv 'cd client' för att se till att du står i rätt mapp. Skriv nu 'npm install' för att installera klientens beroenden. Efter detta kan du skriva 'npm run dev'. Nu får du en länk i terminalen. Klicka på denna för att öppna upp klientsidan.
3. Öppna sedan upp en till teminal och skriv 'cd server' för att se att du står i 'server' mappen. Om så är fallet skriv nu 'npm install' för att installera serverns beroenden. När detta är klart skriv 'node server' för att starta servern. 

## Användning
När du har startat servern och klickan in på klientsidan ser du en en grön logga-in knapp. Tryck på denna. Du får nu möjligheten att logga in med Github eller Google. Väl inloggad finns det ett sökfält där du kan söka fram bilder. Skriv in ett sökord i fältet och tryck på 'search'. När du klickat på knappen kommer sökresutatet upp. Om det skulle vara så att du stavat fel kommer nu ett förslag upp på det rättstavade ordet, tryck på detta och klicka på 'search' igen. När du har hittat en bild som du tycker om kan du klicka på 'add' för att lägga till denna bild som en favorit.
För att se din lista på dina favoritbilder kan du trycka på hjärtat uppe till vänster. Om du villtillbaka till söksidan kan du klicka på klart. Om du vill logga ut från sidan trycker du på den gröna knappen uppe till höger.