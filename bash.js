process.stdout.write('prompt > ')

process.stdin.on('data', (data) => {
    // const cmd = data.toString().trim()

    // process.stdout.write('You typed: ' + cmd)
    // process.stdout.write('\nprompt >')
    if (data.toString().trim()==='pwd'){
      // const workingDirectory=process.cwd().toString()
     process.stdout.write(`it worked!${process.cwd()}`)
    }
})
