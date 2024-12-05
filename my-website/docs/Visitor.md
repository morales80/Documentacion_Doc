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