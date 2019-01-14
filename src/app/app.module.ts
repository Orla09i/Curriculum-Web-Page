import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './pages/shared/header/header.component';
import { FooterComponent } from './pages/shared/footer/footer.component';
import { IndexComponent } from './pages/index/index.component';
import { CurriculumComponent } from './pages/curriculum/curriculum.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CertifiedComponent } from './pages/certified/certified.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    IndexComponent,
    CurriculumComponent,
    SkillsComponent,
    PortafolioComponent,
    ContactComponent,
    CertifiedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
