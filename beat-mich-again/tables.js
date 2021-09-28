var tables = [
  {
    id: '58ZYFFK3TYJQ2',
    name: 'Table 1',
    description: 'High top 6 seats',
    price: '$180',
    is_available: true,
  },
  {
    id: 'table_5',
    name: 'Table 2',
    description: 'High top 6 seats',
    price: '$240',
    is_available: false,
  },
  {
    id: 'table_5',
    name: 'Table 2',
    description: 'High top 6 seats',
    price: '$240',
    is_available: false,
  },
  {
    id: 'table_5',
    name: 'Table 2',
    description: 'High top 6 seats',
    price: '$240',
    is_available: false,
  },
  {
    id: 'table_5',
    name: 'Table 2',
    description: 'High top 6 seats',
    price: '$240',
    is_available: false,
  },
  {
    id: 'table_5',
    name: 'Table 2',
    description: 'High top 6 seats',
    price: '$240',
    is_available: false,
  },
  {
    id: 'table_5',
    name: 'Table 2',
    description: 'High top 6 seats',
    price: '$240',
    is_available: false,
  },
  {
    id: 'table_5',
    name: 'Table 2',
    description: 'High top 6 seats',
    price: '$240',
    is_available: false,
  },
  {
    id: 'table_5',
    name: 'Table 2',
    description: 'High top 6 seats',
    price: '$240',
    is_available: false,
  },
  {
    id: 'table_5',
    name: 'Table 2',
    description: 'High top 6 seats',
    price: '$240',
    is_available: false,
  },
  {
    id: 'table_5',
    name: 'Table 2',
    description: 'High top 6 seats',
    price: '$240',
    is_available: false,
  }
];

function toItemMarkup(source) {
  return `
    <div class="item">
      <span class="name">${source.name}</span>
      <span class="price">${source.price}</span>
      <span class="description">${source.description}</span>
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
