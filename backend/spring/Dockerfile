# Stage 1: Build với Gradle
FROM gradle:8.7-jdk21 AS build

WORKDIR /app
COPY . /app

RUN gradle build --no-daemon

# Stage 2: Chạy bằng JRE nhẹ
FROM eclipse-temurin:21-jre

WORKDIR /app
COPY --from=build /app/build/libs/*.jar app.jar

EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]
