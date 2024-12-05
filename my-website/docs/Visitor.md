# Visitor
Visitor es un patrón de diseño de comportamiento que te permite separar algoritmos de los objetos sobre los que operan.

![Imagen de ejemplo](https://reactiveprogramming.io/_next/image?url=%2Fbooks%2Fpatterns%2Fimg%2Fpatterns%2Fvisitor2.png&w=3840&q=75)

## Propósito
Es separar el algoritmo de los objetos sobre los que opera, permitiendo añadir nuevas operaciones a una estructura de objetos sin modificar las clases de esos objetos. En lugar de cambiar la estructura de las clases, el patrón permite añadir nuevas funcionalidades o comportamientos a través de un visitante.

### Características
  - Permite ejecutar una operación sobre un conjunto de objetos con distintas clases.
  - Permite añadir nuevas operaciones a las estructuras de objetos existentes sin modificarlas.
  - Es una forma de implementar el Principio Abierto-Cerrado (OCP). 
  - Los visitantes pueden carecer del acceso necesario a los campos y métodos privados de los elementos. 
  - Se debe actualizar todos los visitantes cada vez que una clase se añada o elimine.

### Ventajas y Desventajas
| **Ventajas**                                                                 | **Desventajas**                                                              |
|-------------------------------------------------------------------------------|-------------------------------------------------------------------------------|
| **Facilita la adición de nuevas operaciones**: Permite agregar nuevas operaciones sin modificar las clases de los objetos. | **Dificultad para agregar nuevos elementos**: Si se agregan nuevos tipos de objetos (nuevas clases), es necesario modificar todos los visitantes existentes para adaptarse a los nuevos tipos. |
| **Desacopla las operaciones de las clases**: Las operaciones se definen en el visitante, separándolas de las clases de los elementos sobre los que operan. | **Complejidad en la implementación**: La implementación puede volverse compleja en sistemas grandes debido a la necesidad de crear y mantener múltiples clases de visitantes. |
| **Mejora la extensibilidad**: Es fácil agregar nuevas operaciones sin cambiar las clases base, solo creando nuevos visitantes. | **Dependencia de la jerarquía de clases**: Las clases de elementos deben tener un método `Accept` para permitir que el visitante opere sobre ellas, lo que puede aumentar el acoplamiento. |
| **Promueve el principio de abierto/cerrado**: Las clases de elementos están cerradas para modificaciones, pero abiertas para la extensión a través de los visitantes. | **No es adecuado para cambios frecuentes**: Si las operaciones en los objetos cambian con frecuencia, el patrón puede requerir constantes cambios en los visitantes, lo que puede ser costoso. |
| **Facilita la mantenibilidad**: Centraliza las operaciones en los visitantes, lo que facilita su modificación y mantenimiento sin tocar las clases de los elementos. | **Aumento del número de clases**: Se puede generar una gran cantidad de clases visitantes, lo que hace más difícil la gestión del código. |

### Analogía 
Imagina un experimentado agente de seguros que está deseoso de conseguir nuevos clientes. Puede visitar todos los edificios de un barrio, intentando vender seguros a todo aquel que se va encontrando. Dependiendo del tipo de organización que ocupe el edificio, puede ofrecer pólizas de seguro especializadas:

![Imagen de ejemplo](https://refactoring.guru/images/patterns/content/visitor/visitor-comic-1.png?id=7ee4fa8800f7c4df4e1aa3b1aca2b7f1)

_Un buen agente de seguros siempre está listo para ofrecer pólizas diferentes a los distintos tipos de organizaciones._

  - Si es un edificio residencial, vende seguros médicos.
  - Si es un banco, vende seguros contra robos.
  - Si es una cafetería, vende seguros contra incendios e inundaciones.

### Código de Implementación 
En este ejemplo, el patrón Visitor añade soporte de exportación XML a la jerarquía de clases de formas geométricas.

![Imagen de ejemplo](https://refactoring.guru/images/patterns/diagrams/visitor/example.png?id=d66acd1b9096c47db17ab3bb82b54a59)

_Exportar varios tipos de objetos a formato XML a través de un objeto visitante._

```bash
    // La interfaz elemento declara un método `accept` (aceptar) que
// toma la interfaz visitante base como argumento.
interface Shape is
    method move(x, y)
    method draw()
    method accept(v: Visitor)

// Cada clase de elemento concreto debe implementar el método
// `accept` de tal manera que invoque el método del visitante
// que corresponde a la clase del elemento.
class Dot implements Shape is
    // ...

    // Observa que invocamos `visitDot`, que coincide con el
    // nombre de la clase actual. De esta forma, hacemos saber
    // al visitante la clase del elemento con el que trabaja.
    method accept(v: Visitor) is
        v.visitDot(this)

class Circle implements Shape is
    // ...
    method accept(v: Visitor) is
        v.visitCircle(this)

class Rectangle implements Shape is
    // ...
    method accept(v: Visitor) is
        v.visitRectangle(this)

class CompoundShape implements Shape is
    // ...
    method accept(v: Visitor) is
        v.visitCompoundShape(this)


// La interfaz Visitor declara un grupo de métodos de visita que
// se corresponden con clases de elemento. La firma de un método
// de visita permite al visitante identificar la clase exacta
// del elemento con el que trata.
interface Visitor is
    method visitDot(d: Dot)
    method visitCircle(c: Circle)
    method visitRectangle(r: Rectangle)
    method visitCompoundShape(cs: CompoundShape)

// Los visitantes concretos implementan varias versiones del
// mismo algoritmo, que puede funcionar con todas las clases de
// elementos concretos.
//
// Puedes disfrutar de la mayor ventaja del patrón Visitor si lo
// utilizas con una estructura compleja de objetos, como un
// árbol Composite. En este caso, puede ser de ayuda almacenar
// algún estado intermedio del algoritmo mientras ejecutas los
// métodos del visitante sobre varios objetos de la estructura.
class XMLExportVisitor implements Visitor is
    method visitDot(d: Dot) is
        // Exporta la ID del punto (dot) y centra las
        // coordenadas.

    method visitCircle(c: Circle) is
        // Exporta la ID del círculo y centra las coordenadas y
        // el radio.

    method visitRectangle(r: Rectangle) is
        // Exporta la ID del rectángulo, las coordenadas de
        // arriba a la izquierda, la anchura y la altura.

    method visitCompoundShape(cs: CompoundShape) is
        // Exporta la ID de la forma, así como la lista de las
        // ID de sus hijos.


// El código cliente puede ejecutar operaciones del visitante
// sobre cualquier grupo de elementos sin conocer sus clases
// concretas. La operación `accept` dirige una llamada a la
// operación adecuada del objeto visitante.
class Application is
    field allShapes: array of Shapes

    method export() is
        exportVisitor = new XMLExportVisitor()

        foreach (shape in allShapes) do
            shape.accept(exportVisitor)
```