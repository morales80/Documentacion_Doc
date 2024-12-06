# Factory Method

El Factory Method es un patrón de diseño creacional que define una interfaz en una clase base para la creación de objetos, delegando a las subclases la decisión sobre qué tipo de objeto debe instanciarse. Este enfoque permite que las subclases alteren el tipo de objetos creados sin modificar la estructura o el comportamiento general del sistema.

Este patrón es especialmente útil cuando se necesita evitar el uso directo del operador new y se desea mantener el código abierto a extensiones pero cerrado a modificaciones, cumpliendo con el principio Open/Closed de SOLID.
