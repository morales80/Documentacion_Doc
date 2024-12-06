
**También llamado:** Estrategia

### proposito
_El patrón de diseño *Strategy* es un enfoque de comportamiento que te permite crear un conjunto de algoritmos relacionados, encapsular cada uno en su propia clase y permitir que los objetos que los usan puedan cambiar dinámicamente entre ellos según sea necesario. Esto facilita la flexibilidad y el mantenimiento del código al separar la lógica de los algoritmos de la lógica del cliente._

![strategy](https://th.bing.com/th/id/R.06300a3d6e4e5aa943a8f69b052fa6ff?rik=AECDwYm%2f3bF2eA&pid=ImgRaw&r=0)

## Analogía en el mundo real

_Imagina que estás eligiendo cómo cocinar un huevo. Puedes freírlo, hervirlo o hacerlo revuelto. Cada una de estas opciones representa una estrategia de preparación. Según tus preferencias de sabor, el tiempo que tienes disponible o los utensilios a tu alcance, puedes seleccionar la estrategia que mejor se adapte a la situación._

![analogía](https://files.oaiusercontent.com/file-F8obTgMTqRET4ecapPTsdV?se=2024-12-06T00%3A15%3A52Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3Ded2e66b0-c58f-4a3c-96b6-e8effe46b975.webp&sig=5Vjb9upKDnW%2BPupn0DEOgL3Z%2BI9W7f/zLMssK%2BhBB9U%3D)

## Estructura
![estructura](https://refactoring.guru/images/patterns/diagrams/strategy/structure-indexed.png?id=ff55c5a6273cf82a5667f3cab5b605c7)

1. _La clase **Contexto** mantiene una referencia a una de las estrategias concretas y se comunica con este objeto únicamente a través de la interfaz estrategia._

2.  _La interfaz **Estrategia** es común a todas las estrategias concretas. Declara un método que la clase contexto utiliza para ejecutar una estrategia._

3.  _Las **Estrategias Concretas** implementan distintas variaciones de un algoritmo que la clase contexto utiliza._

4.  _La clase contexto invoca el método de ejecución en el objeto de estrategia vinculado cada vez que necesita ejecutar el algoritmo. La clase contexto no sabe con qué tipo de estrategia funciona o cómo se ejecuta el algoritmo._

5.  _El **Cliente** crea un objeto de estrategia específico y lo pasa a la clase contexto. La clase contexto expone un modificador set que permite a los clientes sustituir la estrategia asociada al contexto durante el tiempo de ejecución._

## Pseudocódigo
_En este ejemplo, el contexto utiliza varias estrategias para ejecutar diversas operaciones aritméticas._

```// La interfaz estrategia declara operaciones comunes a todas
// las versiones soportadas de algún algoritmo. El contexto
// utiliza esta interfaz para invocar el algoritmo definido por
// las estrategias concretas.
interface Strategy is
    method execute(a, b)

// Las estrategias concretas implementan el algoritmo mientras
// siguen la interfaz estrategia base. La interfaz las hace
// intercambiables en el contexto.
class ConcreteStrategyAdd implements Strategy is
    method execute(a, b) is
        return a + b

class ConcreteStrategySubtract implements Strategy is
    method execute(a, b) is
        return a - b

class ConcreteStrategyMultiply implements Strategy is
    method execute(a, b) is
        return a * b

// El contexto define la interfaz de interés para los clientes.
class Context is
    // El contexto mantiene una referencia a uno de los objetos
    // de estrategia. El contexto no conoce la clase concreta de
    // una estrategia. Debe trabajar con todas las estrategias a
    // través de la interfaz estrategia.
    private strategy: Strategy

    // Normalmente, el contexto acepta una estrategia a través
    // del constructor y también proporciona un setter
    // (modificador) para poder cambiar la estrategia durante el
    // tiempo de ejecución.
    method setStrategy(Strategy strategy) is
        this.strategy = strategy

    // El contexto delega parte del trabajo al objeto de
    // estrategia en lugar de implementar varias versiones del
    // algoritmo por su cuenta.
    method executeStrategy(int a, int b) is
        return strategy.execute(a, b)


// El código cliente elige una estrategia concreta y la pasa al
// contexto. El cliente debe conocer las diferencias entre
// estrategias para elegir la mejor opción.
class ExampleApplication is
    method main() is
        Create context object.

        Read first number.
        Read last number.
        Read the desired action from user input.

        if (action == addition) then
            context.setStrategy(new ConcreteStrategyAdd())

        if (action == subtraction) then
            context.setStrategy(new ConcreteStrategySubtract())

        if (action == multiplication) then
            context.setStrategy(new ConcreteStrategyMultiply())

        result = context.executeStrategy(First number, Second number)

        Print result.
```
## Cómo implementarlo

- _En la clase contexto, identifica un algoritmo que tienda a sufrir cambios frecuentes. También puede ser un enorme condicional que seleccione y ejecute una variante del mismo algoritmo durante el tiempo de ejecución._

- _Declara la interfaz estrategia común a todas las variantes del algoritmo._

- _Uno a uno, extrae todos los algoritmos y ponlos en sus propias clases. Todas deben implementar la misma interfaz estrategia._

- _Los clientes de la clase contexto deben asociarla con una estrategia adecuada que coincida con la forma en la que esperan que la clase contexto realice su trabajo principal._

![implementación](https://th.bing.com/th/id/OIP.BSdPVU1Z7eNM5Gr_VF8hGgAAAA?rs=1&pid=ImgDetMain)

## Pros

 1. _Puedes intercambiar algoritmos usados dentro de un objeto durante el tiempo de ejecución._

 2. _Puedes aislar los detalles de implementación de un algoritmo del código que lo utiliza._

 3. _Puedes sustituir la herencia por composición._

 4. _Principio de abierto/cerrado. Puedes introducir nuevas estrategias sin tener que cambiar el contexto._

![ventajas](https://krative.digital/content/images/2023/06/Strategy-1.png)

## contras

 1. _Si sólo tienes un par de algoritmos que raramente cambian, no hay una razón real para complicar el programa en exceso con nuevas clases e interfaces que vengan con el patrón._

 2. _Los clientes deben conocer las diferencias entre estrategias para poder seleccionar la adecuada._

 3. _Muchos lenguajes de programación modernos tienen un soporte de tipo funcional que te permite implementar distintas versiones de un algoritmo dentro de un grupo de funciones anónimas. 
 Entonces puedes utilizar estas funciones exactamente como habrías utilizado los objetos de estrategia, pero sin saturar tu código con clases e interfaces adicionales._

![desventajas](https://media.istockphoto.com/vectors/like-and-dislike-icons-set-thumb-up-symbol-finger-up-icon-like-and-vector-id1158443058?k=20&m=1158443058&s=170667a&w=0&h=MFgFP-4y4KmKgxOml7rp7EiSH4W6bRvN7Uh4zINfze0=)

