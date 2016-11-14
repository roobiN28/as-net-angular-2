import { Component } from '@angular/core';
@Component({
    selector: 'my-app',
    template: `
                <h1>Hello World!</h1>
                <h2>{{DynamicValue}}</h2>
                <my-todo>Loading... </my-todo>
              `
})
export class AppComponent {
    DynamicValue: string = "To a to nie";


}

