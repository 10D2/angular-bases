import { Component } from '@angular/core';

@Component({
  selector: 'app-list-heroes',
  standalone: false,
  templateUrl: './list-heroes.component.html',
  styleUrl: './list-heroes.component.css'
})
export class ListHeroesComponent {
public namesHeroes: string[] = ['Spiderman', 'Batman','Hulk', 'Ironman', 'Thor'];
public diedHero?: string = '';

deleteHero(): void { 
  this.diedHero = this.namesHeroes.pop();
  console.log('Deleted Hero: ', this.diedHero);
}


} 