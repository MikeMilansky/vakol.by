import { Routes } from '@angular/router';

import { PlaceModule } from './pages/place';
import { NoContentComponent } from './pages/no-content';

export const ROUTES: Routes = [
	{path: '', component: NoContentComponent},
	{path: '**', component: NoContentComponent},
];
