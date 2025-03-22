package com.findcare.caregiver.exception;

/**
 * Exception thrown when a request contains invalid parameters or data.
 */
public class BadRequestException extends RuntimeException {

    public BadRequestException() {
        super("Invalid request parameters");
    }

    public BadRequestException(String message) {
        super(message);
    }

    public BadRequestException(String message, Throwable cause) {
        super(message, cause);
    }
}