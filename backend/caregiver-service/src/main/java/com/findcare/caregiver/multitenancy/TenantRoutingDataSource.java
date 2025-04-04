package com.findcare.caregiver.multitenancy;

import org.springframework.jdbc.datasource.lookup.AbstractRoutingDataSource;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import javax.servlet.http.HttpServletRequest;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

public class TenantRoutingDataSource extends AbstractRoutingDataSource {

    private static final String DEFAULT_TENANT_ID = "master";
    private static final String TENANT_HEADER = "X-Tenant-ID";
    
    // In-memory cache of tenants we've already seen and set up
    private final Map<String, Object> tenantDataSources = new ConcurrentHashMap<>();

    @Override
    protected Object determineCurrentLookupKey() {
        // First try to get the tenant ID from TenantContext
        String tenantId = TenantContext.getCurrentTenant();
        
        // If not available in TenantContext, try to get from HTTP headers
        if (tenantId == null) {
            ServletRequestAttributes requestAttributes = (ServletRequestAttributes) RequestContextHolder.getRequestAttributes();
            
            if (requestAttributes != null) {
                HttpServletRequest request = requestAttributes.getRequest();
                tenantId = request.getHeader(TENANT_HEADER);
            }
        }
        
        // If still not available, use default
        if (tenantId == null || tenantId.isEmpty()) {
            tenantId = DEFAULT_TENANT_ID;
        }
        
        return tenantId;
    }
    
    public void addTenantDataSource(String tenantId, Object dataSource) {
        tenantDataSources.put(tenantId, dataSource);
        super.setTargetDataSources(new ConcurrentHashMap<>(tenantDataSources));
        super.afterPropertiesSet(); // This rebuilds the datasource lookup map
    }
}