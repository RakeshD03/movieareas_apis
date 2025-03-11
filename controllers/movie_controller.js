  const movieIndex =(req, res) => {
    res.send('hello')
}  

const movieCreate = (req,res)=>{
 // id ,tittle ,des

 console.log(req.body);
 res.send(req.body)

}

const movieUpdate = (req,res)=>{
    res.send('hello')
}

const movieDelete = (req,res)=>{
    res.send('hello')
}


  module.exports = {
    movieIndex,movieCreate,movieUpdate,movieDelete,
  }
