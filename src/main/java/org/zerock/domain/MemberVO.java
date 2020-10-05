package org.zerock.domain;

import lombok.Data;

@Data
public class MemberVO {
	private String USERID;
	private String USERPW;
	private String USERNAME;
	private boolean ENABLED;
	
	private String TEAM;
}
