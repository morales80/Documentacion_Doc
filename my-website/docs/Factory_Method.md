# Factory Method

El Factory Method es un patrón de diseño creacional que define una interfaz en una clase base para la creación de objetos, delegando a las subclases la decisión sobre qué tipo de objeto debe instanciarse. Este enfoque permite que las subclases alteren el tipo de objetos creados sin modificar la estructura o el comportamiento general del sistema.

Este patrón es especialmente útil cuando se necesita evitar el uso directo del operador new y se desea mantener el código abierto a extensiones pero cerrado a modificaciones, cumpliendo con el principio Open/Closed de SOLID.

### Estructura

Las clases principales en este patrón son el creador y el producto. El objetivo principal es que el creador pueda generar instancias de productos sin depender directamente de los tipos concretos de estos. Esto significa que los detalles específicos de los productos no deben estar reflejados dentro del creador.

En su lugar, las posibles subclases del creador son las que deben especificar qué tipos concretos (subclases) de productos se van a utilizar. De esta manera, el creador mantiene una independencia frente a los detalles específicos de los productos.
