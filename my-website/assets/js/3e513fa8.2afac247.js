"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8985],{9148:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>t,metadata:()=>o,toc:()=>d});const o=JSON.parse('{"id":"Builder","title":"Builder","description":"Builder es un patr\xf3n de dise\xf1o creacional que nos permite construir objetos complejos paso a paso. El patr\xf3n nos permite producir distintos tipos y representaciones de un objeto empleando el mismo c\xf3digo de construcci\xf3n.","source":"@site/docs/Builder.md","sourceDirName":".","slug":"/Builder","permalink":"/Documentacion_Doc/docs/Builder","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Builder.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"PATRONES DE DISE\xd1O","permalink":"/Documentacion_Doc/docs/intro"},"next":{"title":"Factory Method","permalink":"/Documentacion_Doc/docs/Factory_Method"}}');var s=n(4848),a=n(8453);const t={},i="Builder",c={},d=[{value:"Prop\xf3sito",id:"prop\xf3sito",level:2},{value:"Caracter\xedsticas",id:"caracter\xedsticas",level:3},{value:"Ventajas y Desventajas",id:"ventajas-y-desventajas",level:3},{value:"Analog\xeda",id:"analog\xeda",level:3},{value:"C\xf3digo de Implementaci\xf3n",id:"c\xf3digo-de-implementaci\xf3n",level:3}];function l(e){const r={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.header,{children:(0,s.jsx)(r.h1,{id:"builder",children:"Builder"})}),"\n",(0,s.jsx)(r.p,{children:"Builder es un patr\xf3n de dise\xf1o creacional que nos permite construir objetos complejos paso a paso. El patr\xf3n nos permite producir distintos tipos y representaciones de un objeto empleando el mismo c\xf3digo de construcci\xf3n."}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.img,{src:"https://www.ionos.mx/digitalguide/fileadmin/DigitalGuide/Schaubilder/ejemplo-para-visualizar-la-mecanica-de-builder-battern.png",alt:"Imagen de ejemplo"})}),"\n",(0,s.jsx)(r.h2,{id:"prop\xf3sito",children:"Prop\xf3sito"}),"\n",(0,s.jsx)(r.p,{children:"Es separar la construcci\xf3n de un objeto complejo de su representaci\xf3n, permitiendo que el mismo proceso de construcci\xf3n pueda crear diferentes representaciones del objeto. Este patr\xf3n es \xfatil cuando necesitas construir objetos que tienen muchas partes configurables o pasos para su creaci\xf3n."}),"\n",(0,s.jsx)(r.h3,{id:"caracter\xedsticas",children:"Caracter\xedsticas"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"Permite construir objetos complejos paso a paso."}),"\n",(0,s.jsx)(r.li,{children:"Se utiliza cuando se quiere crear una interfaz clara para construir objetos de una clase."}),"\n",(0,s.jsx)(r.li,{children:"Permite crear distintos productos utilizando el mismo proceso de construcci\xf3n."}),"\n",(0,s.jsx)(r.li,{children:"Encapsula el c\xf3digo de construcci\xf3n y de representaci\xf3n."}),"\n",(0,s.jsx)(r.li,{children:"Proporciona un control m\xe1s expl\xedcito sobre el proceso de construcci\xf3n."}),"\n"]}),"\n",(0,s.jsx)(r.h3,{id:"ventajas-y-desventajas",children:"Ventajas y Desventajas"}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:(0,s.jsx)(r.strong,{children:"Ventajas"})}),(0,s.jsx)(r.th,{children:(0,s.jsx)(r.strong,{children:"Desventajas"})})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{children:[(0,s.jsx)(r.strong,{children:"Facilita la creaci\xf3n de objetos complejos"}),": Permite construir objetos paso a paso, dividiendo el proceso en partes manejables."]}),(0,s.jsxs)(r.td,{children:[(0,s.jsx)(r.strong,{children:"Incrementa el n\xfamero de clases"}),": Requiere crear m\xfaltiples clases para los Builders y, a veces, para los Directores, lo que puede aumentar la complejidad."]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{children:[(0,s.jsx)(r.strong,{children:"Fomenta la reutilizaci\xf3n"}),": Puedes reutilizar el mismo c\xf3digo de construcci\xf3n para diferentes representaciones del objeto."]}),(0,s.jsxs)(r.td,{children:[(0,s.jsx)(r.strong,{children:"Sobrecarga inicial"}),": El dise\xf1o y configuraci\xf3n del patr\xf3n pueden ser excesivos para objetos simples o con pocas configuraciones."]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{children:[(0,s.jsx)(r.strong,{children:"Flexibilidad"}),": Permite variar la representaci\xf3n final de un objeto configurando diferentes pasos de construcci\xf3n."]}),(0,s.jsxs)(r.td,{children:[(0,s.jsx)(r.strong,{children:"M\xe1s c\xf3digo"}),": Comparado con otros enfoques (como constructores telesc\xf3picos), puede requerir m\xe1s l\xedneas de c\xf3digo para configurarlo."]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{children:[(0,s.jsx)(r.strong,{children:"Desacopla la creaci\xf3n y la representaci\xf3n"}),": Separa la l\xf3gica de construcci\xf3n de la l\xf3gica del objeto, mejorando la claridad del dise\xf1o."]}),(0,s.jsxs)(r.td,{children:[(0,s.jsx)(r.strong,{children:"Complejidad innecesaria"}),": Puede ser excesivo para objetos que no son lo suficientemente complejos como para justificar su uso."]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{children:[(0,s.jsx)(r.strong,{children:"Promueve la inmutabilidad"}),": Garantiza que el objeto est\xe9 completamente construido antes de ser utilizado, evitando estados inconsistentes."]}),(0,s.jsxs)(r.td,{children:[(0,s.jsx)(r.strong,{children:"Dependencia del Director (opcional)"}),": Si se usa un Director, este puede agregar una capa adicional que no siempre es necesaria."]})]})]})]}),"\n",(0,s.jsx)(r.h3,{id:"analog\xeda",children:"Analog\xeda"}),"\n",(0,s.jsx)(r.p,{children:"Imagina que est\xe1s en un restaurante de comida r\xe1pida donde puedes armar tu propia hamburguesa personalizada."}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"Men\xfa Base:"})," El restaurante tiene una lista de ingredientes (pan, carne, queso, lechuga, tomate, etc.)."]}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"Construcci\xf3n Paso a Paso:"})," T\xfa decides qu\xe9 ingredientes incluir, en qu\xe9 orden, y c\xf3mo debe ser la hamburguesa (doble carne, sin queso, etc.)."]}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"Cocinero (Builder)"})," Es quien sigue tus instrucciones para armar la hamburguesa exactamente como t\xfa la quieres."]}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"Cajero (Director):"})," Coordina el proceso y asegura que el cocinero siga las instrucciones para construir la hamburguesa de acuerdo con tu pedido."]}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"Hamburguesa Final:"})," Es el producto terminado, que puede ser diferente para cada cliente dependiendo de sus preferencias."]}),"\n",(0,s.jsx)(r.h3,{id:"c\xf3digo-de-implementaci\xf3n",children:"C\xf3digo de Implementaci\xf3n"}),"\n",(0,s.jsx)(r.p,{children:"Este ejemplo del patr\xf3n Builder ilustra c\xf3mo se puede reutilizar el mismo c\xf3digo de construcci\xf3n de objetos a la hora de construir distintos tipos de productos, como autom\xf3viles, y crear los correspondientes manuales para esos autom\xf3viles."}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.img,{src:"https://refactoring.guru/images/patterns/diagrams/builder/example-es.png?id=c326e99e007a469951240da70b4294d7",alt:"Imagen de ejemplo"})}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.em,{children:"Ejemplo de una construcci\xf3n paso a paso de autom\xf3viles y de los manuales de usuario para esos modelos de autom\xf3vil."})}),"\n",(0,s.jsx)(r.p,{children:"Un autom\xf3vil es un objeto complejo que puede construirse de mil maneras diferentes. En lugar de saturar la clase Autom\xf3vil con un constructor enorme, extrajimos el c\xf3digo de ensamblaje del autom\xf3vil y lo pusimos en una clase constructora de autom\xf3viles independiente. Esta clase tiene un grupo de m\xe9todos para configurar las distintas partes de un autom\xf3vil."}),"\n",(0,s.jsx)(r.p,{children:"Si el c\xf3digo cliente necesita ensamblar un modelo de autom\xf3vil con ajustes especiales, puede trabajar directamente con el objeto constructor. Por otro lado, el cliente puede delegar el ensamblaje a la clase directora, que sabe c\xf3mo utilizar un objeto constructor para construir varios de los modelos m\xe1s populares de autom\xf3viles."}),"\n",(0,s.jsx)(r.p,{children:"Puede que te sorprenda, pero todo autom\xf3vil necesita un manual (en serio, \xbfqui\xe9n se los lee?). El manual explica cada caracter\xedstica del autom\xf3vil, de modo que los detalles del manual var\xedan de un modelo a otro. Por eso tiene l\xf3gica reutilizar un proceso de construcci\xf3n existente para autom\xf3viles reales y sus respectivos manuales. Por supuesto, elaborar un manual no es lo mismo que fabricar un autom\xf3vil, por lo que debemos incluir otra clase constructora especializada en elaborar manuales. Esta clase implementa los mismos m\xe9todos de construcci\xf3n que su hermana constructora de autom\xf3viles , pero, en lugar de fabricar piezas del autom\xf3vil, las describe. Al pasar estos constructores al mismo objeto director, podemos construir tanto un autom\xf3vil como un manual."}),"\n",(0,s.jsx)(r.p,{children:"La \xfaltima parte consiste en buscar el objeto resultante. Un autom\xf3vil de metal y un manual de papel, aunque est\xe9n relacionados, son objetos muy diferentes. No podemos colocar un m\xe9todo para buscar resultados en la clase directora sin acoplarla a clases de productos concretos. Por lo tanto, obtenemos el resultado de la construcci\xf3n del constructor que realiz\xf3 el trabajo."}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-bash",children:"   // El uso del patr\xf3n Builder s\xf3lo tiene sentido cuando tus\r\n// productos son bastante complejos y requieren una\r\n// configuraci\xf3n extensiva. Los dos siguientes productos est\xe1n\r\n// relacionados, aunque no tienen una interfaz com\xfan.\r\nclass Car is\r\n    // Un coche puede tener un GPS, una computadora de\r\n    // navegaci\xf3n y cierto n\xfamero de asientos. Los distintos\r\n    // modelos de coches (deportivo, SUV, descapotable) pueden\r\n    // tener distintas caracter\xedsticas instaladas o habilitadas.\r\n\r\nclass Manual is\r\n    // Cada coche debe contar con un manual de usuario que se\r\n    // corresponda con la configuraci\xf3n del coche y explique\r\n    // todas sus caracter\xedsticas.\r\n\r\n\r\n// La interfaz constructora especifica m\xe9todos para crear las\r\n// distintas partes de los objetos del producto.\r\ninterface Builder is\r\n    method reset()\r\n    method setSeats(...)\r\n    method setEngine(...)\r\n    method setTripComputer(...)\r\n    method setGPS(...)\r\n\r\n// Las clases constructoras concretas siguen la interfaz\r\n// constructora y proporcionan implementaciones espec\xedficas de\r\n// los pasos de construcci\xf3n. Tu programa puede tener multitud\r\n// de variaciones de objetos constructores, cada una de ellas\r\n// implementada de forma diferente.\r\nclass CarBuilder implements Builder is\r\n    private field car:Car\r\n\r\n    // Una nueva instancia de la clase constructora debe\r\n    // contener un objeto de producto en blanco que utiliza en\r\n    // el montaje posterior.\r\n    constructor CarBuilder() is\r\n        this.reset()\r\n\r\n    // El m\xe9todo reset despeja el objeto en construcci\xf3n.\r\n    method reset() is\r\n        this.car = new Car()\r\n\r\n    // Todos los pasos de producci\xf3n funcionan con la misma\r\n    // instancia de producto.\r\n    method setSeats(...) is\r\n        // Establece la cantidad de asientos del coche.\r\n\r\n    method setEngine(...) is\r\n        // Instala un motor espec\xedfico.\r\n\r\n    method setTripComputer(...) is\r\n        // Instala una computadora de navegaci\xf3n.\r\n\r\n    method setGPS(...) is\r\n        // Instala un GPS.\r\n\r\n    // Los constructores concretos deben proporcionar sus\r\n    // propios m\xe9todos para obtener resultados. Esto se debe a\r\n    // que varios tipos de objetos constructores pueden crear\r\n    // productos completamente diferentes de los cuales no todos\r\n    // siguen la misma interfaz. Por lo tanto, dichos m\xe9todos no\r\n    // pueden declararse en la interfaz constructora (al menos\r\n    // no en un lenguaje de programaci\xf3n de tipado est\xe1tico).\r\n    //\r\n    // Normalmente, tras devolver el resultado final al cliente,\r\n    // una instancia constructora debe estar lista para empezar\r\n    // a generar otro producto. Ese es el motivo por el que es\r\n    // pr\xe1ctica com\xfan invocar el m\xe9todo reset al final del\r\n    // cuerpo del m\xe9todo `getProduct`. Sin embargo, este\r\n    // comportamiento no es obligatorio y puedes hacer que tu\r\n    // objeto constructor espere una llamada reset expl\xedcita del\r\n    // c\xf3digo cliente antes de desechar el resultado anterior.\r\n    method getProduct():Car is\r\n        product = this.car\r\n        this.reset()\r\n        return product\r\n\r\n// Al contrario que otros patrones creacionales, Builder te\r\n// permite construir productos que no siguen una interfaz com\xfan.\r\nclass CarManualBuilder implements Builder is\r\n    private field manual:Manual\r\n\r\n    constructor CarManualBuilder() is\r\n        this.reset()\r\n\r\n    method reset() is\r\n        this.manual = new Manual()\r\n\r\n    method setSeats(...) is\r\n        // Documenta las caracter\xedsticas del asiento del coche.\r\n\r\n    method setEngine(...) is\r\n        // A\xf1ade instrucciones del motor.\r\n\r\n    method setTripComputer(...) is\r\n        // A\xf1ade instrucciones de la computadora de navegaci\xf3n.\r\n\r\n    method setGPS(...) is\r\n        // A\xf1ade instrucciones del GPS.\r\n\r\n    method getProduct():Manual is\r\n        // Devuelve el manual y rearma el constructor.\r\n\r\n\r\n// El director s\xf3lo es responsable de ejecutar los pasos de\r\n// construcci\xf3n en una secuencia particular. Resulta \xfatil cuando\r\n// se crean productos de acuerdo con un orden o configuraci\xf3n\r\n// espec\xedficos. En sentido estricto, la clase directora es\r\n// opcional, ya que el cliente puede controlar directamente los\r\n// objetos constructores.\r\nclass Director is\r\n    // El director funciona con cualquier instancia de\r\n    // constructor que le pase el c\xf3digo cliente. De esta forma,\r\n    // el c\xf3digo cliente puede alterar el tipo final del\r\n    // producto reci\xe9n montado. El director puede construir\r\n    // multitud de variaciones de producto utilizando los mismos\r\n    // pasos de construcci\xf3n.\r\n    method constructSportsCar(builder: Builder) is\r\n        builder.reset()\r\n        builder.setSeats(2)\r\n        builder.setEngine(new SportEngine())\r\n        builder.setTripComputer(true)\r\n        builder.setGPS(true)\r\n\r\n    method constructSUV(builder: Builder) is\r\n        // ...\r\n\r\n\r\n// El c\xf3digo cliente crea un objeto constructor, lo pasa al\r\n// director y despu\xe9s inicia el proceso de construcci\xf3n. El\r\n// resultado final se extrae del objeto constructor.\r\nclass Application is\r\n\r\n    method makeCar() is\r\n        director = new Director()\r\n\r\n        CarBuilder builder = new CarBuilder()\r\n        director.constructSportsCar(builder)\r\n        Car car = builder.getProduct()\r\n\r\n        CarManualBuilder builder = new CarManualBuilder()\r\n        director.constructSportsCar(builder)\r\n\r\n        // El producto final a menudo se extrae de un objeto\r\n        // constructor, ya que el director no conoce y no\r\n        // depende de constructores y productos concretos.\r\n        Manual manual = builder.getProduct()\n"})})]})}function u(e={}){const{wrapper:r}={...(0,a.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},8453:(e,r,n)=>{n.d(r,{R:()=>t,x:()=>i});var o=n(6540);const s={},a=o.createContext(s);function t(e){const r=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),o.createElement(a.Provider,{value:r},e.children)}}}]);