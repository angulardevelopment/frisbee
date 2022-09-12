import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Observable } from "rxjs";
import { Frisbee } from "./frisbee";
import { FrisbeeService } from "./frisbee.service";

@Component({
  selector: "app-frisbee-detail",
  template: ` 

  <button (click)="goto()">Back</button>
  <div class="row">
                        <article class="col-md-6">
                            <div class="plastics">
                                
                                        
                                 
                                    
                                <!-- Single button -->
                                
                            </div>
                           
                                
                                <img src="{{detail.image}}" alt="Emperor" class="img-responsive">
                       
                        </article>
                        <article class="col-md-6">
                            <h4>Disc Information</h4>
                            <p>{{detail.description}}</p>


                            <table class="table table-bordered table-condensed table-striped table-hover">
                                <caption>Pricing</caption>
                                <tbody id="ContentPlaceHolder1_tblPricing">
                                    <tr id="ContentPlaceHolder1_row_retail_price" class="danger">

</tr>

                                    <tr class="success text-bold">
                                        <td>Our Price:</td>
                                        <td id="ContentPlaceHolder1_lblOurPrice">{{detail.description}}</td>

                                    </tr>
                                    <tr id="ContentPlaceHolder1_row_save_price" class="info">
	<td>You Save:</td>
	<td id="ContentPlaceHolder1_lblSavePrice">$ {{detail.price}}</td>
</tr>

                                </tbody>
                            </table>

                            <div id="ContentPlaceHolder1_divBuyNowButton" class="form-group text-center">
                                <button id="btnSelectYourDisc-21845" type="button" class="btn btn-danger sel-dsc-mdl" data-target="#select-disc-modal" data-toggle="modal" (click)="showprice()">Buy <i class="fa fa-shopping-cart"></i></button>
                            </div>

                            <div class="clearfix"></div>
                            <div class="clearfix"></div>
                        </article>

                        <div class="clearfix"></div>
                        <div style="height: 10px;"></div>
                        <div class="addthis_native_toolbox text-center"></div>
                        <div class="clearfix"></div>
                    </div> `,

  // Styles here will be scoped to this component only
  styles: [`
    .img-responsive{
    width: 200px;
    height: 200px;

  }

  `]
})
export class FrisbeeDetailComponent implements OnInit {
  detail: Frisbee;
  constructor(private fs: FrisbeeService, private route: ActivatedRoute, private router: Router) { }

  // This runs when the component renders
  ngOnInit() {
    // frisbeeId is the url param for the id of the frisbee being viewed
    const frisbeeId = this.route.snapshot.params["id"];

    this.fs.loadFrisbeeData().subscribe((res) => {

      this.detail = (res.filter((res) => res.id == frisbeeId))[0];


    })

  }

  goto() {
    this.router.navigate(['/frisbees']);

  }

  showprice() {
    alert('price ' + this.detail.price);
  }
}
