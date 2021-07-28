package org.zerock.security;

import java.util.ArrayList;
import java.util.HashMap;

import javax.annotation.Resource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.zerock.domain.MemberVO;
import org.zerock.mapper.MemberMapper;

import lombok.RequiredArgsConstructor;
import lombok.Setter;

@RequiredArgsConstructor
public class CustomAuthenticationProvider implements AuthenticationProvider {
	@Setter(onMethod_ = {@Autowired}) 
	private MemberMapper memberMapper;

    @Resource(name = "userDetailsService")
    private UserDetailsService userDetailsService;
	
	@SuppressWarnings({ "unchecked"})
	@Override
    public Authentication authenticate(Authentication authentication) throws AuthenticationException {
        String userId = authentication.getName();
        String userPw = authentication.getCredentials().toString();
        
        MemberVO memberVO = (MemberVO) userDetailsService.loadUserByUsername(userId);

		if(!memberVO.isEnabled())
			throw new DisabledException(memberVO.getUsername() + " disabled");
		
		HashMap<String, Object> map = new HashMap<String, Object>();
		map.put("ARRAY_DATA", "USERPW:" + userPw + ",");
		map.put("ACTION", "GET PASSWORD");
		memberMapper.checkPassword(map);

		MemberVO encryptPw = null;
		for(MemberVO result : (ArrayList<MemberVO>)map.get("resultCursor")) {
			encryptPw = result;
		}
		
		// 비밀번호 조회
		if(encryptPw == null || !encryptPw.getPassword().equals(memberVO.getUserpw()))
			throw new BadCredentialsException(memberVO.getUsername() + " invalid password");
		
		UsernamePasswordAuthenticationToken result = new UsernamePasswordAuthenticationToken(memberVO, null, memberVO.getAuthorities()); 
		result.setDetails(authentication.getDetails()); 
		return result;
    }

    @Override
    public boolean supports(Class<?> authentication) {
    	return UsernamePasswordAuthenticationToken.class.isAssignableFrom(authentication);
        //return authentication.equals(UsernamePasswordAuthenticationToken.class);
    }

}