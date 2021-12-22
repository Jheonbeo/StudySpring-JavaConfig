package org.zerock.service;

import java.util.ArrayList;
import java.util.HashMap;

import org.springframework.security.authentication.AuthenticationServiceException;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Service;
import org.zerock.domain.MemberVO;
import org.zerock.mapper.MemberMapper;

import lombok.AllArgsConstructor;

@AllArgsConstructor
@Service("userDetailsService")
public class UserDetailsServiceImpl implements UserDetailsService {

	private MemberMapper memberMapper;

    @SuppressWarnings("unchecked")
	@Override
    public MemberVO loadUserByUsername(String userId) {
		HashMap<String, Object> map = new HashMap<String, Object>();
		map.put("ARRAY_DATA", "USERID:" + userId + ",");
		map.put("ACTION", "GET MEMBER");
		memberMapper.checkMember(map);
		MemberVO user = null;
		for(MemberVO result : (ArrayList<MemberVO>)map.get("resultCursor")) {
			user = result;
		}
		
		if(user != null){
            return user;
        } 
        throw new AuthenticationServiceException("User not exist with name :" + userId);
    }
}
