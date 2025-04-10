// Optional: kalau kamu ingin dynamic rendering event
const events = [
  {
    id: 1,
    title: "Hindia Live Concert",
    image: "hindia1.webp",
    shortDesc: "Experience Hindia's soulful music live.",
    fullDesc: "Join us for an unforgettable evening with Hindia, featuring his greatest hits and an intimate performance."
  },
  {
    id: 2,
    title: "DEWA 19 Live Concert",
    image: "dewa.jpg",
    shortDesc: "Experience DEWA19 soulful music live.",
    fullDesc: "Join us for an unforgettable evening with DEWA19, featuring his greatest hits and an intimate performance."
  },
  {
    id: 3,
    title: "Bernadyan Live Concert",
    image: "berna.jpg",
    shortDesc: "Experience Bernadya's soulful music live.",
    fullDesc: "Join us for an unforgettable evening with Bernadya, featuring his greatest hits and an intimate performance."
  },
  {
    id: 4,
    title: ".Feast Live Concert",
    image: "feast.jpeg",
    shortDesc: "Experience Feast's soulful music live.",
    fullDesc: "Join us for an unforgettable evening with Feast, featuring his greatest hits and an intimate performance."
  },
  {
    id: 5,
    title: "Sheila On 7 Live Concert",
    image: "bisnis.webp",
    shortDesc: "Experience Sheila On 7 soulful music live.",
    fullDesc: "Join us for an unforgettable evening with Sheila On 7, featuring his greatest hits and an intimate performance."
  },

  {
    id: 6,
    title: "Vierratale Live Concert",
    image: "vierra.jpg",
    shortDesc: "Experience Vierratale's soulful music live.",
    fullDesc: "Join us for an unforgettable evening with Vierratale, featuring his greatest hits and an intimate performance."
  },
  ];
  
  window.addEventListener('DOMContentLoaded', () => {
    const rowContainer = document.querySelector('#event .row');
  
    events.forEach(event => {
      const col = document.createElement('div');
      col.className = 'col';
  
      col.innerHTML = `
        <div class="card h-100">
          <img src="${event.image}" class="card-img-top" alt="${event.title}">
          <div class="card-body">
        <h5 class="card-title">${event.title}</h5>
        <p class="card-text">${event.shortDesc}</p>
        <button class="btn" style="background-color: #f16767; color: white;" data-bs-toggle="modal" data-bs-target="#eventModal" data-id="${event.id}">Lihat Detail</button>
          </div>
        </div>
      `;
      rowContainer.appendChild(col);
    });
  
    // Modal logic
    const modal = new bootstrap.Modal(document.getElementById('eventModal'));
    const modalTitle = document.getElementById('eventModalLabel');
    const modalBody = document.querySelector('#eventModal .modal-body');
  
    document.addEventListener('click', function (e) {
      if (e.target && e.target.matches('button[data-bs-target="#eventModal"]')) {
        const eventId = e.target.getAttribute('data-id');
        const selectedEvent = events.find(ev => ev.id == eventId);
        modalTitle.textContent = selectedEvent.title;
        modalBody.textContent = selectedEvent.fullDesc;
  
        // Simpan ke localStorage agar bisa dipakai di register.html (opsional)
        localStorage.setItem('selectedEvent', JSON.stringify(selectedEvent));
      }
    });
  });