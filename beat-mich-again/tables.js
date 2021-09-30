(function () {
  var app = window.app || (window.app = {});

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

  function setOverlaySizes() {
    ['patio_layout', 'dining_layout', 'lane_layout' ].forEach(layoutId => {
      var image = document.querySelector(`#${layoutId} img`);
      var canvas = document.querySelector(`#${layoutId} canvas`);
      canvas.width = image.width;
      canvas.height = image.height;
    });
  }

  function showLayoutGrid(id) {

    var container = document.createElement('div');
    container.className = 'layout-grid';

    [...Array(100).keys()].map(i => {
      var cell = document.createElement('div');
      cell.className = `cell cell-${i}`;
      return cell;
    }).forEach(cell => {
      container.append(cell);
    });

    var map = document.querySelector(`#${id} .map`);
    map.append(container);
  }

  function writeSold() {

    var canvas = document.getElementById('patio_overlay');
    var ctx = canvas.getContext('2d');
    ctx.textBaseline = 'middle';

    var positions = [
      {
        id: 'table_1',
        x: 20,
        y: 20,
        vertical: 1,
        color: '#ff0',
      },
      {
        id: 'table_5',
        x: 20,
        y: 26,
        vertical: 0,
        color: '#000',
      },
    ];

    positions.forEach(position => {

      var x = 0;
      var y = 0;

      if (position.vertical === 1) {
        y = (position.x / 100) * canvas.width;
        x = (position.y / 100) * canvas.height * -1;
      } else {
        x = (position.x / 100) * canvas.width;
        y = (position.y / 100) * canvas.height;
      }

      var fontSize = canvas.height / 33;

      ctx.save();
      ctx.font = `bold ${fontSize}px arial`;
      ctx.rotate(position.vertical * (-Math.PI/2));
      ctx.fillStyle = position.color;
      ctx.fillText('SOLD', x, y);
      ctx.restore();

    });

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

    setOverlaySizes();

    showLayoutGrid('patio_layout');
    showLayoutGrid('dining_layout');
    showLayoutGrid('lane_layout');

    writeSold();
  }
}());
