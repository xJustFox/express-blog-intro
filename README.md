## Esercizio 1

Creiamo il nostro blog personale e giorno dopo giorno lo potremo arricchire con nuove funzionalità.

1. Creiamo il progetto base con una rotta `/` che ritorna un `h1` con scritto **"Benvenuto nel mio blog!"**.
2. Creiamo un array dove inserire una lista di almeno 5 post, per ognuno indicare:
   - Titolo
   - Contenuto
   - Immagine
   - Tags (array di stringhe)
3. Creiamo poi una rotta `/posts` che ritorni tramite content negotiation la lista dei post, da un array locale. Ritorniamo i dati sotto forma di **JSON** e **HTML** stampando una semplice lista non ordinata `<ul>`.
4. Le rotte relative ai post dovranno chiamare la funzione relativa dal controller dedicato (`controllers/posts.js`).
5. Configuriamo gli asset statici sull’applicazione in modo che si possano visualizzare le immagini associate ad ogni post.
6. Testare le immagini scrivendo manualmente il link nel browser.

## Bonus

1. Nel stampare la lista `<ul>` in HTML, si potrebbe inserire anche:
   - Un tag `<img>` per visualizzare l'immagine del post
   - La descrizione del contenuto
   - La lista dei tag associati
2. Spostare l’array dei post in un file separato da importare poi dentro il controller.
3. Creare una rotta `POST` per aggiungere i post tramite **Postman**.


## Esercizio 2

Usando l'array dei post fornito con le relative immagini, creare un file di routing (`routers/posts.js`) che conterrà le rotte necessarie per l'entità post.

1. `/` - **index**: Ritornerà un HTML con una `ul` che stamperà la lista dei post.
2. `/:slug` - **show**: Tramite il parametro dinamico che rappresenta lo slug del post, ritornerà un JSON con i dati del post.
3. `/create` - **create**: Ritornerà un semplice HTML con un `h1` con scritto "Creazione nuovo post". Nel caso venga richiesta una risposta diversa da HTML, lancerà un errore 406.
4 `/:slug/download` - **download**: Dovrà far scaricare l’immagine del post rappresentato dallo slug. Attenzione, se lo slug contiene il simbolo `/`, la rotta non funzionerà. C’è qualche strumento che ci permette di codificare lo slug?
5. Scrivere tutte le funzioni delle rotte nel controller dedicato.
6. Registrare il router dentro `app.js` con il prefisso `/posts`.

---

## Bonus

1. Nella rotta **show**, aggiungere al post una proprietà `image_url` dove creare il link completo per l'immagine.
2. Aggiungere un'altra proprietà `image_download_url` che invece dovrà far scaricare l'immagine puntando alla rotta **download**.
3. Rendere navigabili i post nella **index**, stampando un link per la show di ciascuno.

