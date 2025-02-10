import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './hero/hero.component';
import { ListHeroesComponent } from './list-heroes/list-heroes.component';



@NgModule({
  exports:[HeroComponent, ListHeroesComponent],
  declarations: [
    HeroComponent,
    ListHeroesComponent
  ],
  imports: [
    CommonModule
  ],
})
export class HeroesModule { }
