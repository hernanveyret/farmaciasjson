const fs = require('fs');
const data = require('./farmacias.json')
const dataDb = require('./datafarmacias.json')

// Cambiar el año en dataDb y poner el que corresponda segun el archivo datafarmacias.json
dataDb[2025].forEach((el,i) => {
    //console.log(el[i+1])
        el[i+1].forEach(ele => {
            //console.log(ele)
            if(ele.dateShift.includes(ele.dateShift)){
               // ele.pharmacies.push(data[ele.dateShift])
               
               for(let aa =0; aa < data[ele.dateShift].length; aa++){
                  // console.log('Cada farmacia',data[ele.dateShift][aa])
                ele.pharmacies.push(data[ele.dateShift][aa])                
                }
            }
        })
  })

fs.writeFile('nuevoCronograma.json',JSON.stringify(dataDb, null, 2) ,(err) => {
    if(err){
        throw err;
    }
    console.log('Nuevo cronograma creado o actualizado')
})
