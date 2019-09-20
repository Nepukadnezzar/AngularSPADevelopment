import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FoodContainerComponent } from "./food-container.component";
import { FoodlistComponent } from "./foodlist/foodlist.component";
import { FoodeditComponent } from "./foodedit/foodedit.component";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { MaterialModule } from "../material.module";
import { ReactiveFormsModule } from "@angular/forms";

const foodroutes: Routes = [
  {
    path: "",
    component: FoodContainerComponent
  }
];

@NgModule({
  declarations: [FoodContainerComponent, FoodlistComponent, FoodeditComponent],
  imports: [
    CommonModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild(foodroutes),
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule
  ]
})
export class FoodContainerModule {}
