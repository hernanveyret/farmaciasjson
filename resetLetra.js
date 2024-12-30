const fs = require('fs');
let urlPlantillaBd = require('./datafarmacias2024.json')
    
urlPlantillaBd[2024].forEach((e,i) => {
  //console.log(e[i+1])

    e[i+1].forEach(letra => {
    letra.dateShift = ""
  })

})

fs.writeFile('resetLetra.json',JSON.stringify(urlPlantillaBd, null, 2) ,(err) => {
  if(err){
      throw err;
  }
  console.log('Las letras de los dias se reseteo correctamente')
})  