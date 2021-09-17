package com.brickup.taskmanager.api.service;

import com.brickup.taskmanager.api.model.Task;
import com.brickup.taskmanager.api.model.TaskStatus;
import com.brickup.taskmanager.api.repository.TaskRepository;
import com.brickup.taskmanager.domain.BusinessException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Service;

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
}
