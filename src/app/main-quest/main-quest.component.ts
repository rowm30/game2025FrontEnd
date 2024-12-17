import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForOf } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

interface QuestProgress {
  name: string;
  progress: number;
  route: string;
}

@Component({
  selector: 'app-main-quest',
  templateUrl: './main-quest.component.html',
  standalone: true,
  imports: [
    NgForOf,
    HttpClientModule // Add HttpClientModule here
  ],
  styleUrls: ['./main-quest.component.scss']
})
export class MainQuestComponent implements OnInit {
  mainQuests: QuestProgress[] = [];

  constructor(private router: Router, private http: HttpClient) {}

  ngOnInit(): void {
    this.loadProgress();
  }

  loadProgress(): void {
    const userId = localStorage.getItem('selectedUserId') || '7';
    const apiUrl = `http://localhost:8080/api/main-quests`;

    this.http.get<QuestProgress[]>(apiUrl, { params: { userId: userId } }).subscribe({
      next: (data) => {
        this.mainQuests = data;
      },
      error: (error) => console.error('Error fetching main quests progress:', error)
    });
  }

  selectQuest(quest: QuestProgress): void {
    console.log(`Selected Quest: ${quest.name}`);
    this.router.navigate([quest.route]);
  }

  goBack(): void {
    this.router.navigate(['/quest-selection']);
  }
}
