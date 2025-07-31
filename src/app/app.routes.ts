import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { PomodoroPageComponent } from './pages/pomodoro-page/pomodoro-page.component';
import { HomeComponent } from './pages/home/home.component';
import { ShoppingListPageComponent } from './pages/shopping-list-page/shopping-list-page.component';

export const routes: Routes = [

    {path: '', component: HomeComponent},

    {path: 'pomodoro', component: PomodoroPageComponent},

    {path: 'shopping-list', component: ShoppingListPageComponent}
];
