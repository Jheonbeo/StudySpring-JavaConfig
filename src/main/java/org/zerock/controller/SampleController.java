package org.zerock.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import lombok.extern.log4j.Log4j;

@Controller
@RequestMapping("/sample/*")
@Log4j	//pom.xml lombok 의존성 주입시 runtime 옵션 넣지 말것! Test는 몰라도 Main에선 라이브러리를 인식못함.
public class SampleController {
	@RequestMapping("")
	public void basic() {
		log.info("basic.................");
	}
}
