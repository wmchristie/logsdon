(function () {

  var app = window.app || (window.app = {});

  function docReady(fn) {
    // see if DOM is already available
    if (document.readyState === "complete" || document.readyState === "interactive") {
      // call on next available tick
      setTimeout(fn, 1);
    } else {
      document.addEventListener("DOMContentLoaded", fn);
    }
  };

  function toFormMarkup(item) {
    return `
    <div class="content">
      <h2 class="title">Purchase</h2>
      <div class="product">
        <h3 class="name">${item.name}</h3>
        <h3 class="price">${item.price}</h3>
        <p class="description">${item.description}</p>
      </div>
      <hr class="divider" />
      <form action=https://www.paypal.com/cgi-bin/webscr method="post" target="_top">
        <input type="hidden" name="cmd" value="_s-xclick">
        <input type="hidden" name="hosted_button_id" value="${item.paypal_id}">
        <input type="hidden" name="on0" value="Email address">
        <label class="form-item lbl">Email address</label>
        <input class="form-item" type="text" name="os0" maxlength="200">
        <input type="hidden" name="on1" value="Phone">
        <label class="form-item lbl">Phone</label>
        <input class="form-item" type="text" name="os1" maxlength="200">
        <button type="button" class="form-item btn btn-cancel" data-purpose="cancel">Cancel</button>
        <input
          class="form-item btn btn-submit"
          type="image"
          src=https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif border="0"
          name="submit"
          alt="PayPal - The safer, easier way to pay online!">
        <img alt="" border="0" src=https://www.paypalobjects.com/en_US/i/scr/pixel.gif width="1" height="1">
      </form>

    `;
  }

  function toItemMarkup(source) {
    var isSold = !app.tableStatus[source.id].available;
    var soldClass = isSold ? ' sold' : '';
    var disabled = isSold ? ' disabled="disabled"' : '';
    return `
      <div class="item${soldClass}">
        <span class="name">${source.name}</span>
        <span class="price">${source.price}</span>
        <span class="description">${source.description}</span>
        <button class="btn-purchase" data-purpose="purchase" data-id="${source.id}"${disabled}>Purchase</button>
        <div class="sold-overlay">SOLD</div>
      </div>
    `;
  }

  function setOverlaySizes() {
    ['patio_dining_layout', 'lane_layout' ].forEach(layoutId => {
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

    var positions = app.tables.filter(table => {
      return !app.tableStatus[table.id].available;
    }).map(table => {

      var color = '';
      if (table.type === 'low') {
        color = '#ff0';
      } else {
        color = '#000';
      }

      var position = app.layouts[table.id];

      return {
        x: position.x,
        y: position.y,
        vertical: position.vertical,
        color: color,
        mapId: table.map_id,
      };

    });

    positions.forEach(position => {

      var canvas = document.getElementById(position.mapId);


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

      var ctx = canvas.getContext('2d');
      ctx.textBaseline = 'middle';

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

  var populated = false;

  function populate() {

    if (populated) return;
    populated = true;

    var container = document.getElementById('purchase_items');
    var markup = app.tables.map(toItemMarkup).join('');
    container.innerHTML = markup;

    container.addEventListener('click', function (e) {

      if (!e.target) return;
      if (e.target.dataset.purpose !== 'purchase') return;

      var popup = document.getElementById('order_form');

      var tableId = e.target.dataset.id;
      var item = app.tables.find(i => {
        return i.id === tableId;
      });

      if (!app.tableStatus[item.id].available) return;

      popup.innerHTML = toFormMarkup(item);
      popup.className = `${popup.dataset.baseClass} active`;

    });

    setOverlaySizes();

    //showLayoutGrid('patio_dining_layout');
    //showLayoutGrid('lane_layout');

    writeSold();

    var orderForm = document.getElementById('order_form');

    orderForm.addEventListener('click', (e) => {
      if (!e.target) return;
      if (e.target.dataset.purpose !== 'cancel') return;
      orderForm.className = orderForm.dataset.baseClass;
      return false;
    });
  }

  function getPatioDiningLayoutImage() {
    return document.querySelector('#patio_dining_layout img');
  }

  function getLaneLayoutImage() {
    return document.querySelector('#lane_layout img');
  }

  function allReady() {

    var img = getPatioDiningLayoutImage();

    if (!img.complete || img.naturalHeight === 0) return false;

    var img = getLaneLayoutImage();

    if (!img.complete || img.naturalHeight === 0) return false;

    return dataStatus.tables && dataStatus.availability && dataStatus.layouts;
  }

  docReady(() => {

    addScript('sales_availability', () => {
      dataStatus.availability = true;
      if (allReady()) populate();
    });

    addScript('tables', () => {
      dataStatus.tables = true;
      if (allReady()) populate();
    });

    addScript('layouts', () => {
      dataStatus.layouts = true;
      if (allReady()) populate();
    });

    getPatioDiningLayoutImage().addEventListener('load', () => {
      if (allReady()) populate();
    });

    getLaneLayoutImage().addEventListener('load', () => {
      if (allReady()) populate();
    });

    setTimeout(() => {
      if (allReady()) populate();
    }, 0);

  });

}());
