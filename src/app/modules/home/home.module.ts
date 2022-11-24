import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatSelectModule} from '@angular/material/select';
import { HttpClientModule } from '@angular/common/http';

import { TranslateModule } from '@ngx-translate/core';
import { SwiperModule } from "swiper/angular";

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { BodyComponent } from 'src/app/components/body/body.component';
import { AboutMeComponent } from 'src/app/components/body/contents/about-me/about-me.component';
import { ProjectsComponent } from 'src/app/components/body/contents/projects/projects.component';
import { TitleComponent } from 'src/app/components/body/contents/title/title.component';
import { SocialNetworksComponent } from 'src/app/components/body/contents/social-networks/social-networks.component';


@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    TitleComponent,
    AboutMeComponent,
    ProjectsComponent,
    SocialNetworksComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SwiperModule,

    MatToolbarModule,
    MatSidenavModule,
    MatDividerModule,
    MatIconModule,
    MatCardModule,
    MatGridListModule,
    MatButtonModule,
    MatSelectModule,

    HttpClientModule,
    TranslateModule
  ]
})
export class HomeModule { }
