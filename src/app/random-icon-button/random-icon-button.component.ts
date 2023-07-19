import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-random-icon-button',
  templateUrl: './random-icon-button.component.html',
  styleUrls: ['./random-icon-button.component.css']
})
export class RandomIconButtonComponent implements OnInit {

  icon: string;
  icons: string[] = ['fas fa-angry', 'fas fa-frown', 'fas fa-grin', 'fas fa-meh', 'fas fa-smile'];

  constructor() {
    this.icon = '';
  }

  ngOnInit(): void {
  }

  changeIcon(): void {
    const randomIndex = Math.floor(Math.random() * this.icons.length);
    this.icon = this.icons[randomIndex];
    setTimeout(() => this.icon = '', 3000);
  }
}
