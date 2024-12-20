package com.example.CommitteeManagement.user;

import java.util.HashMap;
import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/users")
public class Controller {
    private final ModelService service;

    public Controller(ModelService service) {
        this.service = service;
    }

    // Get all students
    @GetMapping
    public List<Model> getAllModels() {
        return service.getAll();
    }

    // Get student by ID
    @GetMapping("/{id}")
    public ReadOtp getModelById(@PathVariable Long id) {
        return service.getById(id);
    }

    // Create a new student
    @PostMapping
    public ReadOtp createModel(@Valid @RequestBody EditDto dto) {
        return service.create(dto);
    }

    // Update a student
    @PutMapping("/{id}")
    public ReadOtp updateModel(@PathVariable Long id, @RequestBody EditDto dto) {
        return service.update(id, dto);
    }

    // Delete a student
    @DeleteMapping("/{id}")
    public void deleteModel(@PathVariable Long id) {
        service.delete(id);
    }

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<?> handleMethodArgumentNotValidException(
            MethodArgumentNotValidException exp) {
        var errors = new HashMap<String, String>();
        exp.getBindingResult().getAllErrors().forEach(error -> {
            var fieldName = ((FieldError) error).getField();
            var errorMsg = error.getDefaultMessage();
            errors.put(fieldName, errorMsg);
        });

        return new ResponseEntity<>(errors, HttpStatus.BAD_REQUEST);
    }
}