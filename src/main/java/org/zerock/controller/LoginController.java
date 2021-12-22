package org.zerock.controller;

import javax.servlet.http.HttpServletRequest;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller	//스프링의 빈으로 인식토록
@RequestMapping("/loginout/*")
public class LoginController {
	private Logger log = LogManager.getLogger(this.getClass());
	
	@PostMapping("/jssLogin")
	public String loginPost(HttpServletRequest request) {
		log.info("/loginout/jssLogin(Post)");
	    return "/loginout/jssLogin";
	}

	@GetMapping("/jssLogin")
	public String loginGet(HttpServletRequest request) {
		log.info("/loginout/jssLogin(Get)");
	    return "/loginout/jssLogin";
	}
	
	@GetMapping("/jssLogOut")
	public String logoutGet(HttpServletRequest request) {
		log.info("/loginout/jssLogOut(Get)");
	    return "/loginout/jssLogin";
	}

	@PostMapping("/jssLogOut")
	public String logoutPost(HttpServletRequest request) {
		log.info("/loginout/jssLogOut(Post)");
	    return "/loginout/jssLogin";
		 
	}
	
	@GetMapping("/successUrl")
	public String loginMain() {
		log.info("/loginout/successUrl(Get)");
		return "/includes/index";
	}
	
	@GetMapping("/accessError")
	public void accessDenied(Authentication auth ,Model model) {
		model.addAttribute("msg", "Access Denied");
	}
}
