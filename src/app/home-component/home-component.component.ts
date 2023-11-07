import { Component } from '@angular/core';
import { UserInfo } from '../user-info';
import { Repositorylist } from '../repositorylist';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.scss']
})
export class HomeComponentComponent {
  userinfo: UserInfo = {
    avatar_url: "https://avatars.githubusercontent.com/u/1202528?v=4",
    html_url: "https://github.com/Harshavardhan1617",
    name: "HarshaVardhan",
    location: "Hyderabad",
    bio: "Aspiring Web Developer Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, porro sit laudantium.",
    twitter_username: "harshabird34"
  }

  repolist: Repositorylist[] = [

    {
      "id": 99453963,
      "name": "aggregator-app",
      "description": "serverless function with api aggregator with azure",
      "topics": []
    },
    {
      "id": 266203293,
      "name": "all-contributors",
      "description": "✨ Recognize all contributors, not just the ones who push code ✨",
      "topics": []
    },
    {
      "id": 694911897,
      "name": "analyze-and-generate-images-with-Azure-AI",
      "description": null,
      "topics": []
    },
    {
      "id": 242366845,
      "name": "angular",
      "description": "One framework. Mobile & desktop.",
      "topics": []
    },
    {
      "id": 49308796,
      "name": "angular-2-first-look-launcher",
      "description": "deprecated",
      "topics": []
    },
    {
      "id": 252189987,
      "name": "angular-architecture",
      "description": "Examples of Angular Architecture Concepts",
      "topics": []
    },
    {
      "id": 111557274,
      "name": "angular-cli",
      "description": "CLI tool for Angular",
      "topics": []
    },
    {
      "id": 97331634,
      "name": "angular-cosmosdb",
      "description": "Cosmos DB, Express.js, Angular, and Node.js app",
      "topics": []
    },
    {
      "id": 80428917,
      "name": "angular-event-view-cli",
      "description": "Angular Demo with a Little bit of a lot of features",
      "topics": [
        "angular",
        "typescript"
      ]
    },
    {
      "id": 91488884,
      "name": "angular-expiring-http-cache",
      "description": null,
      "topics": []
    },
    {
      "id": 50220494,
      "name": "angular-first-look-examples",
      "description": "angular first look for pluralsight",
      "topics": []
    },
    {
      "id": 70656053,
      "name": "angular-first-look-hosted",
      "description": "Hosted Code from Pluralsight Course \"Angular First Look\"",
      "topics": []
    },
    {
      "id": 240809609,
      "name": "angular-lazy-load-demo",
      "description": "Lazy loading Angular components",
      "topics": [
        "angular",
        "html",
        "typescript"
      ]
    },
    {
      "id": 112114114,
      "name": "angular-ngrx-data",
      "description": "Angular with ngRx and experimental ngrx-data helper",
      "topics": [
        "angular",
        "ngrx",
        "rxjs"
      ]
    },
    {
      "id": 12898794,
      "name": "Angular-NuGet",
      "description": "NuGet Repo for Angular Packages",
      "topics": []
    },
    {
      "id": 252249810,
      "name": "angular-preload-and-interceptors",
      "description": null,
      "topics": [
        "angular",
        "http",
        "javascript",
        "typescript"
      ]
    },
    {
      "id": 106325395,
      "name": "angular-quickstart-lib",
      "description": null,
      "topics": []
    },
    {
      "id": 199008956,
      "name": "angular-rxjs-shared-examples",
      "description": "rxjs examples",
      "topics": []
    },
    {
      "id": 22362099,
      "name": "angular-styleguide",
      "description": "Angular Style Guide: A starting point for Angular development teams to provide consistency through good practices.",
      "topics": []
    },
    {
      "id": 41736138,
      "name": "angular-tour-of-heroes",
      "description": "Angular - Tour of Heroes - The Next Step after Getting Started",
      "topics": []
    },
    {
      "id": 359960994,
      "name": "angular-what-if",
      "description": null,
      "topics": []
    },
    {
      "id": 14892983,
      "name": "angular.breeze.storagewip",
      "description": "Save Work in Progress to Local Storage for Angular and Breeze apps",
      "topics": []
    },
    {
      "id": 58071014,
      "name": "angular2-force",
      "description": "ngConf 2016 live coding demo",
      "topics": []
    },
    {
      "id": 160101578,
      "name": "AngularWorkshopLabs",
      "description": "Angular and TypeScript Workshop Labs",
      "topics": []
    },
    {
      "id": 122777681,
      "name": "awesome-angular-workshop",
      "description": "Angular: The Awesome Parts - Workshop",
      "topics": []
    },
    {
      "id": 216059528,
      "name": "awesome-frameworkless",
      "description": "A collection of awesome things regarding Frameworkless",
      "topics": []
    },
    {
      "id": 215315726,
      "name": "awesome-lit-html",
      "description": "A curated list of awesome lit-html resources.",
      "topics": []
    },
    {
      "id": 207696680,
      "name": "awesome-vue",
      "description": "🎉 A curated list of awesome things related to Vue.js",
      "topics": []
    },
    {
      "id": 536224310,
      "name": "azure-docs",
      "description": "Open source documentation of Microsoft Azure",
      "topics": []
    }
  ]
}
