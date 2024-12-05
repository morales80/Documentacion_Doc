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