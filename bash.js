const pwd = require('./pwd')
const ls= require('./ls')


process.stdout.write('prompt > ')
    process.stdin.on('data', (data) => {
    // const cmd = data.toString().trim()

    // process.stdout.write('You typed: ' + cmd)
    // process.stdout.write('\nprompt >')
    if (data.toString().trim()==='pwd'){
        pwd()
    } else if (data.toString().trim()=== 'ls'){
        ls()
    }
})



