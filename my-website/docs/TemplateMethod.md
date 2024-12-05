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

### Ventajas y Desventajas
| **Ventajas**                                                                 | **Desventajas**                                                              |
|-------------------------------------------------------------------------------|-------------------------------------------------------------------------------|
| **Reutilización de código**: El patrón permite centralizar el algoritmo común en la clase base, evitando la duplicación de código. | **Rigidez**: La estructura del algoritmo está definida en la clase base, lo que puede dificultar la modificación de los pasos sin afectar a las subclases. |
| **Control del flujo de ejecución**: La clase base define el flujo general, mientras que las subclases proporcionan implementaciones específicas, lo que mejora el control. | **Dependencia de la clase base**: Las subclases están fuertemente acopladas a la clase base y pueden verse limitadas por la estructura definida en la misma. |
| **Fácil de extender**: Las subclases pueden agregar o modificar el comportamiento de pasos específicos sin cambiar la estructura general del algoritmo. | **Dificultad para cambios estructurales**: Si el algoritmo necesita cambiar sustancialmente, las subclases pueden necesitar ser reescritas, lo que puede ser costoso en términos de mantenimiento. |
| **Facilita el mantenimiento**: El código común se mantiene en un solo lugar (la clase base), lo que facilita las actualizaciones y el mantenimiento. | **Complejidad**: Para algoritmos muy simples, el uso del patrón puede resultar innecesario, añadiendo complejidad adicional sin un beneficio claro. |
| **Cohesión**: El patrón ayuda a mantener una alta cohesión dentro de las subclases, ya que cada una se centra solo en la personalización de pasos específicos. | **Herencia excesiva**: Si se tiene una jerarquía muy profunda, puede ser difícil entender y mantener todas las implementaciones del algoritmo. |

### Analogía del mundo real
El enfoque del método plantilla puede emplearse en la construcción de viviendas en masa. El plan arquitectónico para construir una casa estándar puede contener varios puntos de extensión que permitirán a un potencial propietario ajustar algunos detalles de la casa resultante.

![Imagen de ejemplo](https://refactoring.guru/images/patterns/diagrams/template-method/live-example.png?id=2485d52852f87da06c9cc0e2fd257d6a)

_Un plan arquitectónico típico puede alterarse ligeramente para que encaje mejor con las necesidades del cliente._

Cada paso de la construcción, como colocar los cimientos, el armazón, construir las paredes, instalar las tuberías para el agua y el cableado para la electricidad, etc., puede cambiarse ligeramente para que la casa resultante sea un poco diferente de las demás.

### Código de Implementación 
En este ejemplo, el patrón Template Method proporciona un “esqueleto” para varias ramas de inteligencia artificial (IA) en un sencillo videojuego de estrategia.

![Imagen de ejemplo](https://refactoring.guru/images/patterns/diagrams/template-method/example.png?id=c0ce5cc8070925a1cd345fac6afa16b6)

_Clases IA de un sencillo videojuego._

Todas las razas del juego tienen tipos de unidades y edificios casi iguales. Por lo tanto, puedes reutilizar la misma estructura IA para varias de ellas, a la vez que puedes sobrescribir algunos de los detalles. Con esta solución, puedes sobrescribir la IA de los orcos para que sean más agresivos, hacer que los humanos tengan una actitud más defensiva y hacer que los monstruos no puedan construir nada. Para añadir una nueva raza al juego habría que crear una nueva subclase IA y sobrescribir los métodos por defecto declarados en la clase IA base.


```bash
    // La clase abstracta define un método plantilla que contiene un
// esqueleto de algún algoritmo compuesto por llamadas,
// normalmente a operaciones primitivas abstractas. Las
// subclases concretas implementan estas operaciones, pero dejan
// el propio método plantilla intacto.
class GameAI is
    // El método plantilla define el esqueleto de un algoritmo.
    method turn() is
        collectResources()
        buildStructures()
        buildUnits()
        attack()

    // Algunos de los pasos se pueden implementar directamente
    // en una clase base.
    method collectResources() is
        foreach (s in this.builtStructures) do
            s.collect()

    // Y algunos de ellos pueden definirse como abstractos.
    abstract method buildStructures()
    abstract method buildUnits()

    // Una clase puede tener varios métodos plantilla.
    method attack() is
        enemy = closestEnemy()
        if (enemy == null)
            sendScouts(map.center)
        else
            sendWarriors(enemy.position)

    abstract method sendScouts(position)
    abstract method sendWarriors(position)

// Las clases concretas tienen que implementar todas las
// operaciones abstractas de la clase base, pero no deben
// sobrescribir el propio método plantilla.
class OrcsAI extends GameAI is
    method buildStructures() is
        if (there are some resources) then
            // Construye granjas, después cuarteles y después
            // fortaleza.

    method buildUnits() is
        if (there are plenty of resources) then
            if (there are no scouts)
                // Crea peón y añádelo al grupo de exploradores.
            else
                // Crea soldado, añádelo al grupo de guerreros.

    // ...

    method sendScouts(position) is
        if (scouts.length > 0) then
            // Envía exploradores a posición.

    method sendWarriors(position) is
        if (warriors.length > 5) then
            // Envía guerreros a posición.

// Las subclases también pueden sobrescribir algunas operaciones
// con una implementación por defecto.
class MonstersAI extends GameAI is
    method collectResources() is
        // Los monstruos no recopilan recursos.

    method buildStructures() is
        // Los monstruos no construyen estructuras.

    method buildUnits() is
        // Los monstruos no construyen unidades.
```


