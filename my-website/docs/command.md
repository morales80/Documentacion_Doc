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

## Pseudocódigo

En este ejemplo, el patrón ***Command*** ayuda a rastrear el historial de operaciones ejecutadas y hace posible revertir una operación si es necesario.

![Operaciones que no se pueden realizar en un editor de texto.](https://refactoring.guru/images/patterns/diagrams/command/example.png?id=1f42c8395fe54d0e409026b91881e2a0)

_Los comandos que modifican el estado del editor, como cortar y pegar, primero guardan una copia del estado actual antes de ejecutar la acción. Esto asegura que, si es necesario deshacer el cambio, se pueda restaurar fácilmente el estado anterior. Una vez ejecutado, el comando se almacena en un historial (usualmente una pila) junto con la copia del estado del editor en ese momento. Si el usuario decide revertir una acción, la aplicación simplemente toma el último comando del historial y usa la copia de seguridad para restaurar el estado original._

_El cliente, como los elementos de la interfaz gráfica o el historial de comandos, no depende de implementaciones específicas de comandos. En su lugar, interactúa con ellos a través de una interfaz común. Esto permite agregar nuevos comandos a la aplicación sin afectar el código existente, manteniendo el diseño flexible y fácil de extender._

````// La clase base comando define la interfaz común a todos los
// comandos concretos.
abstract class Command is
    protected field app: Application
    protected field editor: Editor
    protected field backup: text

    constructor Command(app: Application, editor: Editor) is
        this.app = app
        this.editor = editor

    // Realiza una copia de seguridad del estado del editor.
    method saveBackup() is
        backup = editor.text

    // Restaura el estado del editor.
    method undo() is
        editor.text = backup

    // El método de ejecución se declara abstracto para forzar a
    // todos los comandos concretos a proporcionar sus propias
    // implementaciones. El método debe devolver verdadero o
    // falso dependiendo de si el comando cambia el estado del
    // editor.
    abstract method execute()


// Los comandos concretos van aquí.
class CopyCommand extends Command is
    // El comando copiar no se guarda en el historial ya que no
    // cambia el estado del editor.
    method execute() is
        app.clipboard = editor.getSelection()
        return false

class CutCommand extends Command is
    // El comando cortar no cambia el estado del editor, por lo
    // que debe guardarse en el historial. Y se guardará siempre
    // y cuando el método devuelva verdadero.
    method execute() is
        saveBackup()
        app.clipboard = editor.getSelection()
        editor.deleteSelection()
        return true

class PasteCommand extends Command is
    method execute() is
        saveBackup()
        editor.replaceSelection(app.clipboard)
        return true

// La operación deshacer también es un comando.
class UndoCommand extends Command is
    method execute() is
        app.undo()
        return false


// El historial global de comandos tan solo es una pila.
class CommandHistory is
    private field history: array of Command

    // El último dentro...
    method push(c: Command) is
        // Empuja el comando al final de la matriz del
        // historial.

    // ...el primero fuera.
    method pop():Command is
        // Obtiene el comando más reciente del historial.


// La clase editora tiene operaciones reales de edición de
// texto. Juega el papel de un receptor: todos los comandos
// acaban delegando la ejecución a los métodos del editor.
class Editor is
    field text: string

    method getSelection() is
        // Devuelve el texto seleccionado.

    method deleteSelection() is
        // Borra el texto seleccionado.

    method replaceSelection(text) is
        // Inserta los contenidos del portapapeles en la
        // posición actual.


// La clase Aplicación establece relaciones entre objetos. Actúa
// como un emisor: cuando algo debe hacerse, crea un objeto de
// comando y lo ejecuta.
class Application is
    field clipboard: string
    field editors: array of Editors
    field activeEditor: Editor
    field history: CommandHistory

    // El código que asigna comandos a objetos UI puede tener
    // este aspecto.
    method createUI() is
        // ...
        copy = function() { executeCommand(
            new CopyCommand(this, activeEditor)) }
        copyButton.setCommand(copy)
        shortcuts.onKeyPress("Ctrl+C", copy)

        cut = function() { executeCommand(
            new CutCommand(this, activeEditor)) }
        cutButton.setCommand(cut)
        shortcuts.onKeyPress("Ctrl+X", cut)

        paste = function() { executeCommand(
            new PasteCommand(this, activeEditor)) }
        pasteButton.setCommand(paste)
        shortcuts.onKeyPress("Ctrl+V", paste)

        undo = function() { executeCommand(
            new UndoCommand(this, activeEditor)) }
        undoButton.setCommand(undo)
        shortcuts.onKeyPress("Ctrl+Z", undo)

    // Ejecuta un comando y comprueba si debe añadirse al
    // historial.
    method executeCommand(command) is
        if (command.execute())
            history.push(command)

    // Toma el comando más reciente del historial y ejecuta su
    // método deshacer. Observa que no conocemos la clase de ese
    // comando. Pero no tenemos por qué, ya que el comando sabe
    // cómo deshacer su propia acción.
    method undo() is
        command = history.pop()
        if (command != null)
            command.undo()

## Aplicabilidad

- Utiliza el patrón Command cuando quieras parametrizar objetos con operaciones.

- Utiliza el patrón Command cuando quieras poner operaciones en cola, programar su ejecución, o ejecutarlas de forma remota.

- Utiliza el patrón Command cuando quieras implementar operaciones reversibles.

## Cómo implementarlo

1. Declara la interfaz de comando con un único método de ejecución.

2. Empieza extrayendo solicitudes y poniéndolas dentro de clases concretas de comando que implementen la interfaz de comando. Cada clase debe contar con un grupo de campos para almacenar los argumentos de las solicitudes junto con referencias al objeto receptor. Todos estos valores deben inicializarse a través del constructor del comando.

3. Identifica clases que actúen como emisoras. Añade los campos para almacenar comandos dentro de estas clases. Las emisoras deberán comunicarse con sus comandos tan solo a través de la interfaz de comando. Normalmente las emisoras no crean objetos de comando por su cuenta, sino que los obtienen del código cliente.

4. Cambia las emisoras de forma que ejecuten el comando en lugar de enviar directamente una solicitud al receptor.

5. El cliente debe inicializar objetos en el siguiente orden:

- Crear receptores.
- Crear comandos y asociarlos con receptores si es necesario.
- Crear emisores y asociarlos con comandos específicos.

## Pros

- Principio de responsabilidad única. Puedes desacoplar las clases que invocan operaciones de las que realizan esas operaciones.

- Principio de abierto/cerrado. Puedes introducir nuevos comandos en la aplicación sin descomponer el código cliente existente.

- Puedes implementar deshacer/rehacer.

- Puedes implementar la ejecución diferida de operaciones.
 
- Puedes ensamblar un grupo de comandos simples para crear uno complejo.

! [ventajas](https://www.techuseful.com/wp-content/uploads/2021/03/Pros-2048x1152.png)


## Contras

- El código puede complicarse, ya que estás introduciendo una nueva capa entre emisores y receptores.

![desventajas](https://th.bing.com/th/id/OIP.e_suX-k3dtM20PJ07fwNfQHaHa?rs=1&pid=ImgDetMain)
