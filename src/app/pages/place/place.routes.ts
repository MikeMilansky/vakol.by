import { Routes, RouterModule } from '@angular/router';
import { PlaceComponent }    from './place.component';

// Route Configuration
const placeRoutes: Routes = [
	{ path: 'place/:id', component: PlaceComponent },
];

export const routes = RouterModule.forChild(placeRoutes);
