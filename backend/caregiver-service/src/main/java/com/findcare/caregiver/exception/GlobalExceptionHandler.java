package com.findcare.caregiver.exception;

import com.findcare.caregiver.dto.ApiError;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.validation.ConstraintViolation;
import jakarta.validation.ConstraintViolationException;
import lombok.extern.slf4j.Slf4j;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.dao.IncorrectResultSizeDataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.http.converter.HttpMessageNotReadableException;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.method.annotation.MethodArgumentTypeMismatchException;

import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@ControllerAdvice
@Slf4j
public class GlobalExceptionHandler {

    @ExceptionHandler(ResourceNotFoundException.class)
    public ResponseEntity<ApiError> handleResourceNotFoundException(
            ResourceNotFoundException ex, HttpServletRequest request) {

        ApiError apiError = ApiError.builder()
                .status(HttpStatus.NOT_FOUND.value())
                .code("resource_not_found")
                .message(ex.getMessage())
                .path(request.getRequestURI())
                .build();

        log.warn("Resource not found: {}, Path: {}, ErrorId: {}",
                ex.getMessage(), request.getRequestURI(), apiError.getErrorId());

        return new ResponseEntity<>(apiError, HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler(ResourceAlreadyExistsException.class)
    public ResponseEntity<ApiError> handleResourceAlreadyExistsException(
            ResourceAlreadyExistsException ex, HttpServletRequest request) {

        ApiError apiError = ApiError.builder()
                .status(HttpStatus.CONFLICT.value())
                .code("resource_already_exists")
                .message(ex.getMessage())
                .path(request.getRequestURI())
                .build();

        log.warn("Resource already exists: {}, Path: {}, ErrorId: {}",
                ex.getMessage(), request.getRequestURI(), apiError.getErrorId());

        return new ResponseEntity<>(apiError, HttpStatus.CONFLICT);
    }

    @ExceptionHandler(BadRequestException.class)
    public ResponseEntity<ApiError> handleBadRequestException(
            BadRequestException ex, HttpServletRequest request) {

        ApiError apiError = ApiError.builder()
                .status(HttpStatus.BAD_REQUEST.value())
                .code("bad_request")
                .message(ex.getMessage())
                .path(request.getRequestURI())
                .build();

        log.warn("Bad request: {}, Path: {}, ErrorId: {}",
                ex.getMessage(), request.getRequestURI(), apiError.getErrorId());

        return new ResponseEntity<>(apiError, HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<ApiError> handleMethodArgumentNotValidException(
            MethodArgumentNotValidException ex, HttpServletRequest request) {

        BindingResult bindingResult = ex.getBindingResult();

        List<ApiError.ValidationError> validationErrors = bindingResult.getFieldErrors().stream()
                .map(fieldError -> ApiError.ValidationError.builder()
                        .field(fieldError.getField())
                        .message(fieldError.getDefaultMessage())
                        .build())
                .collect(Collectors.toList());

        ApiError apiError = ApiError.builder()
                .status(HttpStatus.BAD_REQUEST.value())
                .code("validation_failed")
                .message("Validation failed. Check 'errors' field for details.")
                .path(request.getRequestURI())
                .errors(validationErrors)
                .build();

        log.warn("Validation failed: {}, Path: {}, ErrorId: {}",
                ex.getMessage(), request.getRequestURI(), apiError.getErrorId());

        return new ResponseEntity<>(apiError, HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(ConstraintViolationException.class)
    public ResponseEntity<ApiError> handleConstraintViolationException(
            ConstraintViolationException ex, HttpServletRequest request) {

        Set<ConstraintViolation<?>> violations = ex.getConstraintViolations();

        List<ApiError.ValidationError> validationErrors = violations.stream()
                .map(violation -> {
                    String propertyPath = violation.getPropertyPath().toString();
                    // Extract field name from property path
                    String fieldName = propertyPath.contains(".")
                            ? propertyPath.substring(propertyPath.lastIndexOf('.') + 1)
                            : propertyPath;

                    return ApiError.ValidationError.builder()
                            .field(fieldName)
                            .message(violation.getMessage())
                            .build();
                })
                .collect(Collectors.toList());

        ApiError apiError = ApiError.builder()
                .status(HttpStatus.BAD_REQUEST.value())
                .code("constraint_violation")
                .message("Constraint violation. Check 'errors' field for details.")
                .path(request.getRequestURI())
                .errors(validationErrors)
                .build();

        log.warn("Constraint violation: {}, Path: {}, ErrorId: {}",
                ex.getMessage(), request.getRequestURI(), apiError.getErrorId());

        return new ResponseEntity<>(apiError, HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(DataIntegrityViolationException.class)
    public ResponseEntity<ApiError> handleDataIntegrityViolationException(
            DataIntegrityViolationException ex, HttpServletRequest request) {

        ApiError apiError = ApiError.builder()
                .status(HttpStatus.CONFLICT.value())
                .code("data_integrity_violation")
                .message("Database constraint violation occurred")
                .path(request.getRequestURI())
                .build();

        log.error("Data integrity violation: {}, Path: {}, ErrorId: {}",
                ex.getMessage(), request.getRequestURI(), apiError.getErrorId(), ex);

        return new ResponseEntity<>(apiError, HttpStatus.CONFLICT);
    }

    @ExceptionHandler(HttpMessageNotReadableException.class)
    public ResponseEntity<ApiError> handleHttpMessageNotReadableException(
            HttpMessageNotReadableException ex, HttpServletRequest request) {

        ApiError apiError = ApiError.builder()
                .status(HttpStatus.BAD_REQUEST.value())
                .code("malformed_json")
                .message("Malformed JSON request")
                .path(request.getRequestURI())
                .build();

        log.warn("Malformed JSON: {}, Path: {}, ErrorId: {}",
                ex.getMessage(), request.getRequestURI(), apiError.getErrorId());

        return new ResponseEntity<>(apiError, HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(MethodArgumentTypeMismatchException.class)
    public ResponseEntity<ApiError> handleMethodArgumentTypeMismatchException(
            MethodArgumentTypeMismatchException ex, HttpServletRequest request) {

        String paramName = ex.getName();
        String expectedType = ex.getRequiredType() != null ? ex.getRequiredType().getSimpleName() : "unknown";
        Object providedValue = ex.getValue();

        String message = String.format("Parameter '%s' should be of type '%s', but value '%s' was provided",
                paramName, expectedType, providedValue);

        ApiError apiError = ApiError.builder()
                .status(HttpStatus.BAD_REQUEST.value())
                .code("type_mismatch")
                .message(message)
                .path(request.getRequestURI())
                .build();

        log.warn("Type mismatch: {}, Path: {}, ErrorId: {}",
                ex.getMessage(), request.getRequestURI(), apiError.getErrorId());

        return new ResponseEntity<>(apiError, HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(BusinessRuleViolationException.class)
    public ResponseEntity<ApiError> handleBusinessRuleViolationException(
            BusinessRuleViolationException ex, HttpServletRequest request) {

        ApiError apiError = ApiError.builder()
                .status(HttpStatus.CONFLICT.value())
                .code("business_rule_violation")
                .message(ex.getMessage())
                .path(request.getRequestURI())
                .build();

        log.warn("Business rule violation: {}, Path: {}, ErrorId: {}",
                ex.getMessage(), request.getRequestURI(), apiError.getErrorId());

        return new ResponseEntity<>(apiError, HttpStatus.CONFLICT);
    }

    @ExceptionHandler(IncorrectResultSizeDataAccessException.class)
    public ResponseEntity<ApiError> handleIncorrectResultSizeDataAccessException(
            IncorrectResultSizeDataAccessException ex, HttpServletRequest request) {

        String message = "Multiple records found when expecting a single result";
        if (ex.getMessage() != null && ex.getMessage().contains("did not return a unique result")) {
            message = "Multiple caregivers found for the same account. This indicates a data integrity issue.";
        }

        ApiError apiError = ApiError.builder()
                .status(HttpStatus.INTERNAL_SERVER_ERROR.value())
                .code("data_integrity_error")
                .message(message)
                .path(request.getRequestURI())
                .build();

        log.error("Incorrect result size: {}, Path: {}, ErrorId: {}",
                ex.getMessage(), request.getRequestURI(), apiError.getErrorId(), ex);

        return new ResponseEntity<>(apiError, HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @ExceptionHandler(Exception.class)
    public ResponseEntity<ApiError> handleGenericException(
            Exception ex, HttpServletRequest request) {

        ApiError apiError = ApiError.builder()
                .status(HttpStatus.INTERNAL_SERVER_ERROR.value())
                .code("internal_server_error")
                .message("An unexpected error occurred")
                .path(request.getRequestURI())
                .build();

        log.error("Unexpected error: {}, Path: {}, ErrorId: {}",
                ex.getMessage(), request.getRequestURI(), apiError.getErrorId(), ex);

        return new ResponseEntity<>(apiError, HttpStatus.INTERNAL_SERVER_ERROR);
    }
}