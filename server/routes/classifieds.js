
'use strict';

const express = require('express');

const router = express.Router();

const knex = require('../../knex');

router.get('/', function(req, res, next) {
  knex('classifieds')
  .select('id','title', 'description', 'price', 'item_image', 'created_at')
  .then((classifiedsFromKnex) => {
    res.json(classifiedsFromKnex);
  })
});

router.get('/:id', function(req, res, next) {
  let id = req.params.id
  knex('classifieds')
  .select('id','title', 'description', 'price', 'item_image')
  .where('id', id)
  .then((classifiedsFromKnex) => {
    res.json(classifiedsFromKnex[0]);
  })
});

router.post('/', function(req, res, next) {
  knex('classifieds')
  .returning(['id','title', 'description', 'price', 'item_image', 'created_at'])
  .insert(params(req))
  .then((insertedClassified) => {
    res.json(insertedClassified[0])
  })
})

router.patch('/:id', function(req, res, next) {
    knex('classifieds')
      .where({id: req.params.id})
      .first()
      .returning(['id','title', 'description', 'price', 'item_image'])
      .update(params(req))
      .then((result) => {
        res.json(result[0]);
      })
})

router.delete('/:id', function(req, res, next) {
  knex('classifieds')
  .where({id: req.params.id})
  .del()
  .then(() => res.end())
    .catch(err => next(err))
})

function params(req) {
  return {
    title: req.body.title,
    description: req.body.description,
    price: req.body.price,
    item_image: req.body.item_image,
  }
}
//
// router.patch('/:id', validate, (req, res, next) => {
//   knex('posts')
//     .update(params(req))
//     .where({id: req.params.id})
//     .returning('*')
//     .then(posts => res.json(posts[0]))
//     .catch(err => next(err))
// })
//
// router.delete('/:id', (req, res, next) => {
//   knex('posts')
//     .del()
//     .where({id: req.params.id})
//     .then(() => res.end())
//     .catch(err => next(err))
// })

module.exports = router;
