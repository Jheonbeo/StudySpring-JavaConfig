package org.zerock.security;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;

import lombok.extern.log4j.Log4j;

@Log4j
public class CustomLoginSuccessHandler implements AuthenticationSuccessHandler {
	private static int TIME = 60 * 60; // 1시간
	
	@Override
	public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response,
			Authentication authentication) throws IOException, ServletException {
		// TODO Auto-generated method stub

		/*
		 * List<String> roleNames = new ArrayList<String>();
		 * 
		 * authentication.getAuthorities().forEach(authority -> {
		 * roleNames.add(authority.getAuthority()); });
		 * 
		 * log.warn("ROLE NAMES: " + roleNames); if(roleNames.contains("USER")) {
		 * response.sendRedirect("/includes/index"); } if(roleNames.contains("ADMIN")) {
		 * response.sendRedirect("/includes/index"); }
		 */
		request.getSession().setMaxInactiveInterval(TIME);
        SecurityContextHolder.getContext().setAuthentication(authentication);
        
		response.sendRedirect("/includes/index");
	}
}
