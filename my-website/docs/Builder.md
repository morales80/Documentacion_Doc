# Builder
Builder es un patrón de diseño creacional que nos permite construir objetos complejos paso a paso. El patrón nos permite producir distintos tipos y representaciones de un objeto empleando el mismo código de construcción.

![Imagen de ejemplo](https://www.ionos.mx/digitalguide/fileadmin/DigitalGuide/Schaubilder/ejemplo-para-visualizar-la-mecanica-de-builder-battern.png)

## Propósito
Es separar la construcción de un objeto complejo de su representación, permitiendo que el mismo proceso de construcción pueda crear diferentes representaciones del objeto. Este patrón es útil cuando necesitas construir objetos que tienen muchas partes configurables o pasos para su creación.

### Características
  - Permite construir objetos complejos paso a paso.
  - Se utiliza cuando se quiere crear una interfaz clara para construir objetos de una clase.
  - Permite crear distintos productos utilizando el mismo proceso de construcción. 
  - Encapsula el código de construcción y de representación. 
  - Proporciona un control más explícito sobre el proceso de construcción.

### Ventajas y Desventajas
| **Ventajas**                                                                 | **Desventajas**                                                               |
|-------------------------------------------------------------------------------|--------------------------------------------------------------------------------|
| **Facilita la creación de objetos complejos**: Permite construir objetos paso a paso, dividiendo el proceso en partes manejables. | **Incrementa el número de clases**: Requiere crear múltiples clases para los Builders y, a veces, para los Directores, lo que puede aumentar la complejidad. |
| **Fomenta la reutilización**: Puedes reutilizar el mismo código de construcción para diferentes representaciones del objeto. | **Sobrecarga inicial**: El diseño y configuración del patrón pueden ser excesivos para objetos simples o con pocas configuraciones. |
| **Flexibilidad**: Permite variar la representación final de un objeto configurando diferentes pasos de construcción. | **Más código**: Comparado con otros enfoques (como constructores telescópicos), puede requerir más líneas de código para configurarlo. |
| **Desacopla la creación y la representación**: Separa la lógica de construcción de la lógica del objeto, mejorando la claridad del diseño. | **Complejidad innecesaria**: Puede ser excesivo para objetos que no son lo suficientemente complejos como para justificar su uso. |
| **Promueve la inmutabilidad**: Garantiza que el objeto esté completamente construido antes de ser utilizado, evitando estados inconsistentes. | **Dependencia del Director (opcional)**: Si se usa un Director, este puede agregar una capa adicional que no siempre es necesaria. |

### Analogía 
Imagina que estás en un restaurante de comida rápida donde puedes armar tu propia hamburguesa personalizada.

**Menú Base:** El restaurante tiene una lista de ingredientes (pan, carne, queso, lechuga, tomate, etc.).

**Construcción Paso a Paso:** Tú decides qué ingredientes incluir, en qué orden, y cómo debe ser la hamburguesa (doble carne, sin queso, etc.).

**Cocinero (Builder)** Es quien sigue tus instrucciones para armar la hamburguesa exactamente como tú la quieres.

**Cajero (Director):** Coordina el proceso y asegura que el cocinero siga las instrucciones para construir la hamburguesa de acuerdo con tu pedido.

**Hamburguesa Final:** Es el producto terminado, que puede ser diferente para cada cliente dependiendo de sus preferencias.

### Código de Implementación 
En este ejemplo, el patrón Visitor agrega compatibilidad con la exportación XML a la jerarquía de clases de formas geométricas.

![Imagen de ejemplo](https://refactoring.guru/images/patterns/diagrams/visitor/example.png?id=d66acd1b9096c47db17ab3bb82b54a59)

_Exportación de varios tipos de objetos a formato XML a través de un objeto de visitante._

```bash
   
```


