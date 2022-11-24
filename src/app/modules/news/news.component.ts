import { BreakpointObserver } from '@angular/cdk/layout';
import { OnInit, ChangeDetectorRef, Component, ViewChild, AfterViewInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { NewsService } from '../../services/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit, AfterViewInit  {
    title = 'Ahora lo sabes !!';
    sources: any = [];
    articles:any = [];
    selectedNewsChannel: string="Top Trending News!";
    @ViewChild(MatSidenav) sideNav!: MatSidenav;
  
    ngOnInit(): void {
      this.newsApi.initArticles().subscribe((res:any)=>{
        this.articles = res.articles;
      })
      this.newsApi.initSources().subscribe((res:any)=>{
        this.sources = res;
      })
    }
    
    constructor(private observer : BreakpointObserver, private cd : ChangeDetectorRef, private newsApi : NewsService){ }

    ngAfterViewInit(): void {
      this.sideNav.opened = true;
      this.observer.observe(['(max-width:800px)'])
      .subscribe((res)=>{
        if(res?.matches){
          this.sideNav.mode="over";
          this.sideNav.close();
        }else{
          this.sideNav.mode = 'side';
          this.sideNav.open();
        }
      })
      this.cd.detectChanges();
    }
  
    searchSource(source:any){
      this.newsApi.getArticlesByID(source)
      .subscribe((res:any)=>{
        this.selectedNewsChannel = source.name
        this.articles = res.articles;
      })
    }
  }