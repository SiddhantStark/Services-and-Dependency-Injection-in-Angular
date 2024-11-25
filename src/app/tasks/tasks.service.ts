import { inject, Injectable, signal } from "@angular/core";
import { Task, TaskStatus } from "./task.model";
import { LoggingService } from "../logging.service";

@Injectable({
    providedIn: 'root'
})
export class TasksService{
    private logs = inject(LoggingService);

    tasks = signal<Task[]>([]);

    allTasks = this.tasks.asReadonly();

    addTask(taskData : {title : string , description: string}){
        const newTask : Task = {
            ...taskData,
            id: Math.random().toString(),
            status: 'OPEN',
        };
        this.tasks.update((oldData) => [...oldData, newTask])
        this.logs.log("ADDED TASK WITH TITLE: " + taskData.title);
    }

    updateTasks(taskId: string, newStatus: TaskStatus){
        this.tasks.update((oldTasks) => oldTasks.map((task : Task) => task.id === taskId ? {...task, status: newStatus} : task ))
    }
}