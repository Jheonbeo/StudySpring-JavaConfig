package org.zerock.mapper;

import java.util.HashMap;

import org.zerock.domain.MemberVO;

public interface MemberMapper {
	public MemberVO checkMember(HashMap<String, Object> map);
}
