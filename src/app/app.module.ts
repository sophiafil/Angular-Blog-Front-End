import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule, MatToolbarRow} from '@angular/material/toolbar';
import {MatFormField, MatFormFieldModule, MatLabel} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatRippleModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { IgetEditorModule } from '@iget/editor';
import {MatCardModule} from '@angular/material/card';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import { ViewPostComponent } from './view-post/view-post.component';
import { PostCardComponent } from './post-card/post-card.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        LoginComponent,
        RegisterComponent,
        CreatePostComponent,
        EditPostComponent,
        ViewPostComponent,
        PostCardComponent,
    ],
    exports: [
        MatToolbarModule,
        MatToolbarRow,
        MatFormFieldModule,
        MatLabel,
        MatFormField,
        MatFormFieldModule,
        MatInputModule,
        MatRippleModule,
        MatCardModule,
        
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatFormFieldModule,
        MatInputModule,
        MatRippleModule,
        MatButtonModule,
        MatIconModule,
        FormsModule,
        ReactiveFormsModule,
        IgetEditorModule,
        MatCardModule,
        RouterModule.forRoot([
            {
               path: 'ViewPost',
               component: ViewPostComponent
            }
         ])
    ]
})
export class AppModule { }
