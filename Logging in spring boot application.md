# Logging in spring boot application
[See Original Post On Notion For Better Readability](https://cream-forsythia-066.notion.site/Logging-in-spring-boot-application-ff55060b534e48ee9a1c09e4d9a43904)

## Learning Resources

1. [How to do logging in Spring Boot - Brain Bytes](https://youtu.be/lGrcZsw-hKQ) ⏯
2. [How to implement Logging in SPRING BOOT - Daily Code Buffer](https://youtu.be/5a65m_8n3q8) ⏯
3. [Logging in Spring Boot - baeldung.com](https://www.baeldung.com/spring-boot-logging)  ⭐️ 
4. [Logging - docs.spring.io](https://docs.spring.io/spring-boot/docs/2.1.13.RELEASE/reference/html/boot-features-logging.html) ⭐️
5. [Logging In Spring Boot - reflectoring.io](https://reflectoring.io/springboot-logging/) ⭐️
6. [Logback vs SLF4J vs Log4J2 - what is the difference? Java Brains Brain Bytes](https://youtu.be/SWHYrCXIL38) ⏯
7. [Spring Boot Logging with SL4J and Logback - Java Techie](https://youtu.be/vHoHUo6gRQE) ⏯
8. [Spring Boot Logging With Example](https://youtu.be/8AN58dHzkz4) ⏯

## ****Initial Setup****

### Dependency in pom.xml

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-web</artifactId>
</dependency>
```

### Logging in a class file

```java
Logger logger = LoggerFactory.getLogger(CLASS_NAME.class);

logger.trace("A TRACE Message");
logger.debug("A DEBUG Message");
logger.info("An INFO Message");
logger.warn("A WARN Message");
logger.error("An ERROR Message");
```

### In case we need add our alternative library

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-web</artifactId>
    <exclusions>
        <exclusion>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-logging</artifactId>
        </exclusion>
    </exclusions>
</dependency>
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-log4j2</artifactId>
</dependency>
```

### application.properties

```yaml
logging.level.root = INFO;
logging.level.com.spring = TRACE;

# %d - date format
# [%level] - log level
# %c{1.} - class
# [%t] - thread
# %m - message
# %n - new line

# log message pattern in console
logging.pattern.console=%d [%level] %c{1.} [%t] %m%n 

# Save console logs in a life, can be configured 
logging.file.name = appLog.logging

# Size of the log file, can be configured 
logging.logback.rollingpolicy.max-file-size = 5KB

# Default lifetime for log file is infinite, can be configured 
logging.logback.rollingpolicy.max-history = 90

# log message pattern in log file
logging.pattern.file=%d [%level] %c{1.} [%t] %m%n 

```

### Example
![](/Images/SpringLogging.png)
