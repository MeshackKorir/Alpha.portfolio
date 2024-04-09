import { Component } from '@angular/core';
import { SocialComponent } from "../social/social.component";
import { NavbarComponent } from "../navbar/navbar.component";
import { ServicesComponent } from "../services/services.component";

@Component({
    selector: 'app-about',
    standalone: true,
    templateUrl: './about.component.html',
    styleUrl: './about.component.css',
    imports: [SocialComponent, NavbarComponent, ServicesComponent]
})
export class AboutComponent {

}
