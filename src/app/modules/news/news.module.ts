import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import { NewsComponent } from './news.component';
import { NewsRoutingModule } from './news-routing.module';
import { NewsService } from './../../services/news.service'

@NgModule({
  declarations: [
    NewsComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    
    MatToolbarModule,
    MatDividerModule,
    MatIconModule,
    MatSidenavModule,

    NewsRoutingModule
  ],
  providers: [
    NewsService
  ]
})
export class NewsModule { }


// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';

// import {MatToolbarModule} from '@angular/material/toolbar';
// import {MatCardModule} from '@angular/material/card';
// import {MatGridListModule} from '@angular/material/grid-list';
// import {MatButtonModule} from '@angular/material/button';
// import { MatDividerModule } from '@angular/material/divider';
// import { MatIconModule } from '@angular/material/icon';
// import { MatSidenavModule } from '@angular/material/sidenav';

// import { HttpClientModule } from '@angular/common/http';

// import { NewsRoutingModule } from './news-routing.module';
// import { NewsComponent } from './news.component';
// import { HeaderComponent } from 'src/app/components/header/header.component';
// import { BodyComponent } from 'src/app/components/body/body.component';

// import { NewsService } from './../../services/news.service'


// @NgModule({
//   declarations: [
//     NewsComponent,
//     HeaderComponent,
//     BodyComponent,
//   ],
//   imports: [
//     CommonModule,
//     NewsRoutingModule,

//     MatToolbarModule,
//     MatSidenavModule,
//     MatDividerModule,
//     MatIconModule,
//     MatCardModule,
//     MatGridListModule,
//     MatButtonModule,

//     HttpClientModule,
//   ],
//   providers: [
//     NewsService
//   ]
// })
// export class NewsModule { }
