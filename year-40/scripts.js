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

  function toSroFormMarkup() {

    var form = `
      <form class="form" action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">

        <input type="hidden" name="cmd" value="_s-xclick">
        <input type="hidden" name="hosted_button_id" value="TWL3UE9L5N8WL">

        <input type="hidden" name="on0" value="Number of Tickets">
        <label for="qty_input" class="form-item lbl" data-id="qty_label">Number of tickets</label>
        <select id="qty_select" class="form-item select" name="os0">
          <option value="1 Ticket">1 Ticket $10.00 USD</option>
          <option value="2 Tickets">2 Tickets $20.00 USD</option>
          <option value="3 Tickets">3 Tickets $30.00 USD</option>
          <option value="4 Tickets">4 Tickets $40.00 USD</option>
        </select>

        <input type="hidden" name="on1" value="Email address">
        <label for="email_input" class="form-item lbl" data-id="email_label">Email address<sup>*</sup></label>
        <input id="email_input" class="form-item" type="text" name="os1" maxlength="200">

        <input type="hidden" name="on2" value="Phone">
        <label for="phone_input" class="form-item lbl" data-id="phone_label">Phone<sup>*</sup> (e.g., 614-123-1234)</label>
        <input id="phone_input" class="form-item" type="text" name="os2" maxlength="200">

        <input type="hidden" name="currency_code" value="USD">
        <button type="button" class="form-item btn btn-cancel" data-purpose="cancel">Cancel</button>

        <input
          id="paypal_button"
          data-purpose="submit"
          class="form-item btn btn-submit disabled"
          type="image"
          src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif"
          border="0"
          name="submit"
          alt="PayPal - The safer, easier way to pay online!">

        <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
      </form>
    `;

    return toPopupMarkup({
      title: 'Individual Ticket(s)',
      name: 'Standing room only',
      price: '$10/ticket',
      description: 'Purchase 1-4 tickets',
      form: form,
    });
  }

  function toPopupMarkup(item) {
    return `
    <div class="content">
      <h2 class="title">${item.name}</h2>
      <div class="product">
        <h3 class="price">${item.price}</h3>
        <p class="description">${item.description}</p>
      </div>
      ${item.form}
      <div class="requirements"><sup>*</sup> required</div>
    `;
  }

  function toTableFormMarkup(item) {
    var form = `
      <form class="form" action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">

        <input type="hidden" name="cmd" value="_s-xclick">
        <input type="hidden" name="hosted_button_id" value="${item.paypal_id}">

        <input type="hidden" name="on0" value="Email address">
        <label for="email_input" class="form-item lbl" data-id="email_label">Email address<sup>*</sup></label>
        <input id="email_input" class="form-item" type="text" name="os0" maxlength="200">

        <input type="hidden" name="on1" value="Phone">
        <label for="phone_input" class="form-item lbl" data-id="phone_label">Phone<sup>*</sup> (e.g., 614-123-1234)</label>
        <input id="phone_input" class="form-item" type="text" name="os1" maxlength="200">

        <button type="button" class="form-item btn btn-cancel" data-purpose="cancel">Cancel</button>
        <input
          id="paypal_button"
          data-purpose="submit"
          class="form-item btn btn-submit disabled"
          type="image"
          src=https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif border="0"
          name="submit"
          alt="PayPal - The safer, easier way to pay online!">
        <img alt="" border="0" src=https://www.paypalobjects.com/en_US/i/scr/pixel.gif width="1" height="1">
      </form>
    `;

    return toPopupMarkup({
      ...item,
      title: 'Purchase',
      form: form,
    });
  }

  function toItemMarkup(source) {
    return `
      <a href="#purchase" class="item${source.soldClass}" data-purpose="purchase" data-id="${source.id}">
        <span class="btn">${source.buttonLabel}</span>
        <div class="item-detail">
          <span class="name">${source.name}</span>
          <span class="price">${source.price}</span>
          <span class="description">${source.description}</span>
          <div class="sold-overlay">SOLD</div>
        </div>
      </a>
    `;
  }

  function getSoldState(id) {
    var soldState = !app.tableStatus[id].available;
    return {
      soldClass: soldState ? ' sold' : '',
      disabled: soldState ? ' disabled="disabled"' : '',
    };
  }

  function toSroMarkup() {

    var id = 'sro';
    var soldState = getSoldState(id);

    return toItemMarkup({
      id: id,
      name: 'Individual Tickets(s)',
      price: '$10',
      description: 'Standing room only',
      soldClass: soldState.soldClass,
      disabled: soldState.disabled,
      buttonLabel: 'Purchase',
    });
  }

  function toTableMarkup(source) {
    var soldState = getSoldState(source.id);

    return toItemMarkup({
      id: source.id,
      name: source.name,
      price: source.price,
      description: source.description,
      soldClass: soldState.soldClass,
      disabled: soldState.disabled,
      buttonLabel: 'Purchase',
    });
  }

  function setOverlaySizes() {
    ['patio_dining_layout' ].forEach(layoutId => {
      var image = document.querySelector(`#${layoutId} img`);
      var canvas = document.querySelector(`#${layoutId} canvas`);
      canvas.width = image.width * 0.4;
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

      var color = '#000';
      var position = app.layouts[table.id];

      return {
        id: table.id,
        x: position.x,
        y: position.y,
        vertical: position.vertical,
        color: color,
        mapId: table.map_id,
      };

    });

    var canvas = document.getElementById(positions[0].mapId);

    var fontSize = canvas.height / 40;

    var ctx = canvas.getContext('2d');

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.textBaseline = 'middle';
    ctx.rotate(-Math.PI/2);


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

      ctx.save();
      ctx.font = `bold ${fontSize}px arial`;
      ctx.fillStyle = position.color;
      ctx.fillText(`SOLD`, x, y);
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

  function getOrderForm() {
    return document.getElementById('order_form');
  }

  function setPaypalButtonState() {

    var paypalButton = document.getElementById('paypal_button');
    paypalButton.classList.remove('disabled');
    paypalButton.dataset.state = 'valid';

    var valid = hasValue('email_input') && hasValue('phone_input');

    if (!valid) {
      paypalButton.classList.add('disabled');
      paypalButton.dataset.state = 'invalid';
    }

  }

  function hasValue(id) {
    var input = document.getElementById(id);
    if (input.value == null) return false;
    if (input.value === '') return false;
    return true;
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

    var sro = toSroMarkup();

    var tables = app.tables.map(toTableMarkup).join('');

    container.innerHTML = `${sro}${tables}`;

    container.addEventListener('click', function (e) {

      e.preventDefault();

      if (!e.target) return false;

      var element = e.target;

      while (element !== container && element.dataset.purpose !== 'purchase') {
        element = element.parentElement;
      }

      if (element === container) {
        return false;
      }

      var orderForm = getOrderForm();

      var id = element.dataset.id;

      if (!app.tableStatus[id].available) return;

      if (id === 'sro') {

        orderForm.innerHTML = toSroFormMarkup(item);

      } else {

        var item = app.tables.find(i => {
          return i.id === id;
        });

        orderForm.innerHTML = toTableFormMarkup(item);

      }

      orderForm.className = `${orderForm.dataset.baseClass} active`;

      return false;

    });

    setOverlaySizes();

    //showLayoutGrid('patio_dining_layout');
    //showLayoutGrid('lane_layout');

    writeSold();

    var orderForm = getOrderForm();


    orderForm.addEventListener('input', (e) => {
      handleInputChange(e);
    });

    orderForm.addEventListener('click', (e) => {


      if (!e.target) return;

      if (e.target.dataset.purpose === 'cancel') {
        cancelOrderForm(orderForm);
        return false;
      }

      if (e.target.dataset.purpose === 'submit') {
        return checkOrderFormValidity(e, e.target);
      }

      return false;
    });
  }

  function handleInputChange(e) {

    var target = e.target;

    if (!target) return;
    if (target.tagName !== 'INPUT') return;

    var label = document.querySelector(`[for="${target.id}"]`);

    label.classList.remove('valid');
    label.classList.remove('warn');


    if (target.value === '' || target.value == null) {
      label.classList.add('warn');
    }
    else if (target.value !== '' && target.value != null) {
      label.classList.add('valid');
    }

    setPaypalButtonState();

  }

  function cancelOrderForm(orderForm) {
    orderForm.className = orderForm.dataset.baseClass;
    orderForm.innerHTML = '';
  }

  function checkOrderFormValidity(e, button) {

    if (button.dataset.state === 'valid') return true;

    e.preventDefault();
    return false;
  }

  function getPatioDiningLayoutImage() {
    return document.querySelector('#patio_dining_layout img');
  }

  function allReady() {

    var img = getPatioDiningLayoutImage();

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

    var details = document.getElementById('details-container');

    details.addEventListener('click', function(e) {

      var target = e.target;

      if (!target) return;
      if (target.dataset.purpose !== 'expander') return;

      if (target.dataset.id === 'more_details') {

        e.preventDefault();
        details.classList.remove('collapsed');
        details.classList.add('expanded');

      } else if (target.dataset.id === 'less_details') {

        e.preventDefault();
        details.classList.remove('expanded');
        details.classList.add('collapsed');

      }

    });

    getPatioDiningLayoutImage().addEventListener('load', () => {
      if (allReady()) populate();
    });

    setTimeout(() => {
      if (allReady()) populate();
    }, 0);

    window.addEventListener('resize', function(e) {
      writeSold();
    });

  });

}());
