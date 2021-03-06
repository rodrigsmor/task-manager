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
        equalsTaskTitles(task);

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

    public ResponseEntity<Task> editTaskById(Task task,
                                             Long id) {
        equalsTaskTitles(task);

        Task taskPast = taskRepository.getById(id);

        task.setStatus(taskPast.getStatus());

        if(!task.getDescription().isEmpty())
            taskPast.setDescription(task.getDescription());

        if(!task.getTitle().isEmpty())
            taskPast.setTitle(task.getTitle());

        taskRepository.save(taskPast);

        return ResponseEntity.ok(taskPast);
    }

    public void deleteById(Long taskId) {
        taskRepository.deleteById(taskId);
    }

    public void equalsTaskTitles(Task task) {
        boolean isTitleRepeated = taskRepository.findByTitle(task.getTitle())
                .stream()
                .anyMatch(tasks -> !tasks.equals(task));

        if(isTitleRepeated)
            throw new BusinessException("T??tulo j?? est?? em uso");
    }
}
