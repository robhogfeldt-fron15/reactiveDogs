
const Dog = require('../models/dog');

exports.postDogs = function(req, res) {
  console.log(req.body.image);
  const dog = new Dog();
  dog.name = req.body.name;
  dog.merits = req.body.merits;
  if (!req.body.image) {
    dog.image =  'http://image.spreadshirtmedia.com/image-server/v1/designs/12337518,width=200,height=200';
  } else {
    dog.image = 'http://image.spreadshirtmedia.com/image-server/v1/designs/12337518,width=200,height=200';
  }

  console.log(dog);
  dog.save(function(err) {
    if (err)
      res.send(err);

    res.json({ message: 'dog added !', data: dog });
  });
};


exports.getDogs = function(req, res) {
  Dog.find(function(err, dogs) {
    if (err)
      res.send(err);

    res.json(dogs);
  });
};


exports.getDog = function(req, res) {
  Dog.findById(req.params.dog_id, function(err, dog) {
    if (err)
      res.send(err);

    res.json(dog);
  });
};


exports.putDog = function(req, res) {
  Dog.findById(req.params.dog_id, function(err, dog) {
    if (err)
      res.send(err);

    dog.image = req.body.image;


    dog.save(function(errs) {
      if (err)
        res.send(errs);

      res.json(dog);
    });
  });
};


exports.deleteDog = function(req, res) {
  Dog.findByIdAndRemove(req.params.dog_id, function(err) {
    if (err)
      res.send(err);

    res.json({ message: 'Deleted!' });
  });
};
