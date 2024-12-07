"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2375],{8430:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>c,metadata:()=>r,toc:()=>l});const r=JSON.parse('{"id":"Factory_Method","title":"Factory Method","description":"El Factory Method es un patr\xf3n de dise\xf1o creacional que define una interfaz en una clase base para la creaci\xf3n de objetos, delegando a las subclases la decisi\xf3n sobre qu\xe9 tipo de objeto debe instanciarse. Este enfoque permite que las subclases alteren el tipo de objetos creados sin modificar la estructura o el comportamiento general del sistema.","source":"@site/docs/Factory_Method.md","sourceDirName":".","slug":"/Factory_Method","permalink":"/Documentacion_Doc/docs/Factory_Method","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Factory_Method.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Builder","permalink":"/Documentacion_Doc/docs/Builder"},"next":{"title":"State","permalink":"/Documentacion_Doc/docs/State"}}');var o=n(4848),a=n(8453);const c={},i="Factory Method",d={},l=[{value:"\xbfC\xf3mo Funciona?",id:"c\xf3mo-funciona",level:3},{value:"\xbfCu\xe1l es la soluci\xf3n?",id:"cu\xe1l-es-la-soluci\xf3n",level:3},{value:"Ventajas del Patr\xf3n",id:"ventajas-del-patr\xf3n",level:3},{value:"Desventajas del patr\xf3n:",id:"desventajas-del-patr\xf3n",level:3},{value:"Estructura",id:"estructura",level:3},{value:"Ejemplo Pr\xe1ctico de C\xf3digo: Patr\xf3n Factory Method",id:"ejemplo-pr\xe1ctico-de-c\xf3digo-patr\xf3n-factory-method",level:3},{value:"Comparaciones con otros patrones",id:"comparaciones-con-otros-patrones",level:3},{value:"Casos de uso comunes del patr\xf3n Factory Method:",id:"casos-de-uso-comunes-del-patr\xf3n-factory-method",level:3}];function t(e){const s={blockquote:"blockquote",code:"code",em:"em",h1:"h1",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.header,{children:(0,o.jsx)(s.h1,{id:"factory-method",children:"Factory Method"})}),"\n",(0,o.jsx)(s.p,{children:"El Factory Method es un patr\xf3n de dise\xf1o creacional que define una interfaz en una clase base para la creaci\xf3n de objetos, delegando a las subclases la decisi\xf3n sobre qu\xe9 tipo de objeto debe instanciarse. Este enfoque permite que las subclases alteren el tipo de objetos creados sin modificar la estructura o el comportamiento general del sistema."}),"\n",(0,o.jsx)(s.p,{children:"Este patr\xf3n es especialmente \xfatil cuando se necesita evitar el uso directo del operador new y se desea mantener el c\xf3digo abierto a extensiones pero cerrado a modificaciones, cumpliendo con el principio Open/Closed de SOLID."}),"\n",(0,o.jsx)(s.h3,{id:"c\xf3mo-funciona",children:"\xbfC\xf3mo Funciona?"}),"\n",(0,o.jsx)(s.p,{children:'El patr\xf3n Factory Method delega la creaci\xf3n de objetos a las subclases del creador, asegurando que el creador no dependa de las clases concretas de los productos. Esto se logra a trav\xe9s de un m\xe9todo abstracto, que act\xfaa como una "f\xe1brica" para producir los objetos requeridos.'}),"\n",(0,o.jsx)(s.p,{children:"Es decir el creador no debe conocer los detalles espec\xedficos de los tipos de productos que crea. En su lugar, las subclases del creador son las responsables de definir los tipos concretos de los productos que se generar\xe1n."}),"\n",(0,o.jsx)(s.h3,{id:"cu\xe1l-es-la-soluci\xf3n",children:"\xbfCu\xe1l es la soluci\xf3n?"}),"\n",(0,o.jsx)(s.p,{children:"Este patr\xf3n resuelve el problema de desacoplar la creaci\xf3n de objetos concretos de su uso."}),"\n",(0,o.jsx)(s.p,{children:"El problema central es que, en un dise\xf1o tradicional, el c\xf3digo del cliente (o usuario del objeto) a menudo est\xe1 directamente vinculado a las clases concretas que necesita instanciar. Esto puede generar rigidez en el c\xf3digo, dificultar la introducci\xf3n de nuevas variantes de productos y violar principios como el de abierto/cerrado (extender sin modificar)."}),"\n",(0,o.jsx)(s.p,{children:"La soluci\xf3n consiste en introducir un m\xe9todo abstracto, conocido como el m\xe9todo de la f\xe1brica, dentro de la clase creadora."}),"\n",(0,o.jsx)(s.p,{children:(0,o.jsx)(s.strong,{children:"M\xe9todo abstracto:"})}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsx)(s.li,{children:"Este m\xe9todo se declara en la clase base del creador como un contrato (abstracto), lo que significa que no tiene una implementaci\xf3n en esta clase base."}),"\n"]}),"\n",(0,o.jsx)(s.p,{children:(0,o.jsx)(s.strong,{children:"Sobrescritura en subclases:"})}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsx)(s.li,{children:"Las subclases del creador implementan este m\xe9todo abstracto, devolviendo instancias espec\xedficas de las subclases de los productos. De esta manera, se mantiene el principio de abierto/cerrado, ya que se pueden a\xf1adir nuevas subclases de productos y creadores sin modificar el c\xf3digo base existente."}),"\n"]}),"\n",(0,o.jsx)(s.h3,{id:"ventajas-del-patr\xf3n",children:"Ventajas del Patr\xf3n"}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsxs)(s.li,{children:["\n",(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.strong,{children:(0,o.jsx)(s.em,{children:"Desacoplamiento:"})}),"\r\nSepara la l\xf3gica de creaci\xf3n de objetos de su uso, haciendo el sistema m\xe1s flexible y f\xe1cil de extender."]}),"\n"]}),"\n",(0,o.jsxs)(s.li,{children:["\n",(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.strong,{children:(0,o.jsx)(s.em,{children:"Extensibilidad:"})}),"\r\nAgregar nuevos productos no requiere modificar el c\xf3digo del creador o cliente existente, solo se a\xf1aden nuevas subclases del creador y del producto."]}),"\n"]}),"\n",(0,o.jsxs)(s.li,{children:["\n",(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.strong,{children:(0,o.jsx)(s.em,{children:"Cumple con el Principio Abierto/Cerrado:"})}),"\r\nPermite a\xf1adir nuevas funcionalidades (productos o creadores) sin cambiar el c\xf3digo existente."]}),"\n"]}),"\n",(0,o.jsxs)(s.li,{children:["\n",(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.strong,{children:(0,o.jsx)(s.em,{children:"Control de creaci\xf3n:"})}),"\r\nCentraliza la creaci\xf3n de objetos, lo que permite controlar c\xf3mo y cu\xe1ndo se crean los productos."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(s.h3,{id:"desventajas-del-patr\xf3n",children:"Desventajas del patr\xf3n:"}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsxs)(s.li,{children:["\n",(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.strong,{children:(0,o.jsx)(s.em,{children:"Mayor complejidad:"})})," Introduce m\xe1s clases y m\xe9todos, lo que puede complicar el dise\xf1o si no se gestiona adecuadamente."]}),"\n"]}),"\n",(0,o.jsxs)(s.li,{children:["\n",(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.strong,{children:(0,o.jsx)(s.em,{children:"Dependencia de subclases:"})})," Requiere una estructura jer\xe1rquica de clases, lo que puede llevar a una alta dependencia entre ellas."]}),"\n"]}),"\n",(0,o.jsxs)(s.li,{children:["\n",(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.strong,{children:(0,o.jsx)(s.em,{children:"Dif\xedcil de modificar:"})})," Si se desea cambiar la creaci\xf3n de productos, se deben modificar varias subclases del creador, lo que puede afectar la mantenibilidad."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(s.h3,{id:"estructura",children:"Estructura"}),"\n",(0,o.jsx)(s.p,{children:"Las clases principales en este patr\xf3n son el creador y el producto. El objetivo principal es que el creador pueda generar instancias de productos sin depender directamente de los tipos concretos de estos. Esto significa que los detalles espec\xedficos de los productos no deben estar reflejados dentro del creador."}),"\n",(0,o.jsx)(s.p,{children:"En su lugar, las posibles subclases del creador son las que deben especificar qu\xe9 tipos concretos (subclases) de productos se van a utilizar. De esta manera, el creador mantiene una independencia frente a los detalles espec\xedficos de los productos."}),"\n",(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.em,{children:"diagrama del patr\xf3n de dise\xf1o Factory Method"}),"\r\n",(0,o.jsx)(s.img,{src:"https://upload.wikimedia.org/wikipedia/commons/7/73/Factory_Method.png",alt:"diagrama del patr\xf3n de dise\xf1o Factory Method"})]}),"\n",(0,o.jsx)(s.p,{children:"Para lograr esto, se utiliza un m\xe9todo abstracto, llamado m\xe9todo de la f\xe1brica, que se define en la clase creadora."}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsx)(s.li,{children:"Este m\xe9todo abstracto est\xe1 dise\xf1ado para devolver un producto."}),"\n",(0,o.jsx)(s.li,{children:"Las subclases del creador sobrescriben este m\xe9todo para proporcionar instancias de las subclases espec\xedficas del producto que necesitan."}),"\n"]}),"\n",(0,o.jsx)(s.p,{children:"Por ejemplo:"}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsxs)(s.li,{children:["Si tienes una clase base llamada ",(0,o.jsx)(s.strong,{children:(0,o.jsx)(s.em,{children:"Creador"})}),", esta puede declarar un m\xe9todo abstracto como ",(0,o.jsx)(s.strong,{children:(0,o.jsx)(s.em,{children:"crearProducto()."})})]}),"\n",(0,o.jsxs)(s.li,{children:["Las subclases de ",(0,o.jsx)(s.strong,{children:(0,o.jsx)(s.em,{children:"Creador"})}),", como ",(0,o.jsx)(s.strong,{children:(0,o.jsx)(s.em,{children:"CreadorDeAutos"})})," o ",(0,o.jsx)(s.strong,{children:(0,o.jsx)(s.em,{children:"CreadorDeMotos"})}),", implementan ",(0,o.jsx)(s.strong,{children:(0,o.jsx)(s.em,{children:"crearProducto()"})})," para devolver instancias espec\xedficas de productos como Auto o Moto.\r\nDe este modo, el patr\xf3n asegura que el creador puede generar productos de manera flexible y extensible, sin depender directamente de sus implementaciones concretas."]}),"\n"]}),"\n",(0,o.jsx)(s.p,{children:"De este modo, el patr\xf3n asegura que el creador puede generar productos de manera flexible y extensible, sin depender directamente de sus implementaciones concretas."}),"\n",(0,o.jsx)(s.h3,{id:"ejemplo-pr\xe1ctico-de-c\xf3digo-patr\xf3n-factory-method",children:"Ejemplo Pr\xe1ctico de C\xf3digo: Patr\xf3n Factory Method"}),"\n",(0,o.jsxs)(s.ol,{children:["\n",(0,o.jsx)(s.li,{children:(0,o.jsx)(s.strong,{children:(0,o.jsx)(s.em,{children:"Definici\xf3n de la Interfaz Producto"})})}),"\n"]}),"\n",(0,o.jsx)(s.p,{children:"Primero, definimos una interfaz com\xfan para los productos (veh\xedculos):"}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{children:"from abc import ABC, abstractmethod\r\n\r\nclass Vehiculo(ABC):\r\n    @abstractmethod\r\n    def conducir(self):\r\n        pass\n"})}),"\n",(0,o.jsxs)(s.ol,{start:"2",children:["\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.strong,{children:(0,o.jsx)(s.em,{children:"Productos Concretos"})}),"\r\nAhora, creamos dos clases concretas que implementan la interfaz Vehiculo:"]}),"\n"]}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{children:'class Coche(Vehiculo):\r\n    def conducir(self):\r\n        return "Conduciendo un coche."\r\n\r\nclass Motocicleta(Vehiculo):\r\n    def conducir(self):\r\n        return "Conduciendo una motocicleta."\r\n\n'})}),"\n",(0,o.jsxs)(s.ol,{start:"3",children:["\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.strong,{children:(0,o.jsx)(s.em,{children:"Definici\xf3n de la Clase Creador"})}),"\r\nEl creador es una clase base que define el m\xe9todo de f\xe1brica, el cual es abstracto y debe ser implementado por las subclases concretas."]}),"\n"]}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{children:"class Creador(ABC):\r\n    @abstractmethod\r\n    def crear_vehiculo(self) -> Vehiculo:\r\n        pass\r\n\n"})}),"\n",(0,o.jsxs)(s.ol,{start:"4",children:["\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.strong,{children:"_Creadores Concretos"}),"_\r\nLas subclases del creador implementan el m\xe9todo de f\xe1brica para crear productos espec\xedficos."]}),"\n"]}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{children:"class CreadorCoche(Creador):\r\n    def crear_vehiculo(self) -> Vehiculo:\r\n        return Coche()\r\n\r\nclass CreadorMotocicleta(Creador):\r\n    def crear_vehiculo(self) -> Vehiculo:\r\n        return Motocicleta()\r\n\n"})}),"\n",(0,o.jsxs)(s.ol,{start:"5",children:["\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.strong,{children:(0,o.jsx)(s.em,{children:"Uso del Cliente"})}),"\r\nEl cliente interact\xfaa con los creadores y obtiene el producto sin preocuparse por su creaci\xf3n."]}),"\n"]}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{children:"def cliente(creator: Creador):\r\n    vehiculo = creator.crear_vehiculo()\r\n    print(vehiculo.conducir())\r\n\r\n# Creando diferentes tipos de veh\xedculos\r\ncreador_coche = CreadorCoche()\r\ncliente(creador_coche)  # Conduciendo un coche.\r\n\r\ncreador_moto = CreadorMotocicleta()\r\ncliente(creador_moto)  # Conduciendo una motocicleta.\r\n\n"})}),"\n",(0,o.jsx)(s.h3,{id:"comparaciones-con-otros-patrones",children:"Comparaciones con otros patrones"}),"\n",(0,o.jsx)(s.p,{children:"El patr\xf3n Factory Method se diferencia de otros patrones como el Abstract Factory y el Singleton en los siguientes aspectos:"}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsxs)(s.li,{children:["\n",(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.strong,{children:(0,o.jsx)(s.em,{children:"Abstract Factory:"})})," Se utiliza cuando necesitas crear familias de objetos relacionados, mientras que Factory Method se enfoca en la creaci\xf3n de un solo tipo de objeto."]}),"\n"]}),"\n",(0,o.jsxs)(s.li,{children:["\n",(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.strong,{children:(0,o.jsx)(s.em,{children:"Singleton:"})})," A diferencia del Factory Method, que puede generar varias instancias de un producto, el Singleton asegura que solo haya una instancia de una clase en todo el sistema."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(s.p,{children:"Cada patr\xf3n tiene su caso de uso espec\xedfico, dependiendo de la flexibilidad y los requisitos del sistema."}),"\n",(0,o.jsx)(s.h3,{id:"casos-de-uso-comunes-del-patr\xf3n-factory-method",children:"Casos de uso comunes del patr\xf3n Factory Method:"}),"\n",(0,o.jsxs)(s.p,{children:["El patr\xf3n ",(0,o.jsx)(s.strong,{children:"Factory Method"})," se aplica en diversas situaciones."]}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsx)(s.li,{children:"En frameworks de desarrollo, permite la creaci\xf3n de objetos sin que el framework dependa de las clases concretas que el usuario utiliza."}),"\n",(0,o.jsx)(s.li,{children:"En sistemas de plugins, facilita la creaci\xf3n din\xe1mica de componentes seg\xfan las necesidades del sistema, sin modificar el c\xf3digo base."}),"\n",(0,o.jsx)(s.li,{children:"En interfaces gr\xe1ficas, se utiliza para generar distintos controles visuales, como botones o cuadros de texto, seg\xfan la plataforma, manteniendo la coherencia del dise\xf1o. Esto proporciona flexibilidad y escalabilidad al sistema."}),"\n"]}),"\n",(0,o.jsxs)(s.blockquote,{children:["\n",(0,o.jsx)(s.p,{children:"El patr\xf3n Factory Method es una herramienta poderosa que permite desacoplar la creaci\xf3n de objetos de su uso, lo que facilita la extensi\xf3n de sistemas sin modificar el c\xf3digo existente.\r\nEs \xfatil cuando se necesita crear diferentes tipos de objetos de una misma familia sin alterar la l\xf3gica principal del sistema. Aunque presenta algunas desventajas, como mayor complejidad y dependencia entre clases, su capacidad de flexibilizar la creaci\xf3n de objetos lo hace ideal para aplicaciones escalables y din\xe1micas."}),"\n"]})]})}function u(e={}){const{wrapper:s}={...(0,a.R)(),...e.components};return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(t,{...e})}):t(e)}},8453:(e,s,n)=>{n.d(s,{R:()=>c,x:()=>i});var r=n(6540);const o={},a=r.createContext(o);function c(e){const s=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),r.createElement(a.Provider,{value:s},e.children)}}}]);