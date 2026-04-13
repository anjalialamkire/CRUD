import { Routes } from '@angular/router';
import { Home } from './shared/component/home/home';
import { PostDashboard } from './shared/component/post-dashboard/post-dashboard';
import { PostForm } from './shared/component/post-form/post-form';
import { PostDetails } from './shared/component/post-details/post-details';

export const routes: Routes = [
    {
        path:'',
        component:PostDashboard
    },
    {
        path : 'posts',
        component:PostDashboard
    },
    {
        path : 'post/add',
        component : PostForm
    },
    {
        path : 'post/:id',
        component :PostDetails
    },
    {
        path : 'post/:id/edit',
        component : PostForm
    }
];
