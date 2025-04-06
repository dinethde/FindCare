package com.findcare.agency.entity;

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
public class TenantEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "tenant_id", unique = true, nullable = false)
    private String tenantId;

    @Column(nullable = false)
    private String name;

    @Column(name = "db_name", unique = true, nullable = false)
    private String dbName;

    @Column(name = "created_at")
    private LocalDateTime createdAt;

    @Column
    private Boolean active = true;
}