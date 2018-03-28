import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { PackagesListComponent } from './packages-list/packages-list.component';
import { FormsModule } from '@angular/forms';
import { MatGridListModule, MatIconModule, MatRadioModule } from '@angular/material';
import {MatButtonModule} from '@angular/material/button';
import { NgProgressModule } from 'ngx-progressbar';
import { GeneratorComponent } from './generator/generator.component';
import { DeployFileGeneratorService } from './generator/deploy-file-generator.service';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    PackagesListComponent,
    GeneratorComponent
  ],
  imports: [
    BrowserModule,
    MatGridListModule,
    MatIconModule,
    FormsModule,
    MatRadioModule,
    MatButtonModule,
    NgProgressModule,
    HttpClientModule,
    HttpModule,
    MatRadioModule
  ],
  providers: [DeployFileGeneratorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
