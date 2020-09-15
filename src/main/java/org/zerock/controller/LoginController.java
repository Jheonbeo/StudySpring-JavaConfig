package org.zerock.controller;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j;

@Controller	//스프링의 빈으로 인식토록
@Log4j
@RequestMapping("/loginout/*")
@AllArgsConstructor
public class LoginController {
    @Autowired

	@GetMapping("/jssLogin")
	public String login(HttpServletRequest request) {
		log.info("login");
        
	    return "/loginout/jssLogin";
	}

	@PostMapping("/jssLogOut")
	public void logout(HttpServletRequest request) {
		log.info("logout");
	}
	
	@GetMapping("/successUrl")
	public String loginMain() {
		log.info("loginSuccess");
		return "/includes/index";
	}
	
	@GetMapping("/accessError")
	public void accessDenied(Authentication auth ,Model model) {
		log.info("access Denied : " + auth);
		model.addAttribute("msg", "Access Denied");
	}
}
