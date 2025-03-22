package com.findcare.agency.exception;

import lombok.Getter;

import java.util.Map;

@Getter
public class ValidationException extends ApiException {
    private final Map<String, String> errors;

    public ValidationException(String message, Map<String, String> errors) {
        super(message, "VALIDATION_ERROR");
        this.errors = errors;
    }
}