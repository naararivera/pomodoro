import { NgClass } from "@angular/common";
import { Component } from "@angular/core";
import { Router, RouterLink, RouterLinkActive } from "@angular/router";

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.html',
    styleUrl: './navbar.css',
    imports: [
        RouterLink,
        RouterLinkActive,
        NgClass
    ]
})

export class NavbarComponent{

    constructor(public router: Router){}

    isShoppingList(): boolean{
        return this.router.url.startsWith('/shopping-list');
    }

}