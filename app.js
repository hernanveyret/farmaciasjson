const fs = require('fs');
const data = require('./farmacias.json')
const dataDb = require('./farmacias2024.json')


dataDb[2024][0][1].forEach(e=> {
  if(e.dateShift.includes(e.dateShift)){
     e.pharmacies.push(data[e.dateShift])
   }    
       })

       dataDb[2024][1][2].forEach(e=> {
      if(e.dateShift.includes(e.dateShift)){
      e.pharmacies.push(data[e.dateShift])
      }     
  })

  dataDb[2024][2][3].forEach(e=> {
      if(e.dateShift.includes(e.dateShift)){
      e.pharmacies.push(data[e.dateShift])
      }    
  })

  dataDb[2024][3][4].forEach(e=> {
    if(e.dateShift.includes(e.dateShift)){
    e.pharmacies.push(data[e.dateShift])
    }    
})

dataDb[2024][4][5].forEach(e=> {
    if(e.dateShift.includes(e.dateShift)){
    e.pharmacies.push(data[e.dateShift])
    }    
})

dataDb[2024][5][6].forEach(e=> {
    if(e.dateShift.includes(e.dateShift)){
    e.pharmacies.push(data[e.dateShift])
    }    
})

dataDb[2024][6][7].forEach(e=> {
    if(e.dateShift.includes(e.dateShift)){
    e.pharmacies.push(data[e.dateShift])
    }    
})

dataDb[2024][7][8].forEach(e=> {
    if(e.dateShift.includes(e.dateShift)){
    e.pharmacies.push(data[e.dateShift])
    }    
})

fs.writeFile('algo.json',JSON.stringify(dataDb, null, 2) ,(err) => {
    if(err){
        throw err;
    }
    console.log('archivo actualizado o creado')
})