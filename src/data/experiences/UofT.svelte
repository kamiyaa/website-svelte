<script>
const courses = [
    {
        title: "CSCA08 - Introduction to Computer Science I",
        description: `Using Python, students are introduced to
            the fundamental concepts of programming such as
            variables, conditional statements, loops, functions, lists, and dictionaries.`,
    },
    {
        title: "CSCA48 - Introduction to Computer Science II",
        description: `Students are introduced to more advanced
            programming concepts with C such as structs,
            linked data structures and recursion.`,
    },
    {
        title: "CSCB07 - Software Design",
        description: `Utilizing Java's Object-Oriented programming style,
            students are introduced to the concepts of good design and design patterns.`,
    },
    {
        title: "CSCB09 - Software Tools and System Design",
        description: `Using C, students are taught systems programming.
            Introducing concepts such as Makefiles, header files, pointers
            (and double pointers), file I/O, processes (fork), pipes and sockets.`,
    },
    {
        title: "CSCB63 - Design and Analysis of Data Structures",
        description: `Students learn design, analysis, implementation
            and comparison of efficient data structures for common abstract data types.`,
    },
    {
        title: "CSCC24 - Principles of Programming Languages",
        description: `Students learn to understand different
            programming paradigms and study concepts that appear in design
            and implementation of programming languages.`,
    }
];
</script>

<div>
    <p>Courses taught:</p>
    <ul>
        {#each courses as course}
            <li><b>{course.title}</b>
            <br>
            {course.description}
            </li>
        {/each}
    </ul>
</div>
