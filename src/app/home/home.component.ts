import { Component } from '@angular/core';
import { SideBarComponent } from "./shared/side-bar/side-bar.component";
import { HeaderComponent } from "./shared/header/header.component";
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [
        SideBarComponent,
        HeaderComponent,
        RouterOutlet
    ]
})
export class HomeComponent {

}
