# Maven Basic Concepts

**[See Original Post On Notion For Better Readability](https://cream-forsythia-066.notion.site/Maven-Basic-86f54ab8887948a6b505fb9433bd4163)**

# What is Apache Maven?

Apache Maven is a software project management and comprehension tool. Based on the concept of a project object model (POM), Maven can manage a project's build, reporting and documentation from a central piece of information.

# Maven’s Objectives

Maven’s primary goal is to allow a developer to comprehend the complete state of a development effort in the shortest period of time. In order to attain this goal, Maven deals with several areas of concern:

- Making the build process easy
- Providing a uniform build system
- Providing quality project information
- Encouraging better development practices

Read in detail at: [Maven’s Objectives](https://maven.apache.org/what-is-maven.html#maven%E2%80%99s-objectives)

Also see: [What is Maven Not?](https://maven.apache.org/what-is-maven.html#what-is-maven-not)

# Maven's Feature

The following are the key features of Maven in a nutshell:

- Simple project setup that follows best practices - get a new project or module started in seconds
- Consistent usage across all projects - means no ramp up time for new developers coming onto a project
- Superior dependency management including automatic updating, dependency closures (also known as transitive dependencies)
- Able to easily work with multiple projects at the same time
- A [large and growing repository of libraries and metadata](https://maven.apache.org/repository/) to use out of the box, and arrangements in place with the largest Open Source projects for real-time availability of their latest releases
- Extensible, with the ability to easily [write plugins](https://maven.apache.org/plugin-developers/) in Java or scripting languages
- Instant access to new features with little or no extra configuration
- Ant tasks for dependency management and deployment outside of Maven
- Model based builds: Maven is able to build any number of projects into predefined output types such as a JAR, WAR, or distribution based on metadata about the project, without the need to do any scripting in most cases.
- Coherent site of project information.
- Release management and distribution publication.
- Dependency management.

Read in detail: [Feature Summary](https://maven.apache.org/maven-features.html)

# **Processes which can manage using maven:**

- Builds
- Documentation
- Reporting
- Dependencies
- SCMs
- Releases
- Distribution
- mailing list

# Maven Directory Structure
![](/Images/Maven01.png)
See: [Standard Maven Directory Structure](http://tutorials.jenkov.com/maven/directory-structure.html)                      
# Maven's POM

POM is an acronym for Project Object Model. The pom.xml file contains information of project and configuration information for the maven to build the project such as dependencies, build directory, source directory, test source directory, plugin, goals etc.

When executing a task or goal, Maven looks for the POM in the current directory. It reads the POM, gets the needed configuration information, then executes the goal.

## Elements of maven pom.xml file

**project**: This is the root element of pom.xml file.

**modelVersion**: This is the sub element of project which specifies the modelVersion. Model version should be 4.0.0.

**groupId**: This is the sub element of project which specifies the id for the project group.

**artifactId**: This is the sub element of project which specifies the id for the project. This is generally refers to the name of the project. The artifact ID is also used as part of the name of the JAR, WAR or EAR file produced when building the project.

**version**: This is the sub element of project which specifies the version of the project.

**packaging**: It is used to define the packaging type such as jar, war etc.

**name**: It is used to define the name of the maven project.

**url**: It is used to define the url of the project.

**dependencies**: It is used to define the dependencies for this project.

**dependency**: It is used to define a dependency. It is used inside dependencies element.

**scope**: It is used to define the scope for this maven project. It can be compile, provided, runtime, test and system.


```xml
<project xmlns="http://maven.apache.org/POM/4.0.0"   
xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"  
  xsi:schemaLocation="http://maven.apache.org/POM/4.0.0   
http://maven.apache.org/xsd/maven-4.0.0.xsd">  
 
  <modelVersion>4.0.0</modelVersion>  
 
  <groupId>com.w3spoint.application1</groupId>  
  <artifactId>test-application1</artifactId>  
  <version>1.0</version>  
  <packaging>jar</packaging>  
 
  <name>Maven First Application</name>  
  <url>http://maven.apache.org</url>  
 
  <dependencies>  
    <dependency>  
      <groupId>junit</groupId>  
      <artifactId>junit</artifactId>  
      <version>4.8.2</version>  
      <scope>test</scope>  
    </dependency>  
  </dependencies>  
 
</project>
```

Combination of groupId, artifactId and version makes the coordinates of a Maven project and needs to be unique.

## POM < properties > Tag

Maven properties are value placeholders, like properties in Ant. Their values are accessible anywhere within a POM by using the notation ${X}, where X is the property.

Purpose of properties:

1. Reduces duplication 
2. Streamlines configurations 
3. Aids in upgrads (Need to update at just one place)

Example:

```xml
<properties>
    <jackson.version>2.10.2</jackson.version>
    <dropwizard.version>2.0.1</dropwizard.version>
    <websocket.version>1.4.0</websocket.version>
    <apachehttp.version>4.5.10</apachehttp.version>
</properties>

<dependencies>
    <dependency>
        <groupId>org.apache.httpcomponents</groupId>
        <artifactId>httpclient</artifactId>
        <version>${apachehttp.version}</version>
    </dependency>
    <dependency>
        <groupId>org.java-websocket</groupId>
        <artifactId>Java-WebSocket</artifactId>
        <version>${websocket.version}</version>
    </dependency>
    <dependency>
        <groupId>com.fasterxml.jackson.core</groupId>
        <artifactId>jackson-core</artifactId>
        <version>${jackson.version}</version>
    </dependency>
    <dependency>
        <groupId>com.fasterxml.jackson.core</groupId>
        <artifactId>jackson-annotations</artifactId>
        <version>${jackson.version}</version>
    </dependency>
    <dependency>
        <groupId>com.fasterxml.jackson.core</groupId>
        <artifactId>jackson-databind</artifactId>
        <version>${jackson.version}</version>
    </dependency>
    <dependency>
        <groupId>com.fasterxml.jackson.dataformat</groupId>
        <artifactId>jackson-dataformat-yaml</artifactId>
        <version>${jackson.version}</version>
    </dependency>
 <dependencies>
```

See:

1. [What does properties tag mean in pom.xml maven?](https://stackoverflow.com/questions/65696058/what-does-properties-tag-mean-in-pom-xml-maven)
2. [Maven Pom Properties](https://maven.apache.org/pom.html#Properties)

## POM < dependencies > Tag

See: [Maven Dependency Scopes](https://www.baeldung.com/maven-dependency-scopes)

Example:

```xml
<dependencies>
        <dependency>
            <groupId>com.fasterxml.jackson.core</groupId>
            <artifactId>jackson-core</artifactId>
            <version>${jackson.version}</version>
        </dependency>
        <dependency>
            <groupId>com.fasterxml.jackson.core</groupId>
            <artifactId>jackson-databind</artifactId>
            <version>${jackson.version}</version>
        </dependency>
        <dependency>
            <groupId>org.slf4j</groupId>
            <artifactId>slf4j-api</artifactId>
            <version>${slf4j.version}</version>
        </dependency>
        <dependency>
            <groupId>org.apache.directory.studio</groupId>
            <artifactId>org.apache.commons.io</artifactId>
            <version>2.4</version>
        </dependency>
        <dependency>
            <groupId>org.apache.commons</groupId>
            <artifactId>commons-lang3</artifactId>
            <version>3.8.1</version>
        </dependency>

        <dependency>
            <groupId>org.slf4j</groupId>
            <artifactId>slf4j-jdk14</artifactId>
            <version>${slf4j.version}</version>
            <scope>runtime</scope>
        </dependency>

        <dependency>
            <groupId>org.junit.jupiter</groupId>
            <artifactId>junit-jupiter-api</artifactId>
            <version>${junit.jupiter.verison}</version>
            <scope>test</scope>
        </dependency>
        <dependency>
            <groupId>org.junit.jupiter</groupId>
            <artifactId>junit-jupiter-params</artifactId>
            <version>${junit.jupiter.verison}</version>
            <scope>test</scope>
        </dependency>
        <dependency>
            <groupId>org.junit.jupiter</groupId>
            <artifactId>junit-jupiter-engine</artifactId>
            <version>${junit.jupiter.verison}</version>
            <scope>test</scope>
        </dependency>
</dependencies>
```

## POM < build > Tag

Example:

```xml
<build>
        <plugins>
            <plugin>
                <groupId>org.apache.maven.plugins</groupId>
                <artifactId>maven-compiler-plugin</artifactId>
                <version>3.8.0</version>
                <configuration>
                    <target>${java.version}</target>
                    <source>${java.version}</source>
                </configuration>
            </plugin>
            <plugin>
                <groupId>org.apache.maven.plugins</groupId>
                <artifactId>maven-site-plugin</artifactId>
                <version>3.7.1</version>
            </plugin>
            <plugin>
                <groupId>org.apache.maven.plugins</groupId>
                <artifactId>maven-surefire-plugin</artifactId>
                <version>${surefire.version}</version>
            </plugin>
        </plugins>
</build>
```

### POM < plugins > & < plugin > Tag

See: 

1. [Guide to Configuring Plug-ins](https://maven.apache.org/guides/mini/guide-configuring-plugins.html)
2. [Plugins in Maven and POM.xml](https://stackoverflow.com/questions/10547504/plugins-in-maven-and-pom-xml)

### Maven plugin vs dependency

See: [What is the difference in maven between dependency and plugin tags in pom xml?](https://stackoverflow.com/questions/11881663/what-is-the-difference-in-maven-between-dependency-and-plugin-tags-in-pom-xml)

## POM <reporting>

Example:

```xml
<reporting>
        <plugins>
            <plugin>
                <groupId>org.apache.maven.plugins</groupId>
                <artifactId>maven-surefire-report-plugin</artifactId>
                <version>${surefire.version}</version>
            </plugin>
        </plugins>
</reporting>
```
## Reactors and parents POM

See:

1. [Multi-Module Project with Maven](https://www.baeldung.com/maven-multi-module)
2. [Maven – Parent and Child POM Example](https://howtodoinjava.com/maven/maven-parent-child-pom-example/)

![](/Images/Maven02.png)

# Maven Archetype

Maven archetypes are project templates which can be generated for you by Maven. In other words, when you are starting a new project you can generate a template for that project with Maven. In Maven a template is called an archetype. Each Maven archetype thus corresponds to a project template that Maven can generate.

See:

1. [Guide to Maven Archetype](https://www.baeldung.com/maven-archetype)
2. [Introduction to Archetypes](https://maven.apache.org/guides/introduction/introduction-to-archetypes.html)
3. [Maven Archetypes](http://tutorials.jenkov.com/maven/maven-archetypes.html)
4. [What archetype to choose for a simple java project](https://stackoverflow.com/questions/7158348/what-archetype-to-choose-for-a-simple-java-project)

# Maven Build Lifecycle

See: [Maven Build Phases [YouTube]](https://youtu.be/IYRYbPR5Gek)

In Maven, there is three built-in build lifecycle, which are default, clean, and site. Every maven operations are coming under any of these maven lifecycles. The classification of these three lifecycles is based on the operation.

1. **Default:** Handle project deployment.
2. **Clean:** Handle project cleaning.
3. **Site:** Handle project site documentation.

Let's come closer with these lifecycles.

## Default lifecycle

The default lifecycle handles project deployments. A lifecycle can be divided into different steps which are called phases. The default lifecycle contains 23 phases which follow.

1. **validate**: Validating the project with all the necessary information is correct.
2. **initialize**: Initialize the build directories.
3. **generate-sources**: Generating the source code.
4. **process-sources**: Processing of source code by putting the code on the right place.
5. **generate-resources**: Generating resources information.
6. **process-resources**: Processing the resources by putting it in the right folder.
7. **compile:** Compilation of project source.
8. **process-classes**: Processing of generated compiled classes. E.g.: enhancing the bytecode, bytecode obfuscation..etc.
9. **generate-test-sources**: Generating the test source code.
10. **process-test-sources**: Processing of test source code.
11. **generate-test-resources**: Generation of resource for testing.
12. **process-test-resources**: processing of test resource, like copying it into the right directory.
13. **test-compile**: Compilation of test source code.
14. **process-test-classes**: Processing of compiled test class file. Like byte code enhancement, code obfuscation…etc.
15. **test**: Run the generated test cases using a unit test framework like JUnit.
16. **prepare-package**: Perform prepackaging operations. At the end of this phase, it is output an unpacked processed version of packaging.
17. **package**: Perform the packaging in a distributed format like jar, war or ear.
18. **pre-integration-test**: Preparation for the integration test
19. **integration-test**: Performing integration test.
20. **post-integration-test**: Perform the action required to perform after the integration test. Such as cleaning up the environment.
21. **verify**: Verifying the generated distributed package.
22. **install**: Install the package into the local repository.
23. **deploy**: Copying the final build to a remote repository.

## Clean lifecycle

1. **pre-clean**: Preparation for project cleaning.
2. **clean**: Cleaning all generated files of the previous build.
3. **post-clean**: Finalizing the cleaning process.

## Site lifecycle

1. **pre-site**: Execute the processes before project site generation.
2. **site**: Generating the project site documentation.
3. **post-site**: Finalizing the site generation and make ready for deployment.
4. **site-deploy**: Deploying the documentation to a web server.

Phases are executed in a specific order. This means that if we run a specific phase using the command:

```
mvn <PHASE>
```

**This won't only execute the specified phase but all the preceding phases as well.**

For example, if we run the *deploy* phase – which is the last phase in the *default* build lifecycle – that will execute all phases before the *deploy* phase as well, which is the entire *default* lifecycle:

```
mvn deploy
```

## Maven Goal

**Each phase is a sequence of goals, and each goal is responsible for a specific task.**

When we run a phase – all goals bound to this phase are executed in order.

See:

1. [Introduction to the Build Lifecycle](https://maven.apache.org/guides/introduction/introduction-to-the-lifecycle.html)
2. [Maven Goals and Phases](https://www.baeldung.com/maven-goals-phases)
3. [Maven Build Lifecycle Explained](https://medium.com/javarevisited/maven-build-lifecycle-explained-ede8494a3d48)
4. [MAVEN LIFE CYCLE - 2021](https://www.bogotobogo.com/Java/tutorials/Maven/Apache-Maven-Lifecycle.php)

## Maven Plugin

See: 

1. [Available Plugins](http://maven.apache.org/plugins/index.html)
2. [What are Maven Plugins?](https://www.tutorialspoint.com/maven/maven_plugins.htm)
3. [How to Create a Maven Plugin](https://www.baeldung.com/maven-plugin)

# Maven Dependency

# Maven Repository

A Maven Repository is a location, generally on a filesystem (either remote or local), where maven artifacts are stored and managed. Once artifacts have been stored in a maven repository, they are available for retrieval and inclusion in other maven projects.

![](/Images/Maven03.png)

A **maven repository** is a directory of packaged JAR file with pom.xml file. Maven searches for dependencies in the repositories. There are 3 types of maven repository:

1. Local Repository
2. Central Repository
3. Remote Repository

Maven searches for the dependencies in the following order:

**Local repository** then **Central repository** then **Remote repository**. 

If dependency is not found in these repositories, maven stops processing and throws an error.

## Local Repository

Maven local repository is located in your local system. It is created by the maven when you run any maven command.

```xml
Path: /Users/amitkuma/.m2/repository/
```

Post that the path depends on <groupId>, let's say is : 

```xml
<groupId>com.adobe.identity</groupId>
```

Then the Jar/War will be present on path:

```xml
Path: /Users/amitkuma/.m2/repository/com/adobe/identity/identity-resilience

amitkuma@Amits-MacBook-Pro identity-resilience % ls
1.13.0				1.22.0-SNAPSHOT			9.10.0-SNAPSHOT
1.19.0				1.23.0-SNAPSHOT			maven-metadata-local.xml
```

## Central Repository

Maven **central repository** is located on the web. It has been created by the apache maven community itself.

The path of central repository is: [http://repo1.maven.org/maven2/](https://repo1.maven.org/maven2/).

The central repository contains a lot of common libraries that can be viewed by this url [http://search.maven.org/#browse](https://search.maven.org/#browse).

## Remote Repository

Maven **remote repository** is located on the web. Most of libraries can be missing from the central repository such as JBoss library etc, so we need to define remote repository in pom.xml file.

Let's see the code to add the jUnit library in pom.xml file.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://maven.apache.org/POM/4.0.0    http://maven.apache.org/xsd/maven-4.0.0.xsd">
   
<modelVersion>4.0.0</modelVersion>

   <groupId>com.javatpoint.application1</groupId>
   <artifactId>my-application1</artifactId>
   <version>1.0</version>
   <packaging>jar</packaging>

   <name>Maven Quick Start Archetype</name>
   <url>http://maven.apache.org</url>

   <dependencies>
      <dependency>
         <groupId>junit</groupId>
         <artifactId>junit</artifactId>
         <version>4.8.2</version>
         <scope>test</scope>
      </dependency>
   </dependencies>
</project>
```

You can search any repository from Maven official website [mvnrepository.com](http://mvnrepository.com/).

# Reference

1. [Simple Explanation of Maven and pom.xml](https://youtu.be/KNGQ9JBQWhQ) [YouTube]
2. [Apache Maven Tutorial](https://www.baeldung.com/maven)
3. [Maven Common Commands](http://tutorials.jenkov.com/maven/maven-commands.html)
4. [Using Maven in IntelliJ IDEA](https://youtu.be/D1sRK8JLCQ4)
5. COURSE: [Introducing Maven](https://www.linkedin.com/learning/introducing-maven/building-java-the-maven-way?u=26886434) (LinkedIn Learning)
6. COURSE: [Java: Build Automation with Maven](https://www.linkedin.com/learning/java-build-automation-with-maven/pom-best-practices?u=26886434) (LinkedIn Learning)

