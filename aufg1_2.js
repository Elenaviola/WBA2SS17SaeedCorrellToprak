var fs = require('fs');
var chalk = require ('chalk');

fs.readFile('staedte.json', (err, data) => {
  if (err) throw err;
  var obj = JSON.parse(data.toString());

  obj.cities.forEach(function(cities){
    console.log(chalk.red('Name: '+cities.name));
    console.log(chalk.blue('Country: '+cities.country));
    console.log(chalk.yellow('Population: '+cities.population));
    console.log('----------------------');
});
});
