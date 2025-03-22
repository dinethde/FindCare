package com.findcare.caregiver.exception;

import static org.mockito.Mockito.*;
import static org.junit.jupiter.api.Assertions.*;

import com.findcare.caregiver.dto.ApiError;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.validation.ConstraintViolation;
import jakarta.validation.ConstraintViolationException;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.method.annotation.MethodArgumentTypeMismatchException;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

@ExtendWith(MockitoExtension.class)
public class GlobalExceptionHandlerTest {

    @InjectMocks
    private GlobalExceptionHandler globalExceptionHandler;

    @Mock
    private HttpServletRequest request;

    @Mock
    private MethodArgumentNotValidException methodArgumentNotValidException;

    @Mock
    private BindingResult bindingResult;

    @BeforeEach
    public void setup() {
        when(request.getRequestURI()).thenReturn("/api/caregivers");
    }

    @Test
    public void testHandleResourceNotFoundException() {
        // Arrange
        ResourceNotFoundException exception = new ResourceNotFoundException("Caregiver", "id", 1);

        // Act
        ResponseEntity<ApiError> response = globalExceptionHandler.handleResourceNotFoundException(exception, request);

        // Assert
        assertEquals(HttpStatus.NOT_FOUND, response.getStatusCode());
        ApiError error = response.getBody();
        assertNotNull(error);
        assertEquals(HttpStatus.NOT_FOUND.value(), error.getStatus());
        assertEquals("resource_not_found", error.getCode());
        assertEquals("Caregiver not found with id: 1", error.getMessage());
        assertEquals("/api/caregivers", error.getPath());
        assertNotNull(error.getErrorId());
        assertNotNull(error.getTimestamp());
    }

    @Test
    public void testHandleResourceAlreadyExistsException() {
        // Arrange
        ResourceAlreadyExistsException exception = new ResourceAlreadyExistsException("Caregiver", "email",
                "test@example.com");

        // Act
        ResponseEntity<ApiError> response = globalExceptionHandler.handleResourceAlreadyExistsException(exception,
                request);

        // Assert
        assertEquals(HttpStatus.CONFLICT, response.getStatusCode());
        ApiError error = response.getBody();
        assertNotNull(error);
        assertEquals(HttpStatus.CONFLICT.value(), error.getStatus());
        assertEquals("resource_already_exists", error.getCode());
        assertEquals("Caregiver already exists with email: test@example.com", error.getMessage());
        assertEquals("/api/caregivers", error.getPath());
    }

    @Test
    public void testHandleBadRequestException() {
        // Arrange
        BadRequestException exception = new BadRequestException("Invalid parameters");

        // Act
        ResponseEntity<ApiError> response = globalExceptionHandler.handleBadRequestException(exception, request);

        // Assert
        assertEquals(HttpStatus.BAD_REQUEST, response.getStatusCode());
        ApiError error = response.getBody();
        assertNotNull(error);
        assertEquals(HttpStatus.BAD_REQUEST.value(), error.getStatus());
        assertEquals("bad_request", error.getCode());
        assertEquals("Invalid parameters", error.getMessage());
        assertEquals("/api/caregivers", error.getPath());
    }

    @Test
    public void testHandleMethodArgumentNotValidException() {
        // Arrange
        FieldError fieldError = new FieldError("caregiver", "email", "must be a valid email");
        when(methodArgumentNotValidException.getBindingResult()).thenReturn(bindingResult);
        when(bindingResult.getFieldErrors()).thenReturn(List.of(fieldError));

        // Act
        ResponseEntity<ApiError> response = globalExceptionHandler
                .handleMethodArgumentNotValidException(methodArgumentNotValidException, request);

        // Assert
        assertEquals(HttpStatus.BAD_REQUEST, response.getStatusCode());
        ApiError error = response.getBody();
        assertNotNull(error);
        assertEquals(HttpStatus.BAD_REQUEST.value(), error.getStatus());
        assertEquals("validation_failed", error.getCode());
        assertEquals("Validation failed. Check 'errors' field for details.", error.getMessage());
        assertEquals("/api/caregivers", error.getPath());

        // Validation errors should be populated
        List<ApiError.ValidationError> validationErrors = error.getErrors();
        assertNotNull(validationErrors);
        assertEquals(1, validationErrors.size());
        assertEquals("email", validationErrors.get(0).getField());
        assertEquals("must be a valid email", validationErrors.get(0).getMessage());
    }

    @Test
    public void testHandleGenericException() {
        // Arrange
        Exception exception = new RuntimeException("Unexpected error");

        // Act
        ResponseEntity<ApiError> response = globalExceptionHandler.handleGenericException(exception, request);

        // Assert
        assertEquals(HttpStatus.INTERNAL_SERVER_ERROR, response.getStatusCode());
        ApiError error = response.getBody();
        assertNotNull(error);
        assertEquals(HttpStatus.INTERNAL_SERVER_ERROR.value(), error.getStatus());
        assertEquals("internal_server_error", error.getCode());
        assertEquals("An unexpected error occurred", error.getMessage());
        assertEquals("/api/caregivers", error.getPath());
    }
}