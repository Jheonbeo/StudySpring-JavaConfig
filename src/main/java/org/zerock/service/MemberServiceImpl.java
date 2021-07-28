package org.zerock.service;

import java.util.ArrayList;
import java.util.HashMap;

import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;
import org.zerock.domain.MemberVO;
import org.zerock.mapper.MemberMapper;

import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j;

@Log4j
@Service //비즈니스 영역을 담당하는 객체임을 표시
@Repository
@AllArgsConstructor
public class MemberServiceImpl implements MemberService{
	private MemberMapper mapper;

	@SuppressWarnings("unchecked")
	@Override
	public MemberVO checkMember(String array_data, String action) {
		// TODO Auto-generated method stub
		log.info("Service : checkMember");
		
		array_data = "USERID:jheonbeo,USERPW:Tktno1,";
		HashMap<String, Object> map = new HashMap<String, Object>();
		map.put("ARRAY_DATA", array_data);
		map.put("ACTION", action);
		mapper.checkMember(map);
		log.info("PM_WEB_GET_MEMBER");

		MemberVO data = null;
		for(MemberVO result : (ArrayList<MemberVO>)map.get("resultCursor")) {
			data = result;
		}
		return data;
	}
}
