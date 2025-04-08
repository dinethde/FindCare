# ---- Stage 1: Build the application ----
FROM maven:3.9.6-eclipse-temurin-21 AS builder
WORKDIR /app

# Copy only the pom.xml first to cache dependencies
COPY pom.xml .
RUN mvn dependency:go-offline

# Now copy the source code
COPY src ./src

# Build the JAR (skip tests for faster builds if you prefer)
RUN mvn clean package -DskipTests

# ---- Stage 2: Run the application ----
FROM eclipse-temurin:21-jre-alpine
WORKDIR /app

# Copy the JAR from the builder stage
COPY --from=builder /app/target/*.jar app.jar

# # Expose the application's port (default Spring Boot is 8080)
EXPOSE 8080

# Start the Spring Boot application
ENTRYPOINT ["java", "-jar", "app.jar"]
