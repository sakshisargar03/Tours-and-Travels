// fetch packages and render cards
async function loadPackages(){
  const res = await fetch('http://localhost:5000/api/packages');
  const data = await res.json();
  const container = document.querySelector('.package-grid');
  container.innerHTML = '';
  data.forEach(p=>{
    const card = document.createElement('div');
    card.className='package-card';
    card.innerHTML = `<img src="${p.image || 'images/placeholder.jpg'}"><h3>${p.name}</h3><p>${p.description}</p><p class="price">₹${p.price}</p><a href="package-details.html?id=${p._id}" class="btn-small">View Details</a>`;
    container.appendChild(card);
  });
}
document.addEventListener('DOMContentLoaded', loadPackages);
