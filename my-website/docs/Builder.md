# Builder
Builder es un patrón de diseño creacional que nos permite construir objetos complejos paso a paso. El patrón nos permite producir distintos tipos y representaciones de un objeto empleando el mismo código de construcción.

![Imagen de ejemplo](https://www.ionos.mx/digitalguide/fileadmin/DigitalGuide/Schaubilder/ejemplo-para-visualizar-la-mecanica-de-builder-battern.png)

## Propósito
Es separar la construcción de un objeto complejo de su representación, permitiendo que el mismo proceso de construcción pueda crear diferentes representaciones del objeto. Este patrón es útil cuando necesitas construir objetos que tienen muchas partes configurables o pasos para su creación.

### Características
  - Permite construir objetos complejos paso a paso.
  - Se utiliza cuando se quiere crear una interfaz clara para construir objetos de una clase.
  - Permite crear distintos productos utilizando el mismo proceso de construcción. 
  - Encapsula el código de construcción y de representación. 
  - Proporciona un control más explícito sobre el proceso de construcción.

### Ventajas y Desventajas
| **Ventajas**                                                                 | **Desventajas**                                                               |
|-------------------------------------------------------------------------------|--------------------------------------------------------------------------------|
| **Facilita la creación de objetos complejos**: Permite construir objetos paso a paso, dividiendo el proceso en partes manejables. | **Incrementa el número de clases**: Requiere crear múltiples clases para los Builders y, a veces, para los Directores, lo que puede aumentar la complejidad. |
| **Fomenta la reutilización**: Puedes reutilizar el mismo código de construcción para diferentes representaciones del objeto. | **Sobrecarga inicial**: El diseño y configuración del patrón pueden ser excesivos para objetos simples o con pocas configuraciones. |
| **Flexibilidad**: Permite variar la representación final de un objeto configurando diferentes pasos de construcción. | **Más código**: Comparado con otros enfoques (como constructores telescópicos), puede requerir más líneas de código para configurarlo. |
| **Desacopla la creación y la representación**: Separa la lógica de construcción de la lógica del objeto, mejorando la claridad del diseño. | **Complejidad innecesaria**: Puede ser excesivo para objetos que no son lo suficientemente complejos como para justificar su uso. |
| **Promueve la inmutabilidad**: Garantiza que el objeto esté completamente construido antes de ser utilizado, evitando estados inconsistentes. | **Dependencia del Director (opcional)**: Si se usa un Director, este puede agregar una capa adicional que no siempre es necesaria. |

### Analogía 
Imagina que estás en un restaurante de comida rápida donde puedes armar tu propia hamburguesa personalizada.

**Menú Base:** El restaurante tiene una lista de ingredientes (pan, carne, queso, lechuga, tomate, etc.).

**Construcción Paso a Paso:** Tú decides qué ingredientes incluir, en qué orden, y cómo debe ser la hamburguesa (doble carne, sin queso, etc.).

**Cocinero (Builder)** Es quien sigue tus instrucciones para armar la hamburguesa exactamente como tú la quieres.

**Cajero (Director):** Coordina el proceso y asegura que el cocinero siga las instrucciones para construir la hamburguesa de acuerdo con tu pedido.

**Hamburguesa Final:** Es el producto terminado, que puede ser diferente para cada cliente dependiendo de sus preferencias.

### Código de Implementación 
Este ejemplo del patrón Builder ilustra cómo se puede reutilizar el mismo código de construcción de objetos a la hora de construir distintos tipos de productos, como automóviles, y crear los correspondientes manuales para esos automóviles.

![Imagen de ejemplo](https://refactoring.guru/images/patterns/diagrams/builder/example-es.png?id=c326e99e007a469951240da70b4294d7)

_Ejemplo de una construcción paso a paso de automóviles y de los manuales de usuario para esos modelos de automóvil._

Un automóvil es un objeto complejo que puede construirse de mil maneras diferentes. En lugar de saturar la clase Automóvil con un constructor enorme, extrajimos el código de ensamblaje del automóvil y lo pusimos en una clase constructora de automóviles independiente. Esta clase tiene un grupo de métodos para configurar las distintas partes de un automóvil.

Si el código cliente necesita ensamblar un modelo de automóvil con ajustes especiales, puede trabajar directamente con el objeto constructor. Por otro lado, el cliente puede delegar el ensamblaje a la clase directora, que sabe cómo utilizar un objeto constructor para construir varios de los modelos más populares de automóviles.

Puede que te sorprenda, pero todo automóvil necesita un manual (en serio, ¿quién se los lee?). El manual explica cada característica del automóvil, de modo que los detalles del manual varían de un modelo a otro. Por eso tiene lógica reutilizar un proceso de construcción existente para automóviles reales y sus respectivos manuales. Por supuesto, elaborar un manual no es lo mismo que fabricar un automóvil, por lo que debemos incluir otra clase constructora especializada en elaborar manuales. Esta clase implementa los mismos métodos de construcción que su hermana constructora de automóviles , pero, en lugar de fabricar piezas del automóvil, las describe. Al pasar estos constructores al mismo objeto director, podemos construir tanto un automóvil como un manual.

La última parte consiste en buscar el objeto resultante. Un automóvil de metal y un manual de papel, aunque estén relacionados, son objetos muy diferentes. No podemos colocar un método para buscar resultados en la clase directora sin acoplarla a clases de productos concretos. Por lo tanto, obtenemos el resultado de la construcción del constructor que realizó el trabajo.

```bash
   // El uso del patrón Builder sólo tiene sentido cuando tus
// productos son bastante complejos y requieren una
// configuración extensiva. Los dos siguientes productos están
// relacionados, aunque no tienen una interfaz común.
class Car is
    // Un coche puede tener un GPS, una computadora de
    // navegación y cierto número de asientos. Los distintos
    // modelos de coches (deportivo, SUV, descapotable) pueden
    // tener distintas características instaladas o habilitadas.

class Manual is
    // Cada coche debe contar con un manual de usuario que se
    // corresponda con la configuración del coche y explique
    // todas sus características.


// La interfaz constructora especifica métodos para crear las
// distintas partes de los objetos del producto.
interface Builder is
    method reset()
    method setSeats(...)
    method setEngine(...)
    method setTripComputer(...)
    method setGPS(...)

// Las clases constructoras concretas siguen la interfaz
// constructora y proporcionan implementaciones específicas de
// los pasos de construcción. Tu programa puede tener multitud
// de variaciones de objetos constructores, cada una de ellas
// implementada de forma diferente.
class CarBuilder implements Builder is
    private field car:Car

    // Una nueva instancia de la clase constructora debe
    // contener un objeto de producto en blanco que utiliza en
    // el montaje posterior.
    constructor CarBuilder() is
        this.reset()

    // El método reset despeja el objeto en construcción.
    method reset() is
        this.car = new Car()

    // Todos los pasos de producción funcionan con la misma
    // instancia de producto.
    method setSeats(...) is
        // Establece la cantidad de asientos del coche.

    method setEngine(...) is
        // Instala un motor específico.

    method setTripComputer(...) is
        // Instala una computadora de navegación.

    method setGPS(...) is
        // Instala un GPS.

    // Los constructores concretos deben proporcionar sus
    // propios métodos para obtener resultados. Esto se debe a
    // que varios tipos de objetos constructores pueden crear
    // productos completamente diferentes de los cuales no todos
    // siguen la misma interfaz. Por lo tanto, dichos métodos no
    // pueden declararse en la interfaz constructora (al menos
    // no en un lenguaje de programación de tipado estático).
    //
    // Normalmente, tras devolver el resultado final al cliente,
    // una instancia constructora debe estar lista para empezar
    // a generar otro producto. Ese es el motivo por el que es
    // práctica común invocar el método reset al final del
    // cuerpo del método `getProduct`. Sin embargo, este
    // comportamiento no es obligatorio y puedes hacer que tu
    // objeto constructor espere una llamada reset explícita del
    // código cliente antes de desechar el resultado anterior.
    method getProduct():Car is
        product = this.car
        this.reset()
        return product

// Al contrario que otros patrones creacionales, Builder te
// permite construir productos que no siguen una interfaz común.
class CarManualBuilder implements Builder is
    private field manual:Manual

    constructor CarManualBuilder() is
        this.reset()

    method reset() is
        this.manual = new Manual()

    method setSeats(...) is
        // Documenta las características del asiento del coche.

    method setEngine(...) is
        // Añade instrucciones del motor.

    method setTripComputer(...) is
        // Añade instrucciones de la computadora de navegación.

    method setGPS(...) is
        // Añade instrucciones del GPS.

    method getProduct():Manual is
        // Devuelve el manual y rearma el constructor.


// El director sólo es responsable de ejecutar los pasos de
// construcción en una secuencia particular. Resulta útil cuando
// se crean productos de acuerdo con un orden o configuración
// específicos. En sentido estricto, la clase directora es
// opcional, ya que el cliente puede controlar directamente los
// objetos constructores.
class Director is
    // El director funciona con cualquier instancia de
    // constructor que le pase el código cliente. De esta forma,
    // el código cliente puede alterar el tipo final del
    // producto recién montado. El director puede construir
    // multitud de variaciones de producto utilizando los mismos
    // pasos de construcción.
    method constructSportsCar(builder: Builder) is
        builder.reset()
        builder.setSeats(2)
        builder.setEngine(new SportEngine())
        builder.setTripComputer(true)
        builder.setGPS(true)

    method constructSUV(builder: Builder) is
        // ...


// El código cliente crea un objeto constructor, lo pasa al
// director y después inicia el proceso de construcción. El
// resultado final se extrae del objeto constructor.
class Application is

    method makeCar() is
        director = new Director()

        CarBuilder builder = new CarBuilder()
        director.constructSportsCar(builder)
        Car car = builder.getProduct()

        CarManualBuilder builder = new CarManualBuilder()
        director.constructSportsCar(builder)

        // El producto final a menudo se extrae de un objeto
        // constructor, ya que el director no conoce y no
        // depende de constructores y productos concretos.
        Manual manual = builder.getProduct()
```


