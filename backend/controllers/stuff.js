const Thing = require('../models/thing')

// ---- Début CRUD  ----

exports.createThing = (req, res, next) => {
  const thing = new Thing({
    title: req.body.title,
    description: req.body.description,
    imageUrl: req.body.imageUrl,
    price: req.body.price,
    userId: req.body.userId
  });
  thing.save().then(
    () => {
    // Création de ressources avec le code 201
      res.status(201).json({
        message: 'Post saved successfully!'
      })
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      })
    }
  )
}

// Récupération de l'id de l'objet grâce à "findOne()" pour trouver le "Thing" ayant le même "_id" que le paramètre de la requête
exports.getOneThing = (req, res, next) => {
  Thing.findOne({
    _id: req.params.id
  }).then(
    (thing) => {
      res.status(200).json(thing);
    }
  ).catch(
    (error) => {
      res.status(404).json({
        error: error
      })
    }
  )
}

// Mise à jour du "Thing" (premier argument) grâce à "updateOne()" qui permet de modifier nos objets
exports.modifyThing = (req, res, next) => {
  const thing = new Thing({
    _id: req.params.id,
    title: req.body.title,
    description: req.body.description,
    imageUrl: req.body.imageUrl,
    price: req.body.price,
    userId: req.body.userId
  })
  // Utilisation du paramètre "id" remplacé par "Thing" passé comme second argument
  Thing.updateOne({_id: req.params.id}, thing).then(
    () => {
      res.status(201).json({
        message: 'Thing updated successfully!'
      })
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      })
    }
  )
}

// On passe un objet à "deleteOne()" correspondant au document à supprimer
exports.deleteThing = (req, res, next) => {
  Thing.deleteOne({_id: req.params.id}).then(
    () => {
      res.status(200).json({
        message: 'Deleted!'
      })
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      })
    }
  )
}

exports.getAllStuff = (req, res, next) => {
  Thing.find().then(
    (things) => {
      res.status(200).json(things);
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      })
    }
  )
}

// ---- FIN CRUD (Create, Read, Update, Delete) ----