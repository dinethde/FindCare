# ---- Stage 1: Build the application ----
FROM maven:3.9.6-eclipse-temurin-21 AS builder
WORKDIR /app

# Set Maven options for better memory management
ARG MAVEN_OPTS
ENV MAVEN_OPTS=${MAVEN_OPTS:-"-Xmx1g"}

# Copy only the pom.xml first to cache dependencies
COPY pom.xml .
# Download dependencies in a separate layer
RUN --mount=type=cache,target=/root/.m2 mvn dependency:go-offline

# Now copy the source code
COPY src ./src

# Build the JAR with dependency caching
RUN --mount=type=cache,target=/root/.m2 mvn clean package -DskipTests

# ---- Stage 2: Run the application ----
FROM eclipse-temurin:21-jre-alpine
WORKDIR /app

# Copy the JAR from the builder stage
COPY --from=builder /app/target/*.jar app.jar

# Set Java options for runtime
ENV JAVA_OPTS="-Xmx512m -Xms256m"

# Expose the application's port (default Spring Boot is 8080)
EXPOSE 8080

# Start the Spring Boot application
ENTRYPOINT ["sh", "-c", "java $JAVA_OPTS -jar app.jar"]
