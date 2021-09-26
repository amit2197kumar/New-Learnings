# Junit & Mockito Basics
**[See Original Post On Notion For Better Readability](https://cream-forsythia-066.notion.site/Junit-Mockito-Basics-md-d8ae1070b6a049f784f7b37f7c6ae8b9)**

# JUnit test basic annotation and examples:

```java
package com.example.Junit;

import org.junit.*;
import org.springframework.boot.test.context.SpringBootTest;
import java.util.Arrays;

@SpringBootTest
public class StringHelperTest {

    StringHelper stringHelper = new StringHelper();

    /***************************************************************************************/
    // Before annotations in tests

    //Runs before every test
    @Before
    public void setUp() {
        System.out.println("Before Test");
    }

    //Runs once before any test run starts
    //Static keyword is mandate
    @BeforeClass
    public static void beforeClassTest() {
        System.out.println("BeforeClass Test");
    }

    /***************************************************************************************/
    // After annotations in tests

    //Runs after every test
    @After
    public void tearDown() {
        System.out.println("After");
    }

    //Runs once after all the test run is finished
    //Static keyword is mandate
    @AfterClass
    public static void afterClass() {
        System.out.println("AfterClass test");
    }

    /***************************************************************************************/
    // Test annotation, what is  assertEquals, assertTrue and assertFalse

    @Test
    public void test_truncateAInFirst2Positions() {
        Assert.assertEquals("Any informative message can be added here",
                "CD",stringHelper.truncateAInFirst2Positions("AACD"));
    }

    @Test
    public void test_areFirstAndLastTwoCharactersTheSame_returnTrue() {
        Assert.assertTrue(stringHelper.areFirstAndLastTwoCharactersTheSame("CAACA"));
    }

    @Test
    public void test_areFirstAndLastTwoCharactersTheSame_returnFalse() {
        Assert.assertFalse(stringHelper.areFirstAndLastTwoCharactersTheSame("CAACB"));
    }

    @Test
    public void test_areFirstAndLastTwoCharactersTheSame_OneChar_returnFalse() {
        Assert.assertFalse("Any informative message can be added here" ,
                stringHelper.areFirstAndLastTwoCharactersTheSame("A"));
    }

    /***************************************************************************************/
    // assertArrayEquals annotation

    @Test
    public void test_Arrays() {
        int number[] = {11, 4, 24, 9};
        int sortedNumber[] = {4, 9, 11, 24};

        Arrays.sort(number);
        Assert.assertArrayEquals(number, sortedNumber);
    }

    /***************************************************************************************/
    // Testing exceptions in JUnit

    @Test(expected = NullPointerException.class)
    public void test_ExpectNPE() {
        int number[] = null;
        Arrays.sort(number);
    }

    /***************************************************************************************/
    // Testing performance in JUnit

    // 1000 will be in milliseconds
    @Test(timeout = 1000)
    public void test_Performance() {
        int number[] = {3,2,1};
        for(int i=0; i<1_00_00_000; i++) {
            number[0] = i;
            Arrays.sort(number);
        }
    }
}
```

# Mockito

### Pom.xml dependency

```xml
<dependencies>
        <dependency>
            <groupId>junit</groupId>
            <artifactId>junit</artifactId>
            <version>4.12</version>
            <scope>test</scope>
        </dependency>
        <dependency>
            <groupId>org.mockito</groupId>
            <artifactId>mockito-all</artifactId>
            <version>1.10.19</version>
            <scope>test</scope>
        </dependency>
</dependencies>
```

[Mock vs. Stub vs. Spy](https://www.javatpoint.com/mock-vs-stub-vs-spy)

[Difference between Stub and Mock object in Java Unit testing - JUnit](https://javarevisited.blogspot.com/2014/04/difference-between-stub-and-mock-object-java-junit.html) (read comments)

[How to use stubs in JUnit and Java?](https://stackoverflow.com/questions/31890991/how-to-use-stubs-in-junit-and-java)

[Differences between Stubbing and Mocking](https://www.toolsqa.com/blogs/differences-between-stubbing-and-mocking/)

## Stub example

### Example: Src files

TodoService: interface that is implemented by some external team

A todo interface, that takes a user and returns the tasts of that user

```java
// External Service
public interface TodoService {
    public List<String> retrieveTodos(String user);
}
```

TodoBusinessImpl: Class that uses TodoService

We are getting all the task for a user and returning those tasks that are related to "spring"

```java
public class TodoBusinessImpl {
    private TodoService todoService;

    TodoBusinessImpl(TodoService todoService) {
        this.todoService = todoService;
    }

    public List<String> retrieveTodosRelatedToSpring(String user) {
        List<String> filteredTodos = new ArrayList<String>();
        List<String> allTodos = todoService.retrieveTodos(user);
        for (String todo : allTodos) {
            if (todo.contains("Spring")) {
                filteredTodos.add(todo);
            }
        }
        return filteredTodos;
    }
}
```

### Example: Test files

TodoServiceStub: This is a STUB

```java
// This is a STUB
public class TodoServiceStub implements TodoService{
    @Override
    public List<String> retrieveTodos(String user) {
        String task1 = "Learn Spring MVC";
        String task2 = "Learn Spring";
        String task3 = "Learn to Dance";

        return Arrays.asList(task1, task2, task3);
    }
}
```

TodoBusinessImplTest

```java
public class TodoBusinessImplTest {

    @Test
    public void testRetrieveToDoRelatedToSpring() {
        TodoService todoServiceStub = new TodoServiceStub();
        TodoBusinessImpl todoBusiness = new TodoBusinessImpl(todoServiceStub);
        List<String> todos = todoBusiness.retrieveTodosRelatedToSpring("Dummy");
        Assert.assertEquals(2, todos.size());
    }
}
```

## Mock example

src file remains same as in above example

### Example: Test file

TodoBusinessImplTest

```java
@Test
public void testRetrieveToDoRelatedToSpring_withMock() {
        TodoService todoServiceMock = mock(TodoService.class);
        List<String> allTodos = Arrays.asList("Learn Spring MVC", "Learn Spring", "Learn to Dance");
        when(todoServiceMock.retrieveTodos("Dummy")).thenReturn(allTodos);

        TodoBusinessImpl todoBusinessImpl = new TodoBusinessImpl(todoServiceMock);
        List<String> todos = todoBusinessImpl.retrieveTodosRelatedToSpring("Dummy");
        Assert.assertEquals(2, todos.size());
}
```

## More mock examples

```java
package com.example.Junit.Mockito;

import org.junit.Assert;
import org.junit.Test;

import java.util.List;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyInt;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

public class ListMockExampleTest {
    
    @Test
    public void testMockListSizeMethod() {
        List listMock = mock(List.class);
        when(listMock.size()).thenReturn(2);

        Assert.assertEquals(2, listMock.size());
    }

    @Test
    public void testMockListSizeMethod_returnMultipleValues() {
        List listMock = mock(List.class);
        when(listMock.size()).thenReturn(2).thenReturn(3).thenReturn(0);

        Assert.assertEquals(2, listMock.size());
        Assert.assertEquals(3, listMock.size());
        Assert.assertEquals(0, listMock.size());
    }

    @Test
    public void testMockListGetMethod() {
        List listMock = mock(List.class);
        when(listMock.get(0)).thenReturn("Atomic_Habits");

        Assert.assertEquals("Atomic_Habits", listMock.get(0));
        Assert.assertEquals(null, listMock.get(1));
    }

    @Test
    public void testMockListGetMethod_argumentMatcher() {
        List listMock = mock(List.class);
        // This is an example of Argument Matcher (anyInt(), anyChar(), anyObject() ...)
        when(listMock.get(anyInt())).thenReturn("Atomic_Habits");

        Assert.assertEquals("Atomic_Habits", listMock.get(0));
        Assert.assertEquals("Atomic_Habits", listMock.get(1));
    }

    @Test(expected = RuntimeException.class)
    public void testMockListGetMethod_throwException() {
        List listMock = mock(List.class);
        when(listMock.get(any())).thenThrow(new RuntimeException("Something went wrong"));
        listMock.get(0);
    }
}
```

## Mockito: Behavior-driven development (BDD)

[Behavior-driven development (BDD)](https://www.javatpoint.com/mockito-behavior-driven-development)

[Quick Guide to BDDMockito](https://www.baeldung.com/bdd-mockito)

```java
public class ListMockExampleTestWithBDD {
		@Test
    public void testMockListGetMethod() {
        List listMock = mock(List.class);
        when(listMock.get(0)).thenReturn("Atomic_Habits");

        Assert.assertEquals("Atomic_Habits", listMock.get(0));
    }

		/*
		With BDD Mockito
		when : given
		thenReturn : willReturn
		assertEquals : assertThat
		*/
		@Test
    public void testMockListGetMethod_usingBDD() {
        // Given
        List<String> listMock = mock(List.class);
        given(listMock.get(0)).willReturn("Atomic_Habits");

        // When
        String firstElement = listMock.get(0);

        // Then
        Assert.assertThat(firstElement, is("Atomic_Habits"));
    }
}
```

## Mockito: Verify

[Mockito Verify Cookbook](https://www.baeldung.com/mockito-verify)

[Mockito Verify](https://www.journaldev.com/21855/mockito-verify)

### Example: Src files

TodoService: interface that is implemented by some external team

```java
public interface TodoService {
    void deleteTodo(String todo);
}
```

TodoBusinessImpl: Class that uses TodoService

deleteTodosNotRelatedToSpring: deletes all tasks not related to "Spring"

```java
public class TodoBusinessImpl {
    private TodoService todoService;

    TodoBusinessImpl(TodoService todoService) {
        this.todoService = todoService;
    }

    public void deleteTodosNotRelatedToSpring(String user) {
        List<String> allTodos = todoService.retrieveTodos(user);
        for (String todo : allTodos) {
            if (!todo.contains("Spring")) {
                todoService.deleteTodo(todo);
            }
        }
    }
}
```

### Example: Test files

TodoBusinessImplTest: See the examples of verify function 

Verify is used to check regarding a specific function/methord 

```java
package com.example.Junit.Mockito;

import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;
import static org.mockito.Mockito.verify;

import org.junit.Assert;
import org.junit.Test;
import org.mockito.Mockito;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.Arrays;
import java.util.List;

@SpringBootTest
public class TodoBusinessImplTest {

    @Test
    public void letsTestDeleteNow() {

        TodoService todoService = mock(TodoService.class);
        List<String> allTodos = Arrays.asList("Learn Spring MVC", "Learn Spring", "Learn to Dance");
        when(todoService.retrieveTodos("Dummy")).thenReturn(allTodos);

        TodoBusinessImpl todoBusinessImpl = new TodoBusinessImpl(todoService);

        todoBusinessImpl.deleteTodosNotRelatedToSpring("Dummy");

        // verify deleteTodo been called for sure
        verify(todoService).deleteTodo("Learn to Dance");

        // verify deleteTodo been never called
        verify(todoService, Mockito.never()).deleteTodo("Learn Spring MVC");

        // verify deleteTodo been called number of times
        verify(todoService, Mockito.times(1)).deleteTodo("Learn to Dance");
        // atLeastOnce, atLeast
        // Must see other functions: https://www.baeldung.com/mockito-verify
    }
}
```

## Mockito capture arguments

[Using Mockito ArgumentCaptor](https://www.baeldung.com/mockito-argumentcaptor)

[Mockito ArgumentCaptor, @Captor Annotation](https://www.journaldev.com/21892/mockito-argumentcaptor-captor-annotation)

[Can Mockito capture arguments of a method called multiple times?](https://stackoverflow.com/questions/5981605/can-mockito-capture-arguments-of-a-method-called-multiple-times)

# Mockito Advanced

## Hamcrest Matchers

[Testing with Hamcrest](https://www.baeldung.com/java-junit-hamcrest-guide)

[Hamcrest Matchers](https://www.javatpoint.com/mockito-hamcrest-matchers)

[Hamcrest Tutorial](http://hamcrest.org/JavaHamcrest/tutorial)

Maven dependency:

```xml
<dependency>
     <groupId>org.hamcrest</groupId>
     <artifactId>hamcrest-library</artifactId>
     <version>1.3</version>
     <scope>test</scope>
</dependency>
```

Some examples:

```java
package com.example.Junit.AdvancedMockito;

import org.junit.Test;

import java.util.Arrays;
import java.util.List;

import static org.hamcrest.CoreMatchers.hasItems;
import static org.hamcrest.Matchers.arrayContainingInAnyOrder;
import static org.hamcrest.Matchers.arrayWithSize;
import static org.hamcrest.Matchers.everyItem;
import static org.hamcrest.Matchers.greaterThan;
import static org.hamcrest.Matchers.hasSize;
import static org.hamcrest.Matchers.emptyString;
import static org.hamcrest.Matchers.blankOrNullString;
import static org.hamcrest.Matchers.lessThan;
import static org.junit.Assert.assertThat;

public class HamcrestMatchersTest {

    @Test
    public void basicHamcrestMatchersTests() {
        List<Integer> scores = Arrays.asList(99, 100, 101, 102);

        // Score has checks
        assertThat(scores, hasSize(4));
        assertThat(scores, hasItems(101, 99));

        // Item value checks
        assertThat(scores, everyItem(greaterThan(90)));
        assertThat(scores, everyItem(lessThan(200)));

        // Check for String
        assertThat("", emptyString());
        assertThat(null, blankOrNullString());

        // Check for Array
        Integer[] marks = { 1, 2, 3 };

        assertThat(marks, arrayWithSize(3));
        assertThat(marks, arrayContainingInAnyOrder(2, 3, 1));
    }
}
```

Advice: Check Methords in Matchers.class file

## Annotations

JUnit without using annotations:

```java
package com.example.Junit.Mockito;

import org.junit.Assert;
import org.junit.Test;
import org.mockito.Mockito;

import java.util.Arrays;
import java.util.List;

import static org.mockito.Mockito.*;
import static org.mockito.Mockito.verify;

public class TodoBusinessImplAnnotationTest {

    @Test
    public void testRetrieveToDoRelatedToSpring() {
        TodoService todoServiceMock = mock(TodoService.class);
        List<String> allTodos = Arrays.asList("Learn Spring MVC", "Learn Spring", "Learn to Dance");
        when(todoServiceMock.retrieveTodos("Dummy")).thenReturn(allTodos);

        TodoBusinessImpl todoBusinessImpl = new TodoBusinessImpl(todoServiceMock);
        List<String> todos = todoBusinessImpl.retrieveTodosRelatedToSpring("Dummy");
        Assert.assertEquals(2, todos.size());
    }

    @Test
    public void testDeleteNow_usingBDD() {

        TodoService todoServiceMock = mock(TodoService.class);
        List<String> allTodos = Arrays.asList("Learn Spring MVC", "Learn Spring", "Learn to Dance");
        when(todoServiceMock.retrieveTodos("Dummy")).thenReturn(allTodos);

        TodoBusinessImpl todoBusinessImpl = new TodoBusinessImpl(todoServiceMock);

        todoBusinessImpl.deleteTodosNotRelatedToSpring("Dummy");

        // verify deleteTodo been called for sure
        verify(todoServiceMock).deleteTodo("Learn to Dance");

        // verify deleteTodo been never called
        verify(todoServiceMock, Mockito.never()).deleteTodo("Learn Spring MVC");

        // verify deleteTodo been called number of times
        verify(todoServiceMock, Mockito.times(1)).deleteTodo("Learn to Dance");
        // atLeastOnce, atLeast
        // Must see other functions: https://www.baeldung.com/mockito-verify
    }
}
```

Mockito Annotations

- @Mock
- @InjectMocks
- [@RunWith(MockitoJUnitRunner.class)](https://www.baeldung.com/junit-5-runwith)

JUnit using annotations: (Same above code)

```java
package com.example.Junit.Mockito;

import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.MockitoJUnitRunner;

import java.util.Arrays;
import java.util.List;

import static org.mockito.Mockito.*;
import static org.mockito.Mockito.verify;

// When we are using @Mock annotation, its requires to have @RunWith(MockitoJUnitRunner.class)
@RunWith(MockitoJUnitRunner.class)
public class TodoBusinessImplAnnotationTest {

    // In place of: TodoService todoServiceMock = mock(TodoService.class);
    @Mock
    TodoService todoServiceMock;

    // In place of: TodoBusinessImpl todoBusinessImpl = new TodoBusinessImpl(todoServiceMock);
    @InjectMocks
    TodoBusinessImpl todoBusinessImpl;

    @Test
    public void testRetrieveToDoRelatedToSpring() {
        List<String> allTodos = Arrays.asList("Learn Spring MVC", "Learn Spring", "Learn to Dance");
        when(todoServiceMock.retrieveTodos("Dummy")).thenReturn(allTodos);

        List<String> todos = todoBusinessImpl.retrieveTodosRelatedToSpring("Dummy");
        Assert.assertEquals(2, todos.size());
    }

    @Test
    public void testDeleteNow_usingBDD() {
        List<String> allTodos = Arrays.asList("Learn Spring MVC", "Learn Spring", "Learn to Dance");
        when(todoServiceMock.retrieveTodos("Dummy")).thenReturn(allTodos);

        todoBusinessImpl.deleteTodosNotRelatedToSpring("Dummy");

        // verify deleteTodo been called for sure
        verify(todoServiceMock).deleteTodo("Learn to Dance");

        // verify deleteTodo been never called
        verify(todoServiceMock, Mockito.never()).deleteTodo("Learn Spring MVC");

        // verify deleteTodo been called number of times
        verify(todoServiceMock, Mockito.times(1)).deleteTodo("Learn to Dance");
        // atLeastOnce, atLeast
        // Must see other functions: https://www.baeldung.com/mockito-verify
    }
}
```

## Rules

When we use @RunWith annotation, we can use only one runner class name. Earlier it was fine, but as now we are moving away from hatdcoded stuff, it can be the case that we want multipal runner to be part of our test file.

[JUnit Rules](https://www.javatpoint.com/mockito-junit-rules)

[Guide to JUnit 4 Rules](https://www.baeldung.com/junit-4-rules)

Example:

```java
// When we are using @Mock annotation, its requires to have @RunWith(MockitoJUnitRunner.class)
@RunWith(MockitoJUnitRunner.class)
public class TodoBusinessImplAnnotationTest {
		//Tests
}

//Will Become:

public class TodoBusinessImplAnnotationTest {
		// When we are using @Mock annotation, its requires to have @RunWith(MockitoJUnitRunner.class)
    @Rule
    public MockitoRule mockitoRule = MockitoJUnit.rule();
}
```

## Mockito Spy

[Mockito – Using Spies](https://www.baeldung.com/mockito-spy)

[Mockito Mock vs. Spy in Spring Boot Tests](https://dzone.com/articles/mockito-mock-vs-spy-in-spring-boot-tests)

[What is the difference between mocking and spying when using Mockito?](https://stackoverflow.com/questions/15052984/what-is-the-difference-between-mocking-and-spying-when-using-mockito)

[Mockito Spy – Partial Mock](https://www.journaldev.com/21872/mockito-spy-partial-mock)

Example:

```java
package com.example.Junit.Mockito;

import org.junit.Assert;
import org.junit.jupiter.api.Test;
import static org.mockito.Mockito.spy;
import static org.mockito.Mockito.verify;

import java.util.ArrayList;
import java.util.List;

public class SpyTest {
    @Test
    public void creatingASpyOnArrayList() {
        List<String> listSpy = spy(ArrayList.class);
        listSpy.add("Atomic");
        listSpy.add("Habits");

        verify(listSpy).add("Atomic");
        verify(listSpy).add("Habits");

        Assert.assertEquals(2, listSpy.size());
        Assert.assertEquals("Atomic", listSpy.get(0));
    }
}
```

**Q. Why does Mockito not allow stubbing final and private methods?**

- [https://github.com/mockito/mockito/wiki/Mockito-And-Private-Methods](https://github.com/mockito/mockito/wiki/Mockito-And-Private-Methods)
- [https://github.com/mockito/mockito/wiki/FAQ](https://github.com/mockito/mockito/wiki/FAQ)

# Powermock with Mockito

Maven dependency:

```xml
<!-- PowerMock Dependency Start -->
        <dependency>
            <groupId>org.powermock</groupId>
            <artifactId>powermock-api-mockito2</artifactId>
            <version>2.0.4</version>
            <scope>test</scope>
        </dependency>
        <dependency>
            <groupId>org.powermock</groupId>
            <artifactId>powermock-module-junit4</artifactId>
            <version>2.0.4</version>
            <scope>test</scope>
        </dependency>
<!-- PowerMock Dependency End -->
```

[Introduction to PowerMock](https://www.baeldung.com/intro-to-powermock)

[Mockito Mock Static Method – PowerMock](https://www.journaldev.com/21912/mockito-mock-static-method-powermock)

### Example: Src files

Static function class: UtilityClass

```java
public class UtilityClass {
    static int staticMethod(long value) {
        // Some complex logic is done here...
        throw new RuntimeException(
                "I dont want to be executed. I will anyway be mocked out.");
    }
}
```

SystemUnderTest

```java
package com.example.Junit.Powermock;

import java.util.ArrayList;
import java.util.List;

interface Dependency {
    List<Integer> retrieveAllStats();
}

public class SystemUnderTest {
    private Dependency dependency;

    public int methodUsingAnArrayListConstructor() {
        ArrayList list = new ArrayList();
        return list.size();
    }

    public int methodCallingAStaticMethod() {
        //privateMethodUnderTest calls static method SomeClass.staticMethod
        List<Integer> stats = dependency.retrieveAllStats();
        long sum = 0;
        for (int stat : stats)
            sum += stat;
        
        // Static method been called
        return UtilityClass.staticMethod(sum);
    }

    private long privateMethodUnderTest() {
        List<Integer> stats = dependency.retrieveAllStats();
        long sum = 0;
        for (int stat : stats)
            sum += stat;
        return sum;
    }
}
```

### Example: Test files

SystemUnderTestTest

```java
package com.example.Junit.Powermock;

import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.powermock.api.mockito.PowerMockito;
import org.powermock.core.classloader.annotations.PrepareForTest;
import org.powermock.modules.junit4.PowerMockRunner;

import static org.mockito.Mockito.*;

import java.util.Arrays;
import java.util.List;

@RunWith(PowerMockRunner.class)
@PrepareForTest(UtilityClass.class)
public class SystemUnderTestTest {

    @Mock
    Dependency dependency;

    @InjectMocks
    SystemUnderTest systemUnderTest;

    @Test
    public void  powerMockStaticMethodsTest() {
        List<Integer> stats = Arrays.asList(1,2,3,4,5);
        when(dependency.retrieveAllStats()).thenReturn(stats);

        PowerMockito.mockStatic(UtilityClass.class);
        when(UtilityClass.staticMethod(anyLong())).thenReturn(100);

        Assert.assertEquals(100, systemUnderTest.methodCallingAStaticMethod());

        //To verify a specific method call
        //First : Call PowerMockito.verifyStatic()
        //Second : Call the method to be verified
        PowerMockito.verifyStatic(UtilityClass.class);
        UtilityClass.staticMethod(1 + 2 + 3 + 4 + 5);
    }
}

// Need to follow these steps to use powermock:
// 1. Specific Runner
// 2. Initialize UtilityClass.class
// 3. Mock that fn()
```

## Invoke Private Methord

Not recommended, but in case we are calling some legacy system we can use this.

SRC file is same as in above example, function name is : privateMethodUnderTest()

Test files: PowerMockitoTestingPrivateMethodTest

```java
package com.example.Junit.Powermock;

import static org.junit.Assert.assertEquals;
import static org.mockito.Mockito.when;

import java.util.Arrays;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.powermock.modules.junit4.PowerMockRunner;
import org.powermock.reflect.Whitebox;

@RunWith(PowerMockRunner.class)
public class PowerMockitoTestingPrivateMethodTest {

	@Mock
	Dependency dependencyMock;

	@InjectMocks
	SystemUnderTest systemUnderTest;

	@Test
	public void powerMockito_CallingAPrivateMethod() throws Exception {
		when(dependencyMock.retrieveAllStats()).thenReturn(
				Arrays.asList(1, 2, 3));
		long value = (Long) Whitebox.invokeMethod(systemUnderTest,
				"privateMethodUnderTest");
		assertEquals(6, value);
	}
}
```
