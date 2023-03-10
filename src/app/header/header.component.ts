import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToHomePage() {
    this.router.navigate(['home']);
  }

  goToGroups() {
    this.router.navigate(['groups']);
  }

  goToMatches() {
    this.router.navigate(['matches']);
  }

  goToTeams() {
    this.router.navigate(['teams']);
  }
}
