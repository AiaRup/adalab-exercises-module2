'use strict';

const calculateTotal = ({ milkUnit, turkeyUnit }) =>
  parseInt(milkUnit) + 2 * parseInt(turkeyUnit);

const getUnitsFromPage = () => {
  const milkUnits = document.querySelector('.milk-units').innerHTML;
  const turkeyUnits = document.querySelector('.turkey-units').innerHTML;
  return {
    milkUnit: milkUnits,
    turkeyUnit: turkeyUnits,
  };
};

const drawTotal = total => {
  document.querySelector('.total').innerHTML = total;
};

const updateTotal = () => drawTotal(calculateTotal(getUnitsFromPage()));

const updateUnits = (product, increment) => {
  const units = document.querySelector(`.${product}-units`).innerHTML;
  const newUnits = parseInt(units) + increment;
  document.querySelector(`.${product}-units`).innerHTML = newUnits;
};

const updateMilkUnits = increment => updateUnits('milk', increment);
const updateTurkeyUnits = increment => updateUnits('turkey', increment);

document.querySelector('.item-milk-minus').addEventListener('click', event => {
  updateMilkUnits(-1);
  updateTotal();
});
document.querySelector('.item-milk-plus').addEventListener('click', event => {
  updateMilkUnits(1);
  updateTotal();
});
document
  .querySelector('.item-turkey-minus')
  .addEventListener('click', event => {
    updateTurkeyUnits(-1);
    updateTotal();
  });
document.querySelector('.item-turkey-plus').addEventListener('click', event => {
  updateTurkeyUnits(1);
  updateTotal();
});

updateTotal();
