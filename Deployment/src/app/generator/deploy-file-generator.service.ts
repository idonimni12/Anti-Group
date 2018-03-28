import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPackage, IPackageList } from '../packages-list/packages-list.component';

@Injectable()
export class DeployFileGeneratorService {

  constructor(private http: HttpClient) { }

  generatorRouting(packageList: IPackageList) {
    if (packageList.type === 'docker') {
      console.log('Generating Docker file...');
      this.generateDockerFile(packageList.packages, packageList.buildScript,
                              packageList.runTimeScript, packageList.port);
    } else if (packageList.type === 'salt') {
      console.log('Generating Salt file...');
      this.generateSaltFile(packageList.packages);
    } else {
      console.log('Type not supported');
    }
  }

  private generateSaltFile(packageList: IPackage[]) {
    let statefile = 'include:\n';
    for (let i = 0; i < packageList.length; i++) {
      statefile += '  - ' + packageList[i].state + '\n';
      if (packageList[i].require) {
        statefile += '  - ' + packageList[i].require + '\n';
      }
    }
    console.log(statefile);
  }

  private generateDockerFile(packageList: IPackage[], buildScript: string,
                             runTimeScript: string, port: string) {
    let dockerfile = '';
    for (let i = 0; i < packageList.length; i++) {
      dockerfile += 'FROM ' + packageList[i].name + ':latest\n';
    }
    if (buildScript !== '') {
      dockerfile += 'RUN ' + buildScript + '\n';
    }
    if (runTimeScript !== '') {
      dockerfile += 'CMD ' + runTimeScript + '\n';
    }
    if (port !== '') {
      dockerfile += 'EXPOSE ' + port + '\n';
    }

    console.log(dockerfile);

  }

}
