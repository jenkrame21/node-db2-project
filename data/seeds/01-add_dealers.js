
exports.seed = function(knex) {
  return knex('dealers').truncate()
    .then(function () {
      return knex('dealers').insert([
        {id: 1, vin: '1HGBH42JXMN208780', make: 'Toyota', model: 'Corolla', mileage: 98.000},
        {id: 2, vin: '1AMBH42JXMN208780', make: 'Mitsubishi', model: 'Lancer', mileage: 56.000},
        {id: 3, vin: '1HGBH42JXWH208780', make: 'Pontiac', model: 'Grand Am', mileage: 42.000}
      ]);
    });
};
