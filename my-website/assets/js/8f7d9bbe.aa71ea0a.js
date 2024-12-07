"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2598],{243:(e,a,s)=>{s.r(a),s.d(a,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"TemplateMethod","title":"Template Method","description":"El m\xe9todo de plantilla es un patr\xf3n de dise\xf1o de comportamiento que define el esqueleto de un algoritmo en la superclase, pero permite que las subclases invaliden pasos espec\xedficos del algoritmo sin cambiar su estructura.","source":"@site/docs/TemplateMethod.md","sourceDirName":".","slug":"/TemplateMethod","permalink":"/Documentacion_Doc/docs/TemplateMethod","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/TemplateMethod.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"State","permalink":"/Documentacion_Doc/docs/State"},"next":{"title":"Visitor","permalink":"/Documentacion_Doc/docs/Visitor"}}');var r=s(4848),t=s(8453);const i={},o="Template Method",l={},c=[{value:"Prop\xf3sito",id:"prop\xf3sito",level:2},{value:"Caracter\xedsticas",id:"caracter\xedsticas",level:3},{value:"Ventajas y Desventajas",id:"ventajas-y-desventajas",level:3},{value:"Analog\xeda del mundo real",id:"analog\xeda-del-mundo-real",level:3},{value:"C\xf3digo de Implementaci\xf3n",id:"c\xf3digo-de-implementaci\xf3n",level:3}];function d(e){const a={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.header,{children:(0,r.jsx)(a.h1,{id:"template-method",children:"Template Method"})}),"\n",(0,r.jsx)(a.p,{children:"El m\xe9todo de plantilla es un patr\xf3n de dise\xf1o de comportamiento que define el esqueleto de un algoritmo en la superclase, pero permite que las subclases invaliden pasos espec\xedficos del algoritmo sin cambiar su estructura."}),"\n",(0,r.jsx)(a.p,{children:(0,r.jsx)(a.img,{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqzyPYpS_0ak2J90KiD7rJGi2-t2jsoUsRZ-8uvntd6robHzIfWN4RBJfcsOyEyoBOLxI&usqp=CAU",alt:"Imagen de ejemplo"})}),"\n",(0,r.jsx)(a.h2,{id:"prop\xf3sito",children:"Prop\xf3sito"}),"\n",(0,r.jsx)(a.p,{children:"Es definir la estructura de un algoritmo, dejando algunos pasos del algoritmo a ser implementados por las subclases. Este patr\xf3n permite que las subclases redefinan ciertos pasos del algoritmo sin cambiar la estructura general o el flujo del mismo."}),"\n",(0,r.jsx)(a.h3,{id:"caracter\xedsticas",children:"Caracter\xedsticas"}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsx)(a.li,{children:"Define el esqueleto de un algoritmo en una clase base."}),"\n",(0,r.jsx)(a.li,{children:"Permite a las subclases sobrescribir pasos del algoritmo sin cambiar su estructura."}),"\n",(0,r.jsx)(a.li,{children:"Evita la duplicaci\xf3n de c\xf3digo."}),"\n",(0,r.jsx)(a.li,{children:"Se centra en la reutilizaci\xf3n de c\xf3digo."}),"\n",(0,r.jsx)(a.li,{children:"Permite tener tantas variaciones del mismo algoritmo como se necesite."}),"\n"]}),"\n",(0,r.jsx)(a.h3,{id:"ventajas-y-desventajas",children:"Ventajas y Desventajas"}),"\n",(0,r.jsxs)(a.table,{children:[(0,r.jsx)(a.thead,{children:(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.th,{children:(0,r.jsx)(a.strong,{children:"Ventajas"})}),(0,r.jsx)(a.th,{children:(0,r.jsx)(a.strong,{children:"Desventajas"})})]})}),(0,r.jsxs)(a.tbody,{children:[(0,r.jsxs)(a.tr,{children:[(0,r.jsxs)(a.td,{children:[(0,r.jsx)(a.strong,{children:"Reutilizaci\xf3n de c\xf3digo"}),": El patr\xf3n permite centralizar el algoritmo com\xfan en la clase base, evitando la duplicaci\xf3n de c\xf3digo."]}),(0,r.jsxs)(a.td,{children:[(0,r.jsx)(a.strong,{children:"Rigidez"}),": La estructura del algoritmo est\xe1 definida en la clase base, lo que puede dificultar la modificaci\xf3n de los pasos sin afectar a las subclases."]})]}),(0,r.jsxs)(a.tr,{children:[(0,r.jsxs)(a.td,{children:[(0,r.jsx)(a.strong,{children:"Control del flujo de ejecuci\xf3n"}),": La clase base define el flujo general, mientras que las subclases proporcionan implementaciones espec\xedficas, lo que mejora el control."]}),(0,r.jsxs)(a.td,{children:[(0,r.jsx)(a.strong,{children:"Dependencia de la clase base"}),": Las subclases est\xe1n fuertemente acopladas a la clase base y pueden verse limitadas por la estructura definida en la misma."]})]}),(0,r.jsxs)(a.tr,{children:[(0,r.jsxs)(a.td,{children:[(0,r.jsx)(a.strong,{children:"F\xe1cil de extender"}),": Las subclases pueden agregar o modificar el comportamiento de pasos espec\xedficos sin cambiar la estructura general del algoritmo."]}),(0,r.jsxs)(a.td,{children:[(0,r.jsx)(a.strong,{children:"Dificultad para cambios estructurales"}),": Si el algoritmo necesita cambiar sustancialmente, las subclases pueden necesitar ser reescritas, lo que puede ser costoso en t\xe9rminos de mantenimiento."]})]}),(0,r.jsxs)(a.tr,{children:[(0,r.jsxs)(a.td,{children:[(0,r.jsx)(a.strong,{children:"Facilita el mantenimiento"}),": El c\xf3digo com\xfan se mantiene en un solo lugar (la clase base), lo que facilita las actualizaciones y el mantenimiento."]}),(0,r.jsxs)(a.td,{children:[(0,r.jsx)(a.strong,{children:"Complejidad"}),": Para algoritmos muy simples, el uso del patr\xf3n puede resultar innecesario, a\xf1adiendo complejidad adicional sin un beneficio claro."]})]}),(0,r.jsxs)(a.tr,{children:[(0,r.jsxs)(a.td,{children:[(0,r.jsx)(a.strong,{children:"Cohesi\xf3n"}),": El patr\xf3n ayuda a mantener una alta cohesi\xf3n dentro de las subclases, ya que cada una se centra solo en la personalizaci\xf3n de pasos espec\xedficos."]}),(0,r.jsxs)(a.td,{children:[(0,r.jsx)(a.strong,{children:"Herencia excesiva"}),": Si se tiene una jerarqu\xeda muy profunda, puede ser dif\xedcil entender y mantener todas las implementaciones del algoritmo."]})]})]})]}),"\n",(0,r.jsx)(a.h3,{id:"analog\xeda-del-mundo-real",children:"Analog\xeda del mundo real"}),"\n",(0,r.jsx)(a.p,{children:"El enfoque del m\xe9todo plantilla puede emplearse en la construcci\xf3n de viviendas en masa. El plan arquitect\xf3nico para construir una casa est\xe1ndar puede contener varios puntos de extensi\xf3n que permitir\xe1n a un potencial propietario ajustar algunos detalles de la casa resultante."}),"\n",(0,r.jsx)(a.p,{children:(0,r.jsx)(a.img,{src:"https://refactoring.guru/images/patterns/diagrams/template-method/live-example.png?id=2485d52852f87da06c9cc0e2fd257d6a",alt:"Imagen de ejemplo"})}),"\n",(0,r.jsx)(a.p,{children:(0,r.jsx)(a.em,{children:"Un plan arquitect\xf3nico t\xedpico puede alterarse ligeramente para que encaje mejor con las necesidades del cliente."})}),"\n",(0,r.jsx)(a.p,{children:"Cada paso de la construcci\xf3n, como colocar los cimientos, el armaz\xf3n, construir las paredes, instalar las tuber\xedas para el agua y el cableado para la electricidad, etc., puede cambiarse ligeramente para que la casa resultante sea un poco diferente de las dem\xe1s."}),"\n",(0,r.jsx)(a.h3,{id:"c\xf3digo-de-implementaci\xf3n",children:"C\xf3digo de Implementaci\xf3n"}),"\n",(0,r.jsx)(a.p,{children:"En este ejemplo, el patr\xf3n Template Method proporciona un \u201cesqueleto\u201d para varias ramas de inteligencia artificial (IA) en un sencillo videojuego de estrategia."}),"\n",(0,r.jsx)(a.p,{children:(0,r.jsx)(a.img,{src:"https://refactoring.guru/images/patterns/diagrams/template-method/example.png?id=c0ce5cc8070925a1cd345fac6afa16b6",alt:"Imagen de ejemplo"})}),"\n",(0,r.jsx)(a.p,{children:(0,r.jsx)(a.em,{children:"Clases IA de un sencillo videojuego."})}),"\n",(0,r.jsx)(a.p,{children:"Todas las razas del juego tienen tipos de unidades y edificios casi iguales. Por lo tanto, puedes reutilizar la misma estructura IA para varias de ellas, a la vez que puedes sobrescribir algunos de los detalles. Con esta soluci\xf3n, puedes sobrescribir la IA de los orcos para que sean m\xe1s agresivos, hacer que los humanos tengan una actitud m\xe1s defensiva y hacer que los monstruos no puedan construir nada. Para a\xf1adir una nueva raza al juego habr\xeda que crear una nueva subclase IA y sobrescribir los m\xe9todos por defecto declarados en la clase IA base."}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-bash",children:"    // La clase abstracta define un m\xe9todo plantilla que contiene un\r\n// esqueleto de alg\xfan algoritmo compuesto por llamadas,\r\n// normalmente a operaciones primitivas abstractas. Las\r\n// subclases concretas implementan estas operaciones, pero dejan\r\n// el propio m\xe9todo plantilla intacto.\r\nclass GameAI is\r\n    // El m\xe9todo plantilla define el esqueleto de un algoritmo.\r\n    method turn() is\r\n        collectResources()\r\n        buildStructures()\r\n        buildUnits()\r\n        attack()\r\n\r\n    // Algunos de los pasos se pueden implementar directamente\r\n    // en una clase base.\r\n    method collectResources() is\r\n        foreach (s in this.builtStructures) do\r\n            s.collect()\r\n\r\n    // Y algunos de ellos pueden definirse como abstractos.\r\n    abstract method buildStructures()\r\n    abstract method buildUnits()\r\n\r\n    // Una clase puede tener varios m\xe9todos plantilla.\r\n    method attack() is\r\n        enemy = closestEnemy()\r\n        if (enemy == null)\r\n            sendScouts(map.center)\r\n        else\r\n            sendWarriors(enemy.position)\r\n\r\n    abstract method sendScouts(position)\r\n    abstract method sendWarriors(position)\r\n\r\n// Las clases concretas tienen que implementar todas las\r\n// operaciones abstractas de la clase base, pero no deben\r\n// sobrescribir el propio m\xe9todo plantilla.\r\nclass OrcsAI extends GameAI is\r\n    method buildStructures() is\r\n        if (there are some resources) then\r\n            // Construye granjas, despu\xe9s cuarteles y despu\xe9s\r\n            // fortaleza.\r\n\r\n    method buildUnits() is\r\n        if (there are plenty of resources) then\r\n            if (there are no scouts)\r\n                // Crea pe\xf3n y a\xf1\xe1delo al grupo de exploradores.\r\n            else\r\n                // Crea soldado, a\xf1\xe1delo al grupo de guerreros.\r\n\r\n    // ...\r\n\r\n    method sendScouts(position) is\r\n        if (scouts.length > 0) then\r\n            // Env\xeda exploradores a posici\xf3n.\r\n\r\n    method sendWarriors(position) is\r\n        if (warriors.length > 5) then\r\n            // Env\xeda guerreros a posici\xf3n.\r\n\r\n// Las subclases tambi\xe9n pueden sobrescribir algunas operaciones\r\n// con una implementaci\xf3n por defecto.\r\nclass MonstersAI extends GameAI is\r\n    method collectResources() is\r\n        // Los monstruos no recopilan recursos.\r\n\r\n    method buildStructures() is\r\n        // Los monstruos no construyen estructuras.\r\n\r\n    method buildUnits() is\r\n        // Los monstruos no construyen unidades.\n"})})]})}function u(e={}){const{wrapper:a}={...(0,t.R)(),...e.components};return a?(0,r.jsx)(a,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,a,s)=>{s.d(a,{R:()=>i,x:()=>o});var n=s(6540);const r={},t=n.createContext(r);function i(e){const a=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function o(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),n.createElement(t.Provider,{value:a},e.children)}}}]);