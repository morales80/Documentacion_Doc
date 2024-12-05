# State 
State es un patrón de diseño de comportamiento que permite a un objeto alterar su comportamiento cuando su estado interno cambia. Parece como si el objeto cambiara su clase. 

## Propósito
Es gestionar el estado de un objeto y cómo afecta su comportamiento de una manera más flexible y organizada. En lugar de tener código condicional en el objeto que maneja su estado, el patrón State permite delegar cada estado a una clase propia que encapsula el comportamiento correspondiente a ese estado.

### Características
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

### Analogía del Patrón State:
Imagina que tienes una máquina expendedora de bebidas. Esta máquina tiene varios estados: "Esperando Moneda", "Esperando Selección de Bebida", **"Entregando Bebida", y "Vendiendo".** Cada uno de estos estados tiene comportamientos diferentes y depende de la acción del usuario.

- **Esperando Moneda:** La máquina está esperando que pongas una moneda. En este estado, la máquina no puede entregar bebidas ni hacer nada más. Solo espera una acción.
- **Esperando Selección de Bebida:** Una vez que la máquina recibe la moneda, cambia a este estado, donde ahora puede tomar tu selección. En este estado, puedes elegir entre diferentes opciones de bebidas.
- **Entregando Bebida:** Después de que haces la selección, la máquina pasa a este estado y entrega la bebida que elegiste.
- **Vendiendo:** Si la máquina está fuera de servicio, se cambia a este estado donde no puedes usarla hasta que se repare.

Cada estado es responsable de una parte específica de la máquina, y puede cambiar a otro estado dependiendo de las interacciones del usuario. La máquina no intenta hacer todo al mismo tiempo, sino que cambia de estado para gestionar de forma eficiente su funcionamiento.

