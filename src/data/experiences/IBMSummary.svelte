<ul>
    <li>- Ported internal disassembler to
        <a href="/#capstone">Capstone</a>, eliminating months of work required to
        add Z13, Z14 and POWER9 CPU instruction support</li>
    <li>- Integrated Lua scripting and C++ name demangling to disassembler to
        automate workflows and reduce debugging times</li>
    <li>- Dockerized Jenkins, Maven, Springboot, and other Java programs
        with Openj9 as the default JVM, improving start up times by up to 50%</li>
    <li>- Implemented CPU affinity detection to performance tests, allowing
        tests that previously required multiple machines to be ran consistently
        and predictably on a single machine</li>
</ul>
