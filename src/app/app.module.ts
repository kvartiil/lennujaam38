import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { NgxGaugeModule } from 'ngx-gauge';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';

import { AppRoutingModule } from './app-routing.module';

import { Alaleht1Component } from './alaleht1/alaleht1.component';
import { Alaleht2Component } from './alaleht2/alaleht2.component';
import { Alaleht3Component } from './alaleht3/alaleht3.component';

//import { TabGroupAlignExample } from './tabs/tabs.component';
import { TabComponent } from './tabx/tabx.component';

import { ElujoudComponent } from './elujoud/elujoud.component';
import { KoondindComponent } from './koondind/koondind.component';
import { Koondind2Component } from './koondind2/koondind2.component';
import { Koondind3Component } from './koondind3/koondind3.component';
import { Koondind4Component } from './koondind4/koondind4.component';
import { Koondind5Component } from './koondind5/koondind5.component';
import { Koondind6Component } from './koondind6/koondind6.component';
import { Koondind7Component } from './koondind7/koondind7.component';
import { Yld1Component } from './yld1/yld1.component';
import { Yld2Component } from './yld2/yld2.component';
import { Yld3Component } from './yld3/yld3.component';

@NgModule({
  imports: [
    BrowserModule,
    NgxGaugeModule,
    ReactiveFormsModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: '', component: ProductListComponent },
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    Alaleht1Component,
    Alaleht2Component,
    Alaleht3Component,
    ElujoudComponent,
    KoondindComponent,
    Koondind2Component,
    Koondind3Component,
    Koondind4Component,
    Koondind5Component,
    Koondind6Component,
    Koondind7Component,
    TabComponent,
    Yld1Component,
    Yld2Component,
    Yld3Component
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/