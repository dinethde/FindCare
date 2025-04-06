package com.findcare.agency.dto;

import com.findcare.agency.entity.TierEnum;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Entity
@Table(name = "tenants")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Tenant {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "tenant_id", nullable = false, unique = true)
    private String tenantId;

    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "db_name", nullable = false, unique = true)
    private String dbName;

    @Column(name = "created_at")
    private LocalDateTime createdAt;

    @Column(name = "active")
    private boolean active;

    // Constructor for convenience
    public Tenant(String tenantId, String name) {
        this.tenantId = tenantId;
        this.name = name;
        this.dbName = "tenant_" + tenantId.toLowerCase();
        this.createdAt = LocalDateTime.now();
        this.active = true;
    }
}