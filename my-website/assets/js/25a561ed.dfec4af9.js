"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5154],{5810:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>t});const o=JSON.parse('{"id":"command","title":"command","description":"Tambi\xe9n llamado: Comando, Orden, Action, Transaction","source":"@site/docs/command.md","sourceDirName":".","slug":"/command","permalink":"/Documentacion_Doc/docs/command","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/command.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"chain_off_responsability","permalink":"/Documentacion_Doc/docs/chain_off_responsability"},"next":{"title":"observer","permalink":"/Documentacion_Doc/docs/observer"}}');var r=a(4848),s=a(8453);const i={},c=void 0,d={},t=[{value:"Prop\xf3sito",id:"prop\xf3sito",level:3},{value:"Analog\xeda en el mundo real",id:"analog\xeda-en-el-mundo-real",level:2},{value:"Estructura",id:"estructura",level:2},{value:"Pseudoc\xf3digo",id:"pseudoc\xf3digo",level:2},{value:"Aplicabilidad",id:"aplicabilidad",level:2},{value:"C\xf3mo implementarlo",id:"c\xf3mo-implementarlo",level:2},{value:"Pros",id:"pros",level:2},{value:"Contras",id:"contras",level:2}];function l(e){const n={code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Tambi\xe9n llamado:"})," ",(0,r.jsx)(n.em,{children:"Comando, Orden, Action, Transaction"})]}),"\n",(0,r.jsx)(n.h3,{id:"prop\xf3sito",children:"Prop\xf3sito"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsxs)(n.em,{children:["El patr\xf3n de dise\xf1o ",(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"Command"})})," pertenece a la categor\xeda de comportamiento y consiste en encapsular una solicitud en un objeto independiente que almacena toda la informaci\xf3n necesaria para ejecutarla. Esto permite que las solicitudes se puedan tratar como par\xe1metros, programar su ejecuci\xf3n para m\xe1s tarde o encolarlas, adem\xe1s de facilitar el manejo de operaciones que no pueden ejecutarse de inmediato."]})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"https://i.ytimg.com/vi/RxwgQuNjuGg/hqdefault.jpg",alt:"command"})}),"\n",(0,r.jsx)(n.h2,{id:"analog\xeda-en-el-mundo-real",children:"Analog\xeda en el mundo real"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:"Imagina que decides contratar a un servicio de mensajer\xeda para entregar un paquete. Llamas a la empresa y explicas lo que necesitas: la direcci\xf3n de entrega, el nombre del destinatario y cualquier instrucci\xf3n especial. El operador anota esta informaci\xf3n y genera una orden de servicio."})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:"La orden se coloca en la lista de tareas del d\xeda, esperando a que un mensajero est\xe9 disponible. Cuando llega el momento, el mensajero recoge el paquete junto con la orden, la lee y realiza la entrega siguiendo las instrucciones."})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:"La orden de servicio act\xfaa como un comando, ya que contiene toda la informaci\xf3n necesaria para completar la tarea. Esto permite que la entrega se realice de manera eficiente sin necesidad de que el mensajero tenga que contactarte constantemente para pedir aclaraciones."})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"https://static.vecteezy.com/system/resources/previews/007/112/283/non_2x/young-man-delivered-the-parcel-courier-with-a-cardboard-box-parcel-delivery-service-photo.jpg",alt:"Analog\xeda"})}),"\n",(0,r.jsx)(n.h2,{id:"estructura",children:"Estructura"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"https://refactoring.guru/images/patterns/diagrams/command/structure-indexed.png?id=95529d7282dc7bc1c5bc443423b1cf4f",alt:"Estructura"})}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsxs)(n.em,{children:["La clase ",(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"Emisora"})})," (o invocadora) es quien se encarga de iniciar las acciones solicitadas. En lugar de ejecutar la acci\xf3n directamente, esta clase mantiene una referencia a un objeto de comando que contiene los detalles de la solicitud. Cuando se necesita realizar la acci\xf3n, la emisora simplemente activa el comando, delegando la tarea. Es importante destacar que la emisora no se encarga de crear los comandos; en su lugar, estos suelen ser proporcionados por el cliente, por ejemplo, al pasarle el comando ya preparado como un par\xe1metro en el constructor."]})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsxs)(n.em,{children:["La interfaz ",(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"Comando"})})," generalmente define un \xfanico m\xe9todo cuya funci\xf3n es ejecutar la acci\xf3n correspondiente al comando. Este m\xe9todo sirve como punto de entrada para llevar a cabo la tarea asociada al comando."]})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsxs)(n.em,{children:["Los ",(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"Comandos Concretos"})})," son responsables de representar diferentes tipos de solicitudes espec\xedficas. No realizan directamente las acciones, sino que delegan la ejecuci\xf3n al objeto encargado de la l\xf3gica de negocio. Sin embargo, en algunos casos, para simplificar el dise\xf1o, estas clases pueden combinarse con la l\xf3gica que ejecutan.Los datos necesarios para ejecutar una solicitud se pueden almacenar como atributos en el comando concreto, y para garantizar que no cambien, estos atributos suelen inicializarse \xfanicamente a trav\xe9s del constructor, haciendo que el comando sea inmutable."]})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsxs)(n.em,{children:["La clase ",(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"Receptora"})})," es la que contiene la l\xf3gica principal para ejecutar las tareas. Pr\xe1cticamente cualquier objeto puede desempe\xf1ar el papel de receptor. En este patr\xf3n, los comandos se encargan principalmente de manejar los detalles de c\xf3mo se env\xeda la solicitud al receptor, pero es este \xfaltimo quien realiza el trabajo real."]})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsxs)(n.em,{children:["El ",(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"Cliente"})})," crea y configura los objetos de comando concretos. El cliente debe pasar todos los par\xe1metros de la solicitud, incluyendo una instancia del receptor, dentro del constructor del comando. Despu\xe9s de eso, el comando resultante puede asociarse con uno o varios emisores."]})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"pseudoc\xf3digo",children:"Pseudoc\xf3digo"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsxs)(n.em,{children:["En este ejemplo, el patr\xf3n ",(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"Command"})})," ayuda a rastrear el historial de operaciones ejecutadas y hace posible revertir una operaci\xf3n si es necesario."]})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"https://refactoring.guru/images/patterns/diagrams/command/example.png?id=1f42c8395fe54d0e409026b91881e2a0",alt:"Operaciones que no se pueden realizar en un editor de texto."})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:"Los comandos que modifican el estado del editor, como cortar y pegar, primero guardan una copia del estado actual antes de ejecutar la acci\xf3n. Esto asegura que, si es necesario deshacer el cambio, se pueda restaurar f\xe1cilmente el estado anterior. Una vez ejecutado, el comando se almacena en un historial (usualmente una pila) junto con la copia del estado del editor en ese momento. Si el usuario decide revertir una acci\xf3n, la aplicaci\xf3n simplemente toma el \xfaltimo comando del historial y usa la copia de seguridad para restaurar el estado original."})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:"El cliente, como los elementos de la interfaz gr\xe1fica o el historial de comandos, no depende de implementaciones espec\xedficas de comandos. En su lugar, interact\xfaa con ellos a trav\xe9s de una interfaz com\xfan. Esto permite agregar nuevos comandos a la aplicaci\xf3n sin afectar el c\xf3digo existente, manteniendo el dise\xf1o flexible y f\xe1cil de extender."})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-//",metastring:"La clase base comando define la interfaz com\xfan a todos los",children:'// comandos concretos.\r\nabstract class Command is\r\n    protected field app: Application\r\n    protected field editor: Editor\r\n    protected field backup: text\r\n\r\n    constructor Command(app: Application, editor: Editor) is\r\n        this.app = app\r\n        this.editor = editor\r\n\r\n    // Realiza una copia de seguridad del estado del editor.\r\n    method saveBackup() is\r\n        backup = editor.text\r\n\r\n    // Restaura el estado del editor.\r\n    method undo() is\r\n        editor.text = backup\r\n\r\n    // El m\xe9todo de ejecuci\xf3n se declara abstracto para forzar a\r\n    // todos los comandos concretos a proporcionar sus propias\r\n    // implementaciones. El m\xe9todo debe devolver verdadero o\r\n    // falso dependiendo de si el comando cambia el estado del\r\n    // editor.\r\n    abstract method execute()\r\n\r\n\r\n// Los comandos concretos van aqu\xed.\r\nclass CopyCommand extends Command is\r\n    // El comando copiar no se guarda en el historial ya que no\r\n    // cambia el estado del editor.\r\n    method execute() is\r\n        app.clipboard = editor.getSelection()\r\n        return false\r\n\r\nclass CutCommand extends Command is\r\n    // El comando cortar no cambia el estado del editor, por lo\r\n    // que debe guardarse en el historial. Y se guardar\xe1 siempre\r\n    // y cuando el m\xe9todo devuelva verdadero.\r\n    method execute() is\r\n        saveBackup()\r\n        app.clipboard = editor.getSelection()\r\n        editor.deleteSelection()\r\n        return true\r\n\r\nclass PasteCommand extends Command is\r\n    method execute() is\r\n        saveBackup()\r\n        editor.replaceSelection(app.clipboard)\r\n        return true\r\n\r\n// La operaci\xf3n deshacer tambi\xe9n es un comando.\r\nclass UndoCommand extends Command is\r\n    method execute() is\r\n        app.undo()\r\n        return false\r\n\r\n\r\n// El historial global de comandos tan solo es una pila.\r\nclass CommandHistory is\r\n    private field history: array of Command\r\n\r\n    // El \xfaltimo dentro...\r\n    method push(c: Command) is\r\n        // Empuja el comando al final de la matriz del\r\n        // historial.\r\n\r\n    // ...el primero fuera.\r\n    method pop():Command is\r\n        // Obtiene el comando m\xe1s reciente del historial.\r\n\r\n\r\n// La clase editora tiene operaciones reales de edici\xf3n de\r\n// texto. Juega el papel de un receptor: todos los comandos\r\n// acaban delegando la ejecuci\xf3n a los m\xe9todos del editor.\r\nclass Editor is\r\n    field text: string\r\n\r\n    method getSelection() is\r\n        // Devuelve el texto seleccionado.\r\n\r\n    method deleteSelection() is\r\n        // Borra el texto seleccionado.\r\n\r\n    method replaceSelection(text) is\r\n        // Inserta los contenidos del portapapeles en la\r\n        // posici\xf3n actual.\r\n\r\n\r\n// La clase Aplicaci\xf3n establece relaciones entre objetos. Act\xfaa\r\n// como un emisor: cuando algo debe hacerse, crea un objeto de\r\n// comando y lo ejecuta.\r\nclass Application is\r\n    field clipboard: string\r\n    field editors: array of Editors\r\n    field activeEditor: Editor\r\n    field history: CommandHistory\r\n\r\n    // El c\xf3digo que asigna comandos a objetos UI puede tener\r\n    // este aspecto.\r\n    method createUI() is\r\n        // ...\r\n        copy = function() { executeCommand(\r\n            new CopyCommand(this, activeEditor)) }\r\n        copyButton.setCommand(copy)\r\n        shortcuts.onKeyPress("Ctrl+C", copy)\r\n\r\n        cut = function() { executeCommand(\r\n            new CutCommand(this, activeEditor)) }\r\n        cutButton.setCommand(cut)\r\n        shortcuts.onKeyPress("Ctrl+X", cut)\r\n\r\n        paste = function() { executeCommand(\r\n            new PasteCommand(this, activeEditor)) }\r\n        pasteButton.setCommand(paste)\r\n        shortcuts.onKeyPress("Ctrl+V", paste)\r\n\r\n        undo = function() { executeCommand(\r\n            new UndoCommand(this, activeEditor)) }\r\n        undoButton.setCommand(undo)\r\n        shortcuts.onKeyPress("Ctrl+Z", undo)\r\n\r\n    // Ejecuta un comando y comprueba si debe a\xf1adirse al\r\n    // historial.\r\n    method executeCommand(command) is\r\n        if (command.execute())\r\n            history.push(command)\r\n\r\n    // Toma el comando m\xe1s reciente del historial y ejecuta su\r\n    // m\xe9todo deshacer. Observa que no conocemos la clase de ese\r\n    // comando. Pero no tenemos por qu\xe9, ya que el comando sabe\r\n    // c\xf3mo deshacer su propia acci\xf3n.\r\n    method undo() is\r\n        command = history.pop()\r\n        if (command != null)\r\n            command.undo()\n'})}),"\n",(0,r.jsx)(n.h2,{id:"aplicabilidad",children:"Aplicabilidad"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:"Utiliza el patr\xf3n Command cuando quieras parametrizar objetos con operaciones."})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:"Utiliza el patr\xf3n Command cuando quieras poner operaciones en cola, programar su ejecuci\xf3n, o ejecutarlas de forma remota."})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:"Utiliza el patr\xf3n Command cuando quieras implementar operaciones reversibles."})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"c\xf3mo-implementarlo",children:"C\xf3mo implementarlo"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:"Declara la interfaz de comando con un \xfanico m\xe9todo de ejecuci\xf3n."})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:"Empieza extrayendo solicitudes y poni\xe9ndolas dentro de clases concretas de comando que implementen la interfaz de comando. Cada clase debe contar con un grupo de campos para almacenar los argumentos de las solicitudes junto con referencias al objeto receptor. Todos estos valores deben inicializarse a trav\xe9s del constructor del comando."})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:"Identifica clases que act\xfaen como emisoras. A\xf1ade los campos para almacenar comandos dentro de estas clases. Las emisoras deber\xe1n comunicarse con sus comandos tan solo a trav\xe9s de la interfaz de comando. Normalmente las emisoras no crean objetos de comando por su cuenta, sino que los obtienen del c\xf3digo cliente."})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:"Cambia las emisoras de forma que ejecuten el comando en lugar de enviar directamente una solicitud al receptor."})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:"El cliente debe inicializar objetos en el siguiente orden:"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Crear receptores."}),"\n",(0,r.jsx)(n.li,{children:"Crear comandos y asociarlos con receptores si es necesario."}),"\n",(0,r.jsx)(n.li,{children:"Crear emisores y asociarlos con comandos espec\xedficos."}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"pros",children:"Pros"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:"Principio de responsabilidad \xfanica. Puedes desacoplar las clases que invocan operaciones de las que realizan esas operaciones."})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Principio de abierto/cerrado. Puedes introducir nuevos comandos en la aplicaci\xf3n sin descomponer el c\xf3digo cliente existente._"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:"Puedes implementar deshacer/rehacer."})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:"Puedes implementar la ejecuci\xf3n diferida de operaciones."})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:"Puedes ensamblar un grupo de comandos simples para crear uno complejo."})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"https://www.livebeep.com/web/wp1/wp-content/uploads/2023/01/Diseno-sin-titulo-33.jpg",alt:"ventajas"})}),"\n",(0,r.jsx)(n.h2,{id:"contras",children:"Contras"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.em,{children:"El c\xf3digo puede complicarse, ya que est\xe1s introduciendo una nueva capa entre emisores y receptores."})}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"https://th.bing.com/th/id/OIP.e_suX-k3dtM20PJ07fwNfQHaHa?rs=1&pid=ImgDetMain",alt:"desventajas"})})]})}function m(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},8453:(e,n,a)=>{a.d(n,{R:()=>i,x:()=>c});var o=a(6540);const r={},s=o.createContext(r);function i(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);