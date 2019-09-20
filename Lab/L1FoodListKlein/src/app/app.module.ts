import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { FlexLayoutModule } from "@angular/flex-layout";
import { MaterialModule } from "./material.module";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { FoodContainerComponent } from "./food-container/food-container.component";
import { FoodlistComponent } from "./food-container/foodlist/foodlist.component";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { FoodeditComponent } from "./food-container/foodedit/foodedit.component";
import { ToolbarComponent } from "./toolbar/toolbar.component";
import { SidemenuComponent } from "./sidemenu/sidemenu.component";
import { FooterComponent } from "./footer/footer.component";
import { HomeComponent } from "./home/home.component";
import { AppRoutingModule } from "./app-routing.module";

import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    SidemenuComponent,
    FooterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NoopAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
