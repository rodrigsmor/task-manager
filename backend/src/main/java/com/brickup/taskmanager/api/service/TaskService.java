package com.brickup.taskmanager.api.service;

import com.brickup.taskmanager.api.model.Task;
import com.brickup.taskmanager.api.model.TaskStatus;
import com.brickup.taskmanager.api.repository.TaskRepository;
import com.brickup.taskmanager.domain.BusinessException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class TaskService {
    @Autowired
    private TaskRepository taskRepository;

    public Task saveTask(Task task) {
        boolean isTitleRepeated = taskRepository.findByTitle(task.getTitle())
                .stream()
                .anyMatch(tasks -> !tasks.equals(task));

        if(isTitleRepeated)
            throw new BusinessException("Título já está em uso");

        task.setStatus(TaskStatus.PENDENTE);

        return taskRepository.save(task);
    }

    public ResponseEntity<List<Task>> returnTaskByStatus(TaskStatus taskStatus) {
        List<Task> correspondingTasks = new ArrayList<>(taskRepository.findByStatus(taskStatus));

        return ResponseEntity.ok(correspondingTasks);
    }

    public ResponseEntity<Task> finishTaskById(Long taskId) {
        taskRepository.findById(taskId).
                ifPresent(finishTask -> finishTask.setStatus(TaskStatus.FINALIZADO));

        Task taskFound = taskRepository.getById(taskId);
        taskRepository.save(taskFound);

        return ResponseEntity.ok(taskFound);
    }

    public void deleteById(Long taskId) {
        taskRepository.deleteById(taskId);
    }
}
