const ora = require('ora');
const getWeather = require('../utils/weather');

module.exports = async (args) => {
   const spinner = ora().start()
   try{
        const loaction = args.loaction || args.loaction
        const weather = await getWeather(loaction)
        spinner.stop()
        console.log(`Current conditions in ${location}:`)
        console.log(`\t${weather.condition.temp}° ${weather.condition.text}`)
   }catch (err){
        spinner.stop()
        console.error(err)
   }
}