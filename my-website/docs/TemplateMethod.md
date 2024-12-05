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