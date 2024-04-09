import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
    selector: 'app-social',
    standalone: true,
    templateUrl: './social.component.html',
    styleUrl: './social.component.css',
    imports: [RouterOutlet]
})

export class SocialComponent {

}
