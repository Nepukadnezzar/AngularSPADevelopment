import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { FoodContainerComponent } from "./food-container/food-container.component";
import { FoodlistComponent } from "./food-container/foodlist/foodlist.component";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { FoodeditComponent } from "./food-container/foodedit/foodedit.component";

@NgModule({
  declarations: [
    AppComponent,
    FoodContainerComponent,
    FoodlistComponent,
    FoodeditComponent
  ],
  imports: [BrowserModule, HttpClientModule, FormsModule, NoopAnimationsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
