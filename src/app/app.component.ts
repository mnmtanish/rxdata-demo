import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Database, ICollection } from 'rxdata';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public tasks: Observable<any[]>;
  public Tasks: ICollection;

  constructor( private db: Database ) {
    this.Tasks = db.collection('tasks');
    this.tasks = this.createQuery();
  }

  public addNewTask( title: any ) {
    const id = Math.random().toString(16).slice(2);
    this.Tasks.insert({ id, title, done: false });
  }

  public toggleTask( task: any ) {
    this.Tasks.update({ id: task.id }, { $set: { done: !task.done } });
  }

  private createQuery(): Observable<any[]> {
    return Observable
      .combineLatest(
        this.Tasks.find({ done: false }, { sort: { time: -1 }}).value(),
        this.Tasks.find({ done: true }, { sort: { time: -1 }, limit: 3}).value()
      )
      .map(([todo, done]) => todo.concat(done));
  }
}
