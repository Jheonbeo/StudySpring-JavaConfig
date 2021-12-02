package org.zerock.controller;

import java.security.Principal;

import org.springframework.security.authentication.AnonymousAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
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
	public String list(Principal principal, Model model) {
		log.info("index");
		
		Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

		if (!(authentication instanceof AnonymousAuthenticationToken)) {
		    String currentUserName = authentication.getName();
			log.info(currentUserName);
		}else {
			return "/loginout/jssLogin";
		}
		
		return "/includes/index";
	}

	@GetMapping("/login")
	public String logout() {
		log.info("logout");
		
		return "/loginout/jssLogin";
	}
}
