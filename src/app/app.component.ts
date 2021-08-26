import { Component } from '@angular/core';
import { Tasks } from './models/tasks';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tasksArray: Tasks[]=[
    {id: 1, name :"completar CSS",description:"LINUX"},
    {id: 2, name :"Instalar Angular",description:"POWER SHELL"},
    {id: 3, name :"Instalar GIT",description:"REPO"},
  ];

  selectedTask: Tasks = new Tasks();


  Add(){
    
    this.selectedTask.id = this.tasksArray.length + 1;
   

    this.tasksArray.push(this.selectedTask);
    this.selectedTask = new Tasks();
   

   
  }
  Edit(task: Tasks){
    this.selectedTask = task;

    if(this.selectedTask.id == 0){
      this.selectedTask.id = this.tasksArray.length + 1;
      this.tasksArray.push(this.selectedTask);
      this.selectedTask = new Tasks();
    }  
    
  }
  Delete(){
    if(confirm("Are you sure to delete this element")){
      this.tasksArray = this.tasksArray.filter(x=> x !=this.selectedTask);
      this,this.selectedTask = new Tasks();
    }


  }


  
}
