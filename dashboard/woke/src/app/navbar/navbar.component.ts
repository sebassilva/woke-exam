import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public navbarCollapsed = true;

  constructor(
    private route: Router
  ) { }

  ngOnInit(): void {
  }

  signOut(): void{
    localStorage.setItem('user', null);
    this.route.navigate(['/login']);
  }

}
