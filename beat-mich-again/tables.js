(function () {

  var tables = [
    { id: 'table_1', paypal_id: '58ZYFFK3TYJQ2', name: 'Table 1', description: 'Low top table, 8 seats', type: 'low', price: '$300', map_id: 'patio_dining_overlay', },
    { id: 'table_2', paypal_id: 'W4X9LEK3MRWGE', name: 'Table 2', description: 'Low top table, 8 seats', type: 'low', price: '$300', map_id: 'patio_dining_overlay', },
    { id: 'table_3', paypal_id: '3UR6PHXVB8NQU', name: 'Table 3', description: 'Low top table, 8 seats', type: 'low', price: '$300', map_id: 'patio_dining_overlay', },
    { id: 'table_4', paypal_id: 'ND22DFWF4P2SL', name: 'Table 4', description: 'Low top table, 8 seats', type: 'low', price: '$300', map_id: 'patio_dining_overlay', },
    { id: 'table_5', paypal_id: 'L4SFDYABHA9QC', name: 'Table 5', description: 'High top table, 2 seats', type: 'high', price: '$60', map_id: 'patio_dining_overlay', },
    { id: 'table_6', paypal_id: '2HN56WHMEF22S', name: 'Table 6', description: 'Low top table, 6 seats', type: 'low', price: '$180', map_id: 'patio_dining_overlay', },
    { id: 'table_7', paypal_id: 'SBCN9SVB3G5F4', name: 'Table 7', description: 'High top table, 6 seats', type: 'high', price: '$180', map_id: 'patio_dining_overlay', },
    { id: 'table_8', paypal_id: 'R23BB64UFS83E', name: 'Table 8', description: 'High top table, 6 seats', type: 'high', price: '$180', map_id: 'patio_dining_overlay', },
    { id: 'table_9', paypal_id: 'ZSZ8EBTCGGBD6', name: 'Table 9', description: 'Low top table, 4 seats', type: 'low', price: '$120', map_id: 'patio_dining_overlay', },
    { id: 'table_10', paypal_id: '8XSF88BALBF2S', name: 'Table 10', description: 'High top table, 6 seats', type: 'high', price: '$180', map_id: 'patio_dining_overlay', },

    { id: 'table_11', paypal_id: 'NNKS9F875YD58', name: 'Table 11', description: 'High top table, 6 seats', type: 'high', price: '$180', map_id: 'patio_dining_overlay', },
    { id: 'table_12', paypal_id: '73BQGV4FXLCG4', name: 'Table 12', description: 'Low top table, 4 seats', type: 'low', price: '$120', map_id: 'patio_dining_overlay', },
    { id: 'table_13', paypal_id: 'LHKM5ZKBWVQNY', name: 'Table 13', description: 'High top table, 4 seats', type: 'high', price: '$120', map_id: 'patio_dining_overlay', },
    { id: 'table_14', paypal_id: 'WMM4N35LG6T3A', name: 'Table 14', description: 'High top table, 4 seats', type: 'high', price: '$120', map_id: 'patio_dining_overlay', },
    { id: 'table_15', paypal_id: '2W8P9V433D79U', name: 'Table 15', description: 'Low top table, 6 seats', type: 'low', price: '$180', map_id: 'patio_dining_overlay', },
    { id: 'table_16', paypal_id: 'HE4VYMX3LR5AJ', name: 'Table 16', description: 'High top table, 2 seats', type: 'high', price: '$60', map_id: 'patio_dining_overlay', },
    { id: 'table_17', paypal_id: 'Y757VC5ZCTC6Q', name: 'Table 17', description: 'High top table, 6 seats', type: 'high', price: '$180', map_id: 'patio_dining_overlay', },
    { id: 'table_18', paypal_id: 'ECAFX9HUW6G7S', name: 'Table 18', description: 'Low top table, 4 seats', type: 'low', price: '$120', map_id: 'patio_dining_overlay', },
    { id: 'table_19', paypal_id: 'DG2U3MMKQDNFW', name: 'Table 19', description: 'High top table, 4 seats', type: 'high', price: '$120', map_id: 'patio_dining_overlay', },
    { id: 'table_20', paypal_id: 'QVVTXWYFCJBQW', name: 'Table 20', description: 'High top table, 6 seats', type: 'high', price: '$180', map_id: 'patio_dining_overlay', },

    { id: 'table_21', paypal_id: 'VXDL9AKGSZKDL', name: 'Table 21', description: 'Low top table, 4 seats', type: 'low', price: '$120', map_id: 'patio_dining_overlay', },
    { id: 'table_22', paypal_id: 'LG94B9AWLRMQN', name: 'Table 22', description: 'High top table, 4 seats', type: 'high', price: '$120', map_id: 'patio_dining_overlay', },
    { id: 'table_23', paypal_id: 'WRR3PZ3V8YBXG', name: 'Table 23', description: 'High top table, 2 seats', type: 'high', price: '$60', map_id: 'patio_dining_overlay', },
    { id: 'table_24', paypal_id: 'CB8YH2D7EN3KU', name: 'Table 24', description: 'High top table, 2 seats', type: 'high', price: '$60', map_id: 'patio_dining_overlay', },
    { id: 'table_25', paypal_id: '6NDD9GNG24MFE', name: 'Table 25', description: 'Low top table, 4 seats', type: 'low', price: '$120', map_id: 'patio_dining_overlay', },
    { id: 'table_26', paypal_id: 'G6PGBGVT8DETA', name: 'Table 26', description: 'High top table, 6 seats', type: 'high', price: '$180', map_id: 'patio_dining_overlay', },
    { id: 'table_27', paypal_id: 'E7Q26WXSKEEWN', name: 'Table 27', description: 'High top table, 6 seats', type: 'high', price: '$180', map_id: 'patio_dining_overlay', },
    { id: 'table_28', paypal_id: 'JZ34A8CHVE28E', name: 'Table 28', description: 'High top table, 6 seats', type: 'high', price: '$180', map_id: 'patio_dining_overlay', },
    { id: 'table_29', paypal_id: '25EW4EQHD827W', name: 'Table 29', description: 'High top table, 6 seats', type: 'high', price: '$180', map_id: 'patio_dining_overlay', },
    { id: 'table_30', paypal_id: 'LU2TMJ52QSS7E', name: 'Table 30', description: 'High top table, 6 seats', type: 'high', price: '$180', map_id: 'patio_dining_overlay', },

    { id: 'lane_31', paypal_id: 'CS776B22Z2S3Q', name: 'Lane 31', description: 'Bowling lane, 4-6 seats', type: 'lane', price: '$250', map_id: 'lane_overlay', },
    { id: 'lane_32', paypal_id: 'P76ZLCFJY34MU', name: 'Lane 32', description: 'Bowling lane, 4-6 seats', type: 'lane', price: '$250', map_id: 'lane_overlay', },
    { id: 'lane_33', paypal_id: 'XCZ348G6GWNVJ', name: 'Lane 33', description: 'Bowling lane, 4-6 seats', type: 'lane', price: '$250', map_id: 'lane_overlay', },
    { id: 'lane_34', paypal_id: 'N4J789F5FGUEE', name: 'Lane 34', description: 'Bowling lane, 4-6 seats', type: 'lane', price: '$250', map_id: 'lane_overlay', },
    { id: 'lane_35', paypal_id: 'ZR92TBVS45ECW', name: 'Lane 35', description: 'Bowling lane, 4-6 seats', type: 'lane', price: '$250', map_id: 'lane_overlay', },
    { id: 'lane_36', paypal_id: 'TLWJ7R3KPGKTJ', name: 'Lane 36', description: 'Bowling lane, 4-6 seats', type: 'lane', price: '$250', map_id: 'lane_overlay', },
    { id: 'lane_37', paypal_id: '7V68EDS2FBJ7A', name: 'Lane 37', description: 'Bowling lane, 4-6 seats', type: 'lane', price: '$250', map_id: 'lane_overlay', },
    { id: 'lane_38', paypal_id: 'WQP5GV5YRTFG6', name: 'Lane 38', description: 'Bowling lane, 4-6 seats', type: 'lane', price: '$250', map_id: 'lane_overlay', },
    { id: 'test', paypal_id: 'LXH72XZAGWCAS', name: 'Test Table', description: 'Does this actually work?', type: 'high', price: '$0.25', map_id: 'patio_dining_overlay', },
  ];

  (window.app || (window.app = {})).tables = tables;

}());
