import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ProtectedComponent } from './protected/protected.component';
import { WelocmeComponent } from './welocme/welocme.component';
import { UsersComponent } from './users/users.component';
import { FormsModule } from '@angular/forms';
import { DataPipe } from './data.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SortableModule } from 'ngx-bootstrap/sortable';

@NgModule({
  declarations: [
    AppComponent,
    ProtectedComponent,
    WelocmeComponent,
    UsersComponent,
    DataPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    SortableModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
