# Singleton

El patrón de diseño Singleton es un enfoque creacional que asegura que una clase tenga solo una instancia durante toda la ejecución del programa. Este patrón controla la creación de objetos, evitando que se creen múltiples instancias de la misma clase, lo que puede ser útil cuando se necesita un único punto de acceso a los recursos compartidos, como una base de datos o una configuración global. Además, proporciona un acceso global a la instancia única, asegurando que todas las partes del sistema usen la misma instancia.


![](https://refactoring.guru/images/patterns/content/singleton/singleton.png?id=108a0b9b5ea5c4426e0afa4504491d6f)

### ¿Cómo Funciona?

El patrón Singleton asegura que una clase tenga solo una instancia durante la ejecución de un programa y proporciona un punto de acceso global a esa instancia. Para lograrlo, utiliza una variable estática que mantiene la referencia de la instancia. Si la instancia no ha sido creada aún, el método estático la genera; si ya existe, simplemente la devuelve.

* El constructor de la clase se declara privado para evitar que otras clases creen instancias directamente. Solo el método estático tiene acceso para crear la instancia y proporcionar acceso a ella.

* En aplicaciones que operan en entornos multihilo, el patrón Singleton también implementa mecanismos de sincronización para garantizar que solo un hilo cree la instancia en simultáneo, evitando problemas de concurrencia.

Este patrón es ideal cuando se necesita controlar recursos compartidos, como una conexión a base de datos o configuraciones globales, ya que asegura que solo haya una instancia accesible desde diferentes partes del sistema.