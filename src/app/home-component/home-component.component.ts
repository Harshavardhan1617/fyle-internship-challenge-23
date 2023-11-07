import { Component } from '@angular/core';
import { UserInfo } from '../user-info';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.scss']
})
export class HomeComponentComponent {
  userinfo: UserInfo = {
    avatar_url: "https://avatars.githubusercontent.com/u/117501164?v=4",
    html_url: "https://github.com/Harshavardhan1617",
    name: "HarshaVardhan",
    location: null,
    bio: "Aspiring Web Developer",
    twitter_username: null
    }
}
