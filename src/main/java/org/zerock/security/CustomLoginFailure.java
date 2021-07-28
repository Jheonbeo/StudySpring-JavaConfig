package org.zerock.security;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.security.authentication.AuthenticationServiceException;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.AuthenticationFailureHandler;

import lombok.Data;

@Data
public class CustomLoginFailure implements AuthenticationFailureHandler{
    private String errormsgname;
    
	@Override
	public void onAuthenticationFailure(HttpServletRequest request, HttpServletResponse response,
			AuthenticationException exception) throws IOException, ServletException {
		// TODO Auto-generated method stub

		if (exception instanceof AuthenticationServiceException) {
			request.setAttribute("loginFailMsg", "존재하지 않는 사용자입니다.");
		} else if(exception instanceof BadCredentialsException) {
			request.setAttribute("loginFailMsg", "아이디 또는 비밀번호가 틀립니다.");
		} else if(exception instanceof DisabledException) {
			request.setAttribute("loginFailMsg", "비활성화된 계정입니다.");
		} /* else if(exception instanceof LockedException) {
			request.setAttribute("loginFailMsg", "잠긴 계정입니다.");
		} else if(exception instanceof CredentialsExpiredException) {
			request.setAttribute("loginFailMsg", "비밀번호가 만료되었습니다.");
		}*/
		
		// 로그인 페이지로 다시 포워딩
        request.getRequestDispatcher("/loginout/jssLogin").forward(request, response);
	}

}