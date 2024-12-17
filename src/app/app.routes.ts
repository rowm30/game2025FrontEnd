import { Routes } from '@angular/router';
import { MainQuestComponent } from './main-quest/main-quest.component';
import { SideQuestComponent } from './side-quest/side-quest.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { QuestSelectionComponent } from './quest-selection/quest-selection.component';
import { JavaComponent } from './main-quest/java/java.component'; // Add sub-components for Main Quest
import { DsaComponent } from './main-quest/dsa/dsa.component';
import { SpringBootComponent } from './main-quest/spring-boot/spring-boot.component';
import { SqlComponent } from './main-quest/sql/sql.component';
import {SelectUserComponent} from "./select-user/select-user.component";


// Define the application routes
export const routes: Routes = [
  { path: '', redirectTo: 'app-select-user', pathMatch: 'full' }, // Default route
  { path: 'app-select-user', component: SelectUserComponent },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'quest-selection', component: QuestSelectionComponent },
  { path: 'main-quest', component: MainQuestComponent },
  { path: 'main-quest/java', component: JavaComponent }, // Java Quest topics
  { path: 'main-quest/dsa', component: DsaComponent }, // DSA Quest topics
  { path: 'main-quest/spring-boot', component: SpringBootComponent }, // Spring Boot Quest topics
  { path: 'main-quest/sql', component: SqlComponent }, // SQL Quest topics
  { path: 'side-quest', component: SideQuestComponent },
  { path: '**', redirectTo: 'app-select-user' } // Fallback for undefined routes
];
