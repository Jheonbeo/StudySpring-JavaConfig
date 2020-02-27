package org.zerock.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j;

@Controller	//스프링의 빈으로 인식토록
@Log4j
@RequestMapping("/dashboard/*")	//item으로 시작하는 모든 처리는 이 클래스에서 
@AllArgsConstructor
public class DashBoardController {

	@GetMapping("/index")
	public void list(Model model) {
		log.info("index");
	}
}
