const axios = require('axios').default

exports.vue = async function (req, res){
await axios.get('https://spreadsheets.google.com/feeds/cells/1birYMFSaYsIZZLC_m1zNXWs2Ir4s_Hfip9Rh4OUxckk/1/public/full?alt=json')
  .then(function (response) {
    // handle success
    console.log(response.data);
    const result = response.data
    res.json({
        message: result
      });
  }).catch(function(e){
      console.log(e)
      res.json({
        message: e
      });
  })
}
