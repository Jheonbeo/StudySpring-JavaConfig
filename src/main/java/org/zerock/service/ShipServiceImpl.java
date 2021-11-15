package org.zerock.service;

import java.util.ArrayList;
import java.util.HashMap;

import org.springframework.stereotype.Service;
import org.zerock.domain.IdenVO;
import org.zerock.mapper.ShipMapper;

import lombok.AllArgsConstructor;

@Service //비즈니스 영역을 담당하는 객체임을 표시
@AllArgsConstructor
public class ShipServiceImpl implements ShipService{
	private ShipMapper mapper;

	@SuppressWarnings("unchecked")
	@Override
	public IdenVO getIdenInfo(String array_data, String action) {
		// TODO Auto-generated method stub
		HashMap<String, Object> map = new HashMap<String, Object>();
		map.put("ARRAY_DATA", array_data);
		map.put("ACTION", action);
		mapper.getIdenInfo(map);
		
		IdenVO data = null;
		for(IdenVO result : (ArrayList<IdenVO>)map.get("resultCursor")) {
			data = result;
		}
		return data;
	}

	@SuppressWarnings("unchecked")
	@Override
	public IdenVO setIdenInfo(String array_data, String action) {
		// TODO Auto-generated method stub
		HashMap<String, Object> map = new HashMap<String, Object>();
		map.put("ARRAY_DATA", array_data);
		map.put("ACTION", action);
		mapper.setIdenInfo(map);
		
		IdenVO data = null;
		for(IdenVO result : (ArrayList<IdenVO>)map.get("resultCursor")) {
			data = result;
		}
		
		return data;
	}
}
