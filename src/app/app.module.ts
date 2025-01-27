import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppComponent } from './app.component';
import { HttpClientModule } from  '@angular/common/http';
import { UserSearchComponent } from './user-search/user-search.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { RepositoryListComponent } from './repository-list/repository-list.component';
import { RepositoryDescriptionComponent } from './repository-description/repository-description.component';
import { HomeComponentComponent } from './home-component/home-component.component';

@NgModule({
  declarations: [
    AppComponent,
    UserSearchComponent,
    UserInfoComponent,
    RepositoryListComponent,
    RepositoryDescriptionComponent,
    HomeComponentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
