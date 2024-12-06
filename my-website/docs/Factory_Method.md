# Factory Method

El Factory Method es un patrón de diseño creacional que define una interfaz en una clase base para la creación de objetos, delegando a las subclases la decisión sobre qué tipo de objeto debe instanciarse. Este enfoque permite que las subclases alteren el tipo de objetos creados sin modificar la estructura o el comportamiento general del sistema.

Este patrón es especialmente útil cuando se necesita evitar el uso directo del operador new y se desea mantener el código abierto a extensiones pero cerrado a modificaciones, cumpliendo con el principio Open/Closed de SOLID.

### ¿Cómo Funciona?

El patrón Factory Method delega la creación de objetos a las subclases del creador, asegurando que el creador no dependa de las clases concretas de los productos. Esto se logra a través de un método abstracto, que actúa como una "fábrica" para producir los objetos requeridos.

Es decir el creador no debe conocer los detalles específicos de los tipos de productos que crea. En su lugar, las subclases del creador son las responsables de definir los tipos concretos de los productos que se generarán.  

### ¿Cuál es la solución?

Este patrón resuelve el problema de desacoplar la creación de objetos concretos de su uso.

El problema central es que, en un diseño tradicional, el código del cliente (o usuario del objeto) a menudo está directamente vinculado a las clases concretas que necesita instanciar. Esto puede generar rigidez en el código, dificultar la introducción de nuevas variantes de productos y violar principios como el de abierto/cerrado (extender sin modificar).

La solución consiste en introducir un método abstracto, conocido como el método de la fábrica, dentro de la clase creadora.

**Método abstracto:**
* Este método se declara en la clase base del creador como un contrato (abstracto), lo que significa que no tiene una implementación en esta clase base.

**Sobrescritura en subclases:**
* Las subclases del creador implementan este método abstracto, devolviendo instancias específicas de las subclases de los productos. De esta manera, se mantiene el principio de abierto/cerrado, ya que se pueden añadir nuevas subclases de productos y creadores sin modificar el código base existente.

### Ventajas del Patrón

* **_Desacoplamiento:_**
Separa la lógica de creación de objetos de su uso, haciendo el sistema más flexible y fácil de extender.

* **_Extensibilidad:_**
Agregar nuevos productos no requiere modificar el código del creador o cliente existente, solo se añaden nuevas subclases del creador y del producto.

* **_Cumple con el Principio Abierto/Cerrado:_**
Permite añadir nuevas funcionalidades (productos o creadores) sin cambiar el código existente.

* **_Control de creación:_**
Centraliza la creación de objetos, lo que permite controlar cómo y cuándo se crean los productos.

### Desventajas del patrón:

* **_Mayor complejidad:_** Introduce más clases y métodos, lo que puede complicar el diseño si no se gestiona adecuadamente.

* **_Dependencia de subclases:_** Requiere una estructura jerárquica de clases, lo que puede llevar a una alta dependencia entre ellas.

* **_Difícil de modificar:_** Si se desea cambiar la creación de productos, se deben modificar varias subclases del creador, lo que puede afectar la mantenibilidad.

### Estructura

Las clases principales en este patrón son el creador y el producto. El objetivo principal es que el creador pueda generar instancias de productos sin depender directamente de los tipos concretos de estos. Esto significa que los detalles específicos de los productos no deben estar reflejados dentro del creador.

En su lugar, las posibles subclases del creador son las que deben especificar qué tipos concretos (subclases) de productos se van a utilizar. De esta manera, el creador mantiene una independencia frente a los detalles específicos de los productos.

![diagrama del patrón de diseño Factory Method](https://upload.wikimedia.org/wikipedia/commons/7/73/Factory_Method.png)

Para lograr esto, se utiliza un método abstracto, llamado método de la fábrica, que se define en la clase creadora.
* Este método abstracto está diseñado para devolver un producto.
* Las subclases del creador sobrescriben este método para proporcionar instancias de las subclases específicas del producto que necesitan.

Por ejemplo:

* Si tienes una clase base llamada **_Creador_**, esta puede declarar un método abstracto como **_crearProducto()._**
* Las subclases de **_Creador_**, como **_CreadorDeAutos_** o **_CreadorDeMotos_**, implementan **_crearProducto()_** para devolver instancias específicas de productos como Auto o Moto.
De este modo, el patrón asegura que el creador puede generar productos de manera flexible y extensible, sin depender directamente de sus implementaciones concretas.

De este modo, el patrón asegura que el creador puede generar productos de manera flexible y extensible, sin depender directamente de sus implementaciones concretas.

### Ejemplo Práctico de Código: Patrón Factory Method

1. **_Definición de la Interfaz Producto_**

Primero, definimos una interfaz común para los productos (vehículos):

```
from abc import ABC, abstractmethod

class Vehiculo(ABC):
    @abstractmethod
    def conducir(self):
        pass
```
2. **_Productos Concretos_**
Ahora, creamos dos clases concretas que implementan la interfaz Vehiculo:

```
class Coche(Vehiculo):
    def conducir(self):
        return "Conduciendo un coche."

class Motocicleta(Vehiculo):
    def conducir(self):
        return "Conduciendo una motocicleta."

```
3. **_Definición de la Clase Creador_**
El creador es una clase base que define el método de fábrica, el cual es abstracto y debe ser implementado por las subclases concretas.

```
class Creador(ABC):
    @abstractmethod
    def crear_vehiculo(self) -> Vehiculo:
        pass

```
4. **_Creadores Concretos**_
Las subclases del creador implementan el método de fábrica para crear productos específicos.

```
class CreadorCoche(Creador):
    def crear_vehiculo(self) -> Vehiculo:
        return Coche()

class CreadorMotocicleta(Creador):
    def crear_vehiculo(self) -> Vehiculo:
        return Motocicleta()

```

5. **_Uso del Cliente_**
El cliente interactúa con los creadores y obtiene el producto sin preocuparse por su creación.
```
def cliente(creator: Creador):
    vehiculo = creator.crear_vehiculo()
    print(vehiculo.conducir())

# Creando diferentes tipos de vehículos
creador_coche = CreadorCoche()
cliente(creador_coche)  # Conduciendo un coche.

creador_moto = CreadorMotocicleta()
cliente(creador_moto)  # Conduciendo una motocicleta.

```
### Comparaciones con otros patrones

El patrón Factory Method se diferencia de otros patrones como el Abstract Factory y el Singleton en los siguientes aspectos:

* **_Abstract Factory:_** Se utiliza cuando necesitas crear familias de objetos relacionados, mientras que Factory Method se enfoca en la creación de un solo tipo de objeto.

* **_Singleton:_** A diferencia del Factory Method, que puede generar varias instancias de un producto, el Singleton asegura que solo haya una instancia de una clase en todo el sistema.

Cada patrón tiene su caso de uso específico, dependiendo de la flexibilidad y los requisitos del sistema.