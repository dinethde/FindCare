package com.findcare.agency.multitenancy;

import org.hibernate.context.spi.CurrentTenantIdentifierResolver;
import org.springframework.stereotype.Component;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import javax.servlet.http.HttpServletRequest;

@Component
public class TenantIdentifierResolver implements CurrentTenantIdentifierResolver {

    private static final String DEFAULT_TENANT_ID = "master";
    private static final String TENANT_HEADER = "X-Tenant-ID";

    @Override
    public String resolveCurrentTenantIdentifier() {
        ServletRequestAttributes requestAttributes = (ServletRequestAttributes) RequestContextHolder.getRequestAttributes();
        
        if (requestAttributes != null) {
            HttpServletRequest request = requestAttributes.getRequest();
            String tenantHeader = request.getHeader(TENANT_HEADER);
            
            if (tenantHeader != null && !tenantHeader.isEmpty()) {
                return tenantHeader;
            }
        }
        
        // Default to master database if no tenant is specified
        return DEFAULT_TENANT_ID;
    }

    @Override
    public boolean validateExistingCurrentSessions() {
        return true;
    }
}