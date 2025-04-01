@echo off

call mvn clean&&call mvn package&&call mvn spring-boot:run -X

pause