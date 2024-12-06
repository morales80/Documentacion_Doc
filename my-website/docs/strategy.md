
**También llamado:** Estrategia

### proposito
_El patrón de diseño *Strategy* es un enfoque de comportamiento que te permite crear un conjunto de algoritmos relacionados, encapsular cada uno en su propia clase y permitir que los objetos que los usan puedan cambiar dinámicamente entre ellos según sea necesario. Esto facilita la flexibilidad y el mantenimiento del código al separar la lógica de los algoritmos de la lógica del cliente._

![strategy](https://th.bing.com/th/id/R.06300a3d6e4e5aa943a8f69b052fa6ff?rik=AECDwYm%2f3bF2eA&pid=ImgRaw&r=0)

## Analogía en el mundo real

_Imagina que estás eligiendo cómo cocinar un huevo. Puedes freírlo, hervirlo o hacerlo revuelto. Cada una de estas opciones representa una estrategia de preparación. Según tus preferencias de sabor, el tiempo que tienes disponible o los utensilios a tu alcance, puedes seleccionar la estrategia que mejor se adapte a la situación._

![analogía](https://files.oaiusercontent.com/file-F8obTgMTqRET4ecapPTsdV?se=2024-12-06T00%3A15%3A52Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3Ded2e66b0-c58f-4a3c-96b6-e8effe46b975.webp&sig=5Vjb9upKDnW%2BPupn0DEOgL3Z%2BI9W7f/zLMssK%2BhBB9U%3D)

## Estructura
![estructura](https://refactoring.guru/images/patterns/diagrams/strategy/structure-indexed.png?id=ff55c5a6273cf82a5667f3cab5b605c7)

1. La clase **Contexto** mantiene una referencia a una de las estrategias concretas y se comunica con este objeto únicamente a través de la interfaz estrategia.

2.  La interfaz **Estrategia** es común a todas las estrategias concretas. Declara un método que la clase contexto utiliza para ejecutar una estrategia.

3.  Las **Estrategias Concretas** implementan distintas variaciones de un algoritmo que la clase contexto utiliza.

4.  La clase contexto invoca el método de ejecución en el objeto de estrategia vinculado cada vez que necesita ejecutar el algoritmo. La clase contexto no sabe con qué tipo de estrategia funciona o cómo se ejecuta el algoritmo.

5.  El **Cliente** crea un objeto de estrategia específico y lo pasa a la clase contexto. La clase contexto expone un modificador set que permite a los clientes sustituir la estrategia asociada al contexto durante el tiempo de ejecución.

## Pseudocódigo
_En este ejemplo, el contexto utiliza varias estrategias para ejecutar diversas operaciones aritméticas._