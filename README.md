# Esercizio giorno 4 - express-blog-intro

## Esercizio

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
