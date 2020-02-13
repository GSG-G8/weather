
const filterData = (data, name) => { return data.filter((e) => e.toLowerCase().startsWith(name)).slice(0, 20); };

module.exports = filterData;
