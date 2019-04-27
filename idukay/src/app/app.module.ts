import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

/* Rutas */
import { appRouting } from './app.routes';

/* Angular Material */
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatToolbarModule, MatSidenavModule, MatIconModule, MatListModule, MatGridListModule, MatCardModule, MatMenuModule} from '@angular/material';
import { MatButtonModule, MatInputModule, MatSelectModule, MatRadioModule } from '@angular/material';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TableListComponent } from './components/table-list/table-list.component';
import { MatTableModule } from '@angular/material/table';
import { NewSalaComponent } from './components/new-sala/new-sala.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    DashboardComponent,
    TableListComponent,
    NewSalaComponent
  ],
  imports: [
    BrowserModule,
    appRouting,
    BrowserAnimationsModule,
    MatTableModule,
    MatButtonModule, LayoutModule, MatToolbarModule, MatSidenavModule, MatIconModule, MatListModule, MatGridListModule, MatCardModule, MatMenuModule, MatInputModule, MatSelectModule, MatRadioModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
