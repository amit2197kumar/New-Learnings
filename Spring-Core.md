# Spring Core Concepts
**[See Original Post On Notion For Better Readability](https://cream-forsythia-066.notion.site/Spring-Core-be30caca9ee747cdb2e763ab3e9888df)**

# What Is Spring?

1. Spring is a dependency injection framework to make java application loosely coupled.
2. Spring framework makes the easy development of javaEE application. Using modules like Spring MVC, Spring JDBC, Spring Security.

# What is dependency injection?

**Short** : It is a design pattern.

**Long** :
Dependency injection is a pattern we can use to implement IoC, where the control being inverted is setting an object's dependencies.
Connecting objects with other objects, or “injecting” objects into other objects, is done by an assembler rather than by the objects themselves.

# What is Inversion Of Control?

**Short** : The process of dependency injection is known as Inversion Of Control(IOC)

**Long** : 
Inversion of Control is a principle in software engineering which transfers the control of objects or portions of a program to a container or framework.

In contrast with traditional programming, in which our custom code makes calls to a library, IoC enables a framework to take control of the flow of a program and make calls to our custom code.
We can achieve Inversion of Control through various mechanisms such as: Strategy design pattern, Service Locator pattern, Factory pattern, and Dependency Injection (DI).

# Why need dependency injection?

To remove tight coupling from the code.
![](/Images/Spring-Tight-vs-Loose-Coupling.jpeg)

# What is Spring IoC Container?

Its a predefine program that comes with Spring framework.

Spring IoC Container manages the life-cycle of an object.

1. It create objects (know as beans)
2. It holds the objects (bean) in memory.
3. Injects one object into another (Dependency Injection)

![](/Images/Spring-IOC.jpeg)
Spring IoC Container Types (represent the container, used to get the beans from IoC Container)

1. BeanFactory (Interface)
2. ApplicationContext (Interface) ~ this one is widely used internally extend BeanFactory (Can be implemented using 3 ways)
    1. ClassPathXmlApplicationContext
    2. AnnotationConfigApplicationContext
    3. FileSystemXmlApplicationContext

In order to assemble beans, the container uses configuration metadata, which can be in the form of XML configuration or annotations.

# **What Is a Spring Bean?**

Every object that is under the control of Spring’s `ApplicationContext` in terms of *creation*, *orchestration*, and *destruction* is called a Spring Bean.

The most common way to define a Spring bean is using the `@Component` annotation:

```java
@Component
class MySpringBean {
  ...
}
```

If Spring’s component scanning is enabled, an object of `MySpringBean` will be added to the application context.

Another way is using Spring’s Java config:

```java
@Configuration
class MySpringConfiguration {

  @Bean
  public MySpringBean mySpringBean() {
		return new MySpringBean();
  }
}
```

# **Dependency Injection Ways**

Dependency Injection in Spring can be done through constructors, setters or fields.

## **Constructor-Based Dependency Injection**

In the case of [constructor-based dependency injection](https://www.baeldung.com/constructor-injection-in-spring), the container will invoke a constructor with arguments each representing a dependency we want to set.

```java
@Configuration
public class AppConfig {

    @Bean
    public Item item1() {
        return new ItemImpl1();
    }

    @Bean
    public Store store() {
        return new Store(item1());
    }
}
```

The *@Configuration* annotation indicates that the class is a source of bean definitions. We can also add it to multiple configuration classes.

We use the *@Bean* annotation on a method to define a bean. If we don't specify a custom name, then the bean name will default to the method name.

## **Setter-Based Dependency Injection**

For setter-based DI, the container will call setter methods of our class after invoking a no-argument constructor or no-argument static factory method to instantiate the bean.

```java
@Bean
public Store store() {
    Store store = new Store();
    store.setItem(item1());
    return store;
}
```

The Spring documentation recommends using constructor-based injection for mandatory dependencies, and setter-based injection for optional ones.

## **Field-Based Dependency Injection**

In case of Field-Based DI, we can inject the dependencies by marking them with an *@Autowired* annotation:

```java
public class Store {
    @Autowired
    private Item item; 
}
```

While constructing the *Store* object, if there's no constructor or setter method to inject the *Item* bean, the container will use reflection to inject *Item* into *Store*.

See: [Intro to Inversion of Control and Dependency Injection with Spring](https://www.baeldung.com/inversion-control-and-dependency-injection-in-spring)
Also see: [Constructor Dependency Injection in Spring](https://www.baeldung.com/constructor-injection-in-spring)

# **Spring Bean Lifecycle**

See what are different phases of **Spring Bean Lifecycle**

Following is a great artical with code example to understand the same: **[Hooking Into the Spring Bean Lifecycle](https://reflectoring.io/spring-bean-lifecycle/)**

![](/Images/spring-bean-lifecycle.png)
Spring @PostConstruct and @PreDestroy annotations is something that's useful to know about 

Read here:

1. [The Lifecycle of Spring Beans](https://medium.com/swlh/the-lifecycle-of-spring-beans-b0edb8936189)
2. [Spring Bean Life Cycle](https://www.journaldev.com/2637/spring-bean-life-cycle)

# Autowiring in Spring

Defination: Autowiring is a feature of spring framework in which spring containers inject the dependencies automatically.

Advantage:

- Automatic
- Less Code

Disadvantage: 

- Autowiring can't be used to inject primitive and string values. It works with reference(Object) only.
- No control of programmer.

To use Java-based configuration in our application, let's enable annotation-driven injection **to load our Spring configuration:

```java
@Configuration
@ComponentScan("com.baeldung.autowire.sample")
public class AppConfig {}
```

Moreover, **Spring Boot introduces the *[@SpringBootApplication](https://www.baeldung.com/spring-boot-annotations#spring-boot-application)* annotation**. This single annotation is equivalent to using *@Configuration*, *@EnableAutoConfiguration*, and *@ComponentScan*.

After enabling annotation injection, **we can use autowiring on properties, setters, and constructors**.

## ***@Autowired* on Properties**

First, let's define a *fooFormatter* bean:

```java
@Component("fooFormatter")
public class FooFormatter {
    public String format() {
        return "foo";
    }
}
```

Then, we'll inject this bean into the *FooService* bean using *@Autowired* on the field definition:

```java
@Component
public class FooService {  
    @Autowired
    private FooFormatter fooFormatter;
}
```

## ***@Autowired* on Setters**

In the following example, the setter method is called with the instance of *FooFormatter* when *FooService* is created:

```java
public class FooService {
    private FooFormatter fooFormatter;
    @Autowired
    public void setFooFormatter(FooFormatter fooFormatter) {
        this.fooFormatter = fooFormatter;
    }
}
```

## ***@Autowired* on Constructors**

We'll see that an instance of *FooFormatter* is injected by Spring as an argument to the *FooService* constructor:

```java
public class FooService {
    private FooFormatter fooFormatter;
    @Autowired
    public FooService(FooFormatter fooFormatter) {
        this.fooFormatter = fooFormatter;
    }
}
```

Also see:

1. [The Spring *@Qualifier* Annotation](https://www.baeldung.com/spring-qualifier-annotation)
2. [Spring *@Primary* Annotation](https://www.baeldung.com/spring-primary)
3. [Spring Bean Scopes](https://www.journaldev.com/21039/spring-bean-scopes) (Important)

# Reference

1. [Spring Dependency Injection - Index](https://www.baeldung.com/spring-dependency-injection)
2. [Spring Framework Tutorial in Hindi](https://www.youtube.com/watch?v=KRMNTudb0AY&list=PL0zysOflRCekeiERASkpi-crREVensZGS)
3. [Important Concepts Of The Spring Framework](https://ashismo.github.io/java-java/j2ee%20popular%20topics/2015/05/22/Important-Concepts-of-the-Spring-Framework)
4. [Core Concepts Of The Spring Framework](https://www.dariawan.com/tutorials/spring/core-concepts-of-the-spring-framework/)
5. [Spring, Spring Core, Spring IoC Interview Questions](https://www.interviewbit.com/spring-interview-questions/#spring-spring-core-spring-ioc)

# Code Examples Of Above Concepts

Checkout Source-code: https://github.com/kumar2197/SpringCORE

Classes: `ExamNotes`, `Student`, `ExamPapers` and `Teacher`

Config Class: `JavaConfig`

Main class: `SpringDemoApplication`

```java
package com.example.springdemo;

public class ExamNotes {
    public void display() {
        System.out.println("Returning the Exam Notes");
    }
}
```

```java
package com.example.springdemo;

public class Student {
    private ExamNotes examNotes;

    // Injecting exam obj in Student
    // Here we are doing Dependency Injection without using @Autowired
    // When we have just one Constructor, we are not required to write @Autowired
    public Student(ExamNotes examNotes) {
        this.examNotes = examNotes;
    }

    public void display() {
        examNotes.display();
        System.out.println(examNotes);
        System.out.println("Student got the Exam Notes");
    }

}
```

```java
package com.example.springdemo;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Scope;

@Configuration
public class JavaConfig {
    @Bean(name = {"finalExamination","semiFinalExamination"})
    @Scope(value="prototype")
    public ExamNotes getExam() {
        return new ExamNotes();
    }

    @Bean
    public Student getStudent() {
        Student student = new Student(getExam());
        return student;
    }
}
```

```java
package com.example.springdemo;

import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;
import javax.annotation.PreDestroy;

@Component
public class ExamPapers {

    @PostConstruct
    public void testPostConstructFunction() {
        System.out.println("Testing @PostConstruct functionality");
    }

    public void getExamPapers() {
        System.out.println("Returning Exam Papers");
    }

    @PreDestroy
    public void testPreDestroyFunction() {
        System.out.println("Testing @PreDestroy functionality");
    }
}
```

```java
package com.example.springdemo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class Teacher {
    private ExamPapers examPapers;

    // Injecting ExamPapers obj in Teacher
    // Here we are doing Dependency Injection using @Autowired
    // @Component been used with class ExamPapers
    @Autowired
    public Teacher(ExamPapers examPapers) {
        this.examPapers = examPapers;
    }

    public Teacher() {
        System.out.println("Default Constructor");
    }

    public void giveExamPapers() {
        examPapers.getExamPapers();
        System.out.println(examPapers);
        System.out.println("Teacher got the Exam Papers");
    }
}
```

Main Class:

```java
package com.example.springdemo;

import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

@Configuration
@ComponentScan
public class SpringDemoApplication {

    public static void main(String[] args) {
        ApplicationContext context = new AnnotationConfigApplicationContext(SpringDemoApplication.class);

        // Exam object is with Spring IOC, as we have defined bean for Exam in JavaConfig class
        // In JavaConfig class we have given the bean name "finalExamination"
        ExamNotes examNotes = context.getBean("finalExamination", ExamNotes.class);
        examNotes.display();
        System.out.println(examNotes);

        // Student object is with Spring IOC, as we have defined bean for Student in JavaConfig class
        Student student = context.getBean("getStudent", Student.class);
        student.display();
        System.out.println(student);

        // Exam object is with Spring IOC, as we have added @Component with class ExamPapers
        // All classes with @Component -> bean created and managed by Spring IOC
        // @Component  is searched as we have used @ComponentScan in main class
        ExamPapers examPapers = context.getBean(ExamPapers.class);
        examPapers.getExamPapers();
        System.out.println(examPapers);

        // Teacher object is with Spring IOC, as we have added @Component with class Teacher
        // All classes with @Component -> bean created and managed by Spring IOC
        // @Component  is searched as we have used @ComponentScan in main class
        Teacher teacher = context.getBean(Teacher.class);
        teacher.giveExamPapers();
        System.out.println(teacher);
    }
}
```

Once run, we got the following output: **[Important to have a look]**

```xml
21:44:43.221 [main] DEBUG org.springframework.context.annotation.AnnotationConfigApplicationContext - Refreshing org.springframework.context.annotation.AnnotationConfigApplicationContext@6956de9
21:44:43.240 [main] DEBUG org.springframework.beans.factory.support.DefaultListableBeanFactory - Creating shared instance of singleton bean 'org.springframework.context.annotation.internalConfigurationAnnotationProcessor'
 
-> Observations [1]: @Component class beans
21:44:43.290 [main] DEBUG org.springframework.context.annotation.ClassPathBeanDefinitionScanner - Identified candidate component class: file [/Users/amitkuma/Desktop/SpringDemo/target/classes/com/example/springdemo/ExamPapers.class]
21:44:43.296 [main] DEBUG org.springframework.context.annotation.ClassPathBeanDefinitionScanner - Identified candidate component class: file [/Users/amitkuma/Desktop/SpringDemo/target/classes/com/example/springdemo/JavaConfig.class]
21:44:43.297 [main] DEBUG org.springframework.context.annotation.ClassPathBeanDefinitionScanner - Identified candidate component class: file [/Users/amitkuma/Desktop/SpringDemo/target/classes/com/example/springdemo/Teacher.class]

21:44:43.384 [main] DEBUG org.springframework.beans.factory.support.DefaultListableBeanFactory - Creating shared instance of singleton bean 'org.springframework.context.event.internalEventListenerProcessor'
21:44:43.387 [main] DEBUG org.springframework.beans.factory.support.DefaultListableBeanFactory - Creating shared instance of singleton bean 'org.springframework.context.event.internalEventListenerFactory'
21:44:43.388 [main] DEBUG org.springframework.beans.factory.support.DefaultListableBeanFactory - Creating shared instance of singleton bean 'org.springframework.context.annotation.internalAutowiredAnnotationProcessor'
21:44:43.389 [main] DEBUG org.springframework.beans.factory.support.DefaultListableBeanFactory - Creating shared instance of singleton bean 'org.springframework.context.annotation.internalCommonAnnotationProcessor'

-> Observations [2]: Bean creations IOC
21:44:43.399 [main] DEBUG org.springframework.beans.factory.support.DefaultListableBeanFactory - Creating shared instance of singleton bean 'springDemoApplication'
21:44:43.404 [main] DEBUG org.springframework.beans.factory.support.DefaultListableBeanFactory - Creating shared instance of singleton bean 'examPapers'
Testing @PostConstruct functionality
21:44:43.407 [main] DEBUG org.springframework.beans.factory.support.DefaultListableBeanFactory - Creating shared instance of singleton bean 'javaConfig'
21:44:43.408 [main] DEBUG org.springframework.beans.factory.support.DefaultListableBeanFactory - Creating shared instance of singleton bean 'teacher'
21:44:43.421 [main] DEBUG org.springframework.beans.factory.support.DefaultListableBeanFactory - Autowiring by type from bean name 'teacher' via constructor to bean named 'examPapers'
21:44:43.422 [main] DEBUG org.springframework.beans.factory.support.DefaultListableBeanFactory - Creating shared instance of singleton bean 'getStudent'

-> Observations [3]: ExamNotes bean are different as we have used @Scope(value="prototype")
Returning the Exam Notes
com.example.springdemo.ExamNotes@dd0c991

Returning the Exam Notes
com.example.springdemo.ExamNotes@5f16132a
Student got the Exam Notes
com.example.springdemo.Student@69fb6037

-> Observations [4]: ExamPapers bean remain same, as by default @Scope is singleton
Returning Exam Papers
com.example.springdemo.ExamPapers@55f616cf

Returning Exam Papers
com.example.springdemo.ExamPapers@55f616cf
Teacher got the Exam Papers
com.example.springdemo.Teacher@1356d4d4

Process finished with exit code 0
```
