package com.findcare.agency.exception;

public class InvalidAccountDataException extends RuntimeException {
    public InvalidAccountDataException(String message) {
        super(message);
    }

    public InvalidAccountDataException(String message, Throwable cause) {
        super(message, cause);
    }
}