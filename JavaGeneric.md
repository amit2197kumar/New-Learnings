# Java Generic

[Java: Generic Classes](https://www.linkedin.com/learning/java-generic-classes/welcome?u=26886434)

[Java Generics Example Tutorial – Generic Method, Class, Interface](https://www.journaldev.com/1663/java-generics-example-method-class-interface#java-generics-bounded-type-parameters)

# Before and after Java 5.0

```java
package com.example.Generics;

import java.util.ArrayList;
import java.util.Date;

public class Examples {
    public static void main(String[] args) {
        // prior to Java 5.0
        Comparable c = new Date();
        System.out.println(c.compareTo("Monday"));
        /*
         Above line: comparing a date type object with string
         No compile time error
         We get a run time error :  java.lang.String cannot be cast to java.util.Date
        */

        // post Java 5.0
        Comparable<Date> c2 = new Date();
        System.out.println(c2.compareTo("Monday"));
        /*
        Above line: gets an compile time error, as we have told Comparable that generic type is <Date>
        */

        // prior to Java 5.0
        ArrayList a = new ArrayList();
        a.add(15);
        a.add("15");
        Integer b = (Integer)a.get(1);
        /*
         Above-1 line: Adding Integer and String in same ArrayList
         No compile time error
         Above line: We need to cast while retrieving values from ArrayList
         We get a run time error :  java.lang.String cannot be cast to java.lang.Integer
        */

        // post Java 5.0
        ArrayList<Integer> a = new ArrayList<>();
        a.add(15);
        a.add("15");
        Integer b = a.get(0);
        /*
        Above-1 line: Compile time error
        Above line: Compile time error
        */
    }
}
```

[Type Erasure in Java](https://medium.com/javarevisited/type-erasure-in-java-a07b1ffe4d6e)

[Type Erasure in Java Explained](https://www.baeldung.com/java-type-erasure)

# Generic Example:

[Java Generics Tutorial](https://youtu.be/h7piyWnQbZA)

```java
package com.example.Generics;

import java.util.HashMap;
import java.util.Map;

public class General<T,Q> {
    T first;
    Q second;
    Map<T,Q> map;

    General(T first, Q second) {
        this.first = first;
        this.second = second;
        map = new HashMap<T,Q>();
    }

    public void putInMap(T key, Q value) {
        map.put(key, value);
    }

    public Q getFromMap(T key) {
        return map.get(key);
    }

    public void printValues() {
        System.out.println("T: " + first.getClass().getName() + " & " + "Q: " + second.getClass().getName());
        System.out.println("T: " + first + " & " + "Q: " + second);
    }
}
```

```java
package com.example.Generics;

public class Main {
    public static void main(String[] args) {
        General<String, Integer> one = new General<>("one", 1);
        General<String, Integer> two = new General<>("two", 2);

        one.printValues();

        two.printValues();

        one.putInMap("three", 3);
        one.putInMap("four", 4);

        System.out.println(one.getFromMap("three"));
        System.out.println(one.getFromMap("four"));
        System.out.println(one.getFromMap("five"));
    }
}

/**************************** OUTPUT **************************************
 T: java.lang.String & Q: java.lang.Integer
 T: one & Q: 1

 T: java.lang.String & Q: java.lang.Integer
 T: two & Q: 2

 3
 4
 null
 ***************************** OUTPUT *************************************/
```

# Generic Methord Examples

```java
package com.example.Generics;

public class Examples {
    public static void main(String[] args) {
        Integer[] ints = {10, 20, 30, 40, 50, 60, 70, 80};
        String[] daysOfWeek = {"Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"};

        print(ints);
        print(daysOfWeek);
        System.out.println(countGreaterThan(daysOfWeek,"S"));
    }

    public static <E> void print(E[] list) {
        for(E element:list) {
            System.out.print(element+" ");
        }
        System.out.println("");
    }

    /*
    IMPORTANT:
    We need to use <T extends Comparable<T>> in-place of <T>

    If the body of my method includes logic to compare two objects, depending on the object type,
    it might be necessary to also use the comparable interface
    */
    public static <T extends Comparable<T>> int countGreaterThan(T[] list, T elem) {
        int count = 0;
        for(T element:list) {
            if(element.compareTo(elem) > 0)
                count++;
        }
        return count;
    }
}

/**************************** OUTPUT **************************************
 10 20 30 40 50 60 70 80 
 Monday Tuesday Wednesday Thursday Friday Saturday Sunday 
 5
 ***************************** OUTPUT *************************************/
```

# Generic Interface

[Java Generic Interface](https://www.journaldev.com/1663/java-generics-example-method-class-interface#java-generic-interface)

```java
public interface GenericInterface<T> {
    public void add(T t);
}

public class GenericList<T> implements GenericInterface<T>{
    public T myList;
    @Override
    public void add(T t) {
        myList = t;
    }
}

public class GenericInterfaceExample {
    public static void main(String[] args) {
        GenericList<String> list = new GenericList<>();
        list.add("Hello World!");
    }
}
```

# Bounded Generics

[Bounded types with generics in Java](https://www.geeksforgeeks.org/bounded-types-generics-java/)

[Generics in java # 3 - Bounded Type Parameters & Multiple Type parameters | Java9s](https://www.youtube.com/watch?v=wTHH_2QIiIA)

Example:

```java
package com.example.Generics;

public class BoundedTypeExample {

    public interface Liquid { }

    public static class Water implements Liquid {}
    public static class Petrol implements Liquid {}
    public static class Ice {}
    public static class Curd {}

    public static class Glass<T extends Liquid> {
        private T fillGlass;
    }

    public static void main(String[] args) {
        // VALID
        Glass<Water> waterGlass = new Glass<>();
        Glass<Petrol> petrolGlass = new Glass<>();

        // IN-VALID
        Glass<Ice> iceGlass = new Glass<>();
        /*
        Compile Time Error:
        Type parameter 'com.example.Generics.BoundedTypeExample.Ice' is not within its bound;
        should implement 'com.example.Generics.BoundedTypeExample.Liquid'
        */

        Glass<Curd> liquidGlass = new Glass<>();
        /*
        Compile Time Error:
        Type parameter 'com.example.Generics.BoundedTypeExample.Curd' is not within its bound;
        should implement 'com.example.Generics.BoundedTypeExample.Liquid'
        */
    }
}
```
