import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Frisbee } from "./frisbee";
import { FrisbeeService } from "./frisbee.service";

@Component({
  selector: "app-frisbee-list",
  template: `
  <div id="ContentPlaceHolder1_pnlDD" class="category-wrapper">
                        <!-- <h3>Distance Drivers</h3> -->
<div>
  <button (click)="search('distance')">Distance Drivers</button>
  <button (click)="search('fairway')">Fairway Drivers</button>
  <button (click)="search('midrange')">Midrange</button>
  <button (click)="search('putter')">Putters</button>
  <button (click)="search('all')">All</button>

</div>
                        <div class="row" *ngFor="let i of mockData">
                            
                                    
                                    <article class="col-sm-6 col-md-4 col-lg-3" (click)="goto(i.id)">
                                        <div class="thumbnail hover_thumbnail">
                                            <p>{{i.category}}</p>
                                            <img src="{{i.image}}" alt="Aztec" class="img-responsive">
                                            <div class="caption" style="height: 45px;">
                                                <h4>
                                                {{i.name}}
                                                </h4>
                                                <h4 class="pull-left"><small>  {{i.glide}}</small></h4>
                                                
                                                <p>
                                                    <button id="btn-Category-21892" data-target="#select-disc-modal" data-toggle="modal" type="button" class="btn btn-success btn-xs sel-dsc-mdl"><i class="fa fa-shopping-cart"></i>&nbsp;Buy Now</button>
                                                    <a href="/Infinite-Discs-Aztec" class="btn btn-default btn-xs">Details</a>
                                                </p>
                                            </div>
                                        </div>
                                    </article>
                                
                                

                                
                                
                        </div>
                    </div> `,

  // Styles here will be scoped to this component only
  styles: [`
  
  .img-responsive{
    width: 200px;
    height: 200px;

  }

  .category-wrapper { 
    display: grid;
    grid-template-columns: repeat(4, 1fr); }

    @media (max-width: 600px) {
      .category-wrapper { 
    display: grid;
    grid-template-columns: repeat(1, 1fr); }
}
  `]
})
export class FrisbeeListComponent implements OnInit {
  mockData: Frisbee[];

  constructor(private fs: FrisbeeService, private router: Router) { }

  // This runs when the component renders-
  ngOnInit() {
    this.fs.loadFrisbeeData().subscribe((res) => {
      this.mockData = res;
    })
  }

  goto(id) {
    this.router.navigate(['/frisbees/' + id]);

  }

  search(val) {
    this.mockData = this.mockData.filter((res) => res.category === val)
  }
}
