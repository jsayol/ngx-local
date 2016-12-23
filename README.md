# ngx-local
[![npm version](https://badge.fury.io/js/ngx-local.svg)](https://www.npmjs.com/package/ngx-local)

[MIT License](LICENSE.txt)

Structural directive for Angular 2.x+ to locally store a value in a template input variable.

This is particularly useful when used in conjunction with the 'async' pipe:
```html
<div *ngxLocal="httpUser$ | async; let user">
  <div>id: {{ user?.id }}</div>
  <div>name: {{ user?.name }}</div>
  <div>username: {{ user?.username }}</div>
  <div>email: {{ user?.email }}</div>
</div>
```


## Installation

Via npm
```
npm install ngx-local --save
```

Via yarn
```
yarn add ngx-local
```

Then add the directive to your app.module.ts:

```ts
// ...
import { NgxLocal } from 'ngx-local';

@NgModule({
  // ...
  declarations: [
    // ...
    NgxLocal
  ],
  // ...
})
export class AppModule {
}
```

## Sample usage

```ts
import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Component({
  selector: 'my-app',
  template: `
    <div *ngxLocal="httpUser$ | async; let user">
      <div>id: {{ user?.id }}</div>
      <div>name: {{ user?.name }}</div>
      <div>username: {{ user?.username }}</div>
      <div>email: {{ user?.email }}</div>
    </div>
  `,
})
export class AppComponent {
  httpUser$: Observable<User>;

  constructor(private http: Http) {
    const randomUserId = Math.floor(Math.random() * 10) + 1;

    this.httpUser$ = this.http
      .get(`https://jsonplaceholder.typicode.com/users/${randomUserId}`)
      .map((res: Response): User => res.json() || {});
  };
}

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}
```

## TO-DO
- [x] Release!
- [ ] **Add tests**
