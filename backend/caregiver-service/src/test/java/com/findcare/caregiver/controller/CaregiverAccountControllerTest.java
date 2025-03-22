package com.findcare.caregiver.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.findcare.caregiver.dto.CaregiverAccount;
import com.findcare.caregiver.exception.ResourceNotFoundException;
import com.findcare.caregiver.service.CaregiverAccountService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@WebMvcTest(CaregiverAccountController.class)
public class CaregiverAccountControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private ObjectMapper objectMapper;

    @MockBean
    private CaregiverAccountService caregiverService;

    @Test
    public void testCreateCaregiverSuccess() throws Exception {
        // Arrange
        CaregiverAccount request = new CaregiverAccount();
        request.setEmail("test@example.com");
        request.setUniqueIdentifier("auth0|123456");

        CaregiverAccount response = new CaregiverAccount();
        response.setCaregiverAccountId(1);
        response.setEmail("test@example.com");
        response.setUniqueIdentifier("auth0|123456");

        when(caregiverService.createCaregiver(any(CaregiverAccount.class))).thenReturn(response);

        // Act & Assert
        mockMvc.perform(post("/api/caregivers/accounts")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(request)))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.caregiverAccountId").value(1))
                .andExpect(jsonPath("$.email").value("test@example.com"))
                .andExpect(jsonPath("$.uniqueIdentifier").value("auth0|123456"));
    }

    @Test
    public void testCreateCaregiverValidationFailure() throws Exception {
        // Arrange
        CaregiverAccount request = new CaregiverAccount();
        request.setEmail("invalid-email");
        request.setUniqueIdentifier("");

        // Act & Assert
        mockMvc.perform(post("/api/caregivers/accounts")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(request)))
                .andExpect(status().isBadRequest())
                .andExpect(jsonPath("$.code").value("validation_failed"))
                .andExpect(jsonPath("$.errors").isArray())
                .andExpect(jsonPath("$.errors[?(@.field == 'email')]").exists())
                .andExpect(jsonPath("$.errors[?(@.field == 'uniqueIdentifier')]").exists());
    }

    @Test
    public void testGetCaregiverByUniqueIdentifierSuccess() throws Exception {
        // Arrange
        CaregiverAccount response = new CaregiverAccount();
        response.setCaregiverAccountId(1);
        response.setEmail("test@example.com");
        response.setUniqueIdentifier("auth0|123456");

        when(caregiverService.getCaregiverByUniqueIdentifier(anyString())).thenReturn(response);

        // Act & Assert
        mockMvc.perform(get("/api/caregivers/accounts/auth0|123456"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.caregiverAccountId").value(1))
                .andExpect(jsonPath("$.email").value("test@example.com"))
                .andExpect(jsonPath("$.uniqueIdentifier").value("auth0|123456"));
    }

    @Test
    public void testGetCaregiverByUniqueIdentifierNotFound() throws Exception {
        // Arrange
        when(caregiverService.getCaregiverByUniqueIdentifier(anyString()))
                .thenThrow(new ResourceNotFoundException("Caregiver account", "uniqueIdentifier", "auth0|123456"));

        // Act & Assert
        mockMvc.perform(get("/api/caregivers/accounts/auth0|123456"))
                .andExpect(status().isNotFound())
                .andExpect(jsonPath("$.code").value("resource_not_found"))
                .andExpect(
                        jsonPath("$.message").value("Caregiver account not found with uniqueIdentifier: auth0|123456"));
    }
}