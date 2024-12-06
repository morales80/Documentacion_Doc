# Singleton

El patrón de diseño Singleton es un enfoque creacional que asegura que una clase tenga solo una instancia durante toda la ejecución del programa. Este patrón controla la creación de objetos, evitando que se creen múltiples instancias de la misma clase, lo que puede ser útil cuando se necesita un único punto de acceso a los recursos compartidos, como una base de datos o una configuración global. Además, proporciona un acceso global a la instancia única, asegurando que todas las partes del sistema usen la misma instancia.


![](https://refactoring.guru/images/patterns/content/singleton/singleton.png?id=108a0b9b5ea5c4426e0afa4504491d6f)

### ¿Cómo Funciona?

El patrón Singleton asegura que una clase tenga solo una instancia durante la ejecución de un programa y proporciona un punto de acceso global a esa instancia. Para lograrlo, utiliza una variable estática que mantiene la referencia de la instancia. Si la instancia no ha sido creada aún, el método estático la genera; si ya existe, simplemente la devuelve.

* El constructor de la clase se declara privado para evitar que otras clases creen instancias directamente. Solo el método estático tiene acceso para crear la instancia y proporcionar acceso a ella.

* En aplicaciones que operan en entornos multihilo, el patrón Singleton también implementa mecanismos de sincronización para garantizar que solo un hilo cree la instancia en simultáneo, evitando problemas de concurrencia.

Este patrón es ideal cuando se necesita controlar recursos compartidos, como una conexión a base de datos o configuraciones globales, ya que asegura que solo haya una instancia accesible desde diferentes partes del sistema.

### Ventajas del patrón Singleton

* **Control de acceso único**
El patrón garantiza que solo haya una instancia de la clase. Esto es particularmente útil cuando necesitas que ciertos recursos compartidos no sean duplicados, como en el caso de las conexiones a bases de datos o los registros de configuración.

* **Flexibilidad**
Aunque el Singleton asegura una única instancia, todavía permite que dicha instancia sea modificada y configurada según sea necesario, lo que otorga flexibilidad para cambiar el comportamiento de la instancia en el futuro.

* **Fácil implementación**
Implementar un Singleton es relativamente sencillo. Solo necesitas asegurarte de que la clase tenga un constructor privado y un método estático que devuelva la instancia única.

### Desventajas del patrón Singleton

* **Difícil de probar:**
Los Singletons pueden dificultar las pruebas unitarias. Dado que son globales y la instancia está controlada dentro de la propia clase, puede ser complicado realizar pruebas aisladas sin que afecte el estado global de la aplicación.

* **Acoplamiento alto:**
Al ser un punto de acceso global, el uso de Singletons puede incrementar el acoplamiento entre las clases, ya que las clases que lo usan dependen de una instancia global. Esto puede generar problemas si no se gestiona adecuadamente, ya que se pueden crear dependencias difíciles de controlar.

* **Violación del principio de responsabilidad única:**
El patrón Singleton puede violar el principio de responsabilidad única (SRP) de la programación orientada a objetos, ya que la clase no solo gestiona la instancia única, sino que también puede estar a cargo de una lógica adicional que la convierte en un "componente global" difícil de manejar.

### Casos de uso comunes

- Cuando se necesita acceder a una configuración común en toda la aplicación, el Singleton asegura que todos los componentes utilicen la misma instancia.
- Para evitar múltiples conexiones simultáneas a una base de datos, el Singleton permite controlar una única instancia de la conexión.
- En aplicaciones donde se necesita registrar información de eventos globalmente, el Singleton puede garantizar que se utilice una única instancia del sistema de logs.

### Estructura

En el patrón Singleton, la clase declara un método estático **_getInstance()_**, el cual se utiliza para obtener la única instancia de la clase. La idea principal es que solo haya una instancia de la clase en todo el sistema, y la forma de acceder a esta instancia es a través de este método estático.

El constructor de la clase Singleton debe estar oculto o privado, lo que impide que otros objetos o clases creen nuevas instancias de la clase directamente. De esta manera, la única forma de acceder al objeto Singleton es llamando al método getInstance(). Este método garantiza que solo se cree una instancia de la clase y que se reutilice esta instancia siempre que sea necesario.

*Diagrama diagrama de patrón de diseño Singleton*
![Diagrama](https://refactoring.guru/images/patterns/diagrams/singleton/structure-en.png?id=4e4306d3a90f40d74c7a4d2d2506b8ec)

### Ejemplo practico de codigo:

En este caso, la clase ConfiguracionApp actúa como un Singleton. La clase no tiene un constructor público, por lo que la única manera de obtener su instancia es mediante el método obtenerConfiguracion. Este método asegura que la configuración sea una sola instancia que se mantenga constante durante la ejecución de la aplicación.

```
Clase ConfiguracionApp:
    // Atributo privado estático para almacenar la instancia única
    InstanciaPrivada: ConfiguracionApp
    // Atributos para almacenar la configuración
    AtributosDeConfiguracion: Mapa

    // Constructor privado para prevenir la creación de instancias desde fuera
    Método Constructor():
        Si la instancia no es nula:
            Lanzar excepción "Instancia ya existe"
        FinSi
        // Inicializar los atributos de configuración con valores predeterminados
        AtributosDeConfiguracion = { "idioma": "español", "modo": "oscuro" }

    // Método estático para obtener la instancia de la clase
    Método obtenerConfiguracion():
        Si la instancia es nula:
            Crear nueva instancia de ConfiguracionApp
        FinSi
        Devolver la instancia

    // Método para obtener un valor de configuración
    Método obtenerValorConfiguracion(clave):
        Devolver AtributosDeConfiguracion[clave]

    // Método para actualizar la configuración
    Método actualizarConfiguracion(clave, valor):
        AtributosDeConfiguracion[clave] = valor
FinClase

// Uso del Singleton
configuracion1 = ConfiguracionApp.obtenerConfiguracion()
configuracion1.actualizarConfiguracion("idioma", "inglés")

configuracion2 = ConfiguracionApp.obtenerConfiguracion()
// configuracion1 y configuracion2 son la misma instancia, se mantienen sincronizadas

```

### Comparación con otros patrones de diseño

* Singleton vs Factory Method:
El patrón **Factory Method** se utiliza para crear objetos sin especificar la clase exacta del objeto que se va a crear. A diferencia del Singleton, que asegura una sola instancia de una clase, el Factory Method puede crear diferentes instancias, pero no garantiza que solo haya una.

* Singleton vs Prototype:
El patrón **Prototype** crea nuevos objetos copiando un objeto existente en lugar de crear instancias de una clase. A diferencia del Singleton, el Prototype puede generar múltiples instancias, lo que lo hace más flexible en ciertos casos, pero menos útil cuando solo se necesita una instancia única.

### Aplicabilidad

>Utiliza el patrón Singleton cuando una clase de tu programa tan solo deba tener una instancia disponible para todos los clientes; por ejemplo, un único objeto de base de datos compartido por distintas partes del programa.

>El patrón Singleton deshabilita el resto de las maneras de crear objetos de una clase, excepto el método especial de creación. Este método crea un nuevo objeto, o bien devuelve uno existente si ya ha sido creado.

### ¿Cuando apicar el patron?

Utiliza el patrón Singleton cuando necesites un control más estricto de las variables globales.

 Al contrario que las variables globales, el patrón Singleton garantiza que haya una única instancia de una clase. A excepción de la propia clase Singleton, nada puede sustituir la instancia en caché.

Ten en cuenta que siempre podrás ajustar esta limitación y permitir la creación de cierto número de instancias Singleton. La única parte del código que requiere cambios es el cuerpo del método **_getInstance_**.

### Pasos para implementar el patrón Singleton

1. **Añade un campo estático privado** a la clase para almacenar la instancia Singleton.
2. **Declara un método de creación estático público** para obtener la instancia Singleton.
3. **Implementa una inicialización diferida dentro del método estático:**
   - Crea un nuevo objeto en su primera llamada y colócalo dentro del campo estático.
   - El método deberá devolver siempre esa instancia en todas las llamadas siguientes.
4. **Declara el constructor de clase como privado**:
   - El método estático de la clase podrá invocar al constructor.
   - Los otros objetos no podrán hacerlo.
5. **Repasa el código cliente**:
   - Sustituye todas las llamadas directas al constructor de la instancia Singleton por llamadas a su método de creación estático.
