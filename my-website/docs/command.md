**También llamado:** Comando, Orden, Action, Transaction

### Propósito
_El patrón de diseño ***Command*** pertenece a la categoría de comportamiento y consiste en encapsular una solicitud en un objeto independiente que almacena toda la información necesaria para ejecutarla. Esto permite que las solicitudes se puedan tratar como parámetros, programar su ejecución para más tarde o encolarlas, además de facilitar el manejo de operaciones que no pueden ejecutarse de inmediato._

![command](https://i.ytimg.com/vi/RxwgQuNjuGg/hqdefault.jpg)

##  Analogía en el mundo real

_Imagina que decides contratar a un servicio de mensajería para entregar un paquete. Llamas a la empresa y explicas lo que necesitas: la dirección de entrega, el nombre del destinatario y cualquier instrucción especial. El operador anota esta información y genera una orden de servicio._

_La orden se coloca en la lista de tareas del día, esperando a que un mensajero esté disponible. Cuando llega el momento, el mensajero recoge el paquete junto con la orden, la lee y realiza la entrega siguiendo las instrucciones._ 

_La orden de servicio actúa como un comando, ya que contiene toda la información necesaria para completar la tarea. Esto permite que la entrega se realice de manera eficiente sin necesidad de que el mensajero tenga que contactarte constantemente para pedir aclaraciones._

![Analogía](https://files.oaiusercontent.com/file-Fxj73DyVNMj54rJsRhpXwe?se=2024-12-06T05%3A19%3A52Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D31abfb53-2f30-43a6-a0ac-e78815db98dc.webp&sig=xzv3%2BuxlsQ0y2Vu%2BqOreu0OLS4IFKVpoSJ2qglIzrt8%3D)

## Estructura
![Estructura](https://refactoring.guru/images/patterns/diagrams/command/structure-indexed.png?id=95529d7282dc7bc1c5bc443423b1cf4f)

1. La clase ***Emisora*** (o invocadora) es quien se encarga de iniciar las acciones solicitadas. En lugar de ejecutar la acción directamente, esta clase mantiene una referencia a un objeto de comando que contiene los detalles de la solicitud. Cuando se necesita realizar la acción, la emisora simplemente activa el comando, delegando la tarea. Es importante destacar que la emisora no se encarga de crear los comandos; en su lugar, estos suelen ser proporcionados por el cliente, por ejemplo, al pasarle el comando ya preparado como un parámetro en el constructor.

2. La interfaz ***Comando*** generalmente define un único método cuya función es ejecutar la acción correspondiente al comando. Este método sirve como punto de entrada para llevar a cabo la tarea asociada al comando.

3. Los ***Comandos Concretos*** son responsables de representar diferentes tipos de solicitudes específicas. No realizan directamente las acciones, sino que delegan la ejecución al objeto encargado de la lógica de negocio. Sin embargo, en algunos casos, para simplificar el diseño, estas clases pueden combinarse con la lógica que ejecutan.  

Los datos necesarios para ejecutar una solicitud se pueden almacenar como atributos en el comando concreto, y para garantizar que no cambien, estos atributos suelen inicializarse únicamente a través del constructor, haciendo que el comando sea inmutable.

4. La clase ***Receptora*** es la que contiene la lógica principal para ejecutar las tareas. Prácticamente cualquier objeto puede desempeñar el papel de receptor. En este patrón, los comandos se encargan principalmente de manejar los detalles de cómo se envía la solicitud al receptor, pero es este último quien realiza el trabajo real.

5. El ***Cliente*** crea y configura los objetos de comando concretos. El cliente debe pasar todos los parámetros de la solicitud, incluyendo una instancia del receptor, dentro del constructor del comando. Después de eso, el comando resultante puede asociarse con uno o varios emisores.