javascript

// MENU MOBILE
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Ferme le menu mobile quand on clique sur un lien
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});

// FORMULAIRE DE CONTACT
const contactForm = document.getElementById('contactForm');
const formConfirmation = document.getElementById('formConfirmation');
const numeroWhatsApp = "22671085998"; // Numéro Ouinzin Livraison

contactForm.addEventListener('submit', function (e) {
  e.preventDefault();

  // Récupération des valeurs
  const nom = document.getElementById('nom').value;
  const telephone = document.getElementById('telephone').value;
  const type = document.getElementById('type').value;
  const adresse = document.getElementById('adresse').value;
  const message = document.getElementById('message').value;

  // Construction du message WhatsApp
  const texte =
`Nouvelle demande de livraison - Ouinzin Livraison

Nom : ${nom}
Téléphone : ${telephone}
Type de livraison : ${type}
Adresse : ${adresse}
Détails : ${message || "Aucun détail supplémentaire"}`;

  const texteEncode = encodeURIComponent(texte);
  const lienWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${texteEncode}`;

  // Affiche un message de confirmation
  formConfirmation.textContent = "Merci ! Vous allez être redirigé vers WhatsApp pour finaliser votre demande...";
  formConfirmation.classList.add('show');

  // Ouvre WhatsApp après une petite pause
  setTimeout(() => {
    window.open(lienWhatsApp, '_blank');
    contactForm.reset();
  }, 1000);
});