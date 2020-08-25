package org.zerock.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.zerock.common.CommonMethod;
import org.zerock.service.DashService;

import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j;

@Controller	//스프링의 빈으로 인식토록
@Log4j
@RequestMapping("/includes/*")
@AllArgsConstructor
public class TestController {
	private DashService service;  
	CommonMethod cm = new CommonMethod();
	
	@GetMapping("/DashBoard")
	public void list(Model model) {
		log.info("testboard");
	}
}
