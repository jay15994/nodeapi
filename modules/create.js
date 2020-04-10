const api = require("./config");

module.exports = (req, res) => {
  // const db = api.db("test");
  // db.createCollection("devices")
  // .then((dbRes) => {
  //   console.log(">>>>>>> db : ", dbRes);
  // })
  // .catch((err) => {
  //   console.log(">>>>>>> db Error : ", err);
  // });

  const collection = api.db("test").collection("devices");
  collection.insert([
    {
      title: 'MongoDB Overview', 
      description: 'MongoDB is no sql database',
      by: 'tutorials point',
      url: 'http://www.tutorialspoint.com',
      tags: ['mongodb', 'database', 'NoSQL'],
      likes: 100
   },
	
   {
      title: 'NoSQL Database', 
      description: "NoSQL database doesn't have tables",
      by: 'tutorials point',
      url: 'http://www.tutorialspoint.com',
      tags: ['mongodb', 'database', 'NoSQL'],
      likes: 20, 
      comments: [	
         {
            user:'user1',
            message: 'My first comment',
            dateCreated: new Date(2013,11,10,2,35),
            like: 0 
         }
      ]
   }
  ])
    .then((dbRes) => {
      console.log(">>>>>>> db : ", dbRes);
    })
    .catch((err) => {
      console.log(">>>>>>> db Error : ", err);
    });

  res.send({
    params_data: req.params,
    query_data: req.query,
  });
}