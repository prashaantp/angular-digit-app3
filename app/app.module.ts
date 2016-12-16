import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
// import { InMemoryDataService } from './in-memory-data.service';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { SubscriptionModule } from './subscription/subscription.module';
import { AdminModule } from './admin/admin.module';

// import { HomeComponent } from './home.component';
// import { AdminComponent } from './admin.component';
// import { SubscriptionEditComponent } from './subscription-edit.component';

// import { SubscriptionService } from './subscription.service';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpModule, AppRoutingModule, SubscriptionModule, AdminModule],
  declarations: [AppComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
