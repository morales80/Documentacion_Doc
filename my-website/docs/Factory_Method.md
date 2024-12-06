# Factory Method

El Factory Method es un patrón de diseño creacional que define una interfaz en una clase base para la creación de objetos, delegando a las subclases la decisión sobre qué tipo de objeto debe instanciarse. Este enfoque permite que las subclases alteren el tipo de objetos creados sin modificar la estructura o el comportamiento general del sistema.

Este patrón es especialmente útil cuando se necesita evitar el uso directo del operador new y se desea mantener el código abierto a extensiones pero cerrado a modificaciones, cumpliendo con el principio Open/Closed de SOLID.

### Estructura

Las clases principales en este patrón son el creador y el producto. El objetivo principal es que el creador pueda generar instancias de productos sin depender directamente de los tipos concretos de estos. Esto significa que los detalles específicos de los productos no deben estar reflejados dentro del creador.

En su lugar, las posibles subclases del creador son las que deben especificar qué tipos concretos (subclases) de productos se van a utilizar. De esta manera, el creador mantiene una independencia frente a los detalles específicos de los productos.

![](https://upload.wikimedia.org/wikipedia/commons/7/73/Factory_Method.png)

Para lograr esto, se utiliza un método abstracto, llamado método de la fábrica, que se define en la clase creadora.
* Este método abstracto está diseñado para devolver un producto.
* Las subclases del creador sobrescriben este método para proporcionar instancias de las subclases específicas del producto que necesitan.

Por ejemplo:

* Si tienes una clase base llamada **_Creador_**, esta puede declarar un método abstracto como **_crearProducto()._**
* Las subclases de **_Creador_**, como **_CreadorDeAutos_** o **_CreadorDeMotos_**, implementan **_crearProducto()_** para devolver instancias específicas de productos como Auto o Moto.
De este modo, el patrón asegura que el creador puede generar productos de manera flexible y extensible, sin depender directamente de sus implementaciones concretas.

De este modo, el patrón asegura que el creador puede generar productos de manera flexible y extensible, sin depender directamente de sus implementaciones concretas.

### ¿Cómo Funciona?

El patrón Factory Method delega la creación de objetos a las subclases del creador, asegurando que el creador no dependa de las clases concretas de los productos. Esto se logra a través de un método abstracto, que actúa como una "fábrica" para producir los objetos requeridos.

Es decir el creador no debe conocer los detalles específicos de los tipos de productos que crea. En su lugar, las subclases del creador son las responsables de definir los tipos concretos de los productos que se generarán.



