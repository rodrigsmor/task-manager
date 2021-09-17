package com.brickup.taskmanager.api.repository;

import com.brickup.taskmanager.api.model.Task;
import com.brickup.taskmanager.api.model.TaskStatus;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface TaskRepository extends JpaRepository<Task, Long> {
    List<Task> findByStatus(TaskStatus status);
    Optional<Task> findByTitle(String title);
}
