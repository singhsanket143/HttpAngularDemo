import {Component} from '@angular/core';
import {ServerService} from './server.service';
import {Response} from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  servers = [
    {
      name: 'Testserver',
      capacity: 10,
      id: this.generateId()
    },
    {
      name: 'Liveserver',
      capacity: 100,
      id: this.generateId()
    }
  ];

  constructor(private serverService: ServerService) {
  }

  onAddServer(name: string) {
    this.servers.push({
      name: name,
      capacity: 50,
      id: this.generateId()
    });
  }

  onSave() {
    this.serverService.storeServers(this.servers).subscribe(
      (response) => {
        console.log(response);
      },
      (errors) => {
        console.log(errors);
      }
    );
  }

  onGet() {
    this.serverService.getServers().subscribe(
      (response: Response) => {
        console.log(response);
        const data = response.json();
        console.log(data);
      },
      (errors) => {
        console.log(errors);
      }
    );
  }

  private generateId() {
    return Math.round(Math.random() * 10000);
  }
}
