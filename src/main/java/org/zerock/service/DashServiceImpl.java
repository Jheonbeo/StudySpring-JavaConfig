package org.zerock.service;

import java.util.ArrayList;
import java.util.HashMap;

import org.springframework.stereotype.Service;
import org.zerock.domain.DashVO;
import org.zerock.mapper.DashMapper;

import lombok.AllArgsConstructor;

@Service //비즈니스 영역을 담당하는 객체임을 표시
@AllArgsConstructor
public class DashServiceImpl  implements DashService{
	private DashMapper mapper;

	@SuppressWarnings("unchecked")
	@Override
	public DashVO getTotalProd(String array_data, String action) {
		// TODO Auto-generated method stub
		HashMap<String, Object> map = new HashMap<String, Object>();
		map.put("ARRAY_DATA", array_data);
		map.put("ACTION", action);
		mapper.getInit(map);

		DashVO data = null;
		for(DashVO result : (ArrayList<DashVO>)map.get("resultCursor")) {
			data = result;
		}
		return data;
	}

	@SuppressWarnings("unchecked")
	@Override
	public ArrayList<DashVO> getLineUPH(String array_data, String action) {
		// TODO Auto-generated method stub
		HashMap<String, Object> map = new HashMap<String, Object>();
		map.put("ARRAY_DATA", array_data);
		map.put("ACTION", action);
		mapper.getInit(map);

		ArrayList<DashVO> arr = (ArrayList<DashVO>)map.get("resultCursor");
		return arr;
	}
}
