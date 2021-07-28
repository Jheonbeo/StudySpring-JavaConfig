package org.zerock.domain;

import java.util.Collection;
import java.util.List;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import lombok.Data;

@Data
public class MemberVO implements UserDetails{
	private static final long serialVersionUID = 1L;
	private String userid;
	private String userpw;
	private String userName;
	private boolean enable;
	
	private List<AuthVO> authList;
	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		// TODO Auto-generated method stub
		return authList;
	}
	@Override
	public String getPassword() {
		// TODO Auto-generated method stub
		return this.getUserpw();
	}
	@Override
	public String getUsername() {
		// TODO Auto-generated method stub
		return this.getUserid();
	}
	@Override
	public boolean isAccountNonExpired() {
		// TODO Auto-generated method stub
		return true;
	}
	@Override
	public boolean isAccountNonLocked() {
		// TODO Auto-generated method stub
		return true;
	}
	@Override
	public boolean isCredentialsNonExpired() {
		// TODO Auto-generated method stub
		return true;
	}
	@Override
	public boolean isEnabled() {
		// TODO Auto-generated method stub
		return this.enable;
	}
}
