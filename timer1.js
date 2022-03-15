console.log(process.argv)

for (let x = 2; x< process.argv.length;x++){
  setTimeout(() => {
    process.stdout.write('\x07');
    console.log("hey");
    },process.argv[x]*1000)
}
