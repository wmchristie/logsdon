(function () {

  var app = window.app || (window.app = {});

  app.docReady = function (fn) {
    // see if DOM is already available
    if (document.readyState === "complete" || document.readyState === "interactive") {
      // call on next available tick
      setTimeout(fn, 1);
    } else {
      document.addEventListener("DOMContentLoaded", fn);
    }
  };

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

    var positions = app.tables.filter(table => {
      return true;
      //return !app.tableStatus[table.id].available;
    }).map(table => {

      var color = '';
      if (table.type === 'low') {
        color = '#ff0';
      } else {
        color = '#000';
      }

      console.log(table.id, table.type, color);

      var position = app.layouts[table.id];

      return {
        x: position.x,
        y: position.y,
        vertical: position.vertical,
        color: color,
      };

    });
/*
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
*/
    positions.forEach(position => {

      var x = 0;
      var y = 0;

      console.log('position', position);

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

  function addScript(name, fn) {
    var script = document.createElement('script');
    script.setAttribute('type', 'text/javascript');
    script.setAttribute('src', `${name}.js?v=${Date.now()}`);
    script.addEventListener('load', fn);
    document.getElementById('scripts').append(script);
  }

  var dataStatus = {
    tables: false,
    availability: false,
    layouts: false,
  };

  function populateIfReady() {

    if (!dataStatus.tables || !dataStatus.availability || !dataStatus.layouts) {
      return;
    }

    var container = document.getElementById('purchase_items');
    var markup = app.tables.map(toItemMarkup).join('');
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

  app.docReady(() => {

    addScript('sales_availability', () => {
      dataStatus.availability = true;
      populateIfReady();
    });

    addScript('tables', () => {
      dataStatus.tables = true;
      populateIfReady();
    });

    addScript('layouts', () => {
      dataStatus.layouts = true;
      populateIfReady();
    });

  });

}());
