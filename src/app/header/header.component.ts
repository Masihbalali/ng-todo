import { Component } from '@angular/core';

@Component({
    selector: 'headerComponent',
    standalone: true,
    imports: [],
    templateUrl: './header.component.html',
    styleUrl: './header.component.css'
})
export class HeaderComponent {
    title = 'headerComponent';
}
