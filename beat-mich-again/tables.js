var tables = [
  {
    id: 'table_1',
    number: '1',
    description: 'High top',
    seat_count: 6,
    price: '$180',
    is_available: true,
  },
  {
    id: 'table_5',
    number: '2',
    description: 'High top',
    seat_count: 8,
    price: '$240',
    is_available: false,
  }
];

function toItemMarkup(source) {
  return `
    <div class="item">
      <span class="description">Table #${source.number} ${source.description} (${source.seat_count})</span>
      <span class="price">${source.price}<span>
      <button class="btn-purchase" data-purpose="purchase" data-id="${source.id}">Purchase</button>
    </div>
  `;
}

window.onload = function () {
  var container = document.getElementById('purchase_items');
  var markup = tables.map(toItemMarkup).join('');
  container.innerHTML = markup;

  container.addEventListener('click', function (e) {
    if (!e.target) return;
    if (e.target.dataset.purpose !== 'purchase') return;

    console.log('purchase clicked', e.target.dataset.id);

  });
}
