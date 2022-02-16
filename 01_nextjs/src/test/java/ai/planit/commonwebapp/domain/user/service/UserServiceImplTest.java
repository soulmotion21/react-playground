package ai.planit.commonwebapp.domain.user.service;

import ai.planit.commonwebapp.domain.user.dto.UserDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest
class UserServiceImplTest {
    @Autowired
    private UserService userService;
//    @Test
    void findById() {
        UserDto.Base rick = userService.findBaseById("rick").orElseThrow();
        assertThat(rick.getUserName()).isEqualTo("김명훈");
    }
}
