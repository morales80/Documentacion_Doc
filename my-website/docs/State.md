# State 
State es un patrón de diseño de comportamiento que permite a un objeto alterar su comportamiento cuando su estado interno cambia. Parece como si el objeto cambiara su clase. 

![Imagen de ejemplo](https://refactoring.guru/images/patterns/content/state/state-es.png?id=03f2a3a86f4b58cc21b4c8c152d6c0ec)

## Propósito
Es gestionar el estado de un objeto y cómo afecta su comportamiento de una manera más flexible y organizada. En lugar de tener código condicional en el objeto que maneja su estado, el patrón State permite delegar cada estado a una clase propia que encapsula el comportamiento correspondiente a ese estado.

### Características
  - Permite modificar el comportamiento de un objeto según su estado.
  - Desacopla el comportamiento del objeto de su implementación.
  - Extrae los comportamientos relacionados con el estado y los coloca en clases de estado separadas.
  - Permite cambiar el comportamiento del objeto en tiempo de ejecución.
  - Obliga al objeto original a delegar el trabajo a una instancia de las clases de estado. 

**Estas son algunas ventajas y desventajas de nuestro patrón de diseño de State**
| **Ventajas**                                      | **Desventajas**                                 |
|--------------------------------------------------|------------------------------------------------|
| **Mejora la legibilidad**: Al encapsular los estados en clases separadas, el código es más fácil de leer y entender. | **Complejidad adicional**: La implementación del patrón puede agregar complejidad extra al sistema, especialmente si hay muchos estados. |
| **Facilita la extensión**: Nuevos estados pueden agregarse sin modificar el código existente, lo que sigue el principio de abierto/cerrado. | **Demasiados objetos**: En sistemas con muchos estados, puede haber una proliferación de clases, lo que lleva a un aumento en el número de objetos. |
| **Reduce el acoplamiento**: Cada estado se maneja de forma independiente, lo que reduce el acoplamiento entre clases. | **Posible confusión**: Puede ser difícil gestionar la transición entre los diferentes estados si no se implementa correctamente. |
| **Permite cambios dinámicos de estado**: El patrón facilita la transición entre diferentes estados en tiempo de ejecución, permitiendo un comportamiento flexible. | **Sobrecarga de mantenimiento**: Si no se controla bien, la cantidad de estados y transiciones puede generar una sobrecarga en el mantenimiento del sistema. |
| **Facilita la depuración**: Al tener clases que representan estados, se puede aislar más fácilmente el comportamiento en cada estado. | **Sobrecarga en pequeños proyectos**: En proyectos simples, el patrón puede ser innecesario, agregando una complejidad innecesaria. |

### Analogía del Patrón State
Imagina que tienes una máquina expendedora de bebidas. Esta máquina tiene varios estados: "Esperando Moneda", "Esperando Selección de Bebida", **"Entregando Bebida", y "Vendiendo".** Cada uno de estos estados tiene comportamientos diferentes y depende de la acción del usuario.

- **Esperando Moneda:** La máquina está esperando que pongas una moneda. En este estado, la máquina no puede entregar bebidas ni hacer nada más. Solo espera una acción.
- **Esperando Selección de Bebida:** Una vez que la máquina recibe la moneda, cambia a este estado, donde ahora puede tomar tu selección. En este estado, puedes elegir entre diferentes opciones de bebidas.
- **Entregando Bebida:** Después de que haces la selección, la máquina pasa a este estado y entrega la bebida que elegiste.
- **Vendiendo:** Si la máquina está fuera de servicio, se cambia a este estado donde no puedes usarla hasta que se repare.

Cada estado es responsable de una parte específica de la máquina, y puede cambiar a otro estado dependiendo de las interacciones del usuario. La máquina no intenta hacer todo al mismo tiempo, sino que cambia de estado para gestionar de forma eficiente su funcionamiento.

### Código de Implementación 
En este ejemplo, el patrón State permite a los mismos controles del reproductor de medios comportarse de forma diferente, dependiendo del estado actual de reproducción.

![Imagen de ejemplo](https://refactoring.guru/images/patterns/diagrams/state/example.png?id=1ffdb109b3ebb85d223b9d1651d2034c)

_Ejemplo de cambio del comportamiento de un objeto con objetos de estado._

El objeto principal del reproductor siempre está vinculado a un objeto de estado que realiza la mayor parte del trabajo del reproductor. Algunas acciones sustituyen el objeto de estado actual del reproductor por otro, lo cual cambia la forma en la que el reproductor reacciona a las interacciones del usuario.


```bash
// La clase ReproductordeAudio actúa como un contexto. También
// mantiene una referencia a una instancia de una de las clases
// estado que representa el estado actual del reproductor de
// audio.
class AudioPlayer is
    field state: State
    field UI, volume, playlist, currentSong

    constructor AudioPlayer() is
        this.state = new ReadyState(this)

        // El contexto delega la gestión de entradas del usuario
        // a un objeto de estado. Naturalmente, el resultado
        // depende del estado que esté activo ahora, ya que cada
        // estado puede gestionar las entradas de manera
        // diferente.
        UI = new UserInterface()
        UI.lockButton.onClick(this.clickLock)
        UI.playButton.onClick(this.clickPlay)
        UI.nextButton.onClick(this.clickNext)
        UI.prevButton.onClick(this.clickPrevious)

    // Otros objetos deben ser capaces de cambiar el estado
    // activo del reproductor.
    method changeState(state: State) is
        this.state = state

    // Los métodos UI delegan la ejecución al estado activo.
    method clickLock() is
        state.clickLock()
    method clickPlay() is
        state.clickPlay()
    method clickNext() is
        state.clickNext()
    method clickPrevious() is
        state.clickPrevious()

    // Un estado puede invocar algunos métodos del servicio en
    // el contexto.
    method startPlayback() is
        // ...
    method stopPlayback() is
        // ...
    method nextSong() is
        // ...
    method previousSong() is
        // ...
    method fastForward(time) is
        // ...
    method rewind(time) is
        // ...


// La clase estado base declara métodos que todos los estados
// concretos deben implementar, y también proporciona una
// referencia inversa al objeto de contexto asociado con el
// estado. Los estados pueden utilizar la referencia inversa
// para dirigir el contexto a otro estado.
abstract class State is
    protected field player: AudioPlayer

    // El contexto se pasa a sí mismo a través del constructor
    // del estado. Esto puede ayudar al estado a extraer
    // información de contexto útil si la necesita.
    constructor State(player) is
        this.player = player

    abstract method clickLock()
    abstract method clickPlay()
    abstract method clickNext()
    abstract method clickPrevious()


// Los estados concretos implementan varios comportamientos
// asociados a un estado del contexto.
class LockedState extends State is

    // Cuando desbloqueas a un jugador bloqueado, puede asumir
    // uno de dos estados.
    method clickLock() is
        if (player.playing)
            player.changeState(new PlayingState(player))
        else
            player.changeState(new ReadyState(player))

    method clickPlay() is
        // Bloqueado, no hace nada.

    method clickNext() is
        // Bloqueado, no hace nada.

    method clickPrevious() is
        // Bloqueado, no hace nada.

// También pueden disparar transiciones de estado en el
// contexto.
class ReadyState extends State is
    method clickLock() is
        player.changeState(new LockedState(player))

    method clickPlay() is
        player.startPlayback()
        player.changeState(new PlayingState(player))

    method clickNext() is
        player.nextSong()

    method clickPrevious() is
        player.previousSong()


class PlayingState extends State is
    method clickLock() is
        player.changeState(new LockedState(player))

    method clickPlay() is
        player.stopPlayback()
        player.changeState(new ReadyState(player))

    method clickNext() is
        if (event.doubleclick)
            player.nextSong()
        else
            player.fastForward(5)

    method clickPrevious() is
        if (event.doubleclick)
            player.previous()
        else
            player.rewind(5)
```

