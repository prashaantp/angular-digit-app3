import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { SubscriptionModule } from './subscription/subscription.module';
import { AdminModule } from './admin/admin.module';
import { AuthService } from './admin/auth.service';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpModule, AppRoutingModule, SubscriptionModule, AdminModule],
  declarations: [AppComponent],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
