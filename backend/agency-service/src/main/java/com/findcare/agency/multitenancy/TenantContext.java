package com.findcare.agency.multitenancy;

/**
 * A ThreadLocal utility class for storing the current tenant ID.
 * This allows the tenant ID to be accessible from anywhere within the same thread.
 */
public class TenantContext {
    
    private static final ThreadLocal<String> currentTenant = new ThreadLocal<>();
    
    private TenantContext() {
        // Private constructor to prevent instantiation
    }
    
    /**
     * Get the current tenant ID from the ThreadLocal.
     *
     * @return The current tenant ID
     */
    public static String getCurrentTenant() {
        return currentTenant.get();
    }
    
    /**
     * Set the current tenant ID in the ThreadLocal.
     *
     * @param tenantId The tenant ID to set
     */
    public static void setCurrentTenant(String tenantId) {
        currentTenant.set(tenantId);
    }
    
    /**
     * Clear the ThreadLocal tenant context.
     * This should be called at the end of request processing to prevent memory leaks.
     */
    public static void clear() {
        currentTenant.remove();
    }
}