package org.zerock.controller;

import java.security.Principal;

import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j;

@Controller	//스프링의 빈으로 인식토록
@Log4j
@RequestMapping("/includes/*")
@AllArgsConstructor
public class IndexController {

	@GetMapping("/index")
	public String list(Authentication authentication, Principal principal, Model model) {
		log.info("index");
		if(authentication == null) {
			return "/loginout/jssLogin";
		}
		return "/includes/index";
	}
}
