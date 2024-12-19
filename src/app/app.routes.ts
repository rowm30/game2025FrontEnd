import { Routes } from '@angular/router';
import { MainQuestComponent } from './main-quest/main-quest.component';
import { SideQuestComponent } from './side-quest/side-quest.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { QuestSelectionComponent } from './quest-selection/quest-selection.component';
import { JavaComponent } from './main-quest/java/java.component';
import { DsaComponent } from './main-quest/dsa/dsa.component';
import { SpringBootComponent } from './main-quest/spring-boot/spring-boot.component';
import { SqlComponent } from './main-quest/sql/sql.component';
import { SelectUserComponent } from './select-user/select-user.component';
import { AngularComponent } from './side-quest/angular/angular.component';
import { AwsComponent } from './side-quest/aws/aws.component';
import { GitComponent } from './side-quest/git/git.component';
import { KafkaComponent } from './side-quest/kafka/kafka.component';
import { MathsComponent } from './side-quest/maths/maths.component';
import { MicroservicesComponent } from './side-quest/microservices/microservices.component';

export const routes: Routes = [
  { path: '', redirectTo: 'app-select-user', pathMatch: 'full' },
  { path: 'app-select-user', component: SelectUserComponent },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'quest-selection', component: QuestSelectionComponent },
  { path: 'main-quest', component: MainQuestComponent },
  { path: 'main-quest/java', component: JavaComponent },
  { path: 'main-quest/dsa', component: DsaComponent },
  { path: 'main-quest/spring-boot', component: SpringBootComponent },
  { path: 'main-quest/sql', component: SqlComponent },
  { path: 'side-quest', component: SideQuestComponent },
  { path: 'side-quest/angular', component: AngularComponent },
  { path: 'side-quest/aws', component: AwsComponent },
  { path: 'side-quest/git', component: GitComponent },
  { path: 'side-quest/kafka', component: KafkaComponent },
  { path: 'side-quest/maths', component: MathsComponent },
  { path: 'side-quest/microservices', component: MicroservicesComponent },
  { path: '**', redirectTo: 'app-select-user' }
];
