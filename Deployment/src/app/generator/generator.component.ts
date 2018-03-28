import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-generator',
  templateUrl: './generator.component.html',
  styleUrls: ['./generator.component.css']
})
export class GeneratorComponent implements OnInit {
  private masterServer = '130.61.93.213';

  constructor() {

  }

  ngOnInit() {
    function generatorRouting(packageList) {
      packageList = {server: 'ez', packages: [{'_id': 1, 'name': 'abc'}, {'_id': 2, 'name': 'lol'}], type: 'salt'};
      if (packageList['type'] === 'docker') {
        console.log('Generating Docker file...');
        generateDockerFile(packageList['packages']);
      } else if (packageList['type'] === 'salt'){
        console.log('Generating Salt file...');
        generateSaltFile(packageList['packages']);
      } else {
        console.log('Type not supported')
      }
    }

    function readFile(file){
      let raw = new XMLHttpRequest(); // create a request
      raw.open('GET', file, false); // open file
      raw.onreadystatechange = function () { // file is ready to read
        if (raw.readyState === 4) {
          if (raw.status === 200 || raw.status === 0) {
            let allText = raw.responseText;
            alert(allText); // can be also console.logged, of course.
          }
        }
      };
      raw.send(null); // return control
    }

    function generateSaltFile(packageList) {
      let saltFileTemplate = readFile('../files/install_package.txt');
    }

    function generateDockerFile(packageList) {

    }


    generatorRouting(2);
  }
}
