import { Component, ViewEncapsulation } from "@angular/core";
import SwiperCore, { EffectCoverflow, Pagination, Navigation } from "swiper";

SwiperCore.use([EffectCoverflow, Pagination, Navigation]);

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ProjectsComponent {

  constructor() { }

}
