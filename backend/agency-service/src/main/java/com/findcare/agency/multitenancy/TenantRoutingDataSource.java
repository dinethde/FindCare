package com.findcare.agency.multitenancy;

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
        ServletRequestAttributes requestAttributes = (ServletRequestAttributes) RequestContextHolder.getRequestAttributes();
        
        if (requestAttributes != null) {
            HttpServletRequest request = requestAttributes.getRequest();
            String tenantHeader = request.getHeader(TENANT_HEADER);
            
            if (tenantHeader != null && !tenantHeader.isEmpty()) {
                return tenantHeader;
            }
        }
        
        return DEFAULT_TENANT_ID;
    }
    
    public void addTenantDataSource(String tenantId, Object dataSource) {
        tenantDataSources.put(tenantId, dataSource);
        super.setTargetDataSources(new ConcurrentHashMap<>(tenantDataSources));
        super.afterPropertiesSet(); // This rebuilds the datasource lookup map
    }
}