const axios = require('axios').default

exports.vue = async function (req, res){
await axios.get('https://spreadsheets.google.com/feeds/cells/'+req.params.id+'/1/public/full?alt=json')
  .then(function (response) {
    // handle success
    const result = filtreData(response.data.feed.entry)
    res.status(200).json({
        sheet: response.data.feed.entry,
        fiche: result
      });
  }).catch(function(e){
      console.log(e)
      res.status(400).json({
        message: e
      });
  })
}

function filtreData(data,type){
  var semaine = []
  var apprenants = []
  var formateurs = []
  var apprenant = {nom: '', prenom: ''}
  var signature = []
  for (let index = 0; index < 10; index++) {
    signature.push({signature: ''})
    
  }
  data.forEach(element => {
    if(!limite(element.gs$cell,'semaine')){
      semaine.push(element.gs$cell.$t)
    }else if(!limite(element.gs$cell,'apprenants')){
      if(element.gs$cell.col == '1'){
        apprenant.nom = element.gs$cell.$t
      }else{
        apprenant.prenom = element.gs$cell.$t
        apprenant.signatures = signature
        apprenants.push(apprenant)
        apprenant = {nom: '', prenom: '', signatures: signature}
      }  
    }else if(!limite(element.gs$cell,'formateurs')){
      formateurs.push(element.gs$cell.$t)
    }
  });
  
  return {
    semaine: semaine,
    apprenants: apprenants,
    formateurs: formateurs
  }
}

function limite(data,type){
  var result;
  switch (type) {
    case 'semaine':
      if(data.row != '1'){
        result = true
      }else{
        result = false
      }
      break;
    case 'apprenants':
      if(data.col > 2){
        result = true
      }else{
        result = false
      }
      break;
    
    case 'formateurs':
      if(data.col < 2){
        result = true
      }else{
        result = false
      }
      break;
  
    default:
      break;
  }
  return result


}
