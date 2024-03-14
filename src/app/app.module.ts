import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {UsersListComponent} from './users/components/users-list/users-list.component';
import {UserCardComponent} from './users/components/user-card/user-card.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatToolbarModule} from '@angular/material/toolbar';
import {CreateEditUserComponent} from './users/components/create-edit-user/create-edit-user.component';
import {MatDialogModule} from '@angular/material/dialog';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatIconModule} from "@angular/material/icon";
import {SearchUserPipe} from './users/pipes/search-user.pipe';
import {API_URL} from "./users/tokens/api-url.token";
import {environment} from "../environments/environment.prod";


@NgModule({
  declarations: [
    AppComponent,
    UsersListComponent,
    UserCardComponent,
    CreateEditUserComponent,
    SearchUserPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatToolbarModule,
    MatDialogModule,
    ReactiveFormsModule,
    FormsModule,
    MatIconModule,

  ],
  exports: [UsersListComponent],
  providers: [{
    provide: API_URL,
    useValue: environment.apiURL
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
