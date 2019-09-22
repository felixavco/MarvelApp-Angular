import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/layout/navbar/navbar.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { LandingComponent } from './components/pages/landing/landing.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { CharactersComponent } from './components/pages/characters/characters.component';
import { ComicsComponent } from './components/pages/comics/comics.component';
import { StoriesComponent } from './components/pages/stories/stories.component';
import { ErrorPageComponent } from './components/pages/errorPages/error-page/error-page.component';
import { NotFoundComponent } from './components/pages/errorPages/not-found/not-found.component';
import { SingleCharacterComponent } from './components/pages/characters/single-character/single-character.component';
import { SingleComicComponent } from './components/pages/comics/single-comic/single-comic.component';
import { SingleStoryComponent } from './components/pages/stories/single-story/single-story.component';
import { CardComponent } from './components/commons/card/card.component';
import { SpinnerComponent } from './components/commons/spinner/spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    LandingComponent,
    ContactComponent,
    CharactersComponent,
    ComicsComponent,
    StoriesComponent,
    ErrorPageComponent,
    NotFoundComponent,
    SingleCharacterComponent,
    SingleComicComponent,
    SingleStoryComponent,
    CardComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
