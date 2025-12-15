# 🌤️ Proyecto: Weather Dashboard

> Aplicación web moderna para visualización y seguimiento del clima, desarrollada como ejercicio de desarrollo Front-End y diseño de interfaces de usuario.

## 🎯 Objetivo del proyecto

Este proyecto es una **demostración técnica (_proof of concept_)** para validar la capacidad de construir interfaces de usuario interactivas y dinámicas utilizando un _stack_ de desarrollo moderno.

El objetivo principal es:

> **Desarrollar una aplicación web con React.js, TypeScript y Tailwind CSS que proporcione una interfaz moderna y responsive para visualizar información meteorológica. El enfoque primordial fue dominar el desarrollo de componentes reutilizables, la gestión de estado y la implementación de gráficos interactivos para presentar datos de manera clara y atractiva.**

---

## ✨ Características Principales

| Habilidad Demostrada                     | Descripción de la Implementación                                                                                                                              |
| :--------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Desarrollo Front-End con TypeScript**  | Construcción de componentes tipados utilizando **React.js** y **TypeScript** para garantizar la robustez del código y una experiencia de desarrollo superior. |
| **Diseño Responsive con Tailwind CSS**   | Uso de utilidades de **Tailwind CSS** para crear una interfaz totalmente adaptable que se ve perfecta en desktop, tablet y móvil.                             |
| **Visualización de Datos Interactiva**   | Implementación de gráficos y visualizaciones usando **Recharts** para mostrar pronósticos horarios, diarios y métricas meteorológicas.                        |
| **Arquitectura de Componentes Modular**  | Desarrollo de componentes reutilizables como `CurrentWeather`, `HourlyForecast`, `DailyForecast` y `WeatherMetrics` para una mejor organización del código.   |
| **Gestión de Estado y Props**            | Implementación de comunicación eficiente entre componentes padre e hijo mediante props tipadas de TypeScript.                                                 |
| **Optimización de Performance**          | Uso de **Vite** como bundler para desarrollo rápido y optimizaciones de build automáticas.                                                                    |
| **Desarrollo con Herramientas Modernas** | Integración de **ESLint** y **TypeScript** para mantener la calidad del código y prevenir errores en tiempo de desarrollo.                                    |

---

## 🛠️ Tecnologías Utilizadas

- **React.js** - Biblioteca para construcción de interfaces de usuario
- **TypeScript** - Superset tipado de JavaScript para mayor robustez
- **Tailwind CSS** - Framework de CSS utility-first
- **Vite** - Build tool y servidor de desarrollo ultrarrápido
- **Recharts** - Biblioteca de gráficos React
- **ESLint** - Linter para mantener la calidad del código
- **Git & GitHub** - Control de versiones y colaboración

---

## 🚀 Instalación y Ejecución Local

### Prerrequisitos

- Node.js (versión 16+)
- Npm (versión 8+) o Yarn
- Un navegador web moderno (Chrome, Firefox, Edge, etc.)

### Pasos

1.  **Clona el repositorio:**
    ```bash
    git clone https://github.com/crissgnz-dev/weather-dashboard.git
    ```
2.  **Navega al directorio del proyecto:**
    ```bash
    cd weather-dashboard
    ```
3.  **Instala las dependencias:**
    ```bash
    npm install  # o yarn install
    ```
4.  **Inicia el servidor de desarrollo:**
    ```bash
    npm run dev
    ```
5.  **Abre tu navegador** y visita la dirección que se muestre en tu terminal (generalmente `http://localhost:5173`).

---

## 🏗️ Estructura del Proyecto

```
src/
├── components/           # Componentes React reutilizables
│   ├── Header.tsx       # Cabecera de la aplicación
│   ├── CurrentWeather.tsx  # Información del clima actual
│   ├── HourlyForecast.tsx  # Pronóstico por horas
│   ├── DailyForecast.tsx   # Pronóstico diario
│   └── WeatherMetrics.tsx  # Métricas adicionales
├── assets/              # Recursos estáticos
│   ├── Logo.tsx         # Componente del logo
│   ├── Menu.tsx         # Iconos de menú
│   └── Pin.tsx          # Iconos de ubicación
├── App.tsx             # Componente principal
├── main.tsx            # Punto de entrada de la aplicación
└── index.css           # Estilos globales con Tailwind
```

---

## 📱 Funcionalidades

- **Visualización del clima actual** con temperatura, humedad y condiciones
- **Pronóstico horario** con gráficos interactivos
- **Pronóstico diario** para los próximos días
- **Métricas meteorológicas** adicionales (presión, viento, etc.)
- **Interfaz responsive** que se adapta a cualquier dispositivo
- **Diseño moderno** con Tailwind CSS

---

## 🛟 Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Crea la build de producción
- `npm run preview` - Vista previa de la build de producción
- `npm run lint` - Ejecuta ESLint para verificar el código

---

## 🎨 Decisiones de Diseño

Este proyecto demuestra la capacidad de crear interfaces de usuario modernas y funcionales, priorizando:

- **Experiencia de Usuario (UX)** - Navegación intuitiva y información clara
- **Accesibilidad** - Uso de HTML semántico y buenas prácticas
- **Performance** - Carga rápida y interacciones fluidas
- **Mantenibilidad** - Código limpio y bien estructurado

---

> **Nota:** Este es un proyecto de demostración técnica desarrollado para showcase de habilidades en desarrollo Front-End moderno.
