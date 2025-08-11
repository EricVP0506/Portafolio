# Portafolio CV Profesional - Eric Vázquez Palacios

Este es un portafolio CV profesional para Eric Vázquez Palacios, estudiante de TI de 20 años en la Universidad Simón Bolívar, desarrollado con React y TailwindCSS que presenta información personal, experiencia académica, proyectos y habilidades técnicas.

## Características Principales

- **Diseño Responsivo**: Adaptable a todos los dispositivos
- **Navegación Suave**: Scroll suave entre secciones
- **Proyecto CRM Destacado**: Enlace directo al sistema CRM en http://localhost:3000/
- **Formulario de Contacto**: Sistema de contacto funcional
- **Secciones Incluidas**:
  - Hero/Inicio
  - Sobre Mí
  - Experiencia Profesional
  - Proyectos (con CRM destacado)
  - Habilidades Técnicas
  - Contacto

## Estructura del Proyecto

```
/
├── index.html              # Página principal
├── app.js                  # Componente principal de la aplicación
├── components/
│   ├── Header.js           # Navegación principal
│   ├── Hero.js             # Sección de presentación
│   ├── About.js            # Información personal
│   ├── Experience.js       # Experiencia profesional
│   ├── Projects.js         # Proyectos (incluye CRM)
│   ├── Skills.js           # Habilidades técnicas
│   └── Contact.js          # Formulario de contacto
└── trickle/
    ├── assets/             # Imágenes y recursos
    └── notes/              # Documentación
```

## Personalización

Para personalizar el portafolio:

1. **Información Personal**: Edita los componentes Hero.js y About.js
2. **Experiencia**: Modifica el array de experiencias en Experience.js
3. **Proyectos**: Actualiza los proyectos en Projects.js
4. **Habilidades**: Ajusta las habilidades y niveles en Skills.js
5. **Contacto**: Cambia la información de contacto en Contact.js

## Integración con CRM

El portafolio incluye una integración especial con un sistema CRM:
- Proyecto destacado en la sección de proyectos
- Enlace directo a http://localhost:3000/
- Botón de acceso prominente al final de la sección de proyectos

## Tecnologías Utilizadas

- React 18
- TailwindCSS
- Lucide Icons
- Responsive Design
- CSS Variables para temas