package org.zerock.controller;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller	//스프링의 빈으로 인식토록
@RequestMapping("/*")
public class DevelopController {
	private Logger log = LogManager.getLogger(this.getClass());
	
	@GetMapping("/developPage")
	public void list(Model model) {
		log.info("/developPage/developPage");
	}
	
}
