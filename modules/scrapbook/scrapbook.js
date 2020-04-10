const string = require("./string.json");
const element = require("./element.json");
const data = require("./data.json");

module.exports = (req, res) => setTimeout(() => {
  const pageNo = Number(req.query.page) || 1;
  const pageSize = Number(req.query.per_page);
  // const entities = Array(100).fill().map((_, index) => {
  //   const randomNumber = Math.round(Math.random());
  //   return randomNumber === 0 ? string : element;
  // });
  const newData = data.slice(0, 15);
  let entities = newData;
  if (pageSize) {
    entities = entities.slice((pageNo * pageSize) - pageSize, pageNo * pageSize);
  }
  res
    .status(200)
    .send({
      bookmarks: entities,
      page: pageNo,
      total: newData.length,
    })
}, 5000);