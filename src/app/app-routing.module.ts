import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './components/pages/landing/landing.component';
import { NotFoundComponent } from './components/pages/errorPages/not-found/not-found.component';
import { ComicsComponent } from './components/pages/comics/comics.component';
import { StoriesComponent } from './components/pages/stories/stories.component';
import { SingleCharacterComponent } from './components/pages/characters/single-character/single-character.component';
import { SingleComicComponent } from './components/pages/comics/single-comic/single-comic.component';
import { SingleStoryComponent } from './components/pages/stories/single-story/single-story.component';
import { CharactersComponent } from './components/pages/characters/characters.component';


const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'home', component: LandingComponent },

  { path: 'characters', component: CharactersComponent },
  { path: 'characters/:id', component: SingleCharacterComponent },

  { path: 'comics', component: ComicsComponent },
  { path: 'comics/:id', component: SingleComicComponent },

  { path: 'stories', component: StoriesComponent },
  { path: 'stories/:id', component: SingleStoryComponent },

  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
