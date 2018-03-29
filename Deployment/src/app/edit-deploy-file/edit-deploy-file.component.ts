import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-edit-deploy-file',
  templateUrl: './edit-deploy-file.component.html',
  styleUrls: ['./edit-deploy-file.component.css']
})
export class EditDeployFileComponent implements OnInit {

  @Input() visable: boolean;
  @Input() value: string;
  @Input() type: string;
  loading: boolean;

  constructor() {
    this.loading = false;
   }

  onDeploy() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 3000);
  }

  ngOnInit() {
  }

}
