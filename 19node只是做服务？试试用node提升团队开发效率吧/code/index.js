#!/user/bin/env node
var cm = require('commander');
var inquirer = require('inquirer');
var getfill = require('./bin/getfill.js');
cm.version("1.0.0","-v --version");
cm.command('init <name>').action((name) =>{
    inquirer.prompt({
        type:'input',
        name:'projectname',
        message:'你的项目叫什么名字'
    }).then(function(answer) {
        getfill(answer.projectname);
        // console.log(answer);
    })
})
cm.parse(process.argv);
// console.log(1);