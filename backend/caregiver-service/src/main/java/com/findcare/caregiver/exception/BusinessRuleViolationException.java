package com.findcare.caregiver.exception;

/**
 * Exception thrown when attempting to create a resource that violates business
 * rules.
 */
public class BusinessRuleViolationException extends RuntimeException {

    public BusinessRuleViolationException() {
        super("Business rule violation occurred");
    }

    public BusinessRuleViolationException(String message) {
        super(message);
    }

    public BusinessRuleViolationException(String resourceName, String fieldName, Object fieldValue, String reason) {
        super(String.format("Cannot process %s with %s: %s. Reason: %s", resourceName, fieldName, fieldValue, reason));
    }

    public BusinessRuleViolationException(String message, Throwable cause) {
        super(message, cause);
    }
}