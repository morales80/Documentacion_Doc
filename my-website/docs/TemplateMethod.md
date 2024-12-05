# Template Method
El método de plantilla es un patrón de diseño de comportamiento que define el esqueleto de un algoritmo en la superclase, pero permite que las subclases invaliden pasos específicos del algoritmo sin cambiar su estructura.

![Imagen de ejemplo](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqzyPYpS_0ak2J90KiD7rJGi2-t2jsoUsRZ-8uvntd6robHzIfWN4RBJfcsOyEyoBOLxI&usqp=CAU)

## Propósito
Es definir la estructura de un algoritmo, dejando algunos pasos del algoritmo a ser implementados por las subclases. Este patrón permite que las subclases redefinan ciertos pasos del algoritmo sin cambiar la estructura general o el flujo del mismo.

### Características
  - Define el esqueleto de un algoritmo en una clase base.
  - Permite a las subclases sobrescribir pasos del algoritmo sin cambiar su estructura.
  - Evita la duplicación de código.
  - Se centra en la reutilización de código.
  - Permite tener tantas variaciones del mismo algoritmo como se necesite.

**Estas son algunas ventajas y desventajas de nuestro patrón de diseño de State**
| **Ventajas**                                                                 | **Desventajas**                                                              |
|-------------------------------------------------------------------------------|-------------------------------------------------------------------------------|
| **Reutilización de código**: El patrón permite centralizar el algoritmo común en la clase base, evitando la duplicación de código. | **Rigidez**: La estructura del algoritmo está definida en la clase base, lo que puede dificultar la modificación de los pasos sin afectar a las subclases. |
| **Control del flujo de ejecución**: La clase base define el flujo general, mientras que las subclases proporcionan implementaciones específicas, lo que mejora el control. | **Dependencia de la clase base**: Las subclases están fuertemente acopladas a la clase base y pueden verse limitadas por la estructura definida en la misma. |
| **Fácil de extender**: Las subclases pueden agregar o modificar el comportamiento de pasos específicos sin cambiar la estructura general del algoritmo. | **Dificultad para cambios estructurales**: Si el algoritmo necesita cambiar sustancialmente, las subclases pueden necesitar ser reescritas, lo que puede ser costoso en términos de mantenimiento. |
| **Facilita el mantenimiento**: El código común se mantiene en un solo lugar (la clase base), lo que facilita las actualizaciones y el mantenimiento. | **Complejidad**: Para algoritmos muy simples, el uso del patrón puede resultar innecesario, añadiendo complejidad adicional sin un beneficio claro. |
| **Cohesión**: El patrón ayuda a mantener una alta cohesión dentro de las subclases, ya que cada una se centra solo en la personalización de pasos específicos. | **Herencia excesiva**: Si se tiene una jerarquía muy profunda, puede ser difícil entender y mantener todas las implementaciones del algoritmo. |

### Analogía del Patrón Template Method

