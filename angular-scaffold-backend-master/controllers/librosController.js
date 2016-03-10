var libro = require('../schemas/libro');

exports.getLibros = {
  auth: {
    mode:'required',
    strategy:'session',
    scope: ['admin', 'regular']
  },
  handler: function(request, reply){
    var libros = libro.find({});
    reply(libros);
  }
}

exports.getLibro = {
  auth: {
    mode:'required',
    strategy:'session',
    scope: ['admin','regular']
  },
  handler: function(request, reply){
    libro.findById(request.params.librosId, function(err, libros) {
      if (err)
        reply(err);

      reply(libros);
    });
  }
}

exports.updateLibro = {
  auth: {
    mode:'required',
    strategy: 'session',
    scope: ['admin']
  },
  handler: function(request,reply){
    /*
    libro.findOneAndUpdate({"_id":request.params.librosId}, function(err, libros) {
      if (err)
        reply(err);
      if(request.payload.title!=null)
        libros.title = request.payload.title;
      if(request.payload.editorial!=null)
        libros.editorial = request.payload.editorial;
      if(request.payload.year!=null)
        libros.year = request.payload.year;
      if(request.payload.author!=null)
        libros.author = request.payload.author;
      libros.save();
      reply(libros);
    });
    */
    if(request.payload.title != null){
      libro.findOneAndUpdate(
        {"_id":request.params.librosId},
        {
          title:request.payload.title,
        },
        {new:true},
        function(err, person) {
          if (err) {
            console.log('got an error' + err);
          }
        }
      )
    }
    if(request.payload.editorial != null){
      libro.findOneAndUpdate(
        {"_id":request.params.librosId},
        {
          editorial:request.payload.editorial,
        },
        {new:true},
        function(err, person) {
          if (err) {
            console.log('got an error' + err);
          }
        }
      )
    }
    if(request.payload.year != null){
      libro.findOneAndUpdate(
        {"_id":request.params.librosId},
        {
          year:request.payload.year,
        },
        {new:true},
        function(err, person) {
          if (err) {
            console.log('got an error' + err);
          }
        }
      )
    }
    if(request.payload.author != null){
      libro.findOneAndUpdate(
        {"_id":request.params.librosId},
        {
          author:request.payload.author,
        },
        {new:true},
        function(err, person) {
          if (err) {
            console.log('got an error' + err);
          }
        }
      )
    }
    reply("ok");

    //reply("ok");
    }


}

exports.createLibro = {
  auth: {
    mode:'required',
    strategy: 'session',
    scope: ['admin']
  },
  handler: function(request,reply){
    var newLibro = new libro({
      title: request.payload.title,
      editorial: request.payload.editorial,
      year: request.payload.year,
      author: request.payload.author
    });
    newLibro.save();
    console.log('Se guardo el libro' + newLibro);
    return reply('ok');
  }
}

exports.deleteLibro = {
  auth: {
    mode:'required',
    strategy: 'session',
    scope: ['admin']
  },
  handler: function(request,reply){
    libro.findByIdAndRemove(request.params.librosId, function(err, libros) {
      if (err)
        reply(err);

      reply("libro fue borrado");
    });
  }
}
