import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: false,
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  name: string = 'ironman';
  age: number = 35;

  get capitalizeName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {

    return `${this.name} -- ${this.age}`;
  }

  changeHero(): void {
    this.name = 'Spiderman'
  }

  changeAge(): void {
    this.age = 25
  }

  reset(): void {
    this.age = 35;
    this.name = 'ironman';
  }

}
