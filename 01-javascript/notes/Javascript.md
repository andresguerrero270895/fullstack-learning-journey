**¿Qué es Programar?**

Imagina que eres un chef y quieres hacer un pastel.

Necesitas:

1. INGREDIENTES (datos): harina, huevos, azúcar
2. RECETA (algoritmo): pasos ordenados para mezclar
3. HERRAMIENTAS (lenguaje): bowl, horno, batidora

La computadora es como un ayudante de cocina MUY obediente pero MUY tonto:

- Hace EXACTAMENTE lo que le dices
- No asume nada
- No puede "adivinar" qué quieres

Si le dices "pon el pastel en el horno", pero no le dijiste que
encendiera el horno primero... ¡tendrás un pastel crudo!

Escribe instrucciones para hacer un sandwich de jamón y queso,
tan detalladas que un robot que nunca ha visto comida pueda seguirlas.

Piensa en:

- ¿El pan viene en una bolsa? ¿Hay que abrirla?
- ¿Cuántas rebanadas necesitas?
- ¿Qué va primero?
- ¿Cómo "pones" algo sobre otra cosa?

**LECCIÓN 1.2: Variables - Las Cajas con Etiquetas**

Una variable es como una caja con una etiqueta.

Imagina que tienes cajas en tu cuarto:
📦 "juguetes" → contiene: pelota, carros, muñecos
📦 "ropa" → contiene: camisas, pantalones
📦 "edad" → contiene: 25

La ETIQUETA es el nombre de la variable.
El CONTENIDO es el valor de la variable.

En programación:

- Puedes crear cajas (declarar variables)
- Puedes poner cosas dentro (asignar valores)
- Puedes ver qué hay dentro (leer variables)
- Puedes cambiar el contenido (reasignar)

📦 Números (Numbers):
edad = 25
precio = 19.99
temperatura = -5

📦 Texto (Strings):
nombre = "Juan"
mensaje = "Hola, ¿cómo estás?"
vacio = ""

📦 Verdadero/Falso (Booleans):
estaLloviendo = true (verdadero)
tengoHambre = false (falso)

📦 Listas (Arrays):
frutas = ["manzana", "banana", "naranja"]
numeros = [1, 2, 3, 4, 5]

📦 Objetos (Objects):
persona = {
nombre: "Juan",
edad: 25,
ciudad: "México"
}

**Tomando Decisiones (Condicionales)**
Concepto:
text
En la vida real tomamos decisiones todo el tiempo:

SI está lloviendo ENTONCES llevo paraguas
SI tengo hambre ENTONCES como algo
SI es fin de semana ENTONCES duermo más

En programación es igual:

if (condición) {
// código que se ejecuta si la condición es verdadera
}


**Bucles(Loops)**

Bucles (Loops) - Repetir Acciones
Imagina que tienes que escribir:
"Debo estudiar programación" 100 veces.

❌ Forma tonta:
console.log("Debo estudiar programación"); // línea 1
console.log("Debo estudiar programación"); // línea 2
console.log("Debo estudiar programación"); // línea 3
... (97 líneas más)

✅ Forma inteligente (con bucle):
for (let i = 0; i < 100; i++) {
  console.log("Debo estudiar programación");
}
