import { Component, OnInit, Input, Output } from '@angular/core';
import {HttpClient, HttpErrorResponse } from '@angular/common/http';

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
  server = 'http://130.61.93.213:3000/upload';

  constructor(private http: HttpClient) {
    this.loading = false;
   }

  onDeploy() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 3000);
    this.http.post(this.server, this.value).subscribe(
      res => {
        console.log(res);
      }, err => {
        console.log(err);
    });

  }

  ngOnInit() {
  }

}
