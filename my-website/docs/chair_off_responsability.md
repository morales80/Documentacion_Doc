# chair_off_responsability

El patrón **Chain of Responsibility** es una solución de diseño que aborda la distribución dinámica de responsabilidades en sistemas complejos. Este enfoque permite procesar solicitudes mediante una cadena de manejadores, donde cada uno evalúa si puede resolver el problema o pasarlo al siguiente elemento en la secuencia. Este modelo fomenta el desacoplamiento entre los emisores y receptores de solicitudes, mejorando la flexibilidad y modularidad del código. En esta introducción exploraremos cómo funciona este patrón, su utilidad en la programación y ejemplos prácticos para entender su implementación y ventajas.

## ¿Cómo Funciona?

**Cuando se recibe una solicitud, cada manejador:**
* Evalúa si tiene la capacidad para procesarla.
* Si no puede procesarla, la pasa al siguiente manejador en la cadena.
* El proceso continúa hasta que un manejador la resuelve o se agotan los manejadores disponibles.

**Este diseño es especialmente útil en escenarios donde:**
Las responsabilidades están distribuidas jerárquicamente.
El manejo de solicitudes debe adaptarse dinámicamente.
Se busca desacoplar emisores y receptores para mejorar la modularidad.

### ¿Cómo identificar cuándo utilizar este patrón?
La necesidad de aplicar este patrón se puede identificar en procesos que se basan en pasos secuenciales, donde se deben agregar verificaciones o condiciones. A medida que la funcionalidad crece, el código tiende a saturarse de declaraciones if, lo que puede dificultar su mantenimiento y comprensión. El patrón Chain of Responsibility ayuda a resolver este problema al separar las responsabilidades de cada paso del proceso en clases independientes.

Por ejemplo, en el caso del scoring de un pedido, se pueden identificar varios pasos que se deben validar:

¿El cliente del pedido tiene pedidos previos?
¿El cliente realiza el pago con su método de pago habitual?
¿El pedido supera una cierta cantidad?

La aplicación del patrón permite que cada paso del proceso se separe en distintas clases, donde cada clase tiene una única responsabilidad. De esta manera, el pedido o solicitud puede ser procesado a través de una cadena de manejadores, que se encargan de evaluar y aplicar cada paso hasta obtener un resultado final. Esto no solo mejora la organización del código, sino que también facilita su expansión y mantenimiento a medida que se agregan nuevas verificaciones o condiciones.

### ¿Cómo implementar el patrón?

Al igual que muchos otros patrones de diseño de comportamiento, la implementación del patrón Chain of Responsibility se basa en transformar comportamientos específicos en objetos independientes denominados Handlers. Cada verificación dentro del proceso debe extraerse a su propia clase, la cual contará con un único método encargado de realizar la acción correspondiente. La solicitud, junto con sus datos y contexto, se pasa como argumento a este método, lo que permite iniciar la cadena de responsabilidad.

Existen múltiples ejemplos de implementaciones de este patrón, y se puede adaptar a una amplia variedad de contextos. Al final del artículo, se incluirá un ejemplo concreto de implementación del patrón en ES6, para ilustrar cómo aplicar este enfoque de manera práctica.

## Ejemplo Práctico de Código

```// Clase abstracta base
abstract class Manejador {
    protected Manejador siguienteManejador;

    public void setSiguiente(Manejador manejador) {
        this.siguienteManejador = manejador;
    }

    public abstract void manejar(String solicitud);
}

// Manejadores concretos
class ManejadorA extends Manejador {
    public void manejar(String solicitud) {
        if ("A".equals(solicitud)) {
            System.out.println("ManejadorA procesó la solicitud.");
        } else if (siguienteManejador != null) {
            siguienteManejador.manejar(solicitud);
        }
    }
}

class ManejadorB extends Manejador {
    public void manejar(String solicitud) {
        if ("B".equals(solicitud)) {
            System.out.println("ManejadorB procesó la solicitud.");
        } else if (siguienteManejador != null) {
            siguienteManejador.manejar(solicitud);
        }
    }
}

class Cliente {
    public static void main(String[] args) {
        Manejador manejadorA = new ManejadorA();
        Manejador manejadorB = new ManejadorB();

        manejadorA.setSiguiente(manejadorB);

        manejadorA.manejar("A");
        manejadorA.manejar("B");
        manejadorA.manejar("C");
    }
}

