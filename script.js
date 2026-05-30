// ============================================
// BASE DE DATOS DE DESTINOS Y EXPERIENCIAS
// ============================================

const destinations = [
    {
        id: 1,
        name: "Cartagena de Indias",
        region: "Caribe",
        type: "Cultura",
        emoji: "🏰",
        price: "$450,000",
        rating: 4.8,
        description: "Centro histórico con arquitectura colonial. Murallas, calles empedradas y playas cercanas.",
        details: "Descubre la magia de Cartagena, declarada Patrimonio de la Humanidad. Disfruta de sus playas, gastronomía caribeña y vibrante vida nocturna.",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 200'%3E%3Crect fill='%23FFB4B4' width='300' height='200'/%3E%3Ctext x='50%' y='50%' font-size='80' text-anchor='middle' dominant-baseline='middle'%3E🏰%3C/text%3E%3C/svg%3E"
    },
    {
        id: 2,
        name: "Santa Marta",
        region: "Caribe",
        type: "Aventura",
        emoji: "⛰️",
        price: "$380,000",
        rating: 4.7,
        description: "Puerta a la Ciudad Perdida y playas vírgenes. Senderismo y naturaleza en la Sierra Nevada.",
        details: "Acceso a la famosa Ciudad Perdida con una caminata de 4 días. También ofrece hermosas playas y cultura tayrona.",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 200'%3E%3Crect fill='%23FFB4B4' width='300' height='200'/%3E%3Ctext x='50%' y='50%' font-size='80' text-anchor='middle' dominant-baseline='middle'%3E⛰️%3C/text%3E%3C/svg%3E"
    },
    {
        id: 3,
        name: "Bogotá",
        region: "Andina",
        type: "Cultura",
        emoji: "🏛️",
        price: "$320,000",
        rating: 4.6,
        description: "Capital cultural con museos de clase mundial, gastronomía gourmet y vida nocturna.",
        details: "Visita el Museo de Oro, explora La Candelaria, disfruta de la gastronomía colombiana en las mejores restaurantes.",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 200'%3E%3Crect fill='%23FFB4B4' width='300' height='200'/%3E%3Ctext x='50%' y='50%' font-size='80' text-anchor='middle' dominant-baseline='middle'%3E🏛️%3C/text%3E%3C/svg%3E"
    },
    {
        id: 4,
        name: "Medellín",
        region: "Andina",
        type: "Cultura",
        emoji: "🌺",
        price: "$340,000",
        rating: 4.7,
        description: "Ciudad de la eterna primavera. Comuna 13, pueblos pintorescos y transformación urbana.",
        details: "Descubre la transformación de Medellín, visita Comuna 13 con arte callejero, pueblos cercanos y disfrutables cafeterías.",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 200'%3E%3Crect fill='%23FFB4B4' width='300' height='200'/%3E%3Ctext x='50%' y='50%' font-size='80' text-anchor='middle' dominant-baseline='middle'%3E🌺%3C/text%3E%3C/svg%3E"
    },
    {
        id: 5,
        name: "Cali",
        region: "Pacífico",
        type: "Playa",
        emoji: "💃",
        price: "$300,000",
        rating: 4.5,
        description: "Capital mundial de la salsa. Música, baile, diversión y gastronomía caribeña.",
        details: "La mejor salsa de Colombia te espera. Disfruta de discotecas de clase mundial, restaurantes típicos y ambiente festivo.",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 200'%3E%3Crect fill='%23FFB4B4' width='300' height='200'/%3E%3Ctext x='50%' y='50%' font-size='80' text-anchor='middle' dominant-baseline='middle'%3E💃%3C/text%3E%3C/svg%3E"
    },
    {
        id: 6,
        name: "Leticia",
        region: "Amazonia",
        type: "Aventura",
        emoji: "🦜",
        price: "$520,000",
        rating: 4.9,
        description: "Puerta a la Amazonía colombiana. Biodiversidad única y comunidades indígenas.",
        details: "Sumérgete en la selva amazónica, conoce fauna y flora única, visita comunidades indígenas y disfruta de la naturaleza salvaje.",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 200'%3E%3Crect fill='%23FFB4B4' width='300' height='200'/%3E%3Ctext x='50%' y='50%' font-size='80' text-anchor='middle' dominant-baseline='middle'%3E🦜%3C/text%3E%3C/svg%3E"
    },
    {
        id: 7,
        name: "Los Llanos",
        region: "Llanos",
        type: "Aventura",
        emoji: "🐴",
        price: "$280,000",
        rating: 4.6,
        description: "Vastas llanuras, ganadería tradicional, ríos y fauna silvestre. Experiencia de hato colombiano.",
        details: "Vive la experiencia de jinete en los llanos, observa fauna como chigüires y anacondas, disfruta de la gastronomía llanera.",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 200'%3E%3Crect fill='%23FFB4B4' width='300' height='200'/%3E%3Ctext x='50%' y='50%' font-size='80' text-anchor='middle' dominant-baseline='middle'%3E🐴%3C/text%3E%3C/svg%3E"
    },
    {
        id: 8,
        name: "Providencia",
        region: "Caribe",
        type: "Playa",
        emoji: "🏝️",
        price: "$480,000",
        rating: 4.8,
        description: "Isla paradisíaca con playas de arena blanca, buceo y arrecifes de coral.",
        details: "Playas vírgenes, buceo en arrecifes de coral, cayo de Providencia y una experiencia tropical incomparable.",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 200'%3E%3Crect fill='%23FFB4B4' width='300' height='200'/%3E%3Ctext x='50%' y='50%' font-size='80' text-anchor='middle' dominant-baseline='middle'%3E🏝️%3C/text%3E%3C/svg%3E"
    }
];

const experiences = [
    {
        id: 1,
        name: "Trekking a la Ciudad Perdida",
        emoji: "🥾",
        price: "$850,000",
        duration: "4 días",
        rating: 4.9,
        description: "Caminata de 4 días a través de la jungla hasta la Ciudad Perdida.",
        details: "Una experiencia legendaria. Camina a través de la selva, cruza ríos, duerme en campamentos y descubre una de las ciudades arqueológicas más importantes de América."
    },
    {
        id: 2,
        name: "Buceo en Arrecifes de Coral",
        emoji: "🤿",
        price: "$450,000",
        duration: "1-2 días",
        rating: 4.8,
        description: "Buceo en los hermosos arrecifes de coral del Caribe colombiano.",
        details: "Explora la vida marina, ve peces tropicales, tortugas marinas y corales coloridos en las aguas claras del Caribe."
    },
    {
        id: 3,
        name: "Tour Gastronómico",
        emoji: "🍽️",
        price: "$350,000",
        duration: "3 días",
        rating: 4.7,
        description: "Recorrido culinario por las especialidades gastronómicas colombianas.",
        details: "Prueba las mejores comidas de Colombia: ajiaco, bandeja paisa, arepa con queso, tamales y postres tradicionales. Visita restaurantes boutique y mercados locales."
    },
    {
        id: 4,
        name: "Safari Amazónico",
        emoji: "🦁",
        price: "$620,000",
        duration: "5 días",
        rating: 4.9,
        description: "Expedición por la Amazonía para observar flora y fauna única.",
        details: "Camina por la selva, observa delfines rosados, jaguares, anacondas, harpy eagles y miles de especies de aves. Una experiencia de vida silvestre inmersiva."
    },
    {
        id: 5,
        name: "Clase de Salsa en Cali",
        emoji: "💃",
        price: "$180,000",
        duration: "2 días",
        rating: 4.6,
        description: "Aprende salsa directamente de bailarines profesionales en Cali.",
        details: "Clases en discotecas auténticas, baila con profesionales, aprende los movimientos básicos y avanzados de la salsa colombiana."
    },
    {
        id: 6,
        name: "Tour del Eje Cafetero",
        emoji: "☕",
        price: "$420,000",
        duration: "3 días",
        rating: 4.8,
        description: "Visita fincas de café, aprende el proceso y prueba variedades especiales.",
        details: "Recorre plantaciones de café, aprende sobre la cosecha y tostación, participa en actividades agrícolas y prueba café recién hecho."
    },
    {
        id: 7,
        name: "Paracaidismo en Medellín",
        emoji: "🪂",
        price: "$780,000",
        duration: "1 día",
        rating: 4.7,
        description: "Salto en paracaídas con vistas de la ciudad y los paisajes circundantes.",
        details: "Experimenta la adrenalina de caer a 4000 metros con vista a la ciudad de Medellín. Instructores experimentados y equipo de clase mundial."
    },
    {
        id: 8,
        name: "Observación de Ballenas en Pacífico",
        emoji: "🐋",
        price: "$580,000",
        duration: "2 días",
        rating: 4.9,
        description: "Avistamiento de ballenas jorobadas en su hábitat natural en el Pacífico.",
        details: "Durante la temporada de migración, observa ballenas jorobadas en el Océano Pacífico desde barcos especializados. Una experiencia mágica."
    }
];

// ============================================
// FUNCIONES DE INICIALIZACIÓN
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    renderDestinations(destinations);
    renderExperiences(experiences);
    setupEventListeners();
});

// ============================================
// FUNCIONES DE RENDER
// ============================================

function renderDestinations(items) {
    const grid = document.getElementById('destinationsGrid');
    grid.innerHTML = '';
    
    if (items.length === 0) {
        grid.innerHTML = '<p style="text-align:center; grid-column: 1/-1;">No se encontraron destinos.</p>';
        return;
    }
    
    items.forEach(destination => {
        const card = createDestinationCard(destination);
        grid.appendChild(card);
    });
}

function renderExperiences(items) {
    const grid = document.getElementById('experiencesGrid');
    grid.innerHTML = '';
    
    if (items.length === 0) {
        grid.innerHTML = '<p style="text-align:center; grid-column: 1/-1;">No se encontraron experiencias.</p>';
        return;
    }
    
    items.forEach(experience => {
        const card = createExperienceCard(experience);
        grid.appendChild(card);
    });
}

function createDestinationCard(destination) {
    const card = document.createElement('div');
    card.className = 'card';
    card.setAttribute('role', 'article');
    card.setAttribute('aria-label', `Destino: ${destination.name}`);
    
    card.innerHTML = `
        <div class="card-image">${destination.emoji}</div>
        <div class="card-content">
            <span class="card-region">${destination.region}</span>
            <h3 class="card-title">${destination.name}</h3>
            <p class="card-type">${destination.type}</p>
            <p class="card-description">${destination.description}</p>
            <div class="card-rating">⭐ ${destination.rating} / 5.0</div>
            <p class="card-price">${destination.price}</p>
            <button class="card-button" onclick="showDestinationDetails(${destination.id})" aria-label="Ver detalles de ${destination.name}">Ver Detalles</button>
        </div>
    `;
    
    return card;
}

function createExperienceCard(experience) {
    const card = document.createElement('div');
    card.className = 'card';
    card.setAttribute('role', 'article');
    card.setAttribute('aria-label', `Experiencia: ${experience.name}`);
    
    card.innerHTML = `
        <div class="card-image">${experience.emoji}</div>
        <div class="card-content">
            <span class="card-region">${experience.duration}</span>
            <h3 class="card-title">${experience.name}</h3>
            <p class="card-description">${experience.description}</p>
            <div class="card-rating">⭐ ${experience.rating} / 5.0</div>
            <p class="card-price">${experience.price}</p>
            <button class="card-button" onclick="showExperienceDetails(${experience.id})" aria-label="Ver detalles de ${experience.name}">Ver Detalles</button>
        </div>
    `;
    
    return card;
}

// ============================================
// MODAL DE DETALLES
// ============================================

function showDestinationDetails(id) {
    const destination = destinations.find(d => d.id === id);
    const modal = document.getElementById('detailsModal');
    const modalBody = document.getElementById('modalBody');
    
    modalBody.innerHTML = `
        <h2>${destination.emoji} ${destination.name}</h2>
        <p><strong>Región:</strong> ${destination.region}</p>
        <p><strong>Tipo:</strong> ${destination.type}</p>
        <p><strong>Precio:</strong> ${destination.price}</p>
        <p><strong>Calificación:</strong> ⭐ ${destination.rating} / 5.0</p>
        <p><strong>Descripción completa:</strong></p>
        <p>${destination.details}</p>
        <button class="btn btn-primary" onclick="reserveDestination('${destination.name}')">Reservar Ahora</button>
    `;
    
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
}

function showExperienceDetails(id) {
    const experience = experiences.find(e => e.id === id);
    const modal = document.getElementById('detailsModal');
    const modalBody = document.getElementById('modalBody');
    
    modalBody.innerHTML = `
        <h2>${experience.emoji} ${experience.name}</h2>
        <p><strong>Duración:</strong> ${experience.duration}</p>
        <p><strong>Precio:</strong> ${experience.price}</p>
        <p><strong>Calificación:</strong> ⭐ ${experience.rating} / 5.0</p>
        <p><strong>Descripción completa:</strong></p>
        <p>${experience.details}</p>
        <button class="btn btn-primary" onclick="reserveExperience('${experience.name}')">Reservar Ahora</button>
    `;
    
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
}

function closeModal() {
    const modal = document.getElementById('detailsModal');
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
}

// Cerrar modal al hacer clic fuera
document.addEventListener('click', function(e) {
    const modal = document.getElementById('detailsModal');
    if (e.target === modal) {
        closeModal();
    }
});

// Cerrar modal con Escape
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeModal();
    }
});

// ============================================
// BÚSQUEDA Y FILTROS
// ============================================

function performSearch() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    
    const filteredDestinations = destinations.filter(d => 
        d.name.toLowerCase().includes(query) ||
        d.region.toLowerCase().includes(query) ||
        d.type.toLowerCase().includes(query) ||
        d.description.toLowerCase().includes(query)
    );
    
    renderDestinations(filteredDestinations);
    
    if (filteredDestinations.length === 0) {
        showNotification('No se encontraron destinos que coincidan con tu búsqueda', 'error');
    } else {
        showNotification(`Se encontraron ${filteredDestinations.length} destino(s)`);
    }
}

function filterDestinations() {
    const selectedRegion = document.querySelector('input[name="region"]:checked').value;
    const selectedTypes = Array.from(document.querySelectorAll('input[name="tipo"]:checked')).map(el => el.value);
    
    let filtered = destinations;
    
    // Filtrar por región
    if (selectedRegion) {
        filtered = filtered.filter(d => d.region === selectedRegion);
    }
    
    // Filtrar por tipo
    if (selectedTypes.length > 0 && selectedTypes[0] !== '') {
        filtered = filtered.filter(d => selectedTypes.includes(d.type));
    }
    
    renderDestinations(filtered);
}

// Buscar al presionar Enter
document.addEventListener('keypress', function(e) {
    if (e.key === 'Enter' && e.target.id === 'searchInput') {
        performSearch();
    }
});

// ============================================
// FORMULARIO DE RESERVA
// ============================================

function handleBooking(event) {
    event.preventDefault();
    
    const destino = document.getElementById('destino').value;
    const fechaInicio = document.getElementById('fechaInicio').value;
    const fechaFin = document.getElementById('fechaFin').value;
    const personas = document.getElementById('personas').value;
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const telefono = document.getElementById('telefono').value;
    
    // Validar fechas
    if (new Date(fechaInicio) >= new Date(fechaFin)) {
        showNotification('La fecha de fin debe ser posterior a la fecha de inicio', 'error');
        return;
    }
    
    // Crear objeto de reserva
    const reservation = {
        destino,
        fechaInicio,
        fechaFin,
        personas,
        nombre,
        email,
        telefono,
        fecha: new Date().toISOString()
    };
    
    // Guardar en localStorage
    const reservations = JSON.parse(localStorage.getItem('reservations') || '[]');
    reservations.push(reservation);
    localStorage.setItem('reservations', JSON.stringify(reservations));
    
    // Mostrar confirmación
    showNotification(`¡Reserva confirmada! Recibirás un correo de confirmación en ${email}`);
    
    // Limpiar formulario
    event.target.reset();
}

function reserveDestination(destinationName) {
    const destino = document.getElementById('destino');
    const option = Array.from(destino.options).find(opt => opt.value === destinationName);
    if (option) {
        destino.value = destinationName;
        document.getElementById('destino').scrollIntoView({behavior: 'smooth'});
        closeModal();
        showNotification('Destino seleccionado. Por favor completa el formulario de reserva.');
    }
}

function reserveExperience(experienceName) {
    showNotification(`Experiencia: ${experienceName}. Por favor contáctanos para más detalles.`);
    closeModal();
    document.getElementById('contacto').scrollIntoView({behavior: 'smooth'});
}

// ============================================
// FORMULARIO DE CONTACTO
// ============================================

function handleContact(event) {
    event.preventDefault();
    
    const nombre = document.getElementById('contactNombre').value;
    const email = document.getElementById('contactEmail').value;
    const asunto = document.getElementById('asunto').value;
    const mensaje = document.getElementById('mensaje').value;
    
    // Crear objeto de contacto
    const contact = {
        nombre,
        email,
        asunto,
        mensaje,
        fecha: new Date().toISOString()
    };
    
    // Guardar en localStorage
    const contacts = JSON.parse(localStorage.getItem('contacts') || '[]');
    contacts.push(contact);
    localStorage.setItem('contacts', JSON.stringify(contacts));
    
    // Mostrar confirmación
    showNotification(`¡Gracias ${nombre}! Hemos recibido tu mensaje. Te responderemos pronto.`);
    
    // Limpiar formulario
    event.target.reset();
}

// ============================================
// NOTIFICACIONES
// ============================================

function showNotification(message, type = 'success') {
    const notification = document.getElementById('notification');
    notification.textContent = message;
    notification.className = `notification ${type} show`;
    
    setTimeout(() => {
        notification.classList.remove('show');
    }, 4000);
}

// ============================================
// MENÚ RESPONSIVE
// ============================================

function setupEventListeners() {
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    menuToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        const isExpanded = navMenu.classList.contains('active');
        menuToggle.setAttribute('aria-expanded', isExpanded);
    });
    
    // Cerrar menú al hacer clic en un enlace
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            menuToggle.setAttribute('aria-expanded', 'false');
            
            // Actualizar enlace activo
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // Cerrar menú al redimensionar a desktop
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            navMenu.classList.remove('active');
            menuToggle.setAttribute('aria-expanded', 'false');
        }
    });
}

// ============================================
// FUNCIONALIDADES ADICIONALES
// ============================================

// Suavizar desplazamiento de navegación
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Guardar datos de usuario en localStorage cuando se completa un formulario
function saveUserPreferences() {
    const preferences = {
        theme: localStorage.getItem('theme') || 'light',
        language: 'es'
    };
    localStorage.setItem('userPreferences', JSON.stringify(preferences));
}

// Log de desarrollo
console.log('🎉 Paseito - Sitio de turismo en Colombia cargado exitosamente');
console.log(`📍 Destinos disponibles: ${destinations.length}`);
console.log(`✈️ Experiencias disponibles: ${experiences.length}`);