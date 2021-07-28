package org.zerock.test;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringRunner;
import org.zerock.domain.MemberVO;
import org.zerock.service.MemberService;

import lombok.extern.log4j.Log4j;

@RunWith(SpringRunner.class)
@ContextConfiguration(classes = {org.zerock.config.RootConfig.class})
@Log4j
public class MemberMapperTests {
	private MemberService service; 
	
	@Test
	public void testRead() {
		MemberVO vo = service.checkMember("", "GET MEMBER");
		
		log.info(vo);
	}
}
