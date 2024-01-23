const ob = {
  foo: 2,
  bar: 3,
  bax: 3,
};
const keys = Object.keys(ob);
const values = Object.values(ob);
const delValue = 'dxb';
const newOb = {};
let indexDel = keys.indexOf(delValue);
keys.forEach((item, index) => {
  if (item === delValue) {
    keys.splice(indexDel, 1);
    values.splice(indexDel, 1);
  }
});
console.log(keys);
console.log(values);
for (let i = 0; i < keys.length; i++) {
  newOb[keys[i]] = values[i];
}
console.log(newOb);
