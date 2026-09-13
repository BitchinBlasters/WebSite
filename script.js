// ===================== CONFIG =====================
const CONTACT_EMAIL = 'b1tch1nblasters@gmail.com';

// ===================== SMOOTH SCROLL (CTA buttons) =====================
document.querySelectorAll('[data-scroll]').forEach(el => {
  el.addEventListener('click', (e) => {
    const target = document.querySelector(el.dataset.scroll);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// ===================== CATEGORY TAB FILTERING =====================
const tabs = document.querySelectorAll('.tab-ear');
const cards = document.querySelectorAll('.feed-card');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');

    const filter = tab.dataset.filter;

    cards.forEach(card => {
      const matches = filter === 'all' || card.dataset.category === filter;
      card.classList.toggle('hidden', !matches);
    });
  });
});

// ===================== REQUEST BUILD MODAL =====================
const modal = document.getElementById('requestModal');
const openBtn = document.getElementById('requestBuildBtn');
const closeBtn = document.getElementById('modalClose');

function openModal() {
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeModal() {
  modal.classList.remove('open');
  document.body.style.overflow = '';
}

openBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
modal.addEventListener('click', (e) => {
  if (e.target === modal) closeModal();
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modal.classList.contains('open')) closeModal();
});

// ===================== SEND REQUEST (mailto) =====================
document.getElementById('r-send').addEventListener('click', () => {
  const name = document.getElementById('r-name').value || 'Not given';
  const contact = document.getElementById('r-contact').value || 'Not given';
  const type = document.getElementById('r-type').value;
  const message = document.getElementById('r-message').value || 'Not given';

  const body = `Name: ${name}\nContact: ${contact}\nRequest type: ${type}\n\nDetails:\n${message}`;
  const subject = `Build request: ${type}`;

  window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});
