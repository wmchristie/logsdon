(function () {

  var tables = [
    { id: 'table_1', paypal_id: '58ZYFFK3TYJQ2', name: 'Table 1', description: 'Low top 8 seats', type: 'low', price: '$180', },
    { id: 'table_2', paypal_id: '58ZYFFK3TYJQ2', name: 'Table 2', description: 'Low top 8 seats', type: 'low', price: '$180', },
    { id: 'table_3', paypal_id: '58ZYFFK3TYJQ2', name: 'Table 3', description: 'Low top 8 seats', type: 'low', price: '$180', },
    { id: 'table_4', paypal_id: '58ZYFFK3TYJQ2', name: 'Table 4', description: 'Low top 8 seats', type: 'low', price: '$180', },
    { id: 'table_5', paypal_id: '58ZYFFK3TYJQ2', name: 'Table 5', description: 'High top 2 seats', type: 'high', price: '$180', },
    { id: 'table_6', paypal_id: '58ZYFFK3TYJQ2', name: 'Table 6', description: 'Low top 6 seats', type: 'low', price: '$180', },
    { id: 'table_7', paypal_id: '58ZYFFK3TYJQ2', name: 'Table 7', description: 'High top 6 seats', type: 'high', price: '$180', },
    { id: 'table_8', paypal_id: '58ZYFFK3TYJQ2', name: 'Table 8', description: 'High top 6 seats', type: 'high', price: '$180', },
    { id: 'table_9', paypal_id: '58ZYFFK3TYJQ2', name: 'Table 9', description: 'Low top 4 seats', type: 'low', price: '$180', },
    { id: 'table_10', paypal_id: '58ZYFFK3TYJQ2', name: 'Table 10', description: 'High top 6 seats', type: 'high', price: '$180', },

    { id: 'table_11', paypal_id: '58ZYFFK3TYJQ2', name: 'Table 11', description: 'High top 6 seats', type: 'high', price: '$180', },
    { id: 'table_12', paypal_id: '58ZYFFK3TYJQ2', name: 'Table 12', description: 'Low top 4 seats', type: 'low', price: '$180', },
    { id: 'table_13', paypal_id: '58ZYFFK3TYJQ2', name: 'Table 13', description: 'High top 4 seats', type: 'high', price: '$180', },
    { id: 'table_14', paypal_id: '58ZYFFK3TYJQ2', name: 'Table 14', description: 'High top 4 seats', type: 'high', price: '$180', },
    { id: 'table_15', paypal_id: '58ZYFFK3TYJQ2', name: 'Table 15', description: 'Low top 6 seats', type: 'low', price: '$180', },
    { id: 'table_16', paypal_id: '58ZYFFK3TYJQ2', name: 'Table 16', description: 'High top 2 seats', type: 'high', price: '$180', },
    { id: 'table_17', paypal_id: '58ZYFFK3TYJQ2', name: 'Table 17', description: 'High top 6 seats', type: 'high', price: '$180', },
    { id: 'table_18', paypal_id: '58ZYFFK3TYJQ2', name: 'Table 18', description: 'Low top 4 seats', type: 'low', price: '$180', },
    { id: 'table_19', paypal_id: '58ZYFFK3TYJQ2', name: 'Table 19', description: 'High top 4 seats', type: 'high', price: '$180', },
    { id: 'table_20', paypal_id: '58ZYFFK3TYJQ2', name: 'Table 20', description: 'High top 6 seats', type: 'high', price: '$180', },

    { id: 'table_21', paypal_id: '58ZYFFK3TYJQ2', name: 'Table 21', description: 'Low top 4 seats', type: 'low', price: '$180', },
    { id: 'table_22', paypal_id: '58ZYFFK3TYJQ2', name: 'Table 22', description: 'High top 4 seats', type: 'high', price: '$180', },
    { id: 'table_23', paypal_id: '58ZYFFK3TYJQ2', name: 'Table 23', description: 'High top 2 seats', type: 'high', price: '$180', },
    { id: 'table_24', paypal_id: '58ZYFFK3TYJQ2', name: 'Table 24', description: 'High top 2 seats', type: 'high', price: '$180', },
    { id: 'table_25', paypal_id: '58ZYFFK3TYJQ2', name: 'Table 25', description: 'Low top 4 seats', type: 'low', price: '$180', },
    { id: 'table_26', paypal_id: '58ZYFFK3TYJQ2', name: 'Table 26', description: 'High top 6 seats', type: 'high', price: '$180', },
    { id: 'table_27', paypal_id: '58ZYFFK3TYJQ2', name: 'Table 27', description: 'High top 6 seats', type: 'high', price: '$180', },
    { id: 'table_28', paypal_id: '58ZYFFK3TYJQ2', name: 'Table 28', description: 'High top 6 seats', type: 'high', price: '$180', },
    { id: 'table_29', paypal_id: '58ZYFFK3TYJQ2', name: 'Table 29', description: 'High top 6 seats', type: 'high', price: '$180', },
    { id: 'table_30', paypal_id: '58ZYFFK3TYJQ2', name: 'Table 30', description: 'High top 6 seats', type: 'high', price: '$180', },

    { id: 'lane_31', paypal_id: '58ZYFFK3TYJQ2', name: 'Lane 31', description: 'Bowling lane 4 seats', type: 'lane', price: '$180', },
    { id: 'lane_32', paypal_id: '58ZYFFK3TYJQ2', name: 'Lane 32', description: 'Bowling lane 4 seats', type: 'lane', price: '$180', },
    { id: 'lane_33', paypal_id: '58ZYFFK3TYJQ2', name: 'Lane 33', description: 'Bowling lane 4 seats', type: 'lane', price: '$180', },
    { id: 'lane_34', paypal_id: '58ZYFFK3TYJQ2', name: 'Lane 34', description: 'Bowling lane 4 seats', type: 'lane', price: '$180', },
    { id: 'lane_35', paypal_id: '58ZYFFK3TYJQ2', name: 'Lane 35', description: 'Bowling lane 4 seats', type: 'lane', price: '$180', },
    { id: 'lane_36', paypal_id: '58ZYFFK3TYJQ2', name: 'Lane 36', description: 'Bowling lane 4 seats', type: 'lane', price: '$180', },
    { id: 'lane_37', paypal_id: '58ZYFFK3TYJQ2', name: 'Lane 37', description: 'Bowling lane 4 seats', type: 'lane', price: '$180', },
    { id: 'lane_38', paypal_id: '58ZYFFK3TYJQ2', name: 'Lane 38', description: 'Bowling lane 4 seats', type: 'lane', price: '$180', },
  ];

  (window.app || (window.app = {})).tables = tables;

}());
