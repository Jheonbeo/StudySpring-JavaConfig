package org.zerock.controller;

import java.security.Principal;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.security.authentication.AnonymousAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller	//스프링의 빈으로 인식토록
@RequestMapping("/includes/*")
public class IndexController {
	private Logger log = LogManager.getLogger(this.getClass());

	@GetMapping("/index")
	public String list(Principal principal, Model model) {
		log.info("/includes/index");
		Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

		if (authentication instanceof AnonymousAuthenticationToken) {
			return "/loginout/jssLogin";
		}
		
		return "/includes/index";
	}

	@GetMapping("/login")
	public String logout() {
		log.info("/includes/login");
		return "/loginout/jssLogin";
	}
}
