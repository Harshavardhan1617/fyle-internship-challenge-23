import { Component, Input } from '@angular/core';
import { Repositorylist } from '../repositorylist';

@Component({
  selector: 'app-repository-list',
  templateUrl: './repository-list.component.html',
  styleUrls: ['./repository-list.component.scss']
})
export class RepositoryListComponent {
  @Input() repolist!: Repositorylist;
}
