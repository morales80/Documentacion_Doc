## Observer

También llamado: Observador, Publicación-Suscripción, Modelo-patrón, Event-Subscriber, Listener.

### Propósito
Observer es un patrón de diseño de comportamiento que te permite definir un mecanismo de suscripción para notificar a varios objetos sobre cualquier evento que le suceda al objeto que están observando.

![Observer](https://www.hollywoodreporter.com/wp-content/uploads/2015/10/tvwriter.jpg?w=1500)

### Analogía en el mundo real

![Analogia](https://refactoring.guru/images/patterns/content/observer/observer-comic-2-es.png?id=27c5c4513d9c52b4198ef61d32b4e201)

Si te suscribes a un periódico o una revista, ya no necesitarás ir a la tienda a comprobar si el siguiente número está disponible. En lugar de eso, el notificador envía nuevos números directamente a tu buzón justo después de la publicación, o incluso antes.

El notificador mantiene una lista de suscriptores y sabe qué revistas les interesan. Los suscriptores pueden abandonar la lista en cualquier momento si quieren que el notificador deje de enviarles nuevos números.

