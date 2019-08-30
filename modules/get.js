module.exports = (req, res) => {
  res.send([
    {
      id: 12,
      name: "test",
    },
    {
      id: 22,
      name: "test2",
    },
    {
      id: 32,
      name: "test3",
    },
  ])
}