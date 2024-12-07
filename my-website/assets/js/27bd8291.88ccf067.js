"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7068],{2149:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>l,contentTitle:()=>t,default:()=>p,frontMatter:()=>o,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"Visitor","title":"Visitor","description":"Visitor es un patr\xf3n de dise\xf1o de comportamiento que te permite separar algoritmos de los objetos sobre los que operan.","source":"@site/docs/Visitor.md","sourceDirName":".","slug":"/Visitor","permalink":"/Documentacion_Doc/docs/Visitor","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Visitor.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Template Method","permalink":"/Documentacion_Doc/docs/TemplateMethod"},"next":{"title":"chain_off_responsability","permalink":"/Documentacion_Doc/docs/chain_off_responsability"}}');var i=a(4848),r=a(8453);const o={},t="Visitor",l={},c=[{value:"Prop\xf3sito",id:"prop\xf3sito",level:2},{value:"Caracter\xedsticas",id:"caracter\xedsticas",level:3},{value:"Ventajas y Desventajas",id:"ventajas-y-desventajas",level:3},{value:"Analog\xeda",id:"analog\xeda",level:3},{value:"C\xf3digo de Implementaci\xf3n",id:"c\xf3digo-de-implementaci\xf3n",level:3}];function d(e){const s={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.header,{children:(0,i.jsx)(s.h1,{id:"visitor",children:"Visitor"})}),"\n",(0,i.jsx)(s.p,{children:"Visitor es un patr\xf3n de dise\xf1o de comportamiento que te permite separar algoritmos de los objetos sobre los que operan."}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:"https://reactiveprogramming.io/_next/image?url=%2Fbooks%2Fpatterns%2Fimg%2Fpatterns%2Fvisitor2.png&w=3840&q=75",alt:"Imagen de ejemplo"})}),"\n",(0,i.jsx)(s.h2,{id:"prop\xf3sito",children:"Prop\xf3sito"}),"\n",(0,i.jsx)(s.p,{children:"Es separar el algoritmo de los objetos sobre los que opera, permitiendo a\xf1adir nuevas operaciones a una estructura de objetos sin modificar las clases de esos objetos. En lugar de cambiar la estructura de las clases, el patr\xf3n permite a\xf1adir nuevas funcionalidades o comportamientos a trav\xe9s de un visitante."}),"\n",(0,i.jsx)(s.h3,{id:"caracter\xedsticas",children:"Caracter\xedsticas"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Permite ejecutar una operaci\xf3n sobre un conjunto de objetos con distintas clases."}),"\n",(0,i.jsx)(s.li,{children:"Permite a\xf1adir nuevas operaciones a las estructuras de objetos existentes sin modificarlas."}),"\n",(0,i.jsx)(s.li,{children:"Es una forma de implementar el Principio Abierto-Cerrado (OCP)."}),"\n",(0,i.jsx)(s.li,{children:"Los visitantes pueden carecer del acceso necesario a los campos y m\xe9todos privados de los elementos."}),"\n",(0,i.jsx)(s.li,{children:"Se debe actualizar todos los visitantes cada vez que una clase se a\xf1ada o elimine."}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"ventajas-y-desventajas",children:"Ventajas y Desventajas"}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:(0,i.jsx)(s.strong,{children:"Ventajas"})}),(0,i.jsx)(s.th,{children:(0,i.jsx)(s.strong,{children:"Desventajas"})})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsxs)(s.td,{children:[(0,i.jsx)(s.strong,{children:"Facilita la adici\xf3n de nuevas operaciones"}),": Permite agregar nuevas operaciones sin modificar las clases de los objetos."]}),(0,i.jsxs)(s.td,{children:[(0,i.jsx)(s.strong,{children:"Dificultad para agregar nuevos elementos"}),": Si se agregan nuevos tipos de objetos (nuevas clases), es necesario modificar todos los visitantes existentes para adaptarse a los nuevos tipos."]})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsxs)(s.td,{children:[(0,i.jsx)(s.strong,{children:"Desacopla las operaciones de las clases"}),": Las operaciones se definen en el visitante, separ\xe1ndolas de las clases de los elementos sobre los que operan."]}),(0,i.jsxs)(s.td,{children:[(0,i.jsx)(s.strong,{children:"Complejidad en la implementaci\xf3n"}),": La implementaci\xf3n puede volverse compleja en sistemas grandes debido a la necesidad de crear y mantener m\xfaltiples clases de visitantes."]})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsxs)(s.td,{children:[(0,i.jsx)(s.strong,{children:"Mejora la extensibilidad"}),": Es f\xe1cil agregar nuevas operaciones sin cambiar las clases base, solo creando nuevos visitantes."]}),(0,i.jsxs)(s.td,{children:[(0,i.jsx)(s.strong,{children:"Dependencia de la jerarqu\xeda de clases"}),": Las clases de elementos deben tener un m\xe9todo ",(0,i.jsx)(s.code,{children:"Accept"})," para permitir que el visitante opere sobre ellas, lo que puede aumentar el acoplamiento."]})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsxs)(s.td,{children:[(0,i.jsx)(s.strong,{children:"Promueve el principio de abierto/cerrado"}),": Las clases de elementos est\xe1n cerradas para modificaciones, pero abiertas para la extensi\xf3n a trav\xe9s de los visitantes."]}),(0,i.jsxs)(s.td,{children:[(0,i.jsx)(s.strong,{children:"No es adecuado para cambios frecuentes"}),": Si las operaciones en los objetos cambian con frecuencia, el patr\xf3n puede requerir constantes cambios en los visitantes, lo que puede ser costoso."]})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsxs)(s.td,{children:[(0,i.jsx)(s.strong,{children:"Facilita la mantenibilidad"}),": Centraliza las operaciones en los visitantes, lo que facilita su modificaci\xf3n y mantenimiento sin tocar las clases de los elementos."]}),(0,i.jsxs)(s.td,{children:[(0,i.jsx)(s.strong,{children:"Aumento del n\xfamero de clases"}),": Se puede generar una gran cantidad de clases visitantes, lo que hace m\xe1s dif\xedcil la gesti\xf3n del c\xf3digo."]})]})]})]}),"\n",(0,i.jsx)(s.h3,{id:"analog\xeda",children:"Analog\xeda"}),"\n",(0,i.jsx)(s.p,{children:"Imagina un experimentado agente de seguros que est\xe1 deseoso de conseguir nuevos clientes. Puede visitar todos los edificios de un barrio, intentando vender seguros a todo aquel que se va encontrando. Dependiendo del tipo de organizaci\xf3n que ocupe el edificio, puede ofrecer p\xf3lizas de seguro especializadas:"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:"https://refactoring.guru/images/patterns/content/visitor/visitor-comic-1.png?id=7ee4fa8800f7c4df4e1aa3b1aca2b7f1",alt:"Imagen de ejemplo"})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.em,{children:"Un buen agente de seguros siempre est\xe1 listo para ofrecer p\xf3lizas diferentes a los distintos tipos de organizaciones."})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Si es un edificio residencial, vende seguros m\xe9dicos."}),"\n",(0,i.jsx)(s.li,{children:"Si es un banco, vende seguros contra robos."}),"\n",(0,i.jsx)(s.li,{children:"Si es una cafeter\xeda, vende seguros contra incendios e inundaciones."}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"c\xf3digo-de-implementaci\xf3n",children:"C\xf3digo de Implementaci\xf3n"}),"\n",(0,i.jsx)(s.p,{children:"En este ejemplo, el patr\xf3n Visitor a\xf1ade soporte de exportaci\xf3n XML a la jerarqu\xeda de clases de formas geom\xe9tricas."}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:"https://refactoring.guru/images/patterns/diagrams/visitor/example.png?id=d66acd1b9096c47db17ab3bb82b54a59",alt:"Imagen de ejemplo"})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.em,{children:"Exportar varios tipos de objetos a formato XML a trav\xe9s de un objeto visitante."})}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-bash",children:"    // La interfaz elemento declara un m\xe9todo `accept` (aceptar) que\r\n// toma la interfaz visitante base como argumento.\r\ninterface Shape is\r\n    method move(x, y)\r\n    method draw()\r\n    method accept(v: Visitor)\r\n\r\n// Cada clase de elemento concreto debe implementar el m\xe9todo\r\n// `accept` de tal manera que invoque el m\xe9todo del visitante\r\n// que corresponde a la clase del elemento.\r\nclass Dot implements Shape is\r\n    // ...\r\n\r\n    // Observa que invocamos `visitDot`, que coincide con el\r\n    // nombre de la clase actual. De esta forma, hacemos saber\r\n    // al visitante la clase del elemento con el que trabaja.\r\n    method accept(v: Visitor) is\r\n        v.visitDot(this)\r\n\r\nclass Circle implements Shape is\r\n    // ...\r\n    method accept(v: Visitor) is\r\n        v.visitCircle(this)\r\n\r\nclass Rectangle implements Shape is\r\n    // ...\r\n    method accept(v: Visitor) is\r\n        v.visitRectangle(this)\r\n\r\nclass CompoundShape implements Shape is\r\n    // ...\r\n    method accept(v: Visitor) is\r\n        v.visitCompoundShape(this)\r\n\r\n\r\n// La interfaz Visitor declara un grupo de m\xe9todos de visita que\r\n// se corresponden con clases de elemento. La firma de un m\xe9todo\r\n// de visita permite al visitante identificar la clase exacta\r\n// del elemento con el que trata.\r\ninterface Visitor is\r\n    method visitDot(d: Dot)\r\n    method visitCircle(c: Circle)\r\n    method visitRectangle(r: Rectangle)\r\n    method visitCompoundShape(cs: CompoundShape)\r\n\r\n// Los visitantes concretos implementan varias versiones del\r\n// mismo algoritmo, que puede funcionar con todas las clases de\r\n// elementos concretos.\r\n//\r\n// Puedes disfrutar de la mayor ventaja del patr\xf3n Visitor si lo\r\n// utilizas con una estructura compleja de objetos, como un\r\n// \xe1rbol Composite. En este caso, puede ser de ayuda almacenar\r\n// alg\xfan estado intermedio del algoritmo mientras ejecutas los\r\n// m\xe9todos del visitante sobre varios objetos de la estructura.\r\nclass XMLExportVisitor implements Visitor is\r\n    method visitDot(d: Dot) is\r\n        // Exporta la ID del punto (dot) y centra las\r\n        // coordenadas.\r\n\r\n    method visitCircle(c: Circle) is\r\n        // Exporta la ID del c\xedrculo y centra las coordenadas y\r\n        // el radio.\r\n\r\n    method visitRectangle(r: Rectangle) is\r\n        // Exporta la ID del rect\xe1ngulo, las coordenadas de\r\n        // arriba a la izquierda, la anchura y la altura.\r\n\r\n    method visitCompoundShape(cs: CompoundShape) is\r\n        // Exporta la ID de la forma, as\xed como la lista de las\r\n        // ID de sus hijos.\r\n\r\n\r\n// El c\xf3digo cliente puede ejecutar operaciones del visitante\r\n// sobre cualquier grupo de elementos sin conocer sus clases\r\n// concretas. La operaci\xf3n `accept` dirige una llamada a la\r\n// operaci\xf3n adecuada del objeto visitante.\r\nclass Application is\r\n    field allShapes: array of Shapes\r\n\r\n    method export() is\r\n        exportVisitor = new XMLExportVisitor()\r\n\r\n        foreach (shape in allShapes) do\r\n            shape.accept(exportVisitor)\n"})})]})}function p(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,s,a)=>{a.d(s,{R:()=>o,x:()=>t});var n=a(6540);const i={},r=n.createContext(i);function o(e){const s=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function t(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),n.createElement(r.Provider,{value:s},e.children)}}}]);