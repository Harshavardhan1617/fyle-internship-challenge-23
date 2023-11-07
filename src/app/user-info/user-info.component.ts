import { Component, Input } from '@angular/core';
import { UserInfo } from '../user-info';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent {
  @Input() userinfo!: UserInfo;
}
