(function () {

  var tables = [
    { id: 'table_1', paypal_id: '58ZYFFK3TYJQ2', name: 'Table 1', description: 'Low top table, 10 seats', type: 'low', price: '$300', map_id: 'patio_dining_overlay', },
    { id: 'table_2', paypal_id: 'W4X9LEK3MRWGE', name: 'Table 2', description: 'Low top table, 10 seats', type: 'low', price: '$300', map_id: 'patio_dining_overlay', },
    { id: 'table_3', paypal_id: '3UR6PHXVB8NQU', name: 'Table 3', description: 'Low top table, 10 seats', type: 'low', price: '$300', map_id: 'patio_dining_overlay', },

    { id: 'table_4', paypal_id: 'ND22DFWF4P2SL', name: 'Table 4', description: 'Low top table, 10 seats', type: 'low', price: '$300', map_id: 'patio_dining_overlay', },
    { id: 'table_5', paypal_id: 'L4SFDYABHA9QC', name: 'Table 5', description: 'Low top table, 10 seats', type: 'low', price: '$300', map_id: 'patio_dining_overlay', },
    { id: 'table_6', paypal_id: '2HN56WHMEF22S', name: 'Table 6', description: 'Low top table, 10 seats', type: 'low', price: '$300', map_id: 'patio_dining_overlay', },

    { id: 'table_7', paypal_id: 'SBCN9SVB3G5F4', name: 'Table 7', description: 'Low top table, 10 seats', type: 'low', price: '$300', map_id: 'patio_dining_overlay', },
    { id: 'table_8', paypal_id: 'R23BB64UFS83E', name: 'Table 8', description: 'Low top table, 10 seats', type: 'low', price: '$300', map_id: 'patio_dining_overlay', },
    { id: 'table_9', paypal_id: 'ZSZ8EBTCGGBD6', name: 'Table 9', description: 'Low top table, 10 seats', type: 'low', price: '$300', map_id: 'patio_dining_overlay', },

    { id: 'table_10', paypal_id: '8XSF88BALBF2S', name: 'Table 10', description: 'Low top table, 4 seats', type: 'low', price: '$120', map_id: 'patio_dining_overlay', },
    { id: 'table_11', paypal_id: 'NNKS9F875YD58', name: 'Table 11', description: 'Low top table, 6 seats', type: 'low', price: '$180', map_id: 'patio_dining_overlay', },
    { id: 'table_12', paypal_id: '73BQGV4FXLCG4', name: 'Table 12', description: 'Low top table, 4 seats', type: 'low', price: '$120', map_id: 'patio_dining_overlay', },

    { id: 'table_13', paypal_id: 'LHKM5ZKBWVQNY', name: 'Table 13', description: 'Low top table, 4 seats', type: 'low', price: '$80', map_id: 'patio_dining_overlay', },
    { id: 'table_14', paypal_id: 'WMM4N35LG6T3A', name: 'Table 14', description: 'Low top table, 4 seats', type: 'low', price: '$80', map_id: 'patio_dining_overlay', },
    { id: 'table_15', paypal_id: '2W8P9V433D79U', name: 'Table 15', description: 'High top table, 4 seats', type: 'high', price: '$80', map_id: 'patio_dining_overlay', },

    { id: 'table_16', paypal_id: 'HE4VYMX3LR5AJ', name: 'Table 16', description: 'High top table, 6 seats', type: 'high', price: '$120', map_id: 'patio_dining_overlay', },
    { id: 'table_17', paypal_id: 'Y757VC5ZCTC6Q', name: 'Table 17', description: 'Low top table, 6 seats', type: 'low', price: '$120', map_id: 'patio_dining_overlay', },
    { id: 'table_18', paypal_id: 'ECAFX9HUW6G7S', name: 'Table 18', description: 'High top table, 4 seats', type: 'high', price: '$80', map_id: 'patio_dining_overlay', },

    { id: 'table_19', paypal_id: 'DG2U3MMKQDNFW', name: 'Table 19', description: 'High top table, 4 seats', type: 'high', price: '$80', map_id: 'patio_dining_overlay', },
    { id: 'table_20', paypal_id: 'QVVTXWYFCJBQW', name: 'Table 20', description: 'High top table, 4 seats', type: 'high', price: '$80', map_id: 'patio_dining_overlay', },
    { id: 'table_21', paypal_id: 'VXDL9AKGSZKDL', name: 'Table 21', description: 'High top table, 6 seats', type: 'high', price: '$120', map_id: 'patio_dining_overlay', },

    { id: 'table_22', paypal_id: 'LG94B9AWLRMQN', name: 'Table 22', description: 'High top table, 4 seats', type: 'high', price: '$80', map_id: 'patio_dining_overlay', },
    { id: 'table_23', paypal_id: 'WRR3PZ3V8YBXG', name: 'Table 23', description: 'High top table, 6 seats', type: 'high', price: '$120', map_id: 'patio_dining_overlay', },
    { id: 'table_24', paypal_id: 'CB8YH2D7EN3KU', name: 'Table 24', description: 'High top table, 4 seats', type: 'high', price: '$80', map_id: 'patio_dining_overlay', },

    { id: 'table_25', paypal_id: '6NDD9GNG24MFE', name: 'Table 25', description: 'High top table, 6 seats', type: 'high', price: '$120', map_id: 'patio_dining_overlay', },
    { id: 'table_26', paypal_id: 'G6PGBGVT8DETA', name: 'Table 26', description: 'High top table, 6 seats', type: 'high', price: '$120', map_id: 'patio_dining_overlay', },
    { id: 'table_27', paypal_id: 'E7Q26WXSKEEWN', name: 'Table 27', description: 'High top table, 6 seats', type: 'high', price: '$120', map_id: 'patio_dining_overlay', },
  ];

  (window.app || (window.app = {})).tables = tables;

}());

