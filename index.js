var QRCode = require('qrcode')
 

QRCode.toString('Aya',{type:'terminal'}, function (err, url) {
    console.log(url)
  })

  QRCode.toFile('output.png', 'hello world', {
    color: {
      dark: '#00F',  // Blue dots
      light: '#0000' // Transparent background
    }
  }, function (err) {
    if (err) throw err
    console.log('done')
  })