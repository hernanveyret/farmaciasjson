const fs = require('fs');
const data = require('./pharmacies.json')
const dataDb = require('./pharmaciesDb.json')
dataDb[2024][1][10].forEach(e=> {
  if(e.dateShift.includes(e.dateShift)){
     e.pharmacies.push(data[e.dateShift])
   }    
       })
       dataDb[2024][2][11].forEach(e=> {
      if(e.dateShift.includes(e.dateShift)){
      e.pharmacies.push(data[e.dateShift])
      }     
  })
  dataDb[2024][3][12].forEach(e=> {
      if(e.dateShift.includes(e.dateShift)){
      e.pharmacies.push(data[e.dateShift])
      }    
  })     
     console.log(dataDb[2024][0][9][0].pharmacies)
     console.log(dataDb[2024][1][10][0].pharmacies)
     console.log(dataDb[2024][2][11][0].pharmacies)
     console.log(dataDb[2024][3][12][0].pharmacies)

fs.writeFile('algo.json',JSON.stringify(dataDb, null, 2) ,(err) => {
    if(err){
        throw err;
    }
    console.log('archivo actualizado o creado')
})