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
