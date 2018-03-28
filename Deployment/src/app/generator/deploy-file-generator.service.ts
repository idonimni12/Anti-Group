import { Injectable } from '@angular/core';
import { IPackage, IPackageList } from '../packages-list/packages-list.component';

@Injectable()
export class DeployFileGeneratorService {

  constructor() { }

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

  private readFile(file) {
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

  private generateSaltFile(packageList: IPackage[]) {
    let saltFileTemplate = this.readFile('../files/install_package.txt');
  }

  private generateDockerFile(packageList: IPackage[]) {
    let dockerfile = '';
    for (let i = 0; i < packageList.length; i++) {
      dockerfile += 'FROM ' + packageList[i].name + ':latest\n';
    }
    console.log(dockerfile);
  }

}
