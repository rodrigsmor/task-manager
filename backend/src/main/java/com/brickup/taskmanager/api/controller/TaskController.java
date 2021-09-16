package com.brickup.taskmanager.api.controller;

import com.brickup.taskmanager.api.model.Task;
import com.brickup.taskmanager.api.repository.TaskRepository;
import com.brickup.taskmanager.api.service.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/Task")
public class TaskController {
    @Autowired
    private TaskRepository taskRepository;

    @Autowired
    private TaskService taskService;

    @GetMapping
    public List<Task> listAllTasks() {
        return taskRepository.findAll();
    }

    @GetMapping("/{taskId}")
    public ResponseEntity<Task> fetchTask(@PathVariable Long taskId) {
        return taskRepository.findById(taskId)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Task addNewTask(@RequestBody Task task) {
        return taskService.saveTask(task);
    }
}