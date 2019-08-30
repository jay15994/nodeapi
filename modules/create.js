module.exports = (req, res) => {
  res.send({
    params_data: req.params,
    query_data: req.query,
  });
}