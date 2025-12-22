**What is Programming?**

Imagine that you are a chef and you want to make a cake.

You need:

1. INGREDIENTS (data): flour, eggs, sugar2. RECIPE (algorithm): ordered steps for mixing3. TOOLS (language): bowl, oven, mixer
The computer is like a VERY obedient but VERY dumb kitchen assistant:

- It does EXACTLY what you tell it- It assumes nothing- It cannot "guess" what you want

If you say "put the cake in the oven" but didn't tell it
to turn on the oven first... you'll get a raw cake!

Write instructions for making a ham and cheese sandwich,
so detailed that a robot that has never seen food could follow them.

Think about:

- Is the bread in a bag? Does it need to be opened?
- How many slices do you need?
- What goes first?
- How do you "put" something on something else?

**LESSON 1.2: Variables**

A variable is like a box with a label.

Imagine you have boxes in your room:
📦 "toys" → contains: ball, toy cars, action figures📦 "clothes" → contains: shirts, pants📦 "age" → contains: 25
The LABEL is the variable name.
The CONTENTS are the variable value.

In programming:

- You can create boxes (declare variables)
- You can put things inside (assign values)
- You can see what's inside (read variables)
- You can change the contents (reassign)

📦 Numbers (Numbers):
age = 25
price = 19.99
temperature = -5
📦 Text (Strings):
name = "Juan"
message = "Hello, how are you?"
empty = ""

📦 True/False (Booleans):
isRaining = true
amHungry = false
📦 Lists (Arrays):
fruits = ["apple", "banana", "orange"]
numbers = [1, 2, 3, 4, 5]

📦 Objects (Objects):
person = {
name: "Juan",
age: 25,
city: "Mexico"
}

**Making Decisions (Conditionals)**

Concept: In real life we make decisions all the time:

IF it is raining THEN I take an umbrella
IF I am hungry THEN I eat something
IF it is the weekend THEN I sleep more
In programming it is the same:

if (condition) {
// code that executes if the condition is true
}

**Loops**

Loops (Loops) - Repeating ActionsImagine you have to write:
"I must study programming" 100 times.

❌ Dumb way:
console.log("I must study programming"); // line 1
console.log("I must study programming"); // line 2
console.log("I must study programming"); // line 3
... (97 more lines)

✅ Smart way (with loop):
for (let i = 0; i < 100; i++) {
console.log("I must study programming");
}