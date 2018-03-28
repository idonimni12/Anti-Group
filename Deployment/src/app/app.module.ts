import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { PackagesListComponent } from './packages-list/packages-list.component';
import { FormsModule } from '@angular/forms';
import { MatGridListModule, MatIconModule, MatRadioModule } from '@angular/material';
import {MatButtonModule} from '@angular/material/button';
import { NgProgressModule } from 'ngx-progressbar';
import { GeneratorComponent } from './generator/generator.component';


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
    NgProgressModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
