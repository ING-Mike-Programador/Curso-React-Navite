# Curso de React Native 🚀

Portafolio de prácticas y proyectos desarrollados durante mi proceso de
aprendizaje de **React Native**, **Expo**, **React** y **TypeScript**. Cada
carpeta representa una etapa o ejercicio independiente en la
construcción de conocimientos para el desarrollo de interfaces móviles android.

---

## 🧰 Tecnologías utilizadas

- **React**: biblioteca para construir interfaces mediante componentes.
- **React Native**: desarrollo de interfaces nativas para Android e iOS usando
  React.
- **Expo**: plataforma y herramientas para crear, ejecutar y probar
  aplicaciones React Native.
- **TypeScript**: tipado estático para mejorar la seguridad y el mantenimiento
  del código.

- **Axios**: cliente HTTP utilizado para consumir una API REST.
- **Expo Router**: navegación basada en archivos para la aplicación de
  calculadora.

---

## 📁 Proyectos incluidos

### 1. [01.-Bases](./01.-Bases) — Fundamentos de React y TypeScript

Proyecto web creado con **React**, **TypeScript** y **Vite**. Reúne ejercicios
de fundamentos del lenguaje y de React:

- Tipos básicos, funciones y literales de objeto en TypeScript.
- Componentes funcionales y manejo de estado con hooks.
- Un contador reutilizable.
- Formularios con `react-hook-form`.
- Context API para gestionar autenticación.
- Consumo de usuarios desde una API REST mediante `axios`.
- Paginación y visualización de usuarios.
- Estilos con **Tailwind CSS**.

### 2. [02.-Testing-app](./02.-Testing-app) — Pantalla inicial de React Native

Aplicación introductoria creada con **Expo** y **React Native**. Muestra una
pantalla mínima con un mensaje de bienvenida y sirve como primer contacto con
los componentes nativos, los estilos mediante `StyleSheet` y la barra de
estado.

### 3. [03.-Counter-app](./03.-Counter-app) — Contador interactivo

Aplicación móvil desarrollada con **Expo**, **React Native** y **TypeScript**.
Practica el manejo de estado con `useState` y la creación de componentes
reutilizables:

- Incremento y decremento del contador.
- Incremento de diez unidades mediante pulsación prolongada.
- Reinicio del contador mediante pulsación prolongada.
- Botón flotante reutilizable (`FAB`) con estilos y posiciones distintas.

### 4. [04.- calculator-app](./04.-%20calculator-app) — Calculadora con Expo Router

Aplicación de calculadora para móvil creada con **Expo**, **React Native**,
**TypeScript** y **Expo Router**. La lógica se concentra en el hook
`useCalculator`, mientras que la interfaz utiliza botones y componentes
temáticos reutilizables.

Funcionalidades principales:

- Suma, resta, multiplicación y división.
- Uso de números decimales y cambio de signo.
- Borrado del último dígito y limpieza completa.
- Visualización de la fórmula y del resultado parcial.
- Diseño adaptable para Android, iOS y web.
- Configuración de rutas tipadas y React Compiler mediante Expo.

---

## 🗂️ Estructura general

```text
Curso React Navite/
├── 01.-Bases/             # Fundamentos web con React + TypeScript + Vite
├── 02.-Testing-app/       # Pantalla inicial con Expo
├── 03.-Counter-app/       # Contador interactivo
├── 04.- calculator-app/   # Calculadora con Expo Router
├── package.json           # Dependencia global del repositorio
└── README.md
```

> Cada proyecto contiene su propio `package.json` y debe instalar sus
> dependencias desde su respectiva carpeta.
