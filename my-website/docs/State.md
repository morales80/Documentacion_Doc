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
  - Obliga al objeto original a delegar el trabajo a una instancia de las clases de estado.

