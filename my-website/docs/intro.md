---
sidebar_position: 1
---

# PATRONES DE DISEÑO
Los patrones de diseño (design patterns) son soluciones
habituales a problemas comunes en el diseño de
software. Cada patrón es como un plano que se
puede personalizar para resolver un problema de
diseño particular de tu código..

![Texto alternativo](https://binnariumedu.com/images/1.png "Título alternativo")


### Historia de los patrones
El concepto de los patrones fue descrito por Christopher Alexander en El lenguaje de patrones. El libro habla de un “lenguaje” para diseñar el entorno urbano. Las unidades de este lenguaje son los patrones. Pueden describir lo altas que tienen que ser las ventanas, cuántos niveles debe tener un edificio, cuan grandes deben ser las zonas verdes de un barrio, etcétera.

La idea fue recogida por cuatro autores: Erich Gamma, John Vlissides, Ralph Johnson y Richard Helm. En 1995, publicaron Patrones de diseño, en el que aplicaron el concepto de los patrones de diseño a la programación. El libro presentaba 23 patrones que resolvían varios problemas del diseño orientado a objetos y se convirtió en un éxito de ventas con rapidez. Al tener un título tan largo en inglés, la gente empezó a llamarlo “el libro de la ‘gang of four’ (banda de los cuatro)”, lo que pronto se abrevió a “el libro GoF”.

Desde entonces se han descubierto decenas de nuevos patrones orientados a objetos. La “metodología del patrón” se hizo muy popular en otros campos de la programación, por lo que hoy en día existen muchos otros patrones no relacionados con el diseño orientado a objetos

### Ventajas

Los patrones son un juego de herramientas que
brindan soluciones a problemas habituales
en el diseño de software. Definen un
lenguaje común que ayuda a tu
equipo a comunicarse
con más eficiencia.

Pues ni más ni menos son formas “estandarizadas” de resolver problemas comunes de diseño en el desarrollo de software.

Las ventajas del uso de patrones son evidentes:

  * Conforman un amplio catálogo de problemas y soluciones
  * Estandarizan la resolución de determinados problemas
  * Condensan y simplifican el aprendizaje de las buenas prácticas
  * Proporcionan un vocabulario común entre desarrolladores
  * Evitan “reinventar la rueda”


### ¿Para que sirven?

Cuando comenzamos a desarrollar software, es normal que cada persona emplee su propia lógica y experiencia para escribir código. Esto puede dar lugar a sistemas complejos que son difíciles de entender, mantener o mejorar, especialmente si el desarrollador original no está disponible.

Para solucionar este desafío, surgen los patrones de diseño, que son modelos o soluciones probadas que sirven como guías para estructurar el código de manera clara y efectiva.

### ¿Qué aportan los patrones de diseño?

Un patrón de diseño facilita la creación de módulos que otros programadores pueden entender fácilmente y mejorar sin necesidad de reconstruir todo desde cero. Al adoptar estos modelos, los equipos de desarrollo pueden:

1. Estandarizar el lenguaje entre programadores: Ofrecen un vocabulario común para describir problemas y soluciones, mejorando la comunicación en los equipos.

2. Evitar reinventar la rueda: Ahorran tiempo al usar soluciones ya conocidas y probadas para problemas recurrentes, lo que reduce errores y acelera el desarrollo.

3. Promover la reusabilidad del código: Fomentan la creación de componentes modulares y reutilizables que pueden ser aplicados en diferentes proyectos o escenarios.

4. Facilitar el mantenimiento y escalabilidad: Al estructurar el código de forma organizada, los patrones permiten que sea más sencillo de modificar o ampliar según cambien las necesidades del proyecto.

### ¿Por qué son importantes?
Aprender y aplicar patrones de diseño es esencial para cualquier programador que aspire a escribir código de calidad. En un mundo ideal, los programadores deberían aprender primero la sintaxis de un lenguaje y luego familiarizarse con los patrones de diseño, ya que estos actúan como una hoja de ruta para resolver problemas de manera profesional y estándar.

Adoptar patrones de diseño no solo mejora tus habilidades técnicas, sino que también te convierte en un mejor colaborador dentro de un equipo, aumentando tus oportunidades de éxito en el desarrollo de software.

### Tipos de Patrones de Diseño
Los patrones de diseño son modelos probados que ayudan a resolver problemas comunes en el desarrollo de software. Estos se agrupan en tres categorías principales, dependiendo del tipo de problema que resuelven:

####  1. Patrones Creacionales

Estos patrones están diseñados para abordar problemas relacionados con la creación de instancias de objetos, permitiendo delegar esta responsabilidad de manera eficiente. Sus principales objetivos son encapsular el conocimiento de las clases y ocultar cómo se crean o instancian los objetos.

Ejemploss de patrones creacionales:

* **Singleton:** Garantiza que una clase tenga una única instancia en todo el programa.
* **Prototype:** Permite clonar instancias ya existentes, ideal para evitar la creación repetitiva de objetos similares.
* **Abstract Factory:** Proporciona una interfaz para crear familias de objetos relacionados sin especificar sus clases concretas.
* **Builder:** Facilita la construcción de objetos complejos mediante pasos definidos, mejorando la legibilidad y escalabilidad.
* **Factory Method:** Proporciona un método para crear objetos basándose en el tipo requerido.

#### 2. Patrones Estructurales

Estos patrones se centran en la composición y estructura de clases y objetos, definiendo cómo se relacionan entre sí para formar sistemas complejos.

Ejemplos de patrones estructurales:

* **Bridge (Puente):** Separa la abstracción de la implementación, facilitando su evolución independiente.
* **Decorator (Decorador):** Añade funcionalidades a un objeto de forma dinámica sin modificar su estructura base.
* **Facade (Fachada):** Ofrece una interfaz simple para interactuar con sistemas complejos.
* **Adapter:** Permite que dos clases incompatibles trabajen juntas al actuar como intermediario.
* **Composite:** Facilita el trabajo con objetos jerárquicos al tratarlos de manera uniforme.
* **Flyweight:** Optimiza el uso de recursos compartiendo objetos similares para reducir el consumo de memoria.
* **Proxy:** Introduce un intermediario que controla el acceso a un objeto, útil por razones de seguridad o complejidad.

#### 3. Patrones de Comportamiento
Resuelven problemas relacionados con la interacción y las responsabilidades de las clases y objetos, mejorando la comunicación entre ellos.

Ejemplos de patrones de comportamiento:

* **Observer (Observador):** Establece un sistema de notificaciones entre objetos, donde uno informa a varios de sus cambios.
* **Chain of Responsibility:** Organiza objetos en cadena para manejar solicitudes, donde cada objeto decide si actúa o pasa la solicitud.
* **Command:** Encapsula acciones como objetos, permitiendo su ejecución y almacenamiento para uso posterior.
* **Iterator:** Proporciona una manera uniforme de recorrer colecciones de objetos.
* **Mediator:** Centraliza la comunicación entre objetos, reduciendo sus dependencias mutuas.
* **Memento:** Permite guardar y restaurar estados anteriores de un objeto.
* **State:** Modifica el comportamiento de un objeto en función de su estado interno.
* **Strategy:** Define una familia de algoritmos, permitiendo elegir uno dinámicamente según las necesidades.
* **Template Method:** Proporciona una estructura para resolver problemas reutilizando pasos comunes.
* **Visitor:** Permite definir operaciones nuevas sin modificar las estructuras de datos subyacentes.

![](https://profile.es/wp-content/media/Patrones-de-diseno-de-software.png)

### Aplicaciones en Proyectos Reales

Los patrones de diseño se utilizan ampliamente en proyectos de software reales para resolver problemas comunes de manera eficiente. Algunos ejemplos incluyen:

- **Factory Method:** En sistemas de gestión de contenido (CMS), donde cada tipo de contenido (páginas, artículos, blogs) puede ser creado utilizando un método de fábrica, garantizando que se sigan las reglas y estructuras correctas.
- **Observer:** En aplicaciones de redes sociales, donde los usuarios se suscriben a eventos o actualizaciones de otros usuarios (por ejemplo, recibir notificaciones cuando alguien publica una actualización).
- **Decorator:** En sistemas de pago en línea, donde los métodos de pago pueden ser extendidos con funcionalidades adicionales (como descuentos, impuestos, opciones de envío) sin modificar las clases originales.

### Errores Comunes al Implementar Patrones de Diseño

A la hora de implementar patrones de diseño, es importante evitar algunos errores comunes:

- **Sobrecarga de patrones:** Usar patrones innecesarios cuando una solución más simple es suficiente. No es necesario aplicar un patrón solo por el hecho de usar uno.
- **Patrones mal aplicados:** Implementar un patrón sin comprender sus beneficios o sin tener en cuenta el contexto puede resultar en un diseño innecesariamente complejo.
- **No adaptar los patrones:** Aplicar un patrón de manera rígida sin considerar el contexto específico del proyecto puede generar un diseño ineficiente.

>En esencia, los patrones de diseño no son recetas mágicas, sino herramientas poderosas que permiten escribir código de calidad profesional. Al aplicar estas soluciones probadas, los desarrolladores pueden enfrentar desafíos comunes con confianza, mejorar la colaboración en equipo y crear software robusto y escalable. Aprender a utilizarlos es un paso clave para evolucionar como programador y optimizar el proceso de desarrollo.

