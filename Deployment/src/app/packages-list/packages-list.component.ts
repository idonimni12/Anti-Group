import { Component, OnInit } from '@angular/core';
import { DeployFileGeneratorService } from '../generator/deploy-file-generator.service';

export interface IPackage {
  cols: number;
  rows: number;
  img: string;
  id: string;
  name: string;
  version: string;
  picked: boolean;
}

export interface IPackageList {
  packages: IPackage[];
  type: string;
}

@Component({
  selector: 'app-packages-list',
  templateUrl: './packages-list.component.html',
  styleUrls: ['./packages-list.component.css']
})
export class PackagesListComponent implements OnInit {

  packages: IPackage[];
  deployTo: string;
  options = [
    'salt',
    'docker'
  ];
  constructor(private deployService: DeployFileGeneratorService) {
    this.packages = [
      {
        name: 'python',
        cols: 1,
        rows: 1,
        img: '../../assets/python.png',
        id: '',
        version: '2.7',
        picked: false
      },
      {
        name: 'mongo',
        cols: 1,
        rows: 1,
        img: '../../assets/mongodb.png',
        id: '',
        version: '3.6',
        picked: false
      },
      {
        name: 'jenkins',
        cols: 1,
        rows: 1,
        img: '../../assets/jenkins.png',
        id: '',
        version: '2.7',
        picked: false
      },
      {
        name: 'gitlab/gitlab-ce',
        cols: 1,
        rows: 1,
        img: '../../assets/gitlab.png',
        id: '',
        version: '3.6',
        picked: false
      },
      {
        name: 'java',
        cols: 1,
        rows: 1,
        img: '../../assets/java.png',
        id: '',
        version: '2.7',
        picked: false
      },
      {
        name: 'node',
        cols: 1,
        rows: 1,
        img: '../../assets/node.png',
        id: '',
        version: '3.6',
        picked: false
      },
      {
        name: 'notepad++',
        cols: 1,
        rows: 1,
        img: '../../assets/notepad.png',
        id: '',
        version: '3.6',
        picked: false
      }
    ];

  }

  onPick(pack: IPackage) {
    for (let i = 0; i < this.packages.length; i++) {
      if (this.packages[i].name === pack.name) {
        this.packages[i].picked = !this.packages[i].picked;
      }

    }
  }

  onGenerateClick() {
    const pickedPackges: IPackage[] = [];
    for (let i = 0; i < this.packages.length; i++) {
      if (this.packages[i].picked) {
        pickedPackges.push(this.packages[i]);
      }
    }
    const packageList: IPackageList = {packages: pickedPackges, type: this.deployTo};
    console.log(packageList);
    this.deployService.generatorRouting(packageList);
  }


  fileChange(event) {
    const fileList: FileList = event.target.files;
    if (fileList.length > 0) {
        const file: File = fileList[0];
        const formData: FormData = new FormData();
        formData.append('uploadFile', file, file.name);
    }
  }

  ngOnInit() {

  }

}
