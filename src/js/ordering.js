function orderByProps(obj, order) {
  const propList = Object.entries(obj)
    .filter(([key]) => !order.includes(key))
    .map(([key, value]) => ({ key, value }))
    .sort((a, b) => b.value - a.value);

  order.reverse().forEach((elem) => {
    propList.unshift({ key: elem, value: obj[elem] });
  });

  return propList;
}

export default orderByProps;
