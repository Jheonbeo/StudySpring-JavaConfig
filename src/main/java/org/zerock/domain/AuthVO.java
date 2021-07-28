package org.zerock.domain;

import org.springframework.security.core.GrantedAuthority;

import lombok.Data;

@Data
public class AuthVO implements GrantedAuthority{
	private static final long serialVersionUID = 1L;
	private String userid;
	private String auth;
	
	@Override
	public String getAuthority() {
		// TODO Auto-generated method stub
		return this.auth;
	}
}
