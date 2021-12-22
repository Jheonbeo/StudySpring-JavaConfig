package org.zerock.service;

import java.util.ArrayList;
import java.util.HashMap;

import org.springframework.stereotype.Service;
import org.zerock.domain.InspectVO;
import org.zerock.mapper.InspectMapper;

import lombok.AllArgsConstructor;

@Service //비즈니스 영역을 담당하는 객체임을 표시
@AllArgsConstructor
public class InspectServiceImpl implements InspectService{
	private InspectMapper mapper;
	
	@SuppressWarnings("unchecked")
	@Override
	public ArrayList<InspectVO> getInspection(String array_data, String action) {
		// TODO Auto-generated method stub
		HashMap<String, Object> map = new HashMap<String, Object>();
		map.put("ARRAY_DATA", array_data);
		map.put("ACTION", action);
		mapper.getInpection(map);

		ArrayList<InspectVO> arr = (ArrayList<InspectVO>)map.get("resultCursor");
		return arr;
	}

}
