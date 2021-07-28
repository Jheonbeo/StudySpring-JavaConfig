package org.zerock.controller;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
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
	@PostMapping("/jssLogin")
	public String loginPost(HttpServletRequest request) {
		log.info("loginPost");
		
	    return "/loginout/jssLogin";
	}

	@GetMapping("/jssLogin")
	public String loginGet(HttpServletRequest request) {
		log.info("loginGet");
		
	    return "/loginout/jssLogin";
	}
	
	@GetMapping("/jssLogOut")
	public String logoutGet(HttpServletRequest request) {
		log.info("get logout");
	    return "/loginout/jssLogin";
	}

	@PostMapping("/jssLogOut")
	public String logoutPost(HttpServletRequest request) {
		log.info("post logout");
	    return "/loginout/jssLogin";
		
		/*
		 * SecurityContextHolder.clearContext(); HttpSession session=
		 * request.getSession(false); if(session != null) { session.invalidate(); }
		 * for(Cookie cookie : request.getCookies()) { cookie.setMaxAge(0); }
		 */
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
