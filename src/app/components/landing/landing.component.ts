import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { SocialComponent } from "../social/social.component";
import { AboutComponent } from "../about/about.component";
import { ServicesComponent } from "../services/services.component";
import { RouterOutlet } from '@angular/router';
import { ContactComponent } from '../contact/contact.component';
import { SkillsComponent } from "../skills/skills.component";
import { JourneyComponent } from "../journey/journey.component";
import { BooksComponent } from "../books/books.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
    selector: 'app-landing',
    standalone: true,
    templateUrl: './landing.component.html',
    styleUrl: './landing.component.css',
    imports: [NavbarComponent, SocialComponent, AboutComponent, ServicesComponent, RouterOutlet, ContactComponent, SkillsComponent, JourneyComponent, BooksComponent, FooterComponent]
})
export class LandingComponent {

}
