import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DeployFileGeneratorService } from '../generator/deploy-file-generator.service';

export interface IPackage {
  cols: number;
  rows: number;
  img: string;
  state: string;
  name: string;
  version: string;
  picked: boolean;
  require: string;
}

export interface IPackageList {
  packages: IPackage[];
  type: string;
  buildScript: string;
  runTimeScript: string;
  port: string;
  artifacts: string;
}

@Component({
  selector: 'app-packages-list',
  templateUrl: './packages-list.component.html',
  styleUrls: ['./packages-list.component.css']
})
export class PackagesListComponent implements OnInit {
  @Output() genereted = new EventEmitter<string>();
  packages: IPackage[];
  deployTo: string;
  build: string;
  run: string;
  port: string;
  artifacts: string;
  visability: boolean;
  value: string;
  options = [
    'salt',
    'docker'
  ];
  constructor(private deployService: DeployFileGeneratorService) {
    this.build = '';
    this.run = '';
    this.port = '';
    this.artifacts = '';
    this.packages = [
      {
        name: 'python',
        cols: 1,
        rows: 1,
        img: '../../assets/python.png',
        state: 'python-package',
        version: '2.7',
        picked: false,
        require: null
      },
      {
        name: 'mongo',
        cols: 1,
        rows: 1,
        img: '../../assets/mongodb.png',
        state: 'mongo-package',
        version: '3.6',
        picked: false,
        require: null
      },
      {
        name: 'jenkins',
        cols: 1,
        rows: 1,
        img: '../../assets/jenkins.png',
        state: 'jenkins-package',
        version: '2.7',
        picked: false,
        require: 'java-package'
      },
      {
        name: 'gitlab/gitlab-ce',
        cols: 1,
        rows: 1,
        img: '../../assets/gitlab.png',
        state: 'gitlab-package',
        version: '3.6',
        picked: false,
        require: null
      },
      {
        name: 'java',
        cols: 1,
        rows: 1,
        img: '../../assets/java.png',
        state: 'java-package',
        version: '2.7',
        picked: false,
        require: null
      },
      {
        name: 'node',
        cols: 1,
        rows: 1,
        img: '../../assets/node.png',
        state: 'node-package',
        version: '3.6',
        picked: false,
        require: null
      },
      {
        name: 'nginx',
        cols: 1,
        rows: 1,
        img: '../../assets/nginx.png',
        state: 'nginx-package',
        version: '3.6',
        picked: false,
        require: null
      },
      {
        name: 'notepad++',
        cols: 1,
        rows: 1,
        img: '../../assets/notepad.png',
        state: 'notepadd-package',
        version: '3.6',
        picked: false,
        require: null
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
    const packageList: IPackageList = {packages: pickedPackges, type: this.deployTo,
                                       buildScript: this.build, runTimeScript: this.run,
                                       port: this.port, artifacts: this.artifacts};
    console.log(packageList);
    const script = this.deployService.generatorRouting(packageList);
    this.genereted.emit(script);
    this.value = script;
    this.visability = true;
  }

  ngOnInit() {
  }
}
