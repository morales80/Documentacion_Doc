# State 
State es un patrón de diseño de comportamiento que permite a un objeto alterar su comportamiento cuando su estado interno cambia. Parece como si el objeto cambiara su clase. 

## Propósito
Es gestionar el estado de un objeto y cómo afecta su comportamiento de una manera más flexible y organizada. En lugar de tener código condicional en el objeto que maneja su estado, el patrón State permite delegar cada estado a una clase propia que encapsula el comportamiento correspondiente a ese estado.

### Característica

- **El patrón de diseño State tiene las siguientes características:**
  - Permite modificar el comportamiento de un objeto según su estado .
  - Desacopla el comportamiento del objeto de su implementación.
  - Extrae los comportamientos relacionados con el estado y los coloca en clases de estado separadas.
  - Permite cambiar el comportamiento del objeto en tiempo de ejecución.
  - Obliga al objeto original a delegar el trabajo a una instancia de las clases de estado.git 

**Estas son algunas ventajas y desventajas de nuestro patrón de diseño de State**
| **Ventajas**                                      | **Desventajas**                                 |
|--------------------------------------------------|------------------------------------------------|
| **Mejora la legibilidad**: Al encapsular los estados en clases separadas, el código es más fácil de leer y entender. | **Complejidad adicional**: La implementación del patrón puede agregar complejidad extra al sistema, especialmente si hay muchos estados. |
| **Facilita la extensión**: Nuevos estados pueden agregarse sin modificar el código existente, lo que sigue el principio de abierto/cerrado. | **Demasiados objetos**: En sistemas con muchos estados, puede haber una proliferación de clases, lo que lleva a un aumento en el número de objetos. |
| **Reduce el acoplamiento**: Cada estado se maneja de forma independiente, lo que reduce el acoplamiento entre clases. | **Posible confusión**: Puede ser difícil gestionar la transición entre los diferentes estados si no se implementa correctamente. |
| **Permite cambios dinámicos de estado**: El patrón facilita la transición entre diferentes estados en tiempo de ejecución, permitiendo un comportamiento flexible. | **Sobrecarga de mantenimiento**: Si no se controla bien, la cantidad de estados y transiciones puede generar una sobrecarga en el mantenimiento del sistema. |
| **Facilita la depuración**: Al tener clases que representan estados, se puede aislar más fácilmente el comportamiento en cada estado. | **Sobrecarga en pequeños proyectos**: En proyectos simples, el patrón puede ser innecesario, agregando una complejidad innecesaria. |
