import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';
import { UserSearchComponent } from './user-search/user-search.component';

@Component({
  selector: 'app-root',
  // imports: [
  //   UserSearchComponent
  // ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  constructor(
    private apiService: ApiService
  ) {}

  ngOnInit() {
    this.apiService.getUser('johnpapa').subscribe(console.log);
  }
}
