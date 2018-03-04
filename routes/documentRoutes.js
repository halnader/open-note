const express = require('express');
const mongoose = require('mongoose');

const User = mongoose.model('User');
const Documents = mongoose.model('Documents');

module.exports = app => {
  app.get('/api/documents/:id', function(req, res) {
    Documents.findById(req.params.id, function(err, foundDocument) {
      if(err) {
        console.log(err);
      } else {
        res.send(foundDocument);
      }
    })
  });
}
