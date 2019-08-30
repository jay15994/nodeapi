module.exports = (req, res) => {
  res.send({
    id: req.params.id,
    params_data: req.body,
  });
}