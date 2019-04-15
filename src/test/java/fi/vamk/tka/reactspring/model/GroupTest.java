package fi.vamk.tka.reactspring.model;

import static org.junit.Assert.assertEquals;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest
@EnableJpaRepositories(basePackageClasses = GroupRepository.class)
public class GroupTest {
    @Autowired
    private GroupRepository repo;

    @Test
    public void firstTest() {
        System.out.println("testingggggggggg");
    }

    @Test
    public void secondTest() {
        System.out.println("testingggggggggg againnnnnnnnnnnnnnnnn");
    }

    @Test
    public void addGroupThenVerifyTest() {
        Group group = new Group();
        group.setName("Test JUG");
        // add instance of GroupRepo to save it to
        repo.save(group);
        // get the saved group from repo by findbyName
        Group found = repo.findByName("Test JUG");
        // check if the user group is added

        assertEquals(group.getName(), found.getName());
        repo.delete(found);
    }
}