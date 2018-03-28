import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { PackagesListComponent } from './packages-list/packages-list.component';
import { FormsModule } from '@angular/forms';
import { MatGridListModule, MatIconModule, MatRadioModule } from '@angular/material';
import { GeneratorComponent } from './generator/generator.component';
import { DeployFileGeneratorService } from './generator/deploy-file-generator.service';


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
    MatRadioModule
  ],
  providers: [DeployFileGeneratorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
