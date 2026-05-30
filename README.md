# Paseito - Sitio Web de Turismo en Colombia

## 📋 Descripción del Proyecto

**Paseito** es un prototipo funcional de un sitio web dedicado al turismo en Colombia. Fue diseñado aplicando principios de arquitectura de información, usabilidad, accesibilidad (WCAG 2.1) y diseño responsive.

## 🎯 Objetivos

- ✅ Analizar necesidades y comportamientos de usuarios
- ✅ Definir estructuras de contenido claras y funcionales
- ✅ Diseñar sistemas de navegación intuitivos
- ✅ Realizar el diseño de interacción
- ✅ Crear un prototipo funcional en HTML y CSS
- ✅ Implementar pruebas de usabilidad y accesibilidad

## 🌟 Carasterísticas Principales

### 1. **Página de Inicio (Hero Section)**
- Sección destacada con llamada a la acción
- Navegación principal fija y accesible
- Diseño responsivo desde mobile hasta desktop

### 2. **Sistema de Búsqueda y Filtros**
- Búsqueda de texto en tiempo real
- Filtrado por región (Caribe, Pacífico, Andina, Amazonía, Llanos)
- Filtrado por tipo de experiencia (Playa, Montaña, Cultura, Aventura)
- Filtros interactivos y accesibles

### 3. **Catálogo de Destinos**
- 8 destinos turísticos principales
- Tarjetas informativas con detalles
- Precios, calificaciones y descripciones
- Modal con información detallada

### 4. **Experiencias Únicas**
- 8 experiencias turísticas especiales
- Descripción de duración y precio
- Calificaciones y detalles completos

### 5. **Formulario de Reservas**
- Selección de destino
- Fechas de inicio y fin
- Número de personas
- Información de contacto
- Validación de formulario

### 6. **Formulario de Contacto**
- Consultas generales
- Información de contacto disponible
- Almacenamiento de mensajes

### 7. **Galería de Información**
- Horarios de atención
- Dirección y teléfono
- Enlaces de redes sociales

## 📱 Diseño Responsive

- **Desktop**: 1200px y superior
- **Tablet**: 768px - 1199px
- **Mobile**: menos de 768px
- Menú hamburguesa en dispositivos móviles
- Optimización de texto y espaciado por dispositivo

## ♿ Accesibilidad (WCAG 2.1)

- Etiquetas `aria-label` y `aria-labelledby` en elementos interactivos
- Roles semánticos ARIA (`region`, `navigation`, `article`, `banner`, `contentinfo`)
- Textos alternativos descriptivos
- Contraste de colores accesible (AA)
- Navegación por teclado completa
- Focus visible para todos los elementos interactivos
- Estructura semántica HTML5 correcta
- Fieldsets y legends para formularios

## 🎨 Diseño Visual

### Paleta de Colores
- **Primario**: #FF6B6B (Rojo)
- **Primario Oscuro**: #E63946
- **Secundario**: #4ECDC4 (Teal)
- **Acento**: #FFE66D (Amarillo)
- **Texto Oscuro**: #2C3E50
- **Texto Claro**: #7F8C8D

### Tipografía
- Fuente principal: Segoe UI, Tahoma, Geneva, Verdana, sans-serif
- Legible en todos los tamaños
- Estructura jerárquica clara

## 🔧 Tecnologías Utilizadas

- **HTML5**: Estructura semántica
- **CSS3**: Estilos responsivos y animaciones
- **JavaScript**: Interactividad y lógica
- **LocalStorage**: Almacenamiento de datos del cliente

## 📂 Estructura de Archivos

```
paseito-turismo/
├── index.html          # Página principal (HTML semántico)
├── styles.css          # Estilos CSS responsivos
├── script.js           # Lógica JavaScript
└── README.md          # Este archivo
```

## 🚀 Cómo Usar

1. **Descargar los archivos**
2. **Abrir `index.html` en un navegador web**
3. **Explorar destinos y experiencias**
4. **Realizar búsquedas y filtrados**
5. **Completar formularios de reserva o contacto**

## 💾 Almacenamiento de Datos

Los datos se almacenan en el navegador usando `localStorage`:

- **Reservations**: Datos de reservas realizadas
- **Contacts**: Mensajes de contacto recibidos
- **User Preferences**: Preferencias del usuario

## 🧪 Pruebas de Usabilidad

### Criterios Evaluados

1. **Navegación Intuitiva**
   - ✅ Menú claro y accesible
   - ✅ Breadcrumbs conceptuales
   - ✅ Enlaces descriptivos

2. **Búsqueda Efectiva**
   - ✅ Búsqueda por texto
   - ✅ Múltiples filtros
   - ✅ Resultados claros

3. **Formularios Usables**
   - ✅ Campos bien etiquetados
   - ✅ Validación de datos
   - ✅ Mensajes de error claros

4. **Accesibilidad**
   - ✅ Navegación por teclado
   - ✅ Lectores de pantalla
   - ✅ Contraste suficiente
   - ✅ Tamaño de texto escalable

5. **Responsividad**
   - ✅ Mobile-first design
   - ✅ Breakpoints lógicos
   - ✅ Funciones adaptadas

## 📍 Destinos Incluidos

1. **Cartagena de Indias** - Patrimonio histórico (Caribe)
2. **Santa Marta** - Puerta a la Ciudad Perdida (Caribe)
3. **Bogotá** - Capital cultural (Andina)
4. **Medellín** - Ciudad de la eterna primavera (Andina)
5. **Cali** - Capital mundial de la salsa (Pacífico)
6. **Leticia** - Puerta a la Amazonía (Amazonía)
7. **Los Llanos** - Experiencia llanera (Llanos)
8. **Providencia** - Isla paradisíaca (Caribe)

## 🎪 Experiencias Incluidas

1. Trekking a la Ciudad Perdida
2. Buceo en Arrecifes de Coral
3. Tour Gastronómico
4. Safari Amazónico
5. Clase de Salsa en Cali
6. Tour del Eje Cafetero
7. Paracaidismo en Medellín
8. Observación de Ballenas en Pacífico

## 🔐 Seguridad

- Validación de formularios en cliente
- Validación de emails
- Validación de fechas
- Sanitización básica de datos

## 🌐 Compatibilidad

- ✅ Chrome (últimas versiones)
- ✅ Firefox (últimas versiones)
- ✅ Safari (últimas versiones)
- ✅ Edge (últimas versiones)
- ✅ Mobile browsers

## ⚡ Optimizaciones

- CSS minificado en producción
- JavaScript optimizado
- Imágenes SVG inline para iconos
- LocalStorage para cache de datos
- Scroll suave y animaciones CSS

## 🎓 Mejoras Futuras

- Integración con backend real
- Sistema de pago integrado
- Autenticación de usuarios
- Reseñas y valoraciones
- Galería de fotos mejorada
- Mapa interactivo
- Chat en vivo
- Multi-idioma
- PWA (Progressive Web App)

## 👨‍💼 Autor

**Proyecto realizado por**: Taco-CRZ
**Fecha**: Año 2026

## 📄 Licencia

Este proyecto es de código abierto y está disponible para uso educativo y comercial.

## 📞 Contacto

- 📧 Email: info@paseito.com
- 📱 Teléfono: +57 (1) 2345-6789
- 📍 Ubicación: Bogotá, Colombia

---

**¡Gracias por usar Paseito!** 🎉✈️🇨🇴