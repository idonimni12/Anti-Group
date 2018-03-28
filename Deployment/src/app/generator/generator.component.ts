import { Component, OnInit } from '@angular/core';
import { IPackage, IPackageList } from '../packages-list/packages-list.component';

@Component({
  selector: 'app-generator',
  templateUrl: './generator.component.html',
  styleUrls: ['./generator.component.css']
})
export class GeneratorComponent implements OnInit {
  private masterServer = '130.61.93.213';

  constructor() {

  }

  generatorRouting(packageList: IPackageList) {
    if (packageList.type === 'docker') {
      console.log('Generating Docker file...');
      this.generateDockerFile(packageList.packages);
    } else if (packageList.type === 'salt') {
      console.log('Generating Salt file...');
      this.generateSaltFile(packageList.packages);
    } else {
      console.log('Type not supported');
    }
  }

  readFile(file) {
    const raw = new XMLHttpRequest(); // create a request
    raw.open('GET', file, false); // open file
    raw.onreadystatechange = function () { // file is ready to read
      if (raw.readyState === 4) {
        if (raw.status === 200 || raw.status === 0) {
          const allText = raw.responseText;
          alert(allText); // can be also console.logged, of course.
        }
      }
    };
    raw.send(null); // return control
  }

  generateSaltFile(packageList: IPackage[]) {
    let saltFileTemplate = this.readFile('../files/install_package.txt');
  }

  generateDockerFile(packageList: IPackage[]) {
    let dockerfile = '';
    for (let i = 0; i < packageList.length; i++) {
      dockerfile += 'FROM ' + packageList[i].name + ':@latest\n';
    }
    console.log(dockerfile);
  }

  ngOnInit() {

  }
}
